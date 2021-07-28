import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/postAction'
import LoadingPosts from './LoadingPosts'

class ListPost extends Component{
    componentDidMount(){
        this.props.getPosts()
        console.log(this.props)
    }
    render(){
        const { list, loading } = this.props
        // const { allPosts } = this.state
        const items = list && list.map(el => <Post key={el._id} post={el} />)
        return(
            <div> 
                <AddPost />
                    {loading ? <LoadingPosts/> : items}  
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.post.list,
    loading: state.post.loading

})

export default connect(mapStateToProps, { getPosts })(ListPost)