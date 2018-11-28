import * as React from "react";
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import { setPlayers } from '../store/panini';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// props from parent
export interface ComponentProps { 
}

// props from redux store
interface StateProps {
    players: number
}

interface DispatchProps {
    setPlayers: (players: number) => void
}

type Props = StateProps & DispatchProps & ComponentProps;

interface State {
	playersInput: number;
	stickerPerPackInput: number;
	pricePerPackInput: number;
}

class ConfiguratorComponent extends React.Component<Props, State> {
	
	handleClick = (event: any) => {
        console.log(event);
    }

    handlePlayerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('playersInput', (event.target as any).value);
		this.setState((current) => ({ ...current, playersInput: (event.target as any).value }));
	}
	
	handleStickerPerPackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('stickerPerPackInput', (event.target as any).value);
		this.setState((current) => ({ ...current, stickerPerPackInput: (event.target as any).value }));
	}
	
	handlePricePerPackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('pricePerPackInput', (event.target as any).value);
		this.setState((current) => ({ ...current, pricePerPackInput: (event.target as any).value }));
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
						onChange={this.handlePricePerPackInput}
                        margin="normal"
                        variant="filled"
                    />
                </Grid>

				<Grid item xs={12}>
					<Button variant="contained" color="primary" onClick={e => this.handleClick(e)}>
						Set Configuration
					</Button>
				</Grid>
            </Grid>
		</div>
	}
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    players: state.panini.players
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setPlayers: (players: number) => dispatch(setPlayers(players))
});

export default connect<StateProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(ConfiguratorComponent);