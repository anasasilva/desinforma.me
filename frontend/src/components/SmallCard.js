import React from 'react';

function SmallCard(props) {

  const { news } = props;

  if (news.isFake) {
    return (
      <div className="card my-3 red-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.fake_details.fake_image_url} />
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
      <div className="card my-3 green-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.image_url} />
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