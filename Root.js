import React, { Component } from 'react'
import init from 'startupjs/init'
import orm from './model'
import { BASE_URL } from '@env'
import { observer } from 'startupjs'

import { View } from 'react-native'
import { TextInput, Button } from 'components'
import './Root.styl'

// Init startupjs connection to server and the ORM.
// baseUrl option is required for the native to work - it's used
// to init the websocket connection and axios.
// Initialization must start before doing any subscribes to data.
init({ baseUrl: BASE_URL, orm })

export default observer(function() {
  return pug `
    View.root
      TextInput
      Button
  `
})
