'use client'

import MainButtons from './components/MainButtons'
import { ContextCalculator, ContextCalculatorInitial } from './context/ContextCalculator'
import { useState } from 'react'
import styles from './styles.module.scss'

const { container, display } = styles

const Calculator: React.FC = () => {
  const [context, setContext] = useState(ContextCalculatorInitial)
  return (
    <ContextCalculator.Provider value={{ context, setContext }}>
      <div className={container}>
        <input type='text' className={display} value={context.numAux || context.num || context.result} readOnly />
        <MainButtons />
      </div>
    </ContextCalculator.Provider>
  )
}

export default Calculator
