public:: true

# Integration Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:integration-testing",
  "@type": "Page",
  "vc:slug": "integration-testing",
  "title": "Integration Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:integration-testing",
  "@type": "Class",
  "label": "Integration Testing",
  "definition": "Integration testing is a software verification phase that exercises the interfaces and interactions between combined components or systems, rather than units in isolation. It detects defects in data contracts, protocols, timing, and configuration that emerge only when modules are wired together. Sitting between unit and system testing, it is essential for catching interface mismatches before end-to-end and acceptance stages.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:compatibility-process", "label": "Compatibility Process"},
      {"@id": "urn:ngm:class:testing-process", "label": "Testing Process"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Integration testing verifies that combined components interoperate correctly across their interfaces. It is a part of the broader [[Testing Process]] and underpins the [[Compatibility Process]].
- ### Content
  - Strategies include big-bang, top-down, bottom-up, and sandwich integration, often supported by stubs and test doubles for not-yet-available dependencies. Contract tests and service virtualisation make integration testing repeatable in continuous-integration pipelines.
