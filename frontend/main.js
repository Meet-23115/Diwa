function btn(){
    console.log('Hello Diwa')
}


function den(){
    var name = document.getElementById('name_inp').value;
    var nmb = document.getElementById('nmb_inp').value;
    var age = document.getElementById('age_inp').value;
    var passcode = document.getElementById('pass_inp').value;
    var json = {
        "name":name,
        "number":nmb,
        "age":age,
        "password":passcode
    }
    console.log(json)
}
