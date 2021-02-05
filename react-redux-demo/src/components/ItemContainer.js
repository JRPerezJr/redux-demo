import { Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <Button onClick={props.buyItem}>Buy Items</Button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer) // can also take null as the first parameter
