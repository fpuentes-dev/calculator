import Button from '@src/components/Button'
import styles from './styles.module.scss'
import useExtraButtons from './hooks/useExtraButtons'

const { container } = styles

const ExtraButtons: React.FC = () => {
  const {
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
  } = useExtraButtons()
  return (
    <div className={container}>
      <Button onClick={handleAbs}>abs</Button>
      <Button onClick={handleMplus}>m+</Button>
      <Button onClick={handleMminus}>m-</Button>
      <Button onClick={handleMr}>mr</Button>
      <Button onClick={handleMc}>mc</Button>
      <Button onClick={handleFactorial}>x!</Button>
      <Button onClick={handleExp3}>
        x<sup>3</sup>
      </Button>
      <Button>
        x<sup>y</sup>
      </Button>
      <Button onClick={handleEExp}>
        e<sup>x</sup>
      </Button>
      <Button onClick={handle10Exp}>
        10<sup>x</sup>
      </Button>
      <Button onClick={handleInverse}>1/x</Button>
      <Button onClick={handleCbrt}>
        <sup>3</sup>&#8730;
      </Button>
      <Button>
        <sup>y</sup>&#8730;
      </Button>
      <Button>ln</Button>
      <Button>
        log<sub>10</sub>
      </Button>
      <Button onClick={handleSin}>sin</Button>
      <Button onClick={handleCos}>cos</Button>
      <Button onClick={handleTan}>tan</Button>
      <Button onClick={handleAsin}>asin</Button>
      <Button onClick={handleAcos}>acos</Button>
      <Button onClick={handleAtan}>atan</Button>
      <Button onClick={handleSinh}>sinh</Button>
      <Button onClick={handleCosh}>cosh</Button>
      <Button onClick={handleTanh}>tanh</Button>
      <Button onClick={handleE}>e</Button>
      <Button onClick={handlePi}>π</Button>
    </div>
  )
}

export default ExtraButtons
