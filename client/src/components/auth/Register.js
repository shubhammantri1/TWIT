import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { registerUser } from '../../actions/authAction'


const styles = {
    textField:{
        width: '100%',
        marginBottom:5
    },
    btnBlock:{
        textAlign: 'center',
        marginBottom:10
    }
}


class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}
    handleChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registerUser(userData, this.props.history)
    }
    
    render(){   
        const { classes } = this.props;
        const { errors } = this.state;
        return(
            <Paper style={{ padding: 15}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        type = "name"
                        name = "name"
                        className = {classes.textField}
                        label = "Name"
                        value={this.state.name}
                        onChange = {this.handleChange}
                        helperText = {errors.name ? errors.name : ''}
                        error = {errors.name ? true : false }
                    />
                    <TextField 
                        type = "email"
                        name = "email"
                        className = {classes.textField}
                        label = "Email"
                        value={this.state.email}
                        onChange = {this.handleChange}
                        helperText = {errors.email ? errors.email : ''}
                        error = {errors.email ? true : false }
                    />
                    <TextField 
                        type = "password"
                        name = "password"
                        className = {classes.textField}
                        label = "Password"
                        value={this.state.password}
                        onChange = {this.handleChange}
                        helperText = {errors.password ? errors.password : ''}
                        error = {errors.password ? true : false }
                    />
                    <TextField 
                        type = "password"
                        name = "password2"
                        className = {classes.textField}
                        label = "Repeat Password"
                        value={this.state.password2}
                        onChange = {this.handleChange}
                        helperText = {errors.name ? errors.name : ''}
                        error = {errors.password2 ? true : false }
                    />
                    <div className={classes.btnBlock}>
                        <Button variant="outlined" type="submit">Submit</Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)))