import * as React from "react";
import { Dispatch } from 'redux';
import { buyPack } from '../store/panini';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PaniniCardComponent from './panini-card-component';

// props from parent
export interface ComponentProps { 
}

// props from redux store
interface ReduxProps {
	packsBought: number;
	moneyInvested: number;
}

interface DispatchProps {
	buyPack: typeof buyPack
}

type Props = ReduxProps & DispatchProps & ComponentProps;

interface State {
    backBuyInput: number
}

class PaniniShopComponent extends React.Component<Props, State> {

	componentDidMount() {
		this.setState((current) => ({ 
			...current, 
			backBuyInput: 1
		}));
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState((current) => ({ ...current, backBuyInput: Number( (event.target as any).value )}));
	}

	handlePackBuy = () => {
		this.props.buyPack(this.state.backBuyInput);
	}

    render() {

        return  <div className="hello-component">
                    <Grid container spacing={8}>
						<Grid item xs={12} style={{display: 'flex', alignItems: 'center'}}>
							<TextField
								id="filled-name"
								label="Number of Packs"
								className={'text-field'}
								type="number"
								defaultValue="1"
								onChange={this.handleChange}
								margin="normal"
								variant="filled"
							/>

							<Button variant="contained" color="primary" onClick={this.handlePackBuy}>
								Buy Packs
							</Button>
						</Grid>
                    </Grid>

                    <Grid container spacing={8}>
						<Grid item xs={3}>
							Packs Bought: 
						</Grid>
						<Grid item xs={9}>
							{this.props.packsBought}
						</Grid>

						<Grid item xs={3}>
							Money Invested: 
						</Grid>
						<Grid item xs={9}>
							{this.props.moneyInvested}
						</Grid>
					</Grid>
                </div>;
    }
}

const mapStateToProps = (state: ApplicationState): ReduxProps => ({
	packsBought: state.panini.shop.packsBought,
	moneyInvested: state.panini.shop.moneyInvested
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    buyPack: (n: number) => dispatch(buyPack(n))
});

// connect<StateProps, DispatchProps, HelloComponentProps>
export default connect<ReduxProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(PaniniShopComponent);
