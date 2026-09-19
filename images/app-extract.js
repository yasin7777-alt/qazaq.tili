function ST({ children: a, onClose: i, title: o, wide: c = !1 }) {
  const u = k.useRef(null),
    p = k.useRef(i);
  return (
    k.useEffect(() => {
      p.current = i;
    }, [i]),
    k.useEffect(() => {
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
    f.jsx(xs.div, {
      className: "modal-backdrop",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: i,
      "data-source-loc": "src/components/Modal.tsx:28:9",
      children: f.jsxs(xs.div, {
        ref: u,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": o,
        tabIndex: -1,
        className: `modal-panel ${c ? "modal-wide" : ""}`,
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.98 },
        transition: { duration: 0.22 },
        onClick: (d) => d.stopPropagation(),
        "data-source-loc": "src/components/Modal.tsx:29:4",
        children: [
          f.jsx("button", {
            className: "modal-close icon-button",
            "aria-label": "Жабу / Закрыть",
            onClick: i,
            "data-source-loc": "src/components/Modal.tsx:30:6",
            children: f.jsx(Ci, {
              size: 21,
              "data-source-loc": "src/components/Modal.tsx:30:96",
            }),
          }),
          a,
        ],
      }),
    })
  );
}
const za = (a, i, o) => (a === "kz" ? i : o),
  Si = [
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
  Je = [
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
  ms = [
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
  co = [
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
  ds = [
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
  ba = [
    { id: 0, kz: "Отан", ru: "Родина" },
    { id: 1, kz: "Білім", ru: "Знание" },
    { id: 2, kz: "Достық", ru: "Дружба" },
    { id: 3, kz: "Мұра", ru: "Наследие" },
  ],
  uy = [
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
function Nf({ lang: a, title: i, description: o, points: c, onRestart: u }) {
  return f.jsxs("div", {
    className: "game-result",
    "data-source-loc": "src/components/Games.tsx:9:9",
    children: [
      f.jsxs("div", {
        className: "result-trophy",
        "data-source-loc": "src/components/Games.tsx:9:38",
        children: [
          f.jsx(Pu, {
            size: 44,
            strokeWidth: 1.4,
            "data-source-loc": "src/components/Games.tsx:9:69",
          }),
          f.jsx(_o, {
            className: "trophy-spark",
            size: 22,
            "data-source-loc": "src/components/Games.tsx:9:106",
          }),
        ],
      }),
      f.jsx("p", {
        className: "eyebrow",
        "data-source-loc": "src/components/Games.tsx:9:158",
        children: za(a, "ЖАРАЙСЫҢ!", "ОТЛИЧНАЯ РАБОТА!"),
      }),
      f.jsx("h2", {
        "data-source-loc": "src/components/Games.tsx:9:235",
        children: i,
      }),
      f.jsx("p", {
        "data-source-loc": "src/components/Games.tsx:9:251",
        children: o,
      }),
      f.jsxs("div", {
        className: "result-points",
        "data-source-loc": "src/components/Games.tsx:9:271",
        children: [
          c,
          " XP ",
          f.jsx("span", {
            "data-source-loc": "src/components/Games.tsx:9:314",
            children: za(a, "жеке рекорд сақталды", "личный рекорд сохранён"),
          }),
        ],
      }),
      f.jsxs("button", {
        className: "primary-button",
        onClick: u,
        "data-source-loc": "src/components/Games.tsx:9:400",
        children: [
          f.jsx(Ni, {
            size: 17,
            "data-source-loc": "src/components/Games.tsx:9:455",
          }),
          za(a, "Қайта ойнау", "Сыграть ещё"),
        ],
      }),
    ],
  });
}
function TT({ lang: a, onComplete: i }) {
  const [o, c] = k.useState(0),
    [u, p] = k.useState(null),
    [d, y] = k.useState(0),
    [g, m] = k.useState(!1),
    x = (M, w) => za(a, M, w),
    A = ds[o],
    S = (M) => {
      u === null && (p(M), M === A.answer && y((w) => w + 1));
    },
    O = () => {
      o === ds.length - 1
        ? (m(!0), i("quiz", d * 10))
        : (c((M) => M + 1), p(null));
    };
  return g
    ? f.jsx(Nf, {
        lang: a,
        title: `${d} / ${ds.length} ${x("дұрыс жауап", "правильных ответов")}`,
        description: x(
          "Әр сұрақ — жаңа білім. Білмегеніңді тақырыптардан оқып, тағы байқап көр!",
          "Каждый вопрос — новое знание. Изучи темы и попробуй улучшить результат!",
        ),
        points: d * 10,
        onRestart: () => {
          (c(0), p(null), y(0), m(!1));
        },
        "data-source-loc": "src/components/Games.tsx:21:23",
      })
    : f.jsxs("div", {
        className: "game-content",
        "data-source-loc": "src/components/Games.tsx:22:9",
        children: [
          f.jsx("div", {
            className: "modal-symbol",
            "data-source-loc": "src/components/Games.tsx:22:39",
            children: f.jsx(P3, {
              size: 28,
              "data-source-loc": "src/components/Games.tsx:22:69",
            }),
          }),
          f.jsx("p", {
            className: "eyebrow",
            "data-source-loc": "src/components/Games.tsx:22:98",
            children: x("БІЛІМ САЙЫСЫ", "КВИЗ О КАЗАХСТАНЕ"),
          }),
          f.jsxs("div", {
            className: "game-progress-label",
            "data-source-loc": "src/components/Games.tsx:22:165",
            children: [
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:22:202",
                children: [x("Сұрақ", "Вопрос"), " ", o + 1, " / ", ds.length],
              }),
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:22:274",
                children: [d, " ", x("дұрыс", "верно")],
              }),
            ],
          }),
          f.jsx("div", {
            className: "progress-track",
            "data-source-loc": "src/components/Games.tsx:22:322",
            children: f.jsx("span", {
              style: { width: `${((o + 1) / ds.length) * 100}%` },
              "data-source-loc": "src/components/Games.tsx:22:354",
            }),
          }),
          f.jsx("h2", {
            className: "question-title",
            "data-source-loc": "src/components/Games.tsx:22:433",
            children: x(A.q, A.ru),
          }),
          f.jsx("div", {
            className: "quiz-options",
            "data-source-loc": "src/components/Games.tsx:22:497",
            children: A.options.map((M, w) =>
              f.jsxs(
                "button",
                {
                  disabled: u !== null,
                  className: `quiz-option ${u !== null && w === A.answer ? "is-correct" : ""} ${u === w && w !== A.answer ? "is-wrong" : ""}`,
                  onClick: () => S(w),
                  "data-source-loc": "src/components/Games.tsx:22:564",
                  children: [
                    f.jsx("span", {
                      className: "option-letter",
                      "data-source-loc": "src/components/Games.tsx:22:787",
                      children: "ABCD"[w],
                    }),
                    M,
                    u !== null &&
                      w === A.answer &&
                      f.jsx(Pn, {
                        size: 18,
                        "data-source-loc": "src/components/Games.tsx:22:890",
                      }),
                    u === w &&
                      w !== A.answer &&
                      f.jsx(Ci, {
                        size: 18,
                        "data-source-loc": "src/components/Games.tsx:22:952",
                      }),
                  ],
                },
                M,
              ),
            ),
          }),
          u !== null &&
            f.jsxs("div", {
              className: `answer-feedback ${u === A.answer ? "" : "feedback-learn"}`,
              role: "status",
              "data-source-loc": "src/components/Games.tsx:22:1004",
              children: [
                f.jsx($0, {
                  size: 19,
                  "data-source-loc": "src/components/Games.tsx:22:1107",
                }),
                f.jsx("span", {
                  "data-source-loc": "src/components/Games.tsx:22:1129",
                  children: x(A.fact, A.factRu),
                }),
              ],
            }),
          f.jsxs("button", {
            className: "primary-button game-next",
            disabled: u === null,
            onClick: O,
            "data-source-loc": "src/components/Games.tsx:22:1184",
            children: [
              o === ds.length - 1
                ? x("Нәтижені көру", "Посмотреть результат")
                : x("Келесі сұрақ", "Следующий вопрос"),
              f.jsx(Ta, {
                size: 18,
                "data-source-loc": "src/components/Games.tsx:22:1392",
              }),
            ],
          }),
        ],
      });
}
function jT({ lang: a, onComplete: i }) {
  const [o, c] = k.useState(null),
    [u, p] = k.useState(null),
    [d, y] = k.useState([]),
    [g, m] = k.useState(!1),
    [x, A] = k.useState(0),
    S = (M, w) => za(a, M, w),
    O = (M, w) => {
      m(!1);
      const q = M === "left" ? w : o,
        Y = M === "right" ? w : u;
      if ((M === "left" ? c(w) : p(w), q !== null && Y !== null)) {
        if ((A((X) => X + 1), q === Y)) {
          const X = [...d, q];
          (y(X), X.length === ba.length && i("match", 30));
        } else m(!0);
        (c(null), p(null));
      }
    };
  return d.length === ba.length
    ? f.jsx(Nf, {
        lang: a,
        title: S("Барлық жұп табылды!", "Все пары найдены!"),
        description: `${S("Сен төрт қазақша сөзді қайталадың.", "Ты повторил четыре казахских слова.")} ${S("Әрекет саны:", "Количество попыток:")} ${x}.`,
        points: 30,
        onRestart: () => {
          (y([]), A(0), m(!1));
        },
        "data-source-loc": "src/components/Games.tsx:44:54",
      })
    : f.jsxs("div", {
        className: "game-content",
        "data-source-loc": "src/components/Games.tsx:45:9",
        children: [
          f.jsx("div", {
            className: "modal-symbol sage",
            "data-source-loc": "src/components/Games.tsx:45:39",
            children: f.jsx(_o, {
              size: 28,
              "data-source-loc": "src/components/Games.tsx:45:74",
            }),
          }),
          f.jsx("p", {
            className: "eyebrow",
            "data-source-loc": "src/components/Games.tsx:45:101",
            children: S("СӨЗДЕРДІ СӘЙКЕСТЕНДІР", "НАЙДИ ПАРЫ"),
          }),
          f.jsx("h2", {
            "data-source-loc": "src/components/Games.tsx:45:170",
            children: S("Мағынасын тап", "Соедини по смыслу"),
          }),
          f.jsx("p", {
            className: "modal-description",
            "data-source-loc": "src/components/Games.tsx:45:220",
            children: S(
              "Қазақша сөзді және оның орысша аудармасын таңда.",
              "Выбери казахское слово и его перевод на русский.",
            ),
          }),
          f.jsxs("div", {
            className: "game-progress-label",
            "data-source-loc": "src/components/Games.tsx:45:364",
            children: [
              f.jsx("span", {
                "data-source-loc": "src/components/Games.tsx:45:401",
                children: S("Табылған жұптар", "Найдено пар"),
              }),
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:45:451",
                children: [d.length, " / 4"],
              }),
            ],
          }),
          f.jsx("div", {
            className: "progress-track",
            "data-source-loc": "src/components/Games.tsx:45:490",
            children: f.jsx("span", {
              style: { width: `${d.length * 25}%` },
              "data-source-loc": "src/components/Games.tsx:45:522",
            }),
          }),
          f.jsxs("div", {
            className: "matching-board",
            "data-source-loc": "src/components/Games.tsx:45:580",
            children: [
              f.jsxs("div", {
                "data-source-loc": "src/components/Games.tsx:45:612",
                children: [
                  f.jsx("div", {
                    className: "matching-label",
                    "data-source-loc": "src/components/Games.tsx:45:617",
                    children: "ҚАЗАҚША",
                  }),
                  ba.map((M) =>
                    f.jsxs(
                      "button",
                      {
                        disabled: d.includes(M.id),
                        onClick: () => O("left", M.id),
                        className: `match-tile ${o === M.id ? "selected" : ""} ${d.includes(M.id) ? "matched" : ""}`,
                        "data-source-loc": "src/components/Games.tsx:45:689",
                        children: [
                          M.kz,
                          d.includes(M.id) &&
                            f.jsx(Pn, {
                              size: 17,
                              "data-source-loc":
                                "src/components/Games.tsx:45:936",
                            }),
                        ],
                      },
                      M.id,
                    ),
                  ),
                ],
              }),
              f.jsxs("div", {
                "data-source-loc": "src/components/Games.tsx:45:972",
                children: [
                  f.jsx("div", {
                    className: "matching-label",
                    "data-source-loc": "src/components/Games.tsx:45:977",
                    children: "РУССКИЙ",
                  }),
                  [ba[2], ba[0], ba[3], ba[1]].map((M) =>
                    f.jsxs(
                      "button",
                      {
                        disabled: d.includes(M.id),
                        onClick: () => O("right", M.id),
                        className: `match-tile ${u === M.id ? "selected" : ""} ${d.includes(M.id) ? "matched" : ""}`,
                        "data-source-loc": "src/components/Games.tsx:45:1108",
                        children: [
                          M.ru,
                          d.includes(M.id) &&
                            f.jsx(Pn, {
                              size: 17,
                              "data-source-loc":
                                "src/components/Games.tsx:45:1357",
                            }),
                        ],
                      },
                      M.id,
                    ),
                  ),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: `match-status ${g ? "wrong-text" : ""}`,
            role: "status",
            "data-source-loc": "src/components/Games.tsx:45:1399",
            children: g
              ? S(
                  "Бұл сөздер жұп емес. Тағы байқап көр!",
                  "Эти слова не пара. Попробуй ещё!",
                )
              : d.length > 0
                ? S("Керемет! Жалғастыра бер.", "Отлично! Продолжай.")
                : S("Алғашқы сөзді таңда.", "Выбери первое слово."),
          }),
        ],
      });
}
function ET({ lang: a, onComplete: i }) {
  const [o, c] = k.useState(0),
    [u, p] = k.useState([]),
    [d, y] = k.useState(null),
    [g, m] = k.useState(!1),
    x = (M, w) => za(a, M, w),
    A = uy[o],
    S = () => {
      y(u.map((M) => A.letters[M]).join("") === A.answer ? "correct" : "wrong");
    },
    O = () => {
      o === uy.length - 1
        ? (m(!0), i("word", 40))
        : (c((M) => M + 1), p([]), y(null));
    };
  return g
    ? f.jsx(Nf, {
        lang: a,
        title: x("Сөз шебері!", "Мастер слова!"),
        description: x(
          "Үш сөзді де дұрыс құрастырдың. Қазақша сөздік қорың кеңейіп келеді!",
          "Ты правильно составил все три слова. Твой казахский словарный запас растёт!",
        ),
        points: 40,
        onRestart: () => {
          (c(0), p([]), y(null), m(!1));
        },
        "data-source-loc": "src/components/Games.tsx:57:23",
      })
    : f.jsxs("div", {
        className: "game-content",
        "data-source-loc": "src/components/Games.tsx:58:9",
        children: [
          f.jsx("div", {
            className: "modal-symbol sand",
            "data-source-loc": "src/components/Games.tsx:58:39",
            children: f.jsx("span", {
              className: "letter-symbol",
              "data-source-loc": "src/components/Games.tsx:58:74",
              children: "Ә",
            }),
          }),
          f.jsx("p", {
            className: "eyebrow",
            "data-source-loc": "src/components/Games.tsx:58:120",
            children: x("ӘРІПТЕРДЕН СӨЗ ҚҰРА", "СОБЕРИ СЛОВО"),
          }),
          f.jsxs("div", {
            className: "game-progress-label",
            "data-source-loc": "src/components/Games.tsx:58:189",
            children: [
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:58:226",
                children: [x("Сөз", "Слово"), " ", o + 1, " / 3"],
              }),
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:58:274",
                children: [A.answer.length, " ", x("әріп", "букв")],
              }),
            ],
          }),
          f.jsx("div", {
            className: "progress-track",
            "data-source-loc": "src/components/Games.tsx:58:335",
            children: f.jsx("span", {
              style: { width: `${((o + 1) / 3) * 100}%` },
              "data-source-loc": "src/components/Games.tsx:58:367",
            }),
          }),
          f.jsx("h2", {
            className: "question-title",
            "data-source-loc": "src/components/Games.tsx:58:427",
            children: x(A.clue, A.clueRu),
          }),
          f.jsx("div", {
            className: "word-slots",
            "data-source-loc": "src/components/Games.tsx:58:494",
            children: Array.from(A.answer).map((M, w) =>
              f.jsx(
                "button",
                {
                  className: `word-slot ${d === "correct" ? "is-correct" : ""}`,
                  "aria-label": `${x("Әріпті өшіру", "Удалить букву")} ${w + 1}`,
                  disabled: u[w] === void 0 || d === "correct",
                  onClick: () => {
                    (p(u.filter((q, Y) => Y !== w)), y(null));
                  },
                  "data-source-loc": "src/components/Games.tsx:58:563",
                  children: u[w] !== void 0 ? A.letters[u[w]] : "",
                },
                w,
              ),
            ),
          }),
          f.jsx("div", {
            className: "letter-bank",
            "data-source-loc": "src/components/Games.tsx:58:932",
            children: A.letters.map((M, w) =>
              f.jsx(
                "button",
                {
                  className: "letter-tile",
                  disabled: u.includes(w) || d === "correct",
                  onClick: () => {
                    (p([...u, w]), y(null));
                  },
                  "data-source-loc": "src/components/Games.tsx:58:996",
                  children: M,
                },
                w,
              ),
            ),
          }),
          f.jsxs("button", {
            className: "text-button reset-letters",
            disabled: !u.length || d === "correct",
            onClick: () => {
              (p([]), y(null));
            },
            "data-source-loc": "src/components/Games.tsx:58:1183",
            children: [
              f.jsx(Ni, {
                size: 14,
                "data-source-loc": "src/components/Games.tsx:58:1334",
              }),
              x("Тазалау", "Очистить"),
            ],
          }),
          d &&
            f.jsxs("div", {
              className: `answer-feedback ${d === "wrong" ? "feedback-learn" : ""}`,
              role: "status",
              "data-source-loc": "src/components/Games.tsx:58:1403",
              children: [
                d === "correct"
                  ? f.jsx(ps, {
                      size: 19,
                      "data-source-loc": "src/components/Games.tsx:58:1524",
                    })
                  : f.jsx($0, {
                      size: 19,
                      "data-source-loc": "src/components/Games.tsx:58:1552",
                    }),
                f.jsx("span", {
                  "data-source-loc": "src/components/Games.tsx:58:1575",
                  children:
                    d === "correct"
                      ? x("Дұрыс! Өте жақсы.", "Верно! Отличная работа.")
                      : x(
                          "Әріптердің орнын өзгертіп көр.",
                          "Попробуй изменить порядок букв.",
                        ),
                }),
              ],
            }),
          d === "correct"
            ? f.jsxs("button", {
                className: "primary-button game-next",
                onClick: O,
                "data-source-loc": "src/components/Games.tsx:58:1768",
                children: [
                  o === 2
                    ? x("Нәтижені көру", "Посмотреть результат")
                    : x("Келесі сөз", "Следующее слово"),
                  f.jsx(Ta, {
                    size: 18,
                    "data-source-loc": "src/components/Games.tsx:58:1923",
                  }),
                ],
              })
            : f.jsxs("button", {
                className: "primary-button game-next",
                disabled: u.length !== A.answer.length,
                onClick: S,
                "data-source-loc": "src/components/Games.tsx:58:1958",
                children: [
                  x("Тексеру", "Проверить"),
                  f.jsx(Pn, {
                    size: 18,
                    "data-source-loc": "src/components/Games.tsx:58:2097",
                  }),
                ],
              }),
        ],
      });
}
const Wu = { completed: [], words: [], games: {} },
  P0 = "qazaq-tili-progress-v1";
function MT() {
  try {
    const a = JSON.parse(localStorage.getItem(P0) || "null");
    return !a ||
      !Array.isArray(a.completed) ||
      !Array.isArray(a.words) ||
      !a.games ||
      typeof a.games != "object"
      ? Wu
      : {
          completed: [
            ...new Set(
              a.completed.filter(
                (i) => typeof i == "string" && Je.some((o) => o.id === i),
              ),
            ),
          ],
          words: [
            ...new Set(
              a.words.filter(
                (i) => typeof i == "string" && ms.some((o) => o.word === i),
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
    return Wu;
  }
}
function ue({ className: a = "", style: i }) {
  return f.jsx("span", {
    className: `ornament-motif ${a}`,
    style: i,
    "aria-hidden": "true",
    "data-source-loc": "src/App.tsx:21:9",
  });
}
const zT = [
  {
    id: "abai",
    kind: "people",
    image: "/images/abai.jpg",
    title: "Абай Құнанбайұлы",
    titleRu: "Абай Кунанбайулы",
    subtitle: "Ақын. Ойшыл. Дәуір үні.",
    subtitleRu: "Поэт. Мыслитель. Голос эпохи.",
  },
  {
    id: "yurt",
    kind: "tradition",
    image: "/images/steppe-yurt.webp",
    title: "Шаңырақтың шуағы",
    titleRu: "Под сводом шанырака",
    subtitle: "Көшпенділердің киелі мекені",
    subtitleRu: "Священный дом кочевников",
  },
  {
    id: "shokan",
    kind: "people",
    image: "/images/shokan.jpg",
    title: "Шоқан Уәлиханов",
    titleRu: "Шокан Уалиханов",
    subtitle: "Ғылымға жол ашқан жұлдыз",
    subtitleRu: "Звезда, осветившая путь науке",
  },
  {
    id: "dombyra",
    kind: "tradition",
    image: "/images/dombyra.webp",
    title: "Қос ішектің құдіреті",
    titleRu: "Сила двух струн",
    subtitle: "Жүрекке жеткен дала әуені",
    subtitleRu: "Мелодия степи, трогающая сердце",
  },
];
function NT() {
  const [a, i] = k.useState("kz"),
    [o, c] = k.useState(!1),
    [u, p] = k.useState("home"),
    [d, y] = k.useState(null),
    [g, m] = k.useState(MT),
    [x, A] = k.useState(""),
    [S, O] = k.useState(0),
    [M, w] = k.useState("word"),
    [q, Y] = k.useState(!1),
    [X, Q] = k.useState("all"),
    [Z, nt] = k.useState("all"),
    [ct, F] = k.useState(""),
    [$, st] = k.useState(!1),
    b = (R, H) => za(a, R, H),
    ht =
      g.completed.length * 20 +
      g.words.length * 5 +
      Object.values(g.games).reduce((R, H) => R + (H || 0), 0),
    ot = (M === "word" ? ms : co)[S % (M === "word" ? ms.length : co.length)],
    $t =
      ht >= 250
        ? b("Мұра сақтаушысы", "Хранитель наследия")
        : ht >= 80
          ? b("Зерттеуші", "Исследователь")
          : b("Жас саяхатшы", "Начинающий путешественник");
  (k.useEffect(() => {
    try {
      localStorage.setItem(P0, JSON.stringify(g));
    } catch {}
  }, [g]),
    k.useEffect(() => {
      document.documentElement.lang = a === "kz" ? "kk" : "ru";
    }, [a]),
    k.useEffect(() => {
      if (!x) return;
      const R = window.setTimeout(() => A(""), 4200);
      return () => clearTimeout(R);
    }, [x]),
    k.useEffect(() => {
      const R = new IntersectionObserver(
        (H) => {
          H.forEach((lt) => {
            lt.isIntersecting && p(lt.target.id);
          });
        },
        { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
      );
      return (
        document.querySelectorAll("section[id]").forEach((H) => R.observe(H)),
        () => R.disconnect()
      );
    }, []));
  const Ct = (R) => {
      A(R);
    },
    Mt = (R) => {
      (c(!1),
        p(R),
        document
          .getElementById(R)
          ?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          }));
    },
    _ = (R, H) => {
      m((lt) => ({
        ...lt,
        games: { ...lt.games, [R]: Math.max(lt.games[R] ?? 0, H) },
      }));
    },
    K = () => {
      if (g.words.includes(ot.word)) {
        Ct(
          b("Бұл сөз сенің сөздігіңде бар.", "Это слово уже в твоём словаре."),
        );
        return;
      }
      (m((R) => ({ ...R, words: [...R.words, ot.word] })),
        Ct(
          b(
            "Жаңа сөз сөздігіңе қосылды. +5 XP",
            "Новое слово добавлено в словарь. +5 XP",
          ),
        ));
    },
    P = () => {
      if (!("speechSynthesis" in window)) {
        Ct(
          b(
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
        Ct(
          b(
            "Қазақша дауыс құрылғыда орнатылмаған. Оқылуы: " + ot.transcription,
            "На устройстве нет казахского голоса. Произношение: " +
              ot.transcription,
          ),
        );
        return;
      }
      window.speechSynthesis.cancel();
      const H = new SpeechSynthesisUtterance(ot.word);
      ((H.lang = "kk-KZ"),
        (H.voice = R),
        (H.rate = 0.8),
        (H.onstart = () => st(!0)),
        (H.onend = () => st(!1)),
        (H.onerror = () => {
          (st(!1),
            Ct(
              b(
                "Дыбыстау қолжетімсіз. Транскрипцияны оқып көр.",
                "Озвучивание недоступно. Используй транскрипцию.",
              ),
            ));
        }),
        window.speechSynthesis.speak(H));
    },
    ft = (R) => {
      g.completed.includes(R.id) ||
        (m((H) => ({ ...H, completed: [...H.completed, R.id] })),
        Ct(
          b(
            "Бір қадам алға! Сабақ аяқталды. +20 XP",
            "Ещё шаг вперёд! Урок завершён. +20 XP",
          ),
        ));
    },
    yt = () => {
      (nt("all"), F(""), y({ type: "all" }));
    },
    j = (R) => {
      const H = M === "word" ? ms.length : co.length;
      (O((lt) => (lt + R + H) % H), Y(!1));
    },
    L = [
      { id: "home", title: b("Басты бет", "Главная") },
      { id: "explore", title: b("Таным әлемі", "Мир познания") },
      { id: "games", title: b("Ойындар", "Игры") },
      { id: "heritage", title: b("Мұра галереясы", "Галерея наследия") },
    ],
    J = (R, H = 19) =>
      R === "language"
        ? f.jsx(bi, { size: H, "data-source-loc": "src/App.tsx:80:74" })
        : R === "culture"
          ? f.jsx(uT, { size: H, "data-source-loc": "src/App.tsx:80:119" })
          : R === "history"
            ? f.jsx(sT, { size: H, "data-source-loc": "src/App.tsx:80:162" })
            : f.jsx(iy, { size: H, "data-source-loc": "src/App.tsx:80:188" }),
    W = (R) =>
      f.jsx("div", {
        className: "lesson-list",
        "data-source-loc": "src/App.tsx:82:47",
        children: R.map((H, lt) =>
          f.jsxs(
            "button",
            {
              className: "lesson-list-item",
              onClick: () => y({ type: "lesson", lesson: H }),
              "data-source-loc": "src/App.tsx:82:101",
              children: [
                f.jsx("span", {
                  className: `lesson-number ${g.completed.includes(H.id) ? "done" : ""}`,
                  "data-source-loc": "src/App.tsx:82:206",
                  children: g.completed.includes(H.id)
                    ? f.jsx(Pn, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:82:338",
                      })
                    : String(lt + 1).padStart(2, "0"),
                }),
                f.jsxs("span", {
                  className: "lesson-list-copy",
                  "data-source-loc": "src/App.tsx:82:397",
                  children: [
                    f.jsx("strong", {
                      "data-source-loc": "src/App.tsx:82:432",
                      children: b(H.title, H.titleRu),
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:82:482",
                      children: b(H.intro, H.introRu),
                    }),
                  ],
                }),
                f.jsx(De, {
                  size: 20,
                  "data-source-loc": "src/App.tsx:82:535",
                }),
              ],
            },
            H.id,
          ),
        ),
      }),
    rt = (R = !1) =>
      f.jsx("div", {
        className: `gallery-grid ${R ? "gallery-full" : ""}`,
        "data-source-loc": "src/App.tsx:84:42",
        children: zT
          .filter((H) => R || X === "all" || H.kind === X)
          .map((H) =>
            f.jsxs(
              "button",
              {
                className: `gallery-card ${H.kind === "people" ? "portrait-card" : ""}`,
                onClick: () => {
                  const lt = Je.find((kt) => kt.id === H.id);
                  lt && y({ type: "lesson", lesson: lt });
                },
                "data-source-loc": "src/App.tsx:84:209",
                children: [
                  f.jsx("img", {
                    src: H.image,
                    alt: b(H.title, H.titleRu),
                    loading: "lazy",
                    "data-source-loc": "src/App.tsx:84:427",
                  }),
                  f.jsx("span", {
                    className: "gallery-image-shade",
                    "data-source-loc": "src/App.tsx:84:499",
                  }),
                  f.jsx("span", {
                    className: "gallery-card-category",
                    "data-source-loc": "src/App.tsx:84:538",
                    children:
                      H.kind === "people"
                        ? b("ҰЛЫ ТҰЛҒАЛАР", "ВЕЛИКИЕ ЛИЧНОСТИ")
                        : b("ҰЛТТЫҚ МҰРА", "НАЦИОНАЛЬНОЕ НАСЛЕДИЕ"),
                  }),
                  f.jsxs("span", {
                    className: "gallery-card-content",
                    "data-source-loc": "src/App.tsx:84:693",
                    children: [
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:84:732",
                        children: b(H.title, H.titleRu),
                      }),
                      f.jsx("span", {
                        "data-source-loc": "src/App.tsx:84:778",
                        children: b(H.subtitle, H.subtitleRu),
                      }),
                    ],
                  }),
                  f.jsx("span", {
                    className: "gallery-arrow",
                    "data-source-loc": "src/App.tsx:84:833",
                    children: f.jsx(De, {
                      size: 19,
                      "data-source-loc": "src/App.tsx:84:865",
                    }),
                  }),
                ],
              },
              H.id,
            ),
          ),
      }),
    mt = () => {
      if (!d) return null;
      if (d.type === "game") {
        const R = { lang: a, onComplete: _ };
        return d.game === "quiz"
          ? f.jsx(TT, { ...R, "data-source-loc": "src/App.tsx:88:112" })
          : d.game === "match"
            ? f.jsx(jT, { ...R, "data-source-loc": "src/App.tsx:88:161" })
            : f.jsx(ET, { ...R, "data-source-loc": "src/App.tsx:88:187" });
      }
      if (d.type === "category") {
        const R = Si.find((lt) => lt.id === d.id),
          H = Je.filter((lt) => lt.category === d.id);
        return f.jsxs("div", {
          className: "catalog-panel",
          "data-source-loc": "src/App.tsx:92:13",
          children: [
            f.jsx("div", {
              className: "modal-symbol",
              "data-source-loc": "src/App.tsx:92:44",
              children: J(d.id, 28),
            }),
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:92:107",
              children: b("ТАНЫМ ӘЛЕМІ", "МИР ПОЗНАНИЯ"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:92:168",
              children: b(R.title, R.titleRu),
            }),
            f.jsx("p", {
              className: "modal-description",
              "data-source-loc": "src/App.tsx:92:214",
              children: b(R.description, R.descriptionRu),
            }),
            f.jsxs("div", {
              className: "catalog-summary",
              "data-source-loc": "src/App.tsx:92:300",
              children: [
                f.jsxs("span", {
                  "data-source-loc": "src/App.tsx:92:333",
                  children: [
                    f.jsx(bi, {
                      size: 15,
                      "data-source-loc": "src/App.tsx:92:339",
                    }),
                    H.length,
                    " ",
                    b("шағын сабақ", "мини-урока"),
                  ],
                }),
                f.jsxs("span", {
                  "data-source-loc": "src/App.tsx:92:413",
                  children: [
                    f.jsx(oo, {
                      size: 15,
                      "data-source-loc": "src/App.tsx:92:419",
                    }),
                    b("Әр сабақ 2–3 минут", "По 2–3 минуты"),
                  ],
                }),
              ],
            }),
            W(H),
            f.jsxs("div", {
              className: "catalog-hint",
              "data-source-loc": "src/App.tsx:92:517",
              children: [
                f.jsx(cy, {
                  size: 18,
                  "data-source-loc": "src/App.tsx:92:547",
                }),
                b(
                  "Әр аяқталған сабақ үшін 20 XP жина. Өз қарқыныңмен үйрен.",
                  "Получай 20 XP за каждый завершённый урок. Учись в своём темпе.",
                ),
              ],
            }),
          ],
        });
      }
      if (d.type === "lesson") {
        const R = d.lesson,
          H = g.completed.includes(R.id),
          lt = Je.find(
            (kt) =>
              kt.category === R.category &&
              kt.id !== R.id &&
              !g.completed.includes(kt.id),
          );
        return f.jsxs("article", {
          className: "lesson-panel",
          "data-source-loc": "src/App.tsx:98:13",
          children: [
            f.jsxs("button", {
              className: "text-button lesson-back",
              onClick: () => y({ type: "category", id: R.category }),
              "data-source-loc": "src/App.tsx:98:47",
              children: [
                f.jsx(U3, {
                  size: 16,
                  "data-source-loc": "src/App.tsx:98:158",
                }),
                b(
                  Si.find((kt) => kt.id === R.category).title,
                  Si.find((kt) => kt.id === R.category).titleRu,
                ),
              ],
            }),
            R.image &&
              f.jsx("img", {
                className: `lesson-cover ${["abai", "shokan"].includes(R.id) ? "lesson-portrait" : ""}`,
                src: R.image,
                alt: b(R.title, R.titleRu),
                "data-source-loc": "src/App.tsx:98:321",
              }),
            f.jsxs("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:98:479",
              children: [
                b("МҰРАҢДЫ ТАНЫ", "ПОЗНАЙ СВОЁ НАСЛЕДИЕ"),
                " ",
                f.jsxs("span", {
                  "data-source-loc": "src/App.tsx:98:546",
                  children: ["· 3 ", b("минут", "минуты")],
                }),
              ],
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:98:589",
              children: b(R.title, R.titleRu),
            }),
            f.jsx("p", {
              className: "lesson-intro",
              "data-source-loc": "src/App.tsx:98:631",
              children: b(R.intro, R.introRu),
            }),
            R.id === "letters" &&
              f.jsx("div", {
                className: "kazakh-letters",
                "data-source-loc": "src/App.tsx:98:724",
                children: Array.from("ӘҒҚҢӨҰҮҺІ").map((kt) =>
                  f.jsx(
                    "span",
                    { "data-source-loc": "src/App.tsx:98:795", children: kt },
                    kt,
                  ),
                ),
              }),
            R.id === "ornament" &&
              f.jsxs("div", {
                className: "ornament-lesson",
                "data-source-loc": "src/App.tsx:98:867",
                children: [
                  f.jsx(ue, { "data-source-loc": "src/App.tsx:98:900" }),
                  f.jsx(ue, { "data-source-loc": "src/App.tsx:98:908" }),
                  f.jsx(ue, { "data-source-loc": "src/App.tsx:98:916" }),
                ],
              }),
            f.jsx("div", {
              className: "lesson-body",
              "data-source-loc": "src/App.tsx:98:931",
              children: (a === "kz" ? R.body : R.bodyRu).map((kt) =>
                f.jsx(
                  "p",
                  { "data-source-loc": "src/App.tsx:98:1024", children: kt },
                  kt,
                ),
              ),
            }),
            f.jsxs("div", {
              className: "lesson-fact",
              "data-source-loc": "src/App.tsx:98:1066",
              children: [
                f.jsx(CT, { "data-source-loc": "src/App.tsx:98:1095" }),
                f.jsx("p", {
                  "data-source-loc": "src/App.tsx:98:1111",
                  children: b(R.fact, R.factRu),
                }),
              ],
            }),
            R.source &&
              f.jsxs("a", {
                className: "source-link",
                href: R.source,
                target: "_blank",
                rel: "noreferrer",
                "data-source-loc": "src/App.tsx:98:1173",
                children: [
                  b("Дереккөзді қарау", "Посмотреть источник"),
                  f.jsx(sy, {
                    size: 12,
                    "data-source-loc": "src/App.tsx:98:1300",
                  }),
                ],
              }),
            f.jsxs("div", {
              className: "lesson-actions",
              "data-source-loc": "src/App.tsx:98:1330",
              children: [
                f.jsx("button", {
                  className: `primary-button ${H ? "completed-button" : ""}`,
                  onClick: () =>
                    H
                      ? y(
                          lt
                            ? { type: "lesson", lesson: lt }
                            : { type: "category", id: R.category },
                        )
                      : ft(R),
                  "data-source-loc": "src/App.tsx:98:1362",
                  children: H
                    ? f.jsxs(f.Fragment, {
                        children: [
                          lt
                            ? b("Келесі сабақ", "Следующий урок")
                            : b("Бөлімге оралу", "Вернуться к темам"),
                          f.jsx(Ta, {
                            size: 17,
                            "data-source-loc": "src/App.tsx:98:1681",
                          }),
                        ],
                      })
                    : f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(ps, {
                            size: 18,
                            "data-source-loc": "src/App.tsx:98:1712",
                          }),
                          b("Оқыдым, түсіндім", "Прочитано и понятно"),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:98:1783",
                            children: "+20 XP",
                          }),
                        ],
                      }),
                }),
                H &&
                  f.jsxs("span", {
                    className: "completed-label",
                    "data-source-loc": "src/App.tsx:98:1826",
                    children: [
                      f.jsx(Pn, {
                        size: 15,
                        "data-source-loc": "src/App.tsx:98:1860",
                      }),
                      b("Сабақ аяқталды", "Урок завершён"),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      if (d.type === "all") {
        const R = Je.filter(
          (H) =>
            (Z === "all" || H.category === Z) &&
            `${H.title} ${H.titleRu} ${H.intro}`
              .toLocaleLowerCase()
              .includes(ct.toLocaleLowerCase()),
        );
        return f.jsxs("div", {
          className: "catalog-panel",
          "data-source-loc": "src/App.tsx:102:13",
          children: [
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:102:44",
              children: b("СЕНІҢ БІЛІМ КЕҢІСТІГІҢ", "ТВОЁ ПРОСТРАНСТВО ЗНАНИЙ"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:102:128",
              children: b("Таным кітапханасы", "Библиотека знаний"),
            }),
            f.jsx("p", {
              className: "modal-description",
              "data-source-loc": "src/App.tsx:102:182",
              children: b(
                "12 шағын сабақ. Төрт бағыт. Шексіз шабыт.",
                "12 мини-уроков. Четыре направления. Бесконечное вдохновение.",
              ),
            }),
            f.jsxs("label", {
              className: "search-field",
              "data-source-loc": "src/App.tsx:102:331",
              children: [
                f.jsx(oy, {
                  size: 18,
                  "data-source-loc": "src/App.tsx:102:363",
                }),
                f.jsx("input", {
                  value: ct,
                  onChange: (H) => F(H.target.value),
                  placeholder: b("Тақырып іздеу...", "Найти тему..."),
                  "aria-label": b("Тақырып іздеу", "Поиск темы"),
                  "data-source-loc": "src/App.tsx:102:382",
                }),
                ct &&
                  f.jsx("button", {
                    className: "icon-button",
                    onClick: () => F(""),
                    "aria-label": b("Іздеуді тазалау", "Очистить поиск"),
                    "data-source-loc": "src/App.tsx:102:554",
                    children: f.jsx(Ci, {
                      size: 16,
                      "data-source-loc": "src/App.tsx:102:667",
                    }),
                  }),
              ],
            }),
            f.jsxs("div", {
              className: "catalog-filters",
              "data-source-loc": "src/App.tsx:102:699",
              children: [
                f.jsx("button", {
                  className: Z === "all" ? "active" : "",
                  onClick: () => nt("all"),
                  "data-source-loc": "src/App.tsx:102:732",
                  children: b("Барлығы", "Все"),
                }),
                Si.map((H) =>
                  f.jsx(
                    "button",
                    {
                      className: Z === H.id ? "active" : "",
                      onClick: () => nt(H.id),
                      "data-source-loc": "src/App.tsx:102:883",
                      children: b(H.title, H.titleRu),
                    },
                    H.id,
                  ),
                ),
              ],
            }),
            R.length
              ? W(R)
              : f.jsxs("div", {
                  className: "empty-state",
                  "data-source-loc": "src/App.tsx:102:1072",
                  children: [
                    f.jsx(oy, {
                      size: 32,
                      "data-source-loc": "src/App.tsx:102:1101",
                    }),
                    f.jsx("h3", {
                      "data-source-loc": "src/App.tsx:102:1120",
                      children: b("Тақырып табылмады", "Тема не найдена"),
                    }),
                    f.jsx("p", {
                      "data-source-loc": "src/App.tsx:102:1172",
                      children: b(
                        "Басқа сөзбен іздеп көр немесе сүзгіні өзгерт.",
                        "Попробуй другое слово или измени фильтр.",
                      ),
                    }),
                    f.jsxs("button", {
                      className: "text-button",
                      onClick: () => {
                        (F(""), nt("all"));
                      },
                      "data-source-loc": "src/App.tsx:102:1275",
                      children: [
                        b("Барлық сабақты көрсету", "Показать все уроки"),
                        f.jsx(Ta, {
                          size: 15,
                          "data-source-loc": "src/App.tsx:102:1416",
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
      }
      if (d.type === "gallery")
        return f.jsxs("div", {
          className: "catalog-panel",
          "data-source-loc": "src/App.tsx:104:40",
          children: [
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:104:71",
              children: b("ӨТКЕННЕН — БОЛАШАҚҚА", "ИЗ ПРОШЛОГО — В БУДУЩЕЕ"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:104:152",
              children: b("Мұра галереясы", "Галерея наследия"),
            }),
            f.jsx("p", {
              className: "modal-description",
              "data-source-loc": "src/App.tsx:104:202",
              children: b(
                "Әр бейненің артында — бір тарих. Таңдап, танысып көр.",
                "За каждым образом — история. Выбери и узнай больше.",
              ),
            }),
            rt(!0),
            f.jsx("p", {
              className: "image-credit",
              "data-source-loc": "src/App.tsx:104:375",
              children: b(
                "Тұлғалар портреттері: Отандастар қоры, e-history.kz. Мәдени көріністер — иллюстрациялық AI-бейнелер.",
                "Портреты: Фонд Отандастар, e-history.kz. Культурные сцены — иллюстративные AI-изображения.",
              ),
            }),
          ],
        });
      if (d.type === "progress") {
        const R = [
          {
            icon: f.jsx(ry, { "data-source-loc": "src/App.tsx:106:30" }),
            label: b("Алғашқы қадам", "Первый шаг"),
            detail: b("1 сабақты аяқта", "Заверши 1 урок"),
            done: g.completed.length > 0,
          },
          {
            icon: f.jsx(bi, { "data-source-loc": "src/App.tsx:106:177" }),
            label: b("Тіл жанашыры", "Друг языка"),
            detail: b("3 тіл сабағын оқы", "Пройди 3 урока языка"),
            done: Je.filter((H) => H.category === "language").every((H) =>
              g.completed.includes(H.id),
            ),
          },
          {
            icon: f.jsx(Pu, { "data-source-loc": "src/App.tsx:106:396" }),
            label: b("Ойын шебері", "Мастер игры"),
            detail: b("3 ойынды аяқта", "Заверши 3 игры"),
            done: Object.keys(g.games).length === 3,
          },
          {
            icon: f.jsx(ay, { "data-source-loc": "src/App.tsx:106:552" }),
            label: b("Сөз жинаушы", "Коллекционер слов"),
            detail: b("5 сөзді сақта", "Сохрани 5 слов"),
            done: g.words.length === 5,
          },
        ];
        return f.jsxs("div", {
          className: "progress-panel",
          "data-source-loc": "src/App.tsx:107:13",
          children: [
            f.jsx("div", {
              className: "modal-symbol",
              "data-source-loc": "src/App.tsx:107:45",
              children: f.jsx(ju, {
                size: 30,
                "data-source-loc": "src/App.tsx:107:75",
              }),
            }),
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:107:99",
              children: b("ӘР ҚАДАМЫҢ МАҢЫЗДЫ", "КАЖДЫЙ ШАГ ВАЖЕН"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:107:171",
              children: b("Менің жетістіктерім", "Мои достижения"),
            }),
            f.jsxs("div", {
              className: "profile-level",
              "data-source-loc": "src/App.tsx:107:224",
              children: [
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:255",
                  children: [
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:260",
                      children: b("Сенің дәрежең", "Твой уровень"),
                    }),
                    f.jsx("h3", {
                      "data-source-loc": "src/App.tsx:107:309",
                      children: $t,
                    }),
                  ],
                }),
                f.jsxs("strong", {
                  "data-source-loc": "src/App.tsx:107:331",
                  children: [
                    ht,
                    f.jsx("small", {
                      "data-source-loc": "src/App.tsx:107:343",
                      children: "XP",
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "progress-stats",
              "data-source-loc": "src/App.tsx:107:375",
              children: [
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:407",
                  children: [
                    f.jsxs("strong", {
                      "data-source-loc": "src/App.tsx:107:412",
                      children: [
                        g.completed.length,
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:107:447",
                          children: "/12",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:474",
                      children: b("Оқылған сабақ", "Уроков пройдено"),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:532",
                  children: [
                    f.jsxs("strong", {
                      "data-source-loc": "src/App.tsx:107:537",
                      children: [
                        Object.keys(g.games).length,
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:107:581",
                          children: "/3",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:607",
                      children: b("Аяқталған ойын", "Игр завершено"),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:664",
                  children: [
                    f.jsxs("strong", {
                      "data-source-loc": "src/App.tsx:107:669",
                      children: [
                        g.words.length,
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:107:700",
                          children: "/5",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:726",
                      children: b("Жаңа сөз", "Новых слов"),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx("h3", {
              className: "panel-subheading",
              "data-source-loc": "src/App.tsx:107:780",
              children: b("Сенің белгілерің", "Твои значки"),
            }),
            f.jsx("div", {
              className: "badge-grid",
              "data-source-loc": "src/App.tsx:107:856",
              children: R.map((H) =>
                f.jsxs(
                  "div",
                  {
                    className: `achievement-badge ${H.done ? "earned" : ""}`,
                    "data-source-loc": "src/App.tsx:107:901",
                    children: [
                      f.jsxs("span", {
                        "data-source-loc": "src/App.tsx:107:978",
                        children: [
                          H.icon,
                          H.done &&
                            f.jsx(Pn, {
                              className: "badge-check",
                              size: 12,
                              "data-source-loc": "src/App.tsx:107:1003",
                            }),
                        ],
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:107:1053",
                        children: H.label,
                      }),
                      f.jsx("small", {
                        "data-source-loc": "src/App.tsx:107:1079",
                        children: H.detail,
                      }),
                    ],
                  },
                  H.label,
                ),
              ),
            }),
            g.words.length > 0 &&
              f.jsxs("div", {
                className: "saved-words",
                "data-source-loc": "src/App.tsx:107:1148",
                children: [
                  f.jsx("h3", {
                    className: "panel-subheading",
                    "data-source-loc": "src/App.tsx:107:1177",
                    children: b("Менің сөздігім", "Мой словарь"),
                  }),
                  g.words.map((H) =>
                    f.jsxs(
                      "span",
                      {
                        "data-source-loc": "src/App.tsx:107:1279",
                        children: [
                          H,
                          f.jsx("small", {
                            "data-source-loc": "src/App.tsx:107:1302",
                            children: ms.find((lt) => lt.word === H)
                              ?.translation,
                          }),
                        ],
                      },
                      H,
                    ),
                  ),
                ],
              }),
            f.jsxs("button", {
              className: "primary-button full-width",
              onClick: () =>
                y({
                  type: "lesson",
                  lesson: Je.find((H) => !g.completed.includes(H.id)) || Je[0],
                }),
              "data-source-loc": "src/App.tsx:107:1380",
              children: [
                b("Саяхатты жалғастыру", "Продолжить путешествие"),
                f.jsx(Ta, {
                  size: 18,
                  "data-source-loc": "src/App.tsx:107:1599",
                }),
              ],
            }),
            f.jsxs("p", {
              className: "storage-note",
              "data-source-loc": "src/App.tsx:107:1631",
              children: [
                f.jsx(cy, {
                  size: 14,
                  "data-source-loc": "src/App.tsx:107:1659",
                }),
                b(
                  "Жетістіктер осы браузерде сақталады. Тіркелу қажет емес.",
                  "Прогресс хранится в этом браузере. Регистрация не нужна.",
                ),
              ],
            }),
            f.jsx("button", {
              className: "reset-progress",
              onClick: () => y({ type: "reset" }),
              "data-source-loc": "src/App.tsx:107:1810",
              children: b("Жетістіктерді қалпына келтіру", "Сбросить прогресс"),
            }),
          ],
        });
      }
      return d.type === "reset"
        ? f.jsxs("div", {
            className: "catalog-panel",
            "data-source-loc": "src/App.tsx:109:38",
            children: [
              f.jsx("div", {
                className: "modal-symbol sand",
                "data-source-loc": "src/App.tsx:109:69",
                children: f.jsx(Ni, {
                  size: 28,
                  "data-source-loc": "src/App.tsx:109:104",
                }),
              }),
              f.jsx("h2", {
                "data-source-loc": "src/App.tsx:109:132",
                children: b(
                  "Бәрін қайта бастаймыз ба?",
                  "Начать с чистого листа?",
                ),
              }),
              f.jsx("p", {
                className: "modal-description",
                "data-source-loc": "src/App.tsx:109:200",
                children: b(
                  "Оқылған сабақтар, сақталған сөздер мен ойын нәтижелері өшіріледі. Бұл әрекетті кері қайтару мүмкін емес.",
                  "Пройденные уроки, сохранённые слова и результаты игр будут удалены. Это действие нельзя отменить.",
                ),
              }),
              f.jsxs("div", {
                className: "confirm-actions",
                "data-source-loc": "src/App.tsx:109:449",
                children: [
                  f.jsx("button", {
                    className: "secondary-button",
                    onClick: () => y({ type: "progress" }),
                    "data-source-loc": "src/App.tsx:109:482",
                    children: b("Бас тарту", "Отмена"),
                  }),
                  f.jsx("button", {
                    className: "primary-button",
                    onClick: () => {
                      (m(Wu),
                        y({ type: "progress" }),
                        Ct(
                          b(
                            "Жаңа саяхатқа дайынсың!",
                            "Всё готово к новому путешествию!",
                          ),
                        ));
                    },
                    "data-source-loc": "src/App.tsx:109:600",
                    children: b("Қайта бастау", "Сбросить"),
                  }),
                ],
              }),
            ],
          })
        : f.jsxs("div", {
            className: "about-panel",
            "data-source-loc": "src/App.tsx:110:11",
            children: [
              f.jsx(ue, { "data-source-loc": "src/App.tsx:110:40" }),
              f.jsx("p", {
                className: "eyebrow",
                "data-source-loc": "src/App.tsx:110:48",
                children: "QAZAQ TILI",
              }),
              f.jsx("h2", {
                "data-source-loc": "src/App.tsx:110:85",
                children: b(
                  `Тамыры терең.
Танымы шексіз.`,
                  `Глубокие корни.
Безграничное познание.`,
                ),
              }),
              f.jsx("p", {
                className: "modal-description",
                "data-source-loc": "src/App.tsx:110:173",
                children: b(
                  "Тілді таны. Елді таны.",
                  "Познавай язык. Познавай страну.",
                ),
              }),
              f.jsx("p", {
                "data-source-loc": "src/App.tsx:110:274",
                children: b(
                  "QAZAQ TILI — қазақ тілі мен ұлттық мұраны жаңаша танытатын интерактивті білім кеңістігі. Біз тіл, өнер, тарих пен дәстүрді бір сапарға біріктірдік.",
                  "QAZAQ TILI — интерактивное образовательное пространство, которое по-новому знакомит с казахским языком и национальным наследием. Мы объединили язык, искусство, историю и традиции в одном путешествии.",
                ),
              }),
              f.jsxs("div", {
                className: "about-steps",
                "data-source-loc": "src/App.tsx:110:638",
                children: [
                  f.jsxs("span", {
                    "data-source-loc": "src/App.tsx:110:667",
                    children: [
                      f.jsx(bi, {
                        size: 23,
                        "data-source-loc": "src/App.tsx:110:673",
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:110:694",
                        children: b("Таны", "Познавай"),
                      }),
                      b("Шағын сабақтарды оқы", "Читай мини-уроки"),
                    ],
                  }),
                  f.jsxs("span", {
                    "data-source-loc": "src/App.tsx:110:788",
                    children: [
                      f.jsx(ly, {
                        size: 23,
                        "data-source-loc": "src/App.tsx:110:794",
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:110:814",
                        children: b("Үйрен", "Изучай"),
                      }),
                      b("Сөздер мен мағыналарды аш", "Открывай слова и смыслы"),
                    ],
                  }),
                  f.jsxs("span", {
                    "data-source-loc": "src/App.tsx:110:919",
                    children: [
                      f.jsx(Pu, {
                        size: 23,
                        "data-source-loc": "src/App.tsx:110:925",
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:110:944",
                        children: b("Ойна", "Играй"),
                      }),
                      b("Біліміңді ойынмен бекіт", "Закрепляй знания в игре"),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                className: "about-note",
                "data-source-loc": "src/App.tsx:110:1051",
                children: b(
                  "Материалдар бастапқы танысуға арналған. Тарихи және мәдени деректердің сілтемелері сабақтарда берілген. Декордың негізі — ұсынылған қазақ ою-өрнегі. Мәдени көріністер AI көмегімен жасалған иллюстрациялар, тарихи тұлғалардың портреттері ашық дереккөздерден алынған.",
                  "Материалы предназначены для первого знакомства. Ссылки на исторические и культурные источники приведены в уроках. Декор основан на предоставленном казахском орнаменте. Культурные сцены — AI-иллюстрации, портреты исторических личностей взяты из открытых источников.",
                ),
              }),
              f.jsxs("button", {
                className: "primary-button",
                onClick: () => {
                  (y(null), Mt("explore"));
                },
                "data-source-loc": "src/App.tsx:110:1620",
                children: [
                  b("Саяхатты бастау", "Начать путешествие"),
                  f.jsx(Ta, {
                    size: 18,
                    "data-source-loc": "src/App.tsx:110:1750",
                  }),
                ],
              }),
            ],
          });
    };
  return f.jsxs(ES, {
    reducedMotion: "user",
    "data-source-loc": "src/App.tsx:114:4",
    children: [
      f.jsx("a", {
        className: "skip-link",
        href: "#explore",
        "data-source-loc": "src/App.tsx:114:39",
        children: b("Мазмұнға өту", "Перейти к содержимому"),
      }),
      f.jsxs("header", {
        className: "site-header",
        "data-source-loc": "src/App.tsx:115:6",
        children: [
          f.jsxs("div", {
            className: "header-inner container",
            "data-source-loc": "src/App.tsx:115:38",
            children: [
              f.jsxs("a", {
                className: "brand",
                href: "#home",
                onClick: (R) => {
                  (R.preventDefault(), Mt("home"));
                },
                "aria-label": "QAZAQ TILI — басты бет",
                "data-source-loc": "src/App.tsx:115:78",
                children: [
                  f.jsx("span", {
                    className: "brand-emblem",
                    "data-source-loc": "src/App.tsx:115:200",
                    children: f.jsx(ue, {
                      "data-source-loc": "src/App.tsx:115:231",
                    }),
                  }),
                  f.jsxs("span", {
                    className: "brand-name",
                    "data-source-loc": "src/App.tsx:115:246",
                    children: [
                      "QAZAQ ",
                      f.jsx("b", {
                        "data-source-loc": "src/App.tsx:115:281",
                        children: "TILI",
                      }),
                      f.jsx("small", {
                        "data-source-loc": "src/App.tsx:115:292",
                        children: b(
                          "ТІЛДІ ТАНЫ. ЕЛДІ ТАНЫ.",
                          "ПОЗНАВАЙ ЯЗЫК И СТРАНУ.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("nav", {
                className: "desktop-nav",
                "aria-label": b("Негізгі мәзір", "Главное меню"),
                "data-source-loc": "src/App.tsx:115:374",
                children: L.map((R) =>
                  f.jsx(
                    "a",
                    {
                      href: `#${R.id}`,
                      onClick: (H) => {
                        (H.preventDefault(), Mt(R.id));
                      },
                      className: u === R.id ? "active" : "",
                      "data-source-loc": "src/App.tsx:115:473",
                      children: R.title,
                    },
                    R.id,
                  ),
                ),
              }),
              f.jsxs("div", {
                className: "header-actions",
                "data-source-loc": "src/App.tsx:115:638",
                children: [
                  f.jsxs("button", {
                    className: "language-button",
                    "aria-label": b(
                      "Переключить на русский",
                      "Қазақ тіліне ауысу",
                    ),
                    onClick: () => i((R) => (R === "kz" ? "ru" : "kz")),
                    "data-source-loc": "src/App.tsx:115:670",
                    children: [
                      a === "kz" ? "ҚАЗ" : "РУС",
                      f.jsx(X3, {
                        size: 13,
                        "data-source-loc": "src/App.tsx:115:855",
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    className: "progress-button",
                    onClick: () => y({ type: "progress" }),
                    "data-source-loc": "src/App.tsx:115:888",
                    children: [
                      f.jsx(ju, {
                        size: 17,
                        "data-source-loc": "src/App.tsx:115:970",
                      }),
                      f.jsx("span", {
                        "data-source-loc": "src/App.tsx:115:988",
                        children: b("Менің жетістіктерім", "Мои достижения"),
                      }),
                      ht > 0 &&
                        f.jsx("i", {
                          "data-source-loc": "src/App.tsx:115:1056",
                          children: ht,
                        }),
                    ],
                  }),
                  f.jsx("button", {
                    className: "mobile-menu-button icon-button",
                    "aria-expanded": o,
                    "aria-label": b("Мәзірді ашу", "Открыть меню"),
                    onClick: () => c(!o),
                    "data-source-loc": "src/App.tsx:115:1077",
                    children: o
                      ? f.jsx(Ci, {
                          size: 24,
                          "data-source-loc": "src/App.tsx:115:1258",
                        })
                      : f.jsx(cT, {
                          size: 24,
                          "data-source-loc": "src/App.tsx:115:1275",
                        }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx(gu, {
            "data-source-loc": "src/App.tsx:115:1314",
            children:
              o &&
              f.jsxs(xs.nav, {
                className: "mobile-nav",
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                "data-source-loc": "src/App.tsx:115:1346",
                children: [
                  L.map((R) =>
                    f.jsxs(
                      "a",
                      {
                        href: `#${R.id}`,
                        onClick: (H) => {
                          (H.preventDefault(), Mt(R.id));
                        },
                        "data-source-loc": "src/App.tsx:115:1513",
                        children: [
                          R.title,
                          f.jsx(De, {
                            size: 17,
                            "data-source-loc": "src/App.tsx:115:1616",
                          }),
                        ],
                      },
                      R.id,
                    ),
                  ),
                  f.jsxs("button", {
                    onClick: () => {
                      (c(!1), y({ type: "progress" }));
                    },
                    "data-source-loc": "src/App.tsx:115:1647",
                    children: [
                      f.jsx(ju, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:115:1727",
                      }),
                      b("Менің жетістіктерім", "Мои достижения"),
                    ],
                  }),
                ],
              }),
          }),
        ],
      }),
      f.jsxs("main", {
        "data-source-loc": "src/App.tsx:117:6",
        children: [
          f.jsxs("section", {
            className: "hero",
            id: "home",
            "data-source-loc": "src/App.tsx:118:8",
            children: [
              f.jsx("div", {
                className: "hero-ambient",
                "data-source-loc": "src/App.tsx:118:44",
              }),
              f.jsxs("div", {
                className: "hero-inner container",
                "data-source-loc": "src/App.tsx:118:75",
                children: [
                  f.jsxs(xs.div, {
                    className: "hero-copy",
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.65, ease: "easeOut" },
                    "data-source-loc": "src/App.tsx:118:113",
                    children: [
                      f.jsxs("div", {
                        className: "hero-kicker",
                        "data-source-loc": "src/App.tsx:118:258",
                        children: [
                          f.jsx("span", {
                            className: "tiny-spark",
                            "data-source-loc": "src/App.tsx:118:287",
                            children: "✧",
                          }),
                          b(
                            "ҰЛТТЫҚ МҰРА. ЖАҢА КӨЗҚАРАС.",
                            "НАЦИОНАЛЬНОЕ НАСЛЕДИЕ. НОВЫЙ ВЗГЛЯД.",
                          ),
                        ],
                      }),
                      f.jsx("h1", {
                        "data-source-loc": "src/App.tsx:118:404",
                        children:
                          a === "kz"
                            ? f.jsxs(f.Fragment, {
                                children: [
                                  "Тіл – халық",
                                  f.jsx("br", {
                                    "data-source-loc": "src/App.tsx:118:438",
                                  }),
                                  f.jsx("em", {
                                    "data-source-loc": "src/App.tsx:118:443",
                                    children: "қазынасы",
                                  }),
                                  f.jsx("span", {
                                    className: "heading-dot",
                                    "data-source-loc": "src/App.tsx:118:460",
                                    children: ".",
                                  }),
                                ],
                              })
                            : f.jsxs(f.Fragment, {
                                children: [
                                  "Язык — душа",
                                  f.jsx("br", {
                                    "data-source-loc": "src/App.tsx:118:517",
                                  }),
                                  f.jsx("em", {
                                    "data-source-loc": "src/App.tsx:118:522",
                                    children: "народа",
                                  }),
                                  f.jsx("span", {
                                    className: "heading-dot",
                                    "data-source-loc": "src/App.tsx:118:537",
                                    children: ".",
                                  }),
                                ],
                              }),
                      }),
                      f.jsx("h2", {
                        "data-source-loc": "src/App.tsx:118:584",
                        children: b(
                          "Тілді таны. Елді таны.",
                          "Познавай язык. Познавай страну.",
                        ),
                      }),
                      f.jsx("p", {
                        className: "hero-description",
                        "data-source-loc": "src/App.tsx:118:657",
                        children: b(
                          "Қазақ тілінің сұлулығын, ұлы даланың тарихын және ұлттық мұрамызды бірге ашайық. Әр қадам — жаңа таным, әр сөз — жаңа әлем.",
                          "Открой красоту казахского языка, историю великой степи и национальное наследие. Каждый шаг — новое открытие. Каждое слово — новый мир.",
                        ),
                      }),
                      f.jsxs("div", {
                        className: "hero-buttons",
                        "data-source-loc": "src/App.tsx:118:961",
                        children: [
                          f.jsxs("button", {
                            className: "primary-button",
                            onClick: () => Mt("explore"),
                            "data-source-loc": "src/App.tsx:118:991",
                            children: [
                              b("Саяхатты бастау", "Начать путешествие"),
                              f.jsx(De, {
                                size: 19,
                                "data-source-loc": "src/App.tsx:118:1102",
                              }),
                            ],
                          }),
                          f.jsxs("button", {
                            className: "hero-about",
                            onClick: () => y({ type: "about" }),
                            "data-source-loc": "src/App.tsx:118:1136",
                            children: [
                              f.jsx("span", {
                                className: "play-circle",
                                "data-source-loc": "src/App.tsx:118:1210",
                                children: f.jsx(dT, {
                                  size: 12,
                                  fill: "currentColor",
                                  "data-source-loc": "src/App.tsx:118:1240",
                                }),
                              }),
                              b("Жоба туралы", "О проекте"),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "hero-assurances",
                        "data-source-loc": "src/App.tsx:118:1330",
                        children: [
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:1363",
                            children: [
                              f.jsx(ps, {
                                size: 14,
                                "data-source-loc": "src/App.tsx:118:1369",
                              }),
                              b("Тегін әрі қолжетімді", "Бесплатно и доступно"),
                            ],
                          }),
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:1452",
                            children: [
                              f.jsx(ps, {
                                size: 14,
                                "data-source-loc": "src/App.tsx:118:1458",
                              }),
                              b("Өз қарқыныңмен үйрен", "Учись в своём темпе"),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "hero-lower",
                        "data-source-loc": "src/App.tsx:118:1546",
                        children: [
                          f.jsx("span", {
                            className: "mini-line",
                            "data-source-loc": "src/App.tsx:118:1574",
                          }),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:118:1603",
                            children: b(
                              "Тамырымыз тереңде. Болашағымыз білімде.",
                              "Наши корни — в истории. Будущее — в знаниях.",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs(xs.div, {
                    className: "hero-art",
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
                    "data-source-loc": "src/App.tsx:118:1729",
                    children: [
                      f.jsx("div", {
                        className: "hero-arch-outline",
                        "data-source-loc": "src/App.tsx:118:1883",
                      }),
                      f.jsx("div", {
                        className: "hero-arch-outline second",
                        "data-source-loc": "src/App.tsx:118:1919",
                      }),
                      f.jsx("div", {
                        className: "hero-ornament-strip",
                        "aria-hidden": "true",
                        "data-source-loc": "src/App.tsx:118:1962",
                      }),
                      f.jsxs("div", {
                        className: "hero-photo",
                        "data-source-loc": "src/App.tsx:118:2019",
                        children: [
                          f.jsx("img", {
                            src: "/images/steppe-yurt.webp",
                            alt: b(
                              "Асқар таулар аясындағы қазақтың оюлы ақ киіз үйі",
                              "Казахская белая юрта с орнаментом на фоне гор",
                            ),
                            fetchPriority: "high",
                            "data-source-loc": "src/App.tsx:118:2047",
                          }),
                          f.jsx("div", {
                            className: "photo-vignette",
                            "data-source-loc": "src/App.tsx:118:2214",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "hero-seal",
                        "data-source-loc": "src/App.tsx:118:2253",
                        children: [
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:118:2280",
                            children: "ҰЛЫ ДАЛА",
                          }),
                          f.jsx(ue, {
                            "data-source-loc": "src/App.tsx:118:2301",
                          }),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:118:2309",
                            children: "ҰЛАҒАТЫ",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "image-caption",
                        "data-source-loc": "src/App.tsx:118:2335",
                        children: [
                          f.jsx("span", {
                            className: "caption-line",
                            "data-source-loc": "src/App.tsx:118:2366",
                          }),
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:2398",
                            children: [
                              "48° N · 68° E ",
                              f.jsx("b", {
                                "data-source-loc": "src/App.tsx:118:2418",
                                children: "QAZAQSTAN",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "floating-note",
                        "data-source-loc": "src/App.tsx:118:2447",
                        children: [
                          f.jsx("span", {
                            className: "floating-icon",
                            "data-source-loc": "src/App.tsx:118:2478",
                            children: f.jsx(ry, {
                              size: 24,
                              strokeWidth: 1.4,
                              "data-source-loc": "src/App.tsx:118:2510",
                            }),
                          }),
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:2554",
                            children: [
                              f.jsx("strong", {
                                "data-source-loc": "src/App.tsx:118:2560",
                                children: b(
                                  "Мұраны таны. Өзіңді тап.",
                                  "Познай наследие. Найди себя.",
                                ),
                              }),
                              f.jsx("small", {
                                "data-source-loc": "src/App.tsx:118:2640",
                                children: b(
                                  "Бабалар аманаты — болашаққа жол",
                                  "Наследие предков — путь в будущее",
                                ),
                              }),
                            ],
                          }),
                          f.jsx("span", {
                            className: "note-star",
                            "data-source-loc": "src/App.tsx:118:2737",
                            children: "✧",
                          }),
                        ],
                      }),
                      f.jsx("span", {
                        className: "art-spark spark-one",
                        "data-source-loc": "src/App.tsx:118:2779",
                        children: "✦",
                      }),
                      f.jsx("span", {
                        className: "art-spark spark-two",
                        "data-source-loc": "src/App.tsx:118:2825",
                        children: "✧",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("button", {
                className: "scroll-cue",
                onClick: () => Mt("explore"),
                "aria-label": b("Төменге өту", "Прокрутить вниз"),
                "data-source-loc": "src/App.tsx:118:2890",
                children: [
                  f.jsx("span", {
                    "data-source-loc": "src/App.tsx:118:3002",
                    children: b("ТАНЫМҒА ҚАДАМ", "ШАГ К ПОЗНАНИЮ"),
                  }),
                  f.jsx(V3, {
                    size: 14,
                    "data-source-loc": "src/App.tsx:118:3053",
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "value-strip",
            "data-source-loc": "src/App.tsx:120:8",
            children: f.jsxs("div", {
              className: "container value-strip-inner",
              "data-source-loc": "src/App.tsx:120:37",
              children: [
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:120:82",
                  children: [
                    f.jsx("span", {
                      className: "value-icon",
                      "data-source-loc": "src/App.tsx:120:87",
                      children: f.jsx(bi, {
                        size: 21,
                        strokeWidth: 1.5,
                        "data-source-loc": "src/App.tsx:120:116",
                      }),
                    }),
                    f.jsxs("span", {
                      "data-source-loc": "src/App.tsx:120:162",
                      children: [
                        f.jsx("strong", {
                          "data-source-loc": "src/App.tsx:120:168",
                          children: b(
                            "Тілден басталған таным",
                            "Познание начинается с языка",
                          ),
                        }),
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:120:245",
                          children: b(
                            "Сөздің сырына үңіл",
                            "Открой тайну каждого слова",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("span", {
                  className: "value-divider",
                  "data-source-loc": "src/App.tsx:120:328",
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:120:361",
                  children: [
                    f.jsx("span", {
                      className: "value-icon",
                      "data-source-loc": "src/App.tsx:120:366",
                      children: f.jsx(ly, {
                        size: 21,
                        strokeWidth: 1.5,
                        "data-source-loc": "src/App.tsx:120:395",
                      }),
                    }),
                    f.jsxs("span", {
                      "data-source-loc": "src/App.tsx:120:440",
                      children: [
                        f.jsx("strong", {
                          "data-source-loc": "src/App.tsx:120:446",
                          children: b(
                            "Ойна. Үйрен. Есте сақта.",
                            "Играй. Изучай. Запоминай.",
                          ),
                        }),
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:120:523",
                          children: b(
                            "Білімді қызыққа айналдыр",
                            "Преврати обучение в открытие",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("span", {
                  className: "value-divider",
                  "data-source-loc": "src/App.tsx:120:614",
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:120:647",
                  children: [
                    f.jsx("span", {
                      className: "value-icon",
                      "data-source-loc": "src/App.tsx:120:652",
                      children: f.jsx(iy, {
                        size: 22,
                        strokeWidth: 1.5,
                        "data-source-loc": "src/App.tsx:120:681",
                      }),
                    }),
                    f.jsxs("span", {
                      "data-source-loc": "src/App.tsx:120:726",
                      children: [
                        f.jsx("strong", {
                          "data-source-loc": "src/App.tsx:120:732",
                          children: b(
                            "Ұлттық рух, заманауи әлем",
                            "Национальный дух, новый мир",
                          ),
                        }),
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:120:812",
                          children: b(
                            "Дәстүрді жаңаша сезін",
                            "Почувствуй традиции по-новому",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsxs("section", {
            className: "explore-section section-space container",
            id: "explore",
            "data-source-loc": "src/App.tsx:122:8",
            children: [
              f.jsxs("div", {
                className: "section-heading",
                "data-source-loc": "src/App.tsx:122:82",
                children: [
                  f.jsxs("div", {
                    "data-source-loc": "src/App.tsx:122:115",
                    children: [
                      f.jsxs("p", {
                        className: "eyebrow",
                        "data-source-loc": "src/App.tsx:122:120",
                        children: [
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:122:143",
                          }),
                          " ",
                          b("ҚАЗАҚ ӘЛЕМІНЕ ҚАДАМ БАС", "ОТКРОЙ КАЗАХСКИЙ МИР"),
                        ],
                      }),
                      f.jsx("h2", {
                        "data-source-loc": "src/App.tsx:122:209",
                        children: b(
                          "Сенің таным саяхатың",
                          "Твоё путешествие к знаниям",
                        ),
                      }),
                      f.jsx("p", {
                        className: "section-description",
                        "data-source-loc": "src/App.tsx:122:275",
                        children: b(
                          "Өзіңе жақын бағытты таңда. Әр бөлім — жаңа бір әлем.",
                          "Выбери близкое направление. Каждый раздел — новый мир.",
                        ),
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    className: "section-link",
                    onClick: yt,
                    "data-source-loc": "src/App.tsx:122:437",
                    children: [
                      b("Барлық тақырыптар", "Все темы"),
                      f.jsx(De, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:122:528",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "category-grid",
                "data-source-loc": "src/App.tsx:122:568",
                children: Si.map((R, H) =>
                  f.jsxs(
                    "button",
                    {
                      className: `category-card category-${R.id}`,
                      onClick: () => y({ type: "category", id: R.id }),
                      "data-source-loc": "src/App.tsx:122:632",
                      children: [
                        f.jsxs("div", {
                          className: "category-image",
                          "data-source-loc": "src/App.tsx:122:773",
                          children: [
                            f.jsx("img", {
                              src: R.image,
                              alt: b(R.title, R.titleRu),
                              loading: "lazy",
                              "data-source-loc": "src/App.tsx:122:805",
                            }),
                            f.jsx("span", {
                              className: "category-tag",
                              "data-source-loc": "src/App.tsx:122:889",
                              children: b(R.tag, R.tagRu),
                            }),
                            f.jsxs("span", {
                              className: "category-order",
                              "data-source-loc": "src/App.tsx:122:960",
                              children: ["0", H + 1],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "category-body",
                          "data-source-loc": "src/App.tsx:122:1014",
                          children: [
                            f.jsx("span", {
                              className: "category-card-icon",
                              "data-source-loc": "src/App.tsx:122:1045",
                              children: J(R.id, 20),
                            }),
                            f.jsx("h3", {
                              "data-source-loc": "src/App.tsx:122:1120",
                              children: b(R.title, R.titleRu),
                            }),
                            f.jsx("p", {
                              "data-source-loc": "src/App.tsx:122:1166",
                              children: b(R.description, R.descriptionRu),
                            }),
                            f.jsxs("div", {
                              className: "category-bottom",
                              "data-source-loc": "src/App.tsx:122:1222",
                              children: [
                                f.jsxs("span", {
                                  "data-source-loc": "src/App.tsx:122:1255",
                                  children: [
                                    Je.filter((lt) => lt.category === R.id)
                                      .length,
                                    " ",
                                    b(
                                      "интерактивті сабақ",
                                      "интерактивных урока",
                                    ),
                                  ],
                                }),
                                f.jsx("span", {
                                  className: "circle-arrow",
                                  "data-source-loc": "src/App.tsx:122:1373",
                                  children: f.jsx(De, {
                                    size: 17,
                                    "data-source-loc": "src/App.tsx:122:1404",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    R.id,
                  ),
                ),
              }),
            ],
          }),
          f.jsxs("section", {
            className: "daily-section container",
            id: "learn",
            "data-source-loc": "src/App.tsx:124:8",
            children: [
              f.jsxs("div", {
                className: "daily-editorial",
                "data-source-loc": "src/App.tsx:124:64",
                children: [
                  f.jsxs("p", {
                    className: "eyebrow",
                    "data-source-loc": "src/App.tsx:124:97",
                    children: [
                      f.jsx("span", {
                        "data-source-loc": "src/App.tsx:124:120",
                      }),
                      b(
                        "КҮН САЙЫН — ЖАҢА ТАНЫМ",
                        "КАЖДЫЙ ДЕНЬ — НОВОЕ ОТКРЫТИЕ",
                      ),
                    ],
                  }),
                  f.jsx("h2", {
                    "data-source-loc": "src/App.tsx:124:192",
                    children: b(
                      `Бір сөз.
Мың мағына.`,
                      `Одно слово.
Тысяча смыслов.`,
                    ),
                  }),
                  f.jsx("p", {
                    "data-source-loc": "src/App.tsx:124:261",
                    children: b(
                      "Тіл — жай ғана сөздер жиынтығы емес. Ол — халықтың жаны, тарихы мен дүниетанымы. Қазақ сөзінің тереңіне бірге үңілейік.",
                      "Язык — больше, чем просто слова. Это душа, история и мировоззрение народа. Давай откроем глубину казахского слова.",
                    ),
                  }),
                  f.jsxs("button", {
                    className: "section-link",
                    onClick: () => y({ type: "category", id: "language" }),
                    "data-source-loc": "src/App.tsx:124:512",
                    children: [
                      b("Тіл әлеміне ену", "Открыть мир языка"),
                      f.jsx(Ta, {
                        size: 17,
                        "data-source-loc": "src/App.tsx:124:650",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "daily-ornament",
                    "aria-hidden": "true",
                    "data-source-loc": "src/App.tsx:124:682",
                    children: [
                      f.jsx(ue, { "data-source-loc": "src/App.tsx:124:733" }),
                      f.jsx(ue, { "data-source-loc": "src/App.tsx:124:741" }),
                      f.jsx(ue, { "data-source-loc": "src/App.tsx:124:749" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "word-feature",
                "data-source-loc": "src/App.tsx:124:769",
                children: [
                  f.jsxs("div", {
                    className: "word-feature-top",
                    "data-source-loc": "src/App.tsx:124:799",
                    children: [
                      f.jsxs("div", {
                        className: "word-tabs",
                        "data-source-loc": "src/App.tsx:124:833",
                        children: [
                          f.jsx("button", {
                            className: M === "word" ? "active" : "",
                            onClick: () => {
                              (w("word"), O(0), Y(!1));
                            },
                            "data-source-loc": "src/App.tsx:124:860",
                            children: b("Күннің сөзі", "Слово дня"),
                          }),
                          f.jsx("button", {
                            className: M === "proverb" ? "active" : "",
                            onClick: () => {
                              (w("proverb"), O(0), Y(!1));
                            },
                            "data-source-loc": "src/App.tsx:124:1030",
                            children: b("Мақал-мәтел", "Пословица"),
                          }),
                        ],
                      }),
                      f.jsxs("span", {
                        className: "word-count",
                        "data-source-loc": "src/App.tsx:124:1212",
                        children: [
                          String(S + 1).padStart(2, "0"),
                          " ",
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:124:1282",
                            children: ["/ ", M === "word" ? "05" : "03"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("div", {
                    className: `word-card ${q ? "is-flipped" : ""}`,
                    "data-source-loc": "src/App.tsx:124:1344",
                    children: f.jsxs("div", {
                      className: "word-card-inner",
                      "data-source-loc": "src/App.tsx:124:1404",
                      children: [
                        f.jsxs("div", {
                          className: "word-card-front",
                          "aria-hidden": q,
                          "data-source-loc": "src/App.tsx:124:1437",
                          children: [
                            f.jsxs("div", {
                              className: "word-card-top",
                              "data-source-loc": "src/App.tsx:124:1492",
                              children: [
                                f.jsxs("span", {
                                  "data-source-loc": "src/App.tsx:124:1523",
                                  children: [
                                    f.jsx("span", {
                                      className: "gold-dot",
                                      "data-source-loc": "src/App.tsx:124:1529",
                                    }),
                                    M === "word"
                                      ? b("СӨЗ ҚАЗЫНАСЫ", "СОКРОВИЩНИЦА СЛОВ")
                                      : b(
                                          "ХАЛЫҚ ДАНАЛЫҒЫ",
                                          "НАРОДНАЯ МУДРОСТЬ",
                                        ),
                                  ],
                                }),
                                f.jsx("button", {
                                  className: `audio-button ${$ ? "speaking" : ""}`,
                                  onClick: P,
                                  tabIndex: q ? -1 : 0,
                                  "aria-label": b(
                                    "Қазақша тыңдау",
                                    "Послушать по-казахски",
                                  ),
                                  "data-source-loc": "src/App.tsx:124:1668",
                                  children: f.jsx(AT, {
                                    size: 20,
                                    "data-source-loc": "src/App.tsx:124:1835",
                                  }),
                                }),
                              ],
                            }),
                            f.jsxs("button", {
                              className: "word-flip-target",
                              onClick: () => Y(!0),
                              tabIndex: q ? -1 : 0,
                              "aria-label": b(
                                "Карточканы аударып, аудармасын көру",
                                "Перевернуть карточку и посмотреть перевод",
                              ),
                              "data-source-loc": "src/App.tsx:124:1870",
                              children: [
                                f.jsx("h3", {
                                  className:
                                    M === "proverb" ? "proverb-heading" : "",
                                  "data-source-loc": "src/App.tsx:124:2067",
                                  children: ot.word,
                                }),
                                f.jsxs("span", {
                                  className: "transcription",
                                  "data-source-loc": "src/App.tsx:124:2153",
                                  children: ["[ ", ot.transcription, " ]"],
                                }),
                                f.jsx("p", {
                                  "data-source-loc": "src/App.tsx:124:2223",
                                  children:
                                    a === "kz" ? ot.definition : ot.translation,
                                }),
                                f.jsxs("span", {
                                  className: "flip-instruction",
                                  "data-source-loc": "src/App.tsx:124:2296",
                                  children: [
                                    f.jsx(Ni, {
                                      size: 13,
                                      "data-source-loc": "src/App.tsx:124:2331",
                                    }),
                                    b(
                                      "Мағынасын ашу үшін карточканы аудар",
                                      "Переверни карточку, чтобы узнать больше",
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            f.jsx(ue, {
                              className: "word-watermark",
                              "data-source-loc": "src/App.tsx:124:2454",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "word-card-back",
                          "aria-hidden": !q,
                          "data-source-loc": "src/App.tsx:124:2495",
                          children: [
                            f.jsx("span", {
                              className: "eyebrow",
                              "data-source-loc": "src/App.tsx:124:2550",
                              children: b("СӨЗДІҢ МАҒЫНАСЫ", "ЗНАЧЕНИЕ СЛОВА"),
                            }),
                            f.jsx("h3", {
                              "data-source-loc": "src/App.tsx:124:2623",
                              children: ot.translation,
                            }),
                            f.jsxs("p", {
                              className: "word-example",
                              "data-source-loc": "src/App.tsx:124:2657",
                              children: ["«", ot.example, "»"],
                            }),
                            f.jsx("p", {
                              "data-source-loc": "src/App.tsx:124:2712",
                              children: ot.exampleRu,
                            }),
                            f.jsxs("button", {
                              className: "back-flip text-button",
                              tabIndex: q ? 0 : -1,
                              onClick: () => Y(!1),
                              "data-source-loc": "src/App.tsx:124:2742",
                              children: [
                                f.jsx(Ni, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:124:2847",
                                }),
                                b("Қазақша сөзге оралу", "Вернуться к слову"),
                              ],
                            }),
                            f.jsx(ue, {
                              className: "word-watermark",
                              "data-source-loc": "src/App.tsx:124:2925",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  f.jsxs("div", {
                    className: "word-feature-bottom",
                    "data-source-loc": "src/App.tsx:124:2978",
                    children: [
                      M === "word"
                        ? f.jsxs("button", {
                            className: `save-word text-button ${g.words.includes(ot.word) ? "saved" : ""}`,
                            onClick: K,
                            "data-source-loc": "src/App.tsx:124:3037",
                            children: [
                              g.words.includes(ot.word)
                                ? f.jsx(ps, {
                                    size: 16,
                                    "data-source-loc": "src/App.tsx:124:3206",
                                  })
                                : f.jsx(ay, {
                                    size: 16,
                                    "data-source-loc": "src/App.tsx:124:3234",
                                  }),
                              g.words.includes(ot.word)
                                ? b("Сөздігіме қосылды", "В моём словаре")
                                : b("Сөздігіме қосу", "Добавить в словарь"),
                            ],
                          })
                        : f.jsx("span", {
                            className: "proverb-note",
                            "data-source-loc": "src/App.tsx:124:3399",
                            children: b(
                              "Халық даналығы — асыл мұра",
                              "Народная мудрость — ценное наследие",
                            ),
                          }),
                      f.jsxs("div", {
                        className: "word-pagination",
                        "data-source-loc": "src/App.tsx:124:3510",
                        children: [
                          f.jsx("button", {
                            className: "icon-button",
                            "aria-label": b(
                              "Алдыңғы карточка",
                              "Предыдущая карточка",
                            ),
                            onClick: () => j(-1),
                            "data-source-loc": "src/App.tsx:124:3543",
                            children: f.jsx(Z3, {
                              size: 18,
                              "data-source-loc": "src/App.tsx:124:3662",
                            }),
                          }),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:124:3695",
                            children: Array.from({
                              length: M === "word" ? ms.length : co.length,
                            }).map((R, H) =>
                              f.jsx(
                                "button",
                                {
                                  "aria-label": `${b("Карточка", "Карточка")} ${H + 1}`,
                                  className: S === H ? "active" : "",
                                  onClick: () => {
                                    (O(H), Y(!1));
                                  },
                                  "data-source-loc": "src/App.tsx:124:3792",
                                },
                                H,
                              ),
                            ),
                          }),
                          f.jsx("button", {
                            className: "icon-button",
                            "aria-label": b(
                              "Келесі карточка",
                              "Следующая карточка",
                            ),
                            onClick: () => j(1),
                            "data-source-loc": "src/App.tsx:124:3970",
                            children: f.jsx(J3, {
                              size: 18,
                              "data-source-loc": "src/App.tsx:124:4086",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsx("section", {
            className: "games-section section-space",
            id: "games",
            "data-source-loc": "src/App.tsx:126:8",
            children: f.jsxs("div", {
              className: "container",
              "data-source-loc": "src/App.tsx:126:68",
              children: [
                f.jsxs("div", {
                  className: "section-heading",
                  "data-source-loc": "src/App.tsx:126:95",
                  children: [
                    f.jsxs("div", {
                      "data-source-loc": "src/App.tsx:126:128",
                      children: [
                        f.jsxs("p", {
                          className: "eyebrow",
                          "data-source-loc": "src/App.tsx:126:133",
                          children: [
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:156",
                            }),
                            b(
                              "ҚЫЗЫҚТЫ ОЙЫН. ПАЙДАЛЫ БІЛІМ.",
                              "ИНТЕРЕСНЫЕ ИГРЫ. ПОЛЕЗНЫЕ ЗНАНИЯ.",
                            ),
                          ],
                        }),
                        f.jsx("h2", {
                          "data-source-loc": "src/App.tsx:126:239",
                          children: b(
                            "Ойнай отырып, ой-өрісіңді кеңейт",
                            "Играй и расширяй кругозор",
                          ),
                        }),
                        f.jsx("p", {
                          className: "section-description",
                          "data-source-loc": "src/App.tsx:126:316",
                          children: b(
                            "Біліміңді сына, жаңа сөздер үйрен және жетістіктерге жет.",
                            "Проверь знания, выучи новые слова и собери достижения.",
                          ),
                        }),
                      ],
                    }),
                    f.jsxs("span", {
                      className: "small-label",
                      "data-source-loc": "src/App.tsx:126:483",
                      children: [
                        f.jsx(_o, {
                          size: 16,
                          "data-source-loc": "src/App.tsx:126:513",
                        }),
                        b(
                          "Әр ойын — алға бір қадам",
                          "Каждая игра — шаг вперёд",
                        ),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "games-grid",
                  "data-source-loc": "src/App.tsx:126:606",
                  children: [
                    f.jsxs("button", {
                      className: "game-card game-quiz",
                      onClick: () => y({ type: "game", game: "quiz" }),
                      "data-source-loc": "src/App.tsx:126:634",
                      children: [
                        f.jsxs("div", {
                          className: "game-card-top",
                          "data-source-loc": "src/App.tsx:126:730",
                          children: [
                            f.jsx("span", {
                              className: "game-type",
                              "data-source-loc": "src/App.tsx:126:761",
                              children: b("ВИКТОРИНА", "ВИКТОРИНА"),
                            }),
                            f.jsx("span", {
                              className: "game-xp",
                              "data-source-loc": "src/App.tsx:126:825",
                              children: "60 XP",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "game-illustration quiz-illustration",
                          "data-source-loc": "src/App.tsx:126:869",
                          children: [
                            f.jsx("span", {
                              className: "quiz-orbit",
                              "data-source-loc": "src/App.tsx:126:922",
                            }),
                            f.jsx("span", {
                              className: "question-block",
                              "data-source-loc": "src/App.tsx:126:952",
                              children: "?",
                            }),
                            f.jsx("span", {
                              className: "quiz-check",
                              "data-source-loc": "src/App.tsx:126:993",
                              children: f.jsx(Pn, {
                                size: 25,
                                "data-source-loc": "src/App.tsx:126:1022",
                              }),
                            }),
                            f.jsx("span", {
                              className: "illustration-star",
                              "data-source-loc": "src/App.tsx:126:1047",
                              children: "✦",
                            }),
                          ],
                        }),
                        f.jsx("h3", {
                          "data-source-loc": "src/App.tsx:126:1097",
                          children: b(
                            "Қаншалықты білесің?",
                            "Что ты знаешь о Казахстане?",
                          ),
                        }),
                        f.jsx("p", {
                          "data-source-loc": "src/App.tsx:126:1163",
                          children: b(
                            "Тіл, мәдениет және тарих туралы 6 сұрақ. Өз біліміңді сынап көр!",
                            "6 вопросов о языке, культуре и истории. Проверь свои знания!",
                          ),
                        }),
                        f.jsxs("div", {
                          className: "game-card-bottom",
                          "data-source-loc": "src/App.tsx:126:1305",
                          children: [
                            f.jsxs("span", {
                              "data-source-loc": "src/App.tsx:126:1339",
                              children: [
                                f.jsx(oo, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:126:1345",
                                }),
                                "3 ",
                                b("минут", "минуты"),
                              ],
                            }),
                            f.jsxs("span", {
                              className: "game-play",
                              "data-source-loc": "src/App.tsx:126:1395",
                              children: [
                                b("Бастау", "Начать"),
                                f.jsx(De, {
                                  size: 17,
                                  "data-source-loc": "src/App.tsx:126:1446",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("button", {
                      className: "game-card game-word",
                      onClick: () => y({ type: "game", game: "word" }),
                      "data-source-loc": "src/App.tsx:126:1493",
                      children: [
                        f.jsxs("div", {
                          className: "game-card-top",
                          "data-source-loc": "src/App.tsx:126:1589",
                          children: [
                            f.jsx("span", {
                              className: "game-type",
                              "data-source-loc": "src/App.tsx:126:1620",
                              children: b("СӨЗ ОЙЫНЫ", "СЛОВЕСНАЯ ИГРА"),
                            }),
                            f.jsx("span", {
                              className: "game-xp",
                              "data-source-loc": "src/App.tsx:126:1689",
                              children: "40 XP",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "game-illustration word-illustration",
                          "data-source-loc": "src/App.tsx:126:1733",
                          children: [
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:1786",
                              children: "Қ",
                            }),
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:1800",
                              children: "А",
                            }),
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:1814",
                              children: "З",
                            }),
                            f.jsx("small", {
                              "data-source-loc": "src/App.tsx:126:1828",
                              children: "✧",
                            }),
                          ],
                        }),
                        f.jsx("h3", {
                          "data-source-loc": "src/App.tsx:126:1850",
                          children: b(
                            "Әріптен әлем құра",
                            "Собери мир из букв",
                          ),
                        }),
                        f.jsx("p", {
                          "data-source-loc": "src/App.tsx:126:1905",
                          children: b(
                            "Шашылған әріптерді жинап, жасырынған қазақша сөзді тап.",
                            "Расставь буквы по местам и найди спрятанное казахское слово.",
                          ),
                        }),
                        f.jsxs("div", {
                          className: "game-card-bottom",
                          "data-source-loc": "src/App.tsx:126:2038",
                          children: [
                            f.jsxs("span", {
                              "data-source-loc": "src/App.tsx:126:2072",
                              children: [
                                f.jsx(oo, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:126:2078",
                                }),
                                "2 ",
                                b("минут", "минуты"),
                              ],
                            }),
                            f.jsxs("span", {
                              className: "game-play",
                              "data-source-loc": "src/App.tsx:126:2128",
                              children: [
                                b("Ойнау", "Играть"),
                                f.jsx(De, {
                                  size: 17,
                                  "data-source-loc": "src/App.tsx:126:2178",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("button", {
                      className: "game-card game-match",
                      onClick: () => y({ type: "game", game: "match" }),
                      "data-source-loc": "src/App.tsx:126:2225",
                      children: [
                        f.jsxs("div", {
                          className: "game-card-top",
                          "data-source-loc": "src/App.tsx:126:2323",
                          children: [
                            f.jsx("span", {
                              className: "game-type",
                              "data-source-loc": "src/App.tsx:126:2354",
                              children: b("СӘЙКЕСТЕНДІРУ", "НАЙДИ ПАРУ"),
                            }),
                            f.jsx("span", {
                              className: "game-xp",
                              "data-source-loc": "src/App.tsx:126:2423",
                              children: "30 XP",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "game-illustration match-illustration",
                          "data-source-loc": "src/App.tsx:126:2467",
                          children: [
                            f.jsx("span", {
                              className: "match-mini-card",
                              "data-source-loc": "src/App.tsx:126:2521",
                              children: f.jsx(ue, {
                                "data-source-loc": "src/App.tsx:126:2555",
                              }),
                            }),
                            f.jsx("span", {
                              className: "match-mini-card",
                              "data-source-loc": "src/App.tsx:126:2570",
                              children: f.jsx(ue, {
                                "data-source-loc": "src/App.tsx:126:2604",
                              }),
                            }),
                            f.jsx("span", {
                              className: "match-dotted-line",
                              "data-source-loc": "src/App.tsx:126:2619",
                            }),
                          ],
                        }),
                        f.jsx("h3", {
                          "data-source-loc": "src/App.tsx:126:2662",
                          children: b(
                            "Сөздер тоғысқанда",
                            "Когда слова встречаются",
                          ),
                        }),
                        f.jsx("p", {
                          "data-source-loc": "src/App.tsx:126:2722",
                          children: b(
                            "Сөз бен мағынаны сәйкестендір. Есте сақтау қабілетіңді шыңда.",
                            "Соедини слова с их переводами. Тренируй память и учись новому.",
                          ),
                        }),
                        f.jsxs("div", {
                          className: "game-card-bottom",
                          "data-source-loc": "src/App.tsx:126:2863",
                          children: [
                            f.jsxs("span", {
                              "data-source-loc": "src/App.tsx:126:2897",
                              children: [
                                f.jsx(oo, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:126:2903",
                                }),
                                "2 ",
                                b("минут", "минуты"),
                              ],
                            }),
                            f.jsxs("span", {
                              className: "game-play",
                              "data-source-loc": "src/App.tsx:126:2953",
                              children: [
                                b("Жұбын табу", "Найти пары"),
                                f.jsx(De, {
                                  size: 17,
                                  "data-source-loc": "src/App.tsx:126:3012",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsxs("section", {
            className: "heritage-section section-space container",
            id: "heritage",
            "data-source-loc": "src/App.tsx:128:8",
            children: [
              f.jsxs("div", {
                className: "section-heading",
                "data-source-loc": "src/App.tsx:128:84",
                children: [
                  f.jsxs("div", {
                    "data-source-loc": "src/App.tsx:128:117",
                    children: [
                      f.jsxs("p", {
                        className: "eyebrow",
                        "data-source-loc": "src/App.tsx:128:122",
                        children: [
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:128:145",
                          }),
                          b("ҰРПАҚҚА АМАНАТ", "НАСЛЕДИЕ ПОКОЛЕНИЙ"),
                        ],
                      }),
                      f.jsx("h2", {
                        "data-source-loc": "src/App.tsx:128:199",
                        children: b(
                          "Ұлы дала. Ұлы мұра.",
                          "Великая степь. Великое наследие.",
                        ),
                      }),
                      f.jsx("p", {
                        className: "section-description",
                        "data-source-loc": "src/App.tsx:128:270",
                        children: b(
                          "Елді ел еткен тұлғалар мен ұлтты ұйыстырған құндылықтар.",
                          "Личности, создавшие историю, и ценности, объединившие народ.",
                        ),
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    className: "section-link",
                    onClick: () => y({ type: "gallery" }),
                    "data-source-loc": "src/App.tsx:128:442",
                    children: [
                      b("Галереяны ашу", "Открыть галерею"),
                      f.jsx(De, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:128:559",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "gallery-filters",
                "data-source-loc": "src/App.tsx:128:599",
                children: [
                  { id: "all", text: b("Барлығы", "Всё наследие") },
                  { id: "people", text: b("Ұлы тұлғалар", "Великие личности") },
                  {
                    id: "tradition",
                    text: b("Дәстүр мен өнер", "Традиции и искусство"),
                  },
                ].map((R) =>
                  f.jsx(
                    "button",
                    {
                      className: X === R.id ? "active" : "",
                      "aria-pressed": X === R.id,
                      onClick: () => Q(R.id),
                      "data-source-loc": "src/App.tsx:128:835",
                      children: R.text,
                    },
                    R.id,
                  ),
                ),
              }),
              rt(),
            ],
          }),
          f.jsx("section", {
            className: "closing-section container",
            "data-source-loc": "src/App.tsx:130:8",
            children: f.jsxs("div", {
              className: "closing-inner",
              "data-source-loc": "src/App.tsx:130:55",
              children: [
                f.jsx("div", {
                  className: "closing-ornament",
                  "data-source-loc": "src/App.tsx:130:86",
                }),
                f.jsx("div", {
                  className: "closing-emblem",
                  "data-source-loc": "src/App.tsx:130:121",
                  children: f.jsx(ue, {
                    "data-source-loc": "src/App.tsx:130:153",
                  }),
                }),
                f.jsx("p", {
                  className: "eyebrow",
                  "data-source-loc": "src/App.tsx:130:167",
                  children: b(
                    "ТІЛ — КЕШЕ МЕН ЕРТЕҢНІҢ АРАСЫНДАҒЫ КӨПІР",
                    "ЯЗЫК — МОСТ МЕЖДУ ПРОШЛЫМ И БУДУЩИМ",
                  ),
                }),
                f.jsx("h2", {
                  "data-source-loc": "src/App.tsx:130:280",
                  children: b(
                    "Өз тіліңнен — өз әлеміңе.",
                    "Через родной язык — к своему миру.",
                  ),
                }),
                f.jsx("p", {
                  "data-source-loc": "src/App.tsx:130:359",
                  children: b(
                    "Ұлы сапар кішкентай қадамнан басталады. Бүгін бір сөз үйрен. Бір тарихты таны.",
                    "Большое путешествие начинается с маленького шага. Выучи одно слово. Узнай одну историю.",
                  ),
                }),
                f.jsxs("button", {
                  className: "gold-button",
                  onClick: () =>
                    y({
                      type: "lesson",
                      lesson:
                        Je.find((R) => !g.completed.includes(R.id)) || Je[0],
                    }),
                  "data-source-loc": "src/App.tsx:130:542",
                  children: [
                    b("Алғашқы қадамды жаса", "Сделай первый шаг"),
                    f.jsx(De, {
                      size: 18,
                      "data-source-loc": "src/App.tsx:130:743",
                    }),
                  ],
                }),
                f.jsxs("span", {
                  className: "closing-small",
                  "data-source-loc": "src/App.tsx:130:777",
                  children: [
                    f.jsx(nT, {
                      size: 12,
                      "data-source-loc": "src/App.tsx:130:809",
                    }),
                    b(
                      "Ұлттық мұраға деген сүйіспеншілікпен",
                      "С любовью к национальному наследию",
                    ),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      f.jsxs("footer", {
        className: "site-footer container",
        "data-source-loc": "src/App.tsx:133:6",
        children: [
          f.jsxs("div", {
            className: "footer-top",
            "data-source-loc": "src/App.tsx:133:48",
            children: [
              f.jsxs("a", {
                href: "#home",
                className: "brand",
                onClick: (R) => {
                  (R.preventDefault(), Mt("home"));
                },
                "data-source-loc": "src/App.tsx:133:76",
                children: [
                  f.jsx("span", {
                    className: "brand-emblem",
                    "data-source-loc": "src/App.tsx:133:162",
                    children: f.jsx(ue, {
                      "data-source-loc": "src/App.tsx:133:193",
                    }),
                  }),
                  f.jsxs("span", {
                    className: "brand-name",
                    "data-source-loc": "src/App.tsx:133:208",
                    children: [
                      "QAZAQ ",
                      f.jsx("b", {
                        "data-source-loc": "src/App.tsx:133:243",
                        children: "TILI",
                      }),
                      f.jsx("small", {
                        "data-source-loc": "src/App.tsx:133:254",
                        children: b(
                          "ТІЛДІ ТАНЫ. ЕЛДІ ТАНЫ.",
                          "ПОЗНАВАЙ ЯЗЫК И СТРАНУ.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                "data-source-loc": "src/App.tsx:133:336",
                children: b(
                  "Тамыры терең. Танымы шексіз.",
                  "Глубокие корни. Безграничное познание.",
                ),
              }),
              f.jsxs("button", {
                className: "text-button",
                onClick: () => y({ type: "about" }),
                "data-source-loc": "src/App.tsx:133:420",
                children: [
                  b("Жоба туралы", "О проекте"),
                  f.jsx(De, {
                    size: 15,
                    "data-source-loc": "src/App.tsx:133:526",
                  }),
                ],
              }),
              f.jsxs("a", {
                className: "text-button",
                href: "https://ich.unesco.org/en/state/kazakhstan-KZ",
                target: "_blank",
                rel: "noreferrer",
                "data-source-loc": "src/App.tsx:133:560",
                children: [
                  b("Мұра дереккөздері", "Источники о наследии"),
                  f.jsx(sy, {
                    size: 13,
                    "data-source-loc": "src/App.tsx:133:721",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "footer-bottom",
            "data-source-loc": "src/App.tsx:133:756",
            children: [
              f.jsxs("span", {
                "data-source-loc": "src/App.tsx:133:787",
                children: [
                  "© 2026 QAZAQ TILI. ",
                  b(
                    "Білім. Мәдениет. Мұра.",
                    "Образование. Культура. Наследие.",
                  ),
                ],
              }),
              f.jsxs("span", {
                "data-source-loc": "src/App.tsx:133:884",
                children: [
                  f.jsx("span", {
                    className: "footer-dot",
                    "data-source-loc": "src/App.tsx:133:890",
                  }),
                  b("Қазақстанда шабыттанған", "Вдохновлено Казахстаном"),
                ],
              }),
              f.jsxs("button", {
                onClick: () => Mt("home"),
                "data-source-loc": "src/App.tsx:133:984",
                children: [
                  b("Жоғарыға", "Наверх"),
                  f.jsx(De, {
                    size: 14,
                    "data-source-loc": "src/App.tsx:133:1046",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      f.jsx(gu, {
        mode: "wait",
        "data-source-loc": "src/App.tsx:135:6",
        children:
          d &&
          f.jsx(
            ST,
            {
              title: b("Таным кеңістігі", "Пространство знаний"),
              onClose: () => {
                (y(null),
                  "speechSynthesis" in window &&
                    window.speechSynthesis.cancel(),
                  st(!1));
              },
              wide: ["all", "gallery"].includes(d.type),
              "data-source-loc": "src/App.tsx:135:44",
              children: mt(),
            },
            d.type === "game"
              ? d.game
              : d.type === "lesson"
                ? d.lesson.id
                : d.type,
          ),
      }),
      f.jsx(gu, {
        "data-source-loc": "src/App.tsx:135:403",
        children:
          x &&
          f.jsxs(xs.div, {
            className: "toast",
            role: "status",
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 12 },
            "data-source-loc": "src/App.tsx:135:430",
            children: [
              f.jsx(ps, { size: 20, "data-source-loc": "src/App.tsx:135:566" }),
              f.jsx("span", {
                "data-source-loc": "src/App.tsx:135:591",
                children: x,
              }),
              f.jsx("button", {
                className: "icon-button",
                onClick: () => A(""),
                "aria-label": b("Хабарламаны жабу", "Закрыть уведомление"),
                "data-source-loc": "src/App.tsx:135:611",
                children: f.jsx(Ci, {
                  size: 16,
                  "data-source-loc": "src/App.tsx:135:730",
                }),
              }),
            ],
          }),
      }),
    ],
  });
}
function CT() {
  return f.jsx(_o, {
    size: 22,
    strokeWidth: 1.6,
    "data-source-loc": "src/App.tsx:140:34",
  });
}
