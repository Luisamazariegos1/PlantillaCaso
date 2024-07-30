
document.getElementById('print-button').addEventListener('click', function () {
    // Crear un iframe oculto para la impresión
    var iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write('<html><head><title>Imprimir en PDF</title>');
    doc.write('<link rel="stylesheet" type="text/css" href="styles.css">');
    doc.write('</head><body>');
    doc.write(document.querySelector('.container').outerHTML);
    doc.write('</body></html>');
    doc.close();

    iframe.contentWindow.focus();
    iframe.contentWindow.print();

    // Eliminar el iframe después de la impresión
    setTimeout(function () {
        document.body.removeChild(iframe);
    }, 1000);
});
