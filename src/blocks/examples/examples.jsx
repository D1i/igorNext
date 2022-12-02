import {Icon} from "../../components";

import s from './style.module.scss';
import {useState} from "react";

const casesList = [
    {
        imgUrl: '',
        description: 'Помогли крупному заводу преодолеть отказ Роспатента в регистрации товарного знака',
        status: 'Помогли'
    },
    {
        imgUrl: '',
        description: 'Защитили немеского производителя от незаконного использования его товарного знака',
        status: 'Защитили'
    },
    {
        imgUrl: '',
        description: 'Защитили от взыскания 5 млн ₽ производителя медицинских информационных систем',
        status: 'Защитили'
    },
    {imgUrl: '', description: 'Что-то 1', status: 'Сделали)'},
    {imgUrl: '', description: 'Что-то 2', status: 'Что-то еще'},
];

function CaseList(props) {
    // props types
    // cases: [{
    // imgUrl: string
    // description: string
    // status: string
    //}]

    const casesLayout = [];

    props.cases.forEach((p, i) => {
        if (Math.abs(props.centerCaseId - i) < 2) {
            casesLayout.push(
                <div className={s.caseContainer}>
                    <div>
                        <img className={s.caseLogo} src={p.url} alt={p.url}/>
                        <div>{p.description}</div>
                    </div>
                    <div>
                        <div className={s.status}><Icon name="check"/>{p.status}</div>
                    </div>
                </div>
            )
        }
    });

    return casesLayout;
}

export function Examples(props) {
    const [currentCenterCase, setCurrentCenterCase] = useState(1);

    function handleSwitchLeft() {
        if (currentCenterCase === 1) {
            return;
        }
        setCurrentCenterCase(currentCenterCase - 1);
    }

    function handleSwitchRight() {
        if (currentCenterCase === casesList.length - 2) {
            return;
        }
        setCurrentCenterCase(currentCenterCase + 1);
    }

    return (
        <div className={s.examplesContainer}>
            <div className={s.headerContainer}>
                <div className={s.header}>Кейсы</div>
                <div className={s.controller}>
                    <div onClick={handleSwitchLeft}><Icon name="switch"/></div>
                    <div onClick={handleSwitchRight}><Icon name="switch"/></div>
                </div>
            </div>
            <div className={s.caseList}>
                <CaseList centerCaseId={currentCenterCase} cases={casesList}/>
            </div>
        </div>
    )
}