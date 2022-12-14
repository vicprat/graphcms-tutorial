import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PostCard, PostWidget, Categories } from "../components/index";

const posts = [
  { title: "React Testing", excerpt: "Learn react testing today" },
  { title: "React with TailwindCss", excerpt: "Learn react testing today" },
  {
    title: "React Server Side Rendering",
    excerpt: "Learn react testing today",
  },
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>CMS Blog</title>
        <linkr rel='icon' href='/favicon.ico'></linkr>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
