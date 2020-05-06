import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-takeshi-d9scu22ob.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Loader type='ThreeDots' color='#F5DBD5' height='20' /> : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
