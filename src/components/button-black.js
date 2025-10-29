import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './button-black.css'

const ButtonBlack = (props) => {
  return (
    <div className={`button-black-container ${props.rootClassName} `}>
      <button type="button" className="button button-black">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="button-black-text2">
                Book of abstracts (PDF, 2Mb)
              </span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

ButtonBlack.defaultProps = {
  rootClassName: '',
  button: undefined,
}

ButtonBlack.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.element,
}

export default ButtonBlack
