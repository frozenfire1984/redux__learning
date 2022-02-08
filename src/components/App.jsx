import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
//import {actionChangeFirstName,actionChangeSecondName,actionChangeStatus} from '../store/actions'
import '../styles/style.css'
import rootReducer from '../store/reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Header from './Header';
import User from './User'
import UserContainer from './User/container'


const store = createStore(rootReducer)

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    //const {firstName,secondName,status,changeFirstName,changeSecondName,changeStatus} = this.props;
    //const {firstName,secondName,status,subscrEmail,subscrFreq} = this.props;

    return (
      <>
        {/*<Provider store={store}>*/}
          <div className="app">
            <Header/>
            {/*<User/>*/}

            <main>
              <div className="container">
                <div className="layout">
                  <aside>
                    aside
                  </aside>
                  <section className="primary">
                    Hello <strong>{this.props.userFirstName} {this.props.userSecondName}</strong>!<br/>
                    you subscribed by <strong>{this.props.subscrEmail}</strong> and you get news <strong>{this.props.subscrFreq}</strong> time in mounth

                  </section>
                </div>
              </div>
            </main>
            <footer>
              <div className="container">
                {/*{subscrEmail}*/}
              </div>
            </footer>
          </div>
        {/*</Provider>*/}
      </>
    )
  }
}

export default App;
