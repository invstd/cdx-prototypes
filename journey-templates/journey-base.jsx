/* Shared Journey overlay UI — used as the dark background canvas
   behind every Save and Browse variant artboard. */

const Icon = {
  X: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  Info: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
  ),
  Bookmark: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
  ),
  Grid: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
  ),
  Down: ({ size = 10 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
  ),
  Search: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
  ),
  Back: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
  ),
  Star: ({ filled = true }) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Download: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
  ),
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Plus: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Refresh: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
  ),
  Calendar: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  Trophy: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14v3a4 4 0 01-4 4h-.34A4 4 0 0111 14v2h2v3H8v-3h2v-2a4 4 0 01-3.66-3H6a4 4 0 01-4-4V4h3z"/></svg>
  ),
};

/* Avatar */
function Avatar({ name, color, size = 18 }) {
  const initials = name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const fontSize = size <= 18 ? '.58rem' : size <= 24 ? '.7rem' : '.78rem';
  return (
    <span className="avatar" style={{ background: color, width: size, height: size, fontSize }}>
      {initials}
    </span>
  );
}

function Waves() {
  return (
    <svg className="waves" viewBox="0 0 1440 600" preserveAspectRatio="none">
      {/* 1 — farthest, subtle haze */}
      <path d="M0,410 C80,395 150,340 220,318 C280,300 340,365 430,398 C500,418 570,348 660,322 C740,302 810,362 900,395 C970,415 1050,350 1140,328 C1210,312 1280,365 1370,392 C1420,405 1438,388 1440,382 L1440,600 L0,600Z" fill="#253C56"/>

      {/* 2 — offset peaks poke above ridge 3 */}
      <path d="M0,448 C60,435 120,378 185,355 C235,338 300,400 380,440 C435,462 500,382 575,358 C635,340 700,398 785,438 C850,460 925,385 1005,362 C1070,345 1140,400 1225,438 C1295,458 1360,390 1440,370 L1440,600 L0,600Z" fill="#213551"/>

      {/* 3 — mid layer */}
      <path d="M0,478 C75,468 160,420 260,402 C340,388 410,435 510,468 C590,488 680,428 770,408 C850,392 920,432 1020,462 C1100,480 1185,428 1280,410 C1355,398 1410,435 1440,445 L1440,600 L0,600Z" fill="#1C2E4A"/>

      {/* 4 — near, darker */}
      <path d="M0,508 C95,498 205,465 330,452 C425,442 510,475 620,498 C710,512 815,472 930,458 C1030,448 1115,478 1230,498 C1325,512 1390,480 1440,472 L1440,600 L0,600Z" fill="#172744"/>

      {/* 5 — closest, barely visible */}
      <path d="M0,555 C170,548 370,535 570,530 C770,526 940,542 1120,546 C1300,548 1400,538 1440,540 L1440,600 L0,600Z" fill="#152340"/>
    </svg>
  );
}

/* Light app behind the journey overlay (deck of cards) */
function AppBehind() {
  const cards = [
    { col: "Must Have", items: [
      { state: "ms-assigned", body: "Stone Axe recipe needs balancing", e: 2, p: "⌃⌃", emoji: "🐞" },
      { state: "ms-started", body: "Flint & Steel ignition VFX", e: 3, p: "⌃", emoji: "✨" },
      { state: "ms-snoozing", body: "Recipe discovery progression", e: 5, p: "⌃⌃⌃", emoji: "📐" },
    ]},
    { col: "Could Have", items: [
      { state: "ms-review", body: "Anvil tier 2 unlock requirements", e: 2, p: "⌃", emoji: "🔧" },
      { state: "ms-blocked", body: "Iron Shield art needs review", e: 3, p: "⌃⌃", emoji: "🛡️" },
    ]},
    { col: "Done", items: [
      { state: "ms-done", body: "Wooden Pickaxe recipe", e: 1, p: "⌃", emoji: "✅" },
      { state: "ms-done", body: "Cooking Pot model", e: 2, p: "⌃⌃", emoji: "✅" },
    ]},
    { col: "Backlog", items: [
      { state: "ms-unassigned", body: "Recipe sharing between players", e: "—", p: "—", emoji: "💡" },
    ]},
  ];
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="3" width="13" height="17" rx="2" fill="#fff" opacity=".95"/>
            <rect x="7" y="6" width="13" height="17" rx="2" fill="#fff" opacity=".7"/>
            <rect x="10" y="9" width="11" height="14" rx="2" fill="#fff"/>
          </svg>
        </div>
        <div className="nav-icon active">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="14" height="16" rx="2"/><rect x="7" y="6" width="14" height="14" rx="2"/></svg>
        </div>
        <div className="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17l8 4 8-4M4 12l8 4 8-4M4 7l8 4 8-4-8-4-8 4z"/></svg>
        </div>
        <div className="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
        </div>
        <div className="nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></svg>
        </div>
        <div className="spacer"/>
        <div className="me">DS</div>
      </aside>
      <main className="app-deck">
        <div className="app-topbar">
          <div className="breadcrumb">
            <span>Dewdrop Studios</span>
            <span className="sep">›</span>
            <span>Quill</span>
            <span className="sep">›</span>
            <b>Crafting Recipes</b>
          </div>
          <div className="right">
            <div className="search-tiny">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
              Search…
            </div>
          </div>
        </div>
        <div className="app-cards">
          {cards.map(col => (
            <div className="deck-col" key={col.col}>
              <div className="deck-col-head">{col.col}</div>
              {col.items.map((it, i) => (
                <div className={`mini-card ${it.state}`} key={i}>
                  <div className="body"><span className="emoji">{it.emoji}</span>{it.body}</div>
                  <div className="footer"><span>⚙ {it.e}</span><span>{it.p}</span></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* Breadcrumb item */
function Crumb({ label, onClick, active }) {
  if (active || !onClick) {
    return <span className={"jcrumb" + (active ? ' active' : '')}>{label}</span>;
  }
  return <button className="jcrumb link" onClick={onClick}>{label}</button>;
}

/* The journey editor itself — the dark frame with steps.
   When `view='browse'` or `view='preview'` the body is replaced and the
   header switches to breadcrumbs. */
function JourneyEditor({ onOpenSave, onOpenBrowse, onClose, dim, saveOpen, view = 'editor', breadcrumbs, headActions, savePanel, editorZones, highlightZone, children }) {
  const isAlt = view === 'browse' || view === 'preview';
  return (
    <div className="journey-frame">
      <div className="journey">
        <Waves/>
        <header className="journey-head" style={dim ? { filter: 'blur(2px) saturate(.5)', opacity: .35, transition: 'filter .25s ease, opacity .25s ease' } : { transition: 'filter .25s ease, opacity .25s ease' }}>
          {!isAlt && (
            <div className="title">
              <span>Prepare Journey for</span>
              <span className="pill"><span className="dot"></span>Crafting Recipes</span>
              <span className="info-i"><Icon.Info/></span>
            </div>
          )}
          {isAlt && (
            <nav className="jcrumbs" aria-label="Breadcrumb">
              {breadcrumbs && breadcrumbs.map((c, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="jcrumb-sep">›</span>}
                  <Crumb {...c}/>
                </React.Fragment>
              ))}
            </nav>
          )}
          <div className="head-actions">
            {headActions ? headActions : (
              <>
                <button className="btn sm btn-purple" onClick={onOpenSave}>
                  <Icon.Bookmark/>Save as Template
                </button>
                <button className="btn sm btn-ghost" onClick={onOpenBrowse}>
                  <Icon.Grid/>Browse Templates
                </button>
                <button className="clone-dropdown">
                  Clone Journey<Icon.Down/>
                </button>
              </>
            )}
            <button className="icon-btn" onClick={onClose}><Icon.X size={18}/></button>
          </div>
        </header>
        {isAlt && (
          <div className="journey-alt-body">
            {children}
          </div>
        )}
        {!isAlt && (
          <JourneyDefaultBody dim={dim} zones={editorZones} highlightZone={highlightZone}/>
        )}
        {savePanel}
      </div>
    </div>
  );
}

/* Default editor body, factored out so JourneyEditor can swap it. */
function JourneyDefaultBody({ dim, zones = [], highlightZone = -1 }) {
  return (
    <div className="journey-body" style={{ filter: dim ? "blur(2px) saturate(.5)" : "none", opacity: dim ? .35 : 1, transition: 'filter .25s ease, opacity .25s ease' }}>
          <div className="start-col">
            <div className="col-label">Start</div>
            <div className="start-card">
              <div className="body">
                <b>Template card</b>
                <div style={{ opacity: .6, marginTop: 6, fontSize: '.68rem' }}>
                  The hero card spawned for each new run of this journey.
                </div>
              </div>
              <div className="footer"><span>⚙ -</span><span>—</span></div>
            </div>
          </div>

          <div className="steps-area">
            {zones.map((zone, zi) => {
              const hl = zi === highlightZone;
              return (
                <div className="step-zone" key={zi}>
                  <div className="zone-head"><span className="warn">⚠</span><span>{zone.name}</span></div>
                  <div className="step-row">
                    {zone.steps.map((s, i) => (
                      <div className={"step-card" + (hl ? " step-highlight" : "")}
                        key={i} style={hl ? { animationDelay: i * 80 + 'ms' } : undefined}>
                        <div className="body">{s.label}</div>
                        <div className="footer">
                          <span>⚙ {s.e}</span>
                          <span>{'⌃'.repeat(s.p)}</span>
                        </div>
                      </div>
                    ))}
                    <div className="add-step">
                      <div className="plus">＋</div>
                      Add Step
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="add-zone">＋ Add Step Zone</div>
          </div>
        </div>
  );
}

window.Icon = Icon;
window.Avatar = Avatar;
window.Waves = Waves;
window.AppBehind = AppBehind;
window.JourneyEditor = JourneyEditor;
