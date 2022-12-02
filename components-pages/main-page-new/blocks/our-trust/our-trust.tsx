import s from './style.module.scss';
import Image from "next/image";

import {HeadText} from "@components/head-text";

import img1 from './img/image 10.png'
import img2 from './img/image 10-1.png'
import img3 from './img/image 10-2.png'
import img4 from './img/image 10-3.png'
import img5 from './img/image 10-4.png'
import img6 from './img/image 10-5.png'
import img7 from './img/image 10-6.png'
import img8 from './img/image 10-7.png'
import img9 from './img/image 10-8.png'
import img10 from './img/image 10-9.png'

export function OurTrust(props: any) {
    return (
        <div className={s.ourTrustWrapper}>
            <div className={s.ourTrustContainer}>
                <div>
                    <HeadText firstPart='Нам ' secondPart='доверяют'/>
                    <div className={s.ourTrustDescription}>Работаем как с крупными компаниями, так и с частным бизнесом
                    </div>
                </div>
                <div className={s.ourTrustLogoLists}>
                    <div className={s.logo}><Image src={img1}/></div>
                    <div className={s.logo}><Image src={img2}/></div>
                    <div className={s.logo}><Image src={img3}/></div>
                    <div className={s.logo}><Image src={img4}/></div>
                    <div className={s.logo}><Image src={img5}/></div>
                    <div className={s.logo}><Image src={img6}/></div>
                    <div className={s.logo}><Image src={img7}/></div>
                    <div className={s.logo}><Image src={img8}/></div>
                    <div className={s.logo}><Image src={img9}/></div>
                    <div className={s.logo}><Image src={img10}/></div>
                </div>
            </div>
        </div>
    )
}