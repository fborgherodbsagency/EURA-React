import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './committee-card-name.css'

const CommitteeCardName = (props) => {
  return (
    <div className="committee-card-name-committee-card">
      <span className="committee-card-name-text1 heading3">
        {props.text ?? (
          <Fragment>
            <span className="committee-card-name-text2 heading3">
              <span>Anna Marson</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

CommitteeCardName.defaultProps = {
  text: undefined,
}

CommitteeCardName.propTypes = {
  text: PropTypes.element,
}

export default CommitteeCardName
