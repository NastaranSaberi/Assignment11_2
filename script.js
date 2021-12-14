    
       var body= document.getElementsByTagName("body")[0];
       var scheme = document.querySelector(".switch input");
        scheme.addEventListener("change" , function(event){
            var thisElement = event.target;
            
            if(thisElement.checked){
                // Dark Mode
                body.classList.add("dark-mode");

            }else{
                // Light Mode
                body.classList.remove("dark-mode");
            }
        });
            