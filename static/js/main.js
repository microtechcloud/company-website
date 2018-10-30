window.onload = function(){
   
    let logoutBtn = document.getElementById("logout");

    let newsLetterForm = document.getElementById("subscribeform");

    let newsLetterBtn = document.getElementById("subsubmit");

    

    //logout handler
    if(logoutBtn){ logoutBtn.addEventListener("click",function(e){
        e.preventDefault();
        console.log("clicked")
        fetch("/auth/logout")
            .then(jsonifiedRes=>window.location = "/")
            .catch(err=>console.log(err))
    })

    };


    //news letter handler
    if(newsLetterForm && newsLetterBtn){
        newsLetterForm.addEventListener("submit",function(e){
         e.preventDefault()
        //  let email = document.getElementById("subemail").value
        //  console.log("email",email);
        });
        
        
        newsLetterBtn.addEventListener("click",function(e){
            e.preventDefault()
            let email = document.getElementById("subemail").value
            console.log("email",email);
            fetch("/newsletter/subscription",{
               method:"POST",
               headers:{
                   "Content-Type":"application/json; charset=utf-8"
               },
               body:JSON.stringify({email:email})
            }).then(res=>res.json())
                .then(jsonifiedRes=>{
                    console.log(jsonifiedRes)
                    subemail.value = ""
                    window.location = "/"
                })
                .catch(err=>console.log(err));
        })
    }
}