import React, { useState } from 'react'
import { observer } from 'startupjs'
import { TextInput } from 'react-native'
import './index.styl'

export default observer(function({
  value = '',
  onChangeText
}) {
  const [text, changeText] = useState(value)

  return pug`
    TextInput.inputArea(
      value=text
      onChangeText= () => onChangeText && onChangeText() || changeText()
    )
  `
})
