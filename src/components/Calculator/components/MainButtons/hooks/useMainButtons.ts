import { useContext, useState } from 'react'
import { ContextCalculator, ContextCalculatorInitial } from '@src/components/Calculator/context/ContextCalculator'
import { OPERATION } from '@src/types/operation'

const compute = (n1: number, n2: number, op?: OPERATION) => {
  switch (op) {
    case OPERATION.SUM:
      return n1 + n2
    case OPERATION.SUB:
      return n1 - n2
    case OPERATION.DIV:
      return n1 / n2
    case OPERATION.MUL:
      return n1 * n2
    default:
      return -1
  }
}

const useMainButtons = () => {
  const { context, setContext } = useContext(ContextCalculator)
  const [isDecimal, setIsDecimal] = useState(false)

  const handleNumClick = (n: string) => {
    if (context.result === 0 || context.operation) {
      setContext({
        ...context,
        num: context.num + n,
      })
    }
  }

  const handle0Click = () => context.num !== '' && handleNumClick('0')
  const handle1Click = () => handleNumClick('1')
  const handle2Click = () => handleNumClick('2')
  const handle3Click = () => handleNumClick('3')
  const handle4Click = () => handleNumClick('4')
  const handle5Click = () => handleNumClick('5')
  const handle6Click = () => handleNumClick('6')
  const handle7Click = () => handleNumClick('7')
  const handle8Click = () => handleNumClick('8')
  const handle9Click = () => handleNumClick('9')

  const handleDecimalClick = () => {
    if (!isDecimal) {
      setContext({
        ...context,
        num: context.num ? context.num + '.' : '0.',
      })
      setIsDecimal(true)
    }
  }

  const handleChangeSignClick = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Number(context.num) * -1}`,
      })
    } else {
      setContext({
        ...context,
        result: context.result * -1,
      })
    }
  }

  const handleAC = () => {
    setContext(ContextCalculatorInitial)
    isDecimal && setIsDecimal(false)
  }

  const handleSum = () => {
    let result = context.result || Number(context.num)
    if (context.operation) {
      result = compute(context.result, Number(context.num), context.operation)
    }

    setContext({
      ...context,
      num: '',
      operation: OPERATION.SUM,
      result,
    })
  }

  const handleSubtract = () => {
    let result = context.result || Number(context.num)
    if (context.operation) {
      result = compute(context.result, Number(context.num), context.operation)
    }

    setContext({
      ...context,
      num: '',
      operation: OPERATION.SUB,
      result,
    })
  }

  const handleMultiply = () => {
    let result = context.result || Number(context.num)
    if (context.operation) {
      result = compute(context.result, Number(context.num), context.operation)
    }

    setContext({
      ...context,
      num: '',
      operation: OPERATION.MUL,
      result,
    })
  }

  const handleDivide = () => {
    let result = context.result || Number(context.num)
    if (context.operation) {
      result = compute(context.result, Number(context.num), context.operation)
    }

    setContext({
      ...context,
      num: '',
      operation: OPERATION.DIV,
      result,
    })
  }

  const handleEq = () => {
    if (context.num && context.operation) {
      const result = compute(context.result, Number(context.num), context.operation)
      setContext({
        ...context,
        num: '',
        operation: undefined,
        result,
      })
    }
  }

  return {
    handleNumClick,
    handle0Click,
    handle1Click,
    handle2Click,
    handle3Click,
    handle4Click,
    handle5Click,
    handle6Click,
    handle7Click,
    handle8Click,
    handle9Click,
    handleDecimalClick,
    handleChangeSignClick,
    handleAC,
    handleSum,
    handleSubtract,
    handleMultiply,
    handleDivide,
    handleEq,
  }
}

export default useMainButtons
