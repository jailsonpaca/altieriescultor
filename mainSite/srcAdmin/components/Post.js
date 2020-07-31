import React, { useState, useCallback } from 'react';
import { List,Edit, Datagrid, TextField, ImageField,DateField,BooleanField,Filter,Create, SimpleForm, TextInput, DateInput, BooleanInput, Toolbar, SaveButton, useCreate, useRedirect, useNotify,useUpdate } from 'react-admin';
import UrlPost from './UrlPost';
import UrlPostEdit from './UrlPostEdit';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { storage } from "./firebaseLoad";

async function urlToFile(url) {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    return fetch(url).then(r => r.blob());
}

const validatePost = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = ['É necessário preencher o título'];
    }
    if (!values.content) {
        errors.content = ['É necessário preencher o conteúdo'];
    }
    if (!values.date) {
        errors.date = ['É necessário uma data'];
    }
    return errors;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Pesquisar" source="title" alwaysOn />
    </Filter>
);

export const ListPost=(props)=>{return (
    <List {...props} title="Posts" filters={<PostFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" label="Título"/>
            <TextField source="content" label="Conteúdo"/>
            <ImageField source="imgsmall" />
            <UrlPost source="imgs"/>
            <DateField source="date" label="Data"/>
            <BooleanField source="published" />
            <TextField source="update_at" />
        </Datagrid>
    </List>
)};

export const CreatePost=(props)=>{


    const [message, setMessage] = useState('');
    const [openMessage, setOpenMessage] = useState(false);
    const [success,setSuccess]=useState(false);
    const [imgs, setImgs] = useState([]);
    const [imgsmall, setImgsmall] = useState('');

    var makeID = function (toSet) {
        var newId = Math.random().toString(36).substr(2, 9);
        return newId;
    };

    const SaveWithImagesButton = (props) => {
        const [create] = useCreate('colecao');
        const redirectTo = useRedirect();
        const notify = useNotify();
        const { basePath } = props;
    
        const handleSave = useCallback(
            async function (values, redirect) {
                console.log(values);
                console.log(props.imgs);
                console.log(props.imgsmall);
                var imgsmall = props.imgsmall;
                var imgs = props.imgs;
                var id = values.id;
                var title = values.title;
                var small = await urlToFile(imgsmall);
                var ar = { imgsmall: '', imgs: [] };
                const uploadTask = storage.ref(`/colecao/${id}/imgsmall/${title}`)
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
                        var index=0;
                        imgs.forEach(async (e, i) => {
                            var img = await urlToFile(e);
                            var uploadTask2 = storage.ref(`/colecao/${id}/imgs/${title}-${i}`)
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
                                    ar.imgs.push(downloadURL2);
                                    console.log(imgs.length);
                                    console.log(index);
    
                                    if (index === imgs.length-1) {
                                        if (ar != null) {
                                            console.log(ar);
                                            create(
                                                {
                                                    payload: { data: { ...values, imgs: ar.imgs, imgsmall: ar.imgsmall } },
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
                                    index++;
                                });
                            });
                        })
    
                    });
                });
    
            },
            [create, notify, redirectTo, basePath, props.imgs, props.imgsmall]
        );
        return <SaveButton {...props} onSave={handleSave} />;
    };

    const PostEditToolbar = (props) => (
        <Toolbar {...props} >
            {/* <SaveButton />*/}
            <SaveWithImagesButton imgs={imgs} imgsmall={imgsmall} />
        </Toolbar>
    );

    function validateSmallImage(value) {
        console.log("TESTE");
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("333TESTE");

            setImgsmall(value[0]);

        } else {
            setMessage('É necessário uma imagem de capa!');
            setOpenMessage(true);


        }
    }
    function validateImages(value) {
        console.log("TESTE222");
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("333TESTE");
            setImgs(value);

        } else {
            setMessage('Insira alguma imagem no Post!');
            setOpenMessage(true);
        }
    }
    return (
        <Create {...props}>
            <SimpleForm validate={validatePost} toolbar={<PostEditToolbar imgsmall={imgsmall} imgs={imgs} />}>
                <TextInput disabled source="id" defaultValue={React.useMemo(() => makeID(true), [])} />
                <TextInput source="title" label="Título" />
                <TextInput multiline source="content" label="Conteúdo" />
                <UrlPostEdit validate={validateSmallImage} source="imgsmall" acceptMultiple={false} label="Capa do post" placeholder="Arraste a imagem até aqui ou" />
                <UrlPostEdit validate={validateImages} source="imgs" acceptMultiple={true} label="Imagens" placeholder="Arraste as imagens até aqui ou" />
                <DateInput source="date" label="Data" />
                <BooleanInput source="published" label="Público" defaultValue={false} />
                <TextInput disabled source="update_at" label="Inserido em" />
                <Snackbar open={openMessage} autoHideDuration={3000} >
                    <Alert severity={!success?("error"):("success")}>
                        {message}
                    </Alert>
                </Snackbar>
            </SimpleForm>
        </Create>
    )
};

export const EditPost=(props)=>{
    const [message, setMessage] = useState('');
    const [openMessage, setOpenMessage] = useState(false);
    const [success, setSuccess] = useState(false);
    const [imgs, setImgs] = useState([]);
    const [removedImgs, setRemovedImgs] = useState([]);
    const [imgsmall, setImgsmall] = useState('');
    console.log(props);
    
    function validateSmallImage(value) {
        console.log("Teste Imagem");
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("Teste Imagem 2");

            setImgsmall(value[0]);

        } else {
            setMessage('É necessário uma imagem de capa!');
            setOpenMessage(true);


        }
    }
    function validateImages(value) {
        console.log("Teste Images");
        console.log(value);
        if (typeof value !== 'undefined') {
            console.log("Teste Images2");
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
        const [update] = useUpdate('colecao');
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
                console.log(imgsmall);
                console.log(imgs);
                var id = values.id;
                var title = values.title;
                var small = await urlToFile(imgsmall);
                var ar = { imgsmall: imgsmall, imgs: imgs };

                if (imgsmall.search('blob:') === 0) {
                    console.log("tese 1");
                    const uploadTask = storage.ref(`/colecao/${id}/imgsmall/${title}`)
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
                                    var uploadTask2 = storage.ref(`/colecao/${id}/imgs/${title}-${i}`)
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
                                            ar.imgs.push(downloadURL2);
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
                    console.log("tese 2");
                    var index = 0;
                    imgs.forEach(async (e, i) => {
                        console.log(e.search('blob:'));
                        if (e.search('blob:') === 0) {
                            var img = await urlToFile(e);
                            var uploadTask2 = storage.ref(`/colecao/${id}/imgs/${title}-${i}`)
                                .put(img);
                            uploadTask2.on('state_changed', function (snapshot) {
                                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                                    ar.imgs.push(downloadURL2);
                                    console.log(imgs.length);
                                    console.log(index);

                                    if (index === imgs.length - 1) {
                                        if (ar != null) {
                                            console.log(ar);
                                            ar.imgs = ar.imgs.filter((e) => { return e.search('blob:') === -1 });
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

            },
            [update, notify, redirectTo, basePath, props.imgs, props.imgsmall]
        );

        // override handleSubmitWithRedirect with custom logic
        return <SaveButton {...props} onSave={handleSave} />;
    };

    const PostEditToolbar = (props) => (
        <Toolbar {...props} >
            {/* <SaveButton />*/}
            <SaveWithImagesButton imgs={imgs} imgsmall={imgsmall} />
        </Toolbar>
    );

    function setImgSmallState(e) {
        setImgsmall(e);
    }
    function setImgsState(e) {
        setImgs(e);
    }
    return (
        <Edit {...props}>
            <SimpleForm toolbar={<PostEditToolbar imgsmall={imgsmall} imgs={imgs} />}>
                <TextInput disabled source="id" />
                <TextInput source="title" label="Título" />
                <TextInput multiline source="content" label="Conteúdo"/>
                <UrlPostEdit validate={validateSmallImage} setImgState={setImgSmallState} removeImage={removeImg} source="imgsmall" acceptMultiple={false} label="Capa do post" placeholder="Arraste a imagem até aqui ou" />
                <UrlPostEdit validate={validateImages} setImgState={setImgsState} removeImage={removeImg} source="imgs" acceptMultiple={true} label="Imagens" placeholder="Arraste as imagens até aqui ou" />
                <DateInput source="date" label="Data"/>
                <BooleanInput source="published" />
                <DateInput disabled source="update_at" label="Atualizado em"/>
                <Snackbar open={openMessage} autoHideDuration={3000} >
                    <Alert severity={!success ? ("error") : ("success")}>
                        {message}
                    </Alert>
                </Snackbar>
            </SimpleForm>
        </Edit>
    )
};