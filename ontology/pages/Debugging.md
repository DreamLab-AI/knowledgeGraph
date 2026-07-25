public:: true

# Debugging
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:debugging", "@type":"Page", "title":"Debugging", "vc:slug":"debugging", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:debugging",
  "@type":"Class",
  "label":"Debugging",
  "definition":"Debugging is the systematic process of locating, diagnosing and resolving defects in software so that it behaves as intended. It typically involves reproducing the fault, observing program state through breakpoints, logging and runtime inspection, forming hypotheses about the cause, and verifying a fix. Debugging spans interactive use of debuggers, analysis of stack traces and logs, and reasoning about concurrency and integration boundaries. It is a core software development activity complementary to, but distinct from, automated testing.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:software-development","label":"Software Development"}],
  "relations":{
    "supports":[{"@id":"urn:ngm:class:reliability","label":"Reliability"},{"@id":"urn:ngm:class:software-engineering","label":"Software Engineering"}],
    "contrastsWith":[{"@id":"urn:ngm:class:testing","label":"Testing"}],
    "enables":[{"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"}],
    "uses":[{"@id":"urn:ngm:class:runtime-environment","label":"Runtime Environment"},{"@id":"urn:ngm:class:observability","label":"Observability"}],
    "requires":[{"@id":"urn:ngm:class:runtime-environment","label":"Runtime Environment"}],
    "dependsOn":[{"@id":"urn:ngm:class:observability","label":"Observability"}],
    "partOf":[{"@id":"urn:ngm:class:software-engineering","label":"Software Engineering"}],
    "implements":[{"@id":"urn:ngm:class:software-testing","label":"Software Testing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:devops","label":"DevOps"}],
    "relatedTo":[{"@id":"urn:ngm:class:software-testing","label":"Software Testing"},{"@id":"urn:ngm:class:version-control","label":"Version Control"},{"@id":"urn:ngm:class:reliability","label":"Reliability"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Debugging is the systematic process of locating, diagnosing and resolving software defects. As part of [[Software Development]] and [[Software Engineering]] it draws on the [[Runtime Environment]] and [[Observability]] and complements [[Testing]] and [[Software Testing]].
- ### Overview
- Debugging closes the gap between observed and intended behaviour by working from a symptom back to a root cause.
- It blends interactive techniques (breakpoints, watches, step execution) with after-the-fact analysis of logs and stack traces.
- Effective debugging is iterative: reproduce, narrow, hypothesise, test, and confirm.
- ### Mechanisms
- Reproduction: establishing a reliable way to trigger the fault, ideally minimised to the smallest failing case.
- Inspection: pausing execution in the [[Runtime Environment]] to read variables, the call stack and memory.
- Instrumentation: adding logging and using [[Observability]] signals to expose otherwise hidden state.
- Bisection: using [[Version Control]] history to isolate the change that introduced a regression.
- ### Key aspects
- Distinguishing the fault (defect in code) from the failure (observable wrong behaviour).
- Handling non-deterministic bugs arising from concurrency, timing or environment differences.
- Verifying that a fix resolves the defect without introducing new ones.
- ### Applications
- Resolving crashes, incorrect output and performance anomalies.
- Diagnosing integration failures across services and dependencies.
- Post-incident analysis feeding back into [[Reliability]] and [[DevOps]] practices.
- ### Relationships
- supports:: [[Reliability]]
- supports:: [[Software Engineering]]
- contrastsWith:: [[Testing]]
- enables:: [[Fault Tolerance]]
- uses:: [[Runtime Environment]]
- uses:: [[Observability]]
- requires:: [[Runtime Environment]]
- dependsOn:: [[Observability]]
- partOf:: [[Software Engineering]]
- implements:: [[Software Testing]]
- bridgesTo:: [[DevOps]]
- relatedTo:: [[Version Control]]
- ### Provenance
- updated:: 2026-06-15
