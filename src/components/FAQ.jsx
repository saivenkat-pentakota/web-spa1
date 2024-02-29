import React from "react";
import './FAQ.css';

function FAQ(){
    return(
        <div className="faq">
            <div className="faq-header">
            FREQUENTLY ASKED<br/>QUESTIONS.
            </div>
            <div className="faq-questions">
                <p className="faq-question">Why wouldn't i just hire a full time designer ,freelancer,or agency?</p>
                <p className="faq-question">Is there a limit to how many requests i can have?</p>
                <p className="faq-question">What programs do you design in ?</p>
                <p className="faq-question">How do i request designs?</p>
                <p className="faq-question">How fast will i recieve my design work?</p>
                <p className="faq-question">What if i only have single request?</p>
                <p className="faq-question">Are there any refunds if i don't like the service?</p>
            </div>
        </div>
    );
}

export default FAQ;