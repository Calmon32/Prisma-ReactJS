import { database } from '../database/firebase'

export const startAddingPost = (post) => {
    return (dispatch) => {
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const startLoadingPosts = () => {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const startRemovingPost = (index, id) => {
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }
    return (dispatch) => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const startAddingComment = (comment, id) => {
    return (dispatch) => {
        return database.ref(`comments/${id}`).push(comment).then(() => {
            dispatch(addComment(comment, id))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const startLoadingComments = () => {
    return (dispatch) => {
        return database.ref(`comments`).once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

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

export const loadPosts = (posts) => {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export const loadComments = (comments) => {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}