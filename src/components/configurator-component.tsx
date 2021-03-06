import * as React from "react";
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import { setConfiguration, PaniniConfiguration } from '../store/panini';
import { showPaniniPage } from '../store/layout';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

// props from parent
export interface ComponentProps { 
}

// props from redux store
interface ReduxProps {
	players: number;
	stickerPerPack: number;
	pricePerPack: number;
}

interface DispatchProps {
	setConfiguration: typeof setConfiguration;
	showPaniniPage: typeof showPaniniPage;
}

type Props = ReduxProps & DispatchProps & ComponentProps;

interface State {
	playersInput: number;
	stickerPerPackInput: number;
	pricePerPackInput: number;
}

class ConfiguratorComponent extends React.Component<Props, State> {
	
	handleClick = () => {
		this.props.setConfiguration({
			players: Number(this.state.playersInput),
			stickerPerPack: Number(this.state.stickerPerPackInput),
			pricePerPack: Number(this.state.pricePerPackInput)
		});
		this.props.showPaniniPage();
	}
	
	componentDidMount() {
		this.setState((current) => ({ 
			...current, 
			playersInput: this.props.players,
			stickerPerPackInput: this.props.stickerPerPack,
			pricePerPackInput: this.props.pricePerPack
		}));
	}

    handlePlayerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState((current) => ({ ...current, playersInput: (event.target as any).value }));
		this.props.setConfiguration({
			players: Number((event.target as any).value),
			pricePerPack: this.state.pricePerPackInput,
			stickerPerPack: this.state.stickerPerPackInput
		})
	}
	
	handleStickerPerPackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState((current) => ({ ...current, stickerPerPackInput: (event.target as any).value }));
		this.props.setConfiguration({
			players: this.state.playersInput,
			pricePerPack: this.state.pricePerPackInput,
			stickerPerPack: Number((event.target as any).value)
		})
	}
	
	handlePricePerPackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState((current) => ({ ...current, pricePerPackInput: (event.target as any).value }));
		this.props.setConfiguration({
			players: this.state.playersInput,
			pricePerPack: Number((event.target as any).value),
			stickerPerPack: this.state.stickerPerPackInput
		})
	}

	render() {
		return <div>	
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <TextField
                        id="players"
                        label="Players"
                        className={'text-field'}
                        type="number"
						defaultValue="682"
						onChange={this.handlePlayerInput}
                        margin="normal"
                        variant="filled"
                        style={{marginRight: 10}}
                    />
                    
                    <TextField
                        id="filled-name"
                        label="Sticker per Pack"
                        className={'text-field'}
                        type="number"
						defaultValue="5"
                        onChange={this.handleStickerPerPackInput}
                        margin="normal"
                        variant="filled"
                        style={{marginRight: 10}}
                    />
                    <TextField
                        id="filled-name"
                        label="Price per Pack"
                        className={'text-field'}
						type="number"
						defaultValue="0.90"
						onChange={this.handlePricePerPackInput}
                        margin="normal"
						variant="filled"
						inputProps={{
						  'step': '0.01',
						}}
                    />
                </Grid>

				<Grid item xs={12}>
					<Button variant="contained" color="primary" onClick={this.handleClick}>
						Play Panini
					</Button>
				</Grid>
            </Grid>
		</div>
	}
}

const mapStateToProps = (state: ApplicationState): ReduxProps => ({
	players: state.panini.players,
	stickerPerPack: state.panini.stickerPerPack,
	pricePerPack: state.panini.pricePerPack
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	setConfiguration: (config: PaniniConfiguration) => dispatch(setConfiguration(config)),
	showPaniniPage: () => dispatch(showPaniniPage())
});

export default connect<ReduxProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(ConfiguratorComponent);