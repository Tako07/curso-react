import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const query = gql`
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
export const ListOfPhotoCardsWithData = (categoryId) => (
  <Query query={query} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return 'cargando'
        } else {
          const { photos = [] } = data
          return <ListOfPhotoCardsComponent data={photos} />
        }
      }
    }
  </Query>
)

// export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
