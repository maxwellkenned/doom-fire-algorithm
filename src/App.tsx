import React from 'react'
import DoomFire from './components/DoomFire'
import { GlobalStyle } from './theme/GlobalStyles'

const App: React.FC = () => {
  return (
    <main>
      <GlobalStyle />
      <DoomFire />
    </main>
  )
}

export default App
