import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return <div>
        <Link className="addIcon" to="/AddPhoto"></Link>
        <div className="photoGrid">
            {props.posts
                .sort((x,y) => {
                    return y.id - x.id
                })
                .map((post, index) => <Photo post={post} key={index} index={index} {...props}/>)}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall