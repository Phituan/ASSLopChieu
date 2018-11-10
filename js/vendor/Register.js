var REGISTER_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/members";
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null){
    btnSubmit.onclick = function () {
        var txtfirstname = document.forms['register-form']['first_name'];
        var txtlastname = document.forms['register-form']['last_name'];
        var txtpassword = document.forms['register-form']['password'];
        var txtemail = document.forms['register-form']['email'];
        var txtaddress = document.forms['register-form']['address'];
        var txtintroduction = document.forms['register-form']['introduction'];
        var txtavatar = document.forms['register-form']['avatar'];
        var txtgender = document.forms['register-form']['gender'];
        var txtphone = document.forms['register-form']['phone'];
        var txtbirthday = document.forms['register-form']['birthday'];
        if (txtfirstname != null && txtlastname != null){
            var firstName = txtfirstname.value;
            var lastName = txtlastname.value;
            var passWord = txtpassword.value;
            var address = txtaddress.value;
            var phone = txtphone.value;
            var avatar = txtavatar.value;
            var introduction = txtintroduction.value;
            var gender = txtgender.value;
            var email = txtemail.value;
            var birth = txtbirthday.value;

            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: passWord,
                address: address,
                phone: phone,
                avatar: avatar,
                introduction: introduction,
                gender: gender,
                email: email,
                birthday: birth,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlHttpRequest = new  XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 201){
            var member = JSON.parse(this.responseText);
        }
    }
    xmlHttpRequest.open('POST', REGISTER_API, true);
    xmlHttpRequest.setRequestHeader('Content-type','application/json');
    xmlHttpRequest.send(jsonData);
}
