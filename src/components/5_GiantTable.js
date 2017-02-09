// # Extracted functions

import React from 'react'

function addValueToRows(value, rows) {
  const updatedRow = rows.slice()[rows.length - 1]
  updatedRow.push(value)
  const updatedRows = rows.slice(0, rows.length - 1).concat([updatedRow])
  return updatedRows
}

function addRowToRows(rows) {
  return rows.slice().concat([[]])
}

export default class GiantTable extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      rows: [[]],
    }
  }

  addValue(value) {
    this.setState({
      rows: addValueToRows(value, this.state.rows)
    })
  }

  addRow() {
    this.setState({
      rows: addRowToRows(this.state.rows)
    })
  }

  render() {
    return (
      <div>
        <Controls
          addRow={this.addRow.bind(this)}
          addValue={this.addValue.bind(this)}
        />
        <Table rows={this.state.rows} />
      </div>
    )
  }
}


const Table = ({ rows }) => (
  <div className="giant-table">
    {rows.map((row, rowIndex) => (
      <Row
        key={rowIndex}
        data={row}
      />
    ))}
  </div>
)

const Controls = ({ addValue, addRow }) => {
  let textRef = null
  return (
    <div>
      <div>
        <button type="button" onClick={addRow}>add row</button>
      </div>
      <div>
        <input type="text" placeholder="value" ref={r => textRef = r} />
        <button type="button" onClick={() => { addValue(textRef.value); textRef.value = '' }}>add value</button>
      </div>
    </div>
  )
}

const Row = ({ data }) => (
  <div className="giant-table-row" style={{ padding: "16px", border: "2px solid red" }}>
    {data.map((value, valueIndex) => <Value key={valueIndex} value={value} />)}
  </div>
)

const Value = ({ value }) => (
  <span className="giant-table-value" style={{ padding: "16px", border: "1px solid black" }}>
    {value}
  </span>
)
