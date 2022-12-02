import {HeadText, Icon} from "@components/index";

import s from './style.module.scss';

function Plus() {
    return (
        <div className={s.plus}>
            <Icon name="plus"/>
        </div>
    )
}

export function OurAdvantages(props: any) {
    return (
        <div className={s.ourAdvantagesContainer}>
            <HeadText firstPart="Наши " secondPart="преимущества"/>
            <div className={s.innerBlockContainer}>
                <div className={s.innerBlock}>
                    <div>
                        <Icon name="book"/>
                    </div>
                    <div>
                        <div>Профильное образование</div>
                        <div>Наши специалисты имеют профильное образование в ведущих вузах, специализирующиеся на
                            интеллектуальной собственности
                        </div>
                    </div>
                </div>
                <div className={s.innerBlock}>
                    <div>
                        <Icon name="cheir"/>
                    </div>
                    <div>
                        <div>Более 20 лет практики</div>
                        <div>Представляем ваши интересы в судах различных юрисдикций, а также иных компетентных
                            органах, защищаем на досудебной стадии
                        </div>
                    </div>
                </div>
                <div className={s.innerBlock}>
                    <div>
                        <Icon name="graphicUp"/>
                    </div>
                    <div>
                        <div>
                            Повышение квалификации
                        </div>
                        <div>Наши юристы регулярно повышают квалификацию в ведущих международных национальных
                            организациях: РОСПАТЕНТ / ФИПС, РГАИС, МАСПК
                        </div>
                    </div>
                </div>
                <div className={s.innerBlock}>
                    <div>
                        <Icon name="page"/>
                    </div>
                    <div>
                        <div>Выигранные дела</div>
                        <div>Мы не только пресекаем нарушения, но и добиваемся компенсаций взыскания. На данный
                            момент
                            нашими юристами успешно завершены более 500 судебных дел
                        </div>
                    </div>
                </div>
                <div className={s.innerBlock}>
                    <div>
                        <Icon name="mapPoint"/>
                    </div>
                    <div>
                        <div>Работаем по России и за рубежом</div>
                        <div>Услуги оказываются на русском, английском и итальяснском языках по всему миру, в том
                            числе
                            и дистанкционно
                        </div>
                    </div>
                </div>
                <div className={s.innerBlock}>
                    <div>
                        <Icon name="shure"/>
                    </div>
                    <div>
                        <div>Комплексная поддержка</div>
                        <div>Предлагаем полный комплекс услуг в сфере регистрации и защиты любых объектов
                            интеллектульной собственности
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.statistic}>
                <div>
                    <div>500<Plus/></div>
                    <div>Успешных дел</div>
                </div>
                <div>
                    <div>20<Plus/></div>
                    <div>Лет практики</div>
                </div>
                <div>
                    <div>1000<Plus/></div>
                    <div>Оказанных консультаций</div>
                </div>
                <div>
                    <div>300<Plus/></div>
                    <div>Зарегистрирово патентов</div>
                </div>
            </div>
        </div>
    )
}