import React, { createContext, useState, useContext } from 'react';

const CurrentUserContext = createContext();

export function useCurrentUser() {
    return useContext(CurrentUserContext);
}

export function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}