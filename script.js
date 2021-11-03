function sendMail(param){
    let tempParams ={
        from_name: document.getElementById("fromName").value,
        // to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('yahoo', 'template_i9bv95g', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}


// from_name: document.getElementById("exampleFormControlInput").value,
// to_name: document.getElementById("exampleFormControlInput").value,
// message: document.getElementById("exampleFormControlTextarea1").value,