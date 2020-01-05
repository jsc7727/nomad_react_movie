import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { id, location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    }
    return null;
  }
}

export default Detail;
