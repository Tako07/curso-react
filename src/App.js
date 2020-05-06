import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCardsWithData } from './container/ListOfPhotoCardsWithData'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? <PhotoCardWithQuery id={detailId} /> : <> <ListOfCategories /> <ListOfPhotoCardsWithData /> </>}
    </div>
  )
}
