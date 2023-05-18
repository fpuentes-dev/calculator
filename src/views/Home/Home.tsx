import Calculator from '@src/components/Calculator'
import styles from './styles.module.scss'

const { container, title } = styles

const Home: React.FC = () => {
  return (
    <div className={container}>
      <span className={title}>Calculator</span>
      <Calculator />
    </div>
  )
}

export default Home
