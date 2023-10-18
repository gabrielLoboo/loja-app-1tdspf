import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <h1>CALÇA</h1>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis perferendis aperiam necessitatibus vero placeat quia fugiat sequi molestiae ut vel ratione atque nobis, doloremque deleniti quisquam nulla voluptatum corporis. Sequi?</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
      <figure>
          <Image src="/img/calca.jpg" alt="Calça" width={640} height={575}/>
        </figure>
    </div>
  )
}
