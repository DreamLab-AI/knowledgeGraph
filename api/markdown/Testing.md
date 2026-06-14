public:: true

# Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:testing",
  "@type": "Page",
  "vc:slug": "testing",
  "title": "Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:testing",
  "@type": "Class",
  "label": "Testing",
  "definition": "Testing is the software-engineering practice of verifying that a system behaves as specified and detecting defects by executing it against defined inputs and checking the outputs. It spans levels from unit and integration to system and acceptance testing, and styles from manual to fully automated. Systematic testing is a primary mechanism for establishing software reliability and guarding against regressions.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:reliability", "label": "Reliability"},
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Testing verifies that software behaves as specified by executing it against defined cases and checking outputs, a core practice for achieving [[Reliability]] within the [[Software Engineering Domain]].
- ### Content
  - Testing is organised into a hierarchy: unit tests isolate individual functions, integration tests exercise component boundaries, and system and acceptance tests validate end-to-end behaviour against requirements. Modern pipelines automate these in continuous integration so that every change is checked against a regression suite. Complementary techniques such as property-based testing, fuzzing, and coverage analysis extend confidence beyond hand-written examples, though no amount of testing proves the absence of all defects.
