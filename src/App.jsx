import React, { useState, useEffect } from "react";

const App = () => {
  const [home, setHome] = useState();
  // const [people, setPeople] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (home === true) {
      fetch("http://api-ghibli.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }

    if (home === false) {
      fetch("http://api-ghibli.herokuapp.com/people")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
  }, [home]);

  if (home === false) {
    return (
      <div>
        <h1>worked</h1>
        <button onClick={() => setHome(true)}>load films</button>
        <button onClick={() => setHome(false)}>load people</button>
        {data.map((films) => (
          <div className="col-md-6 justify-content-center">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title row justify-content-center">
                  {films.name}
                </h3>
                <p className="card-text justify-content-center">{films.age}</p>
                <p className="card-text justify-content-center">
                  {films.gender}
                </p>
                <p className="card-text justify-content-center">{films.url}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setHome(true)}>load films</button>
      <button onClick={() => setHome(false)}>load people</button>
      {data.map((films) => (
        <div className="col-md-6 justify-content-center">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title row justify-content-center">
                {" "}
                {films.title}
              </h3>
              <p className="card-text justify-content-center">
                {films.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
