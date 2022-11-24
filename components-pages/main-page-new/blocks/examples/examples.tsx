import {useState} from "react";
import Image from "next/image";

import {Icon} from "@components/index";

import logos from '@components-pages/main-page-new/logos'

import s from './style.module.scss';

const casesList = [
    {
        imgUrl: logos[0],
        description: 'Помогли крупному заводу преодолеть отказ Роспатента в регистрации товарного знака',
        status: 'Помогли'
    },
    {
        imgUrl: logos[1],
        description: 'Защитили немеского производителя от незаконного использования его товарного знака',
        status: 'Защитили'
    },
    {
        imgUrl: logos[2],
        description: 'Защитили от взыскания 5 млн ₽ производителя медицинских информационных систем',
        status: 'Защитили'
    },
    {imgUrl: logos[3], description: 'Что-то 1', status: 'Сделали)'},
    {imgUrl: logos[4], description: 'Что-то 2', status: 'Что-то еще'},
];

function CaseList(props: any) {
    // props types
    // cases: [{
    // imgUrl: string
    // description: string
    // status: string
    //}]
// ОГРАНИЧЕНИЕ ПО ПЕРЕКЛЮЧЕНИЕМ ЕСТЬ НА 3 ЭЛМЕНЕТА, НО НЕ НА 2, ИСПРАВИТЬ!
    const casesLayout: any = [];

    if (props.shortMode) {
        props.cases.forEach((p: any, i: any) => {
            if (props.centerCaseId - i >= 0 && props.centerCaseId - i <= 1) {
                casesLayout.push(
                    <div className={s.caseContainer}>
                        <div>
                            <Image className={s.caseLogo} src={p.imgUrl} alt={p.name}/>
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

    } else {
        props.cases.forEach((p: any, i: any) => {
            if (Math.abs(props.centerCaseId - i) < 2) {
                casesLayout.push(
                    <div className={s.caseContainer}>
                        <div>
                            <Image className={s.caseLogo} src={p.imgUrl ? p.imgUrl : Icon} alt={p.name}/>
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
}

export function Examples(props: any) {
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
            <div className={`${s.fullSizeController} ${s.caseList}`}>
                <CaseList centerCaseId={currentCenterCase} cases={casesList}/>
            </div>
            <div className={`${s.shortController} ${s.caseList}`}>
                <CaseList shortMode={true} centerCaseId={currentCenterCase} cases={casesList}/>
            </div>
        </div>
    )
}