/**
 * catp
 */
$(document).ready(function () {
    var n = nod();

    // We disable the submit button if there are errors.
    n.configure({
        submit: $('[type=submit]'),
        disableSubmit: true,
        successMessage: 'Correct!',
    });

    n.add([{
        selector: '.ktp',
        validate: ['min-length:16','integer'],
        errorMessage: ['KTP terdiri dari 16 angka.','Inputan yang dimasukkan harus berupa angka']
    },{
        selector: '.npwp',
        validate: ['min-length:20',],
        errorMessage: ['NPWP terdiri dari 15 angka.']
    }, {
        selector: '.hp',
        validate: ['max-length:26'],
        errorMessage: ['Silahkan cek kembali No.Hp anda']
    }, {
        selector: '.bpjs',
        validate: ['min-length:13', 'max-length:16', 'integer'],
        errorMessage: ['KTP terdiri dari 13 angka.', 'KTP terdiri dari max 13 angka.', 'Inputan yang dimasukkan harus berupa angka']
    }, {
        selector: '.kk',
        validate: ['min-length:16', 'max-length:16', 'integer'],
        errorMessage: ['KK terdiri dari 16 angka.', 'KK terdiri dari max 16 angka.', 'Inputan yang dimasukkan harus berupa angka']
    }]);

    $('.ktp').mask('0000000000000000');
    $('.npwp').mask('99.999.999.9-999.999');
    $('.hp').mask('+00 000 0000 0000 0000');
    $('.bpjs').mask('0000000000000');
    $('.kk').mask('0000000000000000');
});
//for backend
$(document).ready(function () {
    
    var optionsktp = {

        onComplete: function (cep) {
            $('#ktp-info').text('Correct').removeClass('text-warning').addClass('text-success');
            console.log('complete');
            $('.o_form_button_save').removeAttr('disabled');

        },
        onKeyPress: function (cep, event, currentField, options) {
            $('#ktp-info').text('KTP teridir dari 16 Angka.').removeClass('text-success').addClass('text-warning');
        },
        onChange: function (cep) {
            $('#ktp-info').remove();
            $("[name=ktp]").after("<p id='ktp-info' class='text-warning'></p>");
            $('.o_form_button_save').attr('disabled','disabled');
        },
        onInvalid: function (val, e, f, invalid, options) {
            var error = invalid[0];
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
        }
    };
    $("[name=ktp]").mask('0000000000000000', optionsktp);

    var optionsnpwp = {
        
        onComplete: function (cep) {
            $('#npwp-info').text('Correct').removeClass('text-warning').addClass('text-success');
            console.log('complete');
            $('.o_form_button_save').removeAttr('disabled');
        },
        onKeyPress: function (cep, event, currentField, options) {
            $('#npwp-info').text('NPWP teridir dari 15 Angka.').removeClass('text-success').addClass('text-warning');
        },
        onChange: function (cep) {
            $('#npwp-info').remove();
            $("[name=npwp]").after("<p id='npwp-info' class='text-warning'></p>");
            $('.o_form_button_save').attr('disabled', 'disabled');

        },
        onInvalid: function (val, e, f, invalid, options) {
            var error = invalid[0];
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
        }
    };
    $("[name=npwp]").mask('99.999.999.9-999.999', optionsnpwp);

    var optionshp = {

        onComplete: function (cep) {
            $('#hp-info').text('Correct').removeClass('text-warning').addClass('text-success');
            console.log('complete');
            $('.o_form_button_save').removeAttr('disabled');
        },
        onKeyPress: function (cep, event, currentField, options) {
            $('#hp-info').text('Silahkan Cek Kembali No HP Anda.').removeClass('text-success').addClass('text-warning');
        },
        onChange: function (cep) {
            $('#hp-info').remove();
            $("[name=hp]").after("<p id='hp-info' class='text-warning'></p>");
            $('.o_form_button_save').attr('disabled', 'disabled');
        },
        onInvalid: function (val, e, f, invalid, options) {
            var error = invalid[0];
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
        }
    };
    $("[name=hp]").mask('+00 000 0000 0000 0000', optionshp);

    var optionsbpjs = {

        onComplete: function (cep) {
            $('#bpjs-info').text('Correct').removeClass('text-warning').addClass('text-success');
            console.log('complete');
            $('.o_form_button_save').removeAttr('disabled');
        },
        onKeyPress: function (cep, event, currentField, options) {
            $('#bpjs-info').text('NPWP teridir dari 13 Angka.').removeClass('text-success').addClass('text-warning');
        },
        onChange: function (cep) {
            $('#bpjs-info').remove();
            $("[name=bpjs]").after("<p id='bpjs-info' class='text-warning'></p>");
            $('.o_form_button_save').attr('disabled', 'disabled');
        },
        onInvalid: function (val, e, f, invalid, options) {
            var error = invalid[0];
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
        }
    };
    $("[name=bpjs]").mask('0000000000000', optionsbpjs);

    var optionskk = {

        onComplete: function (cep) {
            $('#kk-info').text('Correct').removeClass('text-warning').addClass('text-success');
            console.log('complete');
            $('.o_form_button_save').removeAttr('disabled');
        },
        onKeyPress: function (cep, event, currentField, options) {
            $('#kk-info').text('NPWP teridir dari 16 Angka.').removeClass('text-success').addClass('text-warning');
        },
        onChange: function (cep) {
            $('#kk-info').remove();
            $("[name=kk]").after("<p id='kk-info' class='text-warning'></p>");
            $('.o_form_button_save').attr('disabled', 'disabled');
        },
        onInvalid: function (val, e, f, invalid, options) {
            var error = invalid[0];
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
        }
    };
    $("[name=kk]").mask('0000000000000000', optionskk);

});