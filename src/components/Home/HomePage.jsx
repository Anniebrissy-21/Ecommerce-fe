import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import NavBar from '../ui/NavBar'
import api from '../../api'
import PlaceholderContainer from '../ui/PlaceholderContainer'
import Error from '../ui/Error'

const HomePage = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(function () {
    setLoading(true)
    api.get("products").then(res => {
      console.log(res.data)
      setProducts(res.data)
      setLoading(false)
      setError('')
    })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
        setError(err.message)
      })
  }, [])





  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading || error != '' || <CardContainer products={products} /> }
      {loading && <PlaceholderContainer /> }

    </>
  )
}

export default HomePage