import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <header>
        <div className={styles.headerDiv}>
            <div className={styles.headerDivlogoandProfile}>
                <Link href={'/'}>
                    <Image src={'/logo.svg'} alt='logoPage' width={100} height={100}/>
                </Link>
                <Image src={'/profile.svg'} alt='perfilPage' width={100} height={50}/>
            </div>
        </div>
    </header>
  )
}

export default Header