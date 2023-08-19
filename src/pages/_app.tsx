import React from "react"
import type {AppProps} from "next/app"
import {CssBaseline} from "@mui/material"
import {ThemeProvider} from "@mui/system"
import "@fontsource-variable/crimson-pro"
import {theme} from "@/lib/styles"

export default function App({Component, pageProps}: AppProps) {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}

