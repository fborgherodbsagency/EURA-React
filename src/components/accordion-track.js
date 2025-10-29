import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './accordion-track.css'

const AccordionTrack = (props) => {
  return (
    <div className="accordion-track-container1">
      <div data-thq="accordion" className="accordion-track-accordion-track">
        <details
          data-thq="accordion-trigger"
          className="accordion-track-trigger"
        >
          <summary
            data-thq="accordion-summary"
            className="accordion-track-summary"
          >
            <div className="accordion-track-container2">
              <span className="accordion-track-text1 heading4">
                {props.name ?? (
                  <Fragment>
                    <span className="accordion-track-text6">
                      1 - Inequalities
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="accordion-track-text2 paragraph-big">
                {props.briefDescription ?? (
                  <Fragment>
                    <span className="accordion-track-text7">
                      Tackling inequalities between institutional power and
                      civic alternatives
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div
              data-thq="accordion-icon"
              className="accordion-track-icon-container"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="m12 14l-4-4h8z" fill="currentColor"></path>
              </svg>
            </div>
          </summary>
        </details>
        <div data-thq="accordion-content">
          <div className="accordion-track-container3">
            <p className="paragraph-big-title-accordion">
              {props.chairs ?? (
                <Fragment>
                  <span className="accordion-track-text5">
                    Default Content for the Accordion. This can be anything that
                    you want
                  </span>
                </Fragment>
              )}
            </p>
            <p className="paragraph-big-sansserif">
              {props.descriptionTrack ?? (
                <Fragment>
                  <span className="accordion-track-text8">
                    Default Content for the Accordion. This can be anything that
                    you want
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

AccordionTrack.defaultProps = {
  chairs: undefined,
  name: undefined,
  briefDescription: undefined,
  descriptionTrack: undefined,
}

AccordionTrack.propTypes = {
  chairs: PropTypes.element,
  name: PropTypes.element,
  briefDescription: PropTypes.element,
  descriptionTrack: PropTypes.element,
}

export default AccordionTrack
