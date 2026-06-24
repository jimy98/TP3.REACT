const { useState } = React;

function App() {
    const [lista, setLista] = useState([]);
    const [inputs, setInputs] = useState({ nombre: '', apellido: '', edad: '', altura: '', peso: '' });

    const manejarCambio = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        const p = parseFloat(inputs.peso);
        const a = parseFloat(inputs.altura);
        const imcCalculado = (p / (a * a)).toFixed(2);

        const nuevaFila = { ...inputs, imc: imcCalculado, id: Date.now() };
        setLista([...lista, nuevaFila]);
        
        // Reset manual del estado del formulario
        setInputs({ nombre: '', apellido: '', edad: '', altura: '', peso: '' });
    };

    const borrarFila = (id) => {
        setLista(lista.filter(item => item.id !== id));
    };

    return (
        <div>
            <h2>Registro de Métricas de Personas (React)</h2>
            
            <form onSubmit={manejarEnvio}>
                <input name="nombre" value={inputs.nombre} onChange={manejarCambio} placeholder="Nombre" required />
                <input name="apellido" value={inputs.apellido} onChange={manejarCambio} placeholder="Apellido" required />
                <input name="edad" type="number" value={inputs.edad} onChange={manejarCambio} placeholder="Edad" required />
                <input name="altura" type="number" step="0.01" value={inputs.altura} onChange={manejarCambio} placeholder="Altura" required />
                <input name="peso" type="number" value={inputs.peso} onChange={manejarCambio} placeholder="Peso (kg)" required />
                <button type="submit">Agregar</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>IMC</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.edad}</td>
                            <td>{item.altura} m</td>
                            <td>{item.peso} kg</td>
                            <td><strong style={{color: '#38bdf8'}}>{item.imc}</strong></td>
                            <td>
                                <button className="btn btn-borrar" onClick={() => borrarFila(item.id)}>Quitar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);