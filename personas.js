const form = document.getElementById('formPersonas');
const tbody = document.getElementById('tbodyPersonas');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Cálculo matemático del Índice de Masa Corporal
    const imc = (peso / (altura * altura)).toFixed(2);

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura} m</td>
        <td>${peso} kg</td>
        <td><strong style="color: #38bdf8;">${imc}</strong></td>
        <td><button class="btn btn-borrar">Quitar</button></td>
    `;

    // Manejador del botón eliminar de la fila creada
    fila.querySelector('.btn-borrar').addEventListener('click', () => {
        fila.remove();
    });

    tbody.appendChild(fila);
    form.reset();
});