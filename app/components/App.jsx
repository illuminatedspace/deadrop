import React from 'react'
import { connect } from 'react-redux'

//MATERIAL-UI
//needed for onTouchTap
//http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin'

//provider theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//used to get dark default theme
import getMuiTheme from 'material-ui/styles/getMuiTheme'
//dark default theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//navbar
import AppBar from 'material-ui/AppBar'

export default function App ({ children }) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <AppBar title="deddrop" />
      <div>
        {children}
      </div>
    </MuiThemeProvider>
  )
}
