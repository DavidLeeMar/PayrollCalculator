import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hourlyPay: "",
      creditHours: '',
      tafb: '',
      hoursWorkedOnHoliday: '',
      vacationPay: ''
    }

   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.convertTimeToDecimal = this.convertTimeToDecimal.bind(this)
  }
//need to verify input type, input range

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  }, ()=>{console.log(this.state)})
}

convertTimeToDecimal() {

}

handleSubmit() {

}




  render() {

    return (
      <form>
        <label>Hourly Pay ::
          <input type="text" name="hourlyPay" onChange={this.handleChange}></input>
        </label><br></br>
        <label>Credit Hours:
          <input type="text" name="creditHours" onChange={this.handleChange} placeholder="HH:mm"></input>
        </label><br></br>
        <label>Time Away From Base:
          <input type="text" name="tafb" onChange={this.handleChange} placeholder="HH:mm"></input>
        </label><br></br>
        <label>Hours Worked On Holiday:
          <input type="text" name="hoursWorkedOnHoliday" onChange={this.handleChange} placeholder="HH:mm"></input>
        </label><br></br>
        <input type="submit" value="Submit" />
      </form>

  )
  }

}

export default App