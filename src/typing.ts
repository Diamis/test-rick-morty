export type FilterType = {
    name?: String
    status?: String
    species?: String
    type?: String
    gender?: String
}

export type ResultType = {
    id: number
    name: string
    image: string
}

export type AppContextType = {
    loading: boolean
    page: number
    filter: FilterType
    results: Array<ResultType>
    partyRick?: ResultType
    partyMorty?: ResultType
    setPage?: (page: number) => void
    setFilter?: (filter: FilterType) => void
    onCurrent?: (id: number) => void
}
