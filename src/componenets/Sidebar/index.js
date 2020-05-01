import React from 'react';
import { useDispatch } from 'react-redux';

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <ul className="list-group Sidebar" style={{marginLeft:'4%'}}>

      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: 'manager' })
      }} className="list-group-item">
       <i class="fa fa-sitemap" aria-hidden="true"></i> Manager Jobs
    </li>
      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: 'software' })
      }}  className="list-group-item">
        <i class="fa fa-tv" aria-hidden="true"></i> Software Jobs
      </li>
      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: 'education' })
      }}  className="list-group-item">
   <i class="fa fa-book" aria-hidden="true"></i> Educational Jobs
      </li>
    </ul>

  )
}