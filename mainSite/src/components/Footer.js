import React from "react";
import {TiSocialInstagram,TiSocialFacebookCircular} from "react-icons/ti";

export default function Footer(){
  return(
    <div className="footer">
          <h1>Siga-me nas redes sociais:</h1>
          <br/>
          <br/>
          <div style={{display:"inline-block"}}>
          <a style={{float:"left",textDecoration:"none",color:"white",display:"inline-block"}} href="https://www.instagram.com/niltonaltieri/"><TiSocialInstagram style={{float:"left"}} className="instagram" size="20%"/><h2 style={{textAlign:"justify",marginLeft:"25%"}}>niltonaltieri</h2></a>
          <a style={{float:"right",textDecoration:"none",color:"white",display:"inline-block"}} href="https://www.facebook.com/casadoescultorbr/"><TiSocialFacebookCircular style={{float:"left"}} className="facebook" size="20%"/><h2 style={{textAlign:"justify",marginLeft:"25%"}}>Casa do Escultor</h2></a>
          </div>
          <h4 style={{marginTop: "5%"}}>Copyright © 2020 Casa do Escultor, todos direitos reservados</h4>
    </div>
  );
};


