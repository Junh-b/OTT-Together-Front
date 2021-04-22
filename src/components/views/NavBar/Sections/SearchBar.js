import React from 'react'
import { Menu, Form } from 'semantic-ui-react'

function SearchBar() {

    return (
        <div style={{paddingTop:'20px'}}>
        <Form size='large'>
            <Form.Group widths='equal'>
                <Form.Field>
                    <input placeholder='Search...'/>
                </Form.Field>
                <Form.Button type='submit'>Search</Form.Button>
            </Form.Group>
        </Form>
        </div>
    )
}

export default SearchBar