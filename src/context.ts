import React from 'react';

import { AppContextType } from "./typing"

export const AppDefaultContext = {
    page: 1,
    loading: false,
    filter: {},
    results: []
};

export const AppContext = React.createContext<AppContextType>(AppDefaultContext);
export const AppProvider = AppContext.Provider;
