import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

//  Componente de orden superior(hoc)
const GET_PHOTOS = gql`
query getPhotos($categotyId: ID) {
  photos(categoryId: $categotyId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const withPhotos = graphql(GET_PHOTOS)
//  ejemplo de HOC, no se usa este archivo
