// import styled from 'styled-components'
import { styled } from 'linaria/react'
import { css } from 'linaria'
import Text from './Text'

const H1 = styled.div`
  font-family: 'Libre Baskerville', serif;
  font-size: 3.6rem;
  font-weight: 400;
  color: "black";
  line-height: 4.8rem;
`
H1.displayName = 'H1'

const H2 = styled.div`
  font-family: 'Libre Baskerville', serif;
  font-size: 3rem;
  font-weight: 400;
  color: "black";
  line-height: 4rem;
`
H2.displayName = 'H2'


const H3 = styled.div`
  font-family: 'Roboto', serif;
  font-size: 1.5rem;
  color:'red';
`
H3.displayName = 'H3'

export { H1, H2, H3 }