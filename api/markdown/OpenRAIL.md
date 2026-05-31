public:: true

# OpenRAIL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-rail",
  "@type": "Page",
  "vc:slug": "open-rail",
  "title": "OpenRAIL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-rail",
  "@type": "Class",
  "label": "OpenRAIL",
  "definition": "OpenRAIL (Responsible AI License) is a family of model licenses that grant broad permission to use and distribute AI models while imposing use-based behavioral restrictions to prevent harmful applications. Unlike traditional open-source licenses, it couples openness with enforceable conditions prohibiting specified misuse such as discrimination or disinformation. OpenRAIL has become a common licensing framework for openly released foundation models and their training artifacts.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:training-data", "label": "Training Data"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - OpenRAIL is a Responsible AI License that permits broad use of models and artifacts such as [[Training Data]] while attaching use-based restrictions to curb harmful applications.
- ### Content
  - It blends open access with behavioral clauses prohibiting enumerated misuses, distinguishing it from permissive open-source licenses. The framework is widely applied to openly distributed foundation models, balancing reuse and downstream accountability for both weights and associated datasets.
