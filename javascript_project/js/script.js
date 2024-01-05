function checkFirstName(){
    var firstName = $('#firstName').val();
    var reg = /^[A-Za-z .-]{2,10}$/;
    if(reg.test(firstName)){
        $('#firstNameError').text('');
        return true;
    } else {
        $('#firstNameError').text('* First Name must be valid and 2 to 10 Characters Long');
        return false;
    }
}

$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName(){
    var lastName = $('#lastName').val();
    var reg = /^[A-Za-z .-]{2,10}$/;
    if(reg.test(lastName)){
        $('#lastNameError').text('');
        return true;
    } else {
        $('#lastNameError').text('* First Name must be valid and 2 to 10 Characters Long');
        return false;
    }
}

$('#lastName').keyup(function () {
    checkLastName();
});

function emailAddressCheck(){
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if(reg.test(emailAddress)){
        $('#emailAddressError').text('');
        return true;
    } else {
        $('#emailAddressError').text('* Please provide a valid email address');
        return false;
    }
}
$('#emailAddress').keyup(function () {
    emailAddressCheck();
});

function phoneNumberCheck() {
    var phoneNumber = $('#phone').val();
    var reg = /^(?:\+88|01)?\d{11}$/;
    if(reg.test(phoneNumber)){
        $('#phoneError').text('');
        return true;
    } else {
        $('#phoneError').text('* Please provide a valid phone number');
        return false;
    }
}

$('#phone').keyup(function () {
    phoneNumberCheck();
})

function passwordCheck() {
    var password = $('#password').val();
    var reg = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
    if(reg.test(password)){
        $('#passwordError').text('');
        return true;
    } else {
        $('#passwordError').text('* Password must contain at least one letter, at least one number, and be longer than six charaters');
        return false;
    }
}

$('#password').keyup(function () {
    passwordCheck();
});

function confirmPassCheck() {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPass').val();
    if(password == confirmPassword){
        $('#confirmPassError').text('');
        return true;
    } else {
        $('#confirmPassError').text('Password did not match');
        return false;
    }
}
$('#confirmPass').keyup(function () {
    confirmPassCheck();
})
$('#showPass').click(function () {
    var attrVal = $('#password').attr('type');
    if(attrVal == 'password'){
        $('#password').attr('type','text');
    } else {
        $('#password').attr('type','password');
    }
})

function genderCheck() {
    var gender = $('input[type="radio"]:checked').val();
    if(gender == 'male' || gender == 'female'){
        $('#genderError').text('');
        return true;
    } else {
        $('#genderError').text('Please give your gender info');
        return false;
    }
}

function checkDistrict() {
    var district = $('#district').val();
    if(district == ""){
        $('#districtError').text('Please fill your district info');
        return false;
    } else {
        $('#districtError').text('');
        return true;
    }
}

$('#form').submit(function () {
    if(checkFirstName() == true && checkLastName() == true && emailAddressCheck() == true && phoneNumberCheck() == true &&  passwordCheck() == true && confirmPassCheck() == true && genderCheck() == true && checkDistrict() == true){
        return true;
    } else {
        return false;
    }
})





