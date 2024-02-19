import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';
import * as fs from 'fs'; 
//step1: collect all the files from blogdata directory
//step2: Iterate through and display them
 
const Blog = (props) => {
const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(()=>{
  //   console.log('useEffect is running');
  //   fetch('http://localhost:3000/api/blogs').then((a)=>{
  //     return a.json()})
  //     .then((parsed)=>{
  //       console.log(parsed); 
  //       setBlogs(parsed);
  //   })
  // }, []);

  return (
  <div className={styles.container}>
  
    <main className={styles.main}>
    <h2>Latest blogs</h2> <br/>

      {blogs.map((blogsItem)=>{
        return(
          <div key = {blogsItem.slug} className={styles.blogItem}>
          <Link href={`/blogpost/${blogsItem.slug}`}><h3 className={styles.blogItemh3}>How to learn {blogsItem.title} in 2024?</h3></Link>
          <p className={styles.blogItem }>{blogsItem.metadesc.substr(0,140)}</p>
          </div>
        );
      })
      }
    
    </main>
</div>  
  );
}

//this function runs on the server side
export async function getStaticProps(context){
  // let data = await fetch('http://localhost:3000/api/blogs')
  // let allBlogs = await data.json()

  let data = await fs.promises.readdir("blogdata")
  let myFile;
  let allBlogs = [];
  for(let index=0; index<data.length;index++){
      const item = data[index];
        console.log(item);
        myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        console.log(myFile);
        allBlogs.push(JSON.parse(myFile));
  }
  return{
    props: {allBlogs}, //will be passed to the page component as props
  }
}

export default Blog ;