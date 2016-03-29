import React, { PropTypes } from 'react';

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { text: this.props.text };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    this.props.onSubmit(e.target.value);
  }

  render() {
    return (
      <input
        className="edit"
        autoFocus
        onBlur={this.handleSubmit}
        onChange={this.handleChange}
        value={this.state.text}
      />
    );
  }
}

EditTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
