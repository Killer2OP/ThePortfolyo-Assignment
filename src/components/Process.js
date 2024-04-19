import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fatchData("/static/workProcess.json");
        setData(response);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <div className="tm_section" id="process">
      <div className="tm_process">
        <div className="container">
          <div className="list">
            <ul>
              {data &&
                data.map((data, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <img
                            className="brush"
                            src={`img/brushes/process${dark ? "/dark" : ""}/${
                              i + 1
                            }.png`}
                            alt="image"
                          />
                          {parse(data.icons[dark ? "dark" : "light"])}
                        </span>
                      </div>
                      <div className="title">
                        <h3>{data.title}</h3>
                      </div>
                      <div className="text">
                        <p>{data.dec}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;