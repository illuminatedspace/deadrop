import React, { Component } from 'react'
import { connect } from 'react-redux'

import { storeSecret } from '../reducers/secret'

import Drop from '../components/Drop'

class DropContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      secret: null,
      latitude: null,
      longitude: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitSecret = this.submitSecret.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const value = target.value

    this.setState({
      secret: value
    })
  }

  submitSecret (event) {
    event.preventDefault()
    console.log('STATE IN SUBMIT', this.state.latitude, this.state.longitude)
    this.props.storeSecret(this.state.secret, this.state.latitude, this.state.longitude)

    this.setState({
      secret: null,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    })
  }

  getCoordinates () {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  componentDidMount () {
    this.getCoordinates()
    .then((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }

  render() {
    return (
      <Drop
        handleChange={this.handleChange}
        submitSecret={this.submitSecret}
      />
    )
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  storeSecret: (secret, longitude, latitude) => {
    dispatch(storeSecret(secret, longitude, latitude))
  },
})

export default connect (
  null,
  mapDispatchToProps
)(DropContainer)
