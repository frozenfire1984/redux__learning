import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChangeFirstName = this.handlerChangeFirstName.bind(this);
    this.handlerChangeSecondName = this.handlerChangeSecondName.bind(this);
    this.handlerChangeStatus = this.handlerChangeStatus.bind(this);
    this.handlerClickReset = this.handlerClickReset.bind(this);
  }
  handlerChangeFirstName (event) {
    //this.props.dispatch(actionChangeFirstName(event.target.value))
    this.props.changeFirstName(event.target.value)
  };
  handlerChangeSecondName (event) {
    //this.props.dispatch(actionChangeSecondName(event.target.value))
    this.props.changeSecondName(event.target.value)
  }
  handlerChangeStatus (event) {
    this.props.changeStatus(!this.props.status)
  }
  handlerClickReset(val){
    this.props.changeFirstName(val);
    this.props.changeSecondName(val);
    this.props.changeStatus(false);
  }
  render() {
    console.log("this.props");
    console.log(this.props);
    //const {firstName,secondName,status,changeFirstName,changeSecondName,changeStatus} = this.props;

    return (
      <div>
        <div className="form__item">
          <input
            type="text"
            value={this.props.firstName}
            onChange={this.handlerChangeFirstName}
            placeholder="first name"
          />
        </div>
        <div className="form__item">
          <input
            type="text"
            value={this.props.secondName}
            onChange={this.handlerChangeSecondName}
            placeholder="second name"
          />
        </div>
        <div className="form__item">
          <label htmlFor="input_status">
            Active:
            <input
              type="checkbox"
              checked={this.props.status}
              id="input_status"
              onChange={this.handlerChangeStatus}
            />
          </label>
        </div>
        <button onClick={() => this.handlerClickReset("Default")}>reset</button>
        <hr/>
        <div>
          output: {`${this.props.firstName} ${this.props.secondName} `}
          Status: {this.props.status.toString()}
        </div>
      </div>
    )
  }
}

export default User;

