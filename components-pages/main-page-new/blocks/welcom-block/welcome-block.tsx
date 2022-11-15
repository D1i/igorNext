import Image from "next/image";

import {Icon} from "@components/icon";

import s from './style.module.scss';

export function WelcomeBlock(props: any) {
    return (
        <div className={s.backgroundWrapper}>
            <div className={s.contentContainer}>
                {/*<div className={s.background}>*/}
                {/*<Image width="2560" height="1280" placeholder="blur" src={require("./img/img.png")}/>*/}
                {/*</div>*/}
                <div className={s.infoContainer}>
                    <h1 className={s.header}>Бюро по защите интеллектуальных прав</h1>
                    <div className={s.description}>Решаем любые задачи по защите и регистрации интеллектуальных прав на
                        протяжении 20 лет
                    </div>
                    <div className={s.benefitsList}>
                        <div><Icon name="check"/>Бесплатная консультация юристов-экспертов</div>
                        <div><Icon name="check"/>Регистрация интеллектуальной собственности</div>
                        <div><Icon name="check"/>Представление интересов в суде и гос. органах</div>
                        <div><Icon name="check"/>Разработка договоров и документации</div>
                    </div>
                </div>
                <div className={s.guarantees}>
                    <div className={s.blockWithButton}>
                        <div className={s.header}>Защита ваших прав должна быть грамотной и достойной</div>
                        <div className={s.description}>Оставьте заявку и получите бесплатную консультацию от ведущих
                            юристов
                            фирмы
                        </div>
                        <div className={s.button} onClick={props.onCloseCallSend}>Заказать консультацию</div>
                    </div>
                    <div>
                        <div className={s.promiseDescriptions}>
                            <div><Icon name="headphones"/></div>
                            <div>
                                <div className={s.header}>до 20 минут</div>
                                <div className={s.description}>Онлайн-консультация эксперта</div>
                            </div>
                        </div>
                        <div className={s.benefitsList}>
                            <div className={s.header}><Icon name="check"/>Юристы с профильным образованием</div>
                            <div className={s.description}><Icon name="check"/>Начнем работать в день заявки</div>
                        </div>
                    </div>
                    <div>
                        <div className={s.promiseDescriptions}>
                            <div><Icon name="procent"/></div>
                            <div>
                                <div className={s.header}>Скидка 5%</div>
                                <div className={s.description}>на услуги при оставлении заявки на сайте</div>
                            </div>
                        </div>
                        <div className={s.benefitsList}>
                            <div><Icon name="check"/>Фиксированная цена без доплат</div>
                            <div><Icon name="check"/>Помогаем в самых сложных спорах</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}