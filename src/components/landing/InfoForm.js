import React from 'react';
import './InfoForm.css';
import { TranslationContext } from '../../contexts/translation/TranslationContext';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      userEmail: '',
    };
  }
  
  static contextType = TranslationContext;

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  handleChange = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  render() {
    if (this.state.submitted) {
      return (
        <p className="infoForm-text">
	  {this.context.subscribeSuccess}
        </p>
      );
    }
    return (
      <div className="infoForm-container">
        <p className="infoForm-text">{this.context.subscribeCaption}</p>
        <form onSubmit={this.handleSubmit} className="infoForm-form">
          <input onChange={this.handleChange} className="infoForm-input" type="email" placeholder="E-mail" />
          <button className="infoForm-button" type="submit">{this.context.subscribeButton}</button>
        </form>
      </div>
    );
  }
}

export default InfoForm;
