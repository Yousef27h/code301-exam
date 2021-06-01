import React, { Component } from 'react'

export class FavoriteItems extends Component {
    render() {
        // map through our favorite data that we got from our back-end and have been passed through favorite page
        return this.props.Favorites.map(obj=>{
            return(
                // create two buttons for each item for deleting and updating the item's name and gender
            <div>
                <button onClick={(e)=>this.props.deleteItem(obj)}>Delete</button>
                <button onClick={(e)=>this.props.showUpdate(obj)}>Update</button>
                <h1>{obj.name}</h1>
                <p>{obj.gender}</p>
                <ul>
                    {obj.psiPowers.map(power=> <li>{power.name}</li>)}
                </ul>
            </div>
            )
        })
    }
}

export default FavoriteItems
