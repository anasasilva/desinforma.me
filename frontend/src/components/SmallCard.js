import React from 'react';
import { useState, useEffect } from 'react';


function SmallCard(props) {

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
      <div className="card my-3 red-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.fakeDetails.fakeImageUrl} alt={news.fakeDetails.fakeTitle} className={(showDefaultImage ? "d-none" : "")}  onError={imageFirstFailHandler}/>
            <div className={"placeholder h-100 " + (showDefaultImage ? "" : "d-none")}/>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <p className="m-0 px-3">{news.fakeDetails.fakeTitle}</p>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="card my-3 green-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.imageUrl} alt={news.title} className={(showDefaultImage ? "d-none" : "")} onError={imageFirstFailHandler} />
            <div className={"placeholder h-100 " + (showDefaultImage ? "" : "d-none")}/>
          </div>
          <div className="d-flex align-items-center">
          <p className="m-0 px-3">{news.title}</p>
        </div>
        </div>
      </div>
    )
  }
}

export default SmallCard;