import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/actions'

class Post extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.name}</h3>
                <p>{post.addressLine1}</p>
                <p>{post.addressLine2}</p>
                <p>{post.postCode}</p>
                <p>{post.age}</p>
            </div>
        ))
        return (
            <div>
                <h1>Customers</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps=state=>({
    posts:state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Post)
