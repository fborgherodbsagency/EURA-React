import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './button-stroke.css'

const ButtonStroke = (props) => {
  return (
    <div className={`button-stroke-container ${props.rootClassName} `}>
      <button type="button" className="button-stroke-button button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="button-stroke-text2">
                Book of abstracts (PDF, 2Mb)
              </span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

ButtonStroke.defaultProps = {
  button: undefined,
  rootClassName: '',
}

ButtonStroke.propTypes = {
  button: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ButtonStroke
