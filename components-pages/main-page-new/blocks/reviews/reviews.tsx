import {useState} from "react";

import {HeadText, Icon} from "@components/index";
import {SliderReview} from "./components";
import Image from "next/image";

import s from './style.module.scss';

const pseudoApiReviews = [
    {
        name: 'aravia',
        logo: '',
        review: 'ООО «Стимул-колор косметик» имеет довольно продолжительный и успешный опыт сотрудничества с компанией «Бюро по защите интеллектуальных прав» сразу по нескольким арбитражным делам, производство по которым осуществлялось в 2020–2021 годах. И, надо отметить, что этот опыт оставил самые положительные впечатления. \n' +
            'Поразительно чуткое внимательное отношение к клиенту и его интересам, тщательное изучение и анализ материалов дел, выработка на этой основе абсолютно верной, практически беспроигрышной тактики поведения в судах, квалифицированная подготовка необходимых документов, как правило, опирающаяся на заключения привлекаемых авторитетных экспертов, имеющих соответствующую аккредитацию. И все это основывается на высоком профессионализме, больших познаниях юриспруденции и патентоведении, личном богатом опыте работы, включающим судебную практику Ермолаевой Натальи Васильевны. Желаю дальнейших успехов и процветания компании, работающей под лозунгом «Все для клиента и отстаивания его интересов!». Жаль только, что сотрудничество с Бюро возможно, как правило, по неприятным для нас клиентов делам и тяжбам. А так бы вели сотрудничество с Бюро и по другим всегда возникающим в бизнесе вопросам.',
        layoutApruve: '',
        reviewer: 'А.А.Галустян',
        role: 'ООО “Стимул-колор косметик”, коммерческий директор',
    },
    {
        name: 'beauty',
        logo: '',
        review: 'Ну эdsaто как бы отзыв, но не настоящий, это псеводозыв, написанный для разнообразия текстов, Lorem почему-то отказался работать(',
        layoutApruve: '',
        reviewer: 'unknown',
        role: 'NONE',
    },
    {
        name: 'beauty',
        logo: '',
        review: 'Ну это ка1к бы отзыв, но не настоящий, это псеводозыв, написанный для разнообразия текстов, Lorem почему-то отказался работать(',
        layoutApruve: '',
        reviewer: 'unknown',
        role: 'NONE',
    }, {
        name: 'beauty',
        logo: '',
        review: 'Ну это как 2бы отзыв, но не настоящий, это псеводозыв, написанный для разнообразия текстов, Lorem почему-то отказался работать(',
        layoutApruve: '',
        reviewer: 'unknown',
        role: 'NONE',
    }, {
        name: 'beauty',
        logo: '',
        review: 'Ну это к3ак бы отзыв, но не настоящий, это псеводозыв, написанный для разнообразия текстов, Lorem почему-то отказался работать(',
        layoutApruve: '',
        reviewer: 'unknown',
        role: 'NONE',
    },
]

export function Reviews(props: any) {
    const [currentReview, setCurrentReview] = useState(0);

    function genReviewsLogoSelector(list: any) {
        const reviewsElements = list.map((p: any, i: any) =>
            <div key={`${p.name}-${i}`} onClick={() => setCurrentReview(i)}
                 className={`${s.logo} ${i === currentReview && s.selectedLogo}`}
            >
                <Image
                    width="160" height="70px"
                    src={require(`./img/${p.name}.png`)}
                    alt={`${p.name} logo`}/>
            </div>);
        return reviewsElements;
    }

    const reviewsElements = genReviewsLogoSelector(pseudoApiReviews);

    return (
        <div className={s.reviewersContainer}>
            <HeadText firstPart="Отзывы " secondPart="компаний"/>
            <div>
                <div className={s.reviewersLogo}>{reviewsElements}</div>
                <div className={s.sliderWrapper}>
                    <SliderReview reviews={pseudoApiReviews} current={currentReview} setCurrent={setCurrentReview}/>
                </div>
            </div>
            <div className={s.garantBlock}>
                <div>
                    <div>Оставьте заявку и получите бесплатную консультацию от ведущих юристов фирмы</div>
                    <div className={s.garantBlockButton}>
                        <div onClick={props.onCloseCallSend}>Заказать консультацию</div>
                    </div>
                </div>
                <div>
                    <div className={s.descriptionContainer}>
                        <Icon name="goldHeadphones"/>
                        <div className={s.descriptionHeaders}>
                            <div className={s.offer}>до 20 минут</div>
                            <div className={s.offerDescription}>Онлайн-консультация эксперта</div>
                        </div>
                    </div>
                    <div>
                        <div className={s.garantedServices}><Icon name="check"/>
                            <div>Юристы с профильным образованием</div>
                        </div>
                        <div className={s.garantedServices}><Icon name="check"/>
                            <div>Начнем работать в день заявки</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={s.descriptionContainer}>
                        <Icon name="goldProcent"/>
                        <div className={s.descriptionHeaders}>
                            <div className={s.offer}>Скидка 5%</div>
                            <div className={s.offerDescription}>на услуги при оставлении заявки на
                                сайте
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={s.garantedServices}><Icon name="check"/>
                            <div>Фиксированная цена без доплат</div>
                        </div>
                        <div className={s.garantedServices}><Icon name="check"/>
                            <div>Помогаем в самых сложных спорах</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}