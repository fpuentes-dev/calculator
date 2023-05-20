import Button from '@src/components/Button'
import styles from './styles.module.scss'
import useMainButtons from './hooks/useMainButtons'

const { container } = styles

const MainButtons: React.FC = () => {
  const {
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
    handleExp2,
    handleSqrt,
  } = useMainButtons()

  return (
    <div className={container}>
      <Button onClick={handleAC}>AC</Button>
      <Button onClick={handleSqrt}>
        <sup>2</sup>&#8730;
      </Button>
      <Button onClick={handleExp2}>
        x<sup>2</sup>
      </Button>
      <Button onClick={handleDivide}>/</Button>
      <Button onClick={handle7Click} isNumber>
        7
      </Button>
      <Button onClick={handle8Click} isNumber>
        8
      </Button>
      <Button onClick={handle9Click} isNumber>
        9
      </Button>
      <Button onClick={handleMultiply}>x</Button>
      <Button onClick={handle4Click} isNumber>
        4
      </Button>
      <Button onClick={handle5Click} isNumber>
        5
      </Button>
      <Button onClick={handle6Click} isNumber>
        6
      </Button>
      <Button onClick={handleSubtract}>-</Button>
      <Button onClick={handle1Click} isNumber>
        1
      </Button>
      <Button onClick={handle2Click} isNumber>
        2
      </Button>
      <Button onClick={handle3Click} isNumber>
        3
      </Button>
      <Button onClick={handleSum}>+</Button>
      <Button onClick={handle0Click} isNumber>
        0
      </Button>
      <Button onClick={handleDecimalClick} isNumber>
        ,
      </Button>
      <Button onClick={handleChangeSignClick} isNumber>
        +/-
      </Button>
      <Button onClick={handleEq}>=</Button>
    </div>
  )
}

export default MainButtons
