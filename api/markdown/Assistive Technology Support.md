public:: true

# Assistive Technology Support
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:assistive-technology-support",
  "@type": "Page",
  "vc:slug": "assistive-technology-support",
  "title": "Assistive Technology Support",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:assistive-technology-support",
  "@type": "Class",
  "label": "Assistive Technology Support",
  "definition": "Assistive Technology Support is the set of capabilities that make software interoperate correctly with assistive tools such as screen readers, magnifiers, switch access, and voice control. It is achieved by exposing semantic roles, names, states, and keyboard operability through accessibility APIs so that users with disabilities can perceive and operate an interface. Robust support is a prerequisite for accessible experiences and for compliance with standards like WCAG.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility Domain"},
      {"@id": "urn:ngm:class:accessible-experience", "label": "Accessible Experience"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Assistive Technology Support enables software to work with screen readers, magnifiers, and other aids by exposing semantics through accessibility APIs. It is a capability of the [[Accessibility Domain]] and a requirement for delivering an [[Accessible Experience]].
- ### Content
  - Implementations populate the accessibility tree with correct roles, names, and states, ensure full keyboard operability, and respect user preferences such as reduced motion and high contrast. Without this support, assistive tools cannot interpret the interface, so it is both an engineering practice and a legal-compliance obligation under accessibility standards.
