import React from 'react';

function CardContent(props) {

  const { news } = props;

  if (news.isFake) {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div">
          <img src={news.fake_details.fake_image_url} alt={news.fake_details.fake_title} />
        </div>
        <h4 className="my-4">{news.fake_details.fake_title}</h4>
        <p className="text-justify px-2">{news.fake_details.fake_summary}</p>
      </div>
    )
  }
  else {
    return (
      <div className='tinder-card p-2'>
        <div className="img-div">
          <img src={news.image_url} alt={news.title} />
        </div>
        <h4 className="my-4">{news.title}</h4>
        <p className="text-justify px-2">{news.summary}</p>
      </div>
    )
  }
}

export default CardContent;