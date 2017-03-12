import React from 'react'
import { connect } from 'react-redux'

//MATERIAL-UI
//needed for onTouchTap
//http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
  purple900, purple500,
  grey600, grey900,
  pinkA100, pinkA200, pinkA400,
  amber300, amber50, amber200,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

//provider theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//used to get dark default theme
import getMuiTheme from 'material-ui/styles/getMuiTheme'
//dark default theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//navbar
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple900,
    primary2Color: purple500,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: amber50,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: amber200,
    canvasColor: grey900,
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
})

const styles = {
  title: {
    fontWeight: 900,
  },
  rightButtons: {
    marginTop: 15,
  },
  button: {
    color: amber200,
  },
}

const rightButtons = (
  <span>
    <FlatButton
      label="drop"
      href="/drop"
      default={true}
      style={styles.button}
    />
    <FlatButton
      label="find"
      href="/secrets"
      default={true}
      style={styles.button}
    />
  </span>
)


export default function App ({ children }) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          title="deadrop"
          showMenuIconButton={false}
          iconElementRight={rightButtons}
          titleStyle={styles.title}
          iconStyleRight={styles.rightButtons}
        />
        <div id="dynamic-view">
          {children}
        </div>
      <div id="footer">
        <p>&copy; Liz Phillips <a href="http://www.lizkristinaphillips.com">lizkristinaphillips.com</a></p>
      </div>
      </div>
    </MuiThemeProvider>
  )
}
