import React from "react"
import PropTypes from "prop-types"

import interRegular from './fonts/inter-regular.ttf'
import interLight from './fonts/inter-light.ttf'
import interSemibold from './fonts/inter-semibold.ttf'
import belgiano from './fonts/belgiano.ttf'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>MorningStar Academy</title>
        <link rel="preload" href={belgiano} as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href={interRegular} as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href={interLight} as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href={interSemibold} as="font" type="font/ttf" crossOrigin="anonymous" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
