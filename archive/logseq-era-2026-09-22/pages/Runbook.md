public:: true

# Runbook

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:runbook", "@type":"Page", "title":"Runbook", "vc:slug":"runbook", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:runbook",
  "@type":"Class",
  "label":"Runbook",
  "definition":"A runbook is a documented set of procedures for operating, maintaining and recovering a system, giving operators a repeatable sequence of steps for routine tasks and known failure scenarios. Modern runbooks range from human-readable checklists to executable automations that orchestrate remediation directly. They are a core artefact of site reliability engineering, reducing reliance on individual expertise during incidents.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:documentation","label":"Documentation"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:incident-management","label":"Incident Management"},
      {"@id":"urn:ngm:class:disaster-recovery","label":"Disaster Recovery"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:automation","label":"Automation"},
      {"@id":"urn:ngm:class:infrastructure-as-code","label":"Infrastructure as Code"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:site-reliability-engineering","label":"Site Reliability Engineering"},
      {"@id":"urn:ngm:class:on-call","label":"On-Call"},
      {"@id":"urn:ngm:class:reliability-engineering","label":"Reliability Engineering"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:observability","label":"Observability"},
      {"@id":"urn:ngm:class:monitoring","label":"Monitoring"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:devops","label":"DevOps"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:documentation","label":"Documentation"},
      {"@id":"urn:ngm:class:incident-management","label":"Incident Management"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A runbook is operational [[Documentation]] capturing repeatable procedures for running and recovering a system. It enables [[Incident Management]] and [[Disaster Recovery]], increasingly via [[Automation]], and is a staple of [[Site Reliability Engineering]] and [[On-Call]] rotations.
- ### Overview
  - Runbooks encode the institutional knowledge needed to operate a service: how to deploy, how to scale, how to roll back, and how to respond to specific alerts. They turn tacit expertise into explicit, followable steps.
  - During an incident, a good runbook lets any on-call engineer execute the correct response without first reconstructing context, which shortens mean time to recovery and reduces error.
  - The discipline has evolved from static documents toward executable and semi-automated runbooks, where remediation steps can be triggered or fully orchestrated by tooling.
- ### Key aspects
  - Repeatability: the same steps produce the same outcome regardless of operator.
  - Scope: covers routine operations as well as known failure modes.
  - Triggers: each procedure is tied to a condition, alert or task.
  - Verification: steps include checks that confirm the system reached the desired state.
  - Maintenance: runbooks must be kept current with the systems they describe.
- ### Mechanisms
  - Checklist procedures linked from alerts in the monitoring system.
  - Automated runbooks that script remediation through infrastructure-as-code tooling.
  - Drills and game days that validate runbooks against simulated failures.
  - Versioning so runbooks evolve alongside system changes.
- ### Applications
  - On-call incident response for production services.
  - Disaster recovery and failover execution.
  - Routine maintenance such as deployments, rotations and backups.
  - Onboarding operators to a service.
- ### Relationships
  - enables:: [[Incident Management]]
  - enables:: [[Disaster Recovery]]
  - uses:: [[Automation]]
  - uses:: [[Infrastructure as Code]]
  - supports:: [[Site Reliability Engineering]]
  - supports:: [[On-Call]]
  - supports:: [[Reliability Engineering]]
  - requires:: [[Observability]]
  - requires:: [[Monitoring]]
  - partOf:: [[DevOps]]
  - relatedTo:: [[Documentation]]
  - relatedTo:: [[Incident Management]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
