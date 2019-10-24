import React, { Component } from 'react'
import { View, PanResponder, StyleSheet} from 'react-native'
import Svg, { G, Path } from 'react-native-svg';
import Reaction from './Reaction'

class WriteBoard extends Component {
  state = {
    currentMax: 0,
    currentPoints: [],
    reaction: new Reaction(),
    brushCoords: [0, 0],
    brushing: false
  }

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gs) => true,
    onMoveShouldSetPanResponder: (evt, gs) => true,
    onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
    onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
    onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs)
  })

    onTouch = (evt) => {
        let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY]
        const newCurrentPoints = this.state.currentPoints
        newCurrentPoints.push({ x, y })

        newCurrentPoints.length && !this.state.brushing && this.setState({brushing: true})

        this.setState({brushCoords: [x, y]})

        this.setState({
        drawnPaths: this.props.drawnPaths,
        currentPoints: newCurrentPoints,
        currentMax: this.state.currentMax
        })
    }

  onResponderGrant = (evt) => this.onTouch(evt)

  onResponderMove = (evt) => this.onTouch(evt)

  onResponderRelease = () => {

  const newPaths = this.props.drawnPaths
  console.log(this.state.currentPoints)
  if (this.state.currentPoints.length > 0) {
    // Cache the shape object so that we aren't testing
    // whether or not it changed too many components?
    newPaths.push(
      <Path
        key={this.state.currentMax}
        d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
        stroke={this.props.color}
        strokeWidth={this.props.strokeWidth}
        fill="none"
      />
    )
  }

  this.setState({
    currentPoints: [],
    currentMax: this.state.currentMax + 1
  })

  this.props.setDrawnPaths(newPaths)
}

_onLayoutContainer = (e) => {
  this.state.reaction.setOffset(e.nativeEvent.layout)
}

  render() {
    return (
        <View
            onLayout={this._onLayoutContainer}
            style={[
                styles.drawContainer,
                this.props.containerStyle,
                { width: this.props.width, height: this.props.height }
            ]}
            {...this._panResponder.panHandlers}
        >
            <View>
            <Svg
                style={styles.drawSurface}
                width={this.props.width}
                height={this.props.height}
            >
                <G>
                    {this.props.drawnPaths}
                </G>
                <Path
                key={this.state.currentMax}
                d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
                stroke={this.props.color}
                strokeWidth={this.props.strokeWidth - 1}
                strokeOpacity={0.5}
                fill="none"
                />
            </Svg>
            {this.props.children}
            </View>
        </View>
        )
    }

}

export default WriteBoard


let styles = StyleSheet.create({
  drawContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },

  drawSurface: {
    backgroundColor: 'transparent'
  }
});
