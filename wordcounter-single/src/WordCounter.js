import React from 'react';
import ProgressBar from './ProgressBar';
import countWords from './countWords';
import makeFakeRequest from './makeFakeRequest';
import SaveManager from './SaveManager';
import SaveButton from './SaveButton';

function Counter({ count }) {
  return <p className="mb2">Word Count: {count}</p>;
}

function Editor({ text, onTextChange }) {
  function handleTextChange(event) {
    onTextChange(event.target.value);
  }
  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text
      </label>
      <textarea value={text} id="editor" onChange={handleTextChange} />
    </div>
  );
}

class WordCounter extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(currentText) {
    this.setState(() => ({ text: currentText }));
  }

  render() {
    const { targetWordCount } = this.props;
    const { text } = this.state;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;
    return (
      <form className="measure pa4 sans-serif">
        {" "}
        <Editor text={text} onTextChange={this.handleTextChange} />
        <div className="flex mt3">
          <Counter count={wordCount} />
          <ProgressBar completion={progress} />{" "}
          <SaveManager saveFunction={makeFakeRequest} data={this.state} />
        </div>
      </form>
    );
  }
}

export default WordCounter;
