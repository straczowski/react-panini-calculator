import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import OutletComponent from './components/outlet-component';

import { rootReducer } from './store';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}> 
		<OutletComponent compiler="TypeScript" framework="React" />
	</Provider>
	,
    document.getElementById("app")
);