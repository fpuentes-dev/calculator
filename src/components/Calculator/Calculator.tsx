import MainButtons from './components/MainButtons'
import styles from './styles.module.scss'

const { container, display } = styles

const Calculator: React.FC = () => {
  return (
    <div className={container}>
      <input type='text' className={display} value='0' readOnly />
      <MainButtons />
    </div>
  )
}

export default Calculator
