// # Stateless Functional Components

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

const Controls = ({ onAddValueClick, onAddRowClick }) => {
  let textRef = null
  return (
    <div>
      <div>
        <button type="button" onClick={onAddRowClick}>add row</button>
      </div>
      <div>
        <input type="text" placeholder="value" ref={r => textRef = r} />
        <button type="button" onClick={() => onAddValueClick(textRef)}>add value</button>
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
