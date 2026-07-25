public:: true

# Incident Management
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:incident-management", "@type":"Page", "title":"Incident Management", "vc:slug":"incident-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:incident-management",
  "@type": "Class",
  "label": "Incident Management",
  "definition": "Incident management is the operational discipline of detecting, responding to, resolving, and learning from unplanned disruptions to a service. It coordinates people and tooling through detection, triage, escalation, mitigation, and recovery, then conducts blameless post-mortems to prevent recurrence. Closely associated with site reliability engineering and ITIL practice, it aims to minimise mean time to recovery and protect service-level objectives.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:site-reliability-engineering", "label": "Site Reliability Engineering" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:incident-response", "label": "Incident Response" },
      { "@id": "urn:ngm:class:post-mortem", "label": "Post-Mortem" },
      { "@id": "urn:ngm:class:escalation", "label": "Escalation" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:observability", "label": "Observability" },
      { "@id": "urn:ngm:class:monitoring", "label": "Monitoring" },
      { "@id": "urn:ngm:class:on-call", "label": "On-Call" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:alerting", "label": "Alerting" },
      { "@id": "urn:ngm:class:runbook", "label": "Runbook" },
      { "@id": "urn:ngm:class:root-cause-analysis", "label": "Root Cause Analysis" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:service-level-objective", "label": "Service Level Objective" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:devops", "label": "DevOps" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:itil", "label": "ITIL" },
      { "@id": "urn:ngm:class:chaos-engineering", "label": "Chaos Engineering" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:site-reliability-engineering", "label": "Site Reliability Engineering" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - Incident management is the practice within [[Site Reliability Engineering]] of detecting, coordinating, and resolving service disruptions.
  - It spans [[Incident Response]], [[Escalation]], mitigation, and the blameless [[Post-Mortem]].
  - It depends on [[Observability]] and [[Monitoring]] to surface problems early.
- ### Overview
  - When a service degrades, incident management provides the roles, runbooks, and communication structure to restore it quickly.
  - The goal is to minimise mean time to recovery while protecting agreed [[Service Level Objective]] targets.
  - Lessons captured in post-mortems feed back into engineering work, closing the loop between operations and development.
- ### Key aspects
  - Clear roles such as incident commander, communications lead, and operations lead.
  - Severity classification and defined escalation paths.
  - Blameless learning culture that treats failures as systemic, not personal.
- ### Mechanisms
  - [[Alerting]] derived from [[Monitoring]] signals pages an [[On-Call]] responder.
  - Responders follow a [[Runbook]] to triage and mitigate, escalating where needed.
  - After recovery, [[Root Cause Analysis]] identifies contributing factors and remediation actions.
- ### Applications
  - Operating cloud and SaaS platforms at scale.
  - Sustaining reliability targets under continuous deployment.
  - Coordinating cross-team response to security and availability events.
- ### Relationships
  - subClassOf:: [[Site Reliability Engineering]]
  - hasPart:: [[Incident Response]]
  - hasPart:: [[Post-Mortem]]
  - hasPart:: [[Escalation]]
  - requires:: [[Observability]]
  - requires:: [[Monitoring]]
  - requires:: [[On-Call]]
  - uses:: [[Alerting]]
  - uses:: [[Runbook]]
  - uses:: [[Root Cause Analysis]]
  - enables:: [[Service Level Objective]]
  - supports:: [[DevOps]]
  - relatedTo:: [[ITIL]]
  - relatedTo:: [[Chaos Engineering]]
  - bridgesTo:: [[Site Reliability Engineering]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
