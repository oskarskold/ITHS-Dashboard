import { useEffect, useState } from "react";
import * as API from "./API";
import "./Traffic.css";

const Traffic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await API.getData();
      setData(res.data.Departure);
      console.log(res.data.Departure);
    }
    fetchData('');
  }, []);

  return (
    <div className="traffic-container">
      <h1 className="traffic-header">Reseplaneraren</h1>
      <div className="traffic">
          {data.map((item)  => (
            <ul className="traffic-box" key={item.JourneyDetailRef.ref}>
               <li className="traffic-name">Namn: {item.name}</li>
              <li className="traffic-time">Avgång: {item.time}</li>
              <li className="traffic-direction">Åker mot: {item.direction}</li>
              <li className="traffic-stop">Nästa stopp: {item.stop}</li>
              </ul>

          ))}
        </div>
    </div>
  );
};

export default Traffic;