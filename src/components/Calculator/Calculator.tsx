'use client'

import { useState } from 'react'
import ExtraButtons from './components/ExtraButtons'
import MainButtons from './components/MainButtons'
import { ContextCalculator, ContextCalculatorInitial } from './context/ContextCalculator'
import styles from './styles.module.scss'

const { container, extraButtonsContainer, mainButtonsContainer, display } = styles

const Calculator: React.FC = () => {
  const [context, setContext] = useState(ContextCalculatorInitial)
  return (
    <ContextCalculator.Provider value={{ context, setContext }}>
      <div className={container}>
        <div className={extraButtonsContainer}>
          <ExtraButtons />
        </div>
        <div className={mainButtonsContainer}>
          <input type='text' className={display} value={context.numAux || context.num || context.result} readOnly />
          <MainButtons />
        </div>
      </div>
    </ContextCalculator.Provider>
  )
}

export default Calculator
