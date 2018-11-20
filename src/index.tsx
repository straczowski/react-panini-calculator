import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HelloComponent  from "./components/hello-component";

import { rootReducer } from './store';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}> 
		<HelloComponent compiler="TypeScript" framework="React" />
	</Provider>
	,
    document.getElementById("app")
);