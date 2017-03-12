import React from 'react'

import Paper from 'material-ui/Paper'


export default function (props) {
  const styles = {
    paper: {
      margin: 100,
      padding: 20,
    }
  }

  return (
    <Paper style={styles.paper}>
      {props.secret}
    </Paper>
  )
}
