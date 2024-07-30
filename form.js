function generatePDF() {
    const form = document.getElementById('useCaseForm');
    const formData = new FormData(form);
    let doc = new jsPDF();
    
    doc.text('Caso de Uso', 10, 10);
    doc.text('Nombre del Caso de Uso: ' + formData.get('name'), 10, 20);
    doc.text('Descripción General: ' + formData.get('description'), 10, 30);
    doc.text('Actores Principales: ' + formData.get('actors'), 10, 40);
    doc.text('Precondiciones: ' + formData.get('preconditions'), 10, 50);
    doc.text('Postcondiciones: ' + formData.get('postconditions'), 10, 60);
    doc.text('Flujo Principal: ' + formData.get('mainFlow'), 10, 70);
    doc.text('Flujos Alternativos: ' + formData.get('alternativeFlows'), 10, 80);
    doc.text('Excepciones: ' + formData.get('exceptions'), 10, 90);
    doc.text('Requerimientos Especiales: ' + formData.get('specialRequirements'), 10, 100);
    doc.text('Requisitos de Interfaz: ' + formData.get('interfaces'), 10, 110);
    
    doc.save('caso_de_uso.pdf');
}
