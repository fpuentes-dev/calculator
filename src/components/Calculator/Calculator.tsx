'use client'

import { useState } from 'react'
import ExtraButtons from './components/ExtraButtons'
import MainButtons from './components/MainButtons'
import { ContextCalculator, ContextCalculatorInitial } from './context/ContextCalculator'
import styles from './styles.module.scss'

const { container, extraButtonsContainer, mainButtonsContainer, display, extraButton } = styles

const Calculator: React.FC = () => {
  const [extraOpen, setExtraOpen] = useState(false)
  const [context, setContext] = useState(ContextCalculatorInitial)

  const toggleExtra = () => {
    setExtraOpen(!extraOpen)
  }

  return (
    <ContextCalculator.Provider value={{ context, setContext }}>
      <div className={container}>
        <div className={extraButtonsContainer} style={{ width: extraOpen ? 400 : 0, padding: extraOpen ? 10 : 0 }}>
          <ExtraButtons />
        </div>
        <div className={mainButtonsContainer}>
          <button className={extraButton} onClick={toggleExtra}>
            *
          </button>
          <input type='text' className={display} value={context.numAux || context.num || context.result} readOnly />
          <MainButtons />
        </div>
      </div>
    </ContextCalculator.Provider>
  )
}

export default Calculator
