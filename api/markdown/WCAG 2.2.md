public:: true

# WCAG 2.2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wcag-2-2",
  "@type": "Page",
  "vc:slug": "wcag-2-2",
  "title": "WCAG 2.2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wcag-2-2",
  "@type": "Class",
  "label": "WCAG 2.2",
  "definition": "WCAG 2.2 is the October 2023 release of the Web Content Accessibility Guidelines published by the W3C Web Accessibility Initiative, introducing nine new success criteria that extend the 2.1 standard with stronger provisions for keyboard navigation, focus appearance, and accessible authentication. It remains structured around four principles — Perceivable, Operable, Understandable, and Robust — with conformance levels A, AA, and AAA. The release removes the Parsing criterion (4.1.1) while tightening requirements for pointer gestures, dragging movements, and redundant input.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:accessibility-standard", "label": "Accessibility Standard"}
  ],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:standards-conformance", "label": "Standards Conformance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:accessibility-audit-tool", "label": "Accessibility Audit Tool"},
      {"@id": "urn:ngm:class:user-interface-standard", "label": "User Interface Standard"},
      {"@id": "urn:ngm:class:accessibility-standards", "label": "Accessibility Standards"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[WCAG 2.2]] is the current normative version of the Web Content Accessibility Guidelines, published by the [[Accessibility Standard]] body W3C in October 2023. It extends the widely adopted WCAG 2.1 by adding nine new success criteria focused on improving experiences for users with cognitive disabilities, low vision, and limited motor ability. Conformance at Level AA — the target for most legal and procurement requirements — now includes Focus Appearance (minimum), Dragging Movements, Target Size (Minimum), Accessible Authentication (Minimum), and Redundant Entry criteria.

- ### Relationships
  - [[WCAG 2.2]] is standardised by the W3C Web Accessibility Initiative, a [[Standards Body]], and builds directly upon the [[Accessibility Standards]] lineage from WCAG 2.0 and 2.1. Compliance with WCAG 2.2 is verified using [[Accessibility Audit Tool]] tooling and manual review, enabling genuine [[Accessibility]] for disabled users across web interfaces. The standard governs the design of [[User Interface Standard]] components and feeds into broader [[Standards Conformance]] programmes undertaken by public-sector and commercial organisations.

- ### Content
  - WCAG originated in 1999 with version 1.0, establishing the first widely adopted international benchmark for web accessibility. Version 2.0 followed in 2008, restructuring the guidelines around the POUR principles (Perceivable, Operable, Understandable, Robust) and introducing technology-neutral testable success criteria. WCAG 2.1 (2018) added 17 criteria specifically addressing mobile, low vision, and cognitive accessibility gaps identified through research with disability advocacy groups.

  - WCAG 2.2 introduces the concept of Focus Appearance at both minimum (AA) and enhanced (AAA) levels, requiring that keyboard focus indicators meet minimum size and contrast ratios — a criterion omitted from 2.1 due to standardisation disputes. The Accessible Authentication criteria prohibit requiring users to solve cognitive function tests (such as CAPTCHAs) without an accessible alternative. Dragging Movements (2.5.7) mandates single-pointer alternatives to all drag-based interactions, addressing touch and precision-pointer users.

  - The standard is normatively referenced in procurement and anti-discrimination legislation across multiple jurisdictions. In the European Union, the Web Accessibility Directive and EN 301 549 map to WCAG 2.1 AA, with anticipated updates to incorporate 2.2. In the United States, Section 508 of the Rehabilitation Act similarly references WCAG 2.1 AA. Many national governments and regulated industries enforce at minimum WCAG 2.1 AA with voluntary adoption of 2.2 accelerating through 2024-2025.

  - As of 2024-2025, WCAG 2.2 has become the de facto implementation target for major technology vendors and public-sector digital services teams. Browser and assistive technology vendors have aligned their test suites accordingly. WCAG 3.0 (Silver) remains in draft, proposing a fundamentally different scoring model, but widespread adoption is not anticipated before 2027 at the earliest; WCAG 2.2 will thus remain the operative standard throughout the current planning horizon.