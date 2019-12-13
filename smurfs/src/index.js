import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {reducer} from "./reducers/smurfReducer";
import {Provider} from 'react-redux';

import {createStore} from "redux";

const store = createStore(reducer);

ReactDOM.render(

<Provider store={store}> 
<App />
</Provider>,

 document.getElementById("root"));
