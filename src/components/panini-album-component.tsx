import * as React from "react";
import { Dispatch } from 'redux';
// import { setPlayers } from '../store/panini';
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
    players: number
}

interface DispatchProps {
}

type Props = ReduxProps & DispatchProps & ComponentProps;

interface State {
    internalComponentStateField: string
}

class PaniniAlbumComponent extends React.Component<Props, State> {

    handleClick(event: React.MouseEvent<HTMLElement>) {
        // this.props.setPlayers(3);
    }

    handleChange = (event: any) => {
        console.log(event);
    };

    render() {
        const { players } = this.props;

        const cards = () => {
            let paniniCards = [];
            
            for (let i = 1; i <= 720; i++) {
                paniniCards.push(<Grid key={i} item xs={1}>
                                    <PaniniCardComponent key={i} label={i} hits={0} />
                                </Grid>)
            }

            return paniniCards;
        }

        return  <div className="hello-component">
                    <Grid container spacing={24}>
                        {cards()}
                    </Grid>
                </div>;
    }
}

const mapStateToProps = (state: ApplicationState): ReduxProps => ({
    players: state.panini.players
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    // setPlayers: (players: number) => dispatch(setPlayers(players))
});

// connect<StateProps, DispatchProps, HelloComponentProps>
export default connect<ReduxProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(PaniniAlbumComponent);
