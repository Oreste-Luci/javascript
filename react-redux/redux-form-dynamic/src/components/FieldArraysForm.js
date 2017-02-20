import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import { submitData } from '../actions/index';

class FieldArraysForm  extends Component{

  generateFieldsData() {

    let position = this.props.params.id;
    //console.log('params.id',this.props.params.id);
    if (position < 0 || position > 1) {
      console.error('URL index must be >= 0 and <= 1');
    }

    const data = [
      {
        fields: [
          {
            name: 'field-11',
            component: 'input',
            type: 'text',
            placeholder: 'Field 1.1'
          },
          {
            name: 'field-12',
            component: 'input',
            type: 'text',
            placeholder: 'Field 1.2'
          },
          {
            name: 'field-13',
            component: 'input',
            type: 'text',
            placeholder: 'Field 1.3'
          }
        ]
      },{
        fields: [
          {
            name: 'field-21',
            component: 'input',
            type: 'text',
            placeholder: 'Field 2.1'
          },
          {
            name: 'field-22',
            component: 'input',
            type: 'text',
            placeholder: 'Field 2.2'
          }
        ]
      }
    ];
    return data[position];
  }

  renderFields({ fields, meta: { touched, error } }) {

    console.log('fields', fields);
    console.log('touched', touched);
    console.log('error', error);

    let fieldsData = this.generateFieldsData();

    //console.log('fieldsData', fieldsData);

    return (
      <div>
      {fieldsData.fields.map( fieldObject => {        
        return (
          <div key={fieldObject.name}>
            <label>{fieldObject.placeholder}</label>
            <div>
              <Field name={fieldObject.name} component={fieldObject.component} type={fieldObject.type} placeholder={fieldObject.placeholder} />
            </div>
          </div>);
      })}
      </div>
    );
  }

  render() {

    //console.log('PROPS', this.props);

    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <h2>Field Array Form</h2>
        <div>
          <label>Fixed Field</label>
          <div>
            <Field name="fixedField" component="input" type="text" placeholder="Fixed Field"/>
          </div>
        </div>
        <FieldArray name="members" component={this.renderFields.bind(this)}/>
        <div>
          <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
          <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  console.log('values',values);
}

export default reduxForm({
  form: 'FieldArraysForm',
  validate
}, null, { submitData } )(FieldArraysForm)
