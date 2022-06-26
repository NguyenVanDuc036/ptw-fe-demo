import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default function blogId() {

  const router = useRouter()


  const [post, setPost] = useState({
    id : '',
    title : '',
    imgSrc : '',
    content : ''
  })

    axios.get(`http://localhost:3500/posts/${Number(router.query['blogId'])}`)
    .then(res => {
      setPost(res.data)
      console.log(res.data);
    })
    .catch(error => console.log(error));


  return (
    <div className='container p-5' >
        <h1 className='text-danger' >Post Id : {post.id}</h1>
        <button onClick={()=>{
          router.push('/blog')
        }} className='btn btn-outline-primary' >Trang chủ</button>
        <div className='row' >
            <h1>{post.title}</h1>
            <div className='col-4'>
                <img width={280} height={400} style={{objectFit:'cover'}} src={post.imgSrc} />
            </div>
            <div className='col-8' >{post.content}</div>
        </div>
    </div>
  )
}
