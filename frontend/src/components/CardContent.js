import React from 'react';
import { useState } from 'react';

function CardContent(props) {

  const { news } = props;
  const [showDefaultImage, setShowDefaultImage] = useState(true)
  
  let cardRef = React.createRef()

  let scroll;

  const scrollY = (y_dist) => {
    cardRef.current.scrollBy({ 
      top: y_dist,
      behavior: 'smooth' 
    });
  }
  
  const startScroll = (e) => {
    if (!cardRef.current) return;
    var rect = cardRef.current.getBoundingClientRect();
    var y = null;
    if (e.clientY) {
      y = e.clientY - rect.top;  //y position within the element.
    } else if (e.touches)  {
      y = e.touches[0].clientY - rect.top;  
    }

    let threshold = cardRef.current.offsetHeight * .5;
    if (y >= threshold) {
      scrollY(18);
      scroll = setTimeout(() => startScroll(e),100);
    } else if ((y <= cardRef.current.offsetHeight - threshold)) {
      scrollY(-18);
      scroll = setTimeout(() => startScroll(e),100);
    }
  }

  const stopScroll = (e) => {
    clearTimeout(scroll);
  }

  const imageSuccessHandler = () => setShowDefaultImage(false)

  if (news.isFake) {
    return (
      <div ref={cardRef} className='tinder-card' onTouchStart={startScroll} onMouseDown={startScroll} onMouseUp={stopScroll} onTouchEnd={stopScroll}>
        <div className="img-div h-100">
          <img src={news.fake_details.fake_image_url?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.fake_details.fake_title} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler} />
          <div className={"placeholder w-100 h-100 mb-4 " + (showDefaultImage ? "" : "d-none")} />
        </div>
        <h4 className="my-4 text-left px-4">{news.fake_details.fake_title}</h4>
        <p className="text-justify px-4">{news.fake_details.fake_summary}</p>
      </div>
    )
  }
  else {
    return (
      <div  ref={cardRef} className='tinder-card'  onTouchStart={startScroll} onMouseDown={startScroll} onMouseUp={stopScroll} onTouchEnd={stopScroll}>
        <div className="img-div h-100">
          <img src={news.image?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.title} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler} />
          <div className={"placeholder w-100 h-100 mb-4 " + (showDefaultImage ? "" : "d-none")} />
        </div>
        <h4 className="my-4 text-left px-4">{news.title}</h4>
        <p className="text-justify px-4">{news.summary}</p>
      </div>
    )
  }
}

export default CardContent;