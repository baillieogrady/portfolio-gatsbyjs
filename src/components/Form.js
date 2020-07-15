import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xknnyvgj"
          method="POST"
          className="mb4 f7"
        >
          <label>
            <p className="mt0 ttu fw5 tracked">
              Your Name:
              </p>
            <span>
              <input type="text" name="your-name" required  className="w-100 ba br2 bw1 pa2 b--light-gray"/>
            </span>
          </label>
          <label>
            <p className="ttu fw5 tracked">
              Your Email:
              </p>
            <span>
              <input type="email" name="your-email" required className="w-100 ba br2 bw1 pa2 b--light-gray" />
            </span>
          </label>
          {/* <label>
            <p>
              Type of project:
              </p>
          </label>
          <div className="select">
            <span>
              <select name="your-project" required>
                <option value="">—</option>
                <option value="WordPress">WordPress</option>
                <option value="Landing Page">Landing Page</option>
              </select>
            </span>
          </div> */}
          {/* <label>
            <p>
              Budget:
              </p>
          </label>
          <div className="select">
            <span>
              <select name="your-budget" required>
                <option value="">—</option>
                <option value="£500 - £1,000">£500 – £1,000</option>
                <option value="£1,000 - £5,000">£1,000 – £5,000</option>
                <option value="£5,000+">£5000+</option>
              </select>
            </span>
          </div> */}
          <label>
            <p className="ttu fw5 tracked">
              Project Details:
              </p>
            <span>
              <textarea name="your-message" placeholder="Tell me a little about your project" style={{ fontFamily: "Arial" }} required className="w-100 ba br2 pa2 h4 dark-gray b--light-gray bw1"></textarea>
            </span>
          </label>
          {status === "SUCCESS" ? <p className="green"><span className="b">Message received. Thanks!</span><span class="db">I'll be in touch soon</span></p> : <button className="bg-blue f7  fw7 pv2  ph3 ttu white tracked br2 box-shadow-none dim mt3 pointer bn">Send</button>}
          {status === "ERROR" && <p className="red b pt2">Ooops! There was an error.</p>}
        </form>
      </div>
    )
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