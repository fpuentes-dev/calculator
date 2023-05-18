import styles from './styles.module.scss'

const { container, display } = styles

const Calculator: React.FC = () => {
  return (
    <div className={container}>
      <input type='text' className={display} value='0' readOnly />
      <div>
        <span>buttons</span>
      </div>
    </div>
  )
}

export default Calculator
