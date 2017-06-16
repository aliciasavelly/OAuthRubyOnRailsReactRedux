import { connect } from "react-redux";
import Dashboard from "./dashboard";

const mapStateToProps = (state, ownProps) => {
  return {
    blurbs: state.blurbs,
    personality: state.personality
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
