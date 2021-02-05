import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

import { Button } from '@material-ui/core'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
      <Button onClick={props.buyCake}>Buy Some Cake</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
