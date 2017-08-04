import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 

class App extends Component {
  state = {
    dataSet: [],
  };

  mapOLData = function (data) {
    return data.map(function (change, index) {
      const time = change.timestamp.split('T');
      const time_d = time[0] + ' @' + time[1].substr(0,8);
      return {
        'time': time_d,
        'member': change.author.key.split('/').pop(),
        'desc': change.comment
      }
    });
  }

  componentDidMount = () => (
    $.ajax({
      url: 'http://openlibrary.org/recentchanges.json?limit=12',
      context: this,
      dataType: 'json',
      type: 'GET'
    }).done(function (data) {
      const dataSet = this.mapOLData(data);
      this.setState({dataSet: dataSet});
    })
  )

  render() {
    return (
      <div className='display'>
        <h1>{this.props.title}</h1>
        <ChangeLogTable>
          <Headings headings={this.props.headings}/>
          <Rows rows={this.state.dataSet}/>
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
        key={'heading-'+index}
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
        key={'row-'+index}
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
