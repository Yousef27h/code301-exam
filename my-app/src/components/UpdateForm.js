import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.props.submitUpdate(e)}>
                    <label for="fname">Name:</label>
                    <br></br>
                    <input type="text" id="fname" value={this.props.formName} onChange={(e)=>this.props.changeName(e)}/>
                    <br></br>
                    <label for="fgender">Gender:</label>
                    <br></br>
                    <input type="text" id="fgender" value={this.props.formGender} onChange={(e)=>this.props.changeGender(e)}/>
                    <br></br>
                    <input type="submit" value="Update"/>
                </form>
            </div>
        )
    }
}

export default UpdateForm
