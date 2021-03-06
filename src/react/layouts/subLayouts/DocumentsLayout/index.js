import { compose } from "recompose";
import { connect } from "react-redux";
import DocumentsLayout from "./DocumentsLayout";
import {
  moveToDocumentsLeftItem1,
  moveToDocumentsLeftItem2,
  moveToDocumentsLeftItem3,
} from "../../../../redux/actions/navigation";

const mapStateToProps = (state, { match }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, { hasSession, match }) => {
  return {
    moveToItem1: () => dispatch(moveToDocumentsLeftItem1()),
    moveToItem2: () => dispatch(moveToDocumentsLeftItem2()),
    moveToItem3: () => dispatch(moveToDocumentsLeftItem3()),
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { moveToItem1, moveToItem2, moveToItem3 } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onTabIndexChange: (idx) => {
      switch (idx) {
        case 0:
          return moveToItem1();
        case 1:
          return moveToItem2();
        case 2:
          return moveToItem3();
        default:
          return null;
      }
    },
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps, mergeProps))(DocumentsLayout);
