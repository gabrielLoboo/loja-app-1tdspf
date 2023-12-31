import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EletroView() {

        let eletros;

        try {
            const response = await fetch('http://localhost:3000/api/eletronicos');
            eletros = await response.json();
            console.log(eletros);
        } catch (error) {
            console.log(error);
            redirect('/error');
        }

  return (
    <div className="eletro-view">
        <h1>Consumo de Eletrodomésticos</h1>
        <div>
            <ul>
                {
                    eletros.map((item)=>(
                        <li key={item.id}>
                            <Link href={`/consumo/eletro-view/${item.id}`}>
                            <h2>{item.nome}</h2>
                            <figure>
                                <Image src={item.img} alt={item.desc} width={300} height={300} />
                                <figcaption>{item.desc} - <span>R$ {item.preco}</span></figcaption>
                            </figure>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
