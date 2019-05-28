import React, { memo } from 'react'

import Header from '../../Header/header.index'
import Footer from '../../Footer/footer.index'

import { Content } from './core.styles'

const Core = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)

export default memo(Core)
