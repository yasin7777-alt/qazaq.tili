import OriginalApp from './components/OriginalApp'
import { JourneyProvider, JourneyRail } from './components/Journey'

function App() {
  return (
    <JourneyProvider>
      <JourneyRail />
      <OriginalApp />
    </JourneyProvider>
  )
}

export default App
