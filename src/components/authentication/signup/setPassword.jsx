import React, { Fragment } from 'react';
import { Formik } from 'formik';
import ShowSetPassword from './showSetPassword';

const initialValues = {
    email: "",
    password: "",

};

const SetPassword = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowSetPassword}
            />
        </Fragment>
    )
}

export default SetPassword;