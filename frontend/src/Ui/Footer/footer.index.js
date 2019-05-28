import React, { memo } from 'react'

import { defaultProps, propTypes } from './footer.propTypes'
import { Wrapper, Other } from './footer.styles'

const Footer = () => {
  return (
    <Wrapper>
      <Other>Footer</Other>
    </Wrapper>
  )
}

Footer.defaultProps = defaultProps
Footer.propTypes = propTypes

export default memo(Footer)
