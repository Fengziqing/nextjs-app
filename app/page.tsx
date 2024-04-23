'use client';

import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import snow from '@/public/images/snow.jpg'
import { Metadata } from 'next';
import { useState } from 'react';

//lazy loading heavy component(only if the component is heavy and big)
//import:
// import dynamic from 'next/dynamic';
// const HeavyComponents = dynamic(
//   () => import('./components/HeavyComponents'),
//   //second argument: showing loading indicater while loading
//   { 
//     //ssr false: disable pre-render on server cause issue
//     ssr: false,
//     loading: () => <div>loading</div> });
//usage:
//      const [isVisible, setVisible] = useState(false)
//      <button onClick={() => setVisible(true)}>show</button>
//      {isVisible && <HeavyComponents />}

export default function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main className='relative h-screen'>
      {/* <h1>hello {session && <span>{session.user!.name}</span>}</h1> 
      <Link href='/users'>Users</Link>
      <ProductCard/> */}

      <button onClick={async () => {
        //lazy loading package dynamiclly
        //call import funciton in click handler
        const _ = (await import('lodash')).default;
        const users = [
          {name:'c'},
          {name:'b'},
          {name:'a'},
        ]
        const sorted = _.orderBy(users,['name']);
        console.log(sorted);
      }}>show</button>


      {/* nextjs <Image/> tag automatically compress and resize images base on devices size,
      so prefer to use this in nextjs project instead of standard html <img>.
        <Image> nextjs autmatically optimized image to 'webp' img type(smaller than jpeg)
      local img: <Image src={snow} alt='snow'/>
      remote img: ⬇️
      1. register domain to next.config.js file
      2. set width+height size or set fill
        when use fill prop, parent element should have a postion of relative/absolute/fixed
      4. styleFit: cover ----image will fit properly with container
      5. responsive --- size:"(max-width: 480px) 100vw, (amx-width:768px) 50vw, 33vw"
      6. quality(1~100): image quality
      7. priority: by default, image component use lazy loading
        (image are only retrieved when they are visible in the viewpoint.)
        but if you have images that should be visible right from the get go,
        then should set priority here.
      <Image
        src='https://blog.logrocket.com/wp-content/uploads/2022/12/how-to-use-svgs-react.png'
        alt='snow'
        fill 
        className='object-cover'
        sizes="(max-width: 480px) 100vw, (amx-width:768px) 50vw, 33vw"
        quality={75}
        priority/> */}
    </main>
  )
}


//1.rewrite metadata for search engine optimization
// export const metadata: Metadata = {
//   title:'...',
//   description:'...',
// }
//2.dynamic metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('')

//   //metadata object
//   return {
//     title:'...',
//     description:'...',
//   }
// }
