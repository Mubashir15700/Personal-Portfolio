/*==================== FORM VALIDATION ====================*/

$("#submit-form").submit((e) => {
    e.preventDefault();
    let name = document.querySelector('.contact__name').value;
    let mail = document.querySelector('.contact__mail').value;
    let message = document.querySelector('.contact__message').value;
    const patternName = /[\w\s\][,][0-9]/gi;
    if (name && mail) {
        if(name.length <= 3) {
            document.querySelector("#err-msg").innerHTML = "⚠️ Name must contain morethan 3 characters.";
        } else if(patternName.test(name)) {
            document.querySelector("#err-msg").innerHTML = "⚠️ Name should not contain numbers.";
        } else {
            if (mail.includes("@" && ".")) {
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbyIftpIrEJ8U0h861SL37VUmfK852neS2LEQY1P3hVdiT5tjr6VcZgr6hsPcWSKUeuR_Q/exec",
                    data: $("#submit-form").serialize(),
                    method: "post",
                    success: function (response) {
                        alert("Form submitted successfully");
                        window.location.reload();
                        //window.location.href="https://google.com"
                    },
                    error: function (err) {
                        alert("Something Error");
                    }   
                });
            } else {
                document.querySelector("#err-msg").innerHTML = "⚠️ Please enter a valid email!";
            }
        }
    } else {
        document.querySelector("#err-msg").innerHTML = "⚠️ Name and Email are required!";
    }
});