import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder} from '../actions/index';


class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        text: ''
        
      }
    }
  
  


  addReminder = () => {
     this.props.addReminder(this.state.text);
  }
  deleteReminder(id){
    this.props.deleteReminder(id);
  }

  renderReminders(){
    const {reminders} = this.props;
    console.log('this.props' , this.props)
    return (
      <ul className='list-group col-sm-4'>
        {
          reminders.length !== 0 ? 
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div className= 'list-item'>{reminder.text}</div>
                <div onClick={() =>  this.deleteReminder(reminder.id)} className = 'list-item delete-button'>
                  &#x2715;
                </div>
              </li>
            )
          })
          : null
        }
      </ul>
    )
  }
  render(){
  return (
    <div className='App'>
      <div className='title'>
        Reminder Pro
      </div>
      <div className='form-inline'>
        <div className='form-group'>
          <input 
          className='form-control'
          placeholder='I have to...'
          onChange={(e) => this.setState({text: e.target.value})}
          />
        </div>
        <button 
        type='button' 
        className='btn btn-success'
        onClick={() => this.addReminder()}
        >Add Reminder</button>
      </div>
      {this.renderReminders()} 
    </div>
  )
 }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}



export default connect(mapStateToProps, {addReminder, deleteReminder})(App);