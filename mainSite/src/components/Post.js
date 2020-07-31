import React,{useState,Fragment} from 'react';
import { FiZoomIn,FiCalendar } from 'react-icons/fi';
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Post(props) {
  console.log("--------------POST----------------");
    var slideImgs;
    if(props.imgs){
       slideImgs=Object.values(props.imgs);
       console.log(slideImgs);
    }
    const [isOpen,setOpen] = useState(false);
    const [photoIndex,setIndex]=useState(0);
     

  return (
    <Fragment>

    <div className="PostClass">
    <div className="imgPost" onClick={() => setOpen(true)}>
      <div>
           {/*<img
                alt={props.title}
                className="imgPreviewPost"
                src={props.small}
              />*/}
              <LazyLoadImage
              alt={props.title}
              className="imgPreviewPost"
              src={props.small}
              />
      {isOpen && slideImgs && (
          <Lightbox
            mainSrc={slideImgs[photoIndex]}
            nextSrc={slideImgs[(photoIndex + 1)]}
            prevSrc={slideImgs[(photoIndex - 1)]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>{
              if (photoIndex - 1 < 0) {
                setIndex((slideImgs.imgs.length - 1));
              } else {
                setIndex((photoIndex - 1));
              }
            }
            }
            onMoveNextRequest={() =>{
              if (photoIndex + 1 === slideImgs.imgs.length) {
                setIndex(0);
              } else {
                setIndex((photoIndex + 1));
              }
              
            }
          }
          />
        )}
        </div>
        <FiZoomIn className="lupaPost" size="15%"/>
        
    </div>
        <div className="description">
            <h3><FiCalendar size="3%" className="calendar"/> {props.data}</h3>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    <hr className="divider"/>
</Fragment>
  );
}
