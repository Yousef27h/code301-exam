import React, { Component } from 'react'
import axios from 'axios';
import Characters from './Characters';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            charsData:[],
            url: process.env.REACT_APP_SERVER, 

        }
    }
    // get all characters data from our backend
    componentDidMount = async()=>{
        const url = 'https://psychonauts-api.herokuapp.com/api/characters?limit=10';
        const charsData = await axios.get(url);
        console.log(charsData.data)
        this.setState({
            charsData: charsData.data,
        })
    }
    // componentDidMount = async()=>{
    //     const url = `${this.state.url}/get-characters`;
    //     const charsData = await axios.get(url);
    //     console.log(charsData.data)
    //     this.setState({
    //         charsData: charsData.data,
    //     })
    // }

    // create eventlistener handler to button to add a character to favorites
    addFavorite = async (obj)=>{
        // console.log(obj)
        await axios.post(`${this.state.url}/get-characters/favorite`, obj);
        const charsData = await axios.get(`${this.state.url}/get-characters`);
        this.setState({
            charsData: charsData.data,
        })
    }
    render() {
        return (
            <div>
                <Characters charsData={this.state.charsData} addFavorite={this.addFavorite}/>
            </div>
        )
    }
}

export default Home
