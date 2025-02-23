import React,{useState,useCallback,useEffect,Fragment} from 'react';
import {useDropzone} from 'react-dropzone';

export default function UrlGaleriaEdit({ record = {}, source ,setImgState,acceptMultiple,label,placeholder,validate,removeImage}){

    const [imgs,setImgs]=useState([]);
    useEffect(()=>{
        var isCancelled=false;
        function setImagens(){
        var ar;
        if(record[source]){
        if(typeof record[source] !== 'object'){
                ar=[record[source]];
                if(!isCancelled){
                setImgs(ar);
                }
        }else{
            ar=Object.values(record[source]);
            if(!isCancelled){
            setImgs(ar);
            }
        }}   
        console.log(record);
        }
        setImagens();
        return () => {
            isCancelled = true;
        }; 
    },[record,source]);
        
    const onDrop = useCallback(acceptedFiles => {   
        var ar=imgs;
        console.log(ar);
        acceptedFiles.forEach(file => {
            if(acceptMultiple){
                ar.push(URL.createObjectURL(file));
            }else{
                ar=[URL.createObjectURL(file)];
            }
        });
        setImgs(ar);
        if(setImgState){
            setImgState(ar);
        }
        if(typeof validate !== 'undefined'){
        validate(ar);
        }
        console.log(ar);
      },[imgs,validate,setImgState,acceptMultiple]);
    
    function removeImg(i){
        var ar=imgs;
        removeImage(imgs[i]);
        ar.splice(i,1)
        setImgs(ar);
        if(setImgState){
            setImgState(ar);
        }
    }

    const {getRootProps, getInputProps, open,isDragActive} = useDropzone({accept: 'image/*',multiple:acceptMultiple,noClick: true,onDrop});
    
    return(
        <Fragment>
            <label className="MuiFormLabel-root MuiInputLabel-root  ">
                <span>{label}</span></label>
                <div {...getRootProps()} className="UrlPostEditContainer"> 
                    <input {...getInputProps()} />
                    {
                    isDragActive ?
                    <p>{placeholder}</p> :
                    <Fragment>
                    <p>{placeholder}</p>
                    <button type="button" onClick={open}>Clique para selecionar</button>
                    </Fragment>
                    }
                    <div className="preview">
                    {typeof imgs === 'object' && imgs.map((e,i)=>
                        <div className="imageContainer" key={i}><img alt="imagem" src={e.src} className="imgEdit" />
                        {acceptMultiple ? (<input className="imgGaleriaTitle" type="text" placeholder="Título para a imagem" value={e.title}/>):('')}
                        <span className="btnDeleteImage" onClick={()=>removeImg(i)}>X</span></div>
                    )}
                    </div>
                </div>
        </Fragment>
    );
}
