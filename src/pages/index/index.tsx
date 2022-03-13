import { Component } from 'react'
import { View, Text,Button,Navigator } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>宋馨璐，我喜欢你哦
        </Text>
        <Button>页面主操作 Normal</Button>
        <Navigator></Navigator>
      </View>
    )
  }
}
