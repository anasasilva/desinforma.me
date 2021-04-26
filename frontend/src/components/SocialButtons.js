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
        url = "www.desinforma.me", 
        text="Olhem o meu novo score!", 
        iconSize=32 

    } = props;


    return (
        <>
            <FacebookShareButton quote={text} url={url} resetButtonStyle="false" >
                <FacebookIcon size={iconSize} round={true} />
            </FacebookShareButton>
            
            <TwitterShareButton url={url} title={text} resetButtonStyle="false">
                <TwitterIcon size={iconSize} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton url={url} source={url}  title={"desinforma.me"} summary={text} resetButtonStyle="false" >
                <LinkedinIcon size={iconSize} round={true} />
            </LinkedinShareButton>

            <WhatsappShareButton url={url} source={url}  title={"desinforma.me | " + text} resetButtonStyle="false" >
                <WhatsappIcon size={iconSize} round={true} />
            </WhatsappShareButton>
        </>
    )
}

export default SocialButtons;