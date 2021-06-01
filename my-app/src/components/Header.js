import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#00a8a8", padding:"30px", marginBottom:"30px"}}>
                <a href="/" style={{color:"white"}}>Home Page</a>
                <a href="/favorite" style={{color:"white"}}>    Favorite Page</a>
            </div>
        )
    }
}

export default Header
