import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Compass, MapPin, MousePointer2, Navigation, Route } from 'lucide-react';
import { kazakhstanOutline } from '../lib/kazakhstan';

const stageNames = ['Тіл қазынасы', 'Ұлы тұлғалар', 'Салт-дәстүр', 'Ұлттық мұра', 'Қазақстанды таны', 'Тіл шебері'];
const stageNamesRu = ['Сокровища языка', 'Великие личности', 'Традиции', 'Наследие', 'Узнай Казахстан', 'Мастер языка'];
type JourneyState = { stage: number; visited: number[]; visit: (n: number) => void };
const JourneyContext = createContext<JourneyState>({ stage: 0, visited: [], visit: () => undefined });

export function useJourney() { return useContext(JourneyContext); }

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState(0);
  const [visited, setVisited] = useState<number[]>(() => {
    try { const saved = JSON.parse(localStorage.getItem('qazaq-route-v2') || '[]'); return Array.isArray(saved) ? saved.filter(n => Number.isInteger(n) && n >= 0 && n < 6) : []; } catch { return []; }
  });
  const visit = useCallback((n: number) => {
    setStage(n);
    setVisited(old => old.includes(n) ? old : [...old, n]);
  }, []);
  useEffect(() => { try { localStorage.setItem('qazaq-route-v2', JSON.stringify(visited)); } catch { /* Optional persistence. */ } }, [visited]);
  useEffect(() => {
    const stages: Record<string, number> = { home: 0, explore: 0, learn: 0, games: 5, heritage: 3, kazakhstan: 4 };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting && !document.querySelector('[role="dialog"]')) setStage(stages[entry.target.id] ?? 0); });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <JourneyContext.Provider value={{ stage, visited, visit }}>{children}</JourneyContext.Provider>;
}

export function JourneyRoute({ lang, onSelect }: { lang: string; onSelect: (n: number) => void }) {
  const { stage, visited, visit } = useContext(JourneyContext);
  const names = lang === 'kz' ? stageNames : stageNamesRu;
  return <nav className="journey-route" aria-label={lang === 'kz' ? 'Саяхат бағыты' : 'Маршрут путешествия'}>
    <div className="route-caption"><span><Route size={16} />{lang === 'kz' ? '6 БАҒЫТ. БІР ҮЛКЕН САЯХАТ.' : '6 НАПРАВЛЕНИЙ. ОДНО ПУТЕШЕСТВИЕ.'}</span><span>{visited.length} / 6 <span className="route-visited-label">{lang === 'kz' ? 'бағыт ашылды' : 'направлений открыто'}</span></span></div>
    <div className="route-stages">
      {names.map((name, i) => <button key={name} className={`route-stage ${stage === i ? 'current' : ''} ${visited.includes(i) ? 'visited' : ''}`} onClick={() => { visit(i); onSelect(i); }} aria-current={stage === i ? 'step' : undefined}>
        <span className="route-node">{visited.includes(i) ? <Check size={14} /> : String(i + 1).padStart(2, '0')}</span><span className="route-name">{name}</span>
      </button>)}
    </div>
  </nav>;
}

export function JourneyRail() {
  const { stage, visited } = useContext(JourneyContext);
  const [lang, setLang] = useState('kk');
  useEffect(() => {
    const observer = new MutationObserver(() => setLang(document.documentElement.lang));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);
  const names = lang === 'ru' ? stageNamesRu : stageNames;
  return <><div className="reading-track" aria-hidden="true"><span id="reading-progress" /></div><aside className="journey-rail" aria-label={lang === 'ru' ? 'Прогресс путешествия' : 'Саяхат барысы'}><span className="rail-label">{lang === 'ru' ? 'МАРШРУТ' : 'САЯХАТ'}</span>{names.map((name, i) => <button key={name} className={`${stage === i ? 'current' : ''} ${visited.includes(i) ? 'visited' : ''}`} aria-label={name} onClick={() => { document.querySelectorAll<HTMLButtonElement>('.route-stage')[i]?.click(); }}><span className="rail-dot" /><span className="rail-tooltip">{name}</span></button>)}<span className="rail-count">{String(stage + 1).padStart(2, '0')}<span>/06</span></span></aside></>;
}

type Region = { id: string; name: string; ru: string; tag: string; tagRu: string; copy: string; copyRu: string; location: string; locationRu: string; image: string; point: [number, number]; word: string; meaning: string };
const regions: Region[] = [
  { id:'west', name:'Батыс Қазақстан', ru:'Западный Казахстан', tag:'ДАЛА МЕН ТЕҢІЗ', tagRu:'СТЕПЬ И МОРЕ', copy:'Каспий жағалауы, Маңғыстаудың ақ жартастары және күйшілік дәстүр. Бұл өлке — кең дала мен көне аңыздар тоғысқан мекен.', copyRu:'Каспийское побережье, белые скалы Мангистау и традиция кюя. Край, в котором встречаются простор степи и древние предания.', location:'Маңғыстау · Каспий · Орал',locationRu:'Мангистау · Каспий · Уральск', image:'/images/dombyra.webp', point:[144,222], word:'Күй', meaning:'Домбырамен орындалатын аспаптық шығарма · Инструментальная мелодия' },
  { id:'north', name:'Солтүстік Қазақстан', ru:'Северный Казахстан', tag:'КӨЛДЕР МЕН КӨК ОРМАН', tagRu:'ОЗЁРА И ЛЕСА', copy:'Бурабайдың қарағайлы ормандары мен Көкшетаудың көлдері талай ән мен аңызға арқау болған. Табиғаттың тынысын қазақ сөзінен сезін.', copyRu:'Сосновые леса Бурабая и озёра Кокшетау вдохновляли песни и легенды. Почувствуй дыхание природы в казахском слове.', location:'Көкшетау · Бурабай · Қызылжар',locationRu:'Кокшетау · Бурабай · Петропавловск', image:'/images/language.webp', point:[375,94], word:'Орман', meaning:'Ағаштар өсетін табиғи орта · Лес' },
  { id:'central', name:'Сарыарқа', ru:'Сарыарка', tag:'ҰЛЫ ДАЛАНЫҢ ЖҮРЕГІ', tagRu:'СЕРДЦЕ ВЕЛИКОЙ СТЕПИ', copy:'Сарыарқа — кең жазықтар мен аласа таулар өлкесі. Ұлытау қазақ тарихының маңызды оқиғаларын сақтап, ұрпақтарды ортақ мұрамен байланыстырады.', copyRu:'Сарыарка — край широких равнин и невысоких гор. Улытау хранит память о важных событиях казахской истории и связывает поколения.', location:'Ұлытау · Қарқаралы · Сарыарқа',locationRu:'Улытау · Каркаралы · Сарыарка', image:'/images/steppe-yurt.webp', point:[422,224], word:'Дала', meaning:'Кең, ашық жазық жер · Степь' },
  { id:'east', name:'Шығыс Қазақстан', ru:'Восточный Казахстан', tag:'АБАЙ ЕЛІ. АЛТАЙ ӘЛЕМІ.', tagRu:'РОДИНА АБАЯ. МИР АЛТАЯ.', copy:'Алтайдың асқар таулары мен Ертіс өзені. Абай мен Шәкәрімнің туған өлкесі қазақтың әдебиеті мен рухани дүниесінде ерекше орын алады.', copyRu:'Высокие горы Алтая и река Иртыш. Родина Абая и Шакарима занимает особое место в казахской литературе и духовной культуре.', location:'Семей · Алтай · Ертіс',locationRu:'Семей · Алтай · Иртыш', image:'/images/abai.jpg', point:[615,193], word:'Таным', meaning:'Дүниені білу, түсіну · Познание' },
  { id:'south', name:'Оңтүстік Қазақстан', ru:'Южный Казахстан', tag:'ҰЛЫ ЖІБЕК ЖОЛЫ', tagRu:'ВЕЛИКИЙ ШЁЛКОВЫЙ ПУТЬ', copy:'Түркістан мен Отырар — Ұлы Жібек жолының рухани және мәдени мекендері. Қожа Ахмет Ясауи кесенесі ғасырлар бойғы сәулет өнерін танытады.', copyRu:'Туркестан и Отрар — духовные и культурные центры Великого шёлкового пути. Мавзолей Ходжи Ахмеда Ясави знакомит с многовековым зодчеством.', location:'Түркістан · Отырар · Тараз',locationRu:'Туркестан · Отрар · Тараз', image:'/images/turkestan.webp', point:[386,332], word:'Мұра', meaning:'Ұрпақтан ұрпаққа қалған қазына · Наследие' },
  { id:'jetisu', name:'Жетісу', ru:'Жетысу', tag:'ТАУ МЕН ТАБИҒАТ ҮНДЕСТІГІ', tagRu:'ГАРМОНИЯ ГОР И ПРИРОДЫ', copy:'Іле Алатауының шыңдары, Шарын шатқалы және жайлаудағы киіз үйлер. Жетісу табиғаты көшпелі мәдениеттің сұлулығын ашады.', copyRu:'Вершины Заилийского Алатау, Чарынский каньон и юрты на летних пастбищах. Природа Жетысу раскрывает красоту кочевой культуры.', location:'Алматы · Шарын · Іле Алатауы',locationRu:'Алматы · Чарын · Заилийский Алатау', image:'/images/steppe-yurt.webp', point:[553,323], word:'Жайлау', meaning:'Мал жайылатын жазғы қоныс · Летнее пастбище' },
];

// Cultural discovery areas, deliberately not presented as administrative boundaries.
function voronoiCell(index: number): string {
  let polygon: [number, number][] = [[0,0],[760,0],[760,470],[0,470]];
  const [x,y] = regions[index].point;
  regions.forEach((region,i) => {
    if (i === index) return;
    const [rx,ry] = region.point;
    const nx = rx-x, ny = ry-y, c = (rx*rx+ry*ry-x*x-y*y)/2;
    const next: [number, number][] = [];
    polygon.forEach((a,j) => {
      const b = polygon[(j+1)%polygon.length];
      const da = a[0]*nx+a[1]*ny-c, db=b[0]*nx+b[1]*ny-c;
      if(da<=0) next.push(a);
      if((da<0)!==(db<0)){const t=da/(da-db);next.push([a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])]);}
    });
    polygon=next;
  });
  return polygon.map(p=>p.join(',')).join(' ');
}
const cells = regions.map((_,i)=>voronoiCell(i));

export function KazakhstanMap({ lang }: {lang: string}) {
  const [selected, setSelected] = useState<Region | null>(null);
  const { visit } = useContext(JourneyContext);
  const reduced = useReducedMotion();
  const kk = lang === 'kz';
  const choose = (region: Region) => { setSelected(region); visit(4); };
  return <section id="kazakhstan" className="map-section container">
    <div className="section-heading"><div><p className="eyebrow"><span />{kk ? '05 — ҚАЗАҚСТАНДЫ ТАНЫ' : '05 — УЗНАЙ КАЗАХСТАН'}</p><h2>{kk ? 'Әр өлке — бір әлем.' : 'Каждый край — целый мир.'}</h2><p className="section-description">{kk ? 'Картадан бір өлкені таңда. Еліңді жаңа қырынан аш.' : 'Выбери край на карте. Открой свою страну с новой стороны.'}</p></div><span className="map-heading-note"><Compass size={20}/>{kk ? 'Туған жерден — жаңа танымға' : 'От родной земли — к новым открытиям'}</span></div>
    <div className="map-layout">
      <div className="map-canvas"><div className="map-topline"><span><MapPin size={15}/>{kk ? 'ҰЛЫ ДАЛА КАРТАСЫ' : 'КАРТА ВЕЛИКОЙ СТЕПИ'}</span><button className="text-button map-reset" onClick={()=>setSelected(null)} disabled={!selected}><ArrowLeft size={15}/>{kk ? 'Жалпы көрініс' : 'Общий вид'}</button></div>
        <svg className="kazakhstan-map" viewBox="0 0 760 460" role="group" aria-label={kk ? 'Қазақстанның танымдық картасы' : 'Познавательная карта Казахстана'}>
          <defs><clipPath id="kazakhstan-clip"><path d={kazakhstanOutline}/></clipPath></defs>
          <g className="map-compass" transform="translate(686,60)"><path d="M0-18V18M-8 0H8"/><path d="m-4-10 4-8 4 8"/><text x="0" y="-29" textAnchor="middle">N</text></g>
          <path d={kazakhstanOutline} fill="#e2e7d8" stroke="#b3bf9f" strokeWidth="1.6"/>
          <g clipPath="url(#kazakhstan-clip)">{regions.map((region,i)=><polygon key={region.id} className={`map-region ${selected?.id===region.id?'selected':''}`} points={cells[i]} onClick={()=>choose(region)} role="button" tabIndex={0} aria-label={kk?region.name:region.ru} aria-pressed={selected?.id===region.id} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(region);}}}/>)}</g>
          {regions.map(region=><g key={region.id} className={`map-place ${selected?.id===region.id?'selected':''}`} onClick={()=>choose(region)} aria-hidden="true"><circle cx={region.point[0]} cy={region.point[1]} r={selected?.id===region.id?7:4}/><circle className="map-pin-ring" cx={region.point[0]} cy={region.point[1]} r="12"/><text x={region.point[0]} y={region.point[1]+26} textAnchor="middle">{kk ? region.name : region.ru}</text></g>)}
          <text x="75" y="389" className="map-sea-label">{kk ? 'Каспий теңізі' : 'Каспийское море'}</text>
        </svg>
        <div className="map-bottomline"><span><MousePointer2 size={15}/>{kk ? 'Өлкені таңдап, саяхатты жалғастыр' : 'Выбери край и продолжи путешествие'}</span><span>48° N · 68° E</span></div>
      </div>
      <div className="map-info" aria-live="polite"><motion.div className="region-detail" key={selected?.id||'overview'} initial={{opacity:0,y:reduced?0:10}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:0.24}}>
        <div className="map-info-image"><img src={selected?.image || '/images/steppe-yurt.webp'} alt={selected ? (kk?selected.name:selected.ru) : (kk?'Жайлаудағы киіз үй':'Юрта на летнем пастбище')} loading="lazy"/><span><Navigation size={13}/>{selected ? (kk ? 'ӨЛКЕГЕ САЯХАТ' : 'ПУТЕШЕСТВИЕ ПО КРАЮ') : 'QAZAQSTAN'}</span></div>
        <div className="map-info-copy"><p className="eyebrow">{selected ? (kk?selected.tag:selected.tagRu) : (kk ? 'АЛТЫ БАҒЫТ. САНСЫЗ АШЫЛУ.' : 'ШЕСТЬ НАПРАВЛЕНИЙ. МНОЖЕСТВО ОТКРЫТИЙ.')}</p><h3>{selected ? (kk?selected.name:selected.ru) : (kk ? 'Ұлы даланы бірге ашайық.' : 'Откроем великую степь вместе.')}</h3><p>{selected ? (kk?selected.copy:selected.copyRu) : (kk ? 'Таулардан — кең далаға, көне қалалардан — рухани мұраға. Әр өлкенің өз тарихы, өз үні бар.' : 'От гор — к просторной степи, от древних городов — к духовному наследию. У каждого края своя история и свой голос.')}</p>
          {selected ? <><div className="region-location"><MapPin size={15}/>{kk?selected.location:selected.locationRu}</div><div className="region-word"><span>{kk?'ӨЛКЕМЕН БІРГЕ — БІР СӨЗ':'ОДИН КРАЙ — ОДНО СЛОВО'}</span><strong>{selected.word}</strong><p>{selected.meaning}</p></div></> : <button className="text-button" onClick={()=>choose(regions[5])}>{kk ? 'Алғашқы өлкені ашу' : 'Открыть первый край'}<ArrowRight size={17}/></button>}
        </div>
      </motion.div></div>
    </div>
    <div className="map-region-buttons">{regions.map(region=><button key={region.id} onClick={()=>choose(region)} aria-pressed={selected?.id===region.id} className={selected?.id===region.id?'active':''}>{kk?region.name:region.ru}{selected?.id===region.id&&<Check size={14}/>}</button>)}</div>
    <p className="map-disclaimer">{kk?'Мәдени-танымдық аймақтардың сызбалық картасы. Әкімшілік шекараларды көрсетпейді.':'Схематическая карта культурно-познавательных регионов. Не отражает административные границы.'}</p>
  </section>;
}
