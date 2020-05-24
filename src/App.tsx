import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import get from 'lodash.get'

import './App.css';

import { AppProvider, AppDefaultContext } from './context'
import { QUERY } from './query'
import { ResultType } from './typing'
import { List } from './components/List'
import { Party } from './components/Party'
import { Search } from './components/Search'

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
});

let time: number;

const App = () => {
    const [statePage, setStatePage] = React.useState(1);
    const [stateFilter, setStateFilter] = React.useState({});
    const [stateLoading, setStateLoading] = React.useState(false);
    const [stateResults, setStateResults] = React.useState<Array<ResultType>>([]);
    const [stateRick, setStateRick] = React.useState<ResultType | undefined>();
    const [stateMorty, setStateMorty] = React.useState<ResultType | undefined>();

    React.useEffect(() => {
        setStateLoading(true);

        clearTimeout(time);
        time = setTimeout(() => {
            client
                .query({
                    query: QUERY,
                    fetchPolicy: "network-only",
                    variables: {page: statePage, filter: stateFilter}
                })
                .then(res => {
                    const results: Array<ResultType> = get(res, 'data.characters.results');
                    setStateResults(results);
                })
                .catch(err => {
                    setStateResults([]);
                })
                .finally(() => {
                    setStateLoading(false)
                })
        }, 300);

        return () => clearTimeout(time);
    },[stateFilter]);

    // Event Method
    // ----------------------------
    const handleSearch = (value: string) => {
        if(value.length <=2) return;
        setStateFilter(state => ({ ...state, name: value }));
    };

    const handleOnClick = (id: number) => {
        const item = stateResults.find(res => res.id === id);
        if(!item) return;

        if(/(rick)/i.test(item.name)) setStateRick(item);
        if(/(morty)/i.test(item.name)) setStateMorty(item);
    };

    const handleOnRemove = (id: number) => {
        const newResults = stateResults.filter(res => res.id !== id);
        setStateResults(newResults);
    };

    const AppDataContext = {
        ...AppDefaultContext,
        page: statePage,
        loading: stateLoading,
        results: stateResults,
        partyRick: stateRick,
        partyMorty: stateMorty,
        setPage: setStatePage,
        setFilter: setStateFilter,
        onCurrent: handleOnClick
    };

    return (
      <ApolloProvider client={client}>
          <AppProvider value={AppDataContext}>
            <Search onChange={handleSearch}/>
            <List onRemove={handleOnRemove}/>
            <Party />
          </AppProvider>
      </ApolloProvider>
    )
};

export default App;
