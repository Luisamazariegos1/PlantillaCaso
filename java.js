document.getElementById('print-button').addEventListener('click', function () {
    // Seleccionar el contenido del formulario para el PDF
    var element = document.getElementById('pdf-content');

    // Configuración de html2pdf
    var options = {
        margin: [10, 10, 10, 10], // Margen [top, right, bottom, left]
        filename: 'formulario_caso_de_uso.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Convertir el contenido a PDF
    html2pdf().set(options).from(element).save();
});
