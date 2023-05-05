import React, { Fragment } from 'react'
import { useNavigate } from "react-router-dom";
import wi from "../media/wi.png";
import Logout from "../media/new-logout.png";
import { useDispatch } from "react-redux/es/exports";
import { loginToken } from "../components/redux/action";
import { useSelector } from "react-redux";

const SiteHeader = () => {

    let isLoggedIn = useSelector((state) => state.token);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(loginToken(null));
        navigate("/");
    };

    return (
        <Fragment>
            <div className="site-header-wrapper">
                <div className="web-brand">
                    <img src={wi} />
                    <span>wiconnect</span>
                </div>
                <div className="site-header-logout">
                    {isLoggedIn ? < img onClick={logout} src={Logout} /> : null}
                </div>
            </div>
        </Fragment>
    )
}

export default SiteHeader;