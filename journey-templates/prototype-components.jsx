/* prototype-components.jsx
   SavePanel · BrowsePanel · PreviewPanel
   Purpose-built for the Journey Template prototype. */

const { useState: useStatePC, useMemo: useMemoPC } = React;

const CURATED_CATEGORIES = [
  "Game Dev", "Production", "Pipeline", "Art", "Audio",
  "Engineering", "Narrative", "VFX", "QA", "Marketing",
  "Localization", "Live Ops", "Crafting", "Survival",
];

const UPDATE_RANK = {};
["2 days ago", "3 days ago", "4 days ago", "6 days ago", "a week ago",
 "2 weeks ago", "3 weeks ago", "a month ago"].forEach((s, i) => { UPDATE_RANK[s] = i; });

function miniCards(steps) {
  const map = { purple: 'pp', green: 'gg', blue: 'bb', red: 'rr', yellow: 'dd' };
  return (
    <>
      <span className="mc-row">
        {steps.slice(0, 7).map((s, i) => (
          <span key={i} className={"mc " + (map[s.color] || 'pp')}>
            <span className="mc-label">{s.label}</span>
          </span>
        ))}
      </span>
      <span className="mc-fade"/>
      <span className="mc-count">
        <span className="mc-count-num">{steps.length}</span>
        <span className="mc-count-foot"/>
      </span>
    </>
  );
}


/* ════════════════════════════════════════════════════════════════
   SAVE PANEL
   Right sidebar — name, description, categories, published by,
   review notice.
   ════════════════════════════════════════════════════════════════ */

function SavePanel({ onClose, onPublish }) {
  const [name, setName] = useStatePC("");
  const [desc, setDesc] = useStatePC("");
  const [selectedCats, setSelectedCats] = useStatePC([]);
  const [customCats, setCustomCats] = useStatePC([]);
  const [catDraft, setCatDraft] = useStatePC("");
  const [publishedBy, setPublishedBy] = useStatePC("");

  const toggleCat = (cat) => {
    const isCustom = customCats.includes(cat);
    const wasSelected = selectedCats.includes(cat);
    if (wasSelected && isCustom) {
      setCustomCats(prev => prev.filter(c => c !== cat));
      setSelectedCats(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCats(prev =>
        prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
      );
    }
  };

  const addCustomCat = () => {
    const t = catDraft.trim();
    if (!t) return;
    if (!CURATED_CATEGORIES.includes(t) && !customCats.includes(t)) {
      setCustomCats(prev => [...prev, t]);
    }
    if (!selectedCats.includes(t)) {
      setSelectedCats(prev => [...prev, t]);
    }
    setCatDraft("");
  };

  const chipFor = (cat) => {
    const on = selectedCats.includes(cat);
    return (
      <span key={cat}
        className={"chip " + (on ? "active" : "tag-suggest")}
        onClick={() => toggleCat(cat)}
        style={{ cursor: 'pointer' }}>
        <span className="chip-icon">{on ? '×' : '+'}</span>
        {cat}
      </span>
    );
  };

  return (
    <>
      <div className="ss-head">
        <span className="title"><Icon.Bookmark/> Save as Template</span>
        <button className="icon-btn" onClick={onClose}><Icon.X size={18}/></button>
      </div>
      <div className="ss-body">
        <div>
          <h2>Share your journey</h2>
          <p className="lead">
            Share your journey structure with the community. Card content stays
            private — only the steps and zones are included.
          </p>
        </div>

        {/* Name */}
        <div className="field">
          <label className="field-label">Template Name</label>
          <input className="field-input" value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Give your template a name…"/>
        </div>

        {/* Description */}
        <div className="field">
          <label className="field-label">Description</label>
          <textarea className="field-input" value={desc}
            onChange={e => setDesc(e.target.value)}
            placeholder="When should someone use this journey? What makes it useful?"/>
          <span className="field-help">
            1–3 sentences to help others decide if this fits their workflow.
          </span>
        </div>

        {/* Categories */}
        <div className="field">
          <h3 className="ss-section-head">
            Categories{selectedCats.length > 0 && ` · ${selectedCats.length}`}
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
            {CURATED_CATEGORIES.map(cat => chipFor(cat))}
          </div>

          <div className="field">
            <label className="field-label">Suggest category</label>
            <div style={{ display: 'flex', gap: 6 }}>
              <input className="field-input" value={catDraft}
                onChange={e => setCatDraft(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') { e.preventDefault(); addCustomCat(); }
                }}
                placeholder="Suggest a new category…"
                style={{ flex: 1, fontSize: '.82rem', padding: '6px 10px' }}/>
              {catDraft.trim() && (
                <button className="btn sm btn-ghost" onClick={addCustomCat}>Add</button>
              )}
            </div>
            {customCats.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 2 }}>
                {customCats.map(cat => chipFor(cat))}
              </div>
            )}
          </div>
        </div>

        {/* Published By */}
        <div className="field">
          <label className="field-label">Published By</label>
          <input className="field-input" value={publishedBy}
            onChange={e => setPublishedBy(e.target.value)}
            placeholder="Studio or personal name…"/>
          <span className="field-help">Leave empty to publish anonymously.</span>
        </div>

        {/* Review notice */}
        <div style={{
          marginTop: 16, padding: 12, borderRadius: 6,
          background: 'var(--dim-purple-900)',
          border: '1px solid var(--purple-650)',
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <span style={{ flexShrink: 0, marginTop: 1 }}><Icon.Info/></span>
          <div>
            <div style={{
              color: '#fff', fontWeight: 700, fontSize: '.82rem', marginBottom: 2,
            }}>
              Template infos
            </div>
            <div style={{
              color: 'var(--purple-200)', fontSize: '.75rem', lineHeight: '1.1rem',
            }}>
              All templates are reviewed by the Codecks team before they appear
              in the community browser.
              Owner information won't be part of the template.
            </div>
          </div>
        </div>
      </div>

      <div className="ss-foot">
        <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
        <div style={{ flex: 1 }}/>
        <button className="btn btn-purple" onClick={onPublish}>
          <Icon.Bookmark/> Submit for Review
        </button>
      </div>
    </>
  );
}


/* ════════════════════════════════════════════════════════════════
   BROWSE PANEL
   Category sidebar · search · sort (Staff Picks / Recently
   Updated / Popular — no clone counts shown).
   ════════════════════════════════════════════════════════════════ */

function BrowseCard({ t, onOpen }) {
  return (
    <div className="tpl-card" onClick={() => onOpen(t)}>
      {t.staffPick && <span className="fav-badge">Staff Pick</span>}
      <div className="preview">
        <div className="pwave"/>
        {miniCards(t.steps)}
      </div>
      <div className="tpl-card-body">
        <div className="name">{t.name}</div>
        <div className="desc">{t.desc}</div>
        <div className="tpl-tag-row">
          {t.tags.map(tg => <span className="tpl-tag" key={tg}>{tg}</span>)}
        </div>
        <div className="tpl-meta">
          {t.author ? (
            <span className="author">
              <Avatar name={t.author} color={t.authorColor}/>
              <span className="name">{t.author}</span>
            </span>
          ) : (
            <span style={{ color: 'var(--journey-text-dim)', fontSize: '.72rem' }}>
              Anonymous
            </span>
          )}
          <span className="tpl-stats">
            <span><Icon.Calendar/> {t.updated}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function BrowsePanel({ embedded, onClose, onOpenTemplate }) {
  const [activeCategory, setActiveCategory] = useStatePC(null);
  const [query, setQuery] = useStatePC('');
  const [sort, setSort] = useStatePC('staff');

  const catCounts = useMemoPC(() => {
    const c = {};
    TEMPLATES.forEach(t => t.tags.forEach(tag => { c[tag] = (c[tag] || 0) + 1; }));
    return c;
  }, []);

  const list = useMemoPC(() => {
    let items = TEMPLATES.slice();
    if (activeCategory) items = items.filter(t => t.tags.includes(activeCategory));
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(t =>
        t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
    }
    if (sort === 'staff')
      items.sort((a, b) => (b.staffPick ? 1 : 0) - (a.staffPick ? 1 : 0) || b.clones - a.clones);
    else if (sort === 'updated')
      items.sort((a, b) => (UPDATE_RANK[a.updated] ?? 99) - (UPDATE_RANK[b.updated] ?? 99));
    else
      items.sort((a, b) => b.clones - a.clones);
    return items;
  }, [activeCategory, query, sort]);

  const sorts = [
    { k: 'staff',   label: 'Staff Picks' },
    { k: 'updated', label: 'Recently Updated' },
    { k: 'popular', label: 'Popular' },
  ];

  const inner = (
    <div className="br-body">
      {/* Category sidebar */}
      <aside className="br-side">
        <div>
          <div className="filter-h">Categories</div>
          <div className="tag-list">
            <div className={"tag-item" + (!activeCategory ? ' active' : '')}
              onClick={() => setActiveCategory(null)}>
              <span>All</span>
              <span className="count">{TEMPLATES.length}</span>
            </div>
            {CURATED_CATEGORIES.filter(c => catCounts[c]).map(cat => (
              <div key={cat}
                className={"tag-item" + (activeCategory === cat ? ' active' : '')}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}>
                <span>{cat}</span>
                <span className="count">{catCounts[cat]}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="br-main">
        <div className="br-toolbar">
          <div className="search">
            <Icon.Search/>
            <input value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search templates…"/>
          </div>
          <span style={{ color: 'var(--journey-text-dim)', fontSize: '.78rem' }}>
            {list.length} template{list.length !== 1 ? 's' : ''}
          </span>
          <div className="sort-control">
            Sort
            <div className="seg">
              {sorts.map(s => (
                <button key={s.k} className={sort === s.k ? 'on' : ''}
                  onClick={() => setSort(s.k)}>{s.label}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="br-grid">
          {list.map(t => <BrowseCard key={t.id} t={t} onOpen={onOpenTemplate}/>)}
          {list.length === 0 && (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px',
              color: 'var(--journey-text-dim)',
            }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>
                No templates found
              </div>
              <div style={{ fontSize: '.85rem' }}>
                Try adjusting your search or category filter.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="browse">
      <div className="br-head">
        <button className="back" onClick={onClose}><Icon.Back/> Back to Journey</button>
        <h2>Journey Templates</h2>
        <span className="meta">Shared by the Codecks community</span>
      </div>
      {inner}
    </section>
  );
}


/* ════════════════════════════════════════════════════════════════
   PREVIEW PANEL
   Journey-editor-style step layout (no template card). Clickable
   steps open a detail modal. Apply section adapts to whether the
   current journey already has steps.
   ════════════════════════════════════════════════════════════════ */

function StepDetailPanel({ step }) {
  if (!step) return null;
  return (
    <div className="step-detail-panel">
      <div className="sdp-body">
        <h3>{step.label}</h3>
        <p>
          Step description and details would appear here. Assignees, checklists,
          and attached content are shown in the full card view.
        </p>
      </div>
      <div className="sdp-footer">
        <span>⚙ {step.e}</span>
        <span>{'⌃'.repeat(step.p)}</span>
      </div>
    </div>
  );
}

function PreviewPanel({ embedded, t, onClose, onApply, journeyHasSteps = true }) {
  const [selectedStep, setSelectedStep] = useStatePC(null);
  if (!t) return null;

  const inner = (
    <>
      {/* Header */}
      <div className="tpl-detail-head">
        <div className="info">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {t.name}
            {t.staffPick && <span className="fav-badge" style={{ position: 'static' }}>Staff Pick</span>}
          </h3>
          <p className="desc">{t.desc}</p>
          <div className="tpl-meta-row">
            {t.author ? (
              <div className="author">
                <Avatar name={t.author} color={t.authorColor} size={20}/>
                {t.author}
              </div>
            ) : (
              <div style={{ color: 'var(--journey-text-dim)', fontSize: '.8rem' }}>
                Anonymous
              </div>
            )}
            <span className="stat"><Icon.Calendar/> Updated {t.updated}</span>
            <div className="tpl-tag-row">
              {t.tags.map(tg => <span className="tpl-tag" key={tg}>{tg}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Step layout + detail side panel */}
      <div className="tpl-detail-body">
        <div className="tpl-detail-content">
          {selectedStep && <StepDetailPanel step={selectedStep}/>}

          <div className="tpl-detail-steps">
            <div className="steps-area" style={{ paddingTop: 0 }}>
              <div className="step-zone">
                <div className="zone-head">
                  <span>Default Steps</span>
                  <span style={{
                    color: 'var(--journey-text-dim)', fontWeight: 400,
                    fontSize: '.8rem', marginLeft: 4,
                  }}>
                    · {t.steps.length}
                  </span>
                </div>
                <div className="step-row">
                  {t.steps.map((s, i) => (
                    <div className={"step-card" + (selectedStep === s ? " step-selected" : "")}
                      key={i}
                      onClick={() => setSelectedStep(selectedStep === s ? null : s)}>
                      <div className="body">{s.label}</div>
                      <div className="footer">
                        <span>⚙ {s.e}</span>
                        <span>{'⌃'.repeat(s.p)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply section */}
            {journeyHasSteps ? (
              <div className="apply-banner">
                <div className="apply-banner-h">
                  <b>Apply this template</b>
                  <span className="meta">
                    Card content stays where it is — only the journey structure changes.
                  </span>
                </div>
                <div className="apply-options">
                  <button className="apply-card replace"
                    onClick={() => onApply && onApply(t, 'replace')}>
                    <div className="apply-card-h">Replace your existing Journey steps</div>
                    <div className="apply-card-d">
                      Swap your current journey structure for this template's{' '}
                      {t.steps.length} steps. Your existing steps will be removed.
                    </div>
                    <div className="apply-card-foot">
                      <button className="btn btn-danger">Replace</button>
                    </div>
                  </button>
                  <button className="apply-card append"
                    onClick={() => onApply && onApply(t, 'append')}>
                    <div className="apply-card-h">Append to your existing Journey steps</div>
                    <div className="apply-card-d">
                      Add this template's {t.steps.length} steps after your
                      existing journey. The steps will be added in a new zone. Nothing is removed.
                    </div>
                    <div className="apply-card-foot">
                      <button className="btn btn-purple">Append</button>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div style={{
                marginTop: 18, padding: 18,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    color: '#fff', fontWeight: 700, fontSize: '.95rem', marginBottom: 4,
                    fontFamily: 'var(--font-ebony)',
                  }}>
                    Use this template
                  </div>
                  <div style={{ color: 'var(--journey-text-dim)', fontSize: '.82rem' }}>
                    Add {t.steps.length} steps to your empty journey.
                  </div>
                </div>
                <button className="btn btn-purple"
                  onClick={() => onApply && onApply(t, 'add')}>
                  <Icon.Plus/> Add to Journey
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  if (embedded) return inner;
  return (
    <div className="tpl-detail">
      <div className="tpl-detail-inner">
        <Waves/>
        {inner}
      </div>
    </div>
  );
}


/* ── Register ── */
window.SavePanel = SavePanel;
window.BrowsePanel = BrowsePanel;
window.PreviewPanel = PreviewPanel;
