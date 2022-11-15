import {
    Header,
    WelcomeBlock,
    OurAdvantages,
    TurnProfessionals,
    Reviews,
    OurTeam,
    Examples,
    Services,
    QA, GetQuestion, OurTrust, Footer
} from "./blocks";

export function Main(props: any) {
    return (
        <div>
            <Header onCloseCallSend={props.onCloseCallSend}/>
            <WelcomeBlock onCloseCallSend={props.onCloseCallSend}/>
            <OurAdvantages/>
            <TurnProfessionals/>
            <Reviews onCloseCallSend={props.onCloseCallSend}/>
            <OurTeam/>
            <Examples/>
            <Services/>
            <QA/>
            <GetQuestion/>
            <OurTrust/>
            <Footer/>
        </div>
    )
}