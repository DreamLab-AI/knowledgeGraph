public:: true

# Unit Testing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:unit-testing", "@type":"Page", "title":"Unit Testing", "vc:slug":"unit-testing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:unit-testing",
  "@type":"Class",
  "label":"Unit Testing",
  "definition":"Unit testing is a software testing practice in which individual units of source code — typically functions, methods, or classes — are exercised in isolation to verify that each behaves as specified. Tests are written as small, deterministic, automated checks that assert expected outputs for given inputs and run quickly as part of the development loop. The practice underpins refactoring confidence, regression protection, and continuous integration pipelines.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:software-testing","label":"Software Testing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:software-testing","label":"Software Testing"},{"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}],
    "hasPart":[{"@id":"urn:ngm:class:test-automation","label":"Test Automation"},{"@id":"urn:ngm:class:regression-testing","label":"Regression Testing"}],
    "supports":[{"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"},{"@id":"urn:ngm:class:software-engineering","label":"Software Engineering"},{"@id":"urn:ngm:class:software-development","label":"Software Development"}],
    "enables":[{"@id":"urn:ngm:class:test-driven-development","label":"Test-Driven Development"}],
    "requires":[{"@id":"urn:ngm:class:test-automation","label":"Test Automation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:integration-testing","label":"Integration Testing"},{"@id":"urn:ngm:class:regression-testing","label":"Regression Testing"}],
    "uses":[{"@id":"urn:ngm:class:test-automation","label":"Test Automation"}],
    "relatedTo":[{"@id":"urn:ngm:class:continuous-delivery","label":"Continuous Delivery"},{"@id":"urn:ngm:class:verification","label":"Verification"},{"@id":"urn:ngm:class:software-quality","label":"Software Quality"}],
    "bridgesTo":[{"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Unit testing exercises individual units of code in isolation to confirm correctness. It is a core discipline of [[Software Testing]] and [[Quality Assurance]], providing fast feedback that supports [[Software Engineering]] and safe [[Test-Driven Development]].
- A unit test pairs a known input with an asserted expected output, running deterministically without external dependencies such as networks or databases.
- ### Overview
- The unit is the smallest testable part of an application — usually a function, method, or class. By isolating each unit, failures localise precisely, shortening the debugging cycle.
- Tests are written in the same language and toolchain as the code under test, executed by a test runner that reports pass and fail counts.
- Isolation is achieved by replacing collaborators with controlled doubles, so the test verifies only the behaviour of the unit itself.
- ### Key aspects
- Isolation: a unit is tested independently of its collaborators and external systems.
- Determinism: given the same input, a test produces the same result on every run.
- Speed: suites run in seconds, enabling tight inner-loop feedback.
- Repeatability: tests can run on any machine and any environment without manual setup.
- Self-checking: each test asserts its own outcome rather than requiring human inspection.
- ### Mechanisms
- Arrange-act-assert structure: prepare state, invoke the unit, assert the result.
- Test doubles (stubs, fakes, spies) substitute for real collaborators to keep the unit isolated.
- Coverage measurement reports which lines and branches the suite exercises.
- Parameterised tests run the same logic across many input cases.
- ### Applications
- Refactoring safety net: code can be restructured with confidence that behaviour is preserved.
- Regression protection: re-running the suite catches reintroduced defects, feeding into [[Regression Testing]].
- Pipeline gating: suites run automatically in [[Continuous Integration]] and [[Continuous Delivery]] to block broken changes.
- Living documentation: tests express intended behaviour as executable examples.
- ### Relationships
- partOf:: [[Software Testing]]
- partOf:: [[Quality Assurance]]
- hasPart:: [[Test Automation]]
- hasPart:: [[Regression Testing]]
- supports:: [[Continuous Integration]]
- supports:: [[Software Engineering]]
- supports:: [[Software Development]]
- enables:: [[Test-Driven Development]]
- requires:: [[Test Automation]]
- contrastsWith:: [[Integration Testing]]
- contrastsWith:: [[Regression Testing]]
- uses:: [[Test Automation]]
- relatedTo:: [[Continuous Delivery]]
- relatedTo:: [[Verification]]
- bridgesTo:: [[Continuous Integration]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
