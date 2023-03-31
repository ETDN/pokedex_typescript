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
    history(`/pokemon/${id}/${name}/${type}`);
  };

  return (
    <div>
      <Link to={`/pokemon/${id}/${name}/${type}`}>
        <div className={`pokemon_list_container `}>
          <img className="pokemon_image" src={image} alt={name}></img>
          <p className="pokemon_name" onClick={handleClick}>
            {name}
          </p>
          {type && <p className="pokemon_type">{type}</p>}
        </div>
      </Link>
    </div>
  );
}

export default PokemonList;
