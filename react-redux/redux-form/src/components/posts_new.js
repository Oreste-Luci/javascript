import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import _ from 'lodash';

let FIELDS = {
    title: {
        type: 'input',
        label: 'Post Title'
    },
    categories: {
        type: 'input',
        label: 'Post Categories'
    },
    content: {
        type: 'textarea',
        label: 'Post Content'
    }    
};

class PostNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props).then( () => {
            // Blog post has been created, navigate the uer to the index
            this.context.router.push('/');
        });
    }

    renderField(fieldConfig, field) {

        const fieldHelper = this.props.fields[field];

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`} key={fieldConfig.label}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        );
    }

    render() {

        const { handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new Post</h3>
                {_.map(FIELDS, this.renderField.bind(this))}
                <Link to="/" className="btn btn-danger">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (type,field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }        
    });

    return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3nd is mapDispatchToProps
export default reduxForm({
    form: 'PostNewForm',
    fields: _.keys(FIELDS),
    validate
}, null, { createPost })(PostNew);