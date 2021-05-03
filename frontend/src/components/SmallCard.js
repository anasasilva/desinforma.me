import React from 'react';
import { useState } from 'react';
import ChangedEntity from './ChangedEntity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function SmallCard(props) {

    const { news, index } = props;
    const [showDefaultImage, setShowDefaultImage] = useState(false)

    const imageSuccessHandler = () => setShowDefaultImage(false)

    const { hostname} = new URL(news.original_url);
    let hostnameNoWww =  hostname.replace('www.', '')
    
    if (news.isFake) {


        const getIndicesOf = (searchStr, str, caseSensitive) => {
            if (searchStr.length === 0) return [];
            var startIndex = 0, index, indices = [];
            while ((index = str.indexOf(searchStr, startIndex)) > -1) {
                indices.push(index);
                startIndex = index + searchStr.length;
            }
            return indices;
        }


        const getFalseSummaryFormated = (fullText) => {
            let fakeTextCopy = fullText;
            let positionChanges = [];

            for (let i = 0; i < news.fake_details.entities_replaced.length; i++) {
                positionChanges.push(getIndicesOf(news.fake_details.entities_replaced[i].replaced_entity_name, fullText));
                fakeTextCopy = fakeTextCopy.split(news.fake_details.entities_replaced[i].replaced_entity_name).join('^v^');
            }

            let outputHtml = [];
            let totalLength = 0;
            fakeTextCopy.split('^v^').forEach(textPart => {
                outputHtml.push(textPart);
                totalLength += textPart.length;
                let entityIndex = null;
                for (let i = 0; i < positionChanges.length; i++) {
                    if (positionChanges[i].includes(totalLength)) {
                        entityIndex = i;
                        break;
                    }
                }
                if (entityIndex != null) {
                    totalLength += news.fake_details.entities_replaced[entityIndex].replaced_entity_name.length;
                    outputHtml.push([
                        news.fake_details.entities_replaced[entityIndex].original_entity_name,
                        news.fake_details.entities_replaced[entityIndex].replaced_entity_name
                    ]);
                }
            });
            return outputHtml;
        }


        const imgSrc = news.image?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "");
        const imgSrcFake = news.fake_details.fake_image_url?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "");

        return (
            <div className="card my-3 p-0 nice-shadow hover-toggle " id={"heading_" + news.id}>

                <div className="hover-hide ready d-none d-lg-flex" data-type="fake" />
                <div className={(index === 0 ? "" : "collapsed ") + "d-flex cursor-pointer"} data-toggle="collapse" href={"#collapse_" + news.id} role="button" aria-expanded="false" aria-controls={"collapse_" + news.id}>
                    
                    <div className="d-none d-md-block img-endgame-card-news hover-hide" style={{ backgroundImage: `url(${imgSrcFake})` }}>
                    </div>
                    <div className="d-none d-md-block img-endgame-card-news hover-show" style={{ backgroundImage: `url(${imgSrc})` }}>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-start w-100 py-2">
                        <div className="px-3 w-100 d-flex align-items-baseline justify-content-between mb-1">
                            
                            <span className="badge badge-danger badge-danger-fake-news font-weight-normal">Notícia Falsa</span>&nbsp;
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </div>
                        <p className="m-0 px-3 pb-0 serif-font font-weight-600 text-justify w-100">
                            {
                                getFalseSummaryFormated(news.fake_details.fake_title).map((e, index) => {
                                    if (typeof e == "string") return (e)
                                    else return (<ChangedEntity original={e[0]} created={e[1]} key={index} />)
                                })
                            }
                        </p>
                    </div>
                </div>

                <div id={"collapse_" + news.id} className={(index === 0 ? "show " : "") + "collapse border-top"} aria-labelledby={"heading_" + news.id} data-parent="#accordion" style={{ backgroundColor: '#fafcff99' }}>
                    <div className="card-body pb-2 text-justify">
                        {getFalseSummaryFormated(news.fake_details.fake_summary).map((e, index) => {
                            if (typeof e == "string") return (e)
                            else return (<ChangedEntity original={e[0]} created={e[1]} key={index} />)
                        })}
                    </div>
                    <div className="w-100 text-center pb-2">
                        <span className="small text-muted">Adaptado: <a className="d-inline" rel="noreferrer" href={news.url} target="_blank">{hostnameNoWww}</a></span>
                    </div>
                </div>
            </div>
        )
    }
    else {
        const imgSrc = news.image?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "");
        return (

            <div className="card my-3 p-0 nice-shadow " id={"heading_" + news.id}>

                <div className={(index === 0 ? "" : "collapsed ") + "d-flex cursor-pointer"} data-toggle="collapse" href={"#collapse_" + news.id} role="button" aria-expanded="false" aria-controls={"collapse_" + news.id}>
                    <div className="d-none d-md-block img-endgame-card-news" style={{ backgroundImage: `url(${imgSrc})` }}>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-start w-100 py-2">
                        <div className="px-3 w-100 d-flex align-items-baseline justify-content-between mb-1">
                            <span className="badge badge-success badge-success-true-news font-weight-normal">Notícia Verdadeira</span>&nbsp;
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <p className="m-0 px-3 pb-0 serif-font font-weight-600 text-justify w-100">{news.title}</p>
                    </div>
                </div>

                <div id={"collapse_" + news.id} className={(index === 0 ? "show " : "") + "collapse border-top"} aria-labelledby={"heading_" + news.id} data-parent="#accordion" style={{ backgroundColor: '#fafcff99' }}>
                    <div className="card-body pb-2 text-justify">{news.summary}</div>
                    <div className="w-100 text-center pb-2">
                        <span className="small text-muted mx-auto">Fonte: <a className="d-inline" href={news.url} rel="noreferrer" target="_blank">{hostnameNoWww}</a></span>
                    </div>
                </div>
            </div>

        )
    }
}

export default SmallCard;