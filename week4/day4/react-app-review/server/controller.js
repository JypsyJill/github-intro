const pokedex = require('./pokemon.json')
let team = [];

module.exports = {
    getPokemon: (req, res) => {
        
      const {search} = req.query
      const resArray = []
      
      if (search){
            const filteredPokemon = pokedex.filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(search.toLowerCase())
            );  
        for(let i = 0; i< 25; i++){
            resArray.push(filteredPokemon[i]);
          }
          
      } else {
        for (let i = 0; i < 25; i++){
            resArray.push(pokedex[i]);
        }

      }
      return res.status(200).send(resArray);
    },
    getOnePokemon: (req, res) => {},
    addToTeam: (req, res) => {},
    editNickname: (req, res) => {},
    removeFromTeam: (req, res) => {},
};