// # Extracted Components

import React from 'react'

export default class GiantTable extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      rows: [[]],
    }
  }

  onAddValueClick(textRef) {
    const { value } = textRef
    const updatedRow = this.state.rows[this.state.rows.length - 1]
    updatedRow.push(value)
    const updatedRows = this.state.rows.slice(0, this.state.rows.length - 1).concat([updatedRow])
    this.setState({
      rows: updatedRows,
    })
    textRef.value = ''
  }

  onAddRowClick() {
    this.setState({
      rows: this.state.rows.concat([[]])
    })
  }

  render() {
    return (
      <div>
        <Controls
          onAddRowClick={this.onAddRowClick.bind(this)}
          onAddValueClick={this.onAddValueClick.bind(this)}
        />
        <div className="giant-table">
          {this.state.rows.map((row, rowIndex) => (
            <Row
              key={rowIndex}
              data={row}
            />
          ))}
        </div>
      </div>
    )
  }
}

class Controls extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.props.onAddRowClick}>add row</button>
        </div>
        <div>
          <input type="text" placeholder="value" ref={r => this.textRef = r} />
          <button type="button" onClick={() => this.props.onAddValueClick(this.textRef)}>add value</button>
        </div>
      </div>
    )
  }
}


class Row extends React.Component {
  render() {
    return (
      (
        <div className="giant-table-row" style={{ padding: "16px", border: "2px solid red" }}>
          {this.props.data.map((value, valueIndex) => <Value key={valueIndex} value={value} />)}
        </div>
      )
    )
  }
}

class Value extends React.Component {
  render() {
    return (
      <span className="giant-table-value" style={{ padding: "16px", border: "1px solid black" }}>
        {this.props.value}
      </span>
    )
  }
}
