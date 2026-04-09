$(function() {
    function initPicker(isSingle) {
        if ($('#demo').data('daterangepicker')) {
            $('#demo').data('daterangepicker').remove();
        }

        $('#demo').daterangepicker({
            "singleDatePicker": isSingle,
            "autoApply": true,
            "opens": "center",
            "locale": {
                "format": "DD/MM/YYYY",
                "daysOfWeek": ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
                "monthNames": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            }
        });
    }

    // Inicializar por defecto (Fecha exacta)
    initPicker(true);

    // Escuchar cuando cambias el switch
    $('input[name="mode"]').change(function() {
        if (this.value === 'single') {
            initPicker(true);
        } else {
            initPicker(false);
        }
        // Abrir el calendario automáticamente al cambiar de modo
        $('#demo').click();
    });
});