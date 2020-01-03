import React from 'react'
import { TextInput } from 'react-native'
import './index.styl'

export default class Input extends React.Component {
  state = {
    text: ''
  }

  render() {
    const { value = '' } = this.props

    return pug `
      TextInput(
        styleName=['inputArea']
        value=this.state.text
        onChangeText=text => this.setState({ text })
      )
    `
  }
}

// class implementation of component can be more advantage then
// functional one for learning design pattern statement

// here we will write a functional alternative of component implementation

// import { useState } from 'react'
// import { observer } from 'stratupjs'

// export default observer(function({
//   value = ''
// }) {
//   const [text, changeText] = useState('')

//   return pug`
//     TextInput(
//       value=text
//       onChangeText=changeText
//     )
//   `
// })
