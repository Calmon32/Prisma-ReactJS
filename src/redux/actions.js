// Remove Post
export const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index
    }
}

// Add Post
export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}

// Add Comment
export const addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}