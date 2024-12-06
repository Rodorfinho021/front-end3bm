import Image from "next/image";
import styles from "./lista.module.css";

export default function Home() {
    const nomes = ["beatriz","irineu","loco","marginal","murro","pedra"]
    const carros = [
    {
        id: 1,
        modelo: 'Fusca',
        ano: 1975,
        cor:'Amarelo',
    },
    {
        id: 2,
        modelo: 'Civic',
        ano: 2019,
        cor:'Prata',
    },
    {
        id: 3,
        modelo: 'Corrola',
        ano: 2021,
        cor:'Preto',
    },
    {
        id: 4,
        modelo: 'Uno',
        ano: 2008,
        cor:'Azul',
    },
    {
        id: 5,
        modelo: 'La Ferrari',
        ano: 2023,
        cor:'Vermelha',
    },
]

  return (
    <div>
      <h1  className={styles.titulo}>Listas Comum</h1>
        <ul>
        {nomes.map((nome, id) => (
            <li key={id}> {id+1} - {nome}</li>
        ))}
        </ul>
    
   
     <div>
        <h2 className={styles.titulo}>Lista de ObJetos</h2>
     

            
     {carros.map(nome => (
            <div key={nome.id}> {nome.id} - {nome.modelo} {nome.ano} {nome.cor} </div>
        ))}
        



        </div>
    </div>
  );
}
