import React, {useState, useRef} from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import WriteBoard from '../components/WriteBoard'
import SavedImages from '../components/SavedImages'

import { takeSnapshotAsync } from 'expo'

const WritePage = ({}) => {
  const writeBoard = useRef(null)

  const strokeWidth = 4
  const color = '#4d4d4d'
  const [savedImages, setSavedImages] = useState([])
  const [drawnPaths, setDrawnPaths] = useState([])

  const _cancel = () => setDrawnPaths([])
  const _undo = () => setDrawnPaths(drawnPaths.slice(0, -1))
  const _save = async () => {
    const result = await takeSnapshotAsync(
      writeBoard,
      { format: 'png', result: 'base64', quality: 1.0 }
    )

    const newResults = savedImages
    newResults.push(result)
    setSavedImages(newResults)
  }

  return (
    <View style={styles.container}>
      <Text>Write page</Text>
      <WriteBoard
        ref={writeBoard}
        drawnPaths={drawnPaths}
        setDrawnPaths={setDrawnPaths}
        containerStyle={{ backgroundColor: '#FFF', marginTop: 10 }}
        width={Dimensions.get('window').width - 20}
        height={Dimensions.get('window').width - 20}
        color={'#4d4d4d'}
        strokeWidth={4}
      />

      <SavedImages images={savedImages} />
    </View>
  )
}

export default WritePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },

  footer: {
    color: '#555',
    fontSize: 12,
    position: 'absolute',
    bottom: 5,
    right: 10,
    paddingBottom: 20
  }
})
