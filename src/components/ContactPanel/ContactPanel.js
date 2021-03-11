import React from "react";
import { Button } from '../../components';

import css from './ContactPanel.module.css';

export default class ContactPanel extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);

    const {
      id,
      title,
      subTitle,
    } = props;

    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className={css.panelWrapper}>
        <div>
          <h2>{this.props.title}</h2>
          {this.props.subTitle ? <p>{this.props.subTitle}</p> : null}
        </div>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mrgowbqr"
          method="POST"
        >
          <label>
            Name
            <input type="name" placeholder="Your name" name="name" />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="Your email" name="email" />
          </label>
          <div className="flex-wrap combo">
            <label style={{ marginRight: '1rem' }}>
              Preferred Meeting Date
              <input style={{ height: '34px' }} type="date" name="date" />
            </label>
            <label>
              Guests
              <input placeholder="1" style={{ height: '34px' }} type="number" name="guests" />
            </label>
          </div>
          <label>
            Message
            <input type="text" placeholder="Your message" name="message" />
          </label>
          <input type="hidden" name="listing" value={this.props.id} />
          {status === "SUCCESS" ? <p>Thanks for your interest in this space! We'll contact you shortly.</p> : <Button type="submit">Send</Button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
