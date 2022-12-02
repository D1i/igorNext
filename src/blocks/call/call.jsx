import {HeadText, Icon} from '../../components';

import s from './style.module.scss';

function Рyphen() {
    return (
        <div className={s.hyphen}>
            <Icon name="pyphen"/>
        </div>
    )
}

export function Call(props) {
    return (
        <div className={s.call}>
            <HeadText firstPart="Обратитесь " secondPart="к профессионалам"/>
            <div className={s.listContainer}>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Защищаем ваши права
                        <div>
                            <Icon name="shieldAccept"/>
                        </div></div>
                    <div className={s.list}>
                        <div><Рyphen/> В суде по интеллектуальным правам (СИП)</div>
                        <div><Рyphen/> в Палате по патентным спорам</div>
                        <div><Рyphen/> в Антимонопольных органаз</div>
                        <div><Рyphen/> Разработка договоров и документации (УФАС)</div>
                        <div><Рyphen/> в Суде</div>
                        <div><Рyphen/> в Полиции</div>
                        <div><Рyphen/> в Таможне</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Регистрируем
                        <div>
                            <Icon name="accept"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> Товарные знаки</div>
                        <div><Рyphen/> Промышленные образцы</div>
                        <div><Рyphen/> Наименования мест происхождения товаров</div>
                        <div><Рyphen/> Программы для ЭВМ и базы данных</div>
                        <div><Рyphen/> Географические указания</div>
                        <div><Рyphen/> Изобретения</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Защищаем
                        <div>
                            <Icon name="monoliteShield"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> от недопросовестной конкуренции</div>
                        <div><Рyphen/> незаконной рекламы и контрафакта</div>
                        <div><Рyphen/> Незаконного использования и нарушения прав</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Участвуем в спорах по защите
                        <div>
                            <Icon name="dialog"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> Товарных знаков и логотипов</div>
                        <div><Рyphen/> Изобретений, полезных моделей, промышленных образцов</div>
                        <div><Рyphen/> Фирменных наименований и коммерческих обозначений</div>
                        <div><Рyphen/> Авторских и смежных прав</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Составляем и регистрируем
                        <div>
                            <Icon name="paper"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> Лицензионные договоры</div>
                        <div><Рyphen/> Договоры коммерческой концессии</div>
                        <div><Рyphen/> Договоры отчуждения исключетльных прав на объекты интеллектуальной собственности
                        </div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Авторское право
                        <div>
                            <Icon name="waterVoidShield"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> Депонирование произведений</div>
                        <div><Рyphen/> Защита авторских и смежных прав</div>
                        <div><Рyphen/> Защита авторских прав в Интернете</div>
                        <div><Рyphen/> Составление договоров</div>
                        <div><Рyphen/> Оспаривание авторства</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Защищаем ваши права в сети Интернет <div>
                        <Icon name="ithernet"/>
                    </div></div>
                    <div className={s.list}>
                        <div><Рyphen/> При доменных спорах</div>
                        <div><Рyphen/> Копировании контента сайта</div>
                        <div><Рyphen/> Обнаружении Сайта двойника</div>
                        <div><Рyphen/> Нарушении прав на товарные знаки, объекты авторских прав</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Фиксация доказательств
                        <div>
                            <Icon name="images"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> Аудио и видеозаписей в сети Интернет</div>
                        <div><Рyphen/> Электронной переписки</div>
                        <div><Рyphen/> Сайта-двойника, контента сайта</div>
                        <div><Рyphen/> Объектов авторского, смежного и патентного права</div>
                        <div><Рyphen/> Закупка контрафактного товара</div>
                        <div><Рyphen/> Документов, чертежей, изображений, товарных знаков</div>
                        <div className={s.more}>Подробнее</div>
                    </div>
                </div>
                <div className={s.listParaghraf}>
                    <div className={s.paraghrafHeader}>Иные услуги
                        <div>
                            <Icon name="elipseAccept"/>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div><Рyphen/> Дистанционное обслуживание</div>
                        <div><Рyphen/> Досудебное урегулирование споров</div>
                        <div><Рyphen/> Представительство в иногородних судах</div>
                    </div>
                </div>
            </div>
        </div>
    )
}