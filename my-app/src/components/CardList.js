import Game from "./Game"; 
import { onCardClickHandler, toggleActiveStyles } from "../utils/cardSelectFunctions";

const CardList = ({ subcards, title }) => {

  return ( 
    <div>
      <h3>{ title }</h3>
      <div className="subcard-list">
        {subcards.map((element, index) => (
          <div key={index} className={toggleActiveStyles(element)} onClick={() => {onCardClickHandler(element)}}>
            <p>
              card{index+1} elements:<br></br> {element.elements.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;