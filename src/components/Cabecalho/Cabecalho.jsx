import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
            <h1>Meus Produtos</h1>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/consumo/eletro-view">Eletronicos</Link></li>
                <li><Link href="/produtos/tenis">Tenis</Link></li>
                <li><Link href="/produtos/calca">Calça</Link></li>
                <li><Link href="/produtos/camisa">Camisa</Link></li>
                <li><Link href="/produtos/meia">Meia</Link></li>
              </ul>
        </header>
  )
}
