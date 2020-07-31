import {db} from './firebase';

export default function getData(){

    return (Promise.all([
       // authenticate(),
        db.collection("colecao").where('published', '==', true).get(),
        db.collection("galeria").where('published', '==', true).get()
    ]).then((responses)=>{
        if(responses){
            //console.log("responses:");
            return {
                posts:responses[0].docs.map(doc => doc.data()),
                galeria:responses[1].docs.map(doc => doc.data())
            };
        }
    }));
          
}