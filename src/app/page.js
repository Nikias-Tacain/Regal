'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <div className={styles.divImageHome}>
          <Image src={'/imageHome.svg'} alt='' width='380' height='150'/>
        </div>
        <div className={styles.buttonsCategoryHome}>
          <Link href={'/tienda'}>
            <button>Ver todo</button>
          </Link>
          <button>Exclusivo</button>
          <button>Nuevo</button>
          <button>Sale</button>
        </div>
        <div className={styles.textandImageDiv}>
          <div>
            <h2>Mats</h2>
            <h6>Saborea cada pequeño momento de tu práctica de yoga con estos hermosos elementos esenciales y lleva su práctica al siguiente nivel. Esté presente en el momento con la belleza que lo rodea.</h6>
          </div>
          <Image src={'/imageHomeMain.svg'} alt='' width={100} height={200}/>
        </div>
      </section>
      <div className={styles.divInfoHomePages}>
        <Image src={'/carita.svg'} alt='' width={100} height={100}/>
        <div className={styles.divInfoHomePagesTexts}>
          <p>Nuestros beneficios</p>
          <span>Diseñamos productos bonitos e intuitivos que simplemente te atrapan y, por lo tanto, agregan belleza y positividad a tu vida.</span>
        </div>
      </div>
      <section className={styles.mainSectionPart}>
        <h2>Últimos Diseños Exclusivos</h2>
        <div>
          <Image src={'/image1.svg'} alt='' width={140} height={200}/>
          <Image src={'/image2.svg'} alt='' width={140} height={200}/>
          <Image src={'/image3.svg'} alt='' width={140} height={200}/>
        </div>
      </section>
    </main>
  )
}
