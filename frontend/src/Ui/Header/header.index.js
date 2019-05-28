import React, { memo } from 'react'

import { defaultProps, propTypes } from './header.propTypes'
import { Wrapper, Other } from './header.styles'

const Header = () => {
  return (
    <Wrapper>
      <Other>Header</Other>
    </Wrapper>
  )
}

Header.defaultProps = defaultProps
Header.propTypes = propTypes

export default memo(Header)
