import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

import { Button } from '@material-ui/core'

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Creams</button>
      <Button onClick={props.buyIceCream}>Buy Some Ice Cream</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
