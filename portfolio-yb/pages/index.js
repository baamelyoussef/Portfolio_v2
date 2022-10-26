import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container/index'
import Menu from '../components/Menu/index'

export default function Home() {
  return (
    <div className="container mx-auto dark:text-white" >
      {/* https://i.ibb.co/ZKgw6F1/300005468-3273608989562034-817290961671024273-n.jpg */}
      <Menu />
      <Container/>
      
</div>
  )
}
