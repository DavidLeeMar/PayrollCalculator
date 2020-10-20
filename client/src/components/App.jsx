import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hourlyPay: '',
      creditHours: '',
      tafb: '',
      hoursWorkedOnHoliday: '',
      vacationPay: ''
    }

   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.convertTimeToDecimal = this.convertTimeToDecimal.bind(this)
   this.clearForm = this.clearForm.bind(this)
  }
//need to verify input type, input range

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

convertTimeToDecimal(time) {
  let minutes = time.slice(-2);
  let hours = time.slice(0,2);
  let result = Number(hours) + (Number(minutes) / 60);
  return result;
}

handleSubmit(e) {
  e.preventDefault()
  let creditHoursInDecimal = this.convertTimeToDecimal(this.state.creditHours);
  let tafbInDecimal = this.convertTimeToDecimal(this.state.tafb);
  let hoursWorkedOnHolidayInDecimal = this.convertTimeToDecimal(this.state.hoursWorkedOnHoliday);
  let vacationHoursEarned = (creditHoursInDecimal / tafbInDecimal) * hoursWorkedOnHolidayInDecimal;
  let vacationPayEarned =  vacationHoursEarned * Number(this.state.hourlyPay);
  this.setState({
    vacationPay: vacationPayEarned
  })
}

clearForm() {
  this.setState({
    hourlyPay: '',
    creditHours: '',
    tafb: '',
    hoursWorkedOnHoliday: '',
    vacationPay: ''
  })
}

  render() {

    return (
      <>
        <form>
          <label>Hourly Pay ::
            <input type="text" name="hourlyPay" value={this.state.hourlyPay} onChange={this.handleChange}></input>
          </label><br></br>
          <label>Credit Hours:
            <input type="text" name="creditHours" value={this.state.creditHours} onChange={this.handleChange} placeholder="HH:mm"></input>
          </label><br></br>
          <label>Time Away From Base:
            <input type="text" name="tafb" value={this.state.tafb} onChange={this.handleChange} placeholder="HH:mm"></input>
          </label><br></br>
          <label>Hours Worked On Holiday:
            <input type="text" name="hoursWorkedOnHoliday" value={this.state.hoursWorkedOnHoliday} onChange={this.handleChange} placeholder="HH:mm"></input>
          </label><br></br>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          <button onClick={this.clearForm}>Clear</button>
        </form>

        <div>
          {this.state.vacationPay}
        </div>
      </>

  )
  }

}

export default App