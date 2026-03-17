import { Component } from "react";

const withData = (WrappedCmp: any, url: string, Loader = <p>Loading...</p>) => {
  return class extends Component {
    constructor(props: any) {
      super(props);
      this.state = {
        data: null,
        cargandoDatos: true,
      };
    }

    async componentDidMount() {
      const response = await fetch(url);
      const datos = await response.json();
      setTimeout(() => {
        this.setState({ data: datos, cargandoDatos: false });
      }, 1400);
    }

    render() {
      return (
        <>
          {this.state.cargandoDatos ? (
            Loader
          ) : (
            <WrappedCmp {...this.props} data={this.state.data} />
          )}
        </>
      );
    }
  };
};

export default withData;
