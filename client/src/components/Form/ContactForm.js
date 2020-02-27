import React, { Component } from 'react'

​export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    }
    this.submitForm = this.submitForm.bind(this);

  }
​
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


  render() {
    const { status } = this.state;
    return (
        <h1>Hello</h1>
    //      <form
    //      onSubmit={this.submitForm}
    //      action="https://formspree.io/xwkbbjpa"
    //      method="POST"
    //    >
    //      <input type="email" name="email" placeholder="your email" />
    //     <div class="space-20"></div>
    //     <textarea  name="message" id="message" cols="30" placeholder="Write your message" rows="5"></textarea>
    //     <div class="space-20"></div>
    //     {status === "SUCCESS" ? <p>Thanks!</p> :  <button href="#" class="gradient-btn v2">Send message</button>}
    //     {status === "ERROR" && <p>Ooops! There was an error.</p>}

    // </form>
    );
  }
​
}