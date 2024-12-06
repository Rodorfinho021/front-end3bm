import Card from '@/app/componentes/Card'

export default function App() {
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
            <h1>Props</h1>
            {
                carros.map((carro) => (
            <Card
            key={carro.id}
            id={carro.id}
            modelo={carro.modelo} 
            ano={carro.ano}
            cor={carro.cor}
            />
            ))}
        </div>
    )
}