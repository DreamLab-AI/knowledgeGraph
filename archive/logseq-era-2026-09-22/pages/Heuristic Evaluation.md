public:: true

# Heuristic Evaluation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:heuristic-evaluation", "@type":"Page", "title":"Heuristic Evaluation", "vc:slug":"heuristic-evaluation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:heuristic-evaluation",
  "@type":"Class",
  "label":"Heuristic Evaluation",
  "definition":"Heuristic evaluation is a usability inspection method in which a small number of expert evaluators judge an interface against a set of recognised usability principles, or heuristics, to identify usability problems. It is a discount technique that requires no test participants, producing a ranked list of issues with severity estimates. Because it depends on evaluator expertise rather than observed user behaviour, it complements, rather than replaces, empirical usability testing.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:usability","label":"Usability"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:usability","label":"Usability"}],
    "implements":[{"@id":"urn:ngm:class:usability","label":"Usability"}],
    "uses":[{"@id":"urn:ngm:class:mental-model","label":"Mental Model"},{"@id":"urn:ngm:class:cognitive-walkthrough","label":"Cognitive Walkthrough"}],
    "contrastsWith":[{"@id":"urn:ngm:class:usability-testing","label":"Usability Testing"}],
    "relatedTo":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"},{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"},{"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}],
    "supports":[{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"}],
    "requires":[{"@id":"urn:ngm:class:user-research","label":"User Research"}],
    "enables":[{"@id":"urn:ngm:class:usability-testing","label":"Usability Testing"}],
    "dependsOn":[{"@id":"urn:ngm:class:affordance","label":"Affordance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:design-thinking","label":"Design Thinking"}],
    "evaluates":[{"@id":"urn:ngm:class:cognitive-load","label":"Cognitive Load"}],
    "informs":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Heuristic evaluation is an expert inspection of an interface against established principles to surface [[Usability]] problems early and cheaply.
- It draws on the evaluator's understanding of [[Human-Computer Interaction]] and the user's [[Mental Model]] rather than on observed participants.
- The method produces severity-rated findings that feed back into [[Interaction Design]] and improve the wider [[User Experience]].
- It is most powerful when paired with [[Usability Testing]] and other [[User Research]].
- ### Overview
- Heuristic evaluation was popularised by Jakob Nielsen and Rolf Molich as a fast, low-cost alternative to full usability studies.
- A handful of evaluators independently walk through the interface, comparing each screen and interaction against a shared heuristic checklist.
- Findings are aggregated, deduplicated, and assigned severity ratings reflecting frequency, impact, and persistence of each problem.
- Three to five evaluators typically uncover the majority of significant issues, balancing cost against coverage.
- The technique is an inspection method: it predicts problems through expert judgement rather than measuring real user performance.
- ### Mechanisms
- Heuristic checklist — a small set of broadly applicable usability principles such as visibility of system status and error prevention.
- Independent passes — evaluators inspect separately to avoid anchoring before findings are merged.
- Severity rating — each issue is scored to prioritise remediation effort.
- Aggregation — overlapping observations are consolidated into a single ranked defect list.
- Coverage trade-off — more evaluators find more issues with diminishing returns.
- ### Applications
- Early-stage design reviews before committing to development.
- Audits of existing products to triage usability debt.
- Pre-screening interfaces ahead of expensive empirical [[Usability Testing]].
- Reviewing immersive and spatial interfaces where recruiting test users is costly.
- Establishing a baseline of issues to track across design iterations.
- ### Relationships
- partOf:: [[Usability]]
- implements:: [[Usability]]
- uses:: [[Mental Model]]
- uses:: [[Cognitive Walkthrough]]
- contrastsWith:: [[Usability Testing]]
- relatedTo:: [[User Experience]]
- relatedTo:: [[Interaction Design]]
- relatedTo:: [[Human-Computer Interaction]]
- supports:: [[Interaction Design]]
- requires:: [[User Research]]
- enables:: [[Usability Testing]]
- dependsOn:: [[Affordance]]
- bridgesTo:: [[Design Thinking]]
- evaluates:: [[Cognitive Load]]
- informs:: [[User Experience]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
