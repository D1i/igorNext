import {HeadText, Icon} from "../../components";

import s from './style.module.scss';

function InfoBlock(props) {
    // props types
    // header: string
    // content: [string]

    function generateList(informs) {
        if (!informs) {
            return null;
        }

        const list = [];
        informs.forEach(p => {
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

export function OurTeam(props) {
    return (
        <div className={s.ourTeamContainer}>
            <HeadText firstPart="Наша " secondPart="Команада"/>
            <div className={s.personList}>
                <div className={s.person}>
                    <div className={s.leftBlock}>
                        <img className={s.avatar} src={require('./img/avatars/mariaAvatar.png')}
                             alt="Ермолаева Мария Сергеевна"/>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.name}>Ермолаева Мария Сергеевна</div>
                        <div className={s.experience}>Опыт работы юристом в сфере интеллектуальной собственности – <b>более
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
                        <div className={s.diplomas}>
                            <img src={require('./img/documents/img.png')} alt=""/>
                            <img src={require('./img/documents/img_1.png')} alt=""/>
                            <img src={require('./img/documents/img_2.png')} alt=""/>
                            <img src={require('./img/documents/img_12.png')} alt=""/>
                            <img src={require('./img/documents/img_3.png')} alt=""/>
                            <img src={require('./img/documents/img_4.png')} alt=""/>
                            <img src={require('./img/documents/img_5.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={s.person}>
                    <div className={s.leftBlock}>
                        <img className={s.avatar} src={require('./img/avatars/mariaAvatar.png')}
                             alt="Ермолаева Наталья Васильевна"/>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.name}>Ермолаева Наталья Васильевна</div>
                        <div className={s.experience}>Опыт работы юристом – <b>более 30 лет</b>, из которых более 20 лет
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
                        <div className={s.diplomas}>
                            <img src={require('./img/documents/img_6.png')} alt=""/>
                            <img src={require('./img/documents/img_7.png')} alt=""/>
                            <img src={require('./img/documents/img_8.png')} alt=""/>
                            <img src={require('./img/documents/img_9.png')} alt=""/>
                            <img src={require('./img/documents/img_10.png')} alt=""/>
                            <img src={require('./img/documents/img_11.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}