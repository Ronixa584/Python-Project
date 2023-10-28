import React from "react";
import { Link } from "react-router-dom";
import TextEditor from "../../Text Editor/Client/TextEditor";
import { Route, useRouteMatch } from "react-router-dom";


const Navigation = () => {

    const match = useRouteMatch();

  return (
    <button onClick={temp} className="text-blue-500 hover:text-blue-700">
      <p>Create</p>
      <Route path={'${match.path}/TextEditor'} component={TextEditor} />
    </button>
  );
};

export default Navigation;
