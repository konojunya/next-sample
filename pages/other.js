import React from 'react'
import {connect} from 'react-redux'

import {startClock, tickClock, fetchBrands} from '../actions'
import Page from '../components/page'

class Other extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    store.dispatch(fetchBrands())

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />
  }
}

export default connect()(Other)
