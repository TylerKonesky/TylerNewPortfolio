import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Contact extends React.Component{

    renderError({ error, touched}){
        if(touched && error){
            return(
                <div>
                    {error}
                </div>
            )
        }
    }

    renderInput=({input, label, meta}) => {
        return(
            <div>
                <label>{label}</label>
                <input {...input} autoCapitalize="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    render(){
        return(
            <form>
                <Field name="name" component={this.renderInput} label="Name"></Field>
                <Field name="phone" component={this.renderInput} label="Phone"></Field>
                <Field name="company" component={this.renderInput} label="Company"></Field>
            </form>
        )
    }
}

export default reduxForm({
    form: 'contactForm'
})(Contact)