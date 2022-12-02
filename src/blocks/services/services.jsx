import {useEffect, useState} from "react";

import axios from "axios";

import s from './style.module.scss';

// const services = [
//     {
//         name: 'Товарные знаки',
//         subHead: [
//             {
//                 name: 'Регистрация товарного знака в россии',
//                 description: 'Мы проверим ваш знак на соответствие требованиям законодательств и за регистрируем его в Роспатенте'
//             },
//             {
//                 name: 'Международная регистрация товарного знака',
//                 description: 'Осуществим регистрацию товарного знака в выбранной стране или множеств стран'
//             },
//             {
//                 name: 'Регистрация географического наименования',
//                 description: 'Поможем зарегистрировать географическое название в качестве наименования места происхождения товара'
//             },
//             {
//                 name: 'Бесплатный поиск товарных знаков',
//                 description: 'Бесплатный, быстрый поиск по базе зарегистрированных свидетельств в Роспатенте'
//             },
//             {
//                 name: 'Продление товарного знака',
//                 description: 'Раз в 10 лет необходимо продлевать действие товарного знака'
//             },
//             {
//                 name: 'Внесение изменений в товарный знак',
//                 description: 'В случае изменений в наименовании / адресе правообладателя товарного знака в реестр товарных знаков необходимо внести изменения'
//             },
//             {
//                 name: 'Изменения в заявку на товарный знак',
//                 description: 'Правильно оформим и направим документы в патентное ведомство о внесении правок в заявку на товарный знак'
//             },
//             {
//                 name: 'Возражение против решения Роспатента',
//                 description: 'Юристы нашего патентного бюро помогут оформить мотивированное возражение против актов Роспатента'
//             },
//             {
//                 name: 'Ответы на запросы ведомства',
//                 description: 'Юристы по защите интеллектуальной собственности помогут правильно оформить документы и направят их в установленный срок'
//             },
//             {
//                 name: 'Заключение о нарушении товарного знака',
//                 description: 'Если права на ваш товарный знак нарушаются, то наши юристы помогут провести экспертизу и защитить ваши интересы в суде'
//             },
//             {
//                 name: 'Возражение против заявки на товарный знак',
//                 description: 'Составим обоснованное возражение на регистрацию товарного знака недоросовестными конкурентами или защитим правообладателя знака'
//             },
//             {
//                 name: 'Ускорение регистрации товарного знака',
//                 description: 'Ускорение регистрации товарного знака'
//             },
//         ],
//     },
//     {
//         name: 'Патенты',
//         subHead: [],
//     },
//     {
//         name: 'Промышленные образцы, дизайн',
//         subHead: [],
//     },
//     {
//         name: 'Авторское право',
//         subHead: [],
//     },
//     {
//         name: 'Сайт и доменное имя',
//         subHead: [],
//     },
//     {
//         name: 'Договоры',
//         subHead: [],
//     },
//     {
//         name: 'Программы',
//         subHead: [],
//     },
//     {
//         name: 'Защита и оспаривание',
//         subHead: [],
//     },
// ];

function ServiceChapter(props) {

    const chapters = props.chapters.map(p =>
        <div className={s.chapterContainer}>
            <div className={s.chapterHeader}>{p.name}</div>
            <div className={s.chapterDescription}>{p.description}</div>
        </div>
    )

    return (
        <div className={s.serviceChapter}>
            {chapters}
        </div>
    )
}

function Controllers(props) {

    const headers = props.chapters.map((p, i) => <div onClick={() => props.onSelect(i)}
                                                      className={`${s.chapterHeader} ${i === props.currentChapter && s.selected}`}>{p.name}</div>);

    return (
        <div>
            <div className={s.chapters}>
                {headers}
            </div>
            <div>
                <div className={s.headerServicesList}>{props.chapters[props.currentChapter].name}</div>
                <ServiceChapter chapters={props.chapters[props.currentChapter].subHead}/>
            </div>
        </div>
    )
}

export function Services(props) {
    const [currentChapterId, setCurrentChapterId] = useState(0);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9990/services").then(p => {
            console.log(p.data)
            setServicesList(p.data)
        })
    }, []);

    const chapters = servicesList;
    if (!chapters.length) return <div></div>;
    return (
        <div className={s.container}>
            <div className={s.header}>
                Чем может <div className={s.otherColorHeader}>помочь</div> наше патентное бюро
            </div>
            <div className={s.servicesContainer}>
                <div>
                    <Controllers
                        chapters={chapters}
                        currentChapter={currentChapterId}
                        onSelect={setCurrentChapterId}
                    />
                </div>
            </div>
        </div>
    )
}