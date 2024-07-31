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
  border-radius: 60px;
  color: #fff;
  background: linear-gradient(94.26deg, #8B6F4A -8.34%, #CDAD8B 108.94%) !important;
  &:hover {
    color: #ddd;
  }
`

export const Button = ({ type, disabled, children, className }) => {
  return (
    <BtnContainer
      type={type}
      disabled={disabled}
      className={"py-3 px-8 " + className}
    >
      {children}
    </BtnContainer>
  )
}
const BorderBtnContainer = styled.button`
  border-radius: 60px;
  color: #fff;
  border: 1px solid #fff;
  &:hover {
    background-color: #666;
  }
`

export const BorderButton = ({ type, disabled, children, className }) => {
  return (
    <BorderBtnContainer
      type={type}
      disabled={disabled}
      className={"py-3 px-8 " + className}
    >
      {children}
    </BorderBtnContainer>
  )
}