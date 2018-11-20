import * as React from "react";
import { Dispatch } from 'redux';
import { setPlayers, paniniReducer } from '../store/panini';
import { connect } from 'react-redux';
import { ApplicationState} from '../store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// props frmo parent
export interface HelloComponentProps { 
    compiler: string;
    framework: string;
}

// Props from Redux Store
interface StateProps {
    players: number
}

interface DispatchProps {
    // setPlayers: (players: number) => void
    setPlayers: typeof setPlayers
}

type Props = StateProps & DispatchProps & HelloComponentProps;

interface State {
    internalComponentStateField: string
}

class HelloComponent extends React.Component<Props, State> {

    handleClick(event: React.MouseEvent<HTMLElement>) {
        this.props.setPlayers(3);
    }

    handleChange = (event: any) => {
        console.log(event);
    };

    render() {
        const { players } = this.props;
        return <div className="hello-component">
            <h1>Hello {players} from {this.props.compiler} and {this.props.framework}!</h1>

            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <TextField
                        id="players"
                        label="Players"
                        className={'text-field'}
                        type="number"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="filled"
                        style={{marginRight: 10}}
                    />
                    
                    <TextField
                        id="filled-name"
                        label="Sticker per Pack"
                        className={'text-field'}
                        type="number"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="filled"
                    />
                </Grid>
            </Grid>

            <Button variant="contained" color="primary" onClick={e => this.handleClick(e)}>
                Set Configuration
            </Button>
        </div>;
    }
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    players: state.panini.players
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setPlayers: (players: number) => dispatch(setPlayers(players))
});

// connect<StateProps, DispatchProps, HelloComponentProps>
export default connect<StateProps, DispatchProps, HelloComponentProps>(mapStateToProps, mapDispatchToProps)(HelloComponent);
