import React from 'react';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";

import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon
} from "react-share";

function SocialButtons(props) {

    const { 
        url = "https://www.desinforma.me/", 
        text= "Olhem o meu novo score!", 
        iconSize=32 
    } = props;


    return (
        <>
            <FacebookShareButton className="mx-2 social-buttons-shadow" quote={text} url={url} resetButtonStyle="false" >
                <FacebookIcon size={iconSize} round={true} />
            </FacebookShareButton>
            
            <TwitterShareButton className="mx-2 social-buttons-shadow" url={url} title={text} resetButtonStyle="false">
                <TwitterIcon size={iconSize} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton className="mx-2 social-buttons-shadow" url={url} source={url}  title={"desinforma.me"} summary={text} resetButtonStyle="false" >
                <LinkedinIcon size={iconSize} round={true} />
            </LinkedinShareButton>

            <WhatsappShareButton className="mx-2 social-buttons-shadow" url={url} source={url}  title={"desinforma.me | " + text} resetButtonStyle="false" >
                <WhatsappIcon size={iconSize} round={true} />
            </WhatsappShareButton>
        </>
    )
}

export default SocialButtons;