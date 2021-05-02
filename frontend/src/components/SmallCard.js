import React from 'react';
import { useState } from 'react';
import ChangedEntity from './ChangedEntity';


function SmallCard(props) {

    const { news, index } = props;
    const [showDefaultImage, setShowDefaultImage] = useState(false)

    const imageSuccessHandler = () => setShowDefaultImage(false)

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


        return (
            <div className="card my-3 p-0 nice-shadow hover-toggle " id={"heading_" + news.id}>

                <div className="hover-hide ready d-none d-lg-flex" data-type="fake" />
                <div className="d-flex" data-toggle="collapse" href={"#collapse_" + news.id} role="button" aria-expanded="false" aria-controls={"collapse_" + news.id}>
                    <div className="img-div-sm d-none d-md-flex align-items-center">
                        <img src={news.fake_details.fake_image_url?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt="" className={(showDefaultImage ? "d-none" : "") + "hover-hide"} onLoad={imageSuccessHandler} />
                        <img src={news.image?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt="" className={"hover-show"} />
                        <div className={"placeholder h-100 " + (showDefaultImage ? "" : "d-none")} />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center w-100 py-2">
                        <div class="px-3 w-100 d-flex align-items-baseline justify-content-between mb-1">
                            <span class="badge badge-danger badge-danger-fake-news font-weight-normal">Notícia Falsa</span>&nbsp;
                            <span class="small text-muted">Adaptado: <a class="d-inline" href={news.url} target="_blank">Publico.pt</a></span>
                        </div>
                        <p className="m-0 px-3 pb-0 serif-font font-weight-600 text-justify w-100">
                            {
                                getFalseSummaryFormated(news.fake_details.fake_title).map((e) => {
                                    if (typeof e == "string") return (e)
                                    else return (<ChangedEntity original={e[0]} created={e[1]} />)
                                })
                            }
                        </p>
                    </div>
                </div>

                <div id={"collapse_" + news.id} className={(index === 0 ? "show " : "") + "collapse border-top"} aria-labelledby={"heading_" + news.id} data-parent="#accordion" style={{ backgroundColor: '#fafcff99' }}>
                    <div className="card-body text-justify">
                        {getFalseSummaryFormated(news.fake_details.fake_summary).map((e) => {
                            if (typeof e == "string") return (e)
                            else return (<ChangedEntity original={e[0]} created={e[1]} />)
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (

            <div className="card my-3 p-0 nice-shadow " id={"heading_" + news.id}>

                <div className="d-flex" data-toggle="collapse" href={"#collapse_" + news.id} role="button" aria-expanded="false" aria-controls={"collapse_" + news.id}>
                    <div className="img-div-sm d-none d-md-flex align-items-center">
                        <img src={news.image?.replace(/(^https?:\/\/)?(www.)?arquivo\.pt\/noFrame\/replay\/\d+\//g, "")} alt="" className={(showDefaultImage ? "d-none" : "")} onLoad={imageSuccessHandler} />
                        <div className={"placeholder h-100 " + (showDefaultImage ? "" : "d-none")} />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center w-100 py-2">
                        <div class="px-3 w-100 d-flex align-items-baseline justify-content-between mb-1">
                            <span class="badge badge-success badge-success-true-news font-weight-normal">Notícia Verdadeira</span>&nbsp;
                            <span class="small text-muted">Fonte: <a class="d-inline" href={news.url} target="_blank">Publico.pt</a></span>
                        </div>
                        <p className="m-0 px-3 pb-0 serif-font font-weight-600 text-justify w-100">{news.title}</p>
                    </div>
                </div>

                <div id={"collapse_" + news.id} className={(index === 0 ? "show " : "") + "collapse border-top"} aria-labelledby={"heading_" + news.id} data-parent="#accordion" style={{ backgroundColor: '#fafcff99' }}>
                    <div className="card-body text-justify">{news.summary}</div>
                </div>
            </div>

        )
    }
}

export default SmallCard;