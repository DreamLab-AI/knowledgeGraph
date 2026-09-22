public:: true

# Automated Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:automated-testing",
  "@type": "Page",
  "vc:slug": "automated-testing",
  "title": "Automated Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automated-testing",
  "@type": "Class",
  "label": "Automated Testing",
  "definition": "Automated testing is the practice of using software tools to execute predefined test cases against a system and compare actual outcomes to expected results without manual intervention. It spans unit, integration, end-to-end, and regression tests, and is typically wired into build pipelines so defects are caught early and consistently. By making verification repeatable and fast, it enables continuous integration and reliable software delivery at scale.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:continuous-integration", "label": "Continuous Integration"},
      {"@id": "urn:ngm:class:cli-multi-agent-systems", "label": "CLI Multi-Agent Systems"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Automated testing executes test suites programmatically to verify software behaviour, forming the backbone of [[Continuous Integration]] and supporting reliable workflows in [[CLI Multi-Agent Systems]].
- ### Content
  - Test frameworks assert expected behaviour at varying granularities, from isolated units to full system flows. Integrated into CI/CD pipelines, automated tests gate merges and deployments, providing fast feedback and guarding against regressions as codebases evolve.
