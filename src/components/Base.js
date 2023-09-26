import React from 'react'
import CustomNavbar from '../components/CustomNavbar.jsx';
const Base = ({title="Welcome to Blogging",chidren}) => {

  return (
    <div>
    < CustomNavbar/>
{chidren}
    </div>
  )
}

export default Base;