function part() {
    $("#modal1").modal({
        show: false,
        backdrop: 'static'

    });
    $('#modal1').modal("show");
}
function changepricfuel() {
    $("#changepricee").modal({
        show: false,
        backdrop: 'static'

    });
    $('#changepricee').modal("show");
}
function twilio() {
    $("#modal2").modal({
        show: false,
        backdrop: 'static'

    });
    $('#modal2').modal("show");
}
function final() {
    $("#modalfuel").modal({
        show: false,
        backdrop: 'static'

    });
    $('#modalfuel').modal("show");
}
function general() {
    $("#masterd").modal({
        show: false,
        backdrop: 'static'

    });
    $('#masterd').modal("show");
}
function seting() {
    $("#modalfueltest").modal({
        show: false,
        backdrop: 'static'

    });
    $('#modalfueltest').modal("show");
}
function sales1() {
    $("#sales").modal({
        show: false,
        backdrop: 'static'

    });
    $('#sales').modal("show");
}

function refill() {
    $("#refill").modal({
        show: false,
        backdrop: 'static'

    });
    $('#refill').modal("show");
}

function clear() {
    $("#clear").modal({
        show: false,
        backdrop: 'static'

    });
    $('#clear').modal("show");
}
function myFunction() {
    var copyText = document.getElementById("Button1v");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
function clear1() {
    $("#clear1").modal({
        show: false,
        backdrop: 'static'

    });
    $('#clear1').modal("show");
}
function paymenthistory() {
    $("#payHistory").modal({
        show: false,
        backdrop: 'static'

    });
    $('#payHistory').modal("show");
}
function otherExpense() {
    $("#otherExpense").modal({
        show: false,
        backdrop: 'static'

    });
    $('#otherExpense').modal("show");
}
function credit() {
   
    $('#refill1').modal("show");
}
function reset() {
    $("#modal132").modal({
        show: false,
        backdrop: 'static'

    });
    $('#modal132').modal("show");
}
function showSubmitDialog() {
    $("#modal12").modal({
        show: false,
        backdrop: 'static'

    });
    $('#modal12').modal("show");
}
function refillingFuel() {
    $("#refillFuel").modal({
        show: false,
        backdrop: 'static'

    });
    $('#refillFuel').modal("show");
}
function refillh() {
    $("#refillh").modal({
        show: false,
        backdrop: 'static'

    });
    $('#refillh').modal("show");
}

function mpesa() {
    $("#mpesa").modal({
        show: false,
        backdrop: 'static'

    });
    $('#mpesa').modal("show");
}

function hidModal() {
    $("#modal12").on('hide.bs.modal', function () {
        alert('The modal is about to be hidden.');
    }); 
}
function classic() {
    $("#classic").modal({
        show: false,
        backdrop: 'static'

    });
    $('#classic').modal("show");
}
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});