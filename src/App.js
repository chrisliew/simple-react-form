import React, { Component } from 'react';
import './App.css';

class AgeForm extends Component {
  render() {
    return(
      <form className="name-form" onSubmit={this.props.handleSubmitAgeForm}>
      <input 
        type="text" 
        value={this.props.age}
        placeholder="Enter Age" 
        onChange={this.props.handleChangeAge}
      />
      <input 
        type="text" 
        value={this.props.nationality}
        placeholder="Enter Place of Birth" 
        onChange={this.props.handleChangeNationality}
      />
      <button type="submit">Submit</button>
    </form>
    )
  }
}

class NameForm extends Component {
  render() {
    return(
      <form className="name-form" onSubmit={this.props.handleSubmitNameForm}>
      <input 
        type="text" 
        value={this.props.firstname}
        placeholder="Enter First Name" 
        onChange={this.props.handleChangeFirstName}
      />
      <input 
        type="text" 
        value={this.props.lastname}
        placeholder="Enter Last Name" 
        onChange={this.props.handleChangeLastName}
      />
      <button type="submit">Submit</button>
    </form>
    )
  }
}

class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      nameForm: true,
      age: '',
      nationality: '',
      ageForm: false,
      summary: false,
    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleSubmitNameForm = this.handleSubmitNameForm.bind(this);

    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeNationality= this.handleChangeNationality.bind(this);
    this.handleSubmitAgeForm= this.handleSubmitAgeForm.bind(this);
  }

// ******************** Name Form *********************
  handleChangeFirstName(event) {
    this.setState({
      firstname: event.target.value
    })
  }

  handleChangeLastName(event) {
    this.setState({
      lastname: event.target.value
    })
  }

  handleSubmitNameForm(event) {
    this.setState({
      nameForm: false,
      ageForm: true
    })
    event.preventDefault();
  }

// ******************** Age Form *********************

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleChangeNationality(event) {
    this.setState({
      nationality: event.target.value
    })
  }

  handleSubmitAgeForm(event) {
    this.setState({
      ageForm: false,
      summary: true
    });
    event.preventDefault();
  }

  render() {
    let renderForm

    if(this.state.nameForm) {
      renderForm = 
      <NameForm 
        handleSubmitNameForm={this.handleSubmitNameForm}
        firstname={this.state.firstname}
        handleChangeFirstName={this.handleChangeFirstName}
        lastname={this.state.lastname}
        handleChangeLastName={this.handleChangeLastName}
      />
    }
    else if(this.state.ageForm) {
      renderForm = 
      <AgeForm 
        handleSubmitAgeForm={this.handleSubmitAgeForm}
        age={this.state.age}
        handleChangeAge={this.handleChangeAge}
        nationality={this.state.nationality}
        handleChangeNationality={this.handleChangeNationality}
      />
    }
    else if (this.state.summary) {
      console.log("Summary", this.state.summary);
      renderForm = 
        <div className="data-output">Hi there {this.state.firstname} {this.state.lastname}! You are {this.state.age} years old and born in {this.state.nationality}</div>
      }
    return(
      <div>
       {renderForm}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div>
      <div className="form-container">
        <h1>Simple React Form</h1>
        <FormData />
      </div>
    </div>
    );
  }
}

export default App;
