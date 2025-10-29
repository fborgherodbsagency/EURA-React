import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer10.css'

const Footer10 = (props) => {
  return (
    <footer
      className={`footer10-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer10-max-width thq-section-max-width">
        <div className="footer10-divider1 thq-divider-horizontal"></div>
        <div className="footer10-content">
          <div className="footer10-links thq-grid-5">
            <div className="footer10-column1">
              <strong className="footer10-column1-title thq-body-large">
                {props.column1Title ?? (
                  <Fragment>
                    <span className="footer10-text2">EURA 2026</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer10-container2">
                <hr className="footer10-separator1"></hr>
              </div>
              <div className="footer10-footer-links1">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="paragraph-big-sansserif"
                >
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer10-text1">Venezia, Italy</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="footer10-column2">
              <strong className="footer10-column2-title paragraph-big-sansserif">
                {props.column2Title ?? (
                  <Fragment>
                    <span className="footer10-text8">Conference</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer10-footer-links2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link61 paragraph-big-sansserif"
                >
                  Call
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link71 paragraph-big-sansserif"
                >
                  Submissions
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link81 paragraph-big-sansserif"
                >
                  Programme
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link9 paragraph-big-sansserif"
                >
                  Registration
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link101 paragraph-big-sansserif"
                >
                  Venue
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link102 paragraph-big-sansserif"
                >
                  Award
                </a>
              </div>
            </div>
            <div className="footer10-column3">
              <strong className="footer10-column3-title paragraph-big-sansserif">
                {props.column3Title ?? (
                  <Fragment>
                    <span className="footer10-text5">Contacts</span>
                  </Fragment>
                )}
              </strong>
              <div className="footer10-container3">
                <hr className="footer10-separator2"></hr>
              </div>
              <div className="footer10-footer-links3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link62 paragraph-big-sansserif"
                >
                  European Urban Research Association
                </a>
                <div className="footer10-container4">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="footer10-image1"
                  />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer10-link72 paragraph-big-sansserif"
                  >
                    secretariat@eura2022.org
                  </a>
                </div>
                <div className="footer10-container5">
                  <img
                    alt={props.imageAlt21}
                    src={props.imageSrc21}
                    className="footer10-image2"
                  />
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer10-link82 paragraph-big-sansserif"
                  >
                    eura2026@iuav.it
                  </a>
                </div>
              </div>
            </div>
            <div className="footer10-column5">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="footer10-image3"
              />
              <div className="footer10-container6">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link63 thq-body-small"
                >
                  <span className="thq-body-small">
                    {props.link112 ?? (
                      <Fragment>
                        <span className="footer10-text6">
                          European Urban Research Association
                        </span>
                      </Fragment>
                    )}
                  </span>
                  {props.link111 ?? (
                    <Fragment>
                      <span className="footer10-text9">Cookie Policy</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer10-link65 thq-body-small"
                >
                  <span className="thq-body-small">
                    {props.link1121 ?? (
                      <Fragment>
                        <span className="footer10-text3">
                          European Urban Research Association
                        </span>
                      </Fragment>
                    )}
                  </span>
                  {props.link1111 ?? (
                    <Fragment>
                      <span className="footer10-text4"> Privacy Policy</span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer10-divider2 thq-divider-horizontal"></div>
        <div className="footer10-credits1">
          <div className="footer10-row">
            <div className="footer10-social-links">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer10-icon1 thq-icon-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="footer10-image4"
              />
            </div>
            <div className="footer10-credits2">
              <span className="footer10-content3 thq-body-small">
                {props.copyright ?? (
                  <Fragment>
                    <span className="footer10-text7">
                      © 2025 EURA Conference
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer10.defaultProps = {
  imageSrc21: '/ic_outline-mail.svg',
  imageSrc2: '/ic_outline-mail.svg',
  link1: undefined,
  column1Title: undefined,
  imageAlt21: 'image',
  imageAlt3: 'image',
  imageAlt1: 'image',
  imageSrc1: '/europeanurbanresearch-200h.png',
  imageAlt2: 'image',
  link1121: undefined,
  link1111: undefined,
  rootClassName: '',
  column3Title: undefined,
  link112: undefined,
  imageSrc3: '/icon_x.svg',
  copyright: undefined,
  column2Title: undefined,
  link111: undefined,
}

Footer10.propTypes = {
  imageSrc21: PropTypes.string,
  imageSrc2: PropTypes.string,
  link1: PropTypes.element,
  column1Title: PropTypes.element,
  imageAlt21: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  link1121: PropTypes.element,
  link1111: PropTypes.element,
  rootClassName: PropTypes.string,
  column3Title: PropTypes.element,
  link112: PropTypes.element,
  imageSrc3: PropTypes.string,
  copyright: PropTypes.element,
  column2Title: PropTypes.element,
  link111: PropTypes.element,
}

export default Footer10
