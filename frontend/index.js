$(function () {
    $('#value').mask("#.##0,00", {reverse: true});
});

$(document).on('change', '#value', function () {
    var value   = (parseInt($(this).val().replace(/[^0-9]/g, '')) / 100);
    var result  = $('#result-div');
    var content = $('#content-div');

    content.fadeOut('slow', function () {
        $.post("api/Troco/getQtdeNotas/" + value, function( data ) {
            result.html('');

            for(var i in data){
                var coin     = (i >= 1) ? i : i * 100;

                var label    = (i > 1)  ? ' Nota'  : ' Moeda';
                var sublabel = (i >= 1) ? ' reais' : ' centavos';

                if(data[i] > 1) {
                    label += 's';
                }

                if(coin  == 1) {
                    sublabel = (i >= 1) ? ' real' : ' centavo';
                }

                var template =
                    '<div class="col-md-2">' +
                        '<div class="jumbotron money-jumbotron">' +
                            '<img src="frontend/images/' + i + '.jpg" class="img-thumbnail">' +
                            '<hr>' +
                            '<b>' + data[i] + label + '</b><br>' +
                            '<small>De ' + coin + sublabel + '</small>' +
                        '</div>' +
                    '</div>';

                if(i >= 1){
                    result.prepend(template);
                }else{
                    result.append(template);
                }
            }

            content.fadeIn('slow');
        });
    });
});