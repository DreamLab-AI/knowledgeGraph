public:: true

# Accessibility Tree
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:accessibility-tree",
  "@type": "Page",
  "vc:slug": "accessibility-tree",
  "title": "Accessibility Tree",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:accessibility-tree",
  "@type": "Class",
  "label": "Accessibility Tree",
  "definition": "The Accessibility Tree is a structured representation of a user interface that exposes each element's role, name, state, and value to assistive technologies and automation agents. Browsers derive it from the DOM, filtering out presentational nodes and computing accessible names so that screen readers and programmatic clients can understand and operate the page. It provides a stable semantic model that AI browser agents use to locate and interact with controls without parsing raw pixels.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - The Accessibility Tree is a semantic, role-and-name model of an interface that browsers build from the DOM for assistive technologies. It is a key input for [[Computer Use and Browser Agents]], which read it to identify actionable elements reliably.
- ### Content
  - Each node carries an ARIA role, an accessible name, and interaction states such as focused, checked, or disabled. Because it abstracts away styling and layout, agents and screen readers can target elements deterministically, making it more robust than coordinate- or vision-based interaction for many web tasks.
