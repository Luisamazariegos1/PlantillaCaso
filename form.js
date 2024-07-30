// form.js
function generatePDF() {
    // Importar jsPDF desde el objeto global `window.jspdf`
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obtener el formulario y los datos
    const form = document.getElementById('useCaseForm');
    const formData = new FormData(form);

    // Título del PDF
    doc.setFontSize(16);
    doc.text('Formulario de Caso de Uso', 10, 10);

    // Configuración de la fuente y el tamaño
    doc.setFontSize(12);

    // Función para agregar texto y manejar el desbordamiento
    let y = 20; // Posición vertical inicial
    const lineHeight = 10;
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin;

    function addText(text) {
        const textLines = doc.splitTextToSize(text, pageWidth);
        textLines.forEach(line => {
            if (y + lineHeight > doc.internal.pageSize.height) {
                doc.addPage();
                y = margin;
            }
            doc.text(line, margin, y);
            y += lineHeight;
        });
    }

    // Agregar campos del formulario al PDF
    addText('Nombre del Caso de Uso: ' + formData.get('name'));
    addText('Descripción General: ' + formData.get('description'));
    addText('Actores Principales: ' + formData.get('actors'));
    addText('Precondiciones: ' + formData.get('preconditions'));
    addText('Postcondiciones: ' + formData.get('postconditions'));
    addText('Flujo Principal: ' + formData.get('mainFlow'));
    addText('Flujos Alternativos: ' + formData.get('alternativeFlows'));
    addText('Excepciones: ' + formData.get('exceptions'));
    addText('Requerimientos Especiales: ' + formData.get('specialRequirements'));
    addText('Requisitos de Interfaz: ' + formData.get('interfaces'));

    // Guardar el PDF
    doc.save('caso_de_uso.pdf');
}
