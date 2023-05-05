import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


const ProtectedRoute = (props) => {
    const { exact, path, component, Template } = props;
    const auth = useSelector(state => state.auth);
    return (
        <Fragment>
            {auth?.isLoggedIn ?
                <Template path={path} component={component} exact={exact} />
                :
                <Navigate path="/" />
            }
        </Fragment>
    )
}

export default ProtectedRoute;