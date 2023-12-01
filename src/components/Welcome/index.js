// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  isSubscriptionIn = () => {
    this.setState(previousState => ({isSubscribe: !previousState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="greet">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.isSubscriptionIn}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
