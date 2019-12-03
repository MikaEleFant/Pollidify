import React from 'react';
import './landing_page.css';
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTimer = null;
  }
  
  render() {
    const { formType } = this.props;
    
    let form;

    if(formType === "signup"){
      form = <AuthRoute path="/" component={SignupFormContainer} />;
    } else if (formType === "login"){
      form = <AuthRoute path="/" component={LoginFormContainer} />;
    }
    
    return (
      <div className="landing-page">
        <main id="landing-main">
          <div className="landing-main-div" id="landing-main-div">
            <h1>This is where we'd have our about page and stuff.</h1>
          </div>
          <div id="landing-form">
            {form}
            <i className="fas fa-angle-right" id="removeForm" onClick={this.props.hideForms}></i>
          </div>
        </main>
      </div>
    );
  }
}

export default LandingPage;
