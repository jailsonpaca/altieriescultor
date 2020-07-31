import React from "react";
import App from "../components/App";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import fetch from 'node-fetch';
import { createHttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import HeadN from './HeadN';
import { Slide } from 'react-slideshow-image';
import { FiZoomIn,FiArrowUpRight } from 'react-icons/fi';
//import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
//import { MdNavigateNext,MdNavigateBefore } from 'react-icons/md';
import ModalImage from "react-modal-image";
import Post from "../components/Post";
import PostsSearch from '../components/PostsSearch';

const client = new ApolloClient({
	link: createHttpLink({ uri: 'https://cursos1.agendasemprecheia.com/graphql',fetch:fetch }),
	cache: new InMemoryCache()
  }); 

const slideImages = [
	"https://altieriescultor.com/homeImage.jpg",
	"https://altieriescultor.com/homeImage1.jpg",
	"https://altieriescultor.com/homeImage2.jpg"
  ];
const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	pauseOnHover: true,
	onChange: (oldIndex, newIndex) => {
	  console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	}
  }

const galeria=[{small:"https://altieriescultor.com/galeria1.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria2.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria3.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria4.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria5.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria6.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria7.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria8.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
{small:"https://altieriescultor.com/galeria9.jpg",big:"https://altieriescultor.com/homeImage2.jpg"}];

const posts=[{autor:"Jailson",data:"19-03-2020",img:{small:"https://altieriescultor.com/galeria4.jpg",big:"https://altieriescultor.com/homeImage2.jpg"},
title:"Teste de Titulo 1",text:` Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit
 esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `},
  {autor:"Stefanie",data:"16-03-2020",img:{small:"https://altieriescultor.com/galeria5.jpg",big:"https://altieriescultor.com/homeImage1.jpg"},
  title:"Teste de Titulo 2 fase 1",text:` Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit
   esse cillum dolore eu fugiat nulla pariatur. LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT, 
   SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, 
   QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. 
   LOREM IPSUM DOLOR SIT AMET CONSE CTETUR ADIPISICING ELIT, 
   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}];

export default ()=>{
	function hoverBtn(e){
		alert("aaa");
		console.log("ee");
		e.target.style.width="500%";
		e.target.style.filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))";	
	}
	return(
  <App >
	<HeadN/>
	<ApolloProvider client={client} >
	<div className="content">
    <div id="inicio">
		<Slide {...properties}>
          <div className="each-slide">
		  	<div className="slide"  style={{backgroundImage:`url("https://altieriescultor.com/homeImage.jpg")`}}>
            </div>
          </div>
          <div className="each-slide">
		  	<div className="slide"  style={{backgroundImage:`url("https://altieriescultor.com/homeImage1.jpg")`}}>
            </div>
          </div>
          <div className="each-slide">
		  	<div className="slide"  style={{backgroundImage:`url("https://altieriescultor.com/homeImage2.jpg")`}}>
            </div>
          </div>
	       </Slide>
	  <div id="welcomeText">
	  <h1>
        Olá! Sou o Escultor Nilton Altieri.
	  </h1>	
	  <h2 id="casaTitle">
	  Conheça a <i>Casa do Escultor...</i>
      </h2>
	  </div>
      
    </div>
	<div id="sobre">
	 
      <h1 className="title">
        CONHEÇA
      </h1>
	  
	  <div className="container">
		<div>
	  <h2>
        Conheça a Casa do Escultor orem ipsum dolor sit amet conse ctetur adipisicing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
		quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing.
	  </h2>
	  <h3 >
	  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor 
	  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
	  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
	  Duis aute irure dolor in reprehenderit in voluptate velit
	   esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
	   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
	   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
	   Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
	   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
		Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	  
	  </h3>
	  </div>	  
	  <img className="imgIntext" src="https://altieriescultor.com/sobre.jpg"/>
	  </div>
    </div>
	<div id="galeria">
	 
      <h1 className="title">
        GALERIA
      </h1>
	  <div id="galeriaList">
	  {galeria.length>0 ? galeria.map((item,i)=>
		  <div className="imgGaleria" key={i}>
		  <ModalImage
			small={item.small}
			large={item.big}
			alt="Imagem 1"
			hideDownload={true}
			hideZoom={true}
			imageBackgroundColor="transparent"
			className="imgPreview"
			/>
		
			  <FiZoomIn className="lupa" size="15%"/>
		  </div>
	  ):(
		<h2>Por enquanto não há imagens para exibir...</h2>
	  )}
	  </div>
	  
	  
	  
    </div>
	<div id="noticias">
	 
      <h1 className="title">
        ULTÍMOS TRABALHOS
      </h1>
	  <div className="postList">
	  <Post  small={posts[0].img.small} big={posts[0].img.big} data={posts[0].data} title={posts[0].title} text={posts[0].text}/>
	  {posts.length>0 ? posts.map((item,i)=>
	  <Post key={i} small={item.img.small} big={item.img.big} data={item.data} title={item.title} text={item.text}/>
	  ):(<h2>Por enquanto não há novidades para exibir...</h2>)}
      </div>
	</div>
	<div id="localizacao">
	 
      <h1 className="title">
        LOCALIZAÇÃO
      </h1>
	  <div className="container">
	  <div>
	  <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
		  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
		  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
		  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>		  
	  <h2>R. Enfermeira Sandra Helena da Silva, 1122-1180 - Jardim das Avenidas, Araranguá - SC, 88900-000</h2>
	  <br/>
	  <h2 style={{textAlign:"end"}}>Clique na imagem ao lado para ir até o mapa <FiArrowUpRight/></h2>
	  </div>
	  <a href="https://goo.gl/maps/oGixMDSp9zeYkeu87" className="mapa"><img src="https://altieriescultor.com/mapa.png"/></a>
	  </div>
    </div>
	<div id="contato">
      <h1 className="title">
        CONTATO
      </h1>
	
    </div>
	</div>

  </ApolloProvider>
  <style jsx global>{`
		.content{
			font-family:"PT Sans Narrow",sans-serif;
			margin-left:5%;
		}
		.each-slide{
			background-color:black;
		}
		.slide{
			margin:0;
			width:100%;
			height:700px;
			background-size:cover;
		}
		.react-slideshow-container .nav span{
			width: 45px;
			height: 20px;
			border-color: #FFF;
		}
		.react-slideshow-container .nav{
			background:none;
			position: absolute;
			margin-left:5%;
			margin-right:0%;
		}
		.react-slideshow-container .nav:hover{
			background:none;
			transform:scale(1.5,1.5);
			filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .7));
		}
		.react-slideshow-container .nav:last-of-type{
			margin-left: 88%;
			margin-right:0%;
		}
		.icons{
			width:30%;
			filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .7));
		}
		#welcomeText{
			text-align: start;
			position:absolute;
			top:20%;
			padding: 0 20%;
			text-shadow: 3px 3px 6px #222;
		}	
		#casaTitle{
			font-weight: 100;
		}
		#inicio{
			text-transform: uppercase;
			color:white;
		}
		#inicio h1{
			font-size:400%;
			margin-bottom:0%;	
		}
		#inicio h2{
			font-size:200%;
			margin-top:0%;	
		}
		#sobre{
			text-align: start;	
		}
		.container{
			padding: 5%;
			padding-top:0%;
			padding-bottom:0%;
			padding-left:6%;
			display: flex;
			align-items: start;
		}
		.container h3{
			font-weight:100;
		}
		.container h2{
			margin-top:0%;
		}
		.title{
			padding-left: 4%;
			font-weight:700;
			text-align: start;
			padding-bottom:1%;
		}
		.imgIntext{
			padding-top:0%;
			padding-right:0%;
			padding-left:5%;
		}
		.__react_modal_image__header{
			background-color: transparent !important;
		}
		.imgGaleria{
			width: fit-content;
			margin-left: 3.3%;
			margin-bottom: 3.3%;
			height: 250px;
		}
		
		.lupa {
			pointer-events:none;
			cursor: pointer;
			z-index: 2;
			position: relative;
			top: -170px;
			left: 1%;
			width:10%;
			height:auto;
			transition: .5s ease;
			opacity: 0.5;
			background-color:white;
			border-radius: 100%;
			padding: 7%;
			text-align: center;
			-webkit-transition: -webkit-transform .3s ease-in-out;
    		-ms-transition: -ms-transform .3s ease-in-out;
    		transition: transform .3s ease-in-out;  
		}
		.imgGaleria:hover .lupa{
			opacity: 0.7;
			transform:rotate(360deg) scale(1.5);
			-ms-transform:rotate(360deg) scale(1.5);
			-webkit-transform:rotate(360deg) scale(1.5);
		}
		.imgPreview{
			-webkit-transition: -webkit-transform .8s ease-in-out;
    		-ms-transition: -ms-transform .8s ease-in-out;
    		transition: transform .8s ease-in-out;  
		}
		.imgGaleria:hover .imgPreview{
			transform: scale(1.3);
			-ms-transform: scale(1.3);
			-webkit-transform: scale(1.3);
		}
		.imgGaleria div{
			overflow: hidden;
		}
		#galeriaList{
			margin-top:3%;
			display:flex;
			flex-wrap:wrap;
		}
		#galeria{
			
		}
		#noticias .description:hover h1,#noticias .description:hover p{
			color:black;
		}
		#localizacao .container{
			padding-right:4%;
		}
		#localizacao .container div{
			text-align:start;
			width:50%;
			padding-right:4%;
			
		}	
		#localizacao .mapa img{
			width:100%;
			
		}
		.mapa{
			-webkit-transition: -webkit-transform .3s ease-in-out;
    		-ms-transition: -ms-transform .3s ease-in-out;
			transition: transform .3s ease-in-out; 
			box-shadow: 0px 0px 15px 2px #999; 
		}
		.mapa:hover{
			-moz-box-shadow: 0px 0px 15px 5px #999;
    		-webkit-box-shadow: 0px 0px 15px 5px #999;
			box-shadow: 0px 0px 15px 5px #999;
			transform:scale(1.02);
		}
		#contato{
			height:800px;
		}

		
	`}</style>
  </App>
	)};

/*import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
	
	
	
	return (
	
	<Layout>
		<h1>POSTS</h1>
		<ul>
			{props.posts.map(post => (
				<li key={post.id}>
					<a href={post.link}><div className="titlePost">{post.id}: {post.title.rendered}</div></a>
					<Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
						<a>{post.title.rendered}</a>
					</Link>
				</li>
			))}
		</ul>
		<style jsx>{`
			h1, a {
			font-family: "Arial";
			color: 'red'
		}

			ul {
			padding: 0;
		}

			li {
			list-style: none;
			margin: 5px 0;
		}

			a {
			text-decoration: none;
			color: blue;
		}

			a:hover {
			opacity: 0.6;
		}
		`}
		</style>
	</Layout>
	);
}


Index.getInitialProps = async function() {
	const res = await fetch('');
	const data = await res.json();

	console.log(`post data fetched. Count: ${data.length}`);
	var props={
		posts: data,
	}
	
	
	return props;
};



export default Index

*/
