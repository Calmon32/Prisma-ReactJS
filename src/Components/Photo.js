import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Photo(props) {
    const post = props.post;
    return <div className="card">
        <div className="username">
            <Link to="/user/lucas'">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png" />
                <li>Lucas</li>
            </Link>
        </div>
        <div className="postImageDiv">
            <Link to={`/single/${post.id}`}>
                <img className="postImage" src={post.imageLink} alt={post.description} />
            </Link>
        </div>
        <div className="buttonsDiv">
            {/* <button className="remove-button" onClick={() => {
                props.startRemovingPost(props.index, props.post.id)
                props.history.push('/')
            }}> Remove </button> */}
            <Link className="button" to={`/single/${post.id}`}>
                <div className="comment-count">
                    {props.comments[post.id] ? props.comments[post.id].length : 0}
                </div>
            </Link>
        </div>
    </div>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

export default Photo