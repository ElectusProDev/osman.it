# Implementation notes

## Design source

Supplied Figma file: `9zYsmLo0HSsACluvGgX2MO`, page `0:1`, screen `1:1349` (Homepage / Guest User), original dimensions 1920 × 6235.

The page link identifies the design canvas. This implementation covers its complete guest homepage. The component reference board is not a separate website page.

High-fidelity design context was retrieved for the header, hero, categories, courses, instructors, statistics, about section, promotional banner, testimonials and blog cards. All corresponding assets are local, including the original illustration's 26 SVG layers. The overview screenshot is used for comparison only and is not an implementation asset.

Fonts: Public Sans, Inter, Questrial, Oswald, Exo and Jost. Desktop content width is 1296px, main section spacing is 80px, and the original hero is 700px high. Smaller layouts adapt using CSS grid and media queries.

## Fidelity limits

Figma's Starter-plan MCP limit was reached before detailed footer context could be retrieved. The footer was reconstructed from the overview screenshot, reusing the header logo. Its exact typography, contact copy, social icons and spacing are not independently verified. Some small course metadata icons were absent from the returned context and are approximated with CSS/text. Therefore this implementation is not claimed to be a fully verified pixel-perfect replica.

The template's repeated course titles, sample statistics, student testimonials, typo-like labels and blog dates are intentionally preserved for visual fidelity. They are design sample content, not verified claims about a live school. Mobile layouts are inferred because no mobile frame was retrieved.

## Behavior and service boundaries

Search and filters operate on the six supplied course cards. Categories without matching sample courses show a resettable empty state. Course selection persists only on the current device; unavailable browser storage falls back to memory with a notice. Dialogs use the native `dialog` element for keyboard focus, Escape handling and focus restoration.

No authentication, payment, email, lesson delivery or analytics backend is included. Account forms perform browser validation without storing or sending credentials. Article dialogs show only the supplied excerpt. Full articles were not supplied. Social marks in the footer are static because no actual profile URLs were supplied.

## Validation

Production build and five Playwright end-to-end scenarios cover image loading/runtime errors, search/category/empty states, course persistence, account-form handling, and mobile navigation/page overflow at 320, 390, 768, 1024, 1440 and 1920 pixels. Desktop and mobile screenshots were visually inspected against the available reference.
