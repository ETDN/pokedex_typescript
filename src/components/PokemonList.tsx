import "./pokemon.css";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

function PokemonList(props: Props) {
  const { name, id, image, type } = props;
  const history = useNavigate();

  const handleClick = () => {
    // Navigate to the page with the selected Pokemon's information
    history(`/pokemon/${id}`);
  };

  return (
    <div>
      <Link to={`/pokemon/${id}`}>
        <section className={`pokemon_list_container `}>
          <p className="pokemon_name"> # {id}</p>
          <p className="pokemon_name">{name}</p>
          {type && <p className="pokemon_name">Type : {type}</p>}
          <img className="pokemon_image" src={image} alt={name}></img>
        </section>
      </Link>
    </div>
  );
}

export default PokemonList;
