import Judge from "../public/icons/judge.svg";
import Agreement from "../public/icons/agreement.svg";
import Law from "../public/icons/law.svg";
import Page from "../public/icons/page.svg";
import Court from "../public/icons/court.svg";
import Message from "../public/icons/message.svg";
import Document from "../public/icons/document.svg";
import Inkwell from "../public/icons/inkwell.svg";

import { ServiceCardDataInterface } from "@components/service-card/service-card.types";

const serviceCardData: ServiceCardDataInterface[] = [
  {
    href: "/zashchishchayem-vashi-prava",
    title: "Защищаем Ваши права",
    description: [
      "В Суде по интеллектуальным правам (СИП)",
      "Палате по патентным спорам (ППС)",
      "В Антимонопольных органах (УФАС)",
      "В Суде",
      "В Полиции",
      "В Таможне",
    ],
    Icon: Judge,
  },
  {
    href: "/registriruem",
    title: "Регистрируем",
    description: [
      "Товарные знаки",
      "Промышленные образцы",
      "Наименования мест происхождения товаров",
      "Программы для ЭВМ и базы данных",
      "Географические указания",
      "Изобретения",
    ],
    Icon: Agreement,
  },
  {
    href: "/zashchishchayem-ot",
    title: "Защищаем от",
    description: [
      "Недобросовестной конкуренции",
      "Незаконной рекламы и контрафакта",
      "Незаконного использования и нарушения прав",
    ],
    Icon: Judge,
  },
  {
    href: "/uchavstvuem-v-sporah-po-zashite",
    title: "Участвуем в спорах по защите",
    description: [
      "Товарных знаков и логотипов",
      "Изобретений, полезных моделей, промышленных образцов",
      "Фирменных наименований и коммерческих обозначений",
      "Авторских и смежных прав",
    ],
    Icon: Law,
  },
  {
    href: "/sostavlyaem-i-regystriruem",
    title: "Составляем и регистрируем",
    description: [
      "лицензионные договоры",
      "договоры коммерческой концессии",
      "договоры отчуждения исключительных прав на объекты ИС",
    ],
    Icon: Page,
  },
  {
    href: "/avtorskoe-pravo",
    title: "Авторское право",
    description: [
      "Депонирование произведений",
      "Защита авторских и смежных прав",
      "Защита авторских прав в интернете",
      "Составление договоров",
      "Оспаривание авторства",
    ],
    Icon: Inkwell,
  },
  {
    href: "/zashchishchayem-vashi-prava-v-seti",
    title: "Защищаем Ваши права в сети Интернет при",
    description: [
      "Доменных спорах",
      "Копировании контента сайта",
      "Обнаружении «сайта-двойника»",
      "Нарушении прав на товарные знаки, объекты авторских и смежных прав",
    ],
    Icon: Court,
  },
  {
    href: "/fiksacya-docazatelstv",
    title: "Фиксация доказательств",
    description: [
      "Аудио и видеозаписей в сети Интернет",
      "Электронной переписки",
      "Cайта-двойника, контента сайта",
      "Объектов авторского, смежного и патентного права",
      "Закупка контрафактного товара",
      "Документов, чертежей, изображений, товарных знаков…",
    ],
    Icon: Message,
  },
  {
    href: "/innye-uslugi",
    title: "Иные услуги",
    description: [
      "Дистанционное обслуживание",
      "Досудебное урегулирование споров",
      "Представительство в иногородних судах",
    ],
    Icon: Document,
  },
];

export default serviceCardData;
