import React from 'react';

function SmallCard(props) {

  const { news } = props;

  if (news.isFake) {
    return (
      <div className="card red-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
            <img src={news.fakeDetails.fakeImageUrl} />
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
      <div className="card green-shadow">
        <div className="d-flex">
          <div className="img-div-sm">
          <img src={news.imageUrl} />
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