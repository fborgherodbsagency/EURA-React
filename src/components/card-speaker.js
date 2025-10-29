import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card-speaker.css'

const CardSpeaker = (props) => {
  return (
    <div className="card-speaker">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="card-speaker-image"
      />
      <div className="card-speaker-container">
        <span className="card-speaker-text10 heading4">
          {props.name ?? (
            <Fragment>
              <span className="card-speaker-text17 heading4">
                <span>Patrick Le Galès</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
        <span className="card-speaker-text11">
          {props.role ?? (
            <Fragment>
              <span className="card-speaker-text14">
                <span>CNRS Research Professor</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <button type="button" className="card-speaker-button button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="card-speaker-text13">Read more</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

CardSpeaker.defaultProps = {
  imageAlt: 'image',
  button: undefined,
  role: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  name: undefined,
}

CardSpeaker.propTypes = {
  imageAlt: PropTypes.string,
  button: PropTypes.element,
  role: PropTypes.element,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.element,
}

export default CardSpeaker
