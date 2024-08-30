import React from 'react'
import type { Metadata } from 'next'  
import Image from 'next/image'
export const metadata: Metadata = {
    title: 'Bai2 :Danh sach tieu de',
    description: '',
  }
export default function page() {

  return (
    <div>
      Bai 3:
      <Image src={'https://tieusu.net/wp-content/uploads/2022/10/Mono-la-ai-1-696x695.jpg'} width={200} height={200} alt=''></Image>
      Bai 4 :
      <Image src={'https://tieusu.net/wp-content/uploads/2022/10/Mono-la-ai-1-696x695.jpg'} width={200} height={200} loading='lazy' alt=''></Image>
    </div>
  )
}
