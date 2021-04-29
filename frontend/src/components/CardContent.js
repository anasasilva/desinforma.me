import React from 'react';
import { useState } from 'react';

function CardContent(props) {

  const { news } = props;
  const [showDefaultImage, setShowDefaultImage] = useState(true)

  const imageSuccessHandler = () => setShowDefaultImage(false)

  if (news.isFake) {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div h-100">
          <img src={news.fakeDetails.fakeImageUrl?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.fakeDetails.fakeTitle} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler}/>
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
          <img src={news.imageUrl?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.title} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler}/>
          <div className={"placeholder w-100 h-100 mb-4 " + (showDefaultImage ? "" : "d-none")}/>
        </div>
        <h4 className="my-4">{news.title}</h4>
        <p className="text-justify px-2">{news.textSummary}</p>
      </div>
    )
  }
}

export default CardContent;