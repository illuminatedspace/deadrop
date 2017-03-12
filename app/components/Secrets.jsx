import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import Email from 'material-ui/svg-icons/communication/email'
import Paper from 'material-ui/Paper'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
}
export default function (props) {
console.log('SECRETS PROPS',props)
  return(
  <div>
    <Paper zDepth={1}>
      <p>There are {props.secretsNearby.length || 0} secrets nearby.</p>
    </Paper>

    <Paper zDepth={3} style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        <Subheader>Secrets Here</Subheader>
        {props.secretsHere.map((secret, index) => (
          <GridTile
            key={index}
            onClick={props.setCurrentSecret}
          >
            <Email />
          </GridTile>
        ))}
      </GridList>
    </Paper>
  </div>
  )
}
