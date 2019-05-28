import { string, func } from 'prop-types'

export const defaultProps = {
  title: 'FCV',
  logo: 'FCV',
  onLogoClick: () => null
}

export const propTypes = {
  title: string,
  logo: string,
  onClick: func
}
