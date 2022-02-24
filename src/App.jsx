import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      userName: "",
      password: "",
      comment: "",
      gender: "female",
      rdLang: "en"
    }

    this.onHandleTogglePassword = this.onHandleTogglePassword.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleClear = this.onHandleClear.bind(this);
    this.onHandleInputChange = this.onHandleInputChange.bind(this);

  }


  onHandleTogglePassword() {

    const checkBoxToggel = document.querySelector("#password");


    if (checkBoxToggel.type === "password") {

      checkBoxToggel.type = "type"
    } else {

      checkBoxToggel.type = "password"
    }
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }

  onHandleClear() {
    this.setState({
      userName: "",
      password: "",
      comment: "",
      gender: "female",
      rdLang: "en"
    })
  }

  onHandleInputChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })
  }


  render() {

    return (

      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Form </h3>
              </div>
              <div className="panel-body">
                <form>

                  <div className="form-group">
                    <label>User Name</label>
                    <input type="gmail" name="userName" className="form-control" placeholder="Your name"
                      value={this.state.userName}
                      onChange={this.onHandleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Your password"
                      value={this.state.password}
                      onChange={this.onHandleInputChange}
                    />
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" onClick={this.onHandleTogglePassword} />
                        Show password
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="textarea" className="col-sm-2 control-label">Comment</label>
                    <textarea name="comment" id="textarea" className="form-control" rows="3" required="required"
                      onChange={this.onHandleInputChange}
                      value={this.state.comment}

                    ></textarea>
                  </div>


                  <div className="form-group">
                    <label htmlFor="input" className="col-sm-12 control-label">Gender</label>

                    <select name="gender" id="input" className="form-control" required="required"
                      defaultValue={this.state.gender}
                      onChange={this.onHandleInputChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                  </div>

                  <div className="form-group">
                    <label htmlFor="input" className="col-sm-2 control-label">Language</label>

                    <div className="radio">
                      <label>
                        <input type="radio" id="input" value="en" name="rdLang"
                          onChange={this.onHandleInputChange}

                        />
                        English
                      </label>
                      <label>
                        <input type="radio" id="input" value="vi" name="rdLang"
                          onChange={this.onHandleInputChange}

                        />
                        VietNamese
                      </label>
                    </div>

                  </div>



                  <div className="form-group">
                    <button type="submit" className="btn btn-primary"
                      onClick={this.onHandleSubmit}
                    >
                      Save
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger"
                      onClick={this.onHandleClear}
                    >
                      Clear
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div >
      </div >

    )

  }


}

export default App;
