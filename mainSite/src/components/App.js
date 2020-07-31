import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FiArrowUpRight,FiMail } from 'react-icons/fi';
import { FaWhatsapp,FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Post from "./Post";
import ImgGaleria from "./ImgGaleria";
import Menu from "./Menu";
import Footer from "./Footer";


const slideImages = [
	"https://altieriescultor.com/homeImage1.png",
   "https://altieriescultor.com/homeImage2.png",
   "https://altieriescultor.com/homeImage3.png",
   "https://altieriescultor.com/homeImage4.png",
   "https://altieriescultor.com/homeImage6.png",
   "https://altieriescultor.com/homeImage7.png",
   "https://altieriescultor.com/homeImage8.png",
   "https://altieriescultor.com/homeImage9.png"
  ];
  
export default function App({props}){
	const posts=props.posts;
	const galeria= props.galeria;
	//console.log(props);
	
	return(
		<div className="app">
		<Menu/>
	<div className="content">
   <div id="inicio">
		<CarouselProvider
		visibleSlides={1}
		totalSlides={8}
		step={1}
		naturalSlideWidth={400}
		naturalSlideHeight={200}
		infinite
		>
			<Slider >
      		  <Slide index={0}>
           <LazyLoadImage
              className="imgSlide" src={slideImages[0]} 
            />
			  </Slide>
			  <Slide index={1}>
           <LazyLoadImage
              className="imgSlide" src={slideImages[1]} 
            />
			   </Slide>
			   <Slide index={2}>
            <LazyLoadImage
              className="imgSlide" src={slideImages[2]} 
            />
			  </Slide>
           <Slide index={3}>
            <LazyLoadImage
              className="imgSlide" src={slideImages[3]} 
            />
			  </Slide>
           <Slide index={4}>
            <LazyLoadImage
              className="imgSlide" src={slideImages[4]} 
            />
			  </Slide>
           <Slide index={5}>
            <LazyLoadImage
              className="imgSlide" src={slideImages[5]} 
            />
			  </Slide>
           <Slide index={6}>
            <LazyLoadImage
              className="imgSlide" src={slideImages[6]} 
            />
			  </Slide>
           <Slide index={7}>
            <LazyLoadImage
              className="imgSlide" src={slideImages[7]} 
            />
			  </Slide>
			</Slider>
			<ButtonBack className="leftA"><FaArrowLeft  size={50}/></ButtonBack>
    		<ButtonNext className="rightA"><FaArrowRight  size={50}/></ButtonNext>
		</CarouselProvider>
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
	  <hr className="divider"/>
	  <div className="container">
	  <div>
	  <h2>
	  1° ateliê artístico na região sul de Santa Catarina 
	  </h2>
	  <h3 >
	  Nilton Campos Altieri nasceu em Encruzilhada do Sul-RS no ano de 1962(58 anos). 
	  mudou-se para Araranguá no fim do ano de 1988, e em 1990 
	  abriu o 1° ateliê artístico na região sul de Santa Catarina. 
	  Sua primeira obra foi quando tinha 13 anos de idade, 
	  esculpiu em madeira um busto de um soldado romano. 
	  Nos dias de hoje possui várias esculturas catalogadas incluindo a maior escultura-livro:
	  "Hístória do Brasil - Passado e Presente.
	  Tem como sonho finalizar a história completa da bíblia esculpida em madeira.
	  </h3>
	  </div>	  
	  <div>
     <LazyLoadImage
      className="imgIntext"
      src="https://altieriescultor.com/sobre.png"
      />
	  </div>
	  </div>
	  
    </div>
	<div id="galeria">
	  <hr className="divider"/>
	  <h1 className="title">
        GALERIA
      </h1>	  
	  <div id="galeriaList" >
	  
	  {galeria && galeria.length>0 ? galeria.map((item,i)=>
			<ImgGaleria key={i}  galeria={item}/>
	  ):(
		<h2>Por enquanto não há imagens para exibir...</h2>
	  )}
			
	
	  </div>

	  
    </div>
	<div id="noticias">
	  <hr className="divider"/>
	  <div className="postList">
	  <h1 className="title">
        ULTÍMOS TRABALHOS
      </h1> 
	  {posts && posts.length>0 ? posts.map((item,i)=>
	  <Post key={i} small={item.imgsmall} imgs={item.imgs} big={item.img} data={item.date} title={item.title} text={item.content}/>
	  ):(<h2>Por enquanto não há novidades para exibir...</h2>)}
	  </div>
	</div>
	<div id="localizacao">
	 
	  <div className="container">	
	  <div>  
	  <h1 className="title">
        LOCALIZAÇÃO
      </h1>
	  <h3>Venha fazer uma visita ao meu ateliê Casa do Escultor e conhecer as obras de perto! 
As obras estão a vista logo a frente da rodovia em meu jardim.
Além da criação e construção de novas esculturas, também faço restaurações em diversas obras.
venha fazer seu orçamento.</h3>		  
	  <br/>
	  <br/>
	  <h2>R. Enfermeira Sandra Helena da Silva, 1122-1180 - Jardim das Avenidas, Araranguá - SC, 88900-000</h2>
	  <br/>
	  <h2 className="cliqueImagem">Clique na imagem ao lado para ir até o mapa <FiArrowUpRight className="seta"/></h2>
	  </div>
	  <div>  
	  <a href="https://goo.gl/maps/oGixMDSp9zeYkeu87" className="mapa"><LazyLoadImage src="https://altieriescultor.com/mapa.png" /></a>
	  </div>
    </div>
	</div>
	<div id="contato">
	<hr className="divider"/> 
	<div className="container">	
	  <div> 
	  <br/>			  
	  <h1 className="title">
        CONTATO
      </h1>
	  <h3>Entre em contato comigo para tirar suas dúvidas e me acompanhe nas redes sociais</h3>
	  </div>
	  <div className="linksContato"> 
		<div>
			<h2>Meios de Contato:</h2>
			<br/>
		<a className="email" href="mailto:niltonaltieri@gmail.com"><button className="btnEmail"><FiMail className="emailIcon" size="15%"/>niltonaltieri@gmail.com</button></a>
		<br/>
		<br/>
		</div>
		<div>
		<a href="https://api.whatsapp.com/send?phone=554899950596&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Casa%20Do%20Escultor"><button className="btnWhatsApp"><FaWhatsapp className="whats" size="15%"/> WhatsApp</button></a>
		<br/>
		<br/>
		</div>
	  </div>	
	</div>
    </div>
	</div>
  <Footer/>
  </div>
	)};
