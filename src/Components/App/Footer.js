import React from 'react';
import { AppRegistry, Image } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { useEffect } from "react";

function Footer() {
  return (
    <React.Fragment>
      <div id="footer">
        <ul id="footer-left-nav">
          <li>
            <ExternalLink href="https://www.linkedin.com/in/jeffmdinsmore/" alt="tap or click on LinkedIn to go to Jeff Dinsmore's LinkedIn page"><span id="LinkedIn">LinkedIn</span></ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/jeffmdinsmore/" alt="tap or click on LinkedIn image to go to Jeff Dinsmore's LinkedIn page">
              <img id="LinkedInImage"
                src="https://jeffdinsmore.com/images/LinkedinLogo.png"
                alt="tap or click on LinkedIn image to go to Jeff Dinsmore's LinkedIn page" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://jeffdinsmore.com/Resume-JeffDinsmore-May2021.pdf" alt="tap or click to view Jeff Dinsmore's resume"><span id="Resume">Resume</span></ExternalLink>
            {/* <span id="Resume"><a href="https://jeffdinsmore.com/JeffDinsmoreResume2020.pdf">Resume</span></a> */}
          </li>
        </ul>
        <ul id="footer-right-nav">
          <li>
            <span id="portland">Portland, OR</span>
          </li>
          <li>
            <ExternalLink href="https://jeffdinsmore.com/Resume-JeffDinsmore-May2021.pdf" alt="tap or click to view Jeff Dinsmore's resume"><span id="Resume2">Resume</span></ExternalLink>
            {/* <span id="Resume2"><a href="https://jeffdinsmore.com/JeffDinsmoreResume2020.pdf">Resume</span></a> */}
          </li>
          <li>
            <ExternalLink href="mailto:hello@jeffdinsmore.com" alt="tap or click to email Jeff Dinsmore"><span>Email</span></ExternalLink>
            {/* <span id="Email"><a href="mailto:hello@jeffdinsmore.com">Email</a></span> */}
          </li>
          <li>
            <ExternalLink href="mailto:hello@jeffdinsmore.com" alt="tap or click to email Jeff Dinsmore"><span id="Email2">Email</span></ExternalLink>
            {/* <span id="Email2"><a href="mailto:hello@jeffdinsmore.com">hello@jeffdinsmore.com</a></span> */}
          </li>
        </ul>
        {/* </div> */}
        {/* <ul id="footerUl">
          <li id="footerLi">My Heartburn Tracker</li>
          <li id="footerLi">Created by: Jeff Dinsmore</li>
        </ul> */}
      </div>

    </React.Fragment>
  );
}

export default Footer;