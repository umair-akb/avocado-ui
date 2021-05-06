import React, { FC, CSSProperties, HTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

// flex component
const Flex: FC<FlexProps> = ({ children, className, ...props }) => {
  const _className = className ? `${className} avocado-flex` : `avocado-flex`
  return (
    <StyledFlex {...props} className={_className}>
      {children}
    </StyledFlex>
  )
}

// styling for flexbox
const StyledFlexCSS = ({
  flexFlow,
  flexWrap,
  alignContent,
  justifyContent,
  flexDirection,
  alignItems
}: FlexProps) => css`
  display: flex;
  align-items: ${alignItems};
  align-content: ${alignContent};
  justify-content: ${justifyContent && justifyContent};
  flex-wrap: ${flexWrap && flexWrap};
  flex-flow: ${flexFlow && flexFlow};
  flex-direction: ${flexDirection};
`

const StyledFlex = styled.div`
  ${StyledFlexCSS}
`

// This is a list of all the possible CSS properties on the flex container
type FlexContainerProps =
  | 'flexWrap'
  | 'alignContent'
  | 'flexFlow'
  | 'justifyContent'
  | 'alignItems'
  | 'flexDirection'

// extend and pick Flex container properties from CSSProperties
interface FlexProps
  extends Pick<CSSProperties, FlexContainerProps>,
    HTMLAttributes<HTMLDivElement> {}

// setup default properties
Flex.defaultProps = {
  flexWrap: 'nowrap',
  alignContent: 'normal',
  justifyContent: 'normal',
  alignItems: 'stretch',
  flexDirection: 'row'
}

Flex.displayName = 'Flex'

export { Flex }