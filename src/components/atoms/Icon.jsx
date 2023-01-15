import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexBox } from '../../styles'

// Utiliza google fonts para importar el icono
// https://fonts.google.com/icons
const StyledIcon = styled(FlexBox)`
  height: 25px;
  width: 25px;
  margin: 0.4rem;
  svg {
    fill: white;
  }
`

function Icon({ children }) {
  return <StyledIcon>{children}</StyledIcon>
}

Icon.propTypes = {
  children: PropTypes.node,
}

export default Icon
