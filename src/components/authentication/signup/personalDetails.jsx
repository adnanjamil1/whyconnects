import React, { Fragment } from 'react';
import { Formik } from 'formik';
import ShowPersonalDetails from './showPersonalDetails';

const initialValues = {
    email: "",
    password: "",

};

const PersonalDetails = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowPersonalDetails}
            />
        </Fragment>
    )
}

export default PersonalDetails;