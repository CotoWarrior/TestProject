// SideNavigation
let openBtn = document.querySelector(".openSideNav");
    openBtn.addEventListener("click", () => {
        showNav();
    });
    let closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
        hideNav();
    });
    function showNav() {
        document.querySelector(".sideNav").style.width = "222px";

    }
    function hideNav() {
        document.querySelector(".sideNav").style.width = "0";

    }


    jQuery(function($) {
        $('button.close-modal').on('click', function() {
            $(this).parents('.modal').modal('hide');
        });
    });
    
    function ValidMail() {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var myMail = document.getElementById('email').value;
        var valid = re.test(myMail);
        if (valid) output = 'Адрес эл. почты введен правильно!';
        else output = 'Адрес электронной почты введен неправильно!';
        document.getElementById('message').innerHTML = output;
        return valid;
    }
     
    function ValidPhone() {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = document.getElementById('phone').value;
        var valid = re.test(myPhone);
        if (valid) output = 'Номер телефона введен правильно!';
        else output = 'Номер телефона введен неправильно!';
        document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
        return valid;
    }  
     