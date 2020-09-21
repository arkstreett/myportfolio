import React from "react";
import "../styles/Contact.css";
import emailjs  from "emailjs-com";
import Button from '@material-ui/core/Button';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Trans = ReactCSSTransitionGroup;

const fadeIn = (n, timeoutLength) => {
    return {
        transitionName: `fadeIn${n}`,
        transitionEnterTimeout: 0,
        transitionAppear: true,
        transitionAppearTimeout: timeoutLength,
        transitionLeave: true,
        transitionLeaveTimeout: 500
    }
}



function Contact() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio-contact', e.target, 'user_1aKhs89JqAXXb2FbV1nBs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }



    return (
     <div className="contact-page">
         <form onSubmit={sendEmail}>
            <Trans  {...fadeIn(1, 1000)}>
            <div>
              <h3>Name:</h3>
              <input type="text" placeholder="Name..." name="name" />
            </div>
            </Trans>

            <Trans  {...fadeIn(2, 1500)}>
            <div>
              <h3>E-Mail:</h3>
              <input type="email" placeholder="Email Address..." name="email"  />
            </div>
            </Trans>

            <div>
              <h3>Subject:</h3>
              <input type="text" placeholder="Subject..." name="subject" />
            </div>

            <div>
              <h3>Message:</h3>
              <textarea id="" cols="30" row="8" placeholder="Your Message..." name="message"></textarea>
            </div>

            <div>
              <Button type="submit" value="Send Message" variant="contained" color="primary" disableElevation>
                   Send
              </Button>
            </div>
         </form>
     </div>

    );
  }
  
  export default Contact;
  