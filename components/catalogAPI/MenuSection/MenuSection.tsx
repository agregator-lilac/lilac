import React, { FC, useState } from 'react'
import { MenuItem } from './MenuItem'

import styles from './styles.module.scss'

interface IProps {
  sectionHandler: (id: number) => void
  activeSection: number
  sections: string[]
}

const MenuSection: FC<IProps> = ({
  activeSection,
  sectionHandler,
  sections,
}) => {
  return (
    <section className={`container ${styles.root}`}>
      <h2 className={styles.h2}>категории</h2>
      <h5>Памятники</h5>
      {sections.map((section, i) => (
        <MenuItem
          active={i === activeSection}
          value={section}
          key={i}
          id={i}
          onClick={sectionHandler}
        ></MenuItem>
      ))}
    </section>
  )
}

export { MenuSection }
