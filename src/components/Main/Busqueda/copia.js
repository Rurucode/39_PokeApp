

const Busqueda = () => {

  const [pokemon, setPokemon] = useState({input: "", pokemon: ""});
  
  
  const fetch = async (pokemon) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.data;
      setPokemon({...pokemon, pokemon: data});

    } catch (error) {
      console.log(error);
    }
  }
  
  const handlesubmit = (event) => {
    event.preventDefault()
    const pokeBuscado = event.target.pokeBuscado.value;
    setPokemon({...pokemon, input: pokeBuscado});
    fetch(pokemon);
    console.log(pokemon);
  }
  

