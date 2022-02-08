import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Subscr from './index'
import {actionChangeEmail,actionChangeSFreq} from '../../store/actions'

class SubscrContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Subscr
        email={this.props.email}
        freq={this.props.freq}
        changeEmail={this.props.changeEmail}
        changeFreq={this.props.changeFreq}
      />
    )
  }
}

const transferStateToProps = (store) => {
  return {
    email: store.subscr.email,
    freq: store.subscr.freq
  }
};

const transferDispatchToProps = (dispatch) => {
  return {
    changeEmail: bindActionCreators(actionChangeEmail, dispatch),
    changeFreq: bindActionCreators(actionChangeSFreq, dispatch)
  }
}

export default connect(transferStateToProps,transferDispatchToProps)(SubscrContainer)
