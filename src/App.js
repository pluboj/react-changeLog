import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='display'>
        <h1>{this.props.title}</h1>
        <ChangeLogTable>
          <Headings headings={this.props.headings}/>
          <Rows rows={this.props.data}/>
        </ChangeLogTable>
      </div>
    );
  }
}

App.defaultProps = {
  headings: ['Updated', 'Member', 'Description'],
  title: 'Change Log'
}

class Heading extends Component {
  render() {
    return (<th>{this.props.heading}</th>)
  }
}

class Headings extends Component {
  render() {
    const headings = this.props.headings.map((heading,index) => (
      <Heading 
        heading={heading} 
        key={index}
      />
    ))
    return (
      <thead>
        <tr>{headings}</tr>
      </thead>
    )
  }
}

class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.row.time}</td>
        <td>{this.props.row.member}</td>
        <td>{this.props.row.desc}</td>
      </tr>
    )
  }
}

class Rows extends Component {
  render() {
    const rows = this.props.rows.map((row, index) => (
      <Row 
        row={row} 
        key={index}
      />
    ))

    return(<tbody>{rows}</tbody>)
  }
}

class ChangeLogTable extends Component {
  render() {
    return(
      <table>
        {this.props.children}
      </table>
    )
  }
}

export default App;
