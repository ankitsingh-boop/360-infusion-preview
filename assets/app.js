/* 360 Infusion Center — shared interactions + content data
   Edit DATA below to match client-approved specialties, conditions and medications. */
const DATA = {
  // Specialties we accept physician-directed orders from (plus additional specialties — see "other").
  specialties: [
    { id:'rheumatology', name:'Rheumatology', tint:'tint-blue', icon:'bone', blurb:'Biologic and specialty infusions for inflammatory joint and autoimmune conditions.' },
    { id:'gastroenterology', name:'Gastroenterology', tint:'tint-mint', icon:'gi', blurb:'Infusion therapies commonly prescribed for inflammatory bowel disease.' },
    { id:'neurology', name:'Neurology', tint:'tint-lav', icon:'brain', blurb:'Physician-directed infusions for neurological and neuroimmune conditions.' },
    { id:'immunology', name:'Allergy & Immunology / IVIG', tint:'tint-peach', icon:'shield', blurb:'Immune globulin, allergy and immunology infusions ordered by your specialist.' },
    { id:'dermatology', name:'Dermatology', tint:'tint-rose', icon:'skin', blurb:'Biologic infusions and injections for chronic inflammatory skin conditions.' },
    { id:'pulmonology', name:'Pulmonology', tint:'tint-sand', icon:'lung', blurb:'Infusion and injection therapies for chronic respiratory conditions.' },
    { id:'cardiology', name:'Cardiology', tint:'tint-rose', icon:'heart', blurb:'Physician-ordered infusions and injections supporting cardiovascular care.' },
    { id:'endocrinology', name:'Endocrinology', tint:'tint-blue', icon:'spark', blurb:'Infusions and injections for bone health, metabolic and endocrine conditions.' },
    { id:'primary-care', name:'Primary Care', tint:'tint-mint', icon:'steth', blurb:'Iron, hydration and other infusions ordered by your primary care provider.' },
    { id:'nephrology', name:'Nephrology', tint:'tint-lav', icon:'drip', blurb:'Physician-directed infusions supporting kidney-related care.' },
    { id:'infectious-disease', name:'Infectious Disease', tint:'tint-peach', icon:'shield', blurb:'IV anti-infective therapies ordered by your treating physician.' },
    { id:'other', name:'Additional Specialties', tint:'tint-sand', icon:'plus', blurb:'Ophthalmology, hematology, psychiatry, genetics and other physician-ordered infusions.' }
  ],
  conditions: [
    { id:'rheumatoid-arthritis', name:'Rheumatoid Arthritis', spec:'rheumatology', meds:['actemra','orencia','remicade','simponi-aria'] },
    { id:'psoriatic-arthritis', name:'Psoriatic Arthritis', spec:'rheumatology', meds:['cosentyx','remicade','simponi-aria'] },
    { id:'lupus', name:'Lupus (SLE)', spec:'rheumatology', meds:['benlysta'] },
    { id:'crohns-disease', name:'Crohn’s Disease', spec:'gastroenterology', meds:['entyvio','remicade','skyrizi','stelara'] },
    { id:'ulcerative-colitis', name:'Ulcerative Colitis', spec:'gastroenterology', meds:['entyvio','remicade','stelara'] },
    { id:'multiple-sclerosis', name:'Multiple Sclerosis', spec:'neurology', meds:['ocrevus','tysabri'] },
    { id:'migraine', name:'Chronic Migraine', spec:'neurology', meds:['vyepti'] },
    { id:'myasthenia-gravis', name:'Myasthenia Gravis', spec:'neurology', meds:['soliris','vyvgart'] },
    { id:'immune-deficiency', name:'Primary Immune Deficiency', spec:'immunology', meds:['gammagard','privigen'] },
    { id:'psoriasis', name:'Plaque Psoriasis', spec:'dermatology', meds:['cosentyx','skyrizi','stelara'] },
    { id:'asthma', name:'Severe Asthma', spec:'pulmonology', meds:['nucala','xolair'] },
    { id:'osteoporosis', name:'Osteoporosis', spec:'endocrinology', meds:['evenity','prolia','reclast'] },
    { id:'iron-deficiency', name:'Iron Deficiency Anemia', spec:'primary-care', meds:['injectafer','venofer'] },
    { id:'high-cholesterol', name:'High Cholesterol (LDL)', spec:'cardiology', meds:['leqvio'] }
  ],
  // Alphabetical A–Z list of medications with referral/order forms (from the clinic's provider page).
  medications: [
    ['Actemra','tocilizumab',['rheumatology'],'IV infusion','About 1 hour','2023/05/Tocilizumab.pdf'],
    ['Adakveo','crizanlizumab',['other'],'IV infusion','',''],
    ['Aduhelm','aducanumab',['neurology'],'IV infusion','','2023/07/Aduhelm-360.pdf'],
    ['Aralast NP','alpha-1 proteinase inhibitor',['pulmonology'],'IV infusion','','2023/05/Alpha-1-Order-Form-Word-360.pdf'],
    ['Aranesp','darbepoetin alfa',['nephrology'],'Injection','About 15 minutes','2023/05/Darbepoetin-alfa.pdf'],
    ['Avsola','infliximab-axxq',['rheumatology','gastroenterology'],'IV infusion','About 2 hours','2023/05/Infliximab-Order-Form-Word-360.pdf'],
    ['Benlysta','belimumab',['rheumatology'],'IV infusion','About 1 hour','2023/05/Benlysta-Order-Form-Word-360.pdf'],
    ['Bivigam','immune globulin (IVIG)',['immunology'],'IV infusion','Varies by dose','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Cerezyme','imiglucerase',['other'],'IV infusion','','2023/05/Cerezyme-Order-Form-Word-360.pdf'],
    ['Cimzia','certolizumab pegol',['rheumatology','gastroenterology'],'Injection','About 15 minutes','2023/05/Cimzia-Order-Form-2-360-updated.pdf'],
    ['Cinqair','reslizumab',['pulmonology'],'IV infusion','About 30 minutes','2023/05/Cinqair-Order-Form-360-updated.pdf'],
    ['Cosentyx','secukinumab',['rheumatology','dermatology'],'IV infusion / injection','','2023/05/Secukinumab-Cosentyx.pdf'],
    ['Crysvita','burosumab',['endocrinology'],'Injection','',''],
    ['Cubicin','daptomycin',['infectious-disease'],'IV infusion','About 30 minutes','2023/05/Cubicin-.pdf'],
    ['Cuvitru','immune globulin subcutaneous',['immunology'],'Subcutaneous infusion','','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Dalvance','dalbavancin',['infectious-disease'],'IV infusion','About 30 minutes','2023/05/dalvance-.pdf'],
    ['Dupixent','dupilumab',['dermatology','pulmonology'],'Injection','About 15 minutes','2023/05/dupixent.pdf'],
    ['Elaprase','idursulfase',['other'],'IV infusion','','2023/05/Elaprase-Order-Form-360.pdf'],
    ['Elelyso','taliglucerase alfa',['other'],'IV infusion','','2023/05/Elelyso.pdf'],
    ['Enbrel','etanercept',['rheumatology','dermatology'],'Injection','About 15 minutes','2023/05/Enbrel.pdf'],
    ['Entyvio','vedolizumab',['gastroenterology'],'IV infusion','About 30 minutes','2023/05/Entyvio-Order-Form-Word-360.pdf'],
    ['Evenity','romosozumab',['endocrinology'],'Injection','About 15 minutes','2023/05/Evenity-form-word-360.pdf'],
    ['Fabrazyme','agalsidase beta',['other'],'IV infusion','','2023/05/Fabrazyme-Order-Form-word-360.pdf'],
    ['Feraheme','ferumoxytol',['primary-care','nephrology'],'IV infusion','About 15 minutes + observation','2023/05/Iron-Order-Form-word-360.pdf'],
    ['Gammagard','immune globulin (IVIG)',['immunology','neurology'],'IV infusion','Varies by dose','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Gammaked','immune globulin (IVIG)',['immunology','neurology'],'IV infusion','Varies by dose','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Gamunex-C','immune globulin (IVIG)',['immunology','neurology'],'IV infusion','Varies by dose','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Glassia','alpha-1 proteinase inhibitor',['pulmonology'],'IV infusion','','2023/05/Glassia-1-Order-Form-word-360.pdf'],
    ['Hizentra','immune globulin subcutaneous',['immunology'],'Subcutaneous infusion','','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Humira','adalimumab',['rheumatology','gastroenterology','dermatology'],'Injection','About 15 minutes','2023/05/humira-.pdf'],
    ['Ilaris','canakinumab',['rheumatology'],'Injection','About 15 minutes','2023/05/Ilaris-Order-Form-word-360.pdf'],
    ['Ilumya','tildrakizumab',['dermatology'],'Injection','About 15 minutes','2023/05/Ilumya-Order-Form-Word-360.pdf'],
    ['Inflectra','infliximab-dyyb',['rheumatology','gastroenterology'],'IV infusion','About 2 hours',''],
    ['Injectafer','ferric carboxymaltose',['primary-care'],'IV infusion','About 15 minutes','2023/05/Iron-Order-Form-word-360.pdf'],
    ['Invanz','ertapenem',['infectious-disease'],'IV infusion','About 30 minutes',''],
    ['Invega Sustenna','paliperidone palmitate',['other'],'Injection','About 15 minutes','2023/05/Invega-.pdf'],
    ['Kanuma','sebelipase alfa',['other'],'IV infusion','','2023/05/Kanuma.pdf'],
    ['Kimyrsa','oritavancin',['infectious-disease'],'IV infusion','',''],
    ['Krystexxa','pegloticase',['rheumatology'],'IV infusion','About 2 hours',''],
    ['Lemtrada','alemtuzumab',['neurology'],'IV infusion','4+ hours + observation','2023/05/Lemtrada-Order-Form_1-word-360.pdf'],
    ['Leqvio','inclisiran',['cardiology'],'Injection','About 15 minutes',''],
    ['Lumizyme','alglucosidase alfa',['other'],'IV infusion','','2023/05/Lumizyme-Order-Form-Word-360.pdf'],
    ['Mycamine','micafungin',['infectious-disease'],'IV infusion','About 1 hour',''],
    ['Nucala','mepolizumab',['pulmonology'],'Injection','About 15 minutes','2023/05/Nucala-Order-Form-word-360.pdf'],
    ['Ocrevus','ocrelizumab',['neurology'],'IV infusion','2–4 hours','2023/05/Ocrevus-Order-Form-word-360.pdf'],
    ['Octagam 10%','immune globulin (IVIG)',['immunology','neurology'],'IV infusion','Varies by dose','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Onpattro','patisiran',['neurology','cardiology'],'IV infusion','','2023/05/Onpattro-Order-Form-word-360.pdf'],
    ['Orbactiv','oritavancin',['infectious-disease'],'IV infusion','',''],
    ['Orencia','abatacept',['rheumatology'],'IV infusion','About 30 minutes','2023/05/Orencia-Order-Form.pdf'],
    ['Privigen','immune globulin (IVIG)',['immunology','neurology'],'IV infusion','Varies by dose','2023/05/IVIG-Order-Form-word-360.pdf'],
    ['Prolastin-C','alpha-1 proteinase inhibitor',['pulmonology'],'IV infusion','','2023/05/Prolastin-C-1-Order-Form-Word-360.pdf'],
    ['Prolia','denosumab',['endocrinology'],'Injection','About 15 minutes','2023/05/prolia-form-word-360.pdf'],
    ['Qutenza','capsaicin 8% topical system',['neurology'],'Topical application','About 1 hour','2023/05/qutenza-form-word-360.pdf'],
    ['Radicava','edaravone',['neurology'],'IV infusion','About 1 hour','2023/07/Radicava-360.pdf'],
    ['Reclast','zoledronic acid',['endocrinology'],'IV infusion','About 30 minutes','2023/07/Reclast-360.pdf'],
    ['Remicade','infliximab',['rheumatology','gastroenterology','dermatology'],'IV infusion','About 2 hours','2023/05/Infliximab-Order-Form-Word-360.pdf'],
    ['Renflexis','infliximab-abda',['rheumatology','gastroenterology'],'IV infusion','About 2 hours','2023/05/Infliximab-Order-Form-Word-360.pdf'],
    ['Rocephin','ceftriaxone',['infectious-disease'],'IV infusion / injection','About 30 minutes',''],
    ['Simponi Aria','golimumab',['rheumatology'],'IV infusion','About 30 minutes','2023/05/Simponi-Aria-Order-Form-word-360.pdf'],
    ['Skyrizi','risankizumab',['gastroenterology','dermatology'],'IV infusion (induction)','About 1 hour','2023/05/Skyrizi-Order-Form-word-360.pdf'],
    ['Soliris','eculizumab',['neurology','nephrology'],'IV infusion','About 35 minutes + observation','2023/05/Soliris-Order-Form-word-360.pdf'],
    ['Solu-Medrol','methylprednisolone',['neurology','rheumatology'],'IV infusion','About 1 hour','2023/05/Solu-Medrol-Order-Form-word-360.pdf'],
    ['Stelara','ustekinumab',['gastroenterology','dermatology'],'IV infusion (induction)','About 1 hour','2023/07/Stelara-360.pdf'],
    ['Tepezza','teprotumumab',['endocrinology'],'IV infusion','About 60–90 minutes','2023/05/Tepezza-Order-Form-word-360.pdf'],
    ['Tezspire','tezepelumab',['pulmonology'],'Injection','About 15 minutes','2023/05/Tezspire-Order-Form-word-360.pdf'],
    ['Tysabri','natalizumab',['neurology','gastroenterology'],'IV infusion','About 1 hour + observation','2023/05/Tysabri-Order-Form-word-360.pdf'],
    ['Ultomiris','ravulizumab',['neurology','nephrology'],'IV infusion','','2023/05/Ultomiris-Order-Form-360-word.pdf'],
    ['Uplizna','inebilizumab',['neurology'],'IV infusion','About 90 minutes','2023/05/Uplizna-Order-Form-word-360.pdf'],
    ['Vancomycin','vancomycin',['infectious-disease'],'IV infusion','About 1–2 hours',''],
    ['Venofer','iron sucrose',['primary-care','nephrology'],'IV infusion','About 30 minutes','2023/05/Iron-Order-Form-word-360.pdf'],
    ['Vibativ','telavancin',['infectious-disease'],'IV infusion','About 1 hour','2023/05/Vibativ.pdf'],
    ['Vivitrol','naltrexone extended-release',['other'],'Injection','About 15 minutes','2023/05/Vivitrol.pdf'],
    ['VPRIV','velaglucerase alfa',['other'],'IV infusion','','2023/05/Velaglucerase-alfa.pdf'],
    ['Vyepti','eptinezumab',['neurology'],'IV infusion','About 30 minutes','2023/05/Vyepti-Order-Form-360.pdf'],
    ['Vyvgart','efgartigimod',['neurology'],'IV infusion','About 1 hour','2023/05/Vyvgart-Order-Form-.pdf'],
    ['Xolair','omalizumab',['pulmonology','immunology'],'Injection','About 15 minutes + observation','2023/05/Xolair-Order-Form-word-360.pdf'],
    ['Zemaira','alpha-1 proteinase inhibitor',['pulmonology'],'IV infusion','','2023/05/Zemaira.pdf'],
    ['Zinplava','bezlotoxumab',['infectious-disease'],'IV infusion','About 1 hour','2023/05/Zinpalva.pdf']
  ].map(([name, generic, specs, form, time, pdf]) => ({
    id: name.toLowerCase().replace(/%/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),
    name, generic, specs, form, time: time || 'Confirmed when we schedule you',
    pdf: pdf ? 'https://360infusioncenter.com/wp-content/uploads/' + pdf : ''
  }))
};
const FAX = '352-549-9963', EMAIL = 'info@360infusioncenter.com';
const PHONE = '(352) 549-9962', TEL = 'tel:+13525499962';
const specById = id => DATA.specialties.find(s => s.id === id);
const condById = id => DATA.conditions.find(c => c.id === id);
const medById = id => DATA.medications.find(m => m.id === id);
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];
const param = k => new URLSearchParams(location.search).get(k);
const icon = n => `<svg class="i"><use href="#${n}"/></svg>`;

/* ---------- global UI ---------- */
function initGlobal() {
  const hdr = qs('#hdr');
  if (hdr) addEventListener('scroll', () => hdr.classList.toggle('stuck', scrollY > 40), { passive: true });
  const mb = qs('#menuBtn'), mn = qs('#mnav');
  if (mb && mn) {
    mb.addEventListener('click', () => { const on = mn.classList.toggle('on'); mb.setAttribute('aria-expanded', on); });
    qsa('a', mn).forEach(a => a.addEventListener('click', () => mn.classList.remove('on')));
  }
  // active nav
  const here = location.pathname.split('/').pop() || 'index.html';
  qsa('.nav a, .mnav a').forEach(a => { if (a.getAttribute('href') === here) a.classList.add('on'); });
  // reveal
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); } }), { threshold: .1 });
  qsa('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 70 + 'ms'; io.observe(el); });
  setTimeout(() => { document.body.classList.add('loaded'); qsa('.rv:not(.shown)').forEach(el => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('shown'); }); }, 1200);
  // today's hours highlight
  const d = new Date().getDay();
  qsa('.hours [data-day]').forEach(el => { if (+el.dataset.day === d) el.classList.add('today'); });
  // tabs
  qsa('.tabs').forEach(t => {
    const btns = qsa('button', t), panes = qsa('.tab-pane', t.parentElement);
    btns.forEach((b, i) => b.addEventListener('click', () => {
      btns.forEach(x => x.classList.remove('on')); panes.forEach(x => x.classList.remove('on'));
      b.classList.add('on'); if (panes[i]) { panes[i].classList.add('on'); qsa('.rv', panes[i]).forEach(x => x.classList.add('shown')); qsa('.acc-item.on .acc-body', panes[i]).forEach(bd => bd.style.maxHeight = bd.scrollHeight + 'px'); }
    }));
  });
  // accordion
  qsa('.acc-item').forEach(it => {
    const btn = qs('.acc-btn', it), body = qs('.acc-body', it);
    btn.addEventListener('click', () => {
      const open = it.classList.toggle('on');
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
      btn.setAttribute('aria-expanded', open);
    });
  });
  // carousel
  qsa('.carousel').forEach(initCarousel);
  // generic search boxes
  qsa('[data-search]').forEach(initSearch);
  // filter chips
  qsa('[data-filter-for]').forEach(initFilter);
  // simple forms
  qsa('form[data-simple]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate(f)) return;
    f.classList.add('hide');
    qs(f.dataset.simple).classList.remove('hide');
    toast('Request received — we’ll be in touch shortly.');
  }));
  // wizard
  qsa('.wiz').forEach(initWizard);
  // uploads
  qsa('.upload').forEach(initUpload);
  // counters
  qsa('[data-count]').forEach(el => {
    const end = +el.dataset.count, dur = 1200, t0 = performance.now();
    const io2 = new IntersectionObserver(es => { if (es[0].isIntersecting) { io2.disconnect(); tick(performance.now()); } });
    function tick(t) { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); }
    io2.observe(el);
  });
}

function toast(msg) {
  let t = qs('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.innerHTML = icon('check') + msg; t.classList.add('on');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 3200);
}

/* ---------- carousel ---------- */
function initCarousel(c) {
  const track = qs('.track', c), items = qsa('.rev', c);
  const dots = qs('.dots', c.parentElement), prev = qs('[data-prev]', c.parentElement), next = qs('[data-next]', c.parentElement);
  let i = 0, per = () => innerWidth > 1280 ? 3 : innerWidth > 640 ? 2 : 1;
  const pages = () => Math.max(1, items.length - per() + 1);
  function go(n) {
    i = (n + pages()) % pages();
    const gap = 22, w = items[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-i * w}px)`;
    if (dots) { dots.innerHTML = ''; for (let k = 0; k < pages(); k++) { const b = document.createElement('button'); b.className = k === i ? 'on' : ''; b.setAttribute('aria-label', 'Go to review ' + (k + 1)); b.onclick = () => go(k); dots.appendChild(b); } }
  }
  prev && (prev.onclick = () => go(i - 1)); next && (next.onclick = () => go(i + 1));
  addEventListener('resize', () => go(i)); go(0);
  let auto = setInterval(() => go(i + 1), 6000);
  c.addEventListener('mouseenter', () => clearInterval(auto)); c.addEventListener('mouseleave', () => auto = setInterval(() => go(i + 1), 6000));
}

/* ---------- search ---------- */
function initSearch(box) {
  const kind = box.dataset.search, inp = qs('input', box), dd = qs('.dd', box);
  const data = kind === 'conditions'
    ? DATA.conditions.map(c => ({ n: c.name, s: specById(c.spec).name, href: 'condition.html?c=' + c.id }))
    : kind === 'medications'
      ? DATA.medications.map(m => ({ n: m.name, s: m.generic, href: 'medication.html?m=' + m.id }))
      : [...DATA.conditions.map(c => ({ n: c.name, s: 'Condition · ' + specById(c.spec).name, href: 'condition.html?c=' + c.id })),
         ...DATA.medications.map(m => ({ n: m.name, s: 'Medication · ' + m.generic, href: 'medication.html?m=' + m.id }))];
  let idx = -1;
  const render = () => {
    const q = inp.value.trim().toLowerCase(); idx = -1;
    if (!q) { dd.classList.remove('on'); return; }
    const hits = data.filter(d => (d.n + ' ' + d.s).toLowerCase().includes(q)).slice(0, 7);
    dd.innerHTML = hits.length ? hits.map(h => `<a href="${h.href}">${h.n}<span>${h.s}</span></a>`).join('') : `<div class="none">No match — call ${PHONE} and we’ll help.</div>`;
    dd.classList.add('on');
  };
  inp.addEventListener('input', render); inp.addEventListener('focus', render);
  inp.addEventListener('keydown', e => {
    const items = qsa('a', dd); if (e.key === 'Escape') dd.classList.remove('on');
    if (!items.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); idx = (idx + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; items.forEach((a, k) => a.classList.toggle('sel', k === idx)); }
    if (e.key === 'Enter' && idx > -1) location.href = items[idx].href;
  });
  document.addEventListener('click', e => { if (!box.contains(e.target)) dd.classList.remove('on'); });
  qsa('.chip', box.parentElement).forEach(ch => ch.addEventListener('click', () => { inp.value = ch.textContent; render(); inp.focus(); }));
}

/* ---------- chip filters ---------- */
function initFilter(bar) {
  const target = qs(bar.dataset.filterFor), items = qsa('[data-tags]', target), count = qs('[data-count-of="' + bar.dataset.filterFor + '"]');
  const chips = qsa('.chip', bar);
  chips.forEach(ch => ch.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('on')); ch.classList.add('on');
    const f = ch.dataset.f; let n = 0;
    items.forEach(it => { const show = f === 'all' || it.dataset.tags.split(' ').includes(f); it.classList.toggle('hide', !show); if (show) n++; });
    if (count) count.textContent = n + (n === 1 ? ' result' : ' results');
  }));
}

/* ---------- forms ---------- */
function validate(scope) {
  let ok = true;
  qsa('[required]', scope).forEach(el => {
    if (el.closest('.wpane') && !el.closest('.wpane').classList.contains('on')) return;
    if (el.closest('.hide')) return;
    const wrap = el.closest('.fld') || el.parentElement;
    let bad = el.type === 'checkbox' ? !el.checked : el.type === 'radio' ? !qsa(`input[name="${el.name}"]`, scope).some(r => r.checked) : !el.value.trim();
    if (!bad && el.type === 'email') bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
    el.classList.toggle('err', bad); wrap.classList.toggle('has-err', bad);
    if (bad) ok = false;
  });
  return ok;
}
function initUpload(u) {
  const inp = qs('input', u), list = qs('.files', u.parentElement);
  u.addEventListener('click', () => inp.click());
  ['dragenter', 'dragover'].forEach(ev => u.addEventListener(ev, e => { e.preventDefault(); u.classList.add('drag'); }));
  ['dragleave', 'drop'].forEach(ev => u.addEventListener(ev, e => { e.preventDefault(); u.classList.remove('drag'); }));
  u.addEventListener('drop', e => add(e.dataTransfer.files));
  inp.addEventListener('change', () => add(inp.files));
  function add(files) {
    [...files].forEach(f => {
      const row = document.createElement('div');
      row.innerHTML = `<span>${f.name} · ${(f.size / 1024).toFixed(0)} KB</span><button type="button" aria-label="Remove">✕</button>`;
      qs('button', row).onclick = () => row.remove(); list.appendChild(row);
    });
  }
}
function initWizard(w) {
  const panes = qsa('.wpane', w), submit = qs('[data-wsubmit]', w);
  const confirm = panes[panes.length - 1];
  panes.forEach((p, k) => { if (k < panes.length - 1) p.classList.add('on'); });
  submit.classList.remove('hide');
  function buildReview() {
    const r = qs('.review', w); if (!r) return; r.innerHTML = '';
    qsa('input,select,textarea', w).forEach(el => {
      if (!el.name || el.type === 'file') return;
      if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
      const lbl = el.dataset.label || (qs(`label[for="${el.id}"]`) || {}).textContent || el.name;
      const val = el.type === 'checkbox' ? 'Yes' : el.type === 'radio' ? (qs(`label[for="${el.id}"] b`) || {}).textContent || el.value : el.value;
      if (!val) return;
      r.insertAdjacentHTML('beforeend', `<div><b>${lbl.replace('*', '').trim()}</b><span>${val}</span></div>`);
    });
  }
  submit.onclick = () => {
    if (!validate(w)) { const bad = qs('.err', w); bad && bad.scrollIntoView({ behavior: 'smooth', block: 'center' }); return toast('Please complete the highlighted fields.'); }
    buildReview();
    const ref = (w.dataset.prefix || 'REF') + '-' + new Date().getFullYear() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    qsa('[data-ref]', w).forEach(el => el.textContent = ref);
    panes.forEach(p => p.classList.remove('on')); confirm.classList.add('on'); qs('.wnav', w).classList.add('hide');
    w.scrollIntoView({ behavior: 'smooth', block: 'start' }); toast('Submitted. Reference ' + ref);
  };
}

/* ---------- dynamic pages ---------- */
function renderConditionPage() {
  const el = qs('#condPage'); if (!el) return;
  const c = condById(param('c')) || DATA.conditions[0], s = specById(c.spec);
  const meds = c.meds.map(medById).filter(Boolean);
  qsa('[data-cname]').forEach(x => x.textContent = c.name);
  qsa('[data-sname]').forEach(x => x.textContent = s.name);
  document.title = `${c.name} Infusion Therapy | 360 Infusion Center`;
  const cm = qs('#condMeds'); if (cm) cm.innerHTML = `<div class="note">${icon('info')}<span>Your physician selects the medication and dose. Providers can find every order form in the <a href="referral-forms.html"><b>A–Z referral forms</b></a>.</span></div>`;
  const related = DATA.conditions.filter(x => x.spec === c.spec && x.id !== c.id);
  qs('#condRelated').innerHTML = related.length ? related.map(x => `<a class="chip" href="condition.html?c=${x.id}">${x.name}</a>`).join('') : '<span class="sm">No other listed conditions in this specialty yet.</span>';
}
function renderMedicationPage() {
  const el = qs('#medPage'); if (!el) return;
  const m = medById(param('m')) || DATA.medications[0];
  qsa('[data-mname]').forEach(x => x.textContent = m.name);
  qsa('[data-mgeneric]').forEach(x => x.textContent = m.generic);
  qsa('[data-mform]').forEach(x => x.textContent = m.form);
  qsa('[data-mtime]').forEach(x => x.textContent = m.time);
  qsa('[data-mspecs]').forEach(x => x.textContent = m.specs.map(id => specById(id).name).join(', '));
  document.title = `${m.name} (${m.generic}) Infusion | 360 Infusion Center`;
  const conds = DATA.conditions.filter(c => c.meds.includes(m.id));
  const pdfEl = qs('#medPdf'); if (pdfEl) pdfEl.innerHTML = m.pdf ? `<a href="${m.pdf}" class="btn btn-o btn-sm" target="_blank" rel="noopener">${icon('dl')}Download order form</a>` : `<a href="mailto:${EMAIL}?subject=Referral form request: ${encodeURIComponent(m.name)}" class="btn btn-o btn-sm">${icon('mail')}Request order form</a>`;
  qs('#medConds').innerHTML = conds.map(c => `<a class="chip" href="condition.html?c=${c.id}">${c.name}</a>`).join('') || '<span class="sm">Physician-directed uses vary — ask your specialist.</span>';
}
function renderConditionsDirectory() {
  const el = qs('#condDir'); if (!el) return;
  el.innerHTML = DATA.conditions.map(c => { const s = specById(c.spec); return `<a class="row" href="condition.html?c=${c.id}" data-tags="${c.spec}" style="grid-template-columns:1.6fr 1fr auto"><div><b>${c.name}</b><span>Physician-directed infusion therapy</span></div><div><span class="tagx">${s.name}</span></div><span class="arrow">${icon('arr')}</span></a>`; }).join('');
  const used = new Set(DATA.conditions.map(c => c.spec));
  const chips = qs('#condChips'); if (chips) chips.innerHTML = `<button class="chip on" data-f="all">All</button>` + DATA.specialties.filter(s => used.has(s.id)).map(s => `<button class="chip" data-f="${s.id}">${s.name}</button>`).join('');
  const cnt = qs('[data-count-of="#condDir"]'); if (cnt) cnt.textContent = DATA.conditions.length + ' results';
}
function renderMedicationsDirectory() {
  const el = qs('#medDir'); if (!el) return;
  el.innerHTML = DATA.medications.map(m => `<a class="row" href="medication.html?m=${m.id}" data-tags="${m.specs.join(' ')}"><div><b>${m.name}</b><span>${m.generic}</span></div><div><span class="tagx">${m.form}</span></div><div><span>${m.specs.map(id => specById(id).name).join(', ')}</span></div><span class="arrow">${icon('arr')}</span></a>`).join('');
  const chips = qs('#medChips'); if (chips) chips.innerHTML = `<button class="chip on" data-f="all">All</button>` + DATA.specialties.map(s => `<button class="chip" data-f="${s.id}">${s.name}</button>`).join('');
  const cnt = qs('[data-count-of="#medDir"]'); if (cnt) cnt.textContent = DATA.medications.length + ' results';
}
function renderReferralForms() {
  const el = qs('#formsList'); if (!el) return;
  const letters = [...new Set(DATA.medications.map(m => m.name[0].toUpperCase()))];
  const idx = qs('#formsIndex'); if (idx) idx.innerHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => letters.includes(l) ? `<a href="#f-${l}" class="chip">${l}</a>` : `<span class="chip off">${l}</span>`).join('');
  el.innerHTML = letters.map(l => `<div class="fgroup" id="f-${l}"><h3 class="fletter">${l}</h3><div class="medgrid">` + DATA.medications.filter(m => m.name[0].toUpperCase() === l).map(m =>
    `<div class="card flat fcard-med frow" data-name="${(m.name + ' ' + m.generic).toLowerCase()}"><div class="top"><b>${m.name}</b><span class="sm">${m.generic}</span><span class="tagx">${m.form}</span></div><div class="btns">` +
    (m.pdf ? `<a href="${m.pdf}" class="btn btn-n btn-sm" target="_blank" rel="noopener">${icon('dl')}Order form</a>` : `<a href="mailto:${EMAIL}?subject=Referral form request: ${encodeURIComponent(m.name)}" class="btn btn-l btn-sm">${icon('mail')}Request form</a>`) +
    `<a href="medication.html?m=${m.id}" class="btn btn-l btn-sm">Details</a></div></div>`).join('') + '</div></div>').join('');
  const inp = qs('#formsSearch'), cnt = qs('#formsCount'), none = qs('#formsNone');
  const total = DATA.medications.length; if (cnt) cnt.textContent = total + ' medications';
  if (inp) inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase(); let n = 0;
    qsa('.frow', el).forEach(r => { const show = !q || r.dataset.name.includes(q); r.classList.toggle('hide', !show); if (show) n++; });
    qsa('.fgroup', el).forEach(g => g.classList.toggle('hide', !qsa('.frow:not(.hide)', g).length));
    if (cnt) cnt.textContent = n + ' of ' + total + ' medications'; if (none) none.classList.toggle('hide', n > 0);
    if (idx) idx.classList.toggle('hide', !!q);
  });
}
function renderSpecialtyCards() {
  qsa('[data-specialties]').forEach(el => {
    el.innerHTML = DATA.specialties.map((s, k) => { const n = DATA.conditions.filter(c => c.spec === s.id).length; return `<a class="card quick ${s.tint} rv" href="conditions.html#${s.id}" data-spec="${s.id}"><div style="display:flex;justify-content:space-between;align-items:center"><span class="ic big">${icon(s.icon)}</span><span class="badge">${n ? n + ' condition' + (n !== 1 ? 's' : '') : 'Physician-ordered'}</span></div><h3 class="h4">${s.name}</h3><p>${s.blurb}</p><div class="foot"><span class="link">Explore</span><span class="arrow">${icon('arr')}</span></div></a>`; }).join('');
  });
}
function populateSelects() {
  qsa('select[data-opts="specialties"]').forEach(s => s.insertAdjacentHTML('beforeend', DATA.specialties.map(x => `<option value="${x.name}">${x.name}</option>`).join('')));
  qsa('select[data-opts="medications"]').forEach(s => s.insertAdjacentHTML('beforeend', DATA.medications.map(x => `<option value="${x.name} (${x.generic})">${x.name} — ${x.generic}</option>`).join('') + '<option value="Other Medication / Not Listed">Other Medication / Not Listed</option>'));
  qsa('select[data-opts="conditions"]').forEach(s => s.insertAdjacentHTML('beforeend', DATA.conditions.map(x => `<option value="${x.name}">${x.name}</option>`).join('') + '<option value="Other">Other</option>'));
}

document.addEventListener('DOMContentLoaded', () => {
  renderConditionPage(); renderMedicationPage(); renderConditionsDirectory(); renderMedicationsDirectory(); renderReferralForms(); renderSpecialtyCards(); populateSelects();
  initGlobal();
  // deep link to a specialty filter chip
  if (location.hash) {
    const ch = qs(`.chip[data-f="${location.hash.slice(1)}"]`); ch && ch.click();
    const pane = qs(`.tab-pane${location.hash}`); if (pane) { const panes = qsa('.tab-pane', pane.parentElement), i = panes.indexOf(pane); const btn = qsa('.tabs button', pane.parentElement)[i]; btn && btn.click(); setTimeout(() => pane.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }
  }
  addEventListener('hashchange', () => { const pane = qs(`.tab-pane${location.hash}`); if (pane) { const panes = qsa('.tab-pane', pane.parentElement), i = panes.indexOf(pane); const btn = qsa('.tabs button', pane.parentElement)[i]; btn && btn.click(); } });
});
