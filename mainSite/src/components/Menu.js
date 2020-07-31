import React,{Fragment} from 'react';
import { slide as Sidebar } from 'react-burger-menu'

export default function Menu(){
	return(
	<Fragment>
	<span className="barMenu"></span>
	<Sidebar>
	<a id="inicioL" className="menu-item" href="/#inicio">Início</a>
	<a id="sobreL" className="menu-item" href="/#sobre">Sobre</a>
	<a id="galeriaL" className="menu-item" href="/#galeria">Galeria</a>
	<a id="noticiasL" className="menu-item" href="/#noticias">Notícias</a>
	<a id="localizacaoL" className="menu-item" href="/#localizacao">Localização</a>
	<a id="contatoL" className="menu-item" href="/#contato">Contato</a>
   
  </Sidebar>
  </Fragment>
);
}


