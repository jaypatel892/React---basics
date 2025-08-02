import "./App.css";
// import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
// import MsgBox from "./MsgBox.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

// CREATING 1st COMPONENT

function App() {
  return (
    <>
      {/* <MsgBox userName="Jay " textColor="yellow"/>
            <MsgBox userName="Tony-starc " textColor="blue"/>
                        <MsgBox userName="Spider-man " textColor="magenta"/> */}

      {/* <h2>Blockbuster Deals | Shop now</h2> */}

      {/* <ProductTab /> */}
      <Button/>
      <Form/>


    </>
  ); //Render a component if multiple components are there then we used div tag inside div all components are render
}

export default App;
