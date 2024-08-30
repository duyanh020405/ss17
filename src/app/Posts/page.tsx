import React from 'react'
import Image from 'next/image'
export default function Bai1() { 
  const posts =[
    {
      id:1,
      title : 'red',
      decreption:'smjdjdjdn dmdmdmsls dndndhdhjd',
      urlImg:'https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png'
    },
    {
      id:2,
      title : 'blue',
      decreption:'smjdjdjdn dmdmdmsls dndndhdhjd',
      urlImg:'https://www.ledr.com/colours/blue.jpg'
    },
    {
      id:3,
      title : 'green',
      decreption:'smjdjdjdn dmdmdmsls dndndhdhjd',
      urlImg:'https://tse2.mm.bing.net/th?id=OIP.-QyGQ5F6u9Ob72fU8HXHuAHaFk&pid=Api&P=0&h=180'
    },
    {
      id:4,
      title : 'yellow',
      decreption:'smjdjdjdn dmdmdmsls dndndhdhjd',
      urlImg:'https://wallpapers.com/images/hd/yellow-square-1000-x-1000-wallpaper-012q36x57zmvf259.jpg'
    },
    {
      id:5,
      title : 'violet',
      decreption:'smjdjdjdn dmdmdmsls dndndhdhjd',
      urlImg:'https://wallpaperaccess.com/full/1152525.jpg'
    },
    {
      id:6,
      title : 'orange',
      decreption:'smjdjdjdn dmdmdmsls dndndhdhjd',
      urlImg:'https://wallpaperaccess.com/full/1152525.jpg'
    }
  ]
  return (
    <div>
      {
        posts.map((item:any)=>{
          return <div key={item.id}>
            <Image src={item.urlImg} width={200} height={200} alt=''></Image>
            <p>Decreption : {item.decreption}</p>
          </div>

        })
      }

    </div>
  )
}
