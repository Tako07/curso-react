import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
//  Para escribir querys
import { gql } from 'apollo-boost'
//  Componente que permite usar render props
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhotos($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
