import React, { useState, Fragment } from 'react';
import { FiZoomIn } from 'react-icons/fi';
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ImgGaleria(props) {
  const galeria = props.galeria;
  console.log("--------------GALERIA----------------");
  console.log(galeria.imgsmall);
  console.log(galeria.imgs);
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setIndex] = useState(0);
  function handleSetOpen() {
    console.log("TE");
    setOpen(true);
  }

  return (
    <Fragment>
      {galeria.published && galeria.imgsmall && (
        <div className="imgGaleria" onClick={handleSetOpen}>
          <div>
            <LazyLoadImage
              alt={galeria.name}
              className="imgPreview"
              src={galeria.imgsmall}
            />
          </div>
          <FiZoomIn className="lupa" size="15%" />
          {isOpen && galeria.imgs && (
            <Lightbox
              imageTitle={galeria.imgs[photoIndex].title}
              mainSrc={galeria.imgs[photoIndex].src}
              nextSrc={photoIndex + 1 === galeria.imgs.length ? (galeria.imgs[galeria.imgs.length - 1].src) : (galeria.imgs[(photoIndex + 1)].src)}
              prevSrc={photoIndex === 0 ? (galeria.imgs[0].src) : (galeria.imgs[(photoIndex - 1)].src)}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() => {
                if (photoIndex - 1 < 0) {
                  setIndex((galeria.imgs.length - 1));
                } else {
                  setIndex((photoIndex - 1));
                }
              }}
              onMoveNextRequest={() => {
                if (photoIndex + 1 === galeria.imgs.length) {
                  setIndex(0);
                } else {
                  setIndex((photoIndex + 1));
                }
              }}
            />
          )}
        </div>
      )}
    </Fragment>
  );
}
