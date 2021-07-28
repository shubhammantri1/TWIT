import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
    load: {
        textAlign: 'center',
        margintop: 25,
        width: '100%'
    },
    loadIcon: {
        color: '#8A2BE2'
    }
}

const LoadingPosts = ( {classes} ) =>(
    <div className = {classes.load}>
    <CircularProgress classes={classes.loadIcon} />
    </div>
)

export default withStyles(style)(LoadingPosts)