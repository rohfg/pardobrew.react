import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = fetch(
      "https://run.mocky.io/v3/1ec414b5-06d5-4757-a859-7a0890267cb3"
    );
    fetchData
      .then((getData) => {
        if (getData.status === 200) {
          return getData.json();
        } else {
          return "error";
        }
      })
      .then((getDataJson) => {
        setBeer(getDataJson);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          {loading ? <p>loading</p> : <ItemListContainer beer={beer} />}
        </Route>
        <Route path="/beer/:id" exact>
          {loading ? <p>loading</p> : <ItemDetailContainer beer={beer} />}
        </Route>
        {}
      </Switch>
    </div>
  );
};

export default Main;