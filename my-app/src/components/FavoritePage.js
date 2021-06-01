import axios from "axios";
import React, { Component } from "react";
import FavoriteItems from "./FavoriteItems";
import UpdateForm from "./UpdateForm";
export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      url: process.env.REACT_APP_SERVER,
      nameUpdate: "",
      genderUpdate: "",
      showUpdateForm: false,
      objectUpdate: "",
    };
  }

  // get all favorite data from back-end
  componentDidMount = async () => {
    const url = `${this.state.url}/get-characters/favorite`;
    const favData = await axios.get(url);
    this.setState({
      favData: favData.data,
    });
  };
  // delete an item from favorites
  deleteItem = async (obj) => {
    const modFav = await axios.delete(
      `${this.state.url}/get-characters/favorite/${obj.name}`
    );
    this.setState({
      favData: modFav.data,
    });
  };

  // update name & gender of an item from favorites
  showUpdate = async (obj) => {
    this.setState({
      showUpdateForm: true,
      objectUpdate: obj,
      nameUpdate: obj.name,
      genderUpdate: obj.gender,
    });
  };
  // add eventlistener to text boxes, to update data in state whenever changed
  changeName = (e) => {
    this.setState({ nameUpdate: e.target.value });
  };
  changeGender = (e) => {
    this.setState({ genderUpdate: e.target.value });
  };

  // add eventlistener to submit button, to update data in our backend and render the updated data on favorites page
  submitUpdate = async (e) => {
      e.preventDefault();
    await axios.put(
      `${this.state.url}/get-characters/favorite/${this.state.objectUpdate.name}`,
      { newName: this.state.nameUpdate, gender: this.state.genderUpdate }
    );
    const url = `${this.state.url}/get-characters/favorite`;
    const favData = await axios.get(url);
    this.setState({
      favData: favData.data,
    });
  };
  render() {
    return (
      <div>
        {this.state.showUpdateForm && (
          <UpdateForm
            formName={this.state.nameUpdate}
            formGender={this.state.genderUpdate}
            changeName={this.changeName}
            changeGender={this.changeGender}
            submitUpdate={this.submitUpdate}
          />
        )}
        <FavoriteItems
          Favorites={this.state.favData}
          deleteItem={this.deleteItem}
          showUpdate={this.showUpdate}
        />
      </div>
    );
  }
}

export default Favorite;
