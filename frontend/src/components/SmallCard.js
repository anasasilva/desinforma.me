import React from 'react';
import { useState } from 'react';


function SmallCard(props) {

  const { news } = props;
  const [showDefaultImage, setShowDefaultImage] = useState(false)

  const imageSuccessHandler = () => setShowDefaultImage(false)

  if (news.isFake) {
    return (
      <div className="card my-3 nice-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.fakeDetails.fakeImageUrl?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.fakeDetails.fakeTitle} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler} />
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
      <div className="card my-3 nice-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.imageUrl?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.title} className={(showDefaultImage ? "d-none" : "")}  onLoad={imageSuccessHandler}/>
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