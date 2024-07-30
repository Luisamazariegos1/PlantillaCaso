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
    doc.write('<style>');
    doc.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    doc.write('label { display: block; margin: 10px 0 5px; font-weight: bold; color: #555; }');
    doc.write('input, textarea { width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px; }');
    doc.write('textarea { resize: vertical; }');
    doc.write('button { padding: 12px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }');
    doc.write('button:hover { background-color: #0056b3; }');
    doc.write('</style>');
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
