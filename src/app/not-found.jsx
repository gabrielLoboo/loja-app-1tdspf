import Image from 'next/image'

export default function Notfound() {
  return (
    <div>
        <h1>AOBA 404!</h1>
        <div>
          <figure>
            <Image src="http://http.cat/images/404.jpg" alt="Gato no jornal" width={700} height={600}></Image>
          </figure>
        </div>
        <p>Página não encontrada</p>
    </div>
  )
}
