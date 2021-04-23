import React from 'react';

function CardContent(props) {

  const { news } = props;

  if (news.isFake) {
    return (
        <div className='card p-2'>
          <img /*className="game-img"*/ src={news.fakeDetails.fakeImageUrl} alt={news.fakeDetails.fakeTitle} />
          <h4 className="my-4">{news.fakeDetails.fakeTitle}</h4>
          <p className="text-justify px-2">{news.fakeDetails.fakeSummary}</p>
        </div>
    )
  }
  else {
    return (
        <div className='card p-2'>
          <img /*className="game-img"*/ src={news.imageUrl} alt={news.title} />
          <h4 className="my-4">{news.title}</h4>
          <p className="text-justify px-2">{news.textSummary}</p>
        </div>
    )
  }
}

export default CardContent;