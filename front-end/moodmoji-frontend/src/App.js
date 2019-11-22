import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import CreateForm from "./components/CreateForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [],
      emoji: {}
    };
    // this.deleteMood = this.deleteMood.bind(this);
  }

  //Function tied CreateForm to add a new Mood
  handleAddMood(emoji) {
    this.setState({
      emojis: [...this.state.emojis, emoji]
    });
  }

  // async deleteMood(id) {
  //   await axios.delete(`${baseURL}/bookmarks/${id}`);
  //   const filteredMoods = this.state.moods.filter(mood => {
  //     return mood._id !== id;
  //   });

  //   this.setState({
  //     moods: filteredMoods
  //   });
  // }

  render() {
    return (
      <div className="App">
        <CreateForm handleAddMood={this.handleAddMood} />
        <ul style={{ listStyle: "none" }}>
          {/* {this.props.moods.map(item => {
            <li>
              Emoji: {item.emoji}
              Date:
              <button onClick={() => this.deleteMood(bookmark._id)}>
                DELETE
              </button>
            </li>;
          })} */}
        </ul>
        <MainContent />
      </div>
    );
  }
}

export default App;
