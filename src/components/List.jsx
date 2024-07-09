
import { mockData } from "../data";
export default function List({ title }) {
  return (
    <>
      <h1>{title}</h1>

      {/* Render the data */}

      <ul>
        {mockData.map(((element, id) => 
            <li key={id}>{element.name}. {element.complete}</li>
        ))}
      </ul>
    </>
  );
}
