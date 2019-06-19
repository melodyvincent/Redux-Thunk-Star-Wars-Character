import React, {Component} from 'react';
import {connect} from 'react-redux';
import CharacterInfo from './Component/CharacterInfo';
import { thunk_action_creator } from './action/fetchAction';

class App extends Component {
    handleSubmit = e => {
      e.preventDefault();
      const character = this.getCharacter.value;
      console.log(character)
    };

  render() {
    return(
      <div classname='container'>
        <form onSubmit={this.handleSubmit} className='form'>
        <h2 className='title'>Enter the Starwars Character</h2>
        <input 
        type="text"
        placeholder="Enter Star Wars Character"
        required
        ref={input => (this.getCharacter =input)}
        />
        <button className="button">Submit</button>
        </form>
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (
          <h3 className='error'>No such character exists.</h3>
        ): null}
        {Object.keys(this.props.data.characterData).length > 0? (
          <CharacterInfo character={this.props.data.characterData} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App);
