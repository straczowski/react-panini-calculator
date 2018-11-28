import * as React from "react";
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

// props from parent
export interface ComponentProps { 
}

// props from redux store
interface ReduxProps {
	avgOfStickersNeeded: number;
	avgOfPacksToBuy: number;
	avgMoneyToInvest: number;
}

interface DispatchProps {
}

type Props = ReduxProps & DispatchProps & ComponentProps;

interface State {
}

class PredictionComponent extends React.Component<Props, State> {
	render() {
		return	<div className="prediction-component">
					<Grid container spacing={24}>
						<Grid item xs={3}>
							AVG stickers needed:
						</Grid>
						<Grid item xs={9}>
							{this.props.avgOfStickersNeeded}
						</Grid>
						<Grid item xs={3}>
							AVG Packs to buy:
						</Grid>
						<Grid item xs={9}>
							{this.props.avgOfPacksToBuy}
						</Grid>
						<Grid item xs={3}>
							AVG Money to invest
						</Grid>
						<Grid item xs={9}>
							{this.props.avgMoneyToInvest} €
						</Grid>
					</Grid>
				</div>
	}
}

const mapStateToProps = (state: ApplicationState): ReduxProps => ({
	avgOfStickersNeeded: state.panini.prediction.avgOfStickersNeeded,
	avgOfPacksToBuy: state.panini.prediction.avgOfPacksToBuy,
	avgMoneyToInvest: state.panini.prediction.avgMoneyToInvest
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
});

export default connect<ReduxProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(PredictionComponent);