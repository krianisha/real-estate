import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../utils/api'

const usePropperties = () => {

  const {data, isError, isLoading, refetch} = useQuery(
    "allProperties", getAllProperties, {refetchOnWindowFocus: false}
  )  

  return {
    data, isError, isLoading, refetch
  }
}

export default usePropperties