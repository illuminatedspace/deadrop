import React, { Component } from 'react'

//each text element of the form
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default function (props) {

  return(
    <Paper zDepth={2}>
      <h2>drop a secret</h2>
      <form onSubmit={props.submitSecret}>
        <TextField
          name="secret"
          onChange={props.handleChange}
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

