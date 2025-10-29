import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './accordion-workshop.css'

const AccordionWorkshop = (props) => {
  return (
    <div className={`accordion-workshop-container1 ${props.rootClassName} `}>
      <div
        data-thq="accordion"
        className="accordion-workshop-accordion-workshop"
      >
        <details
          data-thq="accordion-trigger"
          className="accordion-workshop-trigger"
        >
          <summary
            data-thq="accordion-summary"
            className="accordion-workshop-summary"
          >
            <div className="accordion-workshop-container2">
              <span className="accordion-workshop-text1 heading4">
                {props.nameWorkshop ?? (
                  <Fragment>
                    <span className="accordion-workshop-text8">
                      1 - Forte Marghera and the line of Austrian fortress
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div
              data-thq="accordion-icon"
              className="accordion-workshop-icon-container"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="m12 14l-4-4h8z" fill="currentColor"></path>
              </svg>
            </div>
          </summary>
        </details>
        <div data-thq="accordion-content">
          <div className="accordion-workshop-container3">
            <p className="paragraph-medium">
              {props.descriptionWorkshop ?? (
                <Fragment>
                  <span className="accordion-workshop-text3">
                    <span>
                      The workshop will take place at the “land gate of Venice,”
                      the city&apos;s ancient defensive centre, now an example
                      of culture-driven urban regeneration, where an old
                      fortress built in the 19th century to defend Venice has
                      been transformed into a cultural centre that hosts various
                      events and serves as a social meeting place.
                    </span>
                    <br></br>
                    <span>
                      Originally part of the Mestre entrenched camp and the
                      larger lagoon defence system,“Porto Marghera” is now
                      municipally owned and managed by a non-profit foundation
                      of the City of Venice. It carries out promotion and
                      dissemination activities, organises cultural initiatives,
                      promotes interventions co-financed with public funds, and
                      provides consultancy and design services for the
                      maintenance, restoration, and reuse of heritage sites.
                    </span>
                    <br></br>
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

AccordionWorkshop.defaultProps = {
  descriptionWorkshop: undefined,
  rootClassName: '',
  nameWorkshop: undefined,
}

AccordionWorkshop.propTypes = {
  descriptionWorkshop: PropTypes.element,
  rootClassName: PropTypes.string,
  nameWorkshop: PropTypes.element,
}

export default AccordionWorkshop
