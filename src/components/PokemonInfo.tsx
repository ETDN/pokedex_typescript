import { useParams } from "react-router-dom";

function PokemonInfo() {
  const { id } = useParams(); // get the `id` parameter from the URL

  // Fetch the Pokemon's info based on the `id` parameter
  return (
    <div>
      <h2>Pokemon Info:</h2>
      <p>ID: {id}</p>
      {/* Render other Pokemon info here */}
    </div>
  );
}

export default PokemonInfo;
