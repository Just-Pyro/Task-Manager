import React, { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <MainContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;
