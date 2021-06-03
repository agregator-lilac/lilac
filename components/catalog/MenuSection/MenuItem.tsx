import { FC } from 'react'

import styles from './styles.module.scss'

interface IProps {
  active: boolean
  value: string
  id: number
  onClick: (id: number) => void
}

const MenuItem: FC<IProps> = ({ active, value, onClick, id }) => {
  return (
    <div
      className={`d-flex ${styles.btn} ${active && styles.active}`}
      onClick={() => onClick(id)}
    >
      <p>{value}</p>
    </div>
  )
}

export { MenuItem }
