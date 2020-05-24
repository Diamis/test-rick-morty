import { gql } from 'apollo-boost';

export const QUERY = gql`
    query ($page: Int, $filter:FilterCharacter){
      characters(page: $page, filter:$filter) {
        info { count, pages, next, prev },
        results { id, name, image }
      }
    }
`;

