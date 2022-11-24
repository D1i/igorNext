import {useEffect, useState} from "react";

import {API, endpoints} from "../../API";

import s from './style.module.scss';

function ServiceChapter(props: any) {

    const chapters = props.chapters.map((p: any) =>
        <div key={`${p.name}`} className={s.chapterContainer}>
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

function MobileChapter(props: any): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle(): void {
        setIsOpen(!isOpen);
    }

    if (!props.chapter) {
        return <></>;
    }

    const content = props.chapter.subHead.map((p: any) => {
        return (
            <div key={`${p.name}`}>
                <div className={s['mobile-controller-container-sub-header']}>{p.name}</div>
                <div className={s['mobile-controller-container-description']}>{p.description}</div>
            </div>
        )
    })

    return (
        <div>
            <div className={s['mobile-controller-container-head']} onClick={handleToggle}>
                {props.chapter.name}
                <div className={s[`mobile-controller-container-icon${isOpen && '-rotate'}`]}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            {isOpen && content}
        </div>
    )
}

function MobileControllers(props: any) {
    const chapters = props.chapters.map((p: any, i: any) => <MobileChapter chapter={p} key={`${p.name}-${i}`}/>)

    return (<div className={s['mobile-controller-container']}>{chapters}</div>);
}

function Controllers(props: any) {

    const headers = props.chapters.map((p: any, i: any) => <div key={`${p.name}-${i}`} onClick={() => props.onSelect(i)}
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

export function Services(props: any) {
    const [currentChapterId, setCurrentChapterId] = useState(0);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        API.GET(endpoints.services, (p: any) => {
            setServicesList(p);
        })
    }, []);

    const chapters = servicesList;
    if (!chapters.length) return <div></div>;
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span>Чем может </span>
                <span className={s.otherColorHeader}>помочь</span>
                <span>наше патентное бюро</span>
            </div>
            <div className={s.servicesContainer}>
                <div>
                    {/*<Controllers
                        chapters={chapters}
                        currentChapter={currentChapterId}
                        onSelect={setCurrentChapterId}
                    />*/}
                    <MobileControllers chapters={chapters}/>
                </div>
            </div>
        </div>
    )
}