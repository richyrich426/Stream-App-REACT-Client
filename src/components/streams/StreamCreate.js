import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({input, label}) {
        return (
            <div className={"field"}>
            <label>
                {label}
            </label>
                <input 
                    {...input} 
                />
            </div>
        );
    }

    onSubmit (formValues) {
        console.log(formValues)
    }

    render() {
        return (
            <form className={"ui form"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name={"title"}
                    label={"Enter Title"}
                    component={this.renderInput}
                />
                <Field
                    name={"description"}
                    label={"Enter Description"}
                    component={this.renderInput}
                />
                <button className={"ui button primary"}>
                    Submit
                </button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);