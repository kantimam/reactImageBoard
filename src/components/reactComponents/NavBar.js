import React, { Component } from 'react'
import Search from './Search.js'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <nav className={'mainNavBar noSelect'}> 
        <div className={'undecoratedLink pointer'} onClick={this.props.openUpload}>UPLOAD</div>
        <Link className={'undecoratedLink'} to='/'>POPULAR</Link>
        <div>NEW</div>
        <Search/>
        <Link className={'undecoratedLink'} to='/profile'>PROFILE</Link>
        <div>SETTINGS</div>
      </nav>
    )
  }
}