import { getAsteroidsToDestroy } from "../../redux/selectors/destructions-selectors";
import { setDestructionAsteroid, setAllToOrder } from "../../redux/reducers/destructions-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import DestructionAsterods from "./DestructionAsteroids";

const DestructionAsteroidsContainer = (props) => {

    const onOrder = () => {
        props.setAllToOrder([]);
    }

    return <DestructionAsterods destructions={props.destructions} onOrder={onOrder} />
}

let mapStateToProps = (state) => ({
    destructions: getAsteroidsToDestroy(state),
  });

export default compose(
    connect(mapStateToProps, { setDestructionAsteroid, setAllToOrder }),
    withRouter
  )(DestructionAsteroidsContainer);