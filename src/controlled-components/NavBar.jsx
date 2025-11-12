
import React from 'react'

const NavBar = (props) => {
  return (
    <nav className={`d-flex ${props.theme} my-3 align-items-center justify-content-between p-3 border border-1 border-secondary`}>
      <div><span className='fs-4 fw-bold'>{props.brandTitle}</span></div>
      <div>
        {
          props.navItems.map((item)=><span key={item} className='mx-3'>{item} </span>)
        }
      </div>
      <div>
        <button className='btn btn-danger'>SignIn</button>
      </div>
    </nav>
  )
}

export default NavBar
