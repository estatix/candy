import React from 'react'
import { observer } from 'startupjs'
import { TouchableOpacity, Text } from 'react-native'
import './index.styl'

export default observer(function({
  onPress = () => alert('Thanks for click!'),
  title = 'Click me!'
}) {
  return pug`
    TouchableOpacity.button(activeOpacity=0.7 onPress=onPress)
      Text.title= title
  `
})
