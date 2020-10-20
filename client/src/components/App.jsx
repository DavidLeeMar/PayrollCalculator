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

convertTimeToDecimal(time) {
  let minutes = time.slice(-2);
  let hours = time.slice(0,2);
  let result = Number(hours) + (Number(minutes) / 60);
  console.log(result);
  return result;
}

handleSubmit(e) {
  e.preventDefault()
  let creditHoursInDecimal = this.convertTimeToDecimal(this.state.creditHours);
  let tafbInDecimal = this.convertTimeToDecimal(this.state.tafb);
  let hoursWorkedOnHolidayInDecimal = this.convertTimeToDecimal(this.state.hoursWorkedOnHoliday);
  let vacationHoursEarned = (creditHoursInDecimal / tafbInDecimal) * hoursWorkedOnHolidayInDecimal;
  console.log('vacationHoursEarned', vacationHoursEarned);
  let vacationPayEarned =  vacationHoursEarned * Number(this.state.hourlyPay);
  console.log('vacationPayEarned', vacationPayEarned)
  this.setState({
    vacationPay: vacationPayEarned
  }, ()=>{console.log(this.state)})
}

  render() {

    return (
      <>
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
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
        <div>
          {this.state.vacationPay}
        </div>
      </>

  )
  }

}

export default App