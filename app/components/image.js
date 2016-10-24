import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';

const Image = React.createClass({
  getInitialState: function () {
    return {
      modalVisble: false,
      description: localStorage.getItem(this.props.id) || '',
      newDescription: ''
    }
  },
  toggleModal: function () {
    this.setState({
      modalVisble: !this.state.modalVisble
    })
  },
  updateDescription: function (e) {
    this.setState({
      newDescription: e.target.value
    })
  },
  addDescription: function () {
    localStorage.setItem(this.props.id, this.state.newDescription);

    this.setState({
      description: this.state.newDescription
    })

    let input = document.getElementById("description");
    input.value = '';
  },
  render: function() {
    return (
      <div className={(this.props.id - 1) % 5 === 0 ? 'column is-2 is-offset-1' : 'column is-2'}>
        <a href="javascript: void(0);" target="_blank" onClick={this.toggleModal}>
          <figure className="image is-square">
            <img
              src={this.props.thumbnailUrl}
              alt={this.props.title}
              style={{
                border: "0.1em solid #363636",
                WebkitBoxShadow: "0 10px 6px -6px #777",
                MozBoxShadow: "0 10px 6px -6px #777",
                boxShadow: "0 10px 6px -6px #777"
              }}
            />
          </figure>
        </a>
        {
          this.state.modalVisble
          ? <Modal
              {...this.props}
              close={this.toggleModal}
              addDescription={this.addDescription}
              updateDescription={this.updateDescription}
              description={this.state.description}
            />
          : null
        }
      </div>
    )
  }
});

export default Image;
