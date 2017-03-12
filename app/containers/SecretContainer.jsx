import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Secret from '../components/Secret'

class SecretContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      secret: '',
    }
  }

  componentDidMount() {
    // console.log('SECRET PROPS',this.props)
    let secretId = this.props.location.pathname.split('/')
    secretId = secretId[secretId.length - 1]
    console.log('SECRET ID',secretId)
    axios.get(`/api/secrets/${secretId}`)
    .then(results => {
      this.setState({
        secret: results.data
      })
    })
  }

  render () {
    console.log('SECRET CONTAINER STATE SECRET',this.state.secret)
    return (
      <Secret secret={this.state.secret}/>
    )
  }

}

const mapStateToProps = (state) => ({
  currentSecret: state.currentSecret,
})

const mapDispatchToProps = (dispatch, ownProps) => {

}

export default connect(
  mapStateToProps,
  null
)(SecretContainer)
