import React from 'react';
import DescriptionInput from './descriptionInput';
import Description from './description';

const Modal = (props) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <h3 className="title is-3" style={{color:"#FFF"}}>{props.title}</h3>
        <div className="card is-fullwidth">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={props.url} alt={props.title}/>
            </figure>
          </div>
          <DescriptionInput addDescription={props.addDescription} updateDescription={props.updateDescription}/>
          <Description description={props.description}/>
        </div>
      </div>
      <button className="modal-close" onClick={props.close}></button>
    </div>
  );
};

export default Modal;
