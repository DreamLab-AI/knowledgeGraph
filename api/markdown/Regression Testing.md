public:: true

# Regression Testing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:regression-testing", "@type":"Page", "title":"Regression Testing", "vc:slug":"regression-testing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:regression-testing",
  "@type":"Class",
  "label":"Regression Testing",
  "definition":"Regression testing is the practice of re-executing previously passing tests after a code change to confirm that existing behaviour has not been broken. It guards against regressions introduced by new features, bug fixes or refactoring by maintaining a suite of repeatable checks that are run automatically as part of integration and delivery pipelines. The discipline trades upfront test authoring and maintenance for sustained confidence in evolving systems.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:software-testing","label":"Software Testing"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:unit-testing","label":"Unit Testing"},
      {"@id":"urn:ngm:class:integration-testing","label":"Integration Testing"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:test-automation","label":"Test Automation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"},
      {"@id":"urn:ngm:class:continuous-delivery","label":"Continuous Delivery"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:unit-testing","label":"Unit Testing"},
      {"@id":"urn:ngm:class:test-automation","label":"Test Automation"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:penetration-testing","label":"Penetration Testing"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:version-control","label":"Version Control"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Regression Testing]] re-runs previously passing checks after a change to confirm existing behaviour still holds. It is a core practice within [[Software Testing]] and [[Quality Assurance]] that depends on [[Test Automation]] and on the change history captured by [[Version Control]].
	- The goal is to detect regressions, defects reintroduced or newly caused by modifications, before they reach production.
- ### Overview
	- As software evolves, every change risks disturbing behaviour that previously worked. Regression testing addresses this by maintaining a curated suite of tests that encode expected behaviour and replaying them on each candidate build.
	- Suites span granular [[Unit Testing]] and broader [[Integration Testing]], and are typically executed automatically within [[Continuous Integration]] and [[Continuous Delivery]] pipelines so that failures surface quickly and close to their cause.
	- Effective regression testing balances coverage against execution cost, using selection, prioritisation and parallelism to keep feedback fast as the suite grows.
- ### Mechanisms
	- Test selection and impact analysis to run the subset of tests affected by a change.
	- Test prioritisation to surface likely failures earlier in a run.
	- Golden-output and snapshot comparison to detect unexpected differences.
	- Flaky-test detection and quarantine to keep signal trustworthy.
	- Pipeline gating that blocks merges or releases on regression failures.
- ### Applications
	- Guarding refactoring efforts so internal restructuring preserves observable behaviour.
	- Validating bug fixes by adding a failing test that the fix must turn green and that future changes must keep green.
	- Continuous validation of releases within automated delivery pipelines.
	- Cross-platform and cross-version compatibility verification.
- ### Relationships
	- hasPart:: [[Unit Testing]]
	- hasPart:: [[Integration Testing]]
	- partOf:: [[Quality Assurance]]
	- requires:: [[Test Automation]]
	- supports:: [[Continuous Integration]]
	- supports:: [[Continuous Delivery]]
	- enables:: [[Quality Assurance]]
	- uses:: [[Unit Testing]]
	- uses:: [[Test Automation]]
	- contrastsWith:: [[Penetration Testing]]
	- dependsOn:: [[Version Control]]
	- relatedTo:: [[Reproducibility]]
	- relatedTo:: [[Observability]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
