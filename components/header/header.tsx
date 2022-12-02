import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import disableScroll from 'disable-scroll';

import api from "@API/index";

import {Icon} from "@components/index"; // TODO Разобраться почему
import {useAppDispatch} from "@store/index";

import s from './style.module.scss';

// TODO Отделить бок ссылко от блока с кнопкой и данными. СМ в макете
// TODO Передать эту задачу до background img. СДелать background img стабильными
// TODO Сделать Pixel Perfect

export function Header() {
    const [burgerMenuHasOpen, setBurgerMenuHasOpen] = useState(false);
    const [city, setCity] = useState('Город не опознан');

    const dispatch = useAppDispatch();

    const burgerMenu = useMemo(() => {
        if (burgerMenuHasOpen) {
            return (<div className={s.burgerMenuContainer}>
                <div className={s.linkContainer}>
                    <div>
                        <div className={s.link}><Link href='/pages'>Главная</Link></div>
                        <div className={s.link}><Link href='/pages/about'>О компании</Link></div>
                    </div>
                    <div>
                        <div className={s.link}><Link href='/services'>Услуги</Link></div>
                        <div className={s.link}><Link href='/team'>Команда</Link></div>
                    </div>
                </div>
                <div>
                    <div className={s.location}>
                        <div><Icon name='location'/></div>
                        <div>{city}</div>
                        <div>Выбрать</div>
                    </div>
                    <div onClick={handleOpenCallSendBlock} className={s.button}>Бесплатная консультация</div>
                </div>
            </div>)
        }
    }, [burgerMenuHasOpen, handleOpenCallSendBlock])

    useEffect(() => {
        api.getUserCity().then(p => {
            setCity(p)
        });
    }, []);

    function toggleMenu() {
        setBurgerMenuHasOpen(!burgerMenuHasOpen);
    }

    function handleOpenCallSendBlock() {
        dispatch({type: 'isOpenCallSend', payload: true})
    }

    useEffect(() => {
        burgerMenuHasOpen ? disableScroll.on() : disableScroll.off();
    }, [burgerMenuHasOpen]);

    return (
        <div>
            <div className={s.welcomeBlock}>
                <div className={s.welcomeBlockInnerWrapper}>
                    <div className={s.mainLogo}><Link href="/pages"><Icon name='logo'/></Link></div>
                    <div className={s['center-container']}>
                        <div className={s.ourExpiriens}>На защите интеллектуальной собственности более 20 лет</div>
                        <div className={s.location}>
                            <div><Icon name='location'/></div>
                            <div>{city}</div>
                            <div>Выбрать</div>
                        </div>
                    </div>
                    <div onClick={handleOpenCallSendBlock} className={s.button}>Бесплатная консультация</div>
                    <div className={s.social}>
                        <Link href='@components/header/header#'><a href='@components/header/header#'
                                                                   rel="noopener noreferrer"><Icon
                            name='youtube'/></a></Link>
                        <Link passHref href='viber://chat?number=%2B79371770210'><a
                            href='viber://chat?number=%2B79371770210' target="_blank" rel="noopener noreferrer"><Icon
                            name='whatsapp'/></a></Link>
                        <Link passHref href='https://wa.me/+79371770210'><a href='https://wa.me/+79371770210'
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"><Icon
                            name='viber'/></a></Link>
                        <Link passHref href='https://t.me/mariia_erm'><a href='https://t.me/mariia_erm' target="_blank"
                                                                         rel="noopener noreferrer"><Icon
                            name='telegramm'/></a></Link>
                    </div>
                </div>
            </div>
            <div className={`${s.header} ${s.desctopVersion}`}>
                <div className={s.headerWrapperBlockInner}>
                    <div className={s['link-container']}>
                        <div className={s.link}><Link href='/'>Главная</Link></div>
                        <div className={s.link}><Link href='/about'>О компании</Link></div>
                        <div className={s.link}><Link href='/services'>Услуги</Link></div>
                        <div className={s.link}><Link href='/team'>Команда</Link></div>
                    </div>
                    <div onClick={handleOpenCallSendBlock} className={s.button}>Бесплатная консультация</div>
                    <div className={s.contactData}>
                        <div className={s.telNumber}><a href="tel:+7 (937) 177-02-10">+7 (937) 177-02-10</a></div>
                        <div className={s.email}><a href="mailto:info@ermolaeva-patent.ru">info@ermolaeva-patent.ru</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.mobileVersion}>
                <div onClick={handleOpenCallSendBlock} className={s.button}>Бесплатная консультация</div>
                <div className={s.contactData}>
                    <div className={s.telNumber}><a href="tel:+7 (937) 177-02-10">+7 (937) 177-02-10</a></div>
                    <div className={s.email}><a href="mailto:info@ermolaeva-patent.ru">info@ermolaeva-patent.ru</a>
                    </div>
                </div>
                <div className={s.burgerMenuOpen} onClick={toggleMenu}>
                    <Icon name={burgerMenuHasOpen ? "close" : "burgerMenu"}/>
                </div>
            </div>
            {burgerMenu}
        </div>
    )
}