import React from 'react'

class Subscr extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChangeEmail = this.handlerChangeEmail.bind(this)
    this.handlerChangeFreq = this.handlerChangeFreq.bind(this)
  }
  handlerChangeEmail(event) {
    this.props.changeEmail(event.target.value)
  }
  handlerChangeFreq(event) {
    this.props.changeFreq(event.target.value)
  }
  render() {
    return (
      <div>
        <div className="form__item">
          <input
            type="text"
            placeholder="email for news subscription"
            value={this.props.email}
            onChange={this.handlerChangeEmail}
          />
        </div>
        <div className="form__item">
          <input
            type="number"
            placeholder="frequency of getting news"
            value={this.props.freq}
            onChange={this.handlerChangeFreq}
          />
        </div>
      </div>
    )
  }
}

export default Subscr;
