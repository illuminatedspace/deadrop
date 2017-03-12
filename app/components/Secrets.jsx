import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import Email from 'material-ui/svg-icons/communication/email'
import Paper from 'material-ui/Paper'

const styles = {
  wrapper: {
    padding: 50,
  },
  subheader: {
    textJustify: 'center',
  },
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
  envelope: {
    width: 150,
    height: 150,
  },
  button: {
    width: 200,
    height: 200,
    padding: 20,
  }
}
export default function (props) {
//uses correct grammar to describe the number of secrets nearby.
let phrasing = props.secretsNearby.length === 1 ? ['is', 'secret'] : ['are', 'secrets']

  return (
  <div>
    <Paper zDepth={1} style={styles.wrapper}>
      <p>There {phrasing[0]} <strong>{props.secretsNearby.length || 0}</strong> <em>{phrasing[1]} nearby.</em></p>
    <Paper zDepth={2} style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
        cols={3}
      >
        <Subheader><h3>Secrets Here</h3></Subheader>
        {props.secretsHere.map((secret, index) => (
          <GridTile
            key={index}
          >
            <Paper zDepth={3}>
              <IconButton
                style={styles.button}
                iconStyle={styles.envelope}
                href={`/secret/${secret.id}`}
                touch={true}
              >
                <Email />
              </IconButton>
            </Paper>
          </GridTile>
        ))}
      </GridList>
    </Paper>
    </Paper>
  </div>
  )
}
