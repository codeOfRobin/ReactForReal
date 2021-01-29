import React from "react";
class SaveManager extends React.Component {
  constructor() {
    super();
    this.state = { saveStatus: IDLE };
    this.save = this.save.bind(this);
  }

  save(event) {
    event.preventDefault();
    this.setState(() => {
      saveStatus: WAITING;
    });
    this.props.saveFunction(this.props.data).then(
      (success) => this.setState(() => ({ saveStatus: SUCCESS })),
      (failure) => this.setState(() => ({ saveStatus: FAILURE }))
    );
  }

  render() {
    return (
      <div className="flex flex-column mv2">
        <SaveButton onClick={this.save} />
        <AlertBox status={this.state.saveStatus} />
      </div>
    );
  }
}
export default SaveManager;
