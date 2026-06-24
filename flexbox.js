const hardware = [
    { id: 1, nombre: "Intel Core i5 14600K", categoria: "Procesador", critico: true },
    { id: 2, nombre: "NVIDIA RTX 5070", categoria: "Gráficos", critico: true },
    { id: 3, nombre: "Motherboard H610M", categoria: "Placa Base", critico: true },
    { id: 4, nombre: "Thermaltake The Tower 300", categoria: "Gabinete", critico: false },
    { id: 5, nombre: "Cooler Master 850W Gold", categoria: "Fuente", critico: false },
    { id: 6, font: "Watercooler 240mm", nombre: "Watercooler 240mm", categoria: "Refrigeración", critico: false }
];

const container = document.getElementById('hardware-container');
const btnFiltrar = document.getElementById('btnFiltrar');
let estadoFiltro = false;

function renderCards(resaltar = false) {
    container.innerHTML = '';
    
    hardware.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        if (resaltar && item.critico) {
            card.classList.add('destacado');
        }
        
        card.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Categoría: ${item.categoria}</p>
        `;
        container.appendChild(card);
    });
}

btnFiltrar.addEventListener('click', () => {
    estadoFiltro = !estadoFiltro;
    renderCards(estadoFiltro);
    btnFiltrar.textContent = estadoFiltro ? "Quitar Resaltado" : "Resaltar Componentes Críticos";
});

// Carga inicial
renderCards();