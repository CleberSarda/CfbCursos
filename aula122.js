const endpoint="https://980ca6a1-2323-48d9-b668-01dd2f253a9a-00-1qq2ezhmc34sx.riker.replit.dev/"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})
