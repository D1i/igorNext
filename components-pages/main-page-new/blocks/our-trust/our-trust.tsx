import s from './style.module.scss';
import {HeadText} from "@components/head-text";
import Image from "next/image";

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
                    <div className={s.logo}><Image src={require('./img/image 10.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-1.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-2.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-3.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-4.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-5.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-6.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-7.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-8.png')}/></div>
                    <div className={s.logo}><Image src={require('./img/image 10-9.png')}/></div>
                </div>
            </div>
        </div>
    )
}