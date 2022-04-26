import { gql } from "@apollo/client";
import { PROFILE_FRAGMENT } from "graphql/fragment/profile";

export const GET_PROFILES = gql`
  query profiles($login_id: String!) {
    profiles(where: { login_id: { _eq: $login_id } }) {
      ...PROFILE_FRAGMENT
    }
  }
  ${PROFILE_FRAGMENT}
`;
