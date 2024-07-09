
import { mockData } from "./data";
export default function List({ title }) {
  return (
    <>
      <h1>{title}</h1>

      {/* Render the data */}

      <ul>
        {mockData.map((element => 
            <li>{element.name}. {element.complete}</li>
        ))}
      </ul>
    </>
  );
}
