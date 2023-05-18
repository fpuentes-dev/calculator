import styles from './styles.module.scss'

const { container } = styles

const MainButtons: React.FC = () => {
  return (
    <div className={container}>
      <button>AC</button>
      <button>
        <sup>2</sup>&#8730;
      </button>
      <button>
        x<sup>2</sup>
      </button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>,</button>
      <button>+/-</button>
      <button>=</button>
    </div>
  )
}

export default MainButtons
