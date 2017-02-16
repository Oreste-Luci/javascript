import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost, addField } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

let FIELDS = {};

class PostNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };
    
    render() {
            class Form extends Component {
            
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

                callAddField() {
                    this.props.addField();
                }

                render() {

                        const { handleSubmit } = this.props;

                        return (
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <h3>Create a new Post</h3>
                                {_.map(this.props.fieldDefinitions, this.renderField.bind(this))}
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-secondary" onClick={this.callAddField.bind(this)}>Add Field</button>
                            </form>
                        );
                    }
            }

            Form = reduxForm({
                    form: 'PostNewForm',
                    fields: _.keys(this.props.fieldDefinitions),
                    validate
                }, null, { createPost, addField })(Form);
            return <Form fieldDefinitions={this.props.fieldDefinitions} />;
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

function mapStateToProps(state) {
    return { fieldDefinitions: state.posts.fields }
}

export default connect(mapStateToProps)(PostNew);