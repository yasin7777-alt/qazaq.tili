import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  X,
  Trophy,
  Sparkles,
  RotateCcw,
  CircleHelp,
  Check,
  Lightbulb,
  ArrowRight,
  CircleCheck,
  BookOpen,
  Music2,
  Landmark,
  Flower2,
  ArrowUpRight,
  Clock3,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  Search,
  Sprout,
  Bookmark,
  Award,
  Layers,
  ChevronDown,
  Menu,
  Play,
  ArrowDown,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import { JourneyRoute, KazakhstanMap, useJourney } from "./Journey";
import { useExperience } from "../lib/useExperience";
import { OrnamentTrace } from "./OrnamentTrace";
function Modal({ children: a, onClose: i, title: o, wide: c = !1 }) {
  const u = React.useRef(null),
    p = React.useRef(i);
  return (
    React.useEffect(() => {
      p.current = i;
    }, [i]),
    React.useEffect(() => {
      const d = document.activeElement,
        y = document.body.style.overflow;
      ((document.body.style.overflow = "hidden"), u.current?.focus());
      const g = (m) => {
        if ((m.key === "Escape" && p.current(), m.key === "Tab" && u.current)) {
          const x = Array.from(
              u.current.querySelectorAll(
                'a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]',
              ),
            ).filter((O) => O.offsetParent !== null),
            A = x[0],
            S = x[x.length - 1];
          if (!A) {
            m.preventDefault();
            return;
          }
          m.shiftKey &&
          (document.activeElement === A || document.activeElement === u.current)
            ? (m.preventDefault(), S.focus())
            : !m.shiftKey &&
              (document.activeElement === S ||
                document.activeElement === u.current) &&
              (m.preventDefault(), A.focus());
        }
      };
      return (
        document.addEventListener("keydown", g),
        () => {
          ((document.body.style.overflow = y),
            document.removeEventListener("keydown", g),
            d?.focus());
        }
      );
    }, []),
    (
      <motion.div
        className="modal-backdrop"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={i}
      >
        <motion.div
          ref={u}
          role="dialog"
          aria-modal="true"
          aria-label={o}
          tabIndex={-1}
          className={`modal-panel ${c ? "modal-wide" : ""}`}
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.98,
          }}
          transition={{
            duration: 0.22,
          }}
          onClick={(d) => d.stopPropagation()}
        >
          <button
            className="modal-close icon-button"
            aria-label="Жабу / Закрыть"
            onClick={i}
          >
            <X size={21} />
          </button>
          {a}
        </motion.div>
      </motion.div>
    )
  );
}
const translate = (a, i, o) => (a === "kz" ? i : o),
  categories = [
    {
      id: "language",
      title: "Тіл әлемі",
      titleRu: "Мир языка",
      description: "Әр сөздің артында — тұтас бір әлем.",
      descriptionRu: "За каждым словом — целый мир.",
      image: "/images/language.webp",
      tag: "ҮЙРЕН",
      tagRu: "ИЗУЧАЙ",
    },
    {
      id: "culture",
      title: "Мәдениет пен өнер",
      titleRu: "Культура и искусство",
      description: "Ұлттың үні. Даланың әуені.",
      descriptionRu: "Голос народа. Мелодия степи.",
      image: "/images/dombyra.webp",
      tag: "СЕЗІН",
      tagRu: "ПОЧУВСТВУЙ",
    },
    {
      id: "history",
      title: "Тарих пен тұлғалар",
      titleRu: "История и личности",
      description: "Өткенді таны. Болашақты түсін.",
      descriptionRu: "Познай прошлое. Пойми будущее.",
      image: "/images/turkestan.webp",
      tag: "ТАНЫ",
      tagRu: "ПОЗНАВАЙ",
    },
    {
      id: "traditions",
      title: "Салт-дәстүр",
      titleRu: "Традиции",
      description: "Ұрпақтан ұрпаққа жалғасқан мұра.",
      descriptionRu: "Наследие, объединяющее поколения.",
      image: "/images/steppe-yurt.webp",
      tag: "ДӘРІПТЕ",
      tagRu: "СОХРАНЯЙ",
    },
  ],
  lessons = [
    {
      id: "letters",
      category: "language",
      title: "Қазақ тілінің ерекше әріптері",
      titleRu: "Особые буквы казахского языка",
      intro: "Тілмен танысу дыбыстан басталады.",
      introRu: "Знакомство с языком начинается со звука.",
      body: [
        "Қазақ әліпбиіндегі Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І әріптеріне назар аудар. Олар сөздің дыбысталуын және мағынасын ажыратуға көмектеседі.",
        "Мысалы: әже — бабушка, ғалым — учёный, қала — город, аң — зверь, өнер — искусство, ұлт — нация, үй — дом, қаһарман — герой, тіл — язык. Сөздерді дауыстап айтып көр.",
      ],
      bodyRu: [
        "Обрати внимание на буквы Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І в казахском алфавите. Они помогают различать произношение и значение слов.",
        "Примеры: әже — бабушка, ғалым — учёный, қала — город, аң — зверь, өнер — искусство, ұлт — нация, үй — дом, қаһарман — герой, тіл — язык. Попробуй произнести слова вслух.",
      ],
      fact: "«Ұ» мен «Ү» — екі бөлек дыбыс. Салыстыр: ұн (мука) — үн (голос).",
      factRu: "«Ұ» и «Ү» — разные звуки. Сравни: ұн (мука) — үн (голос).",
      image: "/images/language.webp",
    },
    {
      id: "greetings",
      category: "language",
      title: "Алғашқы әңгіме",
      titleRu: "Первый разговор",
      intro: "Бір «Сәлем!» жаңа достыққа жол ашады.",
      introRu: "Одно «Сәлем!» открывает путь к дружбе.",
      body: [
        "Сәлем! — Привет! Сәлеметсіз бе? — Здравствуйте! Қалыңыз қалай? — Как ваши дела? Рақмет! — Спасибо! Сау болыңыз! — До свидания!",
        "Өзіңді таныстыр: «Менің атым — ...» (Меня зовут ...). «Танысқаныма қуаныштымын!» (Рад знакомству!). Үлкен кісіге немесе бейтаныс адамға сөйлегенде «Сіз» деген сыпайы түрін қолдан.",
      ],
      bodyRu: [
        "Сәлем! — Привет! Сәлеметсіз бе? — Здравствуйте! Қалыңыз қалай? — Как ваши дела? Рақмет! — Спасибо! Сау болыңыз! — До свидания!",
        "Представься: «Менің атым — ...» (Меня зовут ...). «Танысқаныма қуаныштымын!» (Рад знакомству!). Обращаясь к старшим или незнакомым людям, используй вежливое «Сіз».",
      ],
      fact: "Бүгін бір адаммен қазақша амандасып көр!",
      factRu: "Попробуй сегодня поздороваться с кем-нибудь по-казахски!",
    },
    {
      id: "proverbs",
      category: "language",
      title: "Мақал — сөздің мәйегі",
      titleRu: "Мудрость в пословицах",
      intro: "Аз сөзге сыйған терең ой.",
      introRu: "Глубокая мысль в нескольких словах.",
      body: [
        "«Отан — оттан да ыстық». Бұл мақал туған жердің адамға қаншалықты қымбат екенін білдіреді.",
        "«Оқу — білім бұлағы, білім — өмір шырағы». Оқу арқылы адам білімге жетеді, ал білім өмірде жол көрсетеді. Өзіңе ұнаған мақалды жаттап ал.",
      ],
      bodyRu: [
        "«Отан — оттан да ыстық» — «Родина жарче огня». Пословица говорит о том, насколько дорога человеку родная земля.",
        "«Оқу — білім бұлағы, білім — өмір шырағы» — «Учение — источник знаний, знание — светоч жизни». Учёба даёт знания, а знания помогают найти путь. Выучи понравившуюся пословицу.",
      ],
      fact: "Мақал-мәтелдер — халықтың өмір тәжірибесін жеткізетін ауыз әдебиетінің жанры.",
      factRu:
        "Пословицы и поговорки — жанр устного народного творчества, передающий жизненный опыт.",
    },
    {
      id: "dombyra",
      category: "culture",
      title: "Домбыра — даланың үні",
      titleRu: "Домбыра — голос степи",
      intro: "Екі ішекке сыйған ұлы тарих.",
      introRu: "Великая история в двух струнах.",
      body: [
        "Домбыра — қазақ халқының екі ішекті, шертіп ойналатын музыкалық аспабы. Оның үнімен қуаныш та, сағыныш та, батырлық та баяндалады.",
        "Күй — аспапта орындалатын музыкалық шығарма. Домбыра күйін орындау өнері ЮНЕСКО-ның адамзаттың материалдық емес мәдени мұрасының репрезентативтік тізіміне 2014 жылы енгізілді.",
      ],
      bodyRu: [
        "Домбыра — казахский двухструнный щипковый музыкальный инструмент. Её звучание передаёт радость, тоску и героические истории.",
        "Кюй — инструментальная музыкальная пьеса. Традиционное искусство исполнения домбрового кюя включено в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО в 2014 году.",
      ],
      fact: "Домбырада екі ішек бар. Ал оның жеткізер әңгімесі — шексіз.",
      factRu:
        "У домбыры две струны. А историй, которые она рассказывает, — бесконечно много.",
      image: "/images/dombyra.webp",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "ornament",
      category: "culture",
      title: "Ою-өрнек тілі",
      titleRu: "Язык орнамента",
      intro: "Әр өрнек — бір әңгіме.",
      introRu: "Каждый узор рассказывает историю.",
      body: [
        "Қазақтың ою-өрнегі киізден жасалған бұйымдарда, киімде, зергерлік әшекейлерде және ағаш бұйымдарда кездеседі. Өрнек затты безендіріп қана қоймай, ұлттық дүниетанымды да көрсетеді.",
        "«Қошқармүйіз» — қошқардың иірілген мүйізіне ұқсайтын кең тараған ою. Осы сайттың алтын түсті өрнектері берілген ұлттық орнамент үлгісінен жасалды. Оның симметриясы мен ырғақты қайталануына назар аудар.",
      ],
      bodyRu: [
        "Казахский орнамент встречается на войлочных изделиях, одежде, украшениях и предметах из дерева. Он не только украшает вещь, но и отражает национальное мировосприятие.",
        "«Қошқармүйіз» — распространённый узор, напоминающий закрученные рога барана. Золотые узоры этого сайта созданы из предоставленного образца национального орнамента. Обрати внимание на симметрию и ритм повторения.",
      ],
      fact: "«Ою» — узор. «Мүйіз» — рог. «Қошқар» — баран.",
      factRu: "«Ою» — узор. «Мүйіз» — рог. «Қошқар» — баран.",
    },
    {
      id: "aitys",
      category: "culture",
      title: "Айтыс — сөз сайысы",
      titleRu: "Айтыс — состязание слова",
      intro: "Ой ұшқырлығы мен суырыпсалма өнер.",
      introRu: "Остроумие и искусство импровизации.",
      body: [
        "Айтыс — ақындардың суырыпсалып өлеңмен жарысу өнері. Ақындар бір-біріне кезекпен жауап беріп, ойды ұтымды жеткізуге тырысады.",
        "Айтыста тіл байлығы, тапқырлық және орындау шеберлігі қатар көрінеді. Домбыра сүйемелдеуі сөздің ырғағын күшейтеді.",
      ],
      bodyRu: [
        "Айтыс — искусство поэтического состязания импровизаторов. Акыны по очереди отвечают друг другу в стихах, стараясь выразить мысль метко и ярко.",
        "В айтысе соединяются богатство языка, находчивость и исполнительское мастерство. Звучание домбыры подчёркивает ритм слова.",
      ],
      fact: "Айтыс өнері — қазақ пен қырғыз халықтарына ортақ мұра.",
      factRu:
        "Искусство айтыса — общее наследие казахского и кыргызского народов.",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "turkestan",
      category: "history",
      title: "Түркістан — рухани мекен",
      titleRu: "Туркестан — духовный центр",
      intro: "Ұлы Жібек жолының ізімен.",
      introRu: "По следам Великого шёлкового пути.",
      body: [
        "Түркістан — Қазақстанның тарихи қалаларының бірі. Қаладағы Қожа Ахмет Ясауи кесенесі — ортағасырлық сәулет өнерінің көрнекті ескерткіші.",
        "Кесене Әмір Темірдің бұйрығымен XIV ғасырдың соңында салына бастады. Ғимараттың зәулім порталы мен көгілдір күмбезі Түркістанның танымал бейнесіне айналды.",
      ],
      bodyRu: [
        "Туркестан — один из исторических городов Казахстана. Мавзолей Ходжи Ахмеда Ясави — выдающийся памятник средневековой архитектуры.",
        "Строительство мавзолея началось в конце XIV века по приказу Амира Тимура. Монументальный портал и голубой купол стали узнаваемым образом Туркестана.",
      ],
      fact: "Қожа Ахмет Ясауи кесенесі 2003 жылы ЮНЕСКО-ның Бүкіләлемдік мұра тізіміне енгізілді.",
      factRu:
        "Мавзолей Ходжи Ахмеда Ясави включён в Список всемирного наследия ЮНЕСКО в 2003 году.",
      image: "/images/turkestan.webp",
      source: "https://whc.unesco.org/en/list/1103/",
    },
    {
      id: "abai",
      category: "history",
      title: "Абай Құнанбайұлы",
      titleRu: "Абай Кунанбайулы",
      intro: "1845–1904 · Ақын, ойшыл, композитор",
      introRu: "1845–1904 · Поэт, мыслитель, композитор",
      body: [
        "Абай Құнанбайұлы — қазақтың ұлы ақыны, ойшылы және композиторы. Оның шығармалары білімге, еңбекке және адамгершілікке үндейді.",
        "Абайдың «Қара сөздері» — адам мінезі, білім, ар-ұят және қоғам туралы толғаныстар. Ақынның өлеңдері мен әндері қазақ мәдениетінде ерекше орын алады.",
      ],
      bodyRu: [
        "Абай Кунанбайулы — великий казахский поэт, мыслитель и композитор. Его произведения призывают к знаниям, труду и человечности.",
        "«Слова назидания» Абая — размышления о характере человека, знаниях, совести и обществе. Стихи и песни поэта занимают особое место в казахской культуре.",
      ],
      fact: "«Ғылым таппай мақтанба» — Абайдың білім мен адамгершілік туралы әйгілі өлеңі.",
      factRu:
        "«Ғылым таппай мақтанба» — известное стихотворение Абая о знаниях и нравственности.",
      image: "/images/abai.jpg",
      source: "https://oq.gov.kz/en/abai/abai-bio",
    },
    {
      id: "shokan",
      category: "history",
      title: "Шоқан Уәлиханов",
      titleRu: "Шокан Уалиханов",
      intro: "1835–1865 · Ғалым, саяхатшы, этнограф",
      introRu: "1835–1865 · Учёный, путешественник, этнограф",
      body: [
        "Шоқан Уәлиханов — қазақ ғалымы, тарихшы, этнограф және саяхатшы. Ол Орталық Азия халықтарының тарихы мен мәдениетін зерттеді.",
        "Шоқан халық ауыз әдебиетін жинап, саяхат жазбалары мен ғылыми еңбектер қалдырды. Оның зерттеулері қазақ ғылымының дамуына маңызды үлес қосты.",
      ],
      bodyRu: [
        "Шокан Уалиханов — казахский учёный, историк, этнограф и путешественник. Он изучал историю и культуру народов Центральной Азии.",
        "Шокан собирал произведения устного народного творчества, оставил путевые заметки и научные труды. Его исследования внесли важный вклад в развитие казахской науки.",
      ],
      fact: "Шоқан зерттеуші ғана емес, сурет салуға да қабілетті болған.",
      factRu:
        "Шокан был не только исследователем, но и талантливым рисовальщиком.",
      image: "/images/shokan.jpg",
      source: "https://iie.kz/?p=26188",
    },
    {
      id: "yurt",
      category: "traditions",
      title: "Киіз үй — көшпенділер әлемі",
      titleRu: "Юрта — мир кочевников",
      intro: "Шаңырақтан басталған жылулық.",
      introRu: "Тепло, которое начинается с шанырака.",
      body: [
        "Киіз үй — көшпелі өмірге бейімделген дәстүрлі баспана. Оның ағаш қаңқасы кереге, уық және шаңырақтан құралады, ал сырты киізбен жабылады.",
        "Кереге — үйдің жиналмалы қабырғасы. Уық — кереге мен шаңырақты жалғайтын иілген ағаш. Шаңырақ — төбедегі дөңгелек бөлік, отбасылық бірлік пен үйдің символы.",
      ],
      bodyRu: [
        "Юрта — традиционное жилище, приспособленное к кочевому образу жизни. Её деревянный каркас состоит из кереге, уыков и шанырака, а снаружи покрывается войлоком.",
        "Кереге — складная решётчатая стена. Уық — изогнутая жердь, соединяющая стену с шаныраком. Шаңырақ — круглая вершина юрты, символ дома и семейного единства.",
      ],
      fact: "«Шаңырағың биік болсын!» — отбасына айтылатын ізгі тілек.",
      factRu: "«Шаңырағың биік болсын!» — доброе пожелание благополучия семье.",
      image: "/images/steppe-yurt.webp",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "nauryz",
      category: "traditions",
      title: "Наурыз — жаңару мерекесі",
      titleRu: "Наурыз — праздник обновления",
      intro: "Жаңа күн. Жаңа үміт. Жаңа бастау.",
      introRu: "Новый день. Новая надежда. Новое начало.",
      body: [
        "Наурыз — көктемгі жаңару мен берекенің мерекесі. Адамдар бір-біріне ізгі тілек айтып, қонаққа барып, дастарқан жаяды.",
        "Мерекенің дәстүрлі тағамы — наурыз көже. Оған жеті түрлі дәм қосу дәстүрі кең тараған, ал құрамы өңір мен отбасыға қарай өзгеруі мүмкін.",
      ],
      bodyRu: [
        "Наурыз — праздник весеннего обновления и благополучия. Люди желают друг другу добра, ходят в гости и собираются за общим столом.",
        "Традиционное блюдо праздника — наурыз коже. Распространена традиция добавлять семь компонентов; состав может различаться по регионам и семьям.",
      ],
      fact: "«Ұлыс оң болсын, ақ мол болсын!» — Наурызда айтылатын дәстүрлі тілек.",
      factRu:
        "«Ұлыс оң болсын, ақ мол болсын!» — традиционное пожелание благополучия и изобилия на Наурыз.",
      image: "/images/steppe-yurt.webp",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "hospitality",
      category: "traditions",
      title: "Қонақжайлық — асыл қасиет",
      titleRu: "Гостеприимство — ценная традиция",
      intro: "Қонақ келсе, құт келеді.",
      introRu: "Гость приходит — счастье приносит.",
      body: [
        "Қазақ мәдениетінде қонаққа құрмет көрсетуге ерекше мән беріледі. Үйге келген адамды жылы қарсы алып, төрге отырғызу — сыйластық белгісі.",
        "Дастарқан басында үлкенге құрмет көрсетіп, асқа бата беру дәстүрі бар. Бата — жақсылық, амандық және береке тілейтін ізгі сөз.",
      ],
      bodyRu: [
        "В казахской культуре уважению к гостю придают особое значение. Тепло встретить человека и предложить почётное место — знак почтения.",
        "За столом проявляют уважение к старшим и произносят бата — благословение с пожеланиями добра, здоровья и благополучия.",
      ],
      fact: "«Төр» — үйдегі қонаққа ұсынылатын құрметті орын.",
      factRu: "«Төр» — почётное место в доме, которое предлагают гостю.",
    },
  ],
  words = [
    {
      word: "Атамекен",
      transcription: "a-ta-me-ken",
      translation: "Родная земля",
      definition: "Ата-бабадан ұрпаққа қалған, кіндік қаның тамған туған жер.",
      example: "Қазақстан — менің атамекенім.",
      exampleRu: "Казахстан — моя родная земля.",
    },
    {
      word: "Шаңырақ",
      transcription: "sha-ny-raq",
      translation: "Шанырак, семейный очаг",
      definition:
        "Киіз үйдің төбесіндегі дөңгелек бөлік. Отбасы мен бірліктің нышаны.",
      example: "Шаңырағың биік болсын!",
      exampleRu: "Пусть процветает твой дом!",
    },
    {
      word: "Мейірім",
      transcription: "mei-i-rim",
      translation: "Доброта, милосердие",
      definition: "Адамның өзгеге деген жылы ықыласы, ізгі ниеті.",
      example: "Әженің жүрегі мейірімге толы.",
      exampleRu: "Сердце бабушки наполнено добротой.",
    },
    {
      word: "Өнер",
      transcription: "ö-ner",
      translation: "Искусство",
      definition: "Адамның шығармашылық шеберлігі мен әсемдікті бейнелеуі.",
      example: "Домбыра тарту — үлкен өнер.",
      exampleRu: "Игра на домбыре — большое искусство.",
    },
    {
      word: "Бірлік",
      transcription: "bir-lik",
      translation: "Единство",
      definition: "Адамдардың ынтымақтасып, ортақ мақсатқа ұмтылуы.",
      example: "Бірлік бар жерде тірлік бар.",
      exampleRu: "Где единство, там и благополучие.",
    },
  ],
  proverbs = [
    {
      word: "Отан — оттан да ыстық.",
      transcription: "Халық мақалы",
      translation: "Родина жарче огня.",
      definition: "Туған жердің адам үшін бәрінен қымбат екенін білдіреді.",
      example: "Отанға деген сүйіспеншілік — жүректе.",
      exampleRu: "Любовь к родине живёт в сердце.",
    },
    {
      word: "Өнер алды — қызыл тіл.",
      transcription: "Халық мақалы",
      translation: "Первое из искусств — красноречие.",
      definition: "Сөз өнерінің, шешендіктің ерекше құндылығын көрсетеді.",
      example: "Жақсы сөз — жарым ырыс.",
      exampleRu: "Доброе слово — половина счастья.",
    },
    {
      word: "Бірлік болмай, тірлік болмас.",
      transcription: "Халық мақалы",
      translation: "Без единства нет благополучия.",
      definition: "Ынтымақ пен бірлескен еңбектің маңызын түсіндіреді.",
      example: "Бірге жасаған жұмыс берекелі болады.",
      exampleRu: "Совместный труд приносит плоды.",
    },
  ],
  quizQuestions = [
    {
      q: "Домбырада неше ішек бар?",
      ru: "Сколько струн у домбыры?",
      options: ["Бір / Одна", "Екі / Две", "Үш / Три", "Төрт / Четыре"],
      answer: 1,
      fact: "Домбыра — екі ішекті ұлттық музыкалық аспап.",
      factRu: "Домбыра — национальный двухструнный музыкальный инструмент.",
    },
    {
      q: "«Рақмет» сөзінің мағынасы қандай?",
      ru: "Что означает слово «Рақмет»?",
      options: ["Привет", "До свидания", "Спасибо", "Добро пожаловать"],
      answer: 2,
      fact: "«Рақмет» — алғыс білдіретін сөз.",
      factRu: "«Рақмет» — слово благодарности: «спасибо».",
    },
    {
      q: "Киіз үйдің төбесіндегі дөңгелек бөлік қалай аталады?",
      ru: "Как называется круглая вершина юрты?",
      options: ["Кереге", "Уық", "Есік", "Шаңырақ"],
      answer: 3,
      fact: "Шаңырақ — киіз үйдің төбесі әрі отбасы бірлігінің нышаны.",
      factRu: "Шанырак — вершина юрты и символ семейного единства.",
    },
    {
      q: "Абай Құнанбайұлы кім?",
      ru: "Кто такой Абай Кунанбайулы?",
      options: [
        "Ақын, ойшыл / Поэт, мыслитель",
        "Сәулетші / Архитектор",
        "Спортшы / Спортсмен",
        "Дәрігер / Врач",
      ],
      answer: 0,
      fact: "Абай — ұлы ақын, ойшыл және композитор.",
      factRu: "Абай — великий поэт, мыслитель и композитор.",
    },
    {
      q: "«Өнер» сөзінің орысша аудармасы қандай?",
      ru: "Как переводится «Өнер» на русский язык?",
      options: ["Наука", "Искусство", "Природа", "Дружба"],
      answer: 1,
      fact: "Өнер — искусство. Домбыра тарту, сурет салу — өнер түрлері.",
      factRu: "Өнер — искусство. Игра на домбыре и рисование — виды искусства.",
    },
    {
      q: "Көктемгі жаңару мерекесі қалай аталады?",
      ru: "Как называется праздник весеннего обновления?",
      options: ["Наурыз", "Айтыс", "Бата", "Күй"],
      answer: 0,
      fact: "Наурыз — көктемгі жаңару мен берекенің мерекесі.",
      factRu: "Наурыз — праздник весеннего обновления и благополучия.",
    },
  ],
  matchingWords = [
    {
      id: 0,
      kz: "Отан",
      ru: "Родина",
    },
    {
      id: 1,
      kz: "Білім",
      ru: "Знание",
    },
    {
      id: 2,
      kz: "Достық",
      ru: "Дружба",
    },
    {
      id: 3,
      kz: "Мұра",
      ru: "Наследие",
    },
  ],
  wordPuzzles = [
    {
      answer: "ҚАЗАҚ",
      clue: "Еліміздің байырғы халқы",
      clueRu: "Коренной народ Казахстана",
      letters: ["А", "Қ", "З", "Қ", "А"],
    },
    {
      answer: "ДОМБЫРА",
      clue: "Қазақтың екі ішекті аспабы",
      clueRu: "Казахский двухструнный инструмент",
      letters: ["Б", "А", "Д", "Р", "М", "О", "Ы"],
    },
    {
      answer: "МҰРА",
      clue: "Ұрпақтан ұрпаққа қалған қазына",
      clueRu: "То, что передаётся от поколения к поколению",
      letters: ["А", "Р", "М", "Ұ"],
    },
  ];
function GameResult({
  lang: a,
  title: i,
  description: o,
  points: c,
  onRestart: u,
}) {
  return (
    <div className="game-result">
      <div className="result-trophy">
        <Trophy size={44} strokeWidth={1.4} />
        <Sparkles className="trophy-spark" size={22} />
      </div>
      <p className="eyebrow">{translate(a, "ЖАРАЙСЫҢ!", "ОТЛИЧНАЯ РАБОТА!")}</p>
      <h2>{i}</h2>
      <p>{o}</p>
      <div className="result-points">
        {c}
        {" XP "}
        <span>
          {translate(a, "жеке рекорд сақталды", "личный рекорд сохранён")}
        </span>
      </div>
      <button className="primary-button" onClick={u}>
        <RotateCcw size={17} />
        {translate(a, "Қайта ойнау", "Сыграть ещё")}
      </button>
    </div>
  );
}
function QuizGame({ lang: a, onComplete: i }) {
  const [o, c] = React.useState(0),
    [u, p] = React.useState(null),
    [d, y] = React.useState(0),
    [g, m] = React.useState(!1),
    x = (M, w) => translate(a, M, w),
    A = quizQuestions[o],
    S = (M) => {
      u === null && (p(M), M === A.answer && y((w) => w + 1));
    },
    O = () => {
      o === quizQuestions.length - 1
        ? (m(!0), i("quiz", d * 10))
        : (c((M) => M + 1), p(null));
    };
  return g ? (
    <GameResult
      lang={a}
      title={`${d} / ${quizQuestions.length} ${x("дұрыс жауап", "правильных ответов")}`}
      description={x(
        "Әр сұрақ — жаңа білім. Білмегеніңді тақырыптардан оқып, тағы байқап көр!",
        "Каждый вопрос — новое знание. Изучи темы и попробуй улучшить результат!",
      )}
      points={d * 10}
      onRestart={() => {
        (c(0), p(null), y(0), m(!1));
      }}
    />
  ) : (
    <div className="game-content">
      <div className="modal-symbol">
        <CircleHelp size={28} />
      </div>
      <p className="eyebrow">{x("БІЛІМ САЙЫСЫ", "КВИЗ О КАЗАХСТАНЕ")}</p>
      <div className="game-progress-label">
        <span>
          {x("Сұрақ", "Вопрос")} {o + 1}
          {" / "}
          {quizQuestions.length}
        </span>
        <span>
          {d} {x("дұрыс", "верно")}
        </span>
      </div>
      <div className="progress-track">
        <span
          style={{
            transform: `scaleX(${(o + 1) / quizQuestions.length})`,
            transformOrigin: "left",
          }}
        />
      </div>
      <h2 key={o} className="question-title">
        {x(A.q, A.ru)}
      </h2>
      <div key={o} className="quiz-options">
        {A.options.map((M, w) => (
          <button
            key={M}
            disabled={u !== null}
            className={`quiz-option ${u !== null && w === A.answer ? "is-correct" : ""} ${u === w && w !== A.answer ? "is-wrong" : ""}`}
            onClick={() => S(w)}
          >
            <span className="option-letter">{"ABCD"[w]}</span>
            {M}
            {u !== null && w === A.answer && <Check size={18} />}
            {u === w && w !== A.answer && <X size={18} />}
          </button>
        ))}
      </div>
      {u !== null && (
        <div
          className={`answer-feedback ${u === A.answer ? "" : "feedback-learn"}`}
          role="status"
        >
          <Lightbulb size={19} />
          <span>{x(A.fact, A.factRu)}</span>
        </div>
      )}
      <button
        className="primary-button game-next"
        disabled={u === null}
        onClick={O}
      >
        {o === quizQuestions.length - 1
          ? x("Нәтижені көру", "Посмотреть результат")
          : x("Келесі сұрақ", "Следующий вопрос")}
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
function MatchingGame({ lang: a, onComplete: i }) {
  const [o, c] = React.useState(null),
    [u, p] = React.useState(null),
    [d, y] = React.useState([]),
    [g, m] = React.useState(!1),
    [x, A] = React.useState(0),
    S = (M, w) => translate(a, M, w),
    O = (M, w) => {
      m(!1);
      const q = M === "left" ? w : o,
        Y = M === "right" ? w : u;
      if ((M === "left" ? c(w) : p(w), q !== null && Y !== null)) {
        if ((A((X) => X + 1), q === Y)) {
          const X = [...d, q];
          (y(X), X.length === matchingWords.length && i("match", 30));
        } else m(!0);
        (c(null), p(null));
      }
    };
  return d.length === matchingWords.length ? (
    <GameResult
      lang={a}
      title={S("Барлық жұп табылды!", "Все пары найдены!")}
      description={`${S("Сен төрт қазақша сөзді қайталадың.", "Ты повторил четыре казахских слова.")} ${S("Әрекет саны:", "Количество попыток:")} ${x}.`}
      points={30}
      onRestart={() => {
        (y([]), A(0), m(!1));
      }}
    />
  ) : (
    <div className="game-content">
      <div className="modal-symbol sage">
        <Sparkles size={28} />
      </div>
      <p className="eyebrow">{S("СӨЗДЕРДІ СӘЙКЕСТЕНДІР", "НАЙДИ ПАРЫ")}</p>
      <h2>{S("Мағынасын тап", "Соедини по смыслу")}</h2>
      <p className="modal-description">
        {S(
          "Қазақша сөзді және оның орысша аудармасын таңда.",
          "Выбери казахское слово и его перевод на русский.",
        )}
      </p>
      <div className="game-progress-label">
        <span>{S("Табылған жұптар", "Найдено пар")}</span>
        <span>
          {d.length}
          {" / 4"}
        </span>
      </div>
      <div className="progress-track">
        <span
          style={{
            transform: `scaleX(${d.length / 4})`,
            transformOrigin: "left",
          }}
        />
      </div>
      <div className="matching-board">
        <div>
          <div className="matching-label">{"ҚАЗАҚША"}</div>
          {matchingWords.map((M) => (
            <button
              key={M.id}
              disabled={d.includes(M.id)}
              onClick={() => O("left", M.id)}
              className={`match-tile ${o === M.id ? "selected" : ""} ${d.includes(M.id) ? "matched" : ""}`}
            >
              {M.kz}
              {d.includes(M.id) && <Check size={17} />}
            </button>
          ))}
        </div>
        <div>
          <div className="matching-label">{"РУССКИЙ"}</div>
          {[
            matchingWords[2],
            matchingWords[0],
            matchingWords[3],
            matchingWords[1],
          ].map((M) => (
            <button
              key={M.id}
              disabled={d.includes(M.id)}
              onClick={() => O("right", M.id)}
              className={`match-tile ${u === M.id ? "selected" : ""} ${d.includes(M.id) ? "matched" : ""}`}
            >
              {M.ru}
              {d.includes(M.id) && <Check size={17} />}
            </button>
          ))}
        </div>
      </div>
      <div className={`match-status ${g ? "wrong-text" : ""}`} role="status">
        {g
          ? S(
              "Бұл сөздер жұп емес. Тағы байқап көр!",
              "Эти слова не пара. Попробуй ещё!",
            )
          : d.length > 0
            ? S("Керемет! Жалғастыра бер.", "Отлично! Продолжай.")
            : S("Алғашқы сөзді таңда.", "Выбери первое слово.")}
      </div>
    </div>
  );
}
function WordGame({ lang: a, onComplete: i }) {
  const [o, c] = React.useState(0),
    [u, p] = React.useState([]),
    [d, y] = React.useState(null),
    [g, m] = React.useState(!1),
    x = (M, w) => translate(a, M, w),
    A = wordPuzzles[o],
    S = () => {
      y(u.map((M) => A.letters[M]).join("") === A.answer ? "correct" : "wrong");
    },
    O = () => {
      o === wordPuzzles.length - 1
        ? (m(!0), i("word", 40))
        : (c((M) => M + 1), p([]), y(null));
    };
  return g ? (
    <GameResult
      lang={a}
      title={x("Сөз шебері!", "Мастер слова!")}
      description={x(
        "Үш сөзді де дұрыс құрастырдың. Қазақша сөздік қорың кеңейіп келеді!",
        "Ты правильно составил все три слова. Твой казахский словарный запас растёт!",
      )}
      points={40}
      onRestart={() => {
        (c(0), p([]), y(null), m(!1));
      }}
    />
  ) : (
    <div className="game-content">
      <div className="modal-symbol sand">
        <span className="letter-symbol">{"Ә"}</span>
      </div>
      <p className="eyebrow">{x("ӘРІПТЕРДЕН СӨЗ ҚҰРА", "СОБЕРИ СЛОВО")}</p>
      <div className="game-progress-label">
        <span>
          {x("Сөз", "Слово")} {o + 1}
          {" / 3"}
        </span>
        <span>
          {A.answer.length} {x("әріп", "букв")}
        </span>
      </div>
      <div className="progress-track">
        <span
          style={{
            transform: `scaleX(${(o + 1) / 3})`,
            transformOrigin: "left",
          }}
        />
      </div>
      <h2 className="question-title">{x(A.clue, A.clueRu)}</h2>
      <div className="word-slots">
        {Array.from(A.answer).map((M, w) => (
          <button
            key={w}
            className={`word-slot ${d === "correct" ? "is-correct" : ""}`}
            aria-label={`${x("Әріпті өшіру", "Удалить букву")} ${w + 1}`}
            disabled={u[w] === void 0 || d === "correct"}
            onClick={() => {
              (p(u.filter((q, Y) => Y !== w)), y(null));
            }}
          >
            {u[w] !== void 0 ? A.letters[u[w]] : ""}
          </button>
        ))}
      </div>
      <div className="letter-bank">
        {A.letters.map((M, w) => (
          <button
            key={w}
            className="letter-tile"
            disabled={u.includes(w) || d === "correct"}
            onClick={() => {
              (p([...u, w]), y(null));
            }}
          >
            {M}
          </button>
        ))}
      </div>
      <button
        className="text-button reset-letters"
        disabled={!u.length || d === "correct"}
        onClick={() => {
          (p([]), y(null));
        }}
      >
        <RotateCcw size={14} />
        {x("Тазалау", "Очистить")}
      </button>
      {d && (
        <div
          className={`answer-feedback ${d === "wrong" ? "feedback-learn" : ""}`}
          role="status"
        >
          {d === "correct" ? (
            <CircleCheck size={19} />
          ) : (
            <Lightbulb size={19} />
          )}
          <span>
            {d === "correct"
              ? x("Дұрыс! Өте жақсы.", "Верно! Отличная работа.")
              : x(
                  "Әріптердің орнын өзгертіп көр.",
                  "Попробуй изменить порядок букв.",
                )}
          </span>
        </div>
      )}
      {d === "correct" ? (
        <button className="primary-button game-next" onClick={O}>
          {o === 2
            ? x("Нәтижені көру", "Посмотреть результат")
            : x("Келесі сөз", "Следующее слово")}
          <ArrowRight size={18} />
        </button>
      ) : (
        <button
          className="primary-button game-next"
          disabled={u.length !== A.answer.length}
          onClick={S}
        >
          {x("Тексеру", "Проверить")}
          <Check size={18} />
        </button>
      )}
    </div>
  );
}
const emptyProgress = {
    completed: [],
    words: [],
    games: {},
  },
  STORAGE_KEY = "qazaq-tili-progress-v1";
function loadProgress() {
  try {
    const a = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return !a ||
      !Array.isArray(a.completed) ||
      !Array.isArray(a.words) ||
      !a.games ||
      typeof a.games != "object"
      ? emptyProgress
      : {
          completed: [
            ...new Set(
              a.completed.filter(
                (i) => typeof i == "string" && lessons.some((o) => o.id === i),
              ),
            ),
          ],
          words: [
            ...new Set(
              a.words.filter(
                (i) => typeof i == "string" && words.some((o) => o.word === i),
              ),
            ),
          ],
          games: Object.fromEntries(
            Object.entries(a.games).filter(
              ([i, o]) =>
                ["quiz", "match", "word"].includes(i) &&
                typeof o == "number" &&
                Number.isFinite(o) &&
                o >= 0 &&
                o <= 60,
            ),
          ),
        };
  } catch {
    return emptyProgress;
  }
}
function Ornament({ className: a = "", style: i }) {
  return (
    <span className={`ornament-motif ${a}`} style={i} aria-hidden="true" />
  );
}
const galleryItems = [
  {
    id: "abai",
    kind: "people",
    image: "/images/abai.jpg",
    video: "/videos/abai.mp4",
    title: "Абай Құнанбайұлы",
    titleRu: "Абай Кунанбайулы",
    subtitle: "Ақын. Ойшыл. Дәуір үні.",
    subtitleRu: "Поэт. Мыслитель. Голос эпохи.",
  },
  {
    id: "yurt",
    kind: "tradition",
    image: "/images/steppe-yurt.webp",
    video: "/videos/yurt.mp4",
    title: "Шаңырақтың шуағы",
    titleRu: "Под сводом шанырака",
    subtitle: "Көшпенділердің киелі мекені",
    subtitleRu: "Священный дом кочевников",
  },
  {
    id: "shokan",
    kind: "people",
    image: "/images/shokan.jpg",
    video: "/videos/shokan.mp4",
    title: "Шоқан Уәлиханов",
    titleRu: "Шокан Уалиханов",
    subtitle: "Ғылымға жол ашқан жұлдыз",
    subtitleRu: "Звезда, осветившая путь науке",
  },
  {
    id: "dombyra",
    kind: "tradition",
    image: "/images/dombyra.webp",
    video: "/videos/dombyra.mp4",
    title: "Қос ішектің құдіреті",
    titleRu: "Сила двух струн",
    subtitle: "Жүрекке жеткен дала әуені",
    subtitleRu: "Мелодия степи, трогающая сердце",
  },
];

const videoMaterials = [
  {
    id: "altynsarin",
    poster: "/images/materials/altynsarin.jpg",
    video: "/videos/materials/altynsarin.mp4",
    title: "Ыбырай Алтынсарин",
    titleRu: "Ыбырай Алтынсарин",
    subtitle: "«Бай баласы мен жарлы баласы»",
    subtitleRu: "«Байский сын и сын бедняка»",
  },
  {
    id: "abai-video",
    poster: "/images/materials/abai-video.jpg",
    video: "/videos/materials/abai-video.mp4",
    title: "Абай Құнанбайұлы",
    titleRu: "Абай Кунанбайулы",
    subtitle: "Ақын. Ойшыл. Дәуір үні.",
    subtitleRu: "Поэт. Мыслитель. Голос эпохи.",
  },
  {
    id: "baitursynuly",
    poster: "/images/materials/baitursynuly.jpg",
    video: "/videos/materials/baitursynuly.mp4",
    title: "Ахмет Байтұрсынұлы",
    titleRu: "Ахмет Байтурсынов",
    subtitle: "Ұлт ұстазы",
    subtitleRu: "Учитель нации",
  },
  {
    id: "auezov-zhetim",
    poster: "/images/materials/auezov-zhetim.jpg",
    video: "/videos/materials/auezov-zhetim.mp4",
    title: "Мұхтар Әуезов",
    titleRu: "Мухтар Ауэзов",
    subtitle: "«Жетім»",
    subtitleRu: "«Сирота»",
  },
  {
    id: "auezov-abai-zholy",
    poster: "/images/materials/auezov-abai-zholy.jpg",
    video: "/videos/materials/auezov-abai-zholy.mp4",
    title: "Мұхтар Әуезов",
    titleRu: "Мухтар Ауэзов",
    subtitle: "«Абай жолы»",
    subtitleRu: "«Путь Абая»",
  },
];

export default function OriginalApp() {
  useExperience();
  const { visit } = useJourney();
  const [lang, setLang] = React.useState("kz"),
    [menuOpen, setMenuOpen] = React.useState(!1),
    [activeSection, setActiveSection] = React.useState("home"),
    [modal, setModal] = React.useState(null),
    [progress, setProgress] = React.useState(loadProgress),
    [toast, setToast] = React.useState(""),
    [wordIndex, setWordIndex] = React.useState(0),
    [wordTab, setWordTab] = React.useState("word"),
    [flipped, setFlipped] = React.useState(!1),
    [galleryFilter, setGalleryFilter] = React.useState("all"),
    [catalogFilter, setCatalogFilter] = React.useState("all"),
    [search, setSearch] = React.useState(""),
    [speaking, setSpeaking] = React.useState(!1),
    text = (R, H) => translate(lang, R, H),
    totalXP =
      progress.completed.length * 20 +
      progress.words.length * 5 +
      Object.values(progress.games).reduce((R, H) => R + (H || 0), 0),
    currentWord = (wordTab === "word" ? words : proverbs)[
      wordIndex % (wordTab === "word" ? words.length : proverbs.length)
    ],
    level =
      totalXP >= 250
        ? text("Мұра сақтаушысы", "Хранитель наследия")
        : totalXP >= 80
          ? text("Зерттеуші", "Исследователь")
          : text("Жас саяхатшы", "Начинающий путешественник");
  React.useEffect(() => {
    if (!modal) return;
    if (modal.type === "game") { visit(5); return; }
    const category = modal.type === "category" ? modal.id : modal.type === "lesson" ? modal.lesson.category : null;
    const stage = { language: 0, history: 1, traditions: 2, culture: 3 }[category];
    if (stage !== undefined) visit(stage);
  }, [modal, visit]);
  (React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]),
    React.useEffect(() => {
      document.documentElement.lang = lang === "kz" ? "kk" : "ru";
    }, [lang]),
    React.useEffect(() => {
      if (!toast) return;
      const R = window.setTimeout(() => setToast(""), 4200);
      return () => clearTimeout(R);
    }, [toast]),
    React.useEffect(() => {
      const R = new IntersectionObserver(
        (H) => {
          H.forEach((lt) => {
            lt.isIntersecting && setActiveSection(lt.target.id);
          });
        },
        {
          rootMargin: "-15% 0px -65% 0px",
          threshold: 0,
        },
      );
      return (
        document.querySelectorAll("section[id]").forEach((H) => R.observe(H)),
        () => R.disconnect()
      );
    }, []));
  const notify = (R) => {
      setToast(R);
    },
    navigateTo = (R) => {
      (setMenuOpen(!1),
        setActiveSection(R),
        document.getElementById(R)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        }));
    },
    _ = (R, H) => {
      setProgress((lt) => ({
        ...lt,
        games: {
          ...lt.games,
          [R]: Math.max(lt.games[R] ?? 0, H),
        },
      }));
    },
    saveWord = () => {
      if (progress.words.includes(currentWord.word)) {
        notify(
          text(
            "Бұл сөз сенің сөздігіңде бар.",
            "Это слово уже в твоём словаре.",
          ),
        );
        return;
      }
      (setProgress((R) => ({
        ...R,
        words: [...R.words, currentWord.word],
      })),
        notify(
          text(
            "Жаңа сөз сөздігіңе қосылды. +5 XP",
            "Новое слово добавлено в словарь. +5 XP",
          ),
        ));
    },
    speakWord = () => {
      if (!("speechSynthesis" in window)) {
        notify(
          text(
            "Бұл браузер дыбыстауды қолдамайды. Транскрипцияға назар аудар.",
            "Браузер не поддерживает озвучивание. Используй транскрипцию.",
          ),
        );
        return;
      }
      const R = window.speechSynthesis
        .getVoices()
        .find((lt) => lt.lang.toLowerCase().startsWith("kk"));
      if (!R) {
        notify(
          text(
            "Қазақша дауыс құрылғыда орнатылмаған. Оқылуы: " +
              currentWord.transcription,
            "На устройстве нет казахского голоса. Произношение: " +
              currentWord.transcription,
          ),
        );
        return;
      }
      window.speechSynthesis.cancel();
      const H = new SpeechSynthesisUtterance(currentWord.word);
      ((H.lang = "kk-KZ"),
        (H.voice = R),
        (H.rate = 0.8),
        (H.onstart = () => setSpeaking(!0)),
        (H.onend = () => setSpeaking(!1)),
        (H.onerror = () => {
          (setSpeaking(!1),
            notify(
              text(
                "Дыбыстау қолжетімсіз. Транскрипцияны оқып көр.",
                "Озвучивание недоступно. Используй транскрипцию.",
              ),
            ));
        }),
        window.speechSynthesis.speak(H));
    },
    completeLesson = (R) => {
      progress.completed.includes(R.id) ||
        (setProgress((H) => ({
          ...H,
          completed: [...H.completed, R.id],
        })),
        notify(
          text(
            "Бір қадам алға! Сабақ аяқталды. +20 XP",
            "Ещё шаг вперёд! Урок завершён. +20 XP",
          ),
        ));
    },
    openCatalog = () => {
      (setCatalogFilter("all"),
        setSearch(""),
        setModal({
          type: "all",
        }));
    },
    changeWord = (R) => {
      const H = wordTab === "word" ? words.length : proverbs.length;
      (setWordIndex((lt) => (lt + R + H) % H), setFlipped(!1));
    },
    navigation = [
      {
        id: "home",
        title: text("Басты бет", "Главная"),
      },
      {
        id: "explore",
        title: text("Таным әлемі", "Мир познания"),
      },
      {
        id: "games",
        title: text("Ойындар", "Игры"),
      },
      {
        id: "heritage",
        title: text("Мұра галереясы", "Галерея наследия"),
      },
    ],
    categoryIcon = (R, H = 19) =>
      R === "language" ? (
        <BookOpen size={H} />
      ) : R === "culture" ? (
        <Music2 size={H} />
      ) : R === "history" ? (
        <Landmark size={H} />
      ) : (
        <Flower2 size={H} />
      ),
    lessonList = (R) => (
      <div className="lesson-list">
        {R.map((H, lt) => (
          <button
            key={H.id}
            className="lesson-list-item"
            onClick={() =>
              setModal({
                type: "lesson",
                lesson: H,
              })
            }
          >
            <span
              className={`lesson-number ${progress.completed.includes(H.id) ? "done" : ""}`}
            >
              {progress.completed.includes(H.id) ? (
                <Check size={18} />
              ) : (
                String(lt + 1).padStart(2, "0")
              )}
            </span>
            <span className="lesson-list-copy">
              <strong>{text(H.title, H.titleRu)}</strong>
              <span>{text(H.intro, H.introRu)}</span>
            </span>
            <ArrowUpRight size={20} />
          </button>
        ))}
      </div>
    ),
    renderGallery = (R = !1) => (
      <div className={`gallery-grid ${R ? "gallery-full" : ""}`}>
        {galleryItems
          .filter(
            (H) => R || galleryFilter === "all" || H.kind === galleryFilter,
          )
          .map((H) => (
            <button
              key={H.id}
              className={`gallery-card ${H.kind === "people" ? "portrait-card" : ""}`}
              onClick={() => {
                const lt = lessons.find((kt) => kt.id === H.id);
                lt &&
                  setModal({
                    type: "lesson",
                    lesson: lt,
                  });
              }}
            >
                                         {H.video ? (
                <video
                  src={H.video}
                  poster={H.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={H.image}
                  alt={text(H.title, H.titleRu)}
                  loading="lazy"
                />
              )}
              <span className="gallery-image-shade" />
              <span className="gallery-card-category">
                {H.kind === "people"
                  ? text("ҰЛЫ ТҰЛҒАЛАР", "ВЕЛИКИЕ ЛИЧНОСТИ")
                  : text("ҰЛТТЫҚ МҰРА", "НАЦИОНАЛЬНОЕ НАСЛЕДИЕ")}
              </span>
              <span className="gallery-card-content">
                <strong>{text(H.title, H.titleRu)}</strong>
                <span>{text(H.subtitle, H.subtitleRu)}</span>
              </span>
              <span className="gallery-arrow">
                <ArrowUpRight size={19} />
              </span>
            </button>
          ))}
      </div>
    ),
        renderVideoMaterials = () => (
      <div className="gallery-grid">
        {videoMaterials.map((item) => (
          <button
            key={item.id}
            className="gallery-card video-card"
            onClick={() => setModal({ type: "video", item })}
          >
            <img src={item.poster} alt={text(item.title, item.titleRu)} loading="lazy" />
            <span className="gallery-image-shade" />
            <span className="video-play-icon" aria-hidden="true">
              <Play size={22} fill="currentColor" />
            </span>
            <span className="gallery-card-content">
              <strong>{text(item.title, item.titleRu)}</strong>
              <span>{text(item.subtitle, item.subtitleRu)}</span>
            </span>
          </button>
        ))}
      </div>
    ),
    renderModal = () => {
      if (!modal) return null;
      if (modal.type === "game") {
        const R = {
          lang: lang,
          onComplete: _,
        };
        return modal.game === "quiz" ? (
          <QuizGame {...R} />
        ) : modal.game === "match" ? (
          <MatchingGame {...R} />
        ) : (
          <WordGame {...R} />
        );
      }
      if (modal.type === "category") {
        const R = categories.find((lt) => lt.id === modal.id),
          H = lessons.filter((lt) => lt.category === modal.id);
        return (
          <div className="catalog-panel">
            <div className="modal-symbol">{categoryIcon(modal.id, 28)}</div>
            <p className="eyebrow">{text("ТАНЫМ ӘЛЕМІ", "МИР ПОЗНАНИЯ")}</p>
            <h2>{text(R.title, R.titleRu)}</h2>
            <p className="modal-description">
              {text(R.description, R.descriptionRu)}
            </p>
            <div className="catalog-summary">
              <span>
                <BookOpen size={15} />
                {H.length} {text("шағын сабақ", "мини-урока")}
              </span>
              <span>
                <Clock3 size={15} />
                {text("Әр сабақ 2–3 минут", "По 2–3 минуты")}
              </span>
            </div>
            {lessonList(H)}
            <div className="catalog-hint">
              <ShieldCheck size={18} />
              {text(
                "Әр аяқталған сабақ үшін 20 XP жина. Өз қарқыныңмен үйрен.",
                "Получай 20 XP за каждый завершённый урок. Учись в своём темпе.",
              )}
            </div>
          </div>
        );
      }
      if (modal.type === "lesson") {
        const R = modal.lesson,
          H = progress.completed.includes(R.id),
          lt = lessons.find(
            (kt) =>
              kt.category === R.category &&
              kt.id !== R.id &&
              !progress.completed.includes(kt.id),
          );
        return (
          <article className="lesson-panel">
            <button
              className="text-button lesson-back"
              onClick={() =>
                setModal({
                  type: "category",
                  id: R.category,
                })
              }
            >
              <ArrowLeft size={16} />
              {text(
                categories.find((kt) => kt.id === R.category).title,
                categories.find((kt) => kt.id === R.category).titleRu,
              )}
            </button>
            {R.image && (
              <img
                className={`lesson-cover ${["abai", "shokan"].includes(R.id) ? "lesson-portrait" : ""}`}
                src={R.image}
                alt={text(R.title, R.titleRu)}
              />
            )}
            <p className="eyebrow">
              {text("МҰРАҢДЫ ТАНЫ", "ПОЗНАЙ СВОЁ НАСЛЕДИЕ")}{" "}
              <span>
                {"· 3 "}
                {text("минут", "минуты")}
              </span>
            </p>
            <h2>{text(R.title, R.titleRu)}</h2>
            <p className="lesson-intro">{text(R.intro, R.introRu)}</p>
            {R.id === "letters" && (
              <div className="kazakh-letters">
                {Array.from("ӘҒҚҢӨҰҮҺІ").map((kt) => (
                  <span key={kt}>{kt}</span>
                ))}
              </div>
            )}
            {R.id === "ornament" && (
              <div className="ornament-lesson">
                <Ornament />
                <Ornament />
                <Ornament />
              </div>
            )}
            <div className="lesson-body">
              {(lang === "kz" ? R.body : R.bodyRu).map((kt) => (
                <p key={kt}>{kt}</p>
              ))}
            </div>
            <div className="lesson-fact">
              <SmallSpark />
              <p>{text(R.fact, R.factRu)}</p>
            </div>
            {R.source && (
              <a
                className="source-link"
                href={R.source}
                target="_blank"
                rel="noreferrer"
              >
                {text("Дереккөзді қарау", "Посмотреть источник")}
                <ExternalLink size={12} />
              </a>
            )}
            <div className="lesson-actions">
              <button
                className={`primary-button ${H ? "completed-button" : ""}`}
                onClick={() =>
                  H
                    ? setModal(
                        lt
                          ? {
                              type: "lesson",
                              lesson: lt,
                            }
                          : {
                              type: "category",
                              id: R.category,
                            },
                      )
                    : completeLesson(R)
                }
              >
                {H ? (
                  <>
                    {lt
                      ? text("Келесі сабақ", "Следующий урок")
                      : text("Бөлімге оралу", "Вернуться к темам")}
                    <ArrowRight size={17} />
                  </>
                ) : (
                  <>
                    <CircleCheck size={18} />
                    {text("Оқыдым, түсіндім", "Прочитано и понятно")}
                    <span>{"+20 XP"}</span>
                  </>
                )}
              </button>
              {H && (
                <span className="completed-label">
                  <Check size={15} />
                  {text("Сабақ аяқталды", "Урок завершён")}
                </span>
              )}
            </div>
          </article>
        );
      }
      if (modal.type === "all") {
        const R = lessons.filter(
          (H) =>
            (catalogFilter === "all" || H.category === catalogFilter) &&
            `${H.title} ${H.titleRu} ${H.intro}`
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()),
        );
        return (
          <div className="catalog-panel">
            <p className="eyebrow">
              {text("СЕНІҢ БІЛІМ КЕҢІСТІГІҢ", "ТВОЁ ПРОСТРАНСТВО ЗНАНИЙ")}
            </p>
            <h2>{text("Таным кітапханасы", "Библиотека знаний")}</h2>
            <p className="modal-description">
              {text(
                "12 шағын сабақ. Төрт бағыт. Шексіз шабыт.",
                "12 мини-уроков. Четыре направления. Бесконечное вдохновение.",
              )}
            </p>
            <label className="search-field">
              <Search size={18} />
              <input
                value={search}
                onChange={(H) => setSearch(H.target.value)}
                placeholder={text("Тақырып іздеу...", "Найти тему...")}
                aria-label={text("Тақырып іздеу", "Поиск темы")}
              />
              {search && (
                <button
                  className="icon-button"
                  onClick={() => setSearch("")}
                  aria-label={text("Іздеуді тазалау", "Очистить поиск")}
                >
                  <X size={16} />
                </button>
              )}
            </label>
            <div className="catalog-filters">
              <button
                className={catalogFilter === "all" ? "active" : ""}
                onClick={() => setCatalogFilter("all")}
              >
                {text("Барлығы", "Все")}
              </button>
              {categories.map((H) => (
                <button
                  key={H.id}
                  className={catalogFilter === H.id ? "active" : ""}
                  onClick={() => setCatalogFilter(H.id)}
                >
                  {text(H.title, H.titleRu)}
                </button>
              ))}
            </div>
            {R.length ? (
              lessonList(R)
            ) : (
              <div className="empty-state">
                <Search size={32} />
                <h3>{text("Тақырып табылмады", "Тема не найдена")}</h3>
                <p>
                  {text(
                    "Басқа сөзбен іздеп көр немесе сүзгіні өзгерт.",
                    "Попробуй другое слово или измени фильтр.",
                  )}
                </p>
                <button
                  className="text-button"
                  onClick={() => {
                    (setSearch(""), setCatalogFilter("all"));
                  }}
                >
                  {text("Барлық сабақты көрсету", "Показать все уроки")}
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        );
      }
      if (modal.type === "gallery")
        return (
          <div className="catalog-panel">
            <p className="eyebrow">
              {text("ӨТКЕННЕН — БОЛАШАҚҚА", "ИЗ ПРОШЛОГО — В БУДУЩЕЕ")}
            </p>
            <h2>{text("Мұра галереясы", "Галерея наследия")}</h2>
            <p className="modal-description">
              {text(
                "Әр бейненің артында — бір тарих. Таңдап, танысып көр.",
                "За каждым образом — история. Выбери и узнай больше.",
              )}
            </p>
            {renderGallery(!0)}
            <p className="image-credit">
              {text(
                "Тұлғалар портреттері: Отандастар қоры, e-history.kz. Мәдени көріністер — иллюстрациялық AI-бейнелер.",
                "Портреты: Фонд Отандастар, e-history.kz. Культурные сцены — иллюстративные AI-изображения.",
              )}
            </p>
          </div>
        );
              if (modal.type === "videos")
        return (
          <div className="catalog-panel">
            <p className="eyebrow">
              {text("КӨРУГЕ ТҰРАРЛЫҚ", "СТОИТ ПОСМОТРЕТЬ")}
            </p>
            <h2>{text("Видеоматериалдар", "Видеоматериалы")}</h2>
            <p className="modal-description">
              {text(
                "Ұлы тұлғалар туралы бейнероликтер мен әдеби мұралар.",
                "Видеоролики о великих личностях и литературном наследии.",
              )}
            </p>
            {renderVideoMaterials()}
          </div>
        );
      if (modal.type === "video")
        return (
          <div className="video-player-panel">
            <p className="eyebrow">
              {text(modal.item.title, modal.item.titleRu)}
            </p>
            <h2>{text(modal.item.subtitle, modal.item.subtitleRu)}</h2>
            <video
              src={modal.item.video}
              poster={modal.item.poster}
              controls
              autoPlay
              className="video-player"
            />
          </div>
        );
      if (modal.type === "progress") {
        const R = [
          {
            icon: <Sprout />,
            label: text("Алғашқы қадам", "Первый шаг"),
            detail: text("1 сабақты аяқта", "Заверши 1 урок"),
            done: progress.completed.length > 0,
          },
          {
            icon: <BookOpen />,
            label: text("Тіл жанашыры", "Друг языка"),
            detail: text("3 тіл сабағын оқы", "Пройди 3 урока языка"),
            done: lessons
              .filter((H) => H.category === "language")
              .every((H) => progress.completed.includes(H.id)),
          },
          {
            icon: <Trophy />,
            label: text("Ойын шебері", "Мастер игры"),
            detail: text("3 ойынды аяқта", "Заверши 3 игры"),
            done: Object.keys(progress.games).length === 3,
          },
          {
            icon: <Bookmark />,
            label: text("Сөз жинаушы", "Коллекционер слов"),
            detail: text("5 сөзді сақта", "Сохрани 5 слов"),
            done: progress.words.length === 5,
          },
        ];
        return (
          <div className="progress-panel">
            <div className="modal-symbol">
              <Award size={30} />
            </div>
            <p className="eyebrow">
              {text("ӘР ҚАДАМЫҢ МАҢЫЗДЫ", "КАЖДЫЙ ШАГ ВАЖЕН")}
            </p>
            <h2>{text("Менің жетістіктерім", "Мои достижения")}</h2>
            <div className="profile-level">
              <div>
                <span>{text("Сенің дәрежең", "Твой уровень")}</span>
                <h3>{level}</h3>
              </div>
              <strong>
                {totalXP}
                <small>{"XP"}</small>
              </strong>
            </div>
            <div className="progress-stats">
              <div>
                <strong>
                  {progress.completed.length}
                  <small>{"/12"}</small>
                </strong>
                <span>{text("Оқылған сабақ", "Уроков пройдено")}</span>
              </div>
              <div>
                <strong>
                  {Object.keys(progress.games).length}
                  <small>{"/3"}</small>
                </strong>
                <span>{text("Аяқталған ойын", "Игр завершено")}</span>
              </div>
              <div>
                <strong>
                  {progress.words.length}
                  <small>{"/5"}</small>
                </strong>
                <span>{text("Жаңа сөз", "Новых слов")}</span>
              </div>
            </div>
            <h3 className="panel-subheading">
              {text("Сенің белгілерің", "Твои значки")}
            </h3>
            <div className="badge-grid">
              {R.map((H) => (
                <div
                  key={H.label}
                  className={`achievement-badge ${H.done ? "earned" : ""}`}
                >
                  <span>
                    {H.icon}
                    {H.done && <Check className="badge-check" size={12} />}
                  </span>
                  <strong>{H.label}</strong>
                  <small>{H.detail}</small>
                </div>
              ))}
            </div>
            {progress.words.length > 0 && (
              <div className="saved-words">
                <h3 className="panel-subheading">
                  {text("Менің сөздігім", "Мой словарь")}
                </h3>
                {progress.words.map((H) => (
                  <span key={H}>
                    {H}
                    <small>
                      {words.find((lt) => lt.word === H)?.translation}
                    </small>
                  </span>
                ))}
              </div>
            )}
            <button
              className="primary-button full-width"
              onClick={() =>
                setModal({
                  type: "lesson",
                  lesson:
                    lessons.find((H) => !progress.completed.includes(H.id)) ||
                    lessons[0],
                })
              }
            >
              {text("Саяхатты жалғастыру", "Продолжить путешествие")}
              <ArrowRight size={18} />
            </button>
            <p className="storage-note">
              <ShieldCheck size={14} />
              {text(
                "Жетістіктер осы браузерде сақталады. Тіркелу қажет емес.",
                "Прогресс хранится в этом браузере. Регистрация не нужна.",
              )}
            </p>
            <button
              className="reset-progress"
              onClick={() =>
                setModal({
                  type: "reset",
                })
              }
            >
              {text("Жетістіктерді қалпына келтіру", "Сбросить прогресс")}
            </button>
          </div>
        );
      }
      return modal.type === "reset" ? (
        <div className="catalog-panel">
          <div className="modal-symbol sand">
            <RotateCcw size={28} />
          </div>
          <h2>
            {text("Бәрін қайта бастаймыз ба?", "Начать с чистого листа?")}
          </h2>
          <p className="modal-description">
            {text(
              "Оқылған сабақтар, сақталған сөздер мен ойын нәтижелері өшіріледі. Бұл әрекетті кері қайтару мүмкін емес.",
              "Пройденные уроки, сохранённые слова и результаты игр будут удалены. Это действие нельзя отменить.",
            )}
          </p>
          <div className="confirm-actions">
            <button
              className="secondary-button"
              onClick={() =>
                setModal({
                  type: "progress",
                })
              }
            >
              {text("Бас тарту", "Отмена")}
            </button>
            <button
              className="primary-button"
              onClick={() => {
                (setProgress(emptyProgress),
                  setModal({
                    type: "progress",
                  }),
                  notify(
                    text(
                      "Жаңа саяхатқа дайынсың!",
                      "Всё готово к новому путешествию!",
                    ),
                  ));
              }}
            >
              {text("Қайта бастау", "Сбросить")}
            </button>
          </div>
        </div>
      ) : (
                       <div className="about-panel">
  <Ornament />
  <p className="eyebrow">{"QAZAQ TILI"}</p>
  <video
    src="/videos/materials/project-intro.mp4"
    controls
    className="about-video"
  />
          <h2>
            {text(
              `Тамыры терең.
Танымы шексіз.`,
              `Глубокие корни.
Безграничное познание.`,
            )}
          </h2>
          <p className="modal-description">
            {text("Тілді таны. Елді таны.", "Познавай язык. Познавай страну.")}
          </p>
          <p>
            {text(
              "QAZAQ TILI — қазақ тілі мен ұлттық мұраны жаңаша танытатын интерактивті білім кеңістігі. Біз тіл, өнер, тарих пен дәстүрді бір сапарға біріктірдік.",
              "QAZAQ TILI — интерактивное образовательное пространство, которое по-новому знакомит с казахским языком и национальным наследием. Мы объединили язык, искусство, историю и традиции в одном путешествии.",
            )}
          </p>
          <div className="about-steps">
            <span>
              <BookOpen size={23} />
              <strong>{text("Таны", "Познавай")}</strong>
              {text("Шағын сабақтарды оқы", "Читай мини-уроки")}
            </span>
            <span>
              <Layers size={23} />
              <strong>{text("Үйрен", "Изучай")}</strong>
              {text("Сөздер мен мағыналарды аш", "Открывай слова и смыслы")}
            </span>
            <span>
              <Trophy size={23} />
              <strong>{text("Ойна", "Играй")}</strong>
              {text("Біліміңді ойынмен бекіт", "Закрепляй знания в игре")}
            </span>
          </div>
          <p className="about-note">
            {text(
              "Материалдар бастапқы танысуға арналған. Тарихи және мәдени деректердің сілтемелері сабақтарда берілген. Декордың негізі — ұсынылған қазақ ою-өрнегі. Мәдени көріністер AI көмегімен жасалған иллюстрациялар, тарихи тұлғалардың портреттері ашық дереккөздерден алынған.",
              "Материалы предназначены для первого знакомства. Ссылки на исторические и культурные источники приведены в уроках. Декор основан на предоставленном казахском орнаменте. Культурные сцены — AI-иллюстрации, портреты исторических личностей взяты из открытых источников.",
            )}
          </p>
          <button
            className="primary-button"
            onClick={() => {
              (setModal(null), navigateTo("explore"));
            }}
          >
            {text("Саяхатты бастау", "Начать путешествие")}
            <ArrowRight size={18} />
          </button>
        </div>
      );
    };
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#explore">
        {text("Мазмұнға өту", "Перейти к содержимому")}
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <a
            className="brand"
            href="#home"
            onClick={(R) => {
              (R.preventDefault(), navigateTo("home"));
            }}
            aria-label="QAZAQ TILI — басты бет"
          >
            <span className="brand-emblem">
              <Ornament />
            </span>
            <span className="brand-name">
              {"QAZAQ "}
              <b>{"TILI"}</b>
              <small>
                {text("ТІЛДІ ТАНЫ. ЕЛДІ ТАНЫ.", "ПОЗНАВАЙ ЯЗЫК И СТРАНУ.")}
              </small>
            </span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={text("Негізгі мәзір", "Главное меню")}
          >
            {navigation.map((R) => (
              <a
                key={R.id}
                href={`#${R.id}`}
                onClick={(H) => {
                  (H.preventDefault(), navigateTo(R.id));
                }}
                className={activeSection === R.id ? "active" : ""}
              >
                {R.title}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="language-button"
              aria-label={text("Переключить на русский", "Қазақ тіліне ауысу")}
              onClick={() => setLang((R) => (R === "kz" ? "ru" : "kz"))}
            >
              {lang === "kz" ? "ҚАЗ" : "РУС"}
              <ChevronDown size={13} />
            </button>
            <button
              className="progress-button"
              onClick={() =>
                setModal({
                  type: "progress",
                })
              }
            >
              <Award size={17} />
              <span>{text("Менің жетістіктерім", "Мои достижения")}</span>
              {totalXP > 0 && <i>{totalXP}</i>}
            </button>
            <button
              className="mobile-menu-button icon-button"
              aria-expanded={menuOpen}
              aria-label={text("Мәзірді ашу", "Открыть меню")}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
            >
              {navigation.map((R) => (
                <a
                  key={R.id}
                  href={`#${R.id}`}
                  onClick={(H) => {
                    (H.preventDefault(), navigateTo(R.id));
                  }}
                >
                  {R.title}
                  <ArrowUpRight size={17} />
                </a>
              ))}
              <button
                onClick={() => {
                  (setMenuOpen(!1),
                    setModal({
                      type: "progress",
                    }));
                }}
              >
                <Award size={18} />
                {text("Менің жетістіктерім", "Мои достижения")}
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-ambient" />
          <div className="hero-inner container">
            <motion.div className="hero-copy">
              <div className="hero-kicker">
                <span className="tiny-spark">{"✧"}</span>
                {text(
                  "ҰЛТТЫҚ МҰРА. ЖАҢА КӨЗҚАРАС.",
                  "НАЦИОНАЛЬНОЕ НАСЛЕДИЕ. НОВЫЙ ВЗГЛЯД.",
                )}
              </div>
              <h1>
                {lang === "kz" ? (
                  <>
                    {"Тіл – халық"}
                    <br />
                    <em>{"қазынасы"}</em>
                    <span className="heading-dot">{"."}</span>
                  </>
                ) : (
                  <>
                    {"Язык — душа"}
                    <br />
                    <em>{"народа"}</em>
                    <span className="heading-dot">{"."}</span>
                  </>
                )}
              </h1>
              <h2>
                {text(
                  "Тілді таны. Елді таны.",
                  "Познавай язык. Познавай страну.",
                )}
              </h2>
              <p className="hero-description">
                {text(
                  "Қазақ тілінің сұлулығын, ұлы даланың тарихын және ұлттық мұрамызды бірге ашайық. Әр қадам — жаңа таным, әр сөз — жаңа әлем.",
                  "Открой красоту казахского языка, историю великой степи и национальное наследие. Каждый шаг — новое открытие. Каждое слово — новый мир.",
                )}
              </p>
              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => navigateTo("explore")}
                >
                  {text("Саяхатты бастау", "Начать путешествие")}
                  <ArrowUpRight size={19} />
                </button>
                <button
                  className="hero-about"
                  onClick={() =>
                    setModal({
                      type: "about",
                    })
                  }
                >
                  <span className="play-circle">
                    <Play size={12} fill="currentColor" />
                  </span>
                  {text("Жоба туралы", "О проекте")}
                </button>
              </div>
              <div className="hero-assurances">
                <span>
                  <CircleCheck size={14} />
                  {text("Тегін әрі қолжетімді", "Бесплатно и доступно")}
                </span>
                <span>
                  <CircleCheck size={14} />
                  {text("Өз қарқыныңмен үйрен", "Учись в своём темпе")}
                </span>
              </div>
              <div className="hero-lower">
                <span className="mini-line" />
                <span>
                  {text(
                    "Тамырымыз тереңде. Болашағымыз білімде.",
                    "Наши корни — в истории. Будущее — в знаниях.",
                  )}
                </span>
              </div>
            </motion.div>
            <motion.div className="hero-art">
              <div className="hero-arch-outline" />
              <div className="hero-arch-outline second" />
              <div className="hero-ornament-strip" aria-hidden="true" />
              <OrnamentTrace />
              <div className="hero-photo">
                <img
                  src="/images/steppe-yurt.webp"
                  alt={text(
                    "Асқар таулар аясындағы қазақтың оюлы ақ киіз үйі",
                    "Казахская белая юрта с орнаментом на фоне гор",
                  )}
                  fetchPriority="high"
                />
                <div className="photo-vignette" />
              </div>
              <div className="hero-seal">
                <span>{"ҰЛЫ ДАЛА"}</span>
                <Ornament />
                <span>{"ҰЛАҒАТЫ"}</span>
              </div>
              <div className="image-caption">
                <span className="caption-line" />
                <span>
                  {"48° N · 68° E "}
                  <b>{"QAZAQSTAN"}</b>
                </span>
              </div>
              <div className="floating-note">
                <span className="floating-icon">
                  <Sprout size={24} strokeWidth={1.4} />
                </span>
                <span>
                  <strong>
                    {text(
                      "Мұраны таны. Өзіңді тап.",
                      "Познай наследие. Найди себя.",
                    )}
                  </strong>
                  <small>
                    {text(
                      "Бабалар аманаты — болашаққа жол",
                      "Наследие предков — путь в будущее",
                    )}
                  </small>
                </span>
                <span className="note-star">{"✧"}</span>
              </div>
              <span className="art-spark spark-one">{"✦"}</span>
              <span className="art-spark spark-two">{"✧"}</span>
            </motion.div>
          </div>
          <button
            className="scroll-cue"
            onClick={() => navigateTo("explore")}
            aria-label={text("Төменге өту", "Прокрутить вниз")}
          >
            <span>{text("ТАНЫМҒА ҚАДАМ", "ШАГ К ПОЗНАНИЮ")}</span>
            <ArrowDown size={14} />
          </button>
        </section>
        <div className="value-strip">
          <div className="container value-strip-inner">
            <div>
              <span className="value-icon">
                <BookOpen size={21} strokeWidth={1.5} />
              </span>
              <span>
                <strong>
                  {text(
                    "Тілден басталған таным",
                    "Познание начинается с языка",
                  )}
                </strong>
                <small>
                  {text("Сөздің сырына үңіл", "Открой тайну каждого слова")}
                </small>
              </span>
            </div>
            <span className="value-divider" />
            <div>
              <span className="value-icon">
                <Layers size={21} strokeWidth={1.5} />
              </span>
              <span>
                <strong>
                  {text(
                    "Ойна. Үйрен. Есте сақта.",
                    "Играй. Изучай. Запоминай.",
                  )}
                </strong>
                <small>
                  {text(
                    "Білімді қызыққа айналдыр",
                    "Преврати обучение в открытие",
                  )}
                </small>
              </span>
            </div>
            <span className="value-divider" />
            <div>
              <span className="value-icon">
                <Flower2 size={22} strokeWidth={1.5} />
              </span>
              <span>
                <strong>
                  {text(
                    "Ұлттық рух, заманауи әлем",
                    "Национальный дух, новый мир",
                  )}
                </strong>
                <small>
                  {text(
                    "Дәстүрді жаңаша сезін",
                    "Почувствуй традиции по-новому",
                  )}
                </small>
              </span>
            </div>
          </div>
        </div>
        <section
          className="explore-section section-space container"
          id="explore"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />{" "}
                {text("ҚАЗАҚ ӘЛЕМІНЕ ҚАДАМ БАС", "ОТКРОЙ КАЗАХСКИЙ МИР")}
              </p>
              <h2>
                {text("Сенің таным саяхатың", "Твоё путешествие к знаниям")}
              </h2>
              <p className="section-description">
                {text(
                  "Өзіңе жақын бағытты таңда. Әр бөлім — жаңа бір әлем.",
                  "Выбери близкое направление. Каждый раздел — новый мир.",
                )}
              </p>
            </div>
            <button className="section-link" onClick={openCatalog}>
              {text("Барлық тақырыптар", "Все темы")}
              <ArrowUpRight size={18} />
            </button>
          </div>
          <JourneyRoute
            lang={lang}
            onSelect={(stage) => {
              if (stage === 0) setModal({ type: "category", id: "language" });
              if (stage === 1) {
                setGalleryFilter("people");
                navigateTo("heritage");
              }
              if (stage === 2) setModal({ type: "category", id: "traditions" });
              if (stage === 3) {
                setGalleryFilter("tradition");
                navigateTo("heritage");
              }
              if (stage === 4) navigateTo("kazakhstan");
              if (stage === 5) setModal({ type: "game", game: "quiz" });
            }}
          />
          <div className="category-grid">
            {categories.map((R, H) => (
              <button
                key={R.id}
                className={`category-card category-${R.id}`}
                onClick={() =>
                  setModal({
                    type: "category",
                    id: R.id,
                  })
                }
              >
                <div className="category-image">
                  <img
                    src={R.image}
                    alt={text(R.title, R.titleRu)}
                    loading="lazy"
                  />
                  <span className="category-tag">{text(R.tag, R.tagRu)}</span>
                  <span className="category-order">
                    {"0"}
                    {H + 1}
                  </span>
                </div>
                <div className="category-body">
                  <span className="category-card-icon">
                    {categoryIcon(R.id, 20)}
                  </span>
                  <h3>{text(R.title, R.titleRu)}</h3>
                  <p>{text(R.description, R.descriptionRu)}</p>
                  <div className="category-bottom">
                    <span>
                      {lessons.filter((lt) => lt.category === R.id).length}{" "}
                      {text("интерактивті сабақ", "интерактивных урока")}
                    </span>
                    <span className="circle-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="daily-section container" id="learn">
          <div className="daily-editorial">
            <p className="eyebrow">
              <span />
              {text("КҮН САЙЫН — ЖАҢА ТАНЫМ", "КАЖДЫЙ ДЕНЬ — НОВОЕ ОТКРЫТИЕ")}
            </p>
            <h2>
              {text(
                `Бір сөз.
Мың мағына.`,
                `Одно слово.
Тысяча смыслов.`,
              )}
            </h2>
            <p>
              {text(
                "Тіл — жай ғана сөздер жиынтығы емес. Ол — халықтың жаны, тарихы мен дүниетанымы. Қазақ сөзінің тереңіне бірге үңілейік.",
                "Язык — больше, чем просто слова. Это душа, история и мировоззрение народа. Давай откроем глубину казахского слова.",
              )}
            </p>
            <button
              className="section-link"
              onClick={() =>
                setModal({
                  type: "category",
                  id: "language",
                })
              }
            >
              {text("Тіл әлеміне ену", "Открыть мир языка")}
              <ArrowRight size={17} />
            </button>
            <div className="daily-ornament" aria-hidden="true">
              <Ornament />
              <Ornament />
              <Ornament />
            </div>
          </div>
          <div className="word-feature">
            <div className="word-feature-top">
              <div className="word-tabs">
                <button
                  className={wordTab === "word" ? "active" : ""}
                  onClick={() => {
                    (setWordTab("word"), setWordIndex(0), setFlipped(!1));
                  }}
                >
                  {text("Күннің сөзі", "Слово дня")}
                </button>
                <button
                  className={wordTab === "proverb" ? "active" : ""}
                  onClick={() => {
                    (setWordTab("proverb"), setWordIndex(0), setFlipped(!1));
                  }}
                >
                  {text("Мақал-мәтел", "Пословица")}
                </button>
              </div>
              <span className="word-count">
                {String(wordIndex + 1).padStart(2, "0")}{" "}
                <span>
                  {"/ "}
                  {wordTab === "word" ? "05" : "03"}
                </span>
              </span>
            </div>
            <div className={`word-card ${flipped ? "is-flipped" : ""}`}>
              <div className="word-card-inner">
                <div className="word-card-front" aria-hidden={flipped}>
                  <div className="word-card-top">
                    <span>
                      <span className="gold-dot" />
                      {wordTab === "word"
                        ? text("СӨЗ ҚАЗЫНАСЫ", "СОКРОВИЩНИЦА СЛОВ")
                        : text("ХАЛЫҚ ДАНАЛЫҒЫ", "НАРОДНАЯ МУДРОСТЬ")}
                    </span>
                    <button
                      className={`audio-button ${speaking ? "speaking" : ""}`}
                      onClick={speakWord}
                      tabIndex={flipped ? -1 : 0}
                      aria-label={text(
                        "Қазақша тыңдау",
                        "Послушать по-казахски",
                      )}
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                  <button
                    className="word-flip-target"
                    onClick={() => setFlipped(!0)}
                    tabIndex={flipped ? -1 : 0}
                    aria-label={text(
                      "Карточканы аударып, аудармасын көру",
                      "Перевернуть карточку и посмотреть перевод",
                    )}
                  >
                    <h3
                      className={wordTab === "proverb" ? "proverb-heading" : ""}
                    >
                      {currentWord.word}
                    </h3>
                    <span className="transcription">
                      {"[ "}
                      {currentWord.transcription}
                      {" ]"}
                    </span>
                    <p>
                      {lang === "kz"
                        ? currentWord.definition
                        : currentWord.translation}
                    </p>
                    <span className="flip-instruction">
                      <RotateCcw size={13} />
                      {text(
                        "Мағынасын ашу үшін карточканы аудар",
                        "Переверни карточку, чтобы узнать больше",
                      )}
                    </span>
                  </button>
                  <Ornament className="word-watermark" />
                </div>
                <div className="word-card-back" aria-hidden={!flipped}>
                  <span className="eyebrow">
                    {text("СӨЗДІҢ МАҒЫНАСЫ", "ЗНАЧЕНИЕ СЛОВА")}
                  </span>
                  <h3>{currentWord.translation}</h3>
                  <p className="word-example">
                    {"«"}
                    {currentWord.example}
                    {"»"}
                  </p>
                  <p>{currentWord.exampleRu}</p>
                  <button
                    className="back-flip text-button"
                    tabIndex={flipped ? 0 : -1}
                    onClick={() => setFlipped(!1)}
                  >
                    <RotateCcw size={14} />
                    {text("Қазақша сөзге оралу", "Вернуться к слову")}
                  </button>
                  <Ornament className="word-watermark" />
                </div>
              </div>
            </div>
            <div className="word-feature-bottom">
              {wordTab === "word" ? (
                <button
                  className={`save-word text-button ${progress.words.includes(currentWord.word) ? "saved" : ""}`}
                  onClick={saveWord}
                >
                  {progress.words.includes(currentWord.word) ? (
                    <CircleCheck size={16} />
                  ) : (
                    <Bookmark size={16} />
                  )}
                  {progress.words.includes(currentWord.word)
                    ? text("Сөздігіме қосылды", "В моём словаре")
                    : text("Сөздігіме қосу", "Добавить в словарь")}
                </button>
              ) : (
                <span className="proverb-note">
                  {text(
                    "Халық даналығы — асыл мұра",
                    "Народная мудрость — ценное наследие",
                  )}
                </span>
              )}
              <div className="word-pagination">
                <button
                  className="icon-button"
                  aria-label={text("Алдыңғы карточка", "Предыдущая карточка")}
                  onClick={() => changeWord(-1)}
                >
                  <ChevronLeft size={18} />
                </button>
                <span>
                  {Array.from({
                    length: wordTab === "word" ? words.length : proverbs.length,
                  }).map((R, H) => (
                    <button
                      key={H}
                      aria-label={`${text("Карточка", "Карточка")} ${H + 1}`}
                      className={wordIndex === H ? "active" : ""}
                      onClick={() => {
                        (setWordIndex(H), setFlipped(!1));
                      }}
                    />
                  ))}
                </span>
                <button
                  className="icon-button"
                  aria-label={text("Келесі карточка", "Следующая карточка")}
                  onClick={() => changeWord(1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="games-section section-space" id="games">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span />
                  {text(
                    "ҚЫЗЫҚТЫ ОЙЫН. ПАЙДАЛЫ БІЛІМ.",
                    "ИНТЕРЕСНЫЕ ИГРЫ. ПОЛЕЗНЫЕ ЗНАНИЯ.",
                  )}
                </p>
                <h2>
                  {text(
                    "Ойнай отырып, ой-өрісіңді кеңейт",
                    "Играй и расширяй кругозор",
                  )}
                </h2>
                <p className="section-description">
                  {text(
                    "Біліміңді сына, жаңа сөздер үйрен және жетістіктерге жет.",
                    "Проверь знания, выучи новые слова и собери достижения.",
                  )}
                </p>
              </div>
              <span className="small-label">
                <Sparkles size={16} />
                {text("Әр ойын — алға бір қадам", "Каждая игра — шаг вперёд")}
              </span>
            </div>
            <div className="games-grid">
              <button
                className="game-card game-quiz"
                onClick={() =>
                  setModal({
                    type: "game",
                    game: "quiz",
                  })
                }
              >
                <div className="game-card-top">
                  <span className="game-type">
                    {text("ВИКТОРИНА", "ВИКТОРИНА")}
                  </span>
                  <span className="game-xp">{"60 XP"}</span>
                </div>
                <div className="game-illustration quiz-illustration">
                  <span className="quiz-orbit" />
                  <span className="question-block">{"?"}</span>
                  <span className="quiz-check">
                    <Check size={25} />
                  </span>
                  <span className="illustration-star">{"✦"}</span>
                </div>
                <h3>
                  {text("Қаншалықты білесің?", "Что ты знаешь о Казахстане?")}
                </h3>
                <p>
                  {text(
                    "Тіл, мәдениет және тарих туралы 6 сұрақ. Өз біліміңді сынап көр!",
                    "6 вопросов о языке, культуре и истории. Проверь свои знания!",
                  )}
                </p>
                <div className="game-card-bottom">
                  <span>
                    <Clock3 size={14} />
                    {"3 "}
                    {text("минут", "минуты")}
                  </span>
                  <span className="game-play">
                    {text("Бастау", "Начать")}
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </button>
              <button
                className="game-card game-word"
                onClick={() =>
                  setModal({
                    type: "game",
                    game: "word",
                  })
                }
              >
                <div className="game-card-top">
                  <span className="game-type">
                    {text("СӨЗ ОЙЫНЫ", "СЛОВЕСНАЯ ИГРА")}
                  </span>
                  <span className="game-xp">{"40 XP"}</span>
                </div>
                <div className="game-illustration word-illustration">
                  <span>{"Қ"}</span>
                  <span>{"А"}</span>
                  <span>{"З"}</span>
                  <small>{"✧"}</small>
                </div>
                <h3>{text("Әріптен әлем құра", "Собери мир из букв")}</h3>
                <p>
                  {text(
                    "Шашылған әріптерді жинап, жасырынған қазақша сөзді тап.",
                    "Расставь буквы по местам и найди спрятанное казахское слово.",
                  )}
                </p>
                <div className="game-card-bottom">
                  <span>
                    <Clock3 size={14} />
                    {"2 "}
                    {text("минут", "минуты")}
                  </span>
                  <span className="game-play">
                    {text("Ойнау", "Играть")}
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </button>
              <button
                className="game-card game-match"
                onClick={() =>
                  setModal({
                    type: "game",
                    game: "match",
                  })
                }
              >
                <div className="game-card-top">
                  <span className="game-type">
                    {text("СӘЙКЕСТЕНДІРУ", "НАЙДИ ПАРУ")}
                  </span>
                  <span className="game-xp">{"30 XP"}</span>
                </div>
                <div className="game-illustration match-illustration">
                  <span className="match-mini-card">
                    <Ornament />
                  </span>
                  <span className="match-mini-card">
                    <Ornament />
                  </span>
                  <span className="match-dotted-line" />
                </div>
                <h3>{text("Сөздер тоғысқанда", "Когда слова встречаются")}</h3>
                <p>
                  {text(
                    "Сөз бен мағынаны сәйкестендір. Есте сақтау қабілетіңді шыңда.",
                    "Соедини слова с их переводами. Тренируй память и учись новому.",
                  )}
                </p>
                <div className="game-card-bottom">
                  <span>
                    <Clock3 size={14} />
                    {"2 "}
                    {text("минут", "минуты")}
                  </span>
                  <span className="game-play">
                    {text("Жұбын табу", "Найти пары")}
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>
        <section
          className="heritage-section section-space container"
          id="heritage"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                {text("ҰРПАҚҚА АМАНАТ", "НАСЛЕДИЕ ПОКОЛЕНИЙ")}
              </p>
              <h2>
                {text(
                  "Ұлы дала. Ұлы мұра.",
                  "Великая степь. Великое наследие.",
                )}
              </h2>
              <p className="section-description">
                {text(
                  "Елді ел еткен тұлғалар мен ұлтты ұйыстырған құндылықтар.",
                  "Личности, создавшие историю, и ценности, объединившие народ.",
                )}
              </p>
            </div>
                                               <button
              className="section-link"
              onClick={() =>
                setModal({
                  type: "gallery",
                })
              }
            >
              {text("Галереяны ашу", "Открыть галерею")}
              <ArrowUpRight size={18} />
            </button>
          </div>
                       <div className="gallery-filters">
            {[
              {
                id: "all",
                text: text("Барлығы", "Всё наследие"),
              },
              {
                id: "people",
                text: text("Ұлы тұлғалар", "Великие личности"),
              },
              {
                id: "tradition",
                text: text("Дәстүр мен өнер", "Традиции и искусство"),
              },
            ].map((R) => (
              <button
                key={R.id}
                className={galleryFilter === R.id ? "active" : ""}
                aria-pressed={galleryFilter === R.id}
                onClick={() => setGalleryFilter(R.id)}
              >
                {R.text}
              </button>
            ))}
            <button
              className="video-materials-tab"
              onClick={() => setModal({ type: "videos" })}
            >
              <Play size={14} fill="currentColor" />
              {text("Видеоматериалдар", "Видеоматериалы")}
            </button>
          </div>
          {renderGallery()}
        </section>
        <KazakhstanMap lang={lang} />
        <section className="closing-section container">
          <div className="closing-inner">
            <div className="closing-ornament" />
            <div className="closing-emblem">
              <Ornament />
            </div>
            <p className="eyebrow">
              {text(
                "ТІЛ — КЕШЕ МЕН ЕРТЕҢНІҢ АРАСЫНДАҒЫ КӨПІР",
                "ЯЗЫК — МОСТ МЕЖДУ ПРОШЛЫМ И БУДУЩИМ",
              )}
            </p>
            <h2>
              {text(
                "Өз тіліңнен — өз әлеміңе.",
                "Через родной язык — к своему миру.",
              )}
            </h2>
            <p>
              {text(
                "Ұлы сапар кішкентай қадамнан басталады. Бүгін бір сөз үйрен. Бір тарихты таны.",
                "Большое путешествие начинается с маленького шага. Выучи одно слово. Узнай одну историю.",
              )}
            </p>
            <button
              className="gold-button"
              onClick={() =>
                setModal({
                  type: "lesson",
                  lesson:
                    lessons.find((R) => !progress.completed.includes(R.id)) ||
                    lessons[0],
                })
              }
            >
              {text("Алғашқы қадамды жаса", "Сделай первый шаг")}
              <ArrowUpRight size={18} />
            </button>
            <span className="closing-small">
              <Heart size={12} />
              {text(
                "Ұлттық мұраға деген сүйіспеншілікпен",
                "С любовью к национальному наследию",
              )}
            </span>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <a
            href="#home"
            className="brand"
            onClick={(R) => {
              (R.preventDefault(), navigateTo("home"));
            }}
          >
            <span className="brand-emblem">
              <Ornament />
            </span>
            <span className="brand-name">
              {"QAZAQ "}
              <b>{"TILI"}</b>
              <small>
                {text("ТІЛДІ ТАНЫ. ЕЛДІ ТАНЫ.", "ПОЗНАВАЙ ЯЗЫК И СТРАНУ.")}
              </small>
            </span>
          </a>
          <p>
            {text(
              "Тамыры терең. Танымы шексіз.",
              "Глубокие корни. Безграничное познание.",
            )}
          </p>
          <button
            className="text-button"
            onClick={() =>
              setModal({
                type: "about",
              })
            }
          >
            {text("Жоба туралы", "О проекте")}
            <ArrowUpRight size={15} />
          </button>
          <a
            className="text-button"
            href="https://ich.unesco.org/en/state/kazakhstan-KZ"
            target="_blank"
            rel="noreferrer"
          >
            {text("Мұра дереккөздері", "Источники о наследии")}
            <ExternalLink size={13} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            {"© 2026 QAZAQ TILI. "}
            {text("Білім. Мәдениет. Мұра.", "Образование. Культура. Наследие.")}
          </span>
          <span>
            <span className="footer-dot" />
            {text("Қазақстанда шабыттанған", "Вдохновлено Казахстаном")}
          </span>
          <button onClick={() => navigateTo("home")}>
            {text("Жоғарыға", "Наверх")}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </footer>
      <AnimatePresence mode="wait">
        {modal && (
          <Modal
            key={
              modal.type === "game"
                ? modal.game
                : modal.type === "lesson"
                  ? modal.lesson.id
                  : modal.type
            }
            title={text("Таным кеңістігі", "Пространство знаний")}
            onClose={() => {
              (setModal(null),
                "speechSynthesis" in window && window.speechSynthesis.cancel(),
                setSpeaking(!1));
            }}
            wide={["all", "gallery", "videos", "video"].includes(modal.type)}
          >
            {renderModal()}
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            role="status"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 12,
            }}
          >
            <CircleCheck size={20} />
            <span>{toast}</span>
            <button
              className="icon-button"
              onClick={() => setToast("")}
              aria-label={text("Хабарламаны жабу", "Закрыть уведомление")}
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
function SmallSpark() {
  return <Sparkles size={22} strokeWidth={1.6} />;
}
