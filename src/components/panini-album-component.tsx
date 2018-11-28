import * as React from "react";
import { Dispatch } from 'redux';
import { buyPack } from '../store/panini';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import PaniniCardComponent from './panini-card-component';
import PaniniShop from './panini-shop.component';

// props from parent
export interface ComponentProps { 
}

// props from redux store
interface ReduxProps {
	filledAlbum: Array<number>;
}

interface DispatchProps {
}

type Props = ReduxProps & DispatchProps & ComponentProps;

interface State {
    internalComponentStateField: string
}

class PaniniAlbumComponent extends React.Component<Props, State> {

    render() {
        const { filledAlbum } = this.props;

        const cards = () => {
            let paniniCards = [];
            
            for (let i = 0; i < filledAlbum.length; i++) {
                paniniCards.push(<Grid key={i} item xs={1}>
                                    <PaniniCardComponent key={i} label={i} hits={filledAlbum[i]} />
                                </Grid>)
            }

            return paniniCards;
        }

        return  <div className="panini-album-component">
                    <PaniniShop />
                    <Grid container spacing={8}>
                        {cards()}
                    </Grid>
                </div>;
    }
}

const mapStateToProps = (state: ApplicationState): ReduxProps => ({
	filledAlbum: state.panini.shop.filledAlbum
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
});

// connect<StateProps, DispatchProps, HelloComponentProps>
export default connect<ReduxProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(PaniniAlbumComponent);
