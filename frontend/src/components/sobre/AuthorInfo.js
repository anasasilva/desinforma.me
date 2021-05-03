import React from "react";
import {
    LinkedinIcon, EmailIcon
} from "react-share";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const AuthorsInfo = (props) => {

    const { name, linkedin, mail, github } = props;

    return (
        <div className="d-flex justify-content-between w-100 px-4 my-2">
            <p className="text-left mb-0">{name}</p>
            <div className="d-flex">
                <a href={"mailto:" + mail} className="icon-size text-muted" target="_blank"><FontAwesomeIcon size="1x" icon={faAt}/></a>
                <a href={"https://www.linkedin.com/in/" + linkedin} className="icon-size linkedin-color" target="_blank"><FontAwesomeIcon size="1x" icon={faLinkedin}/></a>
                {/* <a href="https://www.linkedin.com/in/anasasilva/" className= text-dark"><LinkedinIcon size={25} round={true} /></a> */}
                {/* <a href="https://www.linkedin.com/in/anasasilva/" className="mail-size text-dark my-0"><EmailIcon size={25} round={true} /></a> */}
                <a href={"http://github.com/" + github} className="icon-size text-dark" target="_blank"><FontAwesomeIcon size="1x" icon={faGithub}/></a>
            </div>
        </div>
    )
}

export default AuthorsInfo;