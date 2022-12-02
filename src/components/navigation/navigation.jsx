import {Link, ContactInfo} from "./components";
import {Button} from "../button";
import {BurgerMenu} from "../burger-menu";

import s from './style.module.scss';

export function Navigation(props) {
    return (
        <div className={s.navigationContainer}>
            <div className={s.links}>
                <Link>Главная</Link>
                <Link>О компании</Link>
                <Link>Услуги</Link>
                <Link>Цены</Link>
                <Link>Портфолио</Link>
                <Link>Команда</Link>
                <Link>Контакты</Link>
            </div>
            <div className={s.button}>
                <Button>Бесплатная консультация</Button>
            </div>
            <ContactInfo/>
            <div className={s.burgerMenu}>
                <BurgerMenu/>
            </div>
        </div>
    )
}