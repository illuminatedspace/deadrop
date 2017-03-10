import React, { Component } from 'react'

//each text element of the form
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default class Drop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      secret: null,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
  }

  render () {
    return(
      <Paper zDepth={2}>
        <h2>drop a secret</h2>
        <form>
          <TextField
            name="secret"
            onChange={this.handleChange}
            floatingLabelText="secret"
          /><br />
          <RaisedButton
            label="drop secret"
            primary={true}
            type="submit"
          />
        </form>
      </Paper>
    )
  }
}

