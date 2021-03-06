import React from 'react';
import Output from './Output.js'
import Input from './Input.js'


class InteractiveInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {sidebarOpen: false};
  }

  handleViewSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  render() {
    var sidebarClass = this.state.sidebarOpen ? 'sidebar-open' : 'sidebar';
    return (
      <React.Fragment>
      <button onClick={this.handleViewSidebar} className = "sidebar-toggle">Input and Output</button>
      <div className={sidebarClass}>

        <Input input = {this.props.input}  onEnter = {this.props.onEnter}/>
        <Output output = {this.props.output}/>
      </div>
      </React.Fragment>
    )
  }
}

export default InteractiveInput;
