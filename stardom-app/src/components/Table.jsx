import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {
    displayProstars(){
        return this.props.data.map((value)=>
            <tr key={value.id}>
                <td><img src={value.pictureUrl} alt="actor-face" /></td>
                <td>{value.name}</td>
                <td>{value.popularity}</td>
                <td><button className="delete-btn">Delete</button></td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table className="table">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.displayProstars()}
                </table>
            </div>
        )
    }
}