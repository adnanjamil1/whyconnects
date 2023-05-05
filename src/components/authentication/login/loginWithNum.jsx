
import React, { Fragment, useState } from "react";
import { Formik } from "formik";
import { Col } from "antd";
import ShowLoginWithNum from './showLoginWithNum';
import { useDispatch } from "react-redux";
import { loginToken, loginUser } from "../../redux/action";
import { HandleError } from "../../../utils/HandleError";
import { login } from "../../../utils/apiManager";


const initialValues = {
    email: "",
    password: "",

};
const LoginWithNum = () => {
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = async (formProps) => {
        let obj = {
            username: formProps.username,
            password: formProps.password,
        };
        try {
            setIsLoginLoading(true);
            let response = await login(obj);
            {
                if (response && response.data === "Login successful") {
                    dispatch(loginToken(true));
                }
            }
            setIsLoginLoading(false);
        } catch (err) {
            if (err && err.response && err.response.status) {
                HandleError(err.response.status, err.response?.data?.details);
            }
            setIsLoginLoading(false);
        }
    };


    return (
        <Fragment>
            <div className="custom-container">
                <Col lg={9} className="mx-auto">
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                    >
                        {(formikProps) => (
                            <ShowLoginWithNum {...formikProps} isLoginLoading={isLoginLoading} />
                        )}
                    </Formik>
                </Col>
            </div>
        </Fragment>
    )
}

export default LoginWithNum;