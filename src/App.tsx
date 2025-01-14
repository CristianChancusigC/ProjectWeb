import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const [data, setData] = useState(["Pepe", "Juan", "Maria", "Luis"]);
  // const list: string[] = ["Pepe", "Juan", "Maria", "Luis"];
  // const handleSelect = (item: string) => {
  //   console.log("Print:", item);
  // };

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => {
  //   setIsLoading(!isLoading);
  // };

  // return (
  //   <>
  //     <Card>
  //       <CardBody
  //         title="Card Title"
  //         subtitle="Card Subtitle"
  //         text="Card Text"
  //       />
  //       {list.length ? (
  //         <List data={list} onSelect={handleSelect} />
  //       ) : (
  //         "No elements to show"
  //       )}
  //     </Card>
  //     <Buttom isLoading={isLoading} onClick={handleClick}>
  //       Start
  //     </Buttom>
  //   </>
  // );
  const addPerson = () => setData([...data, "Sofi"]);
  const deletePerson = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button onClick={addPerson}>Add</Button>
      <Button onClick={deletePerson}>Delete</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
