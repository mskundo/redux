import { FETCH_POST, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
    console.log("featching")
    fetch('https://customer-service-madhu.cfapps.io/customers')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts
        }));
}
