import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 1000px;
`

const Footer = () => (
  <Container className="mx-auto mt-20">
    <div className="grid grid-cols-2">
      <div>
        Column 1
      </div>
      <div>
        Column 2
      </div>
    </div>
  </Container>
)

export default Footer