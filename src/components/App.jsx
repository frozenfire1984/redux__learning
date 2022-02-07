import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionChangeFirstName,actionChangeSecondName,actionChangeStatus} from '../store/actions'
import '../styles/style.css'
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    //const {firstName,secondName,status,changeFirstName,changeSecondName,changeStatus} = this.props;
    const {firstName,secondName,status} = this.props;

    return (
      <>
        <div className="app">
          <Header/>
          <main>
            <div className="container">
              <div className="layout">
                <aside>
                  aside
                </aside>
                <section className="primary">
                  Hello {firstName} {secondName}!
                </section>
              </div>
            </div>
          </main>
          <footer>
            <div className="container">
              footer
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default App;
