import { useContext } from "react";
import StateContext from "../context";
//StateContext is a default export.. it already assumes there is an index.js inside the context folder, no need to point to the index.js file exactly

const Cat = () => {
  const [value, dispatch] = useContext(StateContext);
  const { activity } = value;

  const _handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <>
      <p>The cat is {activity}</p>
      <button type="button" onClick={() => _handleClick("ACTION_EAT")}>
        Eat
      </button>
      <button type="button" onClick={() => _handleClick("ACTION_NAP")}>
        Nap
      </button>
    </>
  );
};

export default Cat;
//used context rather than redux. context was more pleasant!
