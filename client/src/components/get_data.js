import React, {Component} from 'react';
import axios from 'axios';

class GetData extends Component {

    componentDidMount(){
        this.getData();
        this.getBetterStuff();
    }

    async getData(){
        const response = await axios.get('/api/get-stuff');

        console.log('Response', response);
    }

    async getBetterStuff(){
        const response = await axios.get('/api/better-stuff');

        console.log('Better Response', response);
    }

    render(){
        return(
            <div> 
                <h1> This is get data</h1>
            </div>
        );
    }
}

export default GetData;