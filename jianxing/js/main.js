function extendInput() {
    // $('.btn-input').hide();
    // $('.btn-input2').show();
}


function extendOptions() {
    var x = document.getElementById('recent-light-opts');
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function selectlt1() {
    var x = document.getElementById('sellt1');
    if (x.checked == true) {
        $('#product-pic2').hide();
        $('#product-pic3').hide();
        $('#product-pic4').hide();
    }
    else {
        $('#product-pic2').show();
        $('#product-pic3').show();
        $('#product-pic4').show();
    }
    
}

function selectlt2() {
    var x = document.getElementById('sellt2');
    
    if (x.checked == true) {
        $('#product-pic1').hide();
        $('#product-pic3').hide();
        $('#product-pic4').hide();
    }
    else {
        $('#product-pic1').show();
        $('#product-pic3').show();
        $('#product-pic4').show();
    }
}

function selectlt3() {
    var x = document.getElementById('sellt3');

    if (x.checked == true) {
        $('#product-pic1').hide();
        $('#product-pic2').hide();
        $('#product-pic4').hide();
    }
    else {
        $('#product-pic1').show();
        $('#product-pic2').show();
        $('#product-pic4').show();
    }
}

function selectlt4() {
    var x = document.getElementById('sellt4');

    if (x.checked == true) {
        $('#product-pic1').hide();
        $('#product-pic2').hide();
        $('#product-pic3').hide();
    }
    else {
        $('#product-pic1').show();
        $('#product-pic2').show();
        $('#product-pic3').show();
    }

}

function selectls2() {
    var y = document.getElementById('sells2');

    if (y.checked == true) {
        $('#product-pic1').hide();
        $('#product-pic3').hide();
        $('#product-pic4').hide();
    }
    else {
        $('#product-pic1').show();
        $('#product-pic3').show();
        $('#product-pic4').show();
    }
}

function selectls3() {
    var y = document.getElementById('sells3');

    if (y.checked == true) {
        $('#product-pic1').hide();
        $('#product-pic2').hide();
        $('#product-pic4').hide();
    }
    else {
        $('#product-pic1').show();
        $('#product-pic2').show();
        $('#product-pic4').show();
    }
}

function selectls4() {
    var y = document.getElementById('sells4');

    if (y.checked == true) {
        $('#product-pic1').hide();
        $('#product-pic2').hide();
        $('#product-pic3').hide();
    }
    else {
        $('#product-pic1').show();
        $('#product-pic2').show();
        $('#product-pic3').show();
    }
}


function selectct1() {
    var y = document.getElementById('selcet1');

    if (y.checked == true) {
        $('#product-pic2').hide();
        $('#product-pic3').hide();
        $('#product-pic4').hide();
    }
    else {
        $('#product-pic2').show();
        $('#product-pic3').show();
        $('#product-pic4').show();
    }
}

function chooselight() {
    
    // x.style.color = 'red';
    $('#product-pic1').hide();
    $('#product-pic3').hide();
    $('#product-pic4').hide();
    $('#flashlight').css({
        'color': 'red'
    });
}