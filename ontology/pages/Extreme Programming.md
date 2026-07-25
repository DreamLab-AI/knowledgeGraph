public:: true

# Extreme Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:extreme-programming",
  "@type": "Page",
  "vc:slug": "extreme-programming",
  "title": "Extreme Programming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:extreme-programming",
  "@type": "Class",
  "label": "Extreme Programming",
  "definition": "Extreme Programming (XP) is an agile software-development methodology that emphasises short iterations, continuous feedback, and engineering discipline to deliver high-quality software responsive to changing requirements. Its core practices include test-driven development, pair programming, continuous integration, collective code ownership, and frequent small releases. XP treats good practices to an 'extreme' degree, for example applying continuous code review through constant pairing.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:remote-pair-programming", "label": "Remote Pair Programming"},
      {"@id": "urn:ngm:class:software-development", "label": "Software Development"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Extreme Programming is an agile [[Software Development]] methodology built on tight feedback loops and rigorous engineering practices, with pair programming as a defining feature that motivates approaches such as [[Remote Pair Programming]]. It pushes beneficial practices to their logical extreme.
- ### Content
  - XP organises work into short iterations driven by user stories, mandating test-first development, continuous integration, and on-site customer collaboration. The methodology trades upfront design documentation for evolutionary design and refactoring, relying on automated tests and pairing to keep defect rates low while accommodating volatile requirements.
