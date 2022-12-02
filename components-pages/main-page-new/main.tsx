import {
    Examples,
    GetQuestion,
    OurAdvantages,
    OurTeam,
    OurTrust,
    QA,
    Reviews,
    Services,
    TurnProfessionals,
    WelcomeBlock
} from "./blocks";

export function MainPage() {
    return (
        <div>
            <WelcomeBlock/>
            <OurAdvantages/>
            <TurnProfessionals/>
            <Reviews/>
            <OurTeam/>
            <Examples/>
            <Services/>
            <QA/>
            <GetQuestion/>
            <OurTrust/>
        </div>
    )
}