module.exports = {
  index(request, response) {
    return response.json({
      message: 'Rota principal da API'
    })
  }
}
