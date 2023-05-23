const inputEl = document.getElementById("input")
        const infoEl = document.getElementById("info-text");

        const meaningcont = document.getElementById("meaning-container");
        const meaningEl= document.getElementById("meaning");

        async function fetchAPI(word){
            try{
                
                infoEl.innerText = `Anlam araniyor ${word}`;
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const result = await fetch(url).then((res)=> res.json());

                infoEl.style.display = "none";
                meaningcont.style.display= "block";

                
                meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
                infoEl.style.display = "none";
            }catch(error){  
                console.log(error);
            }
            
        }

        inputEl.addEventListener("keyup",(e)=>{
            if(e.target.value && e.key === "Enter"){
                fetchAPI(e.target.value)
            }
        });