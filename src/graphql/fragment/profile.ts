import gql from "graphql-tag";

export const PROFILE_FRAGMENT = gql`
  fragment PROFILE_FRAGMENT on profiles {
    id
    created_at
    updated_at
    login_id
    name
    lowest_price
    highest_price
    role
    description
    worker_description
    status
  }
`;
