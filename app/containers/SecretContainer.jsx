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
    let secretId = this.props.location.pathname.split('/')
    secretId = secretId[secretId.length - 1]
    axios.get(`/api/secrets/${secretId}`)
    .then(results => {
      this.setState({
        secret: results.data
      })
    })
  }

  render () {
    return (
      <Secret secret={this.state.secret} />
    )
  }

}

const mapStateToProps = (state) => ({
  currentSecret: state.currentSecret,
})

export default connect(
  mapStateToProps,
  null
)(SecretContainer)
