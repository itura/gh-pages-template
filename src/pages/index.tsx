import Head from 'next/head'
import {Container, Typography} from "@mui/material"
import { css } from '@emotion/react'

const fancy = css({
  color: "purple"
})

export default function Home() {
  return (
    <>
      <Head>
        <title>beep boop</title>
        <meta name="description" content="beep boop" />
      </Head>
      <main>
        <Container>
          <Typography
            variant="h1"
            align="center"
            css={fancy}
          >
            beep boop
          </Typography>
        </Container>
      </main>
    </>
  )
}
