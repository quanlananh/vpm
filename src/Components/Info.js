import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import FetchData from "../Utils/FetchData";

class Info extends Component {
  componentDidMount() {
    this.props.FetchData(null);
  }

  render() {
    const { info } = this.props;
    return (
      <View>
        {info.isFetching ? (
          <Spinner
            visible={info.isFetching}
            textContent={"fetching data..."}
            textStyle={{ color: "#253145" }}
            animation="fade"
          />
        ) : null}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

export default connect(mapStateToProps, { FetchData })(Info);
