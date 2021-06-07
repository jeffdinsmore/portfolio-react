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
          <ExternalLink href="https://www.linkedin.com/in/jeffmdinsmore/" alt="tap or click on LinkedIn image to go to Jeff Dinsmore's LinkedIn page">
              <img id="LinkedInImage"
                src="https://jeffdinsmore.com/images/LinkedinLogo.png"
                alt="tap or click on LinkedIn image to go to Jeff Dinsmore's LinkedIn page" />
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/jeffmdinsmore/" alt="tap or click on LinkedIn to go to Jeff Dinsmore's LinkedIn page"><span id="LinkedIn">LinkedIn</span></ExternalLink>
            
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
            <ExternalLink href="mailto:hello@jeffdinsmore.com" alt="tap or click to email Jeff Dinsmore"><span id="Email2">hello@jeffdinsmore.com</span></ExternalLink>
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

// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// function Footer() {
//   return (
//     <MDBFooter color="blue" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// }

// export default Footer;