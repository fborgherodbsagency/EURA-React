import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ButtonBlack from '../components/button-black'
import AccordionTrack from '../components/accordion-track'
import CardSpeaker from '../components/card-speaker'
import AccordionWorkshop from '../components/accordion-workshop'
import ButtonStroke from '../components/button-stroke'
import CommitteeCard from '../components/committee-card'
import Footer10 from '../components/footer10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container100">
      <Helmet>
        <title>EURA</title>
        <meta property="og:title" content="EURA" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink1 fontmenu">
          <span>
            EURA
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text101">Conference 2026</span>
        </Link>
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links1">
            <a href="#conference" className="home-link1 paragraph-big">
              Conference
            </a>
            <a href="#call" className="home-link2 paragraph-big">
              Call
            </a>
            <a href="#submissions" className="home-link3 paragraph-big">
              Submission
            </a>
            <a href="#registration" className="home-link4 paragraph-big">
              Registration
            </a>
            <a href="#programme" className="home-link5 paragraph-big">
              Programme
            </a>
            <a href="#venue" className="home-link6 paragraph-big">
              Venue
            </a>
            <a href="#award" className="home-link7 paragraph-big">
              Awards
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links2">
              <span className="home-text102">About</span>
              <span className="home-text103">Features</span>
              <span className="home-text104">Pricing</span>
              <span className="home-text105">Team</span>
              <span className="home-text106">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-header">
        <div className="home-container101 thq-section-max-width">
          <div className="home-container102">
            <div className="home-container103">
              <div className="home-container104">
                <img alt="image" src="/iuav-200h.png" className="home-image1" />
              </div>
              <img
                alt="image"
                src="/europeanurbanresearch-200h.png"
                className="home-image2"
              />
            </div>
            <span className="home-text107 heading1">
              <span>CITIES UNDER STRAIN:</span>
              <br></br>
              <span>Rethinking the ungovernable</span>
            </span>
            <span className="home-text111 heading4">
              Università Iuav di Venezia
            </span>
            <span className="home-text112 heading4">
              <span>June 17th — 20th, 2026</span>
              <br></br>
            </span>
          </div>
          <div className="home-container105">
            <img
              alt="image"
              src="/ubackground-optimized-1761640421027-1500w.png"
              className="home-image3"
            />
          </div>
        </div>
      </div>
      <section
        id="conference"
        className="home-section-intro thq-section-padding"
      >
        <div className="home-container106 thq-section-max-width">
          <div className="home-container107">
            <span className="home-text115 heading2">The Conference</span>
          </div>
          <div className="home-container108">
            <div className="home-container109">
              <span className="home-text116 paragraph-big">
                How can cities and territories cope with instability, disorder,
                and radical uncertainty in an era of turbulence, when
                traditional dualisms (living/inanimate, human/non-human,
                nature/technology, reality/cognition, centre/periphery,
                urban/rural) are increasingly dismissed? How can they “ride” the
                uncontrollable and take advantage of being carried by it?
              </span>
            </div>
            <div className="home-container110">
              <span className="home-text117 paragraph-big">
                <span>
                  Major environmental, social, and economic transitions have
                  been identified (due to climate change, global migration and
                  refugee flows, financial crises, and the emergence of a deeply
                  unstable geopolitical situation). However, their
                  interconnections and modes of coping are still poorly
                  understood, and there is still insufficient research and
                  experimentation on how to address them in public policy, also
                  because of their irreducible trans-scalar dimension. New keys
                  are needed to understand how cities and territories work.
                </span>
                <br className="home-text119"></br>
                <br></br>
                <span>
                  In this situation, where governance is fragmented and often
                  conflict-ridden, what actions end up blocked? What actions get
                  through? What are the pathways through which innovation
                  travels? What are the new levers for constructing actions
                  capable of confronting the current urban and territorial
                  situation?
                </span>
                <br className="home-text122"></br>
                <br></br>
                <span>
                  The conference aims to encourage critical reflection on the
                  links between environmental, social, and spatial justice;
                  between institutional action and the agency of citizens and
                  their organisations; and between different kinds of knowledge
                  from the perspective of more than human agency in cities and
                  territories.
                </span>
                <br className="home-text125"></br>
                <br></br>
                <span>
                  The annual European Urban Research Association (EURA)
                  conference is a key meeting point for researchers and scholars
                  from diverse disciplines engaged in urban studies. The EURA
                  conference brings together researchers who are committed to
                  international exchange and collaboration, and to advancing
                  interdisciplinary and comparative urban research. By doing so,
                  EURA actively contributes to critical debates on urban policy
                  and regional development strategies.
                </span>
                <br></br>
                <br></br>
                <span>
                  The EURA Conference 2026 will provide a unique opportunity for
                  this community of scholars to enjoy the pleasure of exchange
                  and critical discussion.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="call" className="home-section-call thq-section-padding">
        <div className="home-container111 thq-section-max-width">
          <div className="home-container112">
            <div className="home-container113">
              <span className="home-text131 heading2">
                <span>Call for papers and panels</span>
                <br></br>
              </span>
            </div>
            <div className="home-container114">
              <div className="home-container115">
                <span className="home-text134 paragraph-big">
                  The following 9 tracks are open for contributions from
                  scholars in the field of urban studies in the form of panels
                  and abstracts. The topics addressed in the tracks are not
                  exclusive, with the intent being to inspire discussions and
                  exchanges of innovative ideas and knowledge. Special sessions
                  (panels) within each track can also be proposed.
                </span>
                <ButtonBlack
                  button={
                    <Fragment>
                      <span className="home-text135">
                        Book of abstracts (PDF, 2Mb)
                      </span>
                    </Fragment>
                  }
                  rootClassName="button-blackroot-class-name"
                ></ButtonBlack>
              </div>
            </div>
          </div>
          <div className="home-container116">
            <div className="home-container117">
              <img
                alt="image"
                src="/majesticons_book-line.svg"
                className="home-image4"
              />
              <span className="home-text136 heading3">Tracks</span>
            </div>
          </div>
          <div className="home-wrapper-tracks">
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text137">
                    1 - INEQUALITIES
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text138">
                    Chairs: Elena Ostanel, Naomi Pedri Stocco, Università Iuav
                    di Venezia, Sonia de Gregorio Hurtado, Universidad
                    Politecnica de Madrid, Paula Russell, Trinity College Dublin
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text139">
                    Tackling inequalities between institutional power and civic
                    alternatives
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text140">
                    <span>
                      The impact of growing social and economic inequalities in
                      cities and territories is becoming increasingly visible.
                      Ensuring a more equitable future for all is a major
                      challenge and an ethical imperative for urban researchers.
                      It is evident—in both research and everyday
                      experience—that inequalities are shaped by, and have
                      effects across, multiple scales, from the local to the
                      global. Urban research is therefore challenged to engage
                      with inequalities as both local phenomena and as being
                      structurally embedded in broader socio-economic and
                      institutional frameworks. Public policies that aim to
                      address inequalities must adopt a multilevel approach that
                      can integrate local responses with structural
                      transformations.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      However, the legacy of the welfare state – with its
                      sectoral and functional organisation of public
                      administration – still informs policy design today. The
                      welfare model that took root in Western Europe during the
                      second half of the 20th century fragmented state action
                      into functional domains (e.g., health, education, housing,
                      and employment), thereby simplifying the structure of
                      policy communities. . Although this model has helped to
                      shape modern governance, it often proves to be inadequate
                      in the face of complexity and interdependence of
                      contemporary inequalities. Therefore, there is a need to
                      rethink how public policy can address the transcalar and
                      intersectional dimensions of social and territorial
                      disparities.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Meanwhile, the crisis of the welfare state – exacerbated
                      by globalisation, financialisation, neoliberalism, climate
                      change, nationalism, and conflict – has given rise to the
                      proliferation of grassroots initiatives responding to
                      emerging and unmet social needs. These practices often
                      operate more flexibly and rapidly than institutional
                      actors, raising important questions. Scholars have
                      critically examined this “social production of the
                      public”, highlighting potential risks as the reinforcement
                      of inequalities through fragmented or exclusionary
                      practices, the enabling of further state withdrawal, and
                      the entanglement in value extraction processes within
                      urban transformations.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The aim of this track is therefore to explore the policies
                      and grassroots approaches that have been adopted to tackle
                      inequalities. We welcome, in particular, contributions
                      that:
                    </span>
                    <br></br>
                    <span>
                      ● analyse practices and policies addressing urban and
                      territorial inequalities beyond the micro scale;
                    </span>
                    <br></br>
                    <span>
                      ● examine the interplay between civic actors and
                      institutions in shaping responses;
                    </span>
                    <br></br>
                    <span>
                      ● explore how institutions, , may reproduce
                      marginalisation and inequality through power dynamics,
                      organization,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>direction, regulation and discourses;</span>
                    <br></br>
                    <span>
                      ● propose theoretical reflections or alternative paradigms
                      for critically rethinking inequalities.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text161">
                    2 - HOUSING
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text162">
                    Chairs: Laura Colini, Laura Fregolent, Università Iuav di
                    Venezia, Ivan Tosics, Metropolitan Research Institute,
                    Budapest
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text163">
                    Beyond the market fix: housing governance at the
                    intersections of crisis
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text164">
                    <span>
                      Contemporary urban environments are increasingly shaped by
                      a confluence of socio-economic volatility, ecological
                      disruption, and escalating crises of housing
                      affordability. These dynamics are reconfiguring
                      longstanding forms of urban inequality while producing new
                      demographics of poverty and vulnerability, particularly
                      within the non-, low-, and increasingly precarious
                      middle-income populations.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This session interrogates how urban governance and
                      planning arrangements are being restructured in response
                      to these intersecting pressures, and explores what
                      political, regulatory, and spatial strategies might
                      counteract their exclusionary effects. It critically
                      engages with the evolving roles, limitations, and
                      potentials of rent regulation, land-use planning, and
                      social housing policy in addressing the layered crises of
                      affordability and spatial injustice.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      A renewed focus on housing has brought attention to
                      innovative but contested planning tools—such as empty-home
                      taxes, social-purpose zoning, and rights-based land
                      regulations, rent control, which are designed to resist
                      speculative pressures and reorient housing provision
                      towards social need. While such measures and other may
                      stabilize rents and provide protections for existing
                      tenants, their impacts on investment patterns, and
                      neighbourhood change remain highly uneven, and contingent
                      on local governance capacity and enforcement
                      infrastructures, and entrenched by private-sector
                      interests. The growing influence of transnational capital
                      in urban real estate markets further complicates these
                      efforts, by fuelling land value inflation and exacerbating
                      exclusionary dynamics that disproportionately affect those
                      already marginalised by income, race, or migratory status.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This session also foregrounds the urgent need to
                      re-situate housing governance within broader urban
                      transformations driven by the climate crisis,
                      infrastructural adaptation, and the pursuit of spatial
                      justice.It highlights structural obstacles to integrating
                      affordable housing into sustainable urban design,
                      including financing shortfalls and jurisdictional
                      misalignments.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We welcome contributions that are theoretically informed
                      and empirically grounded, and that explore how housing
                      governance is being contested and reconfigured in the
                      current conjuncture.
                    </span>
                    <br></br>
                    <span>
                      In particular, we welcome, contributions that analyse:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>● The regulatory politics of rent control.</span>
                    <br></br>
                    <span>
                      ● The institutional limits, regulation, and democratic
                      potentials of expanding social housing.
                    </span>
                    <br></br>
                    <span>
                      ● The implications of speculative investment and land
                      commodification.
                    </span>
                    <br></br>
                    <span>
                      ● The challenges of integrating affordability into
                      climate-adaptive urban infrastructures.
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text191">
                    3- MIGRATION FLOWS
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text192">
                    Chairs: Martina Bovo, Giovanna Marconi, Università Iuav di
                    Venezia, Cristiana Rossignolo, Politecnico di Torino
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text193">
                    Migrants’ Struggles for Socio-Spatial Inclusion: Local
                    Policies and Practices in Times of Pressure
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text194">
                    <span>
                      Human settlements in both the Global North and South are
                      increasingly facing challenges related to social and
                      spatial inequality. The living conditions of international
                      migrants—alongside those of other vulnerable groups— often
                      represent the most visible expression of these challenges:
                      urban arrival areas and infrastructures, refugee camps,
                      and informal rural settlements shaped by exploitative
                      agricultural labour regimes. Despite their structural
                      presence, these spaces are still too often framed as
                      ‘landscapes of exception.’ Therefore, addressing the
                      challenges they pose is both urgent and an opportunity to
                      advance an equity agenda within urban studies.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This session welcomes contributions that investigate how
                      local policies and practices address international
                      migration and growing urban diversity in contexts marked
                      by uncertainty, instability and fragmentation.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We are interested in different forms of international
                      mobility, encompassing both temporary and more stable
                      migration and settlement processes. We invite papers
                      exploring how local actors— whether migrants, civil
                      society, private, public, institutional and/or grassroots
                      organisations— are responding to these processes and how
                      they contribute to the construction of more just,
                      inclusive and resilient territories, affirming the right
                      to the city and rethinking citizenship from below.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Particular attention is given to practices of cohabitation
                      across differences, access to housing, public space and
                      services, and everyday forms of integration — including
                      those that foreground intersectional challenges. We also
                      encourage contributions that explore whether, and how,
                      institutional action and grassroots-led inclusive
                      initiatives interact, whether through conflict or
                      alignment, and the effect this has on policymaking.
                      Analyses engaging with concepts such as spatial justice,
                      conviviality, social cohesion, belonging, commoning, or
                      socio-spatial resistance are especially welcome. This
                      session aims to foster a transcalar and interdisciplinary
                      dialogue on how local transformations driven by
                      international migration can contribute to reimagine the
                      politics of inclusion in territories under pressure.
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text207">
                    4 - ENVIRONMENTAL TRANSITION
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text208">
                    Chairs: Marta De Marchi, Giulia Lucertini, Filippo Magni,
                    Francesco Musco, Università Iuav di Venezia
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text209">
                    Adaptation and mitigation strategies between climate change
                    and socio-ecological justice
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text210">
                    <span>
                      The intensification of climate-related risks, coupled with
                      ecological degradation and socio-economic fragility, poses
                      increasing challenges to urban and rural areas, forcing
                      local governments and institutions to confront multiple
                      and overlapping transitions. The increasing frequency of
                      heatwaves, droughts, floods, and wildfires calls into
                      question not only the effectiveness of existing mitigation
                      and adaptation strategies as well as the capacity of urban
                      and peri-urban systems to operate under deeper
                      uncertainty. In such contexts, the environmental
                      transition must be considered a complex, multiscalar and
                      contested process, rather than a linear or technocratic
                      one..
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This track explores how urban and rural areas are
                      navigating environmental transition amid turbulence and
                      fragmentation. We invite contributions that investigate
                      how mitigation and adaptation efforts are reshaping
                      planning tools, governance arrangements, and spatial
                      practices at different scales. We are interested in
                      research that unpacks the political, institutional, and
                      socio-ecological dimensions of environmental
                      strategies—from nature-based solutions to the
                      transformation of infrastructure, from circular economy
                      approaches to regenerative urbanism.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Particular attention is given to the impact of
                      environmental crises on food systems, agricultural
                      landscapes, and rural-urban relations. The increasing
                      vulnerability of food production to climate extremes
                      reopens critical questions about food security, land use
                      planning, and ecological justice. While spatial justice,
                      in fact, emerges first and foremost as an urban urgency –
                      as an urgent issue primarily in dense and extensive urban
                      contexts, socio-ecological justice recognises the need for
                      a more widespread approach, even in low-density and
                      peri-urban areas. Meanwhile,, rural and peri-urban areas
                      are emerging as laboratories for integrated strategies
                      that link biodiversity, climate adaptation, and new forms
                      of territorial governance.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We also encourage reflections on the role of
                      landscape—both as an analytical lens and a planning
                      tool—in ensuring a view that captures the complexity of
                      contemporary territories, as well as mediating between
                      ecological urges and spatial imaginaries. What landscapes
                      emerge from environmental transition? What kinds of
                      narratives, values, and conflicts do they activate?
                    </span>
                    <br></br>
                    <br></br>
                    <span>We welcome contributions that:</span>
                    <br></br>
                    <span>
                      ● Explore innovative approaches to climate adaptation and
                      mitigation in urban and rural planning;
                    </span>
                    <br></br>
                    <span>
                      ● Analyse governance mechanisms, planning tools, or
                      institutional arrangements aimed at managing environmental
                      transition across scales;
                    </span>
                    <br></br>
                    <span>
                      ● Address food security, agroecological practices, or
                      rural-urban integration as critical dimensions of
                      environmental resilience;
                    </span>
                    <br></br>
                    <span>
                      ● Investigate landscape-based approaches as mediators
                      between ecological transformation and spatial policy;
                    </span>
                    <br></br>
                    <span>
                      ● Reflect on conflicts, blockages, or enablers in the
                      implementation of sustainability strategies under
                      conditions of uncertainty;
                    </span>
                    <br></br>
                    <span>
                      ● Examine how knowledge, imaginaries, and social practices
                      shape environmental transition in diverse territorial
                      contexts;
                    </span>
                    <br></br>
                    <span>
                      ● Assess adaptation and mitigation policies and practices,
                      in order to highlight trade-offs, gaps, common paths, and
                      recursive patterns.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text239">
                    5- RISK AND HAZARD MANAGEMENT
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text240">
                    Chairs: Mattia Bertin, Vittore Negretto, Linda Zardo,
                    Università Iuav di Venezia, Danielle Sinnett, University of
                    the West of England, Bristol
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text241">
                    Shocks, stresses, and the shifting landscape of urban
                    resilience
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text242">
                    <span>
                      European cities are experiencing severe climatic, social,
                      and economic pressures. The hazards triggered by these
                      pressures, combined with geological evolution and the
                      deterioration of the built environment, are resulting in
                      an unprecedented level of risk. The traditional
                      safe/unsafe binary is no longer sufficient to describe the
                      layered and dynamic complexity of contemporary urban
                      hazards. Safety is not a fixed condition, but rather a
                      shifting gradient shaped by spatial, social, and temporal
                      factors.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Recognising this ambiguity is essential to move beyond
                      reactive responses and towards adaptive, situated forms of
                      risk governance. This enables the refinement of techniques
                      and solutions that address both emergency situations
                      (shocks), such as earthquakes, floods, or terrorist
                      attacks, and slow-developing trends (stresses), such as
                      pollution, drought, or the recurrence of
                      moderate-intensity weather events.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Urban governance models must evolve to consider the
                      spatial convergence of different hazards and
                      vulnerabilities, which often intersect and reinforce each
                      another. This demands a renewed multidisciplinary
                      approach, a clearer definition of the spatial dimensions
                      of risk, and a practice-oriented mindset to support
                      decision-making in real-world contexts.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We welcome contributions that explore projects, plans and
                      policies describing:
                    </span>
                    <br></br>
                    <span>
                      ● The implementation of risk reduction and adaptation
                      strategies, including those based on planned retreat,
                      abandonment, and renaturalisation;
                    </span>
                    <br></br>
                    <span>
                      ● How uncertainty in data and knowledge affects
                      decision-making and operational risk management in
                      practice;
                    </span>
                    <br></br>
                    <span>
                      ● The combination of multi-hazard approaches that
                      integrate risks across different spaces, systems, and
                      timescales;
                    </span>
                    <br></br>
                    <span>
                      ● The tensions and trade-offs between the need to reduce
                      risk and the preservation of urban features, such as
                      cultural heritage and historically layered environments;
                    </span>
                    <br></br>
                    <span>
                      ● The types of mapping that should be prioritised to guide
                      interventions towards social and environmental justice;
                    </span>
                    <br></br>
                    <span>
                      ● The operational and governance role played by bottom-up
                      actors, including financial agencies and private entities,
                      in managing urban risk.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text266">6 - GOVERNANCE</span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text267">
                    Chairs: Matteo Basso, Francesca Gelli,Università Iuav di
                    Venezia, Valeria Fedeli, Politecnico di Milano, Carsten Jahn
                    Hansen, Aalborg University, Dubravka Jurlina Alibegović, The
                    Institute of Economics, Zagreb, Karsten Zimmermann Technical
                    University of Dortmund
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text268">
                    Navigating uncertainty, assembling agency, and reimagining
                    institutions in urban and territorial contexts
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text269">
                    <span>
                      In times marked by profound turbulence, instability and
                      uncertainty, it is crucial to investigate the capacity of
                      cities and territories to govern increasingly complex
                      socio-economic, political, and environmental dynamics
                      effectively.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Climate emergencies, migration flows, financial
                      instability, wars and global health crises have
                      intensified pressures on cities and territories, revealing
                      the fragility of institutional frameworks, and the
                      limitations of top-down and technocratic responses. These
                      overlapping crises and disorders are irreducibly
                      trans-scalar, and are entangled in complex socio-material
                      dynamics, often highlighting asymmetrical power relations.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This track invites critical inquiries into the
                      constitution, disruption and reassembly of governance in
                      urban and territorial contexts under pressure. How do
                      governance arrangements adapt—or fail to adapt—to
                      conditions of emergency, disorder and conflict? What forms
                      of agency, knowledge, and innovation emerge at the
                      intersection of institutional action? And how do hybrid
                      configurations of actors—public, private, civic, human and
                      more-than-human—reshape the capacity to design effective
                      public policies in the face of persistent uncertainty?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>We welcome contributions that:</span>
                    <br></br>
                    <span>
                      ● Explore governance as a heterogeneous and contested
                      field, shaped by conflicts between claims for spatial,
                      social, and environmental justice;
                    </span>
                    <br></br>
                    <span>
                      ● Explore the relationship between the ordinary and
                      extraordinary dimensions of policymaking in response to
                      emergency situations, paying particular attention to
                      exceptional governance arrangements, special regulatory
                      frameworks, targeted funding schemes, and other relevant
                      factors;
                    </span>
                    <br></br>
                    <span>
                      ● Explore potential institutional inertia and innovations
                      generated as a legacy of policy responses to crises and
                      emergencies.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Overall, the track seeks to rethink governance as a
                      situated capacity to navigate instability, foster
                      alliances, and sustain collective enquiry and
                      experimentation in specific contexts.
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text291">
                    7 - KNOWLEDGE INTERSECTIONS
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text292">
                    Chairs: Denis Maragno, Maria Chiara Tosi, Università Iuav di
                    Venezia, Camilla Perrone, Università di Firenze
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text293">
                    Challenges from contemporary urban and territorial context
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text294">
                    <span>
                      Addressing the complex challenges of contemporary urban
                      and territorial contexts requires the development of new
                      languages, approaches and methodologies that transcend
                      traditional academic boundaries. Interdisciplinary and
                      transdisciplinary approaches are increasingly needed to
                      explore the interactions between human and more-than-human
                      agencies, especially in addressing issues such as
                      social-ecological justice.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      In an increasingly conflict-ridden and poly-crisis world —
                      encompassing climate change, pandemics, migration, and
                      economic instability — the interconnectedness of bodies,
                      spaces, and environments is becoming ever more apparent.
                      This calls for the invention of new epistemological
                      approaches, such as environmental humanities,
                      environmental history, and other emerging hybrid fields of
                      knowledge.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      A crucial part of this shift involves the integration of
                      diverse forms of knowledge — such as scientific, local,
                      indigenous, experiential, and technological knowledge —
                      and recognising the university’s role in fostering public
                      engagement and the co-production of knowledge.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This convergence of heterogeneous epistemologies does not
                      occur without friction, and it requires conceptual tools
                      capable of navigating difference without reducing it.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      In this context, the notion of interaction might serve as
                      a conceptual and operational tool for navigating epistemic
                      plurality, one that acknowledges asymmetries, fosters
                      mutual intelligibility, and enables the co-emergence of
                      territorial knowledge.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This track welcomes contributions that consider the
                      knowledge of cities and their future as a “trading zone”
                      where disciplines, actors, and epistemologies converge,
                      clash, and co-evolve. In this framework, the role of
                      digital technologies, AI-based systems, and data-driven
                      tools must be critically examined not as neutral or
                      autonomous agents but as mediators and amplifiers of how
                      we perceive, interpret, and intervene in complex urban and
                      territorial environments.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      In particular, we invite papers that reflect on:
                    </span>
                    <br></br>
                    <span>
                      ● Human and more-than-human agency in urban and
                      territorial transformation;
                    </span>
                    <br></br>
                    <span>
                      ● The relationship between the past and the future, with
                      history informing and inspiring prospective visions;
                    </span>
                    <br></br>
                    <span>
                      ● Urban planning and design as a knowledge trading zone,
                      integrating formal and informal, expert and local,
                      analogue and digital forms of knowledge;
                    </span>
                    <br></br>
                    <span>
                      ● The role of emerging technologies and artificial
                      intelligence in supporting situated knowledge production,
                      collaborative decision-making, and adaptive spatial
                      strategies;
                    </span>
                    <br></br>
                    <span>
                      ● Interaction as a relational and epistemological practice
                      enabling knowledge co-production across heterogeneous
                      domains, actors, and environments.
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text327">
                    8 - HERITAGE UNDER OVERTOURISM
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text328">
                    Chairs: Anna Marson, Università Iuav di Venezia, Diego
                    Calaon, Monica Calcagno, Università Ca’ Foscari, Venezia
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text329">
                    Reframing the management of change in historic urban
                    landscapes
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text330">
                    <span>
                      In the face of current social and economic dynamics, the
                      meaning of heritage is changing, ranging from
                      institutional recognition to the
                      &apos;patrimonialisation&apos; processes initiated by
                      citizens. Meanwhile, heritage sites are suffering from the
                      pressures of overtourism. Historic cities are losing their
                      social fabric as they are transformed by the tourism
                      industry, leaving them as beautified empty shells.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      In the meantime, we have learnt that heritage encompasses
                      not only objects, but also contexts, places, and related
                      values and meanings. Preservation is no longer the main
                      objective, and ‘management of change’ seems to be a more
                      suitable definition for contemporary conservation
                      activity. In this context, there is a growing demand to
                      link preservation activity more proactively with spatial
                      planning.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We also know that overtourism is a growing threat to a
                      large number of heritage sites. While it may be considered
                      a consequence of the global growth of tourism, it does not
                      occur in isolation. Rather, it is sustained by specific
                      investments in infrastructure, tourism offerings,
                      institutional and social media communications, and
                      laissez-faire policies regarding short-term rentals.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Today, the effects of overtourism on world-renowned
                      heritage sites such as Venice are disruptive and seem to
                      be out of control, ungovernable. However, overtourism has
                      never been really framed as a specific policy area to be
                      developed, monitored, innovated and, if necessary,
                      reframed.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We welcome contributions addressing these issues, and more
                      specifically:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      ● Institutional action and the agency of citizens:
                      policies, practices, and governance arrangements to learn
                      from in heritage cities under pressure by overtourism;
                    </span>
                    <br></br>
                    <span>
                      ● Which assemblages of frames, materiality, and agents are
                      effective in tackling overtourism in heritage places?
                    </span>
                    <br></br>
                    <span>
                      ● How can the issue of overtourism in heritage contexts,
                      and therefore the policies to deal with it, be usually
                      reframed?
                    </span>
                    <br></br>
                    <span>
                      ● What is the relationship between world heritage
                      management plans and land-use plans in world heritage
                      sites? How could this relation be improved, through
                      different forms of governance?
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
            <AccordionTrack
              name={
                <Fragment>
                  <span className="home-text355">
                    9 - MOBILITIES
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              }
              chairs={
                <Fragment>
                  <span className="home-text356">
                    Chairs: Federico Cavallaro, Luca Velo, Università Iuav di
                    Venezia, Ignazio Vinci, Università di Palermo
                  </span>
                </Fragment>
              }
              briefDescription={
                <Fragment>
                  <span className="home-text357">
                    Transport and Mobility Spaces. Between reorganization and
                    innovation
                  </span>
                </Fragment>
              }
              descriptionTrack={
                <Fragment>
                  <span className="home-text358">
                    <span>
                      In contemporary urban and metropolitan contexts, access to
                      public services faces significant and persistent
                      challenges. This is largely due to the fragmentation of
                      the governance structures, both social and economic, which
                      complicates the coordination of policies and projects
                      across different administrative levels. This cross-cutting
                      issue affects not only low-density territories, but also
                      dense urban environments such as metropolitan regions.
                      Addressing this fragmentation requires the implementation
                      of integrated tools and approaches capable of coordinating
                      sectoral policies and institutional actors across multiple
                      territorial levels.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      In addition, extreme events caused by factors such as
                      climate change, financial crises, and the Covid-19
                      pandemic) further exacerbate this situation, resulting in
                      a low quality of life for people and a lack of
                      experimentation with innovative policies, actions, and
                      projects. Increased disparities often lead to significant
                      inequalities, which can be avoided by reducing social
                      exclusion and promoting access to economic, political,
                      cultural, and social opportunities.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Tackling these complexities requires a renewed approach to
                      transport and mobility, aligning existing methods and
                      solutions across various traditions and dimensions of the
                      transformation process. These innovative approaches and
                      sustainable practices consider different territorial
                      scales and geographical contexts. This track explores
                      contributions that recently have covered these issues both
                      from a theoretical and a practical perspective.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We welcome technical analyses, practices, or policies that
                      deal with the following aspects (this list is not
                      exhaustive):
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Mobility to reduce disparities in urban and metropolitan
                      areas;
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Mobility and transport to increase the accessibility and
                      competitiveness of low-demand areas;
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
            ></AccordionTrack>
          </div>
        </div>
      </section>
      <section
        id="speakers"
        className="home-section-speakers thq-section-padding"
      >
        <div className="home-container118 thq-section-max-width">
          <div className="home-container119">
            <div className="home-container120">
              <span className="home-text377 heading2">Speakers</span>
            </div>
          </div>
          <div className="home-wrapper-speakers">
            <CardSpeaker
              name={
                <Fragment>
                  <span className="home-text378 heading4">
                    <span>Patrick Le Galès</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home-text381">
                    <span>
                      Professor of Sociology and Politics, Sciences Po, Paris;
                      Research Director at CNRS
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              button={
                <Fragment>
                  <span className="home-text384">Read more</span>
                </Fragment>
              }
              imageAlt="patrick Le Gales"
              imageSrc="/patrick_le_gales_609fdc9222-200w.png"
              rootClassName="card-speakerroot-class-name"
            ></CardSpeaker>
            <CardSpeaker
              name={
                <Fragment>
                  <span className="home-text385 heading4">
                    <span>Jennifer Robinson</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home-text388">
                    <span>
                      Professor and Chair of Human Geography, University
                      College, London
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              button={
                <Fragment>
                  <span className="home-text391">Read more</span>
                </Fragment>
              }
              imageAlt="Jenniffer Robinson"
              imageSrc="/jrobinson-200h.jpeg"
              rootClassName="card-speakerroot-class-name3"
            ></CardSpeaker>
            <CardSpeaker
              name={
                <Fragment>
                  <span className="home-text392 heading4">
                    <span>Francesco Bandarin</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home-text395">
                    <span>Former Director, UNESCO World Heritage Centre</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              button={
                <Fragment>
                  <span className="home-text398">Read more</span>
                </Fragment>
              }
              imageSrc="/rectangle%204863-200h.png"
              rootClassName="card-speakerroot-class-name1"
            ></CardSpeaker>
            <CardSpeaker
              name={
                <Fragment>
                  <span className="home-text399 heading4">
                    <span>Maria Gravari Barbas</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              role={
                <Fragment>
                  <span className="home-text402">
                    <span>
                      Professor of Geography and Planning, University Paris 1
                      Panthéon-Sorbonne; UNESCO Chair on “Tourism, Culture,
                      Development.”
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              button={
                <Fragment>
                  <span className="home-text405">Read more</span>
                </Fragment>
              }
              imageAlt="Maria Gravari Barbas"
              imageSrc="/userphoto.univ-paris1.fr-200w.jpeg"
              rootClassName="card-speakerroot-class-name4"
            ></CardSpeaker>
          </div>
        </div>
      </section>
      <section
        id="submissions"
        className="home-section-submissions thq-section-padding"
      >
        <div className="home-container121 thq-section-max-width">
          <div className="home-container122">
            <span className="home-text406 heading2">
              <span>Submission</span>
              <br className="home-text408"></br>
            </span>
          </div>
          <div className="home-container123">
            <div className="home-container124">
              <div className="home-container125">
                <span className="home-text409 heading4">
                  Abstract Submission guidelines
                </span>
                <span className="home-text410 paragraph-big">
                  <span>
                    Expected Abstract contributions should be limited to a
                    maximum of 250-350 words and should include 3 keywords and 3
                    references. The abstract must contain original research work
                    conducted by the author(s); it should clearly outline the
                    main argument, scope(s) of the contribution, methodological/
                    conceptual approaches, and its relevance to the track themes
                    and the core topics of the conference.
                  </span>
                  <br className="home-text412"></br>
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
                  <br className="home-text415"></br>
                  <br></br>
                  <span>
                    The official language of the EURA 2026 is English. Abstracts
                    will be published in the Book of abstracts.
                  </span>
                  <br></br>
                </span>
                <ButtonBlack
                  button={
                    <Fragment>
                      <span className="home-text419">
                        Abstract Submission Giudelines
                      </span>
                    </Fragment>
                  }
                  rootClassName="button-blackroot-class-name3"
                ></ButtonBlack>
                <ButtonBlack
                  button={
                    <Fragment>
                      <span className="home-text420">
                        Paper Submission Guidelines
                      </span>
                    </Fragment>
                  }
                  rootClassName="button-blackroot-class-name1"
                ></ButtonBlack>
              </div>
              <div className="home-container126"></div>
            </div>
            <div className="home-container127">
              <span className="home-text421 heading4">Important dates</span>
              <div className="home-container128">
                <span className="home-text422 h5">October 27th, 2025</span>
                <span className="home-text423 paragraph-big">
                  <span>
                    Opening of the Call for (Panels and Papers) Abstracts and
                    Abstract Submission
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container129">
                <span className="home-text426 h5">
                  <span>December 15th, 2025</span>
                  <br></br>
                </span>
                <span className="home-text429 paragraph-big">
                  <span>Closing of the Call for Abstracts</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container130">
                <span className="home-text432 h5">
                  <span>January 20th, 2026</span>
                  <br></br>
                </span>
                <span className="home-text435 paragraph-big">
                  <span>
                    Notification of Acceptance and Opening of Registration
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container131">
                <span className="home-text438 h5">
                  <span>
                    February 28th, 2026
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span className="home-text441 paragraph-big">
                  <span>Early Bird Registration Deadline</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container132">
                <span className="home-text444 h5">
                  <span>May 1st, 2026</span>
                  <br></br>
                </span>
                <span className="home-text447 paragraph-big">
                  <span>Final Registration Deadline</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="plennary"
        className="home-section-plenary thq-section-padding"
      >
        <div className="home-container133 thq-section-max-width">
          <div className="home-container134">
            <span className="home-text450 heading2">Plenary Sessions</span>
          </div>
          <div className="home-container135">
            <div className="home-container136">
              <div className="home-container137 plenary-row-odd">
                <div className="home-container138">
                  <div className="home-container139">
                    <img
                      alt="image"
                      src="/foto1-optimized-1760957035030-1500w.jpg"
                      className="home-image5"
                    />
                    <span className="home-text451">
                      foto © Università Iuav di Venezia
                    </span>
                  </div>
                  <div className="home-container140">
                    <span className="home-text452 heading3">
                      <span>Plenary</span>
                      <br></br>
                      <span className="home-text455">01</span>
                    </span>
                    <div className="home-container141"></div>
                    <button type="button" className="home-button1 button">
                      Vai al documento
                    </button>
                  </div>
                </div>
                <div className="home-container142">
                  <span className="home-text456 paragraph-big">
                    <span>
                      The first plenary session, on 18 June, will focus on the
                      overarching theme of the conference.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="plenary-row-even">
              <div className="home-container144">
                <div className="home-container145">
                  <span className="home-text459 heading3">
                    <span>Plenary</span>
                    <br></br>
                    <span className="home-text462">02</span>
                  </span>
                  <div className="home-container146"></div>
                  <button type="button" className="home-button2 button">
                    Vai al documento
                  </button>
                </div>
                <div className="home-container147">
                  <span className="home-text463 paragraph-big">
                    The second plenary session, on 19 June, will focus on a
                    topic related to Venice as a host city, such as heritage
                    (particularly historic urban landscapes) and over-tourism.
                  </span>
                </div>
              </div>
              <div className="home-container148">
                <img
                  alt="image"
                  src="/venezia%202-optimized-1761575325757.jpg"
                  className="home-image6"
                />
                <span className="home-text464">
                  foto © Università Iuav di Venezia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="workshops"
        className="home-section-workshops thq-section-padding"
      >
        <div className="home-container149 thq-section-max-width">
          <div className="home-container150">
            <div className="home-container151">
              <img
                alt="icon mobile workshop"
                src="/mobileworkshopicon.svg"
                className="home-image7"
              />
            </div>
          </div>
          <div className="home-container152">
            <div className="home-container153">
              <span className="home-text465 heading2">Mobile workshops</span>
              <span className="home-text466 paragraph-big">
                <span>
                  There is a wide range of mobile workshop available to urban
                  scholars in Venice.
                </span>
                <br className="home-text468"></br>
                <br></br>
                <span>
                  The municipality of Venice&apos;s urban system is defined not
                  only by the old town but also by an articulated system of
                  islands and by the mainland. Among many examples of
                  heritage-rich urban centers worldwide, Venice is indeed a very
                  meaningful case due the dramatic growth in the number of
                  tourists that the city has experienced over the last decades.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text471"></br>
                <br></br>
                <span>
                  The exact organization of trips will be set up in
                  collaboration with the representatives of
                  stakeholders/sponsors.
                </span>
                <br></br>
              </span>
              <ButtonBlack
                button={
                  <Fragment>
                    <span className="home-text475">
                      <span>
                        REGISTER
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>(</span>
                      <span>by May 1st, 2026)</span>
                    </span>
                  </Fragment>
                }
                rootClassName="button-blackroot-class-name2"
              ></ButtonBlack>
              <div className="home-container154">
                <img
                  alt="image"
                  src="/foto3-optimized-1760957035030-1500w.jpg"
                  className="home-image8"
                />
                <span className="home-text480">
                  foto © Università Iuav di Venezia
                </span>
              </div>
            </div>
            <div className="home-wrapper-workshops">
              <div className="home-container155">
                <div className="home-container156"></div>
              </div>
              <AccordionWorkshop
                nameWorkshop={
                  <Fragment>
                    <span className="home-text481">
                      1 - Forte Marghera and the line of Austrian fortress
                    </span>
                  </Fragment>
                }
                rootClassName="accordion-workshoproot-class-name"
                descriptionWorkshop={
                  <Fragment>
                    <span className="home-text482">
                      <span>
                        The workshop will take place at the “land gate of
                        Venice,” the city&apos;s ancient defensive centre, now
                        an example of culture-driven urban regeneration, where
                        an old fortress built in the 19th century to defend
                        Venice has been transformed into a cultural centre that
                        hosts various events and serves as a social meeting
                        place.
                      </span>
                      <br></br>
                      <span>
                        Originally part of the Mestre entrenched camp and the
                        larger lagoon defence system,“Porto Marghera” is now
                        municipally owned and managed by a non-profit foundation
                        of the City of Venice. It carries out promotion and
                        dissemination activities, organises cultural
                        initiatives, promotes interventions co-financed with
                        public funds, and provides consultancy and design
                        services for the maintenance, restoration, and reuse of
                        heritage sites.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></AccordionWorkshop>
              <AccordionWorkshop
                nameWorkshop={
                  <Fragment>
                    <span className="home-text487">
                      <span>
                        2 -
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        Circus social housing neighborhood in Chirignago
                      </span>
                    </span>
                  </Fragment>
                }
                rootClassName="accordion-workshoproot-class-name1"
                descriptionWorkshop={
                  <Fragment>
                    <span className="home-text490">
                      <span>
                        The Circus housing complex in Chirignago is an
                        interesting example of social housing neighbourhood.
                        Located in a suburb of Mestre, the complex was built in
                        the 1970s and houses around 600 families. The project
                        was created to provide accessible housing in response to
                        the growing demand for residential housing at the time.
                      </span>
                      <br></br>
                      <span>
                        As in many urban suburbs across Europe, various
                        phenomena of socio-economic deprivation soon emerged.
                        Today, thanks in part to significant civic action,
                        several community initiatives aim to provide new social
                        and cultural services.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></AccordionWorkshop>
              <AccordionWorkshop
                nameWorkshop={
                  <Fragment>
                    <span className="home-text495">
                      <span>
                        3 - The countryside in the lagoon: exploring Sant’Erasmo
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="accordion-workshoproot-class-name2"
                descriptionWorkshop={
                  <Fragment>
                    <span className="home-text498">
                      <span>
                        The workshop will include a visit to the island of
                        Sant&apos;Erasmo, part of the Venetian lagoon, where
                        food policies, food landscapes and local cuisine
                        converge, to explore the food policies and sustainable
                        agricultural practices that characterise the island,
                        together with local initiatives aimed at building a
                        resilient food system and preserving the cultural
                        heritage of this fertile land.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></AccordionWorkshop>
              <AccordionWorkshop
                nameWorkshop={
                  <Fragment>
                    <span className="home-text501">
                      <span>
                        4 - A walk through public housing neighborhoods in
                        Venice old town
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="accordion-workshoproot-class-name3"
                descriptionWorkshop={
                  <Fragment>
                    <span className="home-text504">
                      <span>
                        A walk through the council estates of the old town of
                        Venice
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        This mobile workshop proposes to explore public housing
                        districts in Venice. With a walk around the island of
                        Giudecca, it aims to explore the fundamental role that
                        public housing projects have played in shaping the
                        history, culture and urban characteristics of this part
                        of the old city.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></AccordionWorkshop>
              <AccordionWorkshop
                nameWorkshop={
                  <Fragment>
                    <span className="home-text509">
                      <span>
                        5 - Venice historic center through its squeri
                        (traditional artisan shipyards)
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="accordion-workshoproot-class-name4"
                descriptionWorkshop={
                  <Fragment>
                    <span className="home-text512">
                      <span>
                        The historic centre of Venice with a walking tour of the
                        city&apos;s famous shipyards (squero) and rowing clubs
                        (remiere). The mobile workshop includes a visit to the
                        characteristic squeri, ancient shipyards where skilled
                        craftsmen have been making Venice&apos;s iconic boats,
                        including gondolas and sandoli, for generations. In
                        these historic and esteemed shipyards, the traditional
                        art of boat building has been meticulously preserved
                        over time.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></AccordionWorkshop>
              <AccordionWorkshop
                nameWorkshop={
                  <Fragment>
                    <span className="home-text515">
                      <span>6 - In-between port-city interface</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="accordion-workshoproot-class-name5"
                descriptionWorkshop={
                  <Fragment>
                    <span className="home-text518">
                      The workshop will explore the city of Venice through the
                      lens of the city-port interface. Participants will come to
                      recognise the city-port interface as a distinct form of
                      liminal landscape, characterised by the varying degrees of
                      intimacy or conflict that have developed between the two
                      sides over time. This transitional and boundary space
                      serves as a site of conflict and contention between the
                      individuals who converge along this shared edge,
                      encapsulating the dichotomous relationship between port
                      and city. How has the role of the port changed with the
                      relocation of the cruise terminal? What shifts have
                      occurred in the relationship between city and port? An
                      immersive experience will allow us to explore key port
                      sites and engage with stakeholders who will shed light on
                      the future trajectory of this global gateway of planetary
                      relations and energies.
                    </span>
                  </Fragment>
                }
              ></AccordionWorkshop>
            </div>
          </div>
        </div>
      </section>
      <section
        id="registration"
        className="home-section-registration thq-section-padding"
      >
        <div className="home-container157 thq-section-max-width">
          <div className="home-container158">
            <span className="home-text519 heading2">Registration</span>
          </div>
          <div className="home-pricing-table">
            <div className="home-container159">
              <span className="heading4">Partecipation fees</span>
              <span className="heading4">
                <span>
                  Early Bird Rate
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>(28th February 2026)</span>
              </span>
              <span className="heading4">
                <span>
                  Late Rate
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>(1st May 2026)</span>
              </span>
            </div>
            <div className="price-row">
              <span className="paragraph-big">
                <span>EURA/UAA members</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text532">440€</span>
              <span className="paragraph-big bold">490€</span>
            </div>
            <div className="home-container161 price-row">
              <span className="paragraph-big">
                <span>Non-EURA/UAA members</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text537">490€</span>
              <span className="paragraph-big bold">540€</span>
            </div>
            <div className="home-container162 price-row">
              <span className="paragraph-big">
                <span>EURA/UAA members from Eastern Europe</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text542">280€</span>
              <span className="paragraph-big bold">330€</span>
            </div>
            <div className="home-container163 price-row">
              <span className="paragraph-big">
                <span>Non-EURA/UAA members from Eastern Europe</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text547">310€</span>
              <span className="paragraph-big bold">360€</span>
            </div>
            <div className="home-container164 price-row">
              <span className="paragraph-big">
                <span>UAA members Latin America and Africa</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text552">280€</span>
              <span className="paragraph-big bold">330€</span>
            </div>
            <div className="home-container165 price-row">
              <span className="paragraph-big">
                <span>Retired EURA/UAA members</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text557">250€</span>
              <span className="paragraph-big bold">250€</span>
            </div>
            <div className="home-container166 price-row">
              <span className="paragraph-big">
                <span>PhD Students</span>
                <br></br>
              </span>
              <span className="paragraph-big bold home-text562">250€</span>
              <span className="paragraph-big bold">250€</span>
            </div>
          </div>
          <div className="home-container167">
            <div className="home-container168">
              <span className="home-text564 paragraph-big">
                <span className="home-text565">Registration deadlines</span>
                <br className="home-text566"></br>
                <span>Early bird registration opens: November 1st, 2026</span>
                <br></br>
                <span>Early bird registration closes: February 28th, 2026</span>
                <br></br>
                <span>Final deadline for registration: May 1st, 2026</span>
                <br></br>
                <br></br>
                <span className="home-text574">Official Programme</span>
                <br className="home-text575"></br>
                <span>
                  Accepted participants must register by May 15, 2022 (11:59 pm
                  CST) to be included in the official programme.
                </span>
                <br></br>
                <br></br>
                <span className="home-text579">
                  EURA and UAA Membership Special Fee
                </span>
                <br className="home-text580"></br>
                <span>
                  EURA and UAA members have a dedicated registration fee, which
                  will be confirmed after checking the membership status by Eura
                  Secretariat. To become a EURA member or to confirm/check your
                  membership status, please click here.
                </span>
              </span>
            </div>
            <div className="home-container169">
              <span className="home-text582 paragraph-big">
                <span className="home-text583">Fee coverage</span>
                <br></br>
                <span>
                  The fee covers: Coffee breaks and lunches during the
                  conference, Opening Event and Social Dinner, Book of
                  Abstracts, Mobile workshops participation.
                </span>
                <br></br>
                <br></br>
                <span className="home-text588">Refund policy</span>
                <br></br>
                <span>
                  COVID-related refund. Up to May 15, 2022, we will allow
                  refunds (minus an administrative fee of 80 euros) if travel to
                  Italy, or, to or from your home country becomes officially
                  restricted due to COVID-19 pandemic alerts. In this case, we
                  will run a blended event and authors will have the opportunity
                  to follow the online events of the conference and present
                  their papers in special online sessions.
                </span>
                <br></br>
                <br></br>
                <span className="home-text593">Registration procedure</span>
                <br className="home-text594"></br>
                <span>
                  Only credit card payments will be accepted
                  online. Registration will open on April 1, 2022.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="programme"
        className="home-sectino-programme thq-section-padding"
      >
        <div className="home-container170 thq-section-max-width">
          <div className="home-container171">
            <span className="home-text596 heading3">Programme</span>
          </div>
          <div className="home-container172">
            <div className="home-container173">
              <div className="home-container174">
                <div className="home-container175">
                  <span className="home-text597 heading4">
                    <span> </span>
                    <br></br>
                  </span>
                  <span className="home-text600 heading4">
                    <span> </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-container176">
                <span className="home-text603 paragraph-big">
                  08:30 - 09:00
                </span>
                <span className="home-text604 paragraph-big">
                  <span>09:00 - </span>
                  <span>09:15</span>
                  <br></br>
                </span>
                <span className="home-text608 paragraph-big">
                  09:15 - 10:45
                </span>
                <span className="home-text609 paragraph-big">
                  10:45 - 11:30
                </span>
                <span className="home-text610 paragraph-big">
                  09:15 - 10:45
                </span>
              </div>
            </div>
            <div className="home-container177">
              <span className="home-text611 heading4">
                <span>17th June 2026</span>
                <br></br>
              </span>
              <span className="home-text614 heading4">
                <span>
                  Wednesday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <div className="home-container178">
                <span className="home-text617 paragraph-big">
                  <span>340,00 €</span>
                  <br></br>
                </span>
                <span className="home-text620 paragraph-big">
                  <span className="home-text621">385,00 €</span>
                  <br></br>
                </span>
                <span className="home-text623 paragraph-big">
                  <span className="home-text624">230,00 €</span>
                  <br></br>
                </span>
                <span className="home-text626 paragraph-big">
                  <span className="home-text627">265,00 €</span>
                  <br></br>
                </span>
                <span className="home-text629 paragraph-big">
                  <span>215,00 €</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container179">
              <span className="home-text632 heading4">
                <span>18th June 2026</span>
                <br></br>
              </span>
              <span className="home-text635 heading4">
                <span>
                  Thursday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <div className="home-container180">
                <span className="home-text638 paragraph-big">
                  <span>Registration</span>
                  <br></br>
                </span>
                <span className="home-text641 paragraph-big">Welcome</span>
                <span className="home-text642 paragraph-big">
                  <span>Opening </span>
                  <span>session with </span>
                  <span>keynote speakers</span>
                  <br></br>
                </span>
                <span className="home-text647 paragraph-big">
                  <span>Coffee break and </span>
                  <span>Transfer to Cotonificio</span>
                  <br></br>
                </span>
                <span className="home-text651 paragraph-big">
                  <span>Track session</span>
                  <br></br>
                </span>
                <span className="home-text654 paragraph-big">Lunch</span>
                <span className="home-text655 paragraph-big">
                  Track session
                </span>
                <span className="home-text656 paragraph-big">Coffee break</span>
                <span className="home-text657 paragraph-big">
                  Track session
                </span>
                <span className="home-text658 paragraph-big">Free time</span>
                <span className="home-text659 paragraph-big">
                  <span>City Hall </span>
                  <span>
                    Reception
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text662"></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container181">
              <span className="home-text664 heading4">19th June 2026</span>
              <span className="home-text665 heading4">Friday</span>
              <div className="home-container182">
                <span className="home-text666 paragraph-big">
                  <span>Registration</span>
                  <br></br>
                </span>
                <span className="home-text669 paragraph-big">
                  <span>Opening session with keynote speakers</span>
                  <br className="home-text671"></br>
                  <span>
                    Round table with practitioners, institutions
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text673"></br>
                  <span>
                    and civic organisations representatives
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text675"></br>
                  <br className="home-text676"></br>
                  <br></br>
                </span>
                <span className="home-text678 paragraph-big">
                  <span>Coffee break and</span>
                  <br className="home-text680"></br>
                  <br className="home-text681"></br>
                  <span>Transfer to Cotonificio</span>
                  <br></br>
                </span>
                <span className="home-text684 paragraph-big">
                  <span>Track session</span>
                  <br className="home-text686"></br>
                </span>
                <span className="home-text687 paragraph-big">Lunch</span>
                <span className="home-text688 paragraph-big">
                  <span>Track session</span>
                  <br></br>
                </span>
                <span className="home-text691 paragraph-big">
                  <span>Coffee break</span>
                  <br></br>
                </span>
                <span className="home-text694 paragraph-big">
                  <span>Track session</span>
                  <br></br>
                </span>
                <span className="home-text697 paragraph-big">Free time</span>
                <span className="home-text698 paragraph-big">
                  <span>Conference </span>
                  <span>
                    dinner
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container183">
              <span className="home-text702 heading4">20th June 2026</span>
              <span className="home-text703 heading4">Saturday</span>
              <div className="home-container184">
                <span className="home-text704 paragraph-big">
                  Mobile Workshops
                </span>
                <span className="home-text705 paragraph-big">
                  <span className="home-text706">435,00 €</span>
                  <br></br>
                </span>
                <span className="home-text708 paragraph-big">
                  <span className="home-text709">280,00 €</span>
                  <br></br>
                </span>
                <span className="home-text711 paragraph-big">
                  <span className="home-text712">315,00 €</span>
                  <br></br>
                </span>
                <span className="home-text714 paragraph-big">265,00 €</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="venue" className="home-section-location thq-section-padding">
        <div className="home-container185 thq-section-max-width">
          <div className="home-container186">
            <div className="home-container187">
              <div className="home-container188">
                <span className="home-text715 heading4">Venue</span>
                <span className="home-text716 heading2">Cotonificio</span>
              </div>
              <hr className="home-separator1"></hr>
            </div>
            <div className="home-container189">
              <div className="home-container190">
                <div className="home-container191">
                  <span className="home-text717 paragraph-big">
                    <span>Parallel sessions will be held at Cotonificio</span>
                    <br></br>
                    <br></br>
                    <span className="home-text721">
                      History and current usage
                    </span>
                    <br></br>
                    <span>
                      The Cotonificio Veneziano building was inaugurated in 1883
                      and became an operating cotton mill the following year,
                      thanks to the initiatives of Baron Eugenio Cantoni and
                      Knight Carlo Moschini. In 1916, it was destroyed by a fire
                      and subsequently rebuilt. The mill employed more than a
                      thousand workers and remained in operation until 1960.
                      After being abandoned for about thirty years, it was
                      finally restored by the Venetian architect Gino Valle.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Today, the main building houses a large part of the
                      Università Iuav di Venezia, including lecture halls, the
                      Department of Architecture and Arts, and the Project
                      Archives. The archives include a study room with nine new
                      consultation stations, an exhibition room, an office, and
                      a storage room.
                    </span>
                    <br></br>
                  </span>
                </div>
                <Link to="/venue" className="home-navlink2">
                  <ButtonStroke
                    button={
                      <Fragment>
                        <span className="home-text728">
                          More About the Venue
                        </span>
                      </Fragment>
                    }
                    rootClassName="button-strokeroot-class-name"
                    className="home-component33"
                  ></ButtonStroke>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-container192">
            <img
              alt="image"
              src="/iuavfoto-optimized-1760957035030-1800w.jpg"
              className="home-image9"
            />
            <span className="home-text729">
              foto © Università Iuav di Venezia
            </span>
          </div>
        </div>
      </section>
      <section id="award" className="home-section-award thq-section-padding">
        <div className="home-container193 thq-section-max-width">
          <div className="home-container194">
            <div className="home-container195">
              <span className="home-text730 heading2">
                Awards &amp; publication policy
              </span>
              <span className="home-text731 heading4">
                <span>
                  At each annual conference the European Urban Research
                  Association (EURA) offers two prizes
                </span>
                <br></br>
                <span>
                  The winners will be announced at the Conference Dinner on
                  Thursday 18 June.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <hr className="home-separator2"></hr>
          <div className="home-container196">
            <div className="home-container197">
              <span className="home-text736 heading3">
                Emerging Scholar Award
              </span>
              <span className="home-text737 paragraph-big">
                <span>
                  An award will be given to an emerging scholar whose work
                  exemplifies outstanding scholarship in urban affairs. The
                  recipient will receive a 1,000-euro honorarium. The honorarium
                  is a travel grant that will allow the winner to participate in
                  the next EURA conference or the next Urban Affairs Association
                  (UAA) conference in North America. The award winner is usually
                  announced at the conference.
                </span>
                <br className="home-text739"></br>
                <br></br>
                <span className="home-text741">Eligibility</span>
                <br></br>
                <span>
                  Participants at the conference who are pursuing a doctoral or
                  post-doctoral research project are, regardless of academic
                  discipline, eligible to apply. Applicants must have an
                  approved dissertation proposal. Candidates are not required to
                  be EURA members. Candidates must have an accepted proposal in
                  one of the conference tracks and must submit a full paper to
                  the conference.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text744"></br>
                <br></br>
                <span className="home-text746">Nomination/selection</span>
                <br className="home-text747"></br>
                <span>
                  Track chairs of the conference will nominate a limited number
                  of excellent papers. The final decision will be made by the
                  EURA Awards Committee comprising members of the EURA Governing
                  Board.
                </span>
                <br className="home-text749"></br>
                <br></br>
                <span className="home-text751">Publication</span>
                <br></br>
                <span>
                  In addition to the grant, the author might be invited to
                  publish their paper in the EURA journal Urban Research and
                  Practice.
                </span>
                <br></br>
                <span>
                  Please note that the deadline for submitting full papers to
                  the EURA 2026 Conference is Monday 18 May 2026. See guidance
                  below.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container198">
              <span className="home-text757 heading3">Best Paper Award</span>
              <span className="home-text758 paragraph-big">
                <span>
                  An award will be given for the Best Conference Paper. Factors
                  considered when making this award will include originality of
                  the research, coherent structure, clear methodology, sound
                  analysis, relevance to the challenges now facing cities, and
                  contribution to the academic field of urban studies. The award
                  winner is usually announced at the conference.
                </span>
                <br className="home-text760"></br>
                <br className="home-text761"></br>
                <span className="home-text762">Eligibility</span>
                <br></br>
                <span>
                  Participants at the conference who have an accepted abstract
                  proposal in one of the conference tracks are, regardless of
                  academic discipline, eligible to apply. Applicants are not
                  required to be members of EURA.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text765"></br>
                <br></br>
                <span className="home-text767">Nomination/selection</span>
                <br></br>
                <span>
                  Track chairs of the conference will select the best paper in
                  their tracks. The final decision will be made by the EURA
                  Awards Committee comprising members of the EURA Governing
                  Board.
                </span>
                <br className="home-text770"></br>
                <br></br>
                <span className="home-text772">Publication</span>
                <br></br>
                <span>
                  The author of the winning paper will have the opportunity to
                  publish their work in the EURA journal Urban Research and
                  Practice. The paper would proceed through the normal
                  refereeing process.
                </span>
                <br className="home-text775"></br>
                <br></br>
                <br></br>
                <span className="home-text778">
                  Please note that the deadline for submitting full papers to
                  the EURA 2026 Conference is Monday 18 May 2026.
                </span>
              </span>
              <ButtonBlack
                button={
                  <Fragment>
                    <span className="home-text779">
                      Paper Submission Guidelines
                    </span>
                  </Fragment>
                }
                rootClassName="button-blackroot-class-name4"
              ></ButtonBlack>
            </div>
          </div>
        </div>
      </section>
      <div
        id="committee"
        className="home-section-committee thq-section-padding"
      >
        <div className="home-container199 thq-section-max-width">
          <div className="home-container200">
            <div className="home-container201">
              <span className="home-text780 heading2">
                <span>Local Organising Committee</span>
                <br></br>
              </span>
            </div>
            <div className="home-container202">
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text783 heading3">
                      <span>Carla Tedesco</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text786 heading4">
                      <span> local organising group coordinator</span>
                      <br></br>
                      <span>Professor of Urban and Regional Planning</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text791 heading4">
                      carla.tedesco@iuav.it
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text792 heading3">
                      <span>Matteo Basso</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text795 heading4">
                      Professor of Urban and Regional Planning
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text796 heading4">
                      <span>matteo.basso@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text799 heading3">
                      <span>Filippo Magni</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text802 heading4">
                      <span>
                        Assistant Professor of Urban and Regional Planning
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text805 heading4"> </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text806 heading3">
                      <span>Anna Marson</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text809 heading4">
                      <span>Professor of Urban and Regional Planning</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text812 heading4">
                      <span>filippo.magni@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="committee-cardroot-class-name"
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text815 heading3">
                      <span>Francesco Musco</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text818 heading4">
                      <span>Professor of Urban and Regional Planning</span>
                      <br></br>
                      <span>Director of Università IUAV Research Section</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text823 heading4">
                      <span>francesco.musco@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text826 heading3">
                      <span>Eugenio Cannovale-Palermo</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text829 heading4">PhD student</span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text830 heading4">
                      <span>mferrigno@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text833 heading3">
                      <span>Medea Ferrigno</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text836 heading4">PhD student</span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text837 heading4">
                      <span>mferrigno@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text840 heading3">
                      <span>Klarissa Pica</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text843 heading4">
                      Research Fellow
                    </span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text844 heading4">
                      <span>kpica@iuav.it</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
              <CommitteeCard
                nome={
                  <Fragment>
                    <span className="home-text847 heading3">
                      <span>Francesca Ulivi</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                role={
                  <Fragment>
                    <span className="home-text850 heading4">PhD student</span>
                  </Fragment>
                }
                email={
                  <Fragment>
                    <span className="home-text851 heading4">
                      fulivi@iuav.it
                    </span>
                  </Fragment>
                }
              ></CommitteeCard>
            </div>
          </div>
        </div>
      </div>
      <Footer10
        link1={
          <Fragment>
            <span className="home-text852">Venezia, Italy</span>
          </Fragment>
        }
        link111={
          <Fragment>
            <span className="home-text853">Cookie Policy</span>
          </Fragment>
        }
        link112={
          <Fragment>
            <span className="home-text854">
              European Urban Research Association
            </span>
          </Fragment>
        }
        link1111={
          <Fragment>
            <span className="home-text855"> Privacy Policy</span>
          </Fragment>
        }
        link1121={
          <Fragment>
            <span className="home-text856">
              European Urban Research Association
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home-text857">© 2025 EURA Conference</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="home-text858">EURA Conference 2026</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="home-text859">Conference</span>
          </Fragment>
        }
        column3Title={
          <Fragment>
            <span className="home-text860">Contacts</span>
          </Fragment>
        }
      ></Footer10>
      <div>
        <div className="home-container204">
          <Script html={``}></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
