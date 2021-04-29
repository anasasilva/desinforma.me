import React from 'react';
import { useState, useEffect } from 'react';

function CardContent(props) {

  const { news } = props;
  const [showDefaultImage, setShowDefaultImage] = useState(false)
  
  const imageFirstFailHandler = (e) => {
    e.target.src = e.target.src.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")
    e.target.onError = imageSecondFailHandler;
  }

  const imageSecondFailHandler = (e) => {
    e.target.onError = null;
    setShowDefaultImage(true)
  }


  if (news.isFake) {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div h-100">
          <img src={news.fakeDetails.fakeImageUrl} alt={news.fakeDetails.fakeTitle} className={(showDefaultImage ? "d-none" : "")} onError={imageFirstFailHandler}/>
          <div className={"placeholder w-100 h-100 mb-4 " + (showDefaultImage ? "" : "d-none")}/>
        </div>
        <h4 className="my-4">{news.fakeDetails.fakeTitle}</h4>
        <p className="text-justify px-2">{news.fakeDetails.fakeSummary}</p>
      </div>
    )
  }
  else {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div h-100">
          <img src={news.imageUrl} alt={news.title} className={(showDefaultImage ? "d-none" : "")} onError={imageFirstFailHandler}/>
          <div className={"placeholder w-100 h-100 mb-4 " + (showDefaultImage ? "" : "d-none")}/>
        </div>
        <h4 className="my-4">{news.title}</h4>
        <p className="text-justify px-2">{news.textSummary}</p>
      </div>
    )
  }
}

export default CardContent;