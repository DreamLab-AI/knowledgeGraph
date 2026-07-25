public:: true

# Waterfall Model

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:waterfall-model", "@type":"Page", "title":"Waterfall Model", "vc:slug":"waterfall-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:waterfall-model",
  "@type":"Class",
  "label":"Waterfall Model",
  "definition":"The waterfall model is a sequential software development methodology in which progress flows downward through distinct phases such as requirements, design, implementation, verification, and maintenance. Each phase is completed and signed off before the next begins, producing extensive documentation at every gate. It offers predictability and clear milestones but assumes requirements are stable and discovered early, which limits its ability to absorb change.",
  "domain":"governance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:project-management","label":"Project Management"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:software-development","label":"Software Development"},
      {"@id":"urn:ngm:class:project-management","label":"Project Management"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:agile-methodology","label":"Agile Methodology"},
      {"@id":"urn:ngm:class:devops","label":"DevOps"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:requirements-engineering","label":"Requirements Engineering"},
      {"@id":"urn:ngm:class:software-architecture","label":"Software Architecture"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:software-testing","label":"Software Testing"},
      {"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:risk-management","label":"Risk Management"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:software-engineering","label":"Software Engineering"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:software-development","label":"Software Development"},
      {"@id":"urn:ngm:class:project-management","label":"Project Management"},
      {"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - The waterfall model is a sequential, phase-gated approach to [[Software Development]] in which each stage completes before the next begins.
  - It is a classic methodology within [[Project Management]] and [[Software Engineering]].
  - It depends on stable, early-captured [[Requirements Engineering]] and a fixed [[Software Architecture]].
  - It stands in deliberate contrast to [[Agile Methodology]], which embraces iterative change.
- ### Overview
  - The waterfall model formalised software work as a linear pipeline, popularised from descriptions of large defence and engineering projects in the 1970s.
  - Phases typically include requirements analysis, system design, implementation, integration and testing, deployment, and maintenance.
  - Each phase produces signed-off deliverables and documentation that serve as the contract for the next phase.
  - Its strength is predictability and traceability; its weakness is rigidity when requirements evolve after early phases close.
- ### Mechanisms
  - Phase gates: formal review and approval checkpoints between stages.
  - Documentation-driven handoff: each phase consumes the artefacts of the prior phase.
  - Baseline freezing: requirements and design are fixed to control change.
  - Verification at the end: testing concentrated after implementation rather than continuously.
  - Linear scheduling: milestones map directly to sequential phases.
- ### Applications
  - Projects with well-understood, stable requirements such as regulated or contractual systems.
  - Safety-critical and compliance-heavy domains where documentation and audit trails are mandatory.
  - Fixed-scope, fixed-budget engagements where predictability outweighs adaptability.
  - Teaching contexts as a baseline against which iterative methods are compared.
- ### Relationships
  - implements:: [[Software Development]]
  - implements:: [[Project Management]]
  - contrastsWith:: [[Agile Methodology]]
  - contrastsWith:: [[DevOps]]
  - requires:: [[Requirements Engineering]]
  - requires:: [[Software Architecture]]
  - uses:: [[Software Testing]]
  - uses:: [[Quality Assurance]]
  - supports:: [[Risk Management]]
  - partOf:: [[Software Engineering]]
  - relatedTo:: [[Software Development]]
  - relatedTo:: [[Project Management]]
  - relatedTo:: [[Quality Assurance]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
