import React, { Fragment } from 'react';
import { Formik } from 'formik';
import ShowPermanentaddress from './showPermanentaddress';

const initialValues = {
    email: "",
    password: "",

};

const PermanentAddress = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowPermanentaddress}
            />
        </Fragment>
    )
}

export default PermanentAddress;