import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            addressLine1: '',
            addressLine2: '',
            postCode: '',
            age: ''
        }

        this.addName = this.addName.bind(this)
        this.addAddressLine1 = this.addAddressLine1.bind(this)
        this.addAddressLine2 = this.addAddressLine2.bind(this)
        this.addPostCode = this.addPostCode.bind(this)
        this.addAge = this.addAge.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    addName(e) {
        console.log(e.target.value)
        this.setState({ name: e.target.value })
    }

    addAddressLine1(e) {
        console.log(e.target.value)
        this.setState({ addressLine1: e.target.value })
    }

    addAddressLine2(e) {
        console.log(e.target.value)
        this.setState({ addressLine2: e.target.value })
    }

    addPostCode(e) {
        console.log(e.target.value)
        this.setState({ postCode: e.target.value })
    }

    addAge(e) {
        console.log(e.target.value)
        this.setState({ age: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        const post={
            name:this.state.name,
            addressLine1:this.state.addressLine1,
            addressLine2:this.state.addressLine2,
            postCode:this.state.postCode,
            age:this.state.age
        }

        fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data=>console.log("added"));
    }


    render() {
        return (
            <div>
                <h1>Add Customers</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Name: </label><br />
                        <input type="text" value={this.state.name} onChange={this.addName} /><br />
                    </div>
                    <div>
                        <label>AddressLine1: </label><br />
                        <input type="text" value={this.state.addressLine1} onChange={this.addAddressLine1} /><br />
                    </div>
                    <div>
                        <label>AddressLine2:</label><br />
                        <input type="text" value={this.state.addressLine2} onChange={this.addAddressLine2} /><br />
                    </div>
                    <div>
                        <label>Post Code: </label><br />
                        <input type="text" value={this.state.postCode} onChange={this.addPostCode} /><br />
                    </div>
                    <div>
                        <label>Age: </label><br />
                        <input type="text" value={this.state.age} onChange={this.addAge} /><br />
                    </div>
                    <button type="submit">ADD</button>

                </form>
            </div>
        );
    }
}