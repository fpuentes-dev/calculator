import { useContext, useState } from 'react'
import { ContextCalculator } from '@src/components/Calculator/context/ContextCalculator'

const useExtraButtons = () => {
  const { context, setContext } = useContext(ContextCalculator)
  const [m, setM] = useState(0)

  const handleAbs = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.abs(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.abs(context.result),
      })
    }
  }

  const handleMplus = () => {
    if (context.num) {
      setM(m + Number(context.num))
    } else {
      setM(m + context.result)
    }
  }

  const handleMminus = () => {
    if (context.num) {
      setM(m - Number(context.num))
    } else {
      setM(m - context.result)
    }
  }

  const handleMr = () => {
    if (context.operation) {
      setContext({
        ...context,
        num: `${m}`,
      })
    } else {
      setContext({
        ...context,
        num: '',
        result: m,
      })
    }
  }

  const handleMc = () => {
    setM(0)
  }

  const handleExp3 = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.pow(Number(context.num), 3)}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.pow(context.result, 3),
      })
    }
  }

  const handleFactorial = () => {
    if (context.num) {
      let num = 1
      for (let i = 2; i <= Number(context.num); i++) {
        num *= i
      }
      setContext({
        ...context,
        num: `${num}`,
      })
    } else {
      let result = 1
      for (let i = 2; i <= context.result; i++) {
        result *= i
      }
      setContext({
        ...context,
        result,
      })
    }
  }

  const handleEExp = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.pow(Math.E, Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.pow(Math.E, context.result),
      })
    }
  }

  const handle10Exp = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.pow(10, Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.pow(10, context.result),
      })
    }
  }

  const handleInverse = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${1 / Number(context.num)}`,
      })
    } else {
      setContext({
        ...context,
        result: 1 / context.result,
      })
    }
  }

  const handleCbrt = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.cbrt(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.cbrt(context.result),
      })
    }
  }

  const handleLn = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.log(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.log(context.result),
      })
    }
  }

  const handleLog10 = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.log10(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.log10(context.result),
      })
    }
  }

  const handleSin = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.sin(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.sin(context.result),
      })
    }
  }

  const handleCos = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.cos(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.cos(context.result),
      })
    }
  }

  const handleTan = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.tan(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.tan(context.result),
      })
    }
  }

  const handleAsin = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.asin(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.asin(context.result),
      })
    }
  }

  const handleAcos = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.acos(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.acos(context.result),
      })
    }
  }

  const handleAtan = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.atan(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.atan(context.result),
      })
    }
  }

  const handleSinh = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.sinh(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.sinh(context.result),
      })
    }
  }

  const handleCosh = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.cosh(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.cosh(context.result),
      })
    }
  }

  const handleTanh = () => {
    if (context.num) {
      setContext({
        ...context,
        num: `${Math.tanh(Number(context.num))}`,
      })
    } else {
      setContext({
        ...context,
        result: Math.tanh(context.result),
      })
    }
  }

  const handleE = () => {
    if (!context.num) {
      setContext({
        ...context,
        num: `${Math.E}`,
      })
    }
  }

  const handlePi = () => {
    if (!context.num) {
      setContext({
        ...context,
        num: `${Math.PI}`,
      })
    }
  }

  return {
    handleAbs,
    handleMplus,
    handleMminus,
    handleMr,
    handleMc,
    handleExp3,
    handleFactorial,
    handleEExp,
    handle10Exp,
    handleInverse,
    handleCbrt,
    handleSin,
    handleCos,
    handleTan,
    handleAsin,
    handleAcos,
    handleAtan,
    handleSinh,
    handleCosh,
    handleTanh,
    handleE,
    handlePi,
  }
}

export default useExtraButtons
