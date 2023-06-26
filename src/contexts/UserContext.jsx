import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const localStorageToken = localStorage.getItem('token');
    const [token, setToken] = useState(localStorageToken !== null ? localStorageToken : "");


    return (
        <UserContext.Provider value={{ token, setToken }}>

            {children}

        </UserContext.Provider>

    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};