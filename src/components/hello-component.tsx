import * as React from "react";
import { Dispatch } from 'redux';
import * as PropTypes from 'prop-types'
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
    setPlayers: () => void
}

type Props = StateProps & DispatchProps & HelloComponentProps;

interface State {
    internalComponentStateField: string
}

class HelloComponent extends React.Component<Props, State> {
    render() {
        const { players, setPlayers } = this.props;
        return <h1>Hello {players} from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    players: state.panini.players
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: HelloComponentProps): DispatchProps => ({
    setPlayers: () => dispatch(setPlayers(1))
});

// connect<StateProps, DispatchProps, HelloComponentProps>
export default connect<StateProps, DispatchProps, HelloComponentProps>(mapStateToProps, mapDispatchToProps)(HelloComponent);