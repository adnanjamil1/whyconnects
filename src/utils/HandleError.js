import { toast } from "react-toastify";
import { RequestMessages } from "./enum";
import configureStore from "../components/redux/index";
import { logOut } from "../components/redux/action";
const { store } = configureStore();

export const HandleError = (code, backendMessage) => {
    if (backendMessage) {
        toast.error(backendMessage);
    } else if (code && code === 200) {
    } else if (code && code === 201) {
    } else if (code && code === 401) {
        toast.error(RequestMessages.UNAUTHORIZED_ERROR);
        localStorage.clear();
        store.dispatch(logOut(null));
        window.location.reload();
    } else if (code && code === 403) {
        toast.error(RequestMessages.SESSION_EXPIRED_ERROR);
        // localStorage.clear();
        // sessionStorage.clear();
        // window.location.href = "/";
    } else if (code && code === 404) {
        toast.error(RequestMessages.NOT_FOUND_ERROR);
    } else if (code && code === 500) {
        toast.error(RequestMessages.INTERNAL_SERVER_ERROR);
    }
};
