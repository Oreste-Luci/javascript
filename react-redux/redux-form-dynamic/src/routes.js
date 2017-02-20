import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import FieldArraysForm from './components/FieldArraysForm';
import FieldArraysForm2 from './components/FieldArraysForm2';

export default (
    <Route path="/" component={App}>
        <Route path="fieldArrays/:id" component={FieldArraysForm} />
        <Route path="fieldArrays2" component={FieldArraysForm2} />
    </Route>
);
