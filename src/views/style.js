import React from 'react'

import { Helmet } from 'react-helmet'

import './style.css'

const Style = (props) => {
  return (
    <div className="style-container1">
      <Helmet>
        <title>Style - EURA</title>
        <meta property="og:title" content="Style - EURA" />
      </Helmet>
      <div className="style-container2">
        <div className="style-container3">
          <div className="style-container4">
            <span className="style-text">Style</span>
          </div>
          <div className="style-container5">
            <span className="style-h1 heading1">H1</span>
            <span className="heading2">H2</span>
            <span className="heading3">H3</span>
            <span className="heading4">H4</span>
            <span className="h5">H5</span>
            <span className="paragraph-big">Paragraph-big</span>
            <span className="style-h53 paragraph-big-sansserif">
              Paragraph-big
            </span>
            <span className="paragraph-medium">Paragraph-medium</span>
            <span className="paragraph-small">Paragraph-small</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Style
