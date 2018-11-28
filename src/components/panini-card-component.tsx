import * as React from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState} from '../store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// props from parent
export interface PaniniCardProps { 
    label: number;
    hits: number;
}

class PaniniCardComponent extends React.Component<PaniniCardProps, {}> {

    render() {
        const { label, hits } = this.props;

		return  <div className="panini-card-component" 
					style={{
						background: 'lightgreen',
						padding: 10,
						border: '1px solid green',
						textAlign: 'center'
					}}>
					<div>{label}</div>
					<div>{hits} hits</div>
				</div>;
    }
}

export default PaniniCardComponent;
