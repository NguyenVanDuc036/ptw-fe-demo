import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Router from 'next/router'


export default function blog() {


  const [post, setPost] = useState([{
    id : '',
    title : '',
    imgSrc : '',
    content : ''
  }])

  useEffect(() => {

    axios.get(`http://localhost:3500/posts`)
      .then(res => {
        setPost(res.data)
      })
    .catch(error => console.log(error));

  }, 
  );


  const renderPost =() => {
    return post.map((item, index)=>{
      return <div key={index} className='col-3 mt-3' >
      <div className='card' >
        <div className='card-header' >
          <img src={item.imgSrc} width={200} height={100} style={{objectFit:'cover'}}  />
        </div>
        <div className='card-body' >
          <span>Id: {item.id} </span><br/>
          <span>Title : {item.title} </span>
        </div>
        <div className='card-footer' >
          <button onClick={()=>{
              Router.push(`/blog/${item.id}`)
          }} className='btn btn-outline-info' >Xem bài viết</button>
        </div>
      </div>
    </div>
    })
  }


  return (
    <div className='container mt-5' >
      <h2>Danh sách các bài post</h2>
      <div className='row' >
        {renderPost()}
      </div>
    </div>
  )
}
