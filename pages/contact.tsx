import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Navbar from '../components/Navbar'
import BlogBanner from "../Components/BlogBanner"


function Contact() {
  return (
    <div>
         <Head>
          <title>La Laundry - Blogs</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/img/laundry-logo-white-small.png" />

        </Head>

        <Navbar navLogo='/img/laundry-logo.png' navColor='white' />

        <BlogBanner />
        

    </div>
  )
}

export default Contact

