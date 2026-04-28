import { useState, useCallback } from 'react'
import Toolbar from './components/Toolbar'
import ForecastTable from './components/ForecastTable'
import { milestones, scenarios as defaultScenarios } from './data/sampleData'

function App() {
  const [scenarioList, setScenarioList] = useState(defaultScenarios)
  const [selectedScenario, setSelectedScenario] = useState(null)
  const [selectedMilestone, setSelectedMilestone] = useState(null)
  const [bufferPercent, setBufferPercent] = useState(20)

  const addScenario = useCallback((name) => {
    const id = `scenario-${Date.now()}`
    setScenarioList((prev) => [...prev, { id, name }])
    setSelectedScenario(id)
  }, [])

  const renameScenario = useCallback((id, name) => {
    setScenarioList((prev) => prev.map((s) => s.id === id ? { ...s, name } : s))
  }, [])

  const deleteScenario = useCallback((id) => {
    setScenarioList((prev) => prev.filter((s) => s.id !== id))
    setSelectedScenario((prev) => prev === id ? null : prev)
  }, [])

  return (
    <div className="h-screen flex flex-col bg-grey-850 text-grey-50 overflow-hidden">
      <Toolbar
        scenarios={scenarioList}
        selectedScenario={selectedScenario}
        onSelectScenario={setSelectedScenario}
        onAddScenario={addScenario}
        onRenameScenario={renameScenario}
        onDeleteScenario={deleteScenario}
        selectedMilestone={selectedMilestone}
        onSelectMilestone={setSelectedMilestone}
        milestones={milestones}
      />
      <div className="pl-10 pr-5 pt-3" style={{ maxHeight: 'calc(100vh - 60px - 12px - 60px)' }}>
        <ForecastTable
          activePriorities={new Set()}
          selectedMilestone={selectedMilestone}
          bufferPercent={bufferPercent}
          onBufferChange={setBufferPercent}
        />
      </div>
    </div>
  )
}

export default App
