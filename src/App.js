import React from 'react';
import Auth from './components/Auth'
import Reg from './components/Reg'
import './styles/style.css';

//lesson: https://www.youtube.com/watch?v=jvkhKRHS2TY&t=4s

class App extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container container_centered-contain">
          <div className="box">
            <div className="row">
              <div className="col">
                <Auth/>
              </div>
              <div className="col">
                <Reg/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
