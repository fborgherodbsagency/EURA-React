import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import AccordionTrack from '../components/accordion-track'
import CardSpeaker from '../components/card-speaker'
import CommitteeCard from '../components/committee-card'
import CommitteeCardName from '../components/committee-card-name'
import Footer10 from '../components/footer10'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container100">
      <Helmet>
        <title>Home1 - EURA</title>
        <meta property="og:title" content="Home1 - EURA" />
      </Helmet>
      <header data-thq="thq-navbar" className="home1-navbar-interactive">
        <span className="home1-text100 fontmenu">
          <span>
            EURA
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home1-text102">Conference 2026</span>
        </span>
        <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
          <nav className="home1-links1">
            <span>Conference</span>
            <span className="home1-text104">Call</span>
            <span className="home1-text105">Submissions</span>
            <span className="home1-text106">Registration</span>
            <span className="home1-text107">Programme</span>
            <span className="home1-text108">Venue &amp; Hotel</span>
            <span className="home1-text109">Awards</span>
          </nav>
          <div className="home1-buttons1">
            <button className="home1-login1 button">Login</button>
            <button className="button">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home1-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home1-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
          <div className="home1-nav">
            <div className="home1-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home1-logo"
              />
              <div data-thq="thq-close-menu" className="home1-close-menu">
                <svg viewBox="0 0 1024 1024" className="home1-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home1-links2">
              <span className="home1-text110">About</span>
              <span className="home1-text111">Features</span>
              <span className="home1-text112">Pricing</span>
              <span className="home1-text113">Team</span>
              <span className="home1-text114">Blog</span>
            </nav>
            <div className="home1-buttons2">
              <button className="home1-login2 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home1-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home1-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home1-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home1-container101">
        <div className="home1-container102">
          <div className="home1-container103">
            <div className="home1-container104">
              <img alt="image" src="/iuav-200h.png" className="home1-image1" />
            </div>
            <img
              alt="image"
              src="/europeanurbanresearch-200h.png"
              className="home1-image2"
            />
          </div>
          <span className="home1-text115 heading1">
            <span>
              CITIES UNDER STRAIN
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Rethinking the ungovernable</span>
          </span>
          <span className="home1-text119 heading4">
            <span>June 17 — 20, 2026</span>
            <br></br>
            <span>Venice, Italy</span>
          </span>
          <span className="home1-text123 heading4">
            Iuav University of Venice
          </span>
        </div>
        <div className="home1-container105">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="home1-image3"
          />
        </div>
      </div>
      <div className="home1-container106 thq-section-padding">
        <div className="home1-container107 thq-section-max-width">
          <div className="home1-container108">
            <span className="home1-text124 heading3">The Conference</span>
          </div>
          <div className="home1-container109">
            <div className="home1-container110">
              <span className="home1-text125 paragraph-big">
                The conference aims to encourage critical reflection on the
                links between environmental, social and spatial justice; between
                institutional action and the agency of citizens and their
                organisations; between different kinds of knowledge from the
                perspective of post-human agency in cities and territories.
              </span>
            </div>
            <div className="home1-container111">
              <span className="home1-text126 paragraph-big">
                How can cities and territories cope with instability, disorder,
                and radical uncertainty in an era of turbulence, when
                traditional dualisms (living/inanimate, human/non-human,
                nature/technology, reality/cognition, centre/periphery,
                urban/rural) are increasingly dismissed? How can they “ride” the
                uncontrollable and take advantage of being carried by it?  Major
                environmental, social, and economic transitions have been
                identified (due to climate change, global migration and refugee
                flows, financial crises, and the emergence of a deeply unstable
                geopolitical situation. However, their interconnections and
                modes of coping are still poorly understood, and there is still
                insufficient research and experimentation on how to address them
                in public policy, also because of their irreducible trans-scalar
                dimension. New keys are needed to understand how cities and
                territories work.  In this situation, where governance is
                fragmented and often conflict-ridden, what actions end up
                blocked? What actions get through? What are the pathways through
                which innovation travels? What are the new levers for
                constructing actions capable of confronting the current urban
                and territorial situation?  The conference aims to encourage
                critical reflection on the links between environmental, social,
                and spatial justice; between institutional action and the agency
                of citizens and their organisations; and between different kinds
                of knowledge from the perspective of more than human agency in
                cities and territories.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container112 thq-section-padding">
        <div className="home1-container113 thq-section-max-width">
          <div className="home1-container114">
            <span className="home1-text127 heading3">
              Call for panels and abstract
            </span>
          </div>
          <div className="home1-container115">
            <div className="home1-container116">
              <span className="home1-text128 paragraph-big">
                EURA 2025 welcomes scholars in the field of urban studies to
                contribute with panels and abstracts to the following 9 tracks.
                Topics addressed in the tracks are not exclusive; they intend to
                inspire discussions and exchanges of innovative ideas and
                knowledge. Please feel free to suggest issues and perspectives
                that can dialogue with this call for abstracts. The call is also
                open to the proposal for special sessions (panels) within each
                track.
              </span>
              <button type="button" className="home1-button1 button black">
                Book of abstracts (PDF, 2Mb)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container117 thq-section-padding">
        <div className="home1-container118 thq-section-max-width">
          <div className="home1-container119">
            <div className="home1-container120">
              <img
                alt="image"
                src="/majesticons_book-line.svg"
                className="home1-image4"
              />
              <span className="home1-text129 heading3">Tracks</span>
            </div>
          </div>
          <div className="home1-container121">
            <div className="home1-container122">
              <AccordionTrack
                name={
                  <Fragment>
                    <span className="home1-text130">1 - Inequalities</span>
                  </Fragment>
                }
                chairs={
                  <Fragment>
                    <span className="home1-text131">
                      Default Content for the Accordion. This can be anything
                      that you want
                    </span>
                  </Fragment>
                }
                briefDescription={
                  <Fragment>
                    <span className="home1-text132">
                      Tackling inequalities between institutional power and
                      civic alternatives
                    </span>
                  </Fragment>
                }
                descriptionTrack={
                  <Fragment>
                    <span className="home1-text133">
                      Default Content for the Accordion. This can be anything
                      that you want
                    </span>
                  </Fragment>
                }
              ></AccordionTrack>
              <div data-thq="accordion" className="home1-accordion10">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger10"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary10"
                  >
                    <div className="home1-container123">
                      <span className="home1-text134 heading4">
                        2 - Beyond the market fix: housing governance at the
                        intersections of crisis
                      </span>
                      <span className="home1-text135 paragraph-big">
                        Beyond the market fix: housing governance at the
                        intersections of crisis
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container10"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container124">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion11">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger11"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary11"
                  >
                    <div className="home1-container125">
                      <span className="home1-text137 heading4">
                        3 - Migrants’ Struggles for Socio-Spatial Inclusion:
                        Local Policies and  Practices in Times of Pressure
                      </span>
                      <span className="home1-text138 paragraph-big">
                        Migrants’ Struggles for Socio-Spatial Inclusion: Local
                        Policies and Practices in Times of Pressure
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container11"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container126">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion12">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger12"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary12"
                  >
                    <div className="home1-container127">
                      <span className="home1-text140 heading4">
                        4 - Environmental Transition: adaptation and mitigation
                        strategies between  climate change and socio-ecological
                        justice
                      </span>
                      <span className="home1-text141 paragraph-big">
                        Adaptation and mitigation strategies between climate
                        change and socio-ecological justice
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container12"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container128">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion13">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger13"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary13"
                  >
                    <div className="home1-container129">
                      <span className="home1-text143 heading4">
                        5 - Risk and hazard management
                      </span>
                      <span className="home1-text144 paragraph-big">
                        Shocks, stresses, and the shifting landscape of urban
                        resilience
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container13"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container130">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion14">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger14"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary14"
                  >
                    <div className="home1-container131">
                      <span className="home1-text146 heading4">
                        6 - Governance in times of uncertainty
                      </span>
                      <span className="home1-text147 paragraph-big">
                        Navigating uncertainty, assembling agency, and
                        reimagining institutions in urban and territorial
                        contexts
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container14"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container132">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion15">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger15"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary15"
                  >
                    <div className="home1-container133">
                      <span className="home1-text149 heading4">
                        7 - Knowledge intersections
                      </span>
                      <span className="home1-text150 paragraph-big">
                        Tackling inequalities between institutional power and
                        civic alternatives
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container15"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container134">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion16">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger16"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary16"
                  >
                    <div className="home1-container135">
                      <span className="home1-text152 heading4">
                        8 - Heritage under overtourism
                      </span>
                      <span className="home1-text153 paragraph-big">
                        Reframing the management of change in historic urban
                        landscapes
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container16"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container136">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion17">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger17"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary17"
                  >
                    <div className="home1-container137">
                      <span className="home1-text155 heading4">
                        9 - Mobilities
                      </span>
                      <span className="home1-text156 paragraph-big">
                        Transport and Mobility Spaces. Between reorganization
                        and innovation
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container17"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container138">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container139">
        <div className="home1-container140">
          <div className="home1-container141">
            <span className="home1-text158 heading3">Speakers</span>
          </div>
        </div>
        <div className="home1-container142">
          <CardSpeaker
            name={
              <Fragment>
                <span className="home1-text159 heading4">
                  <span>Patrick Le Galès</span>
                  <br></br>
                </span>
              </Fragment>
            }
            role={
              <Fragment>
                <span className="home1-text162">
                  <span>CNRS Research Professor</span>
                  <br></br>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home1-text165">Read more</span>
              </Fragment>
            }
            rootClassName="card-speakerroot-class-name6"
          ></CardSpeaker>
          <CardSpeaker
            name={
              <Fragment>
                <span className="home1-text166 heading4">
                  <span>Patrick Le Galès</span>
                  <br></br>
                </span>
              </Fragment>
            }
            role={
              <Fragment>
                <span className="home1-text169">
                  <span>CNRS Research Professor</span>
                  <br></br>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home1-text172">Read more</span>
              </Fragment>
            }
            rootClassName="card-speakerroot-class-name7"
          ></CardSpeaker>
          <CardSpeaker
            name={
              <Fragment>
                <span className="home1-text173 heading4">
                  <span>Patrick Le Galès</span>
                  <br></br>
                </span>
              </Fragment>
            }
            role={
              <Fragment>
                <span className="home1-text176">
                  <span>CNRS Research Professor</span>
                  <br></br>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home1-text179">Read more</span>
              </Fragment>
            }
            rootClassName="card-speakerroot-class-name8"
          ></CardSpeaker>
          <CardSpeaker
            name={
              <Fragment>
                <span className="home1-text180 heading4">
                  <span>Patrick Le Galès</span>
                  <br></br>
                </span>
              </Fragment>
            }
            role={
              <Fragment>
                <span className="home1-text183">
                  <span>CNRS Research Professor</span>
                  <br></br>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home1-text186">Read more</span>
              </Fragment>
            }
            rootClassName="card-speakerroot-class-name9"
          ></CardSpeaker>
          <CardSpeaker
            name={
              <Fragment>
                <span className="home1-text187 heading4">
                  <span>Patrick Le Galès</span>
                  <br></br>
                </span>
              </Fragment>
            }
            role={
              <Fragment>
                <span className="home1-text190">
                  <span>CNRS Research Professor</span>
                  <br></br>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home1-text193">Read more</span>
              </Fragment>
            }
            rootClassName="card-speakerroot-class-name10"
          ></CardSpeaker>
          <CardSpeaker
            name={
              <Fragment>
                <span className="home1-text194 heading4">
                  <span>Patrick Le Galès</span>
                  <br></br>
                </span>
              </Fragment>
            }
            role={
              <Fragment>
                <span className="home1-text197">
                  <span>CNRS Research Professor</span>
                  <br></br>
                </span>
              </Fragment>
            }
            button={
              <Fragment>
                <span className="home1-text200">Read more</span>
              </Fragment>
            }
            rootClassName="card-speakerroot-class-name11"
          ></CardSpeaker>
        </div>
      </div>
      <div className="home1-container143">
        <div className="home1-container144">
          <div className="home1-container145 thq-section-max-width">
            <div className="home1-container146">
              <span className="home1-text201 heading3">Plenary Sessions</span>
            </div>
            <div className="home1-container147">
              <div className="home1-container148">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home1-image5"
                />
                <div className="home1-container149">
                  <span className="home1-text202 heading3">
                    <span>Plennary</span>
                    <br></br>
                    <span>01</span>
                  </span>
                  <div className="home1-container150"></div>
                  <button type="button" className="home1-button2 button">
                    Vai al documento
                  </button>
                </div>
              </div>
              <div className="home1-container151">
                <span className="home1-text206 paragraph-big">
                  Expected Abstract contributions should be limited to a maximum
                  of 250-350 words and should include 3 keywords and 5
                  references. The abstract must contain original research work
                  conducted by the author(s); it should clearly outline the main
                  argument, scope(s) of the contribution, methodological/
                  conceptual approaches, and its relevance to the track themes
                  and the core topics of the conference.
                </span>
              </div>
            </div>
            <div className="home1-container152">
              <div className="home1-container153">
                <div className="home1-container154">
                  <span className="home1-text207 heading3">
                    <span>Plennary</span>
                    <br></br>
                    <span>02</span>
                  </span>
                  <div className="home1-container155"></div>
                  <button type="button" className="home1-button3 button">
                    Vai al documento
                  </button>
                </div>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home1-image6"
                />
              </div>
              <div className="home1-container156">
                <span className="home1-text211 paragraph-big">
                  An opening session with representatives of institutions, civil
                  society organisations and practitioners is planned on the
                  second day of the conference. The session will focus on issues
                  related to overtourism. Francesco Bandarin From 2000 to 2010
                  he was Director of the UNESCO World Heritage Centre and from
                  2010 to 2018 he served as Assistant Director-General of UNESCO
                  for Culture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container157">
        <div className="home1-container158">
          <div className="home1-container159">
            <div className="home1-container160">
              <img
                alt="image"
                src="/mobileworkshopicon.svg"
                className="home1-image7"
              />
            </div>
          </div>
          <div className="home1-container161">
            <div className="home1-container162">
              <span className="home1-text212 heading3">Mobiles workshop</span>
              <span className="home1-text213 paragraph-big">
                <span>
                  There is a wide range of mobile workshop available to urban
                  scholars in Venice.
                </span>
                <br></br>
                <span>
                  The municipality of Venice&apos;s urban system is defined not
                  only by the old town but also by an articulated system of
                  islands and by the mainland. Among many examples of
                  heritage-rich urban centers worldwide, Venice is indeed a very
                  meaningful case due to the dramatic growth in the number of
                  tourists that the city has experienced over the last decades. 
                </span>
                <br></br>
                <span>
                  The trips have been organised in collaboration with the
                  representatives of stakeholders/sponsors.
                </span>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home1-image8"
              />
            </div>
            <div className="home1-container163">
              <div data-thq="accordion" className="home1-accordion18">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger18"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary18"
                  >
                    <div className="home1-container164">
                      <span className="home1-text220 heading4">
                        1 - Forte Marghera and the line of Austrian fortress
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container18"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container165">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion19">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger19"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary19"
                  >
                    <div className="home1-container166">
                      <span className="home1-text222 heading4">
                        2 - Circus social housing neighborhood in Chirignago
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container19"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container167">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion20">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger20"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary20"
                  >
                    <div className="home1-container168">
                      <span className="home1-text224 heading4">
                        3 - The countryside in the lagoon: exploring Sant’Erasmo
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container20"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container169">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion21">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger21"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary21"
                  >
                    <div className="home1-container170">
                      <span className="home1-text226 heading4">
                        4 - A walk through public housing neighborhoods in
                        Venice old town 
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container21"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container171">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion22">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger22"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary22"
                  >
                    <div className="home1-container172">
                      <span className="home1-text228 heading4">
                        5 - Venice historic center through its squeri
                        (traditional artisan shipyards)
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container22"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container173">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion23">
                <details
                  data-thq="accordion-trigger"
                  className="home1-trigger23"
                >
                  <summary
                    data-thq="accordion-summary"
                    className="home1-summary23"
                  >
                    <div className="home1-container174">
                      <span className="home1-text230 heading4">
                        6 - In-between port-city interface
                      </span>
                    </div>
                    <div
                      data-thq="accordion-icon"
                      className="home1-icon-container23"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </summary>
                </details>
                <div data-thq="accordion-content">
                  <div className="home1-container175">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
              <div data-thq="accordion" className="home1-accordion24"></div>
              <div data-thq="accordion" className="home1-accordion25">
                <div data-thq="accordion-content">
                  <div className="home1-container176">
                    <p>
                      Default Content for the Accordion. This can be anything
                      that you want
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container177">
        <div className="home1-container178 thq-section-padding">
          <div className="home1-container179 thq-section-max-width">
            <div className="home1-container180">
              <span className="home1-text233 heading3">Submissions</span>
            </div>
            <div className="home1-container181">
              <div className="home1-container182">
                <span className="home1-text234 heading4">Guidelines</span>
                <span className="home1-text235 paragraph-big">
                  <span>
                    Expected Abstract contributions should be limited to a
                    maximum of 250-350 words and should include 3 keywords and 5
                    references. The abstract must contain original research work
                    conducted by the author(s); it should clearly outline the
                    main argument, scope(s) of the contribution, methodological/
                    conceptual approaches, and its relevance to the track themes
                    and the core topics of the conference.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Special sessions proposals should be limited to a maximum of
                    1000 words and should include 3 keywords and 5 references.
                    All abstracts should outline the significance of the
                    contribution and introduce the main arguments from the
                    methodological/conceptual points of view; highlight its
                    relevance to the track themes and the core topics of the
                    conference. Each briefly should introduce the
                    authors/presenters, their specific contribution to the
                    panel, and present a minimum 3 and maximum 4
                    authors/presenters.
                  </span>
                  <br></br>
                  <span>
                    The official language of the EURA 2022 is English. Abstracts
                    will be published in the Book of abstracts.
                  </span>
                </span>
                <div className="home1-container183">
                  <button type="button" className="home1-button4 button black">
                    Paper Abstract submission (PDF, 2Mb)
                  </button>
                  <button type="button" className="home1-button5 button black">
                    Special Session/Panel Abstract submission
                  </button>
                  <button type="button" className="home1-button6 button">
                    Submission guidelines (PDF, 2mb)
                  </button>
                </div>
              </div>
              <div className="home1-container184">
                <span className="home1-text242 heading4">Important dates</span>
                <div className="home1-container185">
                  <span className="home1-text243 h5">
                    <span>Dec 23, 2021</span>
                    <br></br>
                  </span>
                  <span className="home1-text246 paragraph-big">
                    <span>Call for abstracts published</span>
                    <br></br>
                  </span>
                </div>
                <div className="home1-container186">
                  <span className="home1-text249 h5">
                    <span>Dec 23, 2021</span>
                    <br></br>
                  </span>
                  <span className="home1-text252 paragraph-big">
                    <span>Call for abstracts published</span>
                    <br></br>
                  </span>
                </div>
                <div className="home1-container187">
                  <span className="home1-text255 h5">
                    <span>Dec 23, 2021</span>
                    <br></br>
                  </span>
                  <span className="home1-text258 paragraph-big">
                    <span>Call for abstracts published</span>
                    <br></br>
                  </span>
                </div>
                <div className="home1-container188">
                  <span className="home1-text261 h5">
                    <span>Dec 23, 2021</span>
                    <br></br>
                  </span>
                  <span className="home1-text264 paragraph-big">
                    <span>Call for abstracts published</span>
                    <br></br>
                  </span>
                </div>
                <div className="home1-container189">
                  <span className="home1-text267 h5">
                    <span>Dec 23, 2021</span>
                    <br></br>
                  </span>
                  <span className="home1-text270 paragraph-big">
                    <span>Call for abstracts published</span>
                    <br></br>
                  </span>
                </div>
                <div className="home1-container190">
                  <span className="home1-text273 h5">
                    <span>Dec 23, 2021</span>
                    <br></br>
                  </span>
                  <span className="home1-text276 paragraph-big">
                    <span>Call for abstracts published</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-container191 thq-section-padding">
          <div className="home1-container192 thq-section-max-width">
            <div className="home1-container193">
              <span className="home1-text279 heading3">Registration</span>
              <span className="home1-text280 heading3">
                <span className="home1-text281 heading4">
                  Partecipation fees
                </span>
                Registration
              </span>
            </div>
            <div className="home1-container194">
              <div className="home1-container195">
                <span className="home1-text282 h5">Type</span>
                <div className="home1-container196">
                  <span className="home1-text283 paragraph-big">
                    EURA/ UAA Members
                  </span>
                  <span className="home1-text284 paragraph-big">
                    <span>Non-EURA/ UAA Members</span>
                    <br></br>
                  </span>
                  <span className="home1-text287 paragraph-big">
                    <span>
                      EURA/ UAA Members Central and Eastern Europe, Latin
                      America, Africa and Asia (except China and Japan)
                    </span>
                    <br></br>
                  </span>
                  <span className="home1-text290 paragraph-big">
                    Non-EURA/UAA Members Central and Eastern Europe, Latin
                    America, Africa and Asia (except China and Japan)
                  </span>
                  <span className="home1-text291 paragraph-big">
                    Research/PhD students
                  </span>
                </div>
                <div className="home1-container197"></div>
              </div>
              <div className="home1-container198">
                <span className="home1-text292 heading4">
                  <span>Early bird</span>
                  <br></br>
                </span>
                <div className="home1-container199">
                  <span className="home1-text295 paragraph-big">
                    <span>340,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text298 paragraph-big">
                    <span className="home1-text299">385,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text301 paragraph-big">
                    <span className="home1-text302">230,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text304 paragraph-big">
                    <span className="home1-text305">265,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text307 paragraph-big">
                    <span>215,00 €</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home1-container200">
                <span className="home1-text310 heading4">
                  Late registration
                </span>
                <div className="home1-container201">
                  <span className="home1-text311 paragraph-big">
                    <span className="home1-text312">390,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text314 paragraph-big">
                    <span className="home1-text315">435,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text317 paragraph-big">
                    <span className="home1-text318">280,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text320 paragraph-big">
                    <span className="home1-text321">315,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text323 paragraph-big">265,00 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container202">
        <div className="home1-container203 thq-section-padding">
          <div className="home1-container204 thq-section-max-width">
            <div className="home1-container205">
              <div className="home1-container206">
                <span className="home1-text324 paragraph-big">
                  <span>Registration deadlines</span>
                  <br></br>
                  <span>Early bird registration opens: April 1, 2022</span>
                  <br></br>
                  <span>Early bird registration closes: May 1, 2022</span>
                  <br></br>
                  <span>Final deadline for registration: May 15, 2022</span>
                  <br></br>
                  <br></br>
                  <span>Official Programme</span>
                  <br></br>
                  <span>
                    Accepted participants must register by May 15, 2022 (11:59
                    pm CST) to be included in the official programme.
                  </span>
                  <br></br>
                  <br></br>
                  <span>EURA and UAA Membership Special Fee</span>
                  <br></br>
                  <span>
                    EURA and UAA members have a dedicated registration fee,
                    which will be confirmed after checking the membership status
                    by Eura Secretariat. To become a EURA member or to
                    confirm/check your membership status, please click here.
                  </span>
                </span>
              </div>
              <div className="home1-container207">
                <span className="home1-text342 paragraph-big">
                  <span className="home1-text343">Fee coverage</span>
                  <br></br>
                  <span>
                    The fee covers: Coffee breaks and lunches during the
                    conference, Opening Event and Social Dinner, Book of
                    Abstracts and Conference Journal, Mobile workshops
                    participation.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="home1-text348">Refund policy</span>
                  <br></br>
                  <span>
                    COVID-related refund. Up to May 15, 2022, we will allow
                    refunds (minus an administrative fee of 80 euros) if travel
                    to Italy, or, to or from your home country becomes
                    officially restricted due to COVID-19 pandemic alerts. In
                    this case, we will run a blended event and authors will have
                    the opportunity to follow the online events of the
                    conference and present their papers in special online
                    sessions.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="home1-text353">Registration procedure</span>
                  <br className="home1-text354"></br>
                  <span>
                    Only credit card payments will be accepted
                    online. Registration will open on April 1, 2022.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-container208">
        <div className="home1-container209 thq-section-padding">
          <div className="home1-container210 thq-section-max-width">
            <div className="home1-container211">
              <span className="home1-text356 heading3">Programme</span>
              <span className="home1-text357 heading3">
                <span className="home1-text358 heading4">
                  Partecipation fees
                </span>
                Registration
              </span>
            </div>
            <div className="home1-container212">
              <div className="home1-container213">
                <span className="home1-text359 h5">Type</span>
                <div className="home1-container214">
                  <span className="home1-text360 paragraph-big">
                    EURA/ UAA Members
                  </span>
                  <span className="home1-text361 paragraph-big">
                    <span>Non-EURA/ UAA Members</span>
                    <br></br>
                  </span>
                  <span className="home1-text364 paragraph-big">
                    <span>
                      EURA/ UAA Members Central and Eastern Europe, Latin
                      America, Africa and Asia (except China and Japan)
                    </span>
                    <br></br>
                  </span>
                  <span className="home1-text367 paragraph-big">
                    Non-EURA/UAA Members Central and Eastern Europe, Latin
                    America, Africa and Asia (except China and Japan)
                  </span>
                  <span className="home1-text368 paragraph-big">
                    Research/PhD students
                  </span>
                </div>
                <div className="home1-container215"></div>
              </div>
              <div className="home1-container216">
                <span className="home1-text369 heading4">
                  <span>Early bird</span>
                  <br></br>
                </span>
                <div className="home1-container217">
                  <span className="home1-text372 paragraph-big">
                    <span>340,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text375 paragraph-big">
                    <span className="home1-text376">385,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text378 paragraph-big">
                    <span className="home1-text379">230,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text381 paragraph-big">
                    <span className="home1-text382">265,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text384 paragraph-big">
                    <span>215,00 €</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home1-container218">
                <span className="home1-text387 heading4">
                  Late registration
                </span>
                <div className="home1-container219">
                  <span className="home1-text388 paragraph-big">
                    <span className="home1-text389">390,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text391 paragraph-big">
                    <span className="home1-text392">435,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text394 paragraph-big">
                    <span className="home1-text395">280,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text397 paragraph-big">
                    <span className="home1-text398">315,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text400 paragraph-big">265,00 €</span>
                </div>
              </div>
            </div>
            <div className="home1-container220">
              <div className="home1-container221">
                <span className="home1-text401 h5">Type</span>
                <div className="home1-container222">
                  <span className="home1-text402 paragraph-big">
                    EURA/ UAA Members
                  </span>
                  <span className="home1-text403 paragraph-big">
                    <span>Non-EURA/ UAA Members</span>
                    <br></br>
                  </span>
                  <span className="home1-text406 paragraph-big">
                    <span>
                      EURA/ UAA Members Central and Eastern Europe, Latin
                      America, Africa and Asia (except China and Japan)
                    </span>
                    <br></br>
                  </span>
                  <span className="home1-text409 paragraph-big">
                    Non-EURA/UAA Members Central and Eastern Europe, Latin
                    America, Africa and Asia (except China and Japan)
                  </span>
                  <span className="home1-text410 paragraph-big">
                    Research/PhD students
                  </span>
                </div>
                <div className="home1-container223"></div>
              </div>
              <div className="home1-container224">
                <span className="home1-text411 heading4">
                  <span>Early bird</span>
                  <br></br>
                </span>
                <div className="home1-container225">
                  <span className="home1-text414 paragraph-big">
                    <span>340,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text417 paragraph-big">
                    <span className="home1-text418">385,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text420 paragraph-big">
                    <span className="home1-text421">230,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text423 paragraph-big">
                    <span className="home1-text424">265,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text426 paragraph-big">
                    <span>215,00 €</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home1-container226">
                <span className="home1-text429 heading4">
                  Late registration
                </span>
                <div className="home1-container227">
                  <span className="home1-text430 paragraph-big">
                    <span className="home1-text431">390,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text433 paragraph-big">
                    <span className="home1-text434">435,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text436 paragraph-big">
                    <span className="home1-text437">280,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text439 paragraph-big">
                    <span className="home1-text440">315,00 €</span>
                    <br></br>
                  </span>
                  <span className="home1-text442 paragraph-big">265,00 €</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home1-container228">
            <table className="home1-table">
              <thead>
                <tr>
                  <th className="home1-th1">
                    <span className="home1-text443">Header 1</span>
                  </th>
                  <th>
                    <span className="home1-text444">June 15</span>
                  </th>
                  <th>
                    <span className="home1-text445">June 16</span>
                  </th>
                  <th>
                    <span className="home1-text446">June 17</span>
                  </th>
                  <th>
                    <span className="home1-text447">June 18</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Cell 1-1</span>
                  </td>
                  <td>
                    <span>Cell 1-2</span>
                  </td>
                  <td>
                    <span>Cell 1-3</span>
                  </td>
                  <td>
                    <span>Cell 1-4</span>
                  </td>
                  <td>
                    <span>Cell 1-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 2-1</span>
                  </td>
                  <td>
                    <span>Cell 2-2</span>
                  </td>
                  <td>
                    <span>Cell 2-3</span>
                  </td>
                  <td>
                    <span>Cell 2-4</span>
                  </td>
                  <td>
                    <span>Cell 2-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 3-1</span>
                  </td>
                  <td>
                    <span>Cell 3-2</span>
                  </td>
                  <td>
                    <span>Cell 3-3</span>
                  </td>
                  <td>
                    <span>Cell 3-4</span>
                  </td>
                  <td>
                    <span>Cell 3-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 4-1</span>
                  </td>
                  <td>
                    <span>Cell 4-2</span>
                  </td>
                  <td>
                    <span>Cell 4-3</span>
                  </td>
                  <td>
                    <span>Cell 4-4</span>
                  </td>
                  <td>
                    <span>Cell 4-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 5-1</span>
                  </td>
                  <td>
                    <span>Cell 5-2</span>
                  </td>
                  <td>
                    <span>Cell 5-3</span>
                  </td>
                  <td>
                    <span>Cell 5-4</span>
                  </td>
                  <td>
                    <span>Cell 5-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 6-1</span>
                  </td>
                  <td>
                    <span>Cell 6-2</span>
                  </td>
                  <td>
                    <span>Cell 6-3</span>
                  </td>
                  <td>
                    <span>Cell 6-4</span>
                  </td>
                  <td>
                    <span>Cell 6-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 7-1</span>
                  </td>
                  <td>
                    <span>Cell 7-2</span>
                  </td>
                  <td>
                    <span>Cell 7-3</span>
                  </td>
                  <td>
                    <span>Cell 7-4</span>
                  </td>
                  <td>
                    <span>Cell 7-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 8-1</span>
                  </td>
                  <td>
                    <span>Cell 8-2</span>
                  </td>
                  <td>
                    <span>Cell 8-3</span>
                  </td>
                  <td>
                    <span>Cell 8-4</span>
                  </td>
                  <td>
                    <span>Cell 8-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 9-1</span>
                  </td>
                  <td>
                    <span>Cell 9-2</span>
                  </td>
                  <td>
                    <span>Cell 9-3</span>
                  </td>
                  <td>
                    <span>Cell 9-4</span>
                  </td>
                  <td>
                    <span>Cell 9-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 10-1</span>
                  </td>
                  <td>
                    <span>Cell 10-2</span>
                  </td>
                  <td>
                    <span>Cell 10-3</span>
                  </td>
                  <td>
                    <span>Cell 10-4</span>
                  </td>
                  <td>
                    <span>Cell 10-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 11-1</span>
                  </td>
                  <td>
                    <span>Cell 11-2</span>
                  </td>
                  <td>
                    <span>Cell 11-3</span>
                  </td>
                  <td>
                    <span>Cell 11-4</span>
                  </td>
                  <td>
                    <span>Cell 11-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 12-1</span>
                  </td>
                  <td>
                    <span>Cell 12-2</span>
                  </td>
                  <td>
                    <span>Cell 12-3</span>
                  </td>
                  <td>
                    <span>Cell 12-4</span>
                  </td>
                  <td>
                    <span>Cell 12-5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Cell 13-1</span>
                  </td>
                  <td>
                    <span>Cell 13-2</span>
                  </td>
                  <td>
                    <span>Cell 13-3</span>
                  </td>
                  <td>
                    <span>Cell 13-4</span>
                  </td>
                  <td>
                    <span>Cell 13-5</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="home1-container229 thq-section-padding">
          <div className="home1-container230">
            <div className="home1-container231">
              <div className="home1-container232">
                <span className="home1-text513 heading4">Locations</span>
                <span className="home1-text514 heading3">Venice</span>
              </div>
              <hr className="home1-separator1"></hr>
            </div>
            <div className="home1-container233">
              <div className="home1-container234">
                <div className="home1-container235">
                  <span className="home1-text515 paragraph-big">
                    <span>
                      The conference will take place in two different locations.
                      On Wednesday 15th, Thursday 16th and Friday 17th, all the
                      conference activities will be hosted at Politecnico di
                      Milano, AUIC School, Via Ampere 1 (Metro Line 2, Piola
                      Station); on Saturday, the conference will be hosted at
                      Fondazione GianGiacomo Feltrinelli, Viale Pasubio, 5,
                      (Metro Line 2, Garibaldi Station).
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Fondazione Giangiacomo Feltrinelli is a partner of the
                      Conference and a Leading Cultural Foundation in Italy; the
                      collaboration with EURA is a special opportunity to share
                      the results of the Conference with a wider public,
                      experimenting a new form of outreach also for EURA
                      Conferences.
                    </span>
                  </span>
                </div>
                <div className="home1-container236"></div>
              </div>
            </div>
          </div>
          <div className="home1-container237">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home1-image9"
            />
            <span className="home1-text520">
              foto © Università Iuav di Venezia
            </span>
          </div>
        </div>
      </div>
      <div className="home1-container238">
        <div className="home1-container239 thq-section-padding">
          <div className="home1-container240 thq-section-max-width">
            <div className="home1-container241">
              <span className="home1-text521 heading3">
                <span>Local Organising Committee</span>
                <br></br>
              </span>
            </div>
            <span className="home1-text524 heading3">
              <span className="home1-text525 heading4">Partecipation fees</span>
              Registration
            </span>
            <div className="home1-container242">
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home1-text526 heading4">
                      <span>Francesco Musco</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home1-text529 heading4">
                      Organising commitee coordinator, Professor of Urban and
                      Regional Planning
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home1-text530 heading4">
                      carla.tedesco@iuav.it
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home1-text531 heading4">
                      <span>Francesco Musco</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home1-text534 heading4">
                      <span>Professor of Urban and Regional Planning,</span>
                      <br></br>
                      <span>Director of Research</span>
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home1-text538 heading4">
                      <span>francesco.musco@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCardName
                text={
                  <Fragment>
                    <span className="home1-text541 heading3">
                      <span>Anna Marson</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCardName>
            </div>
          </div>
          <hr className="home1-separator2"></hr>
          <div className="home1-container243">
            <CommitteeCard
              nome={
                <Fragment>
                  <span className="home1-text544 heading4">
                    <span>Francesco Musco</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home1-text547 heading4">
                    Assistant professor
                  </span>
                </Fragment>
              }
              email={
                <Fragment>
                  <span className="home1-text548 heading4">
                    <span>matteo.basso@iuav.it</span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></CommitteeCard>
            <CommitteeCard
              nome={
                <Fragment>
                  <span className="home1-text551 heading4">
                    <span>Francesco Musco</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home1-text554 heading4">
                    Assistant professor
                  </span>
                </Fragment>
              }
              email={
                <Fragment>
                  <span className="home1-text555 heading4">
                    <span>filippo.magni@iuav.it</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="committee-cardroot-class-name1"
            ></CommitteeCard>
            <CommitteeCard
              nome={
                <Fragment>
                  <span className="home1-text558 heading4">
                    <span>Francesco Musco</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home1-text561 heading4">PhD student</span>
                </Fragment>
              }
              email={
                <Fragment>
                  <span className="home1-text562 heading4">
                    <span>mferrigno@iuav.it</span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></CommitteeCard>
            <CommitteeCard
              nome={
                <Fragment>
                  <span className="home1-text565 heading4">
                    <span>Francesco Musco</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home1-text568 heading4">
                    Research Fellow
                  </span>
                </Fragment>
              }
              email={
                <Fragment>
                  <span className="home1-text569 heading4">
                    <span>kpica@iuav.it</span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></CommitteeCard>
            <CommitteeCard
              nome={
                <Fragment>
                  <span className="home1-text572 heading4">
                    <span>Francesco Musco</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home1-text575 heading4">PhD student</span>
                </Fragment>
              }
              email={
                <Fragment>
                  <span className="home1-text576 heading4">fulivi@iuav.it</span>
                </Fragment>
              }
            ></CommitteeCard>
            <CommitteeCard
              nome={
                <Fragment>
                  <span className="home1-text577 heading4">
                    <span>Francesco Musco</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home1-text580 heading4">PhD student</span>
                </Fragment>
              }
              email={
                <Fragment>
                  <span className="home1-text581 heading4">
                    <span>ecannovalepalermo@iuav.it</span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></CommitteeCard>
          </div>
        </div>
        <div className="home1-container244 thq-section-padding">
          <div className="home1-container245 thq-section-max-width">
            <div className="home1-container246">
              <span className="home1-text584 heading3">
                Awards &amp; publication policy
              </span>
            </div>
          </div>
          <hr className="home1-separator3"></hr>
          <div className="home1-container247">
            <div className="home1-container248">
              <span className="home1-text585 heading3">
                Young Scholars Award
              </span>
              <span className="home1-text586 heading4">
                <span>
                  The track chairs will suggest up to 3 papers per track to the
                  scientific committee that will make the final decision based
                  on the chairs&apos; recommendation, supported by members of
                  the EURA Board. The Young scholars award consist of a travel
                  grant for the next EURA or the next Urban Affairs Association
                  conference in the US.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home1-container249">
              <span className="home1-text589 heading3">Best Paper Award</span>
              <span className="home1-text590 heading4">
                <span>
                  The track chairs will select the best paper in their tracks
                  and a Best paper award committee will review the selected
                  papers; the author of these papers will have the opportunity
                  to publish her/his paper in a dedicated special issue of the
                  Journal Urban Research and practices. The paper will go
                  through the normal refereeing process.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer10
        link1={
          <Fragment>
            <span className="home1-text594">Venezia, Italy</span>
          </Fragment>
        }
        link111={
          <Fragment>
            <span className="home1-text595">Cookie Policy</span>
          </Fragment>
        }
        link112={
          <Fragment>
            <span className="home1-text596">
              European Urban Research Association
            </span>
          </Fragment>
        }
        link1111={
          <Fragment>
            <span className="home1-text597"> Privacy Policy</span>
          </Fragment>
        }
        link1121={
          <Fragment>
            <span className="home1-text598">
              European Urban Research Association
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home1-text599">© 2025 EURA Conference</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="home1-text600">EURA 2026</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="home1-text601">Conference</span>
          </Fragment>
        }
        column3Title={
          <Fragment>
            <span className="home1-text602">Contacts</span>
          </Fragment>
        }
      ></Footer10>
    </div>
  )
}

export default Home1
