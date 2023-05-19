import styles from './styles.module.scss'

const { container } = styles

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  isNumber?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isNumber }) => {
  return (
    <button className={container} onClick={onClick} style={{ background: isNumber ? 'grey' : 'orange' }}>
      {children}
    </button>
  )
}

export default Button
