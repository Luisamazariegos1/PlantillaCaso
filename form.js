async function generatePDF() {
    console.log('Función generatePDF ejecutada');
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    // Obtén los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const actors = document.getElementById('actors').value;
    const preconditions = document.getElementById('preconditions').value;
    const postconditions = document.getElementById('postconditions').value;
    const mainFlow = document.getElementById('mainFlow').value;
    const alternativeFlows = document.getElementById('alternativeFlows').value;
    const exceptions = document.getElementById('exceptions').value;
    const specialRequirements = document.getElementById('specialRequirements').value;
    const interfaces = document.getElementById('interfaces').value;

    // Define el contenido del PDF
    doc.setFontSize(16);
    doc.text('Formulario de Caso de Uso', 14, 20);

    doc.setFontSize(12);
    doc.text('Nombre del Caso de Uso:', 14, 30);
    doc.text(name, 14, 40);

    doc.text('Descripción General:', 14, 50);
    doc.text(description, 14, 60);

    doc.text('Actores Principales:', 14, 70);
    doc.text(actors, 14, 80);

    doc.text('Precondiciones:', 14, 90);
    doc.text(preconditions, 14, 100);

    doc.text('Postcondiciones:', 14, 110);
    doc.text(postconditions, 14, 120);

    doc.text('Flujo Principal:', 14, 130);
    doc.text(mainFlow, 14, 140);

    doc.text('Flujos Alternativos:', 14, 150);
    doc.text(alternativeFlows, 14, 160);

    doc.text('Excepciones:', 14, 170);
    doc.text(exceptions, 14, 180);

    doc.text('Requerimientos Especiales:', 14, 190);
    doc.text(specialRequirements, 14, 200);

    doc.text('Requisitos de Interfaz:', 14, 210);
    doc.text(interfaces, 14, 220);

    // Guarda el PDF
    doc.save('Formulario_Caso_de_Uso.pdf');
}
