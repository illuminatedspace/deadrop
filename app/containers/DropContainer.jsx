import React, { Component } from 'react'
import { connect } from 'react-redux'

import { storeSecret } from '..reducers/secret'

class DropContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    //might need to bind this. trying without first
    // this.submitSecret = this.submitSecret.bind(this)
  }

  submitSecret (event) {
    event.preventDefault()
    this.props.storeSecret(this.state.secret)
    this.setState({
      secret: null,
    })
  }

  render() {
    return(
      <DropContainer
        submitSecret={this.submitSecret}
      />
    )
  }

}
