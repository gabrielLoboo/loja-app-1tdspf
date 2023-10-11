import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <ul>
      <li><Link href="./produtos/tenis">Tenis</Link></li>
      <li><Link href="./produtos/calca">Calça</Link></li>
      <li><Link href="./produtos/camisa">Camisa</Link></li>
      <li><Link href="./produtos/meia">Meia</Link></li>
    </ul>

    <figure>
      <Image src="/img/" alt=""/>
    </figure>
    </>
  )
}
