function handleClick(event) {
  console.log("Hello!");
  console.log(event);
  
}

function handleMouseOver() {
  console.log("bye!");
}


function handleDblClick(){
    console.log("you doubled clicked");
    
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        aliquid corrupti vel molestias magni accusamus labore deserunt facere
        consequuntur, iusto vitae sed unde impedit velit? Voluptatibus odit
        minima pariatur nihil.
      </p>
      <button onDoubleClick={handleDblClick}>double clicked me !</button>
    </div>
  );
}
