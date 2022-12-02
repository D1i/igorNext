import {Button, Icon} from '../../components';

import s from './style.module.scss';

function Check() {
    return (
        <div className={s.check}>
            <Icon name="check"/>
        </div>
    )
}

export function StartingBlock(props) {
    return (
        <div className={s.startBlockContainer}>
            <h1 className={s.head}>Бюро по защите интеллектуальных прав</h1>
            <div className={s.subHead}>Решаем любые задачи по защите и регистрации интеллектуальных прав на протяжении
                20 лет
            </div>
            <div className={s.list}>
                <div>
                    <Check/>
                    <div>Бесплатная консультация юристов-экспертов</div>
                </div>
                <div>
                    <Check/>
                    <div>Регистрация интеллектуальной собственности</div>
                </div>
                <div>
                    <Check/>
                    <div>Представление интересов в суде и гос. органах</div>
                </div>
                <div>
                    <Check/>
                    <div>Разработка договоров и документации</div>
                </div>
            </div>
            <div className={s.blurBox}>
                <div className={s.blurBoxRow}>
                    <div className={s.blurBoxHeader}>Защита ваших прав должна быть грамотной и достойной</div>
                    <div className={s.blurBoxText}>Оставьте заявку и получите бесплатную консультацию от ведущих юристов
                        фирмы
                    </div>
                    <div className={s.button}><Button>Заказать консультацию</Button></div>
                </div>
                <div>
                    <div className={s.blurBoxPharagrafExtend}>
                        <Icon name="headphones"/>
                        <div className={s.blurBoxSpcialInfo}>
                            <div>до 20 минут</div>
                            <div>Онлайн-консультация эксперта</div>
                        </div>
                    </div>
                    <div className={s.blurBoxPharagraf}><Check/>Юристы с профильным образованием</div>
                    <div className={s.blurBoxPharagraf}><Check/>Начнем работать в день заявки</div>
                </div>
                <div>
                    <div className={s.blurBoxPharagrafExtend}>
                        <Icon name="procent"/>
                        <div className={s.blurBoxSpcialInfo}>
                            <div>Скидка 5%</div>
                            <div>на услуги при оставлении заявки на сайте</div>
                        </div>
                    </div>
                    <div className={s.blurBoxPharagraf}><Check/>Фиксированная цена без доплат</div>
                    <div className={s.blurBoxPharagraf}><Check/>Помогаем в самых сложных спорах</div>
                </div>
            </div>
        </div>
    )
}