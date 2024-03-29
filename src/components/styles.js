import React from 'react'
import styled from '@emotion/styled'

export const DarkStyles = () => <style>{'html { background-color: black }'}</style>

export const gold = '#fad70f'

export const darkGold = '#C48F56'

export const GoldHR = styled.hr`
  border-color: ${gold};
  margin-top: -4px;
  padding-bottom: 36px;
  @media only screen and (min-width: 640px) {
    padding-bottom: 80px;
  }
  width: 100px;
  text-align: center;
  margin: auto;
`;

export const Heading = ({ children }) => (
  <>
    <h1 style={{ fontFamily: 'Belgiano' }}
      className="text-headlineorg text-6xl whitespace-nowrap mb-12 text-center">{children}</h1>
    <GoldHR />
  </>
)

const BtnContainer = styled.button`
  border: 1px solid #f59e0b;
  text-transform: uppercase;
  font-weight: 600;
  color: #f59e0b;
  letter-spacing: .8px;
  &:hover {
    color: white;
    background-color: #eab308;
  }
`

export const Button = ({ type, disabled, children, className }) => {
  return (
    <BtnContainer
      type={type}
      disabled={disabled}
      className={"py-3 px-8 rounded " + className}
    >
      {children}
    </BtnContainer>
  )
}