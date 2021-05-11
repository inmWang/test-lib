import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
// import {getConsole} from '@/utils'
// import './index.less'

export default class Index extends Component {

  componentWillMount () {
    // getConsole()
    console.log('123')
    console.log('i edit');
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello 投票!</Text>
      </View>
    )
  }
}
