import * as React from "react";
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import { showConfigPage, showPaniniPage } from '../store/layout';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import HelloComponent from './hello-component';
import ConfiguratorComponent from './configurator-component';

// props from parent component
export interface ComponentProps {
    compiler: string;
    framework: string;
}

// props from redux store
interface StateProps {
	configPage: boolean;
	paniniPage: boolean;
}

// Actions
interface DispatchProps {
	showConfigPage: typeof showConfigPage;
	showPaniniPage: typeof showPaniniPage;
}

type Props = StateProps & DispatchProps & ComponentProps;

interface State {
    someField: string
}

class OutletComponent extends React.Component<Props, State> {

	handleClick() {

	}

	getOutletConent(): React.ReactFragment {
		let outlet;

		if (this.props.configPage) {
			outlet = <ConfiguratorComponent />
		}
		if (this.props.paniniPage) {
			outlet = <HelloComponent />
		}
		return outlet
	}

	render() {
		return 	<div className="outlet-component">
					<div style={{ padding: 20 }}>
						<Grid container spacing={24}>
							<Grid item xs={12} sm={9}>
								<h1>Panini Calculator</h1>
							</Grid>
							<Grid item xs={12} sm={3}>
								
								<Button onClick={this.handleClick} style={{float: 'right'}}>
									Reset
								</Button>
							</Grid>
						</Grid>
						{this.getOutletConent()}
					</div>
				</div>;
	}
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
	configPage: state.layout.showConfigPage,
	paniniPage: state.layout.showPaniniPage
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	showConfigPage: () => dispatch(showConfigPage()),
	showPaniniPage: () => dispatch(showPaniniPage())
});

export default connect<StateProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(OutletComponent);