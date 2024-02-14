import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';

//step1: collect all the files from blogdata directory
//step2: Iterate through and display them
 
const Blog = () => {
const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    console.log('useEffect is running');
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json()})
      .then((parsed)=>{
        console.log(parsed); 
        setBlogs(parsed);
    })
  }, []);

  return (
  <div className={styles.container}>
  
    <main className={styles.main}>
    <h2>Latest blogs</h2> <br/>

      {blogs.map((blogsItem)=>{
        return(
          <div key = {blogsItem.title} className={styles.blogItem}>
          <Link href={`/blogpost/${blogsItem.slug}`}><h3 className={styles.blogItemh3}>How to learn {blogsItem.title} in 2024?</h3></Link>
          <p className={styles.blogItem}>{blogsItem.content.substr(0,140)}</p>
          </div>
        );
      })
      }
    
    </main>
</div>  
  );
}

export default Blog ;