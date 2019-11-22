import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import CreateForm from "./components/CreateForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Function tied CreateForm to add a new Emoji
  handleAddEmoji(emoji) {
    this.setState({
      emojis: [...this.state.emojis, emoji]
    });
  }
  render() {
    return (
      <div className="App">
        <CreateForm handleAddEmoji={this.handleAddEmoji} />
        {/* <ul style={{ listStyle: "none" }}>
          {this.props.emojis.map(item => {
            <li>
              id={item._id}
              title={item.title}
              url={item.url}
              completed={item.completed}
              deleteBookmark={this.props.deleteMood}
              updateBookmark={this.props.updateBookmark}
            </li>;
          })}
        </ul> */}
        <MainContent />
      </div>
    );
  }
}

export default App;
