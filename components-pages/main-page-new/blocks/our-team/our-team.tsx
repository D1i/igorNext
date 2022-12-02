import Image from "next/image";
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";

import {HeadText, Icon} from "@components/index";

import marinaImg from './img/avatars/mariaAvatar.png';
import natalyaImg from './img/avatars/natalyaAvatar.png';
import doc1 from './img/documents/img.png';
import doc2 from './img/documents/img_1.png';
import doc3 from './img/documents/img_2.png';
import doc4 from './img/documents/img_3.png';
import doc5 from './img/documents/img_4.png';
import doc6 from './img/documents/img_5.png';
import doc7 from './img/documents/img_6.png';
import doc8 from './img/documents/img_7.png';
import doc9 from './img/documents/img_8.png';
import doc10 from './img/documents/img_9.png';
import doc11 from './img/documents/img_10.png';
import doc12 from './img/documents/img_11.png';
import doc13 from './img/documents/img_12.png';
import doc14 from './img/documents/img_13.png';
import doc15 from './img/documents/img_14.png';
import doc16 from './img/documents/img_15.png';
import doc17 from './img/documents/img_16.png';
import doc18 from './img/documents/img_17.png';
import doc19 from './img/documents/img_18.png';
import doc20 from './img/documents/img_19.png';
import doc21 from './img/documents/img_20.png';
import doc22 from './img/documents/img_21.png';
import doc23 from './img/documents/img_22.png';
import doc24 from './img/documents/img_23.png';
import doc25 from './img/documents/img_24.png';
import doc26 from './img/documents/img_25.png';
import doc27 from './img/documents/img_26.png';
import doc28 from './img/documents/img_27.png';
import doc29 from './img/documents/img_28.png';
import doc30 from './img/documents/img_29.png';
import doc31 from './img/documents/img_30.png';
import doc32 from './img/documents/img_31.png';
import doc33 from './img/documents/img_32.png';
import doc34 from './img/documents/img_33.png';
import doc35 from './img/documents/img_34.png';

import s from './style.module.scss';
import {mockReviews} from "@mock-data/reviews";
import {useMemo} from "react";

const mockImages: any = [
    doc13,
    doc14,
    doc15,
    doc16,
    doc17,
    doc18,
    doc19,
    doc20,
    doc21,
    doc22,
    doc23,
    doc24,
    doc25,
    doc26,
    doc27,
    doc28,
    doc29,
    doc30,
    doc31,
]

const natalyaDocs = [
    doc32,
    doc33,
    doc34,
    doc35,
]

function InfoBlock(props: any) {
    // props types
    // header: string
    // content: [string]

    function generateList(informs: any) {
        if (!informs) {
            return null;
        }

        const list: any = [];
        informs.forEach((p: any) => {
            list.push(
                <div className={s.infoParagraph}>
                    <Icon name="check"/>
                    <div className={s.infoParagraphText}>
                        {p}
                    </div>
                </div>
            )
        })

        return list;
    }

    return (
        <div className={s.infoBlockContainer}>
            <div className={s.infoBlockHeader}>{props.header}</div>
            <div className={s.infoBlockListContainer}>
                {generateList(props.content)}
            </div>
        </div>
    )
}

export function OurTeam(props: any) {
    const imagesList = useMemo(() => (
        <div className={s['short-img-container']}>
            {
                mockImages.map((img: any, i: number) => (
                    <div className={s['short-img']} key={i}><Image key={i} src={img} placeholder="blur"/></div>
                ))}
        </div>
    ), [mockImages]);

    return (
        <div className={s.background}>
            <div className={s.ourTeamContainer}>
                <HeadText firstPart="Наша " secondPart="Команада"/>
                <div className={s.personList}>
                    <div className={s.person}>
                        <div className={s.leftBlock}>
                            <Image className={s.avatar}
                                   src={marinaImg}
                                   alt="Ермолаева Мария Сергеевна"/>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.name}>Ермолаева Мария Сергеевна</div>
                            <div className={s.experience}>Опыт работы юристом в сфере интеллектуальной собственности
                                – <b>более
                                    6 лет</b></div>
                            <InfoBlock
                                header="Образование"
                                content={["Российская государственная академия интеллектуальной собственности (РГАИС) (Юрист по интеллектуальным правам)",
                                    "Самарский государственный социально-педагогический университет (Переводчик Итальянского языка)"]}
                            />
                            <InfoBlock
                                header="Дополнительное образование"
                                content={["Федеральный институт промышленной собственности (ФИПС/РОСПАТЕНТ)",
                                    "Всемирная организация интеллектуальной собственности/ World Intellectual Property Organization (ВОИС/WIPO)",
                                    "Межрегиональная академия строительного и промышленного комплекса"]}
                            />
                            <div className={s['short-img-wrapper']}>
                                {imagesList}
                            </div>
                        </div>
                    </div>
                    <div className={s.person}>
                        <div className={s.leftBlock}>
                            <Image className={s.avatar} src={natalyaImg}
                                   alt="Ермолаева Наталья Васильевна"/>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.name}>Ермолаева Наталья Васильевна</div>
                            <div className={s.experience}>Опыт работы юристом – <b>более 30 лет</b>, из которых более 20
                                лет
                                в сфере интеллектуальной собственности
                            </div>
                            <InfoBlock
                                header="Образование"
                                content={["Самарский государственный университет, Самара (Юрист в области гражданского права)",
                                    "АНО ВО Самарский университет государственного управления «Международный институт рынка» (Президентская программа подготовки управленческих кадров)",
                                    "АНО ВО Самарский университет государственного управления «Международный институт рынка» (Экономика и управление на предприятии)"]}
                            />
                            <InfoBlock
                                header="Дополнительное образование"
                                content={["Российская государственная академия интеллектуальной собственности (РГАИС)",
                                    "Федеральный институт промышленной собственности (ФИПС/РОСПАТЕНТ)",
                                    "Палата налоговых консультантов"]}
                            />
                            <div className={s['natalya-img-container']}>
                                {natalyaDocs.map((img: any, i: number) => (
                                    <div key={i} className={s['short-img']}><Image key={i} src={img}
                                                                                   placeholder="blur"/></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}