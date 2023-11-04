import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

export default function User() {
    const params = useParams();
    const {name} = params;
  return (
    <div>
        <h1>Hello {name} How Are You</h1>
    </div>
  )
}
