import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"


const Blog = () => {
  
  return (
    <>
    
    <Back  title='Skills to get a job in 2024' />
    
     
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
