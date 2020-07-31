"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _pureReactCarousel = require("pure-react-carousel");

var _fi = require("react-icons/fi");

var _fa = require("react-icons/fa");

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _Post = _interopRequireDefault(require("./Post"));

var _ImgGaleria = _interopRequireDefault(require("./ImgGaleria"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Footer = _interopRequireDefault(require("./Footer"));

var slideImages = ["https://altieriescultor.com/homeImage1.png", "https://altieriescultor.com/homeImage2.png", "https://altieriescultor.com/homeImage3.png", "https://altieriescultor.com/homeImage4.png", "https://altieriescultor.com/homeImage6.png", "https://altieriescultor.com/homeImage7.png", "https://altieriescultor.com/homeImage8.png", "https://altieriescultor.com/homeImage9.png"];

function App(_ref) {
  var props = _ref.props;
  var posts = props.posts;
  var galeria = props.galeria; //console.log(props);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "inicio"
  }, /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.CarouselProvider, {
    visibleSlides: 1,
    totalSlides: 8,
    step: 1,
    naturalSlideWidth: 400,
    naturalSlideHeight: 200,
    infinite: true
  }, /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slider, null, /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 0
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[0]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[1]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 2
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[2]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 3
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[3]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 4
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[4]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 5
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[5]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 6
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[6]
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.Slide, {
    index: 7
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgSlide",
    src: slideImages[7]
  }))), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.ButtonBack, {
    className: "leftA"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaArrowLeft, {
    size: 50
  })), /*#__PURE__*/_react["default"].createElement(_pureReactCarousel.ButtonNext, {
    className: "rightA"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaArrowRight, {
    size: 50
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "welcomeText"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Ol\xE1! Sou o Escultor Nilton Altieri."), /*#__PURE__*/_react["default"].createElement("h2", {
    id: "casaTitle"
  }, "Conhe\xE7a a ", /*#__PURE__*/_react["default"].createElement("i", null, "Casa do Escultor...")))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "sobre"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "CONHE\xC7A"), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "1\xB0 ateli\xEA art\xEDstico na regi\xE3o sul de Santa Catarina"), /*#__PURE__*/_react["default"].createElement("h3", null, "Nilton Campos Altieri nasceu em Encruzilhada do Sul-RS no ano de 1962(58 anos). mudou-se para Ararangu\xE1 no fim do ano de 1988, e em 1990 abriu o 1\xB0 ateli\xEA art\xEDstico na regi\xE3o sul de Santa Catarina. Sua primeira obra foi quando tinha 13 anos de idade, esculpiu em madeira um busto de um soldado romano. Nos dias de hoje possui v\xE1rias esculturas catalogadas incluindo a maior escultura-livro: \"H\xEDst\xF3ria do Brasil - Passado e Presente. Tem como sonho finalizar a hist\xF3ria completa da b\xEDblia esculpida em madeira.")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    className: "imgIntext",
    src: "https://altieriescultor.com/sobre.png"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "galeria"
  }, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "GALERIA"), /*#__PURE__*/_react["default"].createElement("div", {
    id: "galeriaList"
  }, galeria && galeria.length > 0 ? galeria.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_ImgGaleria["default"], {
      key: i,
      galeria: item
    });
  }) : /*#__PURE__*/_react["default"].createElement("h2", null, "Por enquanto n\xE3o h\xE1 imagens para exibir..."))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "noticias"
  }, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "postList"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "ULT\xCDMOS TRABALHOS"), posts && posts.length > 0 ? posts.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_Post["default"], {
      key: i,
      small: item.imgsmall,
      imgs: item.imgs,
      big: item.img,
      data: item.date,
      title: item.title,
      text: item.content
    });
  }) : /*#__PURE__*/_react["default"].createElement("h2", null, "Por enquanto n\xE3o h\xE1 novidades para exibir..."))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "localizacao"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "LOCALIZA\xC7\xC3O"), /*#__PURE__*/_react["default"].createElement("h3", null, "Venha fazer uma visita ao meu ateli\xEA Casa do Escultor e conhecer as obras de perto! As obras est\xE3o a vista logo a frente da rodovia em meu jardim. Al\xE9m da cria\xE7\xE3o e constru\xE7\xE3o de novas esculturas, tamb\xE9m fa\xE7o restaura\xE7\xF5es em diversas obras. venha fazer seu or\xE7amento."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h2", null, "R. Enfermeira Sandra Helena da Silva, 1122-1180 - Jardim das Avenidas, Ararangu\xE1 - SC, 88900-000"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "cliqueImagem"
  }, "Clique na imagem ao lado para ir at\xE9 o mapa ", /*#__PURE__*/_react["default"].createElement(_fi.FiArrowUpRight, {
    className: "seta"
  }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://goo.gl/maps/oGixMDSp9zeYkeu87",
    className: "mapa"
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadImage, {
    src: "https://altieriescultor.com/mapa.png"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "contato"
  }, /*#__PURE__*/_react["default"].createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "CONTATO"), /*#__PURE__*/_react["default"].createElement("h3", null, "Entre em contato comigo para tirar suas d\xFAvidas e me acompanhe nas redes sociais")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "linksContato"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Meios de Contato:"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("a", {
    className: "email",
    href: "mailto:niltonaltieri@gmail.com"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btnEmail"
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiMail, {
    className: "emailIcon",
    size: "15%"
  }), "niltonaltieri@gmail.com")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://api.whatsapp.com/send?phone=554899950596&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Casa%20Do%20Escultor"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btnWhatsApp"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaWhatsapp, {
    className: "whats",
    size: "15%"
  }), " WhatsApp")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null)))))), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
}

;