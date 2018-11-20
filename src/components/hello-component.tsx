import * as React from "react";
import { Dispatch } from 'redux';
import { setPlayers, paniniReducer } from '../store/panini';
import { connect } from 'react-redux';
import { ApplicationState} from '../store';

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

    render() {
        const { players } = this.props;
        return <div className="hello-component">
            <h1>Hello {players} from {this.props.compiler} and {this.props.framework}!</h1>
            <button onClick={e => this.handleClick(e)}> Set Player </button>
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