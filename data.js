
 async function postData(body){

   try{
      await axios.post("http://localhost:3333/users", body)
      alert("cadatrado com sucesso")
   }catch(err){
      const mensagem = error.response.error 
      alert("Houve um errro ", mensagem)
   }
}

   async function registerUser(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value

    if(email.length < 6){
      return alert("Por favor coloque um email válido")
    }

    if(phone.length < 9){
      return alert("Por favor coloque um telefone válido")
    }

   const body = {
    name,
    email,
    phone
   }

   postData(body)

}