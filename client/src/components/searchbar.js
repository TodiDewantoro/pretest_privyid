import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

export class SearchBar extends Component {
    render() {
        return (
        <div className='container'>
        <div className='col-md-12 col-sm6'>
        <Form>
        <div className="row justify-content-center">
            <input style={{borderRadius:'5px'}} type="text" />
            <span className="input-group-btn">
            <button input type="submit" className="btn btn-primary">search</button>
            </span>
        </div>
        </Form>
        </div>
        </div>
        )
    }
}

export default SearchBar