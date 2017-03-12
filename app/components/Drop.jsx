import React, { Component } from 'react'

//each text element of the form
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default function (props) {

  const styles = {
    paper: {
      margin: 100,
      padding: 40,
    },
    button: {
      marginTop: 20,
    },
  }

  return(
    <Paper
      zDepth={2}
      style={styles.paper}
    >
      <h2>drop a secret</h2>
      <form onSubmit={props.submitSecret}>
        <TextField
          name="secret"
          onChange={props.handleChange}
          floatingLabelText="secret"
          multiLine={true}
          fullWidth={true}
        /><br />
        <RaisedButton
          label="drop secret"
          primary={true}
          type="submit"
          style={styles.button}
        />
      </form>
    </Paper>
  )
}

