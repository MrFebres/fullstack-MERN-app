module.exports = {
  port: process.env.PORT || 8080,
  db: process.env.MONGODB || 'mongodb://localhost/poke_db',
  api: 'https://pokeapi.co/api/v2/pokemon/'
}