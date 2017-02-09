// # Method Rendering

import React from 'react'

export default class GiantTable extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      rows: [[]],
    }
  }

  onAddValueClick() {
    const { value } = this.textRef
    const updatedRow = this.state.rows[this.state.rows.length - 1]
    updatedRow.push(value)
    const updatedRows = this.state.rows.slice(0, this.state.rows.length - 1).concat([updatedRow])
    this.setState({
      rows: updatedRows,
    })
    this.textRef.value = ''
  }

  onAddRowClick() {
    this.setState({
      rows: this.state.rows.concat([[]])
    })
  }

  renderControls() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.onAddRowClick.bind(this)}>add row</button>
        </div>
        <div>
          <input type="text" placeholder="value" ref={r => this.textRef = r} />
          <button type="button" onClick={this.onAddValueClick.bind(this)}>add value</button>
        </div>
      </div>
    )
  }

  renderValue(value, valueIndex) {
    return (
      <span key={valueIndex} className="giant-table-value" style={{ padding: "16px", border: "1px solid black" }}>
        {value}
      </span>
    )
  }

  renderRow(row, rowIndex) {
    return (
      (
        <div key={rowIndex} className="giant-table-row" style={{ padding: "16px", border: "2px solid red" }}>
          {row.map(this.renderValue.bind(this))}
        </div>
      )
    )
  }

  renderTable() {
    return (
      <div className="giant-table">
        {this.state.rows.map(this.renderRow.bind(this))}
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderControls() }
        { this.renderTable() }
      </div>
    )
  }
}
