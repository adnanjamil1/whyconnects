import { legacy_createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../redux/reducer";

const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const store = legacy_createStore(persistedReducer);

    const persistor = persistStore(store);

    return { store, persistor };
};

export default configureStore;
