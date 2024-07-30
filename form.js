document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    window.generatePDF = () => {
        const form = document.getElementById('useCaseForm');
        const formData = new FormData(form);
        let doc = new jsPDF();

        // Define las coordenadas Y para cada sección del PDF
        let y = 10;

        doc.text('Caso de Uso', 10, y);
        y += 10;
        
        doc.text('Nombre del Caso de Uso:', 10, y);
        doc.text(formData.get('name'), 10, y + 10);
        y += 20;

        doc.text('Descripción General:', 10, y);
        doc.text(formData.get('description'), 10, y + 10);
        y += 20;

        doc.text('Actores Principales:', 10, y);
        doc.text(formData.get('actors'), 10, y + 10);
        y += 20;

        doc.text('Precondiciones:', 10, y);
        doc.text(formData.get('preconditions'), 10, y + 10);
        y += 20;

        doc.text('Postcondiciones:', 10, y);
        doc.text(formData.get('postconditions'), 10, y + 10);
        y += 20;

        doc.text('Flujo Principal:', 10, y);
        doc.text(formData.get('mainFlow'), 10, y + 10);
        y += 20;

        doc.text('Flujos Alternativos:', 10, y);
        doc.text(formData.get('alternativeFlows'), 10, y + 10);
        y += 20;

        doc.text('Excepciones:', 10, y);
        doc.text(formData.get('exceptions'), 10, y + 10);
        y += 20;

        doc.text('Requerimientos Especiales:', 10, y);
        doc.text(formData.get('specialRequirements'), 10, y + 10);
        y += 20;

        doc.text('Requisitos de Interfaz:', 10, y);
        doc.text(formData.get('interfaces'), 10, y + 10);

        doc.save('caso_de_uso.pdf');
    };
});
