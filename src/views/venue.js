import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Footer10 from '../components/footer10'
import './venue.css'

const Venue = (props) => {
  return (
    <div className="venue-container1">
      <Helmet>
        <title>Venue - EURA</title>
        <meta property="og:title" content="Venue - EURA" />
      </Helmet>
      <header data-thq="thq-navbar" className="venue-navbar-interactive">
        <span className="venue-text10 fontmenu">
          <span>
            EURA
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="venue-text12">Conference 2026</span>
        </span>
        <div data-thq="thq-navbar-nav" className="venue-desktop-menu">
          <nav className="venue-links1">
            <span>Conference</span>
            <span className="venue-text14">Call</span>
            <span className="venue-text15">Submission</span>
            <span className="venue-text16">Registration</span>
            <span className="venue-text17">Programme</span>
            <span className="venue-text18">Venue</span>
            <span className="venue-text19">Awards</span>
          </nav>
          <div className="venue-buttons1">
            <button className="button">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="venue-burger-menu">
          <svg viewBox="0 0 1024 1024" className="venue-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="venue-mobile-menu">
          <div className="venue-nav">
            <div className="venue-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="venue-logo"
              />
              <div data-thq="thq-close-menu" className="venue-close-menu">
                <svg viewBox="0 0 1024 1024" className="venue-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="venue-links2">
              <span className="venue-text20">About</span>
              <span className="venue-text21">Features</span>
              <span className="venue-text22">Pricing</span>
              <span className="venue-text23">Team</span>
              <span className="venue-text24">Blog</span>
            </nav>
            <div className="venue-buttons2">
              <button className="venue-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="venue-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="venue-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="venue-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="venue-container2 thq-section-padding">
        <div className="venue-container3 thq-section-max-width">
          <h3 className="venue-text25 heading3">Venue</h3>
          <h1 className="venue-text26 heading1">Cotonificio</h1>
        </div>
      </div>
      <div className="venue-container4 thq-section-padding">
        <div className="venue-container5 thq-section-max-width">
          <div className="venue-container6">
            <h1 className="heading4">
              <span>Parallel sessions will be held at </span>
              <span>Cotonificio</span>
              <br></br>
            </h1>
            <span className="paragraph-big">
              <span className="venue-text32">History and current usage</span>
              <br className="venue-text33"></br>
              <span>
                The Cotonificio Veneziano building was inaugurated in 1883 and
                became an operating cotton mill the following year, thanks to
                the initiatives of Baron Eugenio Cantoni and Knight Carlo
                Moschini. In 1916, it was destroyed by a fire and subsequently
                rebuilt. The mill employed more than a thousand workers and
                remained in operation until 1960. After being abandoned for
                about thirty years, it was finally restored by the Venetian
                architect Gino Valle.
              </span>
              <br></br>
              <br></br>
              <span>
                Today, the main building houses a large part of the Università
                Iuav di Venezia, including lecture halls, the Department of
                Architecture and Arts, and the Project Archives. The archives
                include a study room with nine new consultation stations, an
                exhibition room, an office, and a storage room.
              </span>
              <br></br>
              <br></br>
              <a
                href="https://www.iuav.it/it/sedi/cotonificio-veneziano"
                target="_blank"
                rel="noreferrer noopener"
                className="venue-link"
              >
                The venue
              </a>
              <span>
                {' '}
                is particularly suitable for hosting the EURA Conference, with
                30 lecture rooms that can each accommodate up to 100–150
                participants — ideal for parallel sessions and side events. The
                building also features a 250-seat auditorium, perfect for
                plenary break-out sessions or special lectures.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="venue-text44">Accessibility</span>
              <br></br>
              <span>
                The conference will take place in the historic center of Venice,
                where it is possible to move around on foot or by using one of
                the 159 types of water vehicles in the ACTV (municipal transport
                agency) fleet — including vaporettos, motorboats, battelli
                foranei (larger vaporettos used for trips to the outer islands),
                and ferries.
              </span>
              <br></br>
              <br></br>
              <span>
                The Cotonificio venue is conveniently located near both the
                railway station and Piazzale Roma bus terminal. It can be easily
                reached by public transportation and is fully accessible for
                people with disabilities. All rooms are designed to ensure
                complete accessibility.
              </span>
              <br></br>
              <br></br>
              <span>
                The Cotonificio is just a 10-minute walk from Piazzale Roma bus
                station.
              </span>
              <br></br>
            </span>
          </div>
          <div className="venue-container7">
            <img
              alt="image"
              src="/_h2a7759%201-1500w.jpg"
              className="venue-image"
            />
          </div>
        </div>
      </div>
      <Footer10
        link1={
          <Fragment>
            <span className="venue-text54">Venezia, Italy</span>
          </Fragment>
        }
        link111={
          <Fragment>
            <span className="venue-text55">Cookie Policy</span>
          </Fragment>
        }
        link112={
          <Fragment>
            <span className="venue-text56">
              European Urban Research Association
            </span>
          </Fragment>
        }
        link1111={
          <Fragment>
            <span className="venue-text57"> Privacy Policy</span>
          </Fragment>
        }
        link1121={
          <Fragment>
            <span className="venue-text58">
              European Urban Research Association
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="venue-text59">© 2025 EURA Conference</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="venue-text60">EURA 2026</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="venue-text61">Conference</span>
          </Fragment>
        }
        column3Title={
          <Fragment>
            <span className="venue-text62">Contacts</span>
          </Fragment>
        }
        rootClassName="footer10root-class-name"
      ></Footer10>
    </div>
  )
}

export default Venue
