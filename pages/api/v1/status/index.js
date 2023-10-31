function status(request, response){
  response.status(200).json({ chave: "Teste de send é"});
}

export default status