import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './committee-card.css'

const CommitteeCard = (props) => {
  return (
    <div className={`committee-card-committee-card ${props.rootClassName} `}>
      <span className="committee-card-text10 heading4">
        {props.nome ?? (
          <Fragment>
            <span className="committee-card-text20 heading3">
              <span>Francesco Musco</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
      <span className="committee-card-text11 heading4">
        {props.role ?? (
          <Fragment>
            <span className="committee-card-text16 heading4">
              <span>Professor of Urban and Regional Planning,</span>
              <br></br>
              <span>Director of Research</span>
            </span>
          </Fragment>
        )}
      </span>
      <span className="committee-card-text12 heading4">
        {props.email ?? (
          <Fragment>
            <span className="committee-card-text13 heading4">
              <span>francesco.musco@iuav.it</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

CommitteeCard.defaultProps = {
  email: undefined,
  rootClassName: '',
  role: undefined,
  nome: undefined,
}

CommitteeCard.propTypes = {
  email: PropTypes.element,
  rootClassName: PropTypes.string,
  role: PropTypes.element,
  nome: PropTypes.element,
}

export default CommitteeCard
