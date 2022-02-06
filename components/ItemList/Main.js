import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = fetch(
      "https://run.mocky.io/v3/7d97f91f-1c17-466e-9875-11ab0b891063"
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