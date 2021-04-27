import React from 'react';

function CardContent(props) {

  const { news } = props;

  if (news.isFake) {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div">
          <img src={news.fakeDetails.fakeImageUrl} alt={news.fakeDetails.fakeTitle} />
        </div>
        <h4 className="my-4">{news.fakeDetails.fakeTitle}</h4>
        <p className="text-justify px-2">{news.fakeDetails.fakeSummary}</p>
      </div>
    )
  }
  else {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div">
          <img src={news.imageUrl} alt={news.title} />
        </div>
        <h4 className="my-4">{news.title}</h4>
        <p className="text-justify px-2">{news.textSummary}</p>
      </div>
    )
  }
}

export default CardContent;