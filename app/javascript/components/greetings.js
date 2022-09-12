import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomGreeting } from '../store/greetingSlice'

export default function () {
  const message = useSelector(state => state.greeting.message)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRandomGreeting())
  }, [dispatch])

  return <div>{message.message}</div>
}