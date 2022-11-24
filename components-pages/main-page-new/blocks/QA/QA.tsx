import {useMemo, useState} from "react";

import {HeadText, Icon} from "@components/index";

import s from './style.module.scss';

const QABlocks = [
    {
        header: 'Как подтверждается профессионализм Бюро по защите интеллектуальных прав?',
        description: 'Команда Бюро состоит из практикующих юристов, имеющих профильное высшее образование в сфере интеллектуальной собственности. Кроме того, мы регулярно повышаем квалификацию в ведущих Российских и международных профильных организациях. За многолетний опыт успешной работы мы провели более 300 консультаций и успешно завершили более 150 судебных дела.'
    },
    {
        header: 'Какие форматы сотрудничества? могу ли я просто проконсультироваться?',
        description: 'Да, у нас есть разовые письменные и устные консультации юристов по интеллектуальной собственности',
    },
    {
        header: 'Есть ли гарантия на услуги?',
        description: 'Мы стремимся выполнять все обязательства, прописанные в договоре на оказания услуг и приложим вс усилия для достижения желанного Вами результата. Однако, письменных гарантий мы не предоставляем.',
    },
    {
        header: 'Чем вы отличаетесь от конкурентов?',
        description: 'Бюро по защите интеллектуальных прав специализируется исключительно на вопросах, связанных с регистрацией, защитой и распоряжением прав объекты интеллектуальной собственности. Мы концентрируем все свое внимание на данной сфере юриспруденции, регулярно изучаем судебную практику и повышаем квалификацию. Кроме того, мы оказываем услуги дистанционно по всему миру на русском, английском и итальянском языках, а также оказываем услуги по переводу документации.',
    },
    {
        header: 'Как получить помощь юриста по интеллектуальным правам?',
        description: 'Заполните форму обратной связи на данной странице, либо позвоните нам по номеру +7 (937) 177-02-10 и получите бесплатную первичную консультацию юриста',
    },
];

function QABlock(props: any) {
    const [isOpen, setOpen] = useState(false);

    function handleToggle() {
        setOpen(!isOpen);
    }

    return (
        <div className={s.blockContainer}>
            <div onClick={handleToggle} className={s['btn']}><div className={s['icon']}><Icon name={isOpen ? 'short' : 'collapse'}/></div></div>
            <div>
                <div onClick={handleToggle} className={s.blockContainerHeader}>{props.blockContent.header}</div>
                <div className={isOpen ? s.blockContainerDescription : s.hideContent}>
                    {props.blockContent.description}
                </div>
            </div>
        </div>
    )
}

function QAController(props: any) {

    const blocks = useMemo(() => QABlocks.map(p => (
        <QABlock key={p.header} blockContent={p}/>
    )), [])

    return (
        <div className={s.QABlocksContainer}>
            {blocks}
        </div>
    )
}

export function QA(props: any) {
    return (
        <div className={s.QAContainer}>
            <HeadText firstPart='Вопросы ' secondPart='и ответы'/>
            <div className={s.QAController}>
                <QAController/>
            </div>
        </div>
    )
}