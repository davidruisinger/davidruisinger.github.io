import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import {
  AspectRatioBox,
  GradientBackground,
  NavButton,
  Page,
} from '../components'
import { mediaQueries } from '../styles/media-queries'

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 60px auto 60px auto;
  width: 100%;
  max-width: 600px;
  align-items: center;
`

const ButtonWrapper = styled(AspectRatioBox)`
  width: 50%;
  ${mediaQueries(4)`
    width: 25%;
  `};
`

const Content = styled.div`
  width: calc(100% - 28px);
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  margin: 0 auto;
  max-width: 800px;
  transform: translateY(-40px);
  padding: 14px;
`

const Home: NextPage = () => {
  const [activePage, setActivePage] = React.useState<0 | 1 | 2 | 3>(0)

  return (
    <Page>
      <GradientBackground variation={activePage}>
        <Header>
          {[...Array(4).keys()].map((n) => (
            <ButtonWrapper key={n} ratio={1}>
              <NavButton
                activeColor={getActiveColorForPage(n)}
                isActive={n === activePage}
                onClick={() => setActivePage(n as 0 | 1 | 2 | 3)}
              >
                Page {n + 1}
              </NavButton>
            </ButtonWrapper>
          ))}
        </Header>
      </GradientBackground>
      <Content>
        <p>Page {activePage + 1} content...</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Content>
    </Page>
  )

  function getActiveColorForPage(page: number): string {
    switch (page) {
      case 0:
        return '#0097FF'
      case 1:
        return '#70e1f5'
      case 2:
        return '#F7D19A'
      case 3:
        return '#EF8F78'
      default:
        return '#ffffff'
    }
  }
}

export default Home
