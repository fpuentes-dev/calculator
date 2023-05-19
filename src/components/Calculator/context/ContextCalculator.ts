'use client'

import { OPERATION } from '@src/types/operation'
import React, { SetStateAction, Dispatch } from 'react'

interface ContextCalculatorInitialType {
  num: string
  numAux: string
  operation?: OPERATION
  result: number
}

interface ContextCalculatorType {
  context: ContextCalculatorInitialType
  setContext: Dispatch<SetStateAction<ContextCalculatorInitialType>>
}

export const ContextCalculatorInitial: ContextCalculatorInitialType = {
  num: '',
  numAux: '',
  operation: undefined,
  result: 0,
}

export const ContextCalculator = React.createContext<ContextCalculatorType>({
  context: ContextCalculatorInitial,
  setContext: () => {},
})
