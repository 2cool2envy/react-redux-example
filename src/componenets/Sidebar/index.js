import React from 'react';
import { useDispatch } from 'react-redux';
import './sidebar.scss';

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <ul className="list-group Sidebar" style={{marginLeft:'4%'}}>

      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: 'manager' })
      }} className="list-group-item">
       <i className="fa fa-sitemap" aria-hidden="true"></i> Manager Jobs
    </li>
      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: 'software' })
      }}  className="list-group-item">
        <i className="fa fa-tv" aria-hidden="true"></i> Software Jobs
      </li>
      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: 'education' })
      }}  className="list-group-item">
   <i className="fa fa-book" aria-hidden="true"></i> Educational Jobs
      </li>
      <li onClick={() => {
        dispatch({ type: 'SET_INPUT', payload: '' })
      }} className="list-group-item">
       <i className="fa fa-list-ul" aria-hidden="true"></i> All Jobs
    </li>
    </ul>

  )
}