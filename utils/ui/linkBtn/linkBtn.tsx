import { FC } from "react"
import styles from './styles.module.scss';
import Link from 'next/link';
import { ILinkBtn } from "./types";

const LinkBtn: FC<ILinkBtn> = ({label, href}) => {
    
    return (
        <Link href={href}>
            <a className={styles.linkBtn}>{label}</a>
        </Link>
        
    )
}

export {LinkBtn};