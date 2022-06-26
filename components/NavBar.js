import React from 'react'

export default function NavBar() {
    return (
        <div className='' >
  <nav className="navbar bg-dark  navbar-expand-lg navbar-light text-white">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div style={{justifyContent:'space-between'}} className="collapse text-white navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav text-white mr-auto">
        <li className="nav-item  active">
          <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item text-white">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form className="">
        {/* <span className='m-5' >Nguyễn Văn A</span> */}
        <button className="btn btn-success  my-2  mx-5" type="submit">Đăng nhập</button>
        {/* <button className="btn btn-danger my-2 mx-5" type="submit">Đăng xuất</button> */}
      </form>
    </div>
  </nav>
</div>

    )
}
