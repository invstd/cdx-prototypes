# Journey Templates Prototype — Changelog

Detailed record of all changes made during the April 29, 2026 working session.

---

## 1. Save-as-Template Drawer

### Drawer containment & animation
- **Before:** The save panel appeared as a floating overlay on top of the modal.
- **After:** The drawer is now contained *within* the journey modal. It slides in from the right edge using a CSS transition (`transform: translateX(100%)` ↔ `translateX(0)`).
- The `.save-sidebar` is `position: absolute` inside `.journey` with `z-index: 50`.
- A `.save-backdrop` (z-index 49) dims and blurs the rest of the modal content when the drawer is open. Clicking the backdrop closes the drawer.
- The backdrop uses `pointer-events: none` when closed and `pointer-events: auto` when open to avoid intercepting clicks.

### Input field styling overhaul
- **Before:** Fields used purple-tinted colors.
- **After:** Switched to a neutral grey palette:
  - Background: `--gray-900`
  - Border: `--gray-550`
  - Placeholder text: `--gray-400`
  - On focus: background darkens to `--gray-950`, border becomes `#64A0FF` (light blue) with a translucent blue outline.
- Helper text (`.field-help`) and labels (`.field-label`) use `--gray-300`.

### Category chips
- **Before:** Chips changed size on selection.
- **After:** Chips have a fixed layout with a `.chip-icon` span for the `+`/`×` prefix. The icon switches but dimensions stay the same.
  - Selected (`.chip.active`): `--active-700` background, `--active-50` text, `--active-500` border (teal/green).
  - Unselected (`.chip.tag-suggest`): `--purple-900` background, `--purple-650` border, `--purple-150` text.
  - Chip padding: `4px` left (icon side), `8px` right.
- The categories section uses an `h3.ss-section-head` heading instead of a `<label>`.
- The "Suggest category" input has its own label and sits below the curated pills.
- Custom/suggested categories appear below the suggest field and can be deselected (which removes them).

### Info box
- Title changed to **"Template infos"**.
- Subtext uses a light purple tone.
- Added note: "Owner information won't be part of the template."
- Background uses purple color tokens.

### Footer layout
- Cancel button moved to the left.
- Spacer pushes the purple Submit button to the right.

---

## 2. Browse Panel

### Card preview images — complete redesign
- **Before:** The preview area showed tiny abstract colored rectangles (16×22px) as placeholders.
- **After:** Preview now renders actual miniature step cards (70×92px) with visible text labels and a purple footer, resembling the real step cards in the journey editor.

#### Card layout
- Cards are positioned in an `.mc-row` container (`position: absolute; left: 16px; top: 16px; bottom: -20px`) so they overflow and get cut off at the bottom — only the top portion of each card is visible.
- Cards use a fixed width (`70px`) and do not squeeze to fit — they naturally overflow to the right.
- Card body: `linear-gradient(180deg, #E8E4E0, #D5D0CC)` with `.mc-label` text at `.68rem` bold.
- Card footer: uniform `--purple-500` for all cards (no per-color variation in browse view).

#### Progressive opacity
- 1st card: 100% opacity
- 2nd card: 76% opacity
- 3rd card: 64% opacity
- 4th+ cards: 52% opacity

#### Right-side fade
- A `.mc-fade` overlay covers 45% of the preview width from the right edge.
- Gradient: `transparent 0%` → `var(--purple-950) 70%` — aggressive fade that starts early.

#### Step count badge
- Small card-shaped badge (18×24px) in the bottom-right corner of the preview.
- White body with the step count number in `--purple-500`, using `var(--font-ebony)` at `.66rem` / weight 900.
- 5px purple footer matching the card footer style.
- `z-index: 4` so it sits above the fade gradient.

#### Background
- Dark purple gradient: `linear-gradient(135deg, var(--purple-800), var(--purple-950))`.
- Top vignette: `linear-gradient(180deg, rgba(20,18,34,0.55) 0%, transparent 40%)`.
- Subtle purple radial gradient at bottom-right.
- Removed the greenish radial gradient that was originally at bottom-left.

#### Preview container sizing
- **Before:** Fixed `height: 80px` → later `110px`.
- **After:** Uses `aspect-ratio: 3.2` with `flex: none` so the preview scales proportionally with card width and never compresses.

### Staff Pick badge
- Removed the icon from the badge — text only.
- Uses a blue theme: `rgba(30, 60, 100, 0.85)` background, white text, `rgba(100, 160, 255, 0.3)` border.
- Height: `18px`, compact pill design.
- `z-index: 5` — raised above the card fade gradient so it's never obscured.

### Category tag pills (on cards)
- Switched from colored to grey palette: `--gray-800` background, `--gray-650` border, `--gray-200` text.
- Slightly increased gaps (2px) and bottom padding (4px).

### Card body padding
- **Before:** `14px 12px 16px`.
- **After:** `16px 16px 18px`.

### Grid layout
- `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))` — cards fill the full modal width.
- Added `grid-auto-rows: min-content` to prevent row compression when many cards are shown. The grid now scrolls vertically instead of squeezing cards.

### Custom scrollbar
- `scrollbar-width: thin` with `scrollbar-color: rgba(255,255,255,0.12) transparent`.
- WebKit: 6px wide thumb, `rgba(255,255,255,0.12)` default, `rgba(255,255,255,0.2)` on hover, transparent track.

### Category sidebar — selected state
- Active tag uses `--active-600` background (emerald/teal green).

### Segment control (sort)
- Active button uses `--active-600` (matching the category selection color).

### Search bar focus
- On focus: background darkens to `--gray-950`, border becomes `--gray-500`.

---

## 3. Template Preview Panel

### Step detail panel (inline)
- **Before:** Clicking a step opened a modal-style detail view.
- **After:** A `StepDetailPanel` card appears inline, side-by-side with the steps.
  - 280px wide, `min-height: 358px`, sticky positioned.
  - Body: `#F4F2F0` background with title and description.
  - Footer: 58px, `--purple-500` background with effort/priority icons.
  - Designed to match the mini step card's aspect ratio.
- Clicking a step toggles a green outline (`.step-selected` with `--active-500` border) and shows/hides the detail panel.

### Staff Pick badge in preview header
- Uses the same small pill as the browse card (not a larger variant).
- `position: static` so it flows inline with the title.

### Step count display
- The step count next to the zone heading uses normal weight (not bold) with a dimmer color.

### Apply section — structural redesign

#### When journey has existing steps (two options):
- **Layout:** `.apply-options` uses `grid-template-columns: 1fr 1fr` — two boxes side by side in a row.
- Each `.apply-card` uses CSS grid internally (`1fr auto` / `auto 1fr`):
  - Left column: title (`.apply-card-h`) + description (`.apply-card-d`) stacked vertically.
  - Right column: button (`.apply-card-foot`) pinned to the bottom-right via `grid-column: 2; grid-row: 1/-1; align-items: flex-end`.
- **Replace box:**
  - Title: "Replace your existing Journey steps"
  - Description: "Swap your current journey structure for this template's N steps. Your existing steps will be removed."
  - Red destructive button (`.btn-danger` with `--alert-500`).
  - Hover: `--alert-400` border.
  - No icons in heading, no pills.
- **Append box:**
  - Title: "Append to your existing Journey steps"
  - Description: "Add this template's N steps after your existing journey. The steps will be added in a new zone. Nothing is removed."
  - Purple button (`.btn-purple`).
  - Hover: `--gray-400` border (light grey, not green).
  - No icons in heading, no pills.

#### When journey is empty (single option):
- Detail box with "Use this template" heading and "Add N steps to your empty journey" description.
- Purple "Add to Journey" button with plus icon.

### Apply functionality
- **Replace:** Replaces all editor zones with the template's steps in a single zone + an empty "Optional Steps" zone.
- **Append:** Adds a new zone (named after the template) below existing zones.
- **Add (empty journey):** Same as replace — sets the template zone + Optional Steps.
- On apply:
  - View returns to the editor.
  - The newly added zone gets a highlight animation (staggered `step-pop-in` + `step-glow` keyframes).
  - A toast notification confirms the action.

---

## 4. Journey Editor (journey-base.jsx)

### Mountain background (Waves)
- Tuned down to 5 layers with subtle amplitude.
- The last layer is very subtle — the whole thing recedes into the background.
- Solid fills, no opacity, colors close to `--journey-bg: #1A2B47`.

### Zone-based data model
- **Before:** Flat `editorSteps` array.
- **After:** `editorZones` array of `{ name, steps }` objects. This supports the append-as-new-zone behavior.

### Step card footer color
- All step card footers in the editor use a uniform `--purple-500` (no per-step color variation).

### Step highlight animation
- `step-pop-in`: scales from 0.85 to 1 with a slight overshoot.
- `step-glow`: brief white box-shadow pulse.
- Animation is staggered per card with `animation-delay` based on index.
- `highlightZone` state tracks which zone to animate, auto-clears after 1800ms.

### Header dimming
- When the save drawer is open, the header dims with blur and reduced opacity.

---

## 5. App State & Navigation (prototype.html)

### State management
- `editorZones` replaces the former `editorSteps`.
- `highlightZone` state (-1 = none) triggers zone highlight animation on apply.
- `DEFAULT_ZONES` moved outside the component to avoid recreation on every render.

### `onApply` handler
- Accepts `(template, mode)` where mode is `'replace'`, `'append'`, or `'add'`.
- Replace: sets zones to `[templateZone, emptyOptionalZone]`.
- Append: spreads existing zones and adds the template as a new named zone.
- Add (empty): same as replace.
- Sets `highlightZone` to the index of the new zone.
- Shows a contextual toast message.

### Demo toggle
- Checkbox toggles `journeyHasSteps`. When off, editor shows a single empty zone to simulate an empty journey.

---

## 6. Files Modified

| File | Changes |
|---|---|
| `prototype.html` | Zone-based state model, onApply handler, DEFAULT_ZONES moved outside component, cache versions bumped to v=48/v=12/v=17 |
| `prototype-components.jsx` | miniCards renders real cards with labels + count badge + fade, append description updated, apply section restructured |
| `journey-base.jsx` | JourneyEditor accepts editorZones/highlightZone, JourneyDefaultBody renders zones with highlight animation, Waves tuned |
| `journey.css` | Save drawer + backdrop, input field grey palette, chip styling, browse card preview overhaul, grid layout fixes, custom scrollbar, step detail panel, apply card grid layout, tag/badge/segment color updates |
| `data.js` | No changes |
| `colors_and_type.css` | No changes |
