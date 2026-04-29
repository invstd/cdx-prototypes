// Shared data for Journey Templates feature

const ALL_TAGS = [
  { name: "Game Dev", count: 64 },
  { name: "Production", count: 38 },
  { name: "Pipeline", count: 27 },
  { name: "Art", count: 22 },
  { name: "Audio", count: 14 },
  { name: "Engineering", count: 19 },
  { name: "Crafting", count: 9 },
  { name: "Survival", count: 6 },
  { name: "Narrative", count: 11 },
  { name: "VFX", count: 13 },
  { name: "QA", count: 17 },
  { name: "Marketing", count: 8 },
  { name: "Localization", count: 5 },
  { name: "Live Ops", count: 7 },
];

const TEMPLATES = [
  {
    id: 1, name: "New Character Pipeline",
    desc: "A complete 7-step pipeline for adding a new playable character: concept art → modeling → rigging → animation → VFX → audio → integration.",
    author: "Megagon Industries", authorColor: "#704D9E",
    clones: 1248, updated: "3 days ago", staffPick: true,
    tags: ["Game Dev", "Art", "Pipeline"],
    steps: [
      { label: "Concept Art", e: 5, p: 3, color: "purple" },
      { label: "Base Mesh & Sculpt", e: 8, p: 3, color: "purple" },
      { label: "Retopo & UVs", e: 5, p: 2, color: "purple" },
      { label: "Texture & Material", e: 5, p: 2, color: "purple" },
      { label: "Rigging", e: 8, p: 3, color: "blue" },
      { label: "Animation Set", e: 13, p: 3, color: "blue" },
      { label: "In-Engine Hookup", e: 3, p: 2, color: "green" },
    ]
  },
  {
    id: 2, name: "Bug Triage & Fix",
    desc: "Used by our QA team to take a bug report from intake to verified fix. Lightweight 4-step process.",
    author: "Snoozy Kazoo", authorColor: "#34B491",
    clones: 980, updated: "a week ago", staffPick: false,
    tags: ["QA", "Production"],
    steps: [
      { label: "Reproduce & Triage", e: 1, p: 2, color: "yellow" },
      { label: "Assign & Estimate", e: 1, p: 1, color: "purple" },
      { label: "Fix & PR", e: 3, p: 2, color: "blue" },
      { label: "Verify & Close", e: 1, p: 1, color: "green" },
    ]
  },
  {
    id: 3, name: "Quest Authoring Flow",
    desc: "Take a quest idea from one-line pitch to fully scripted, voiced, and tested side quest. Includes localization handoff.",
    author: "Pixelsplit Games", authorColor: "#D2143A",
    clones: 854, updated: "2 weeks ago", staffPick: true,
    tags: ["Game Dev", "Narrative", "Localization"],
    steps: [
      { label: "Quest Pitch", e: 1, p: 1, color: "yellow" },
      { label: "Outline Beats", e: 2, p: 2, color: "yellow" },
      { label: "Branch Logic", e: 5, p: 3, color: "purple" },
      { label: "VO Script", e: 3, p: 2, color: "blue" },
      { label: "Block Out & Record", e: 5, p: 2, color: "blue" },
      { label: "Loc Handoff", e: 2, p: 1, color: "green" },
    ]
  },
  {
    id: 4, name: "Marketing Beat Plan",
    desc: "6-week pre-launch marketing cadence covering trailers, press kits, influencer outreach, and Steam page optimization.",
    author: "Codecks", authorColor: "#704D9E",
    clones: 712, updated: "a month ago", staffPick: false,
    tags: ["Marketing", "Production"],
    steps: [
      { label: "Press Kit Ready", e: 3, p: 3, color: "purple" },
      { label: "Trailer Cut #1", e: 5, p: 3, color: "blue" },
      { label: "Steam Page Live", e: 2, p: 3, color: "green" },
      { label: "Influencer Build List", e: 2, p: 2, color: "yellow" },
      { label: "Send Review Codes", e: 1, p: 2, color: "green" },
    ]
  },
  {
    id: 5, name: "Crafting Recipe Pipeline",
    desc: "A 5-step pipeline for adding new craftable items: recipe definition → art → engineering → balancing → SFX. Battle-tested on 40+ recipes.",
    author: "Dewdrop Studios", authorColor: "#3E69B6",
    clones: 622, updated: "4 days ago", staffPick: false,
    tags: ["Game Dev", "Crafting", "Survival", "Pipeline"],
    steps: [
      { label: "Add Crafting Recipe", e: 2, p: 2, color: "purple" },
      { label: "Create Item Icon & Model", e: 3, p: 3, color: "purple" },
      { label: "Implement Item Functionality", e: 5, p: 3, color: "blue" },
      { label: "Balance Recipe Cost", e: 2, p: 2, color: "yellow" },
      { label: "Design Item SFX", e: 2, p: 2, color: "green" },
    ]
  },
  {
    id: 6, name: "VFX Spell Authoring",
    desc: "From design brief to in-engine implementation of a new spell or ability VFX. Includes timing and audio sync passes.",
    author: "Witch Beam", authorColor: "#8D2383",
    clones: 488, updated: "3 weeks ago", staffPick: false,
    tags: ["VFX", "Audio", "Art"],
    steps: [
      { label: "Mood Board", e: 1, p: 1, color: "yellow" },
      { label: "Cast Anim Block", e: 3, p: 2, color: "blue" },
      { label: "Particle Pass", e: 5, p: 3, color: "purple" },
      { label: "Audio Pass", e: 2, p: 2, color: "green" },
      { label: "Polish & Variations", e: 3, p: 2, color: "purple" },
    ]
  },
  {
    id: 7, name: "Live Ops Weekly Drop",
    desc: "Recurring journey for our weekly content drop: balance changes, bug fixes, new cosmetics, and community comms.",
    author: "Codecks", authorColor: "#704D9E",
    clones: 412, updated: "6 days ago", staffPick: true,
    tags: ["Live Ops", "Production"],
    steps: [
      { label: "Compile Patch Notes", e: 1, p: 2, color: "yellow" },
      { label: "QA Smoke Pass", e: 2, p: 3, color: "red" },
      { label: "Push to Stage", e: 1, p: 3, color: "blue" },
      { label: "Push to Live", e: 1, p: 3, color: "green" },
      { label: "Community Post", e: 1, p: 2, color: "green" },
    ]
  },
  {
    id: 8, name: "Sound Design Sprint",
    desc: "Source, layer, and integrate audio for an in-game prop, weapon, or environment. Battle-tested for 30+ assets.",
    author: "Maschinen-Mensch", authorColor: "#17866A",
    clones: 358, updated: "2 weeks ago", staffPick: false,
    tags: ["Audio", "Pipeline"],
    steps: [
      { label: "Reference Pull", e: 1, p: 1, color: "yellow" },
      { label: "Source / Record", e: 3, p: 2, color: "purple" },
      { label: "Edit & Layer", e: 3, p: 2, color: "blue" },
      { label: "Engine Integration", e: 2, p: 2, color: "green" },
      { label: "Test in Context", e: 1, p: 2, color: "green" },
    ]
  },
  {
    id: 9, name: "Onboarding Tutorial Beat",
    desc: "Each tutorial step we add follows this 4-step process: design → script → block-out → polish. Keeps onboarding shipping monthly.",
    author: "Indie Co-op", authorColor: "#C49652",
    clones: 287, updated: "a month ago", staffPick: false,
    tags: ["Game Dev", "Production"],
    steps: [
      { label: "Beat Design", e: 2, p: 2, color: "yellow" },
      { label: "Script Lines", e: 1, p: 1, color: "purple" },
      { label: "Block Out", e: 3, p: 2, color: "blue" },
      { label: "Polish Pass", e: 2, p: 2, color: "green" },
    ]
  },
  {
    id: 10, name: "Boss Encounter Build",
    desc: "From paper design to shippable boss fight: arena, attacks, phases, telegraphs, audio, and tuning. 9 steps.",
    author: "Bittensea Studio", authorColor: "#A06430",
    clones: 263, updated: "2 days ago", staffPick: false,
    tags: ["Game Dev", "Engineering", "VFX", "Audio"],
    steps: [
      { label: "Boss Pitch", e: 2, p: 3, color: "yellow" },
      { label: "Arena Layout", e: 5, p: 3, color: "purple" },
      { label: "Phase 1 Attacks", e: 8, p: 3, color: "blue" },
      { label: "Phase 2 Attacks", e: 8, p: 3, color: "blue" },
      { label: "Telegraphs / VFX", e: 5, p: 2, color: "purple" },
      { label: "Audio Pass", e: 3, p: 2, color: "green" },
      { label: "Difficulty Tuning", e: 3, p: 2, color: "red" },
      { label: "Cinematic Hook", e: 5, p: 2, color: "purple" },
      { label: "QA Pass", e: 3, p: 2, color: "green" },
    ]
  },
  {
    id: 11, name: "Localization Cycle",
    desc: "Lock strings, hand off to translators, integrate, QA each language. We run this monthly across 8 locales.",
    author: "Codecks", authorColor: "#704D9E",
    clones: 192, updated: "3 weeks ago", staffPick: false,
    tags: ["Localization", "Production"],
    steps: [
      { label: "String Freeze", e: 1, p: 3, color: "yellow" },
      { label: "Export & Send", e: 1, p: 2, color: "purple" },
      { label: "Receive & Integrate", e: 2, p: 2, color: "blue" },
      { label: "In-Game LQA", e: 3, p: 2, color: "green" },
    ]
  },
  {
    id: 12, name: "Playtest Loop",
    desc: "Recruit testers, run the session, collect notes, prioritize fixes. Run weekly during preproduction.",
    author: "Snoozy Kazoo", authorColor: "#34B491",
    clones: 174, updated: "a week ago", staffPick: false,
    tags: ["Production", "QA"],
    steps: [
      { label: "Recruit Testers", e: 1, p: 2, color: "yellow" },
      { label: "Build & Distribute", e: 2, p: 2, color: "purple" },
      { label: "Run Session", e: 3, p: 3, color: "blue" },
      { label: "Synthesize Notes", e: 2, p: 2, color: "green" },
    ]
  }
];

const COLOR_MAP = {
  purple: "#704D9E",
  blue:   "#3E69B6",
  green:  "#41C357",
  yellow: "#C49652",
  red:    "#D2143A",
};

window.ALL_TAGS = ALL_TAGS;
window.TEMPLATES = TEMPLATES;
window.COLOR_MAP = COLOR_MAP;
