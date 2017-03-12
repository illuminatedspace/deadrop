import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// import { fetchNearby, fetchHere } from '../reducers/secret'

import Secrets from '../components/Secrets'
import Jokes from '../components/Jokes'

class SecretsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      latitude: 0.00,
      longitude: 0.00,
      secretsHere: [],
      secretsNearby: 0,
      currentSecret: {},
      secretsLoaded: false,
    }

    this.setCurrentSecret = this.setCurrentSecret.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
    this.fetchNearby = this.fetchNearby.bind(this)
    this.fetchHere = this.fetchHere.bind(this)

  }

  getCoordinates () {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  setCurrentSecret (event) {
    this.setState({
      currentSecret: this.event.target.id,
    })
  }

  fetchNearby () {
    axios.put('/api/secrets/nearby', {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })
    .then(results => {
      console.log('SECRETS NEARBY',results.data)
      return this.setState({
        secretsNearby: results.data,
      })
    })
    .catch(console.error)
  }

  fetchHere () {
    axios.put('/api/secrets/here', {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })
    .then(results => {
      console.log('SECRETS HERE',results.data)
      return this.setState({
        secretsHere: results.data,
      })
    })
    .catch(console.error)
  }

  // componentWillMount () {
  //   console.log('IN SECRETS WILL MOUNT')
  // }

  componentDidMount () {
    this.getCoordinates()
    .then((position) => {
      return this.setState({
        longitude: position.coords.latitude,
        latitude: position.coords.longitude,
      })
    })
    .then(() => {
      this.fetchNearby()
    })
    .then(() => {
      this.fetchHere()
    })
    .then(() => {
      this.setState({
        secretsLoaded: true,
      })
    })
    .catch(console.error)
    // this.fetchNearby()
    // this.fetchHere()
  }

  render() {
    console.log('RENDER HERE',this.state.secretsHere)
    console.log('RENDER NEARBY',this.state.secretsNearby)
    return (
      <div>
        {this.state.secretsLoaded ?
          <Secrets
            setCurrentSecret={this.setCurrentSecret}
            secretsNearby={this.state.secretsNearby}
            secretsHere={this.state.secretsHere}
          />
          : <div>Loading Secrets</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  null,
  mapDispatchToProps
)(SecretsContainer)
