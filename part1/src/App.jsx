import "./App.css";
import Mensaje from "./Mensaje";
import Description from "./Description";

const App = () => {
  return (
    <>
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="yellow" message="En un curso" />
      <Mensaje color="blue" message="De React" />
      <Description />
    </>
  );
};

export default App;
