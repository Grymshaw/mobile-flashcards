import React from 'react'
import { StatusBar, View } from 'react-native'

import styles from './styles'

const AppStatusBar = props => (
  <View style={styles.statusBar}>
    <StatusBar
      translucent
      {...props}
    />
  </View>
)

export default AppStatusBar
