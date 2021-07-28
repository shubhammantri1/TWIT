import React, { Component } from 'react'
import { connect }  from 'react-redux'
import ListPost from './posts/ListPost'
// import { withRouter } from 'react-router-dom'
import Login from './auth/Login'

class Home extends Component{
    // componentDidMount(){
    //     if(this.props.isAuthenticated){
    //         this.props.history.push('/login')
    //     }
    // } 
    render(){
        const { isAuthenticated } = this.props
        return(
            <div>
                { isAuthenticated ? <ListPost /> : <Login /> }
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home)
