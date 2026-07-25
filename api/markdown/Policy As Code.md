public:: true

# Policy As Code

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:policy-as-code", "@type":"Page", "title":"Policy As Code", "vc:slug":"policy-as-code", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:policy-as-code",
  "@type":"Class",
  "label":"Policy As Code",
  "definition":"Policy as code is the practice of expressing governance, security, and compliance rules in a machine-readable, version-controlled language so that they can be automatically evaluated and enforced. By treating policy as a software artefact, organisations gain testability, auditability, and consistent enforcement across infrastructure, data, and application pipelines. Decisions are computed by policy engines at admission or runtime, replacing manual review with deterministic, repeatable checks.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"},
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:policy-engine","label":"Policy Engine"},
      {"@id":"urn:ngm:class:open-policy-agent","label":"Open Policy Agent"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:compliance-automation","label":"Compliance Automation"},
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:version-control","label":"Version Control"},
      {"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:audit","label":"Audit"},
      {"@id":"urn:ngm:class:data-governance","label":"Data Governance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:devops","label":"DevOps"},
      {"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"},
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Policy as code expresses governance and compliance rules as machine-readable, version-controlled artefacts evaluated automatically.
  - It is a discipline within [[Data Governance]] and a concrete realisation of a [[Governance Framework]].
  - It relies on a [[Policy Engine]] such as [[Open Policy Agent]] to compute decisions.
  - It builds on [[Version Control]] and [[Infrastructure as Code]] to make policy testable and reproducible.
- ### Overview
  - Policy as code shifts governance from documents and manual sign-off to executable rules that pipelines and platforms evaluate continuously.
  - Rules are authored in declarative languages, stored alongside application and infrastructure code, and tested like any other software.
  - Policy engines evaluate inputs against these rules at admission time, in continuous integration, or at runtime, returning allow or deny decisions with explanations.
  - The approach delivers consistency, fast feedback, and a complete audit trail of who changed which rule and when.
- ### Mechanisms
  - Declarative rule definition: policies written as logic that a query engine evaluates against structured input.
  - Decision points: enforcement hooks at admission controllers, CI gates, and service runtimes.
  - Version control and review: policies branched, reviewed, and merged like source code.
  - Automated testing: unit and integration tests validate rule behaviour before deployment.
  - Centralised distribution: bundled policies pushed to many enforcement points consistently.
- ### Applications
  - Enforcing security and compliance guardrails across cloud infrastructure deployments.
  - Gating data access and data product publication within data governance programmes.
  - Validating Kubernetes manifests and infrastructure changes before they reach production.
  - Encoding regulatory controls so audits can be evidenced automatically.
- ### Relationships
  - implements:: [[Governance Framework]]
  - implements:: [[Regulatory Compliance]]
  - uses:: [[Policy Engine]]
  - uses:: [[Open Policy Agent]]
  - enables:: [[Compliance Automation]]
  - enables:: [[Access Control]]
  - requires:: [[Version Control]]
  - requires:: [[Infrastructure as Code]]
  - supports:: [[Audit]]
  - supports:: [[Data Governance]]
  - relatedTo:: [[DevOps]]
  - relatedTo:: [[Governance Framework]]
  - relatedTo:: [[Access Control]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
