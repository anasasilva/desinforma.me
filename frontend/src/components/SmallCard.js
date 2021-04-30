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
            <img src={news.fake_details.fake_image_url?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.fake_details.fake_title} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler} />
            <div className={"placeholder h-100 " + (showDefaultImage ? "" : "d-none")} />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <p className="m-0 px-3">{news.fake_details.fake_title}</p>
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
            <img src={news.image?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt={news.title} className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler} />
            <div className={"placeholder h-100 " + (showDefaultImage ? "" : "d-none")} />
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