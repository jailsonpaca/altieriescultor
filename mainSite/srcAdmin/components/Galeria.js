import React, { useState, useCallback } from 'react';
import {List,Edit, Datagrid, TextField, ImageField,BooleanField, Create, SimpleForm, TextInput, BooleanInput, Toolbar, SaveButton, useCreate, useRedirect, useNotify,useUpdate } from 'react-admin';
import UrlGaleria from './UrlGaleria';
import UrlGaleriaEdit from './UrlGaleriaEdit';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { storage } from "./firebaseLoad";

async function urlToFile(url) {
    return fetch(url).then(r => r.blob());
}

const validateGaleria = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['É necessário preencher o nome'];
    }
    return errors;
};

export const ListGaleria=(props)=>{
    console.log(props);
    return(
    <List {...props} title="Galeria">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="Nome"/>
            <ImageField source="imgsmall" label="Capa"/>
            <UrlGaleria source="imgs" label="Imagens"/> 
            <BooleanField source="published" label="Publicado"/>
        </Datagrid>
    </List>
)};


export const EditGaleria=(props)=> {
    const [message, setMessage] = useState('');
    const [openMessage, setOpenMessage] = useState(false);
    const [success, setSuccess] = useState(false);
    const [imgs, setImgs] = useState([]);
    const [imgsmall, setImgsmall] = useState('');
    const [removedImgs, setRemovedImgs] = useState([]);
    console.log(props);
    function validateImages(value) {
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("IMAGENS VALIDADAS");
            setImgs(value);
        } else {
            setMessage('Insira alguma imagem no Post!');
            setOpenMessage(true);
        }
    }

    function removeImg(src) {
        let ar = removedImgs;
        ar.push(src);
        setRemovedImgs(ar);
    }

    function removeFromDB(srcs) {

        if (Array.isArray(srcs)) {
            srcs.forEach((src) => {
                if(src.search('blob:') === -1){
                let source = storage.refFromURL(src);
                source.delete().then(() => {
                    setMessage('Delete Success!');
                    setSuccess(true);
                    setOpenMessage(true);
                }, (err) => {
                    setMessage('Delete error: ' + err);
                    setSuccess(false);
                    setOpenMessage(true);
                });
                 }
            });
        } else if (typeof srcs !== 'undefined' && srcs.search('blob:') === -1) {
            console.log(srcs);
            let source = storage.refFromURL(srcs);
            source.delete().then(() => {
                setMessage('Delete Success!');
                setSuccess(true);
                setOpenMessage(true);
            }, (err) => {
                setMessage('Delete error: ' + err);
                setSuccess(false);
                setOpenMessage(true);
            });

        }
    }
    const SaveWithImagesButton = (props) => {
        const [update] = useUpdate('galeria');
        const redirectTo = useRedirect();
        const notify = useNotify();
        const { basePath } = props;

        const handleSave = useCallback(
            async function (values, redirect) {
                removeFromDB(removedImgs); 
                var imgsmall = values.imgsmall;
                console.log(imgsmall);
                if(imgsmall === undefined || imgsmall===''){
                    console.log('ttttt');
                   imgsmall=props.imgsmall;
                } 
                var imgs = props.imgs;
                if(imgs.length===0){
                    imgs=values.imgs;
                } 
                console.log(imgs);
                var id = values.id;
                var name = values.name;
                var small = await urlToFile(imgsmall);
                var ar = { imgs: imgs,imgsmall: imgsmall }, index = 0;
                if (imgsmall.search('blob:') === 0) {
                    console.log("tese 1");
                    const uploadTask = storage.ref(`/galeria/${id}/imgsmall/${name}`)
                        .put(small);
                    uploadTask.on('state_changed', function (snapshot) {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done for imgsmall');
                        setMessage('Upload is ' + progress + '% done for imgsmall');
                        setSuccess(true);
                        setOpenMessage(true);
                    }, function (error) {
                        setMessage('Upload error: ' + error + ' for imgsmall');
                        setSuccess(false);
                        setOpenMessage(true);
                    }, function () {
                        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                            console.log('File available at', downloadURL);
                            ar.imgsmall = downloadURL;
                            var index = 0,isEnter=0;
                            imgs.forEach(async (e, i) => { 
                                if (e.search('blob:') === 0) { isEnter++;
                                    var img = await urlToFile(e);
                                    var uploadTask2 = storage.ref(`/galeria/${id}/imgs/${name}-${i}`)
                                        .put(img);
                                    uploadTask2.on('state_changed', function (snapshot) {
                                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                        console.log('Upload is ' + progress + '% done for imgs');
                                        setMessage('Upload is ' + progress + '% done for imgs');
                                        setSuccess(true);
                                        setOpenMessage(true);
                                    }, function (error) {
                                        setMessage('Upload error: ' + error + ' for imgs');
                                        setSuccess(false);
                                        setOpenMessage(true);
                                    }, function () {
                                        uploadTask2.snapshot.ref.getDownloadURL().then(function (downloadURL2) {
                                            console.log('File available at', downloadURL2);
                                            ar.imgs.push({src: downloadURL2,title:e.title});
                                            if (index === imgs.length - 1) {
                                                if (ar != null) {
                                                    console.log(ar);
                                                    update(
                                                        {
                                                            payload: { id: id, data: { ...values, imgs: ar.imgs, imgsmall: ar.imgsmall } },
                                                        },
                                                        {
                                                            onSuccess: ({ data: newRecord }) => {
                                                                notify('ra.notification.updated', 'info', {
                                                                    smart_count: 1,
                                                                });
                                                                redirectTo(redirect, basePath, newRecord.id, newRecord);
                                                            },
                                                        }
                                                    );
                                                }
                                            }

                                        });
                                    });
                                } index++;
                            }); console.log(isEnter); if(isEnter===0){
                                if (ar != null) {
                                    console.log(ar);
                                    update(
                                        {
                                            payload: { id: id, data: { ...values, imgs: ar.imgs, imgsmall: ar.imgsmall } },
                                        },
                                        {
                                            onSuccess: ({ data: newRecord }) => {
                                                notify('ra.notification.updated', 'info', {
                                                    smart_count: 1,
                                                });
                                                redirectTo(redirect, basePath, newRecord.id, newRecord);
                                            },
                                        }
                                    );
                                }
                            }

                        });
                    });
                } else {
                    imgs.forEach(async (e, i) => {
                        console.log(e.search('blob:'));
                        if (e.search('blob:') === 0) {
                            var img = await urlToFile(e);
                            var uploadTask2 = storage.ref(`/galeria/${id}/imgs/${name}-${i}`)
                                .put(img);
                            uploadTask2.on('state_changed', function (snapshot) {
                                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                console.log('Upload is ' + progress + '% done for imgs');
                                setMessage('Upload is ' + progress + '% done for imgs');
                                setSuccess(true);
                                setOpenMessage(true);
                            }, function (error) {
                                setMessage('Upload error: ' + error + ' for imgs');
                                setSuccess(false);
                                setOpenMessage(true);
                            }, function () {
                                uploadTask2.snapshot.ref.getDownloadURL().then(function (downloadURL2) {
                                    console.log('File available at', downloadURL2);
                                    ar.imgs.push({src:downloadURL2,title:e.title});
                                    console.log(imgs.length);
                                    console.log(index);
                                    if (index === imgs.length - 1) {
                                        if (ar != null) {
                                            console.log(ar);
                                            ar.imgs = ar.imgs.filter((e) => { return e.src.search('blob:') === -1 });
                                            update(
                                                {
                                                    payload: { id: id, data: { ...values, imgs: ar.imgs } },
                                                },
                                                {
                                                    onSuccess: ({ data: newRecord }) => {
                                                        notify('ra.notification.updated', 'info', {
                                                            smart_count: 1,
                                                        });
                                                        redirectTo(redirect, basePath, newRecord.id, newRecord);
                                                    },
                                                }
                                            );
                                        }
                                    }

                                });
                            });
                        } index++;
                    }); console.log(index); if(index===0){
                        if (ar != null) {
                            console.log(ar);
                            update(
                                {
                                    payload: { id: id, data: { ...values, imgs: ar.imgs, imgsmall: ar.imgsmall } },
                                },
                                {
                                    onSuccess: ({ data: newRecord }) => {
                                        notify('ra.notification.updated', 'info', {
                                            smart_count: 1,
                                        });
                                        redirectTo(redirect, basePath, newRecord.id, newRecord);
                                    },
                                }
                            );
                        }
                    }
                }
            },[update, notify, redirectTo, basePath, props.imgs,props.imgsmall]
        );
        return <SaveButton {...props} onSave={handleSave} />;
    };

    const GaleriaEditToolbar = (props) => (
        <Toolbar {...props} >
            <SaveWithImagesButton imgs={imgs} imgsmall={imgsmall}/>
        </Toolbar>
    );
    function setImgSmallState(e) {
        setImgsmall(e);
    }
    function setImgsState(e) {
        setImgs(e);
    }

    function validateSmallImage(value) {
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("IMAGEM VALIDADA");
            setImgsmall(value[0]);
        } else {
            setMessage('É necessário uma imagem de capa!');
            setOpenMessage(true);
        }
    }

    return (
        <Edit {...props}>
            <SimpleForm toolbar={<GaleriaEditToolbar imgs={imgs} />}>
                <TextInput disabled source="id" />
                <TextInput source="name" label="Nome"/>
                <UrlGaleriaEdit validate={validateSmallImage} setImgState={setImgSmallState} removeImage={removeImg} source="imgsmall" acceptMultiple={false} label="Capa" placeholder="Arraste a imagem até aqui ou" />
                <UrlGaleriaEdit validate={validateImages} setImgState={setImgsState} removeImage={removeImg} source="imgs" acceptMultiple={true} label="Imagens" placeholder="Arraste as imagens até aqui ou" />
                <BooleanInput source="published" />
                <Snackbar open={openMessage} autoHideDuration={3000} >
                    <Alert severity={!success ? ("error") : ("success")}>
                        {message}
                    </Alert>
                </Snackbar>
            </SimpleForm>
        </Edit>
    )
};


export const CreateGaleria=(props)=> {

    const [message, setMessage] = useState('');
    const [openMessage, setOpenMessage] = useState(false);
    const [success, setSuccess] = useState(false);
    const [imgs, setImgs] = useState([]);
    const [imgsmall, setImgsmall] = useState('');

    var makeID = function (toSet) {
        var newId = Math.random().toString(36).substr(2, 9);
        return newId;
    };

    const SaveWithImagesButton = (props) => {
        const [create] = useCreate('galeria');
        const redirectTo = useRedirect();
        const notify = useNotify();
        const { basePath } = props;

        const handleSave = useCallback(
            async function (values, redirect) {
                console.log(values);
                console.log(props.imgs);
                var imgs = props.imgs;
                var name = values.name;
                var id = values.id;
                var titles = [];
                var small = await urlToFile(props.imgsmall);
                var ar = { imgs: [],imgsmall:'' }, index = 0;
                const uploadTask = storage.ref(`/galeria/${id}/imgsmall/${name}`)
                    .put(small);
                uploadTask.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done for imgsmall');
                    setMessage('Upload is ' + progress + '% done for imgsmall');
                    setSuccess(true);
                    setOpenMessage(true);
                }, function (error) {
                    setMessage('Upload error: ' + error + ' for imgsmall');
                    setSuccess(false);
                    setOpenMessage(true);
                }, function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        console.log('File available at', downloadURL);
                        ar.imgsmall = downloadURL;
                imgs.forEach(async (e, i) => {
                    var img = await urlToFile(e.src);
                    titles.push(e.title);
                    var uploadTask2 = storage.ref(`/galeria/${id}/imgs/${name}-${i}`)
                        .put(img);
                    uploadTask2.on('state_changed', function (snapshot) {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done for imgs');
                        setMessage('Upload is ' + progress + '% done for imgs');
                        setSuccess(true);
                        setOpenMessage(true);
                    }, function (error) {
                        setMessage('Upload error: ' + error + ' for imgs');
                        setSuccess(false);
                        setOpenMessage(true);
                    }, function () {
                        uploadTask2.snapshot.ref.getDownloadURL().then(function (downloadURL2) {
                            console.log('File available at', downloadURL2);
                            ar.imgs.push({ src: downloadURL2, title: e.title });
                            console.log(imgs.length);
                            if (index === imgs.length - 1) {
                                if (ar != null) {
                                    console.log(ar);
                                    create(
                                        {
                                            payload: { data: { ...values, imgs: ar.imgs } },
                                        },
                                        {
                                            onSuccess: ({ data: newRecord }) => {
                                                notify('ra.notification.created', 'info', {
                                                    smart_count: 1,
                                                });
                                                redirectTo(redirect, basePath, newRecord.id, newRecord);
                                            },
                                        }
                                    );
                                }
                            }

                        });
                    }); index++;
                });});});
            }, [create, notify, redirectTo, basePath, props.imgs,props.imgsmall]
        );
        return <SaveButton {...props} onSave={handleSave} />;
    };

    const GaleriaEditToolbar = (props) => (
        <Toolbar {...props} >
            <SaveWithImagesButton imgs={imgs} imgsmall={imgsmall}/>
        </Toolbar>
    );

    function validateImages(value) {
        if (typeof value !== 'undefined') {
            console.log("IMAGENS VALIDADAS");
            setImgs(value);
        } else {
            setMessage('Insira alguma imagem no Post!');
            setOpenMessage(true);
        }
    }

    function validateSmallImage(value) {
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("IMAGEM VALIDADA");

            setImgsmall(value[0]);

        } else {
            setMessage('É necessário uma imagem de capa!');
            setOpenMessage(true);


        }
    }
    return (
        <Create {...props}>
            <SimpleForm validate={validateGaleria} toolbar={<GaleriaEditToolbar imgs={imgs} />}>
                <TextInput disabled source="id" defaultValue={React.useMemo(() => makeID(true), [])} />
                <TextInput source="name" label="Nome" />
                <UrlGaleriaEdit validate={validateSmallImage} source="imgsmall" acceptMultiple={false} label="Capa" placeholder="Arraste a imagem até aqui ou" />
                <UrlGaleriaEdit validate={validateImages} source="imgs" acceptMultiple={true} label="Imagens" placeholder="Arraste as imagens até aqui ou" />
                <BooleanInput source="published" label="Público" defaultValue={false} />
                <Snackbar open={openMessage} autoHideDuration={3000} >
                    <Alert severity={!success ? ("error") : ("success")}>
                        {message}
                    </Alert>
                </Snackbar>
            </SimpleForm>
        </Create>
    )
};