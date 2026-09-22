public:: true

# Post Incident Review

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:post-incident-review", "@type":"Page", "title":"Post Incident Review", "vc:slug":"post-incident-review", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:post-incident-review",
  "@type":"Class",
  "label":"Post Incident Review",
  "definition":"A post-incident review is a structured retrospective conducted after an operational incident to establish what happened, why, and how recurrence can be prevented. Conducted in a blameless manner, it reconstructs the timeline, identifies contributing factors through root-cause analysis, and produces tracked corrective actions and durable lessons. It is a core practice of incident management and site reliability engineering that turns failures into systemic improvement.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:incident-management","label":"Incident Management"}],
  "relations":{
    "relatedTo":[{"@id":"urn:ngm:class:incident-response","label":"Incident Response"},{"@id":"urn:ngm:class:site-reliability-engineering","label":"Site Reliability Engineering"},{"@id":"urn:ngm:class:reliability-engineering","label":"Reliability Engineering"}],
    "partOf":[{"@id":"urn:ngm:class:incident-management","label":"Incident Management"}],
    "hasPart":[{"@id":"urn:ngm:class:root-cause-analysis","label":"Root Cause Analysis"}],
    "requires":[{"@id":"urn:ngm:class:root-cause-analysis","label":"Root Cause Analysis"},{"@id":"urn:ngm:class:monitoring-system","label":"Monitoring System"}],
    "enables":[{"@id":"urn:ngm:class:change-management","label":"Change Management"},{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:reliability","label":"Reliability"}],
    "uses":[{"@id":"urn:ngm:class:monitoring","label":"Monitoring"},{"@id":"urn:ngm:class:observability","label":"Observability"}],
    "supports":[{"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"},{"@id":"urn:ngm:class:compliance","label":"Compliance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:incident-response","label":"Incident Response"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Post Incident Review]] is a structured, blameless retrospective held after an operational incident to determine what happened, why, and how to prevent recurrence.
- It reconstructs the timeline and applies [[Root Cause Analysis]] to surface contributing factors.
- It is a core practice of [[Incident Management]] and [[Site Reliability Engineering]].
- ### Overview
- A post-incident review, often called a postmortem, takes place once an incident has been resolved and service restored. Its purpose is learning rather than blame: participants reconstruct a factual timeline, examine the technical and organisational factors that allowed the failure, and capture improvements that reduce the chance or impact of similar events.
- The blameless framing is deliberate. By focusing on systems and conditions rather than individuals, it encourages honest disclosure of what people actually saw and did, which yields a more accurate picture of the failure. Root-cause analysis techniques help distinguish triggering events from deeper, latent weaknesses.
- The most valuable output is a set of concrete, owned, and tracked corrective actions, together with documented lessons that feed back into change management, monitoring, and design. Mature organisations treat these reviews as part of their reliability and risk-management discipline, and may also use them to satisfy governance and compliance obligations.
- ### Key aspects
- Blameless framing: examining systemic causes rather than assigning individual fault.
- Timeline reconstruction: assembling an accurate sequence of detection, response, and recovery.
- Root-cause analysis: distinguishing triggers from underlying latent conditions.
- Corrective actions: producing tracked, owned remediation items with follow-through.
- Lessons learned: capturing durable knowledge that informs future design and process.
- ### Applications
- Driving systemic fixes after outages within [[Incident Management]] programmes.
- Feeding remediation into [[Change Management]] and [[Risk Management]] processes.
- Improving [[Reliability]] practices in [[Site Reliability Engineering]] teams.
- Providing evidence for a [[Governance Framework]] and [[Compliance]] reporting.
- ### Relationships
- relatedTo:: [[Incident Response]]
- relatedTo:: [[Site Reliability Engineering]]
- relatedTo:: [[Reliability Engineering]]
- partOf:: [[Incident Management]]
- hasPart:: [[Root Cause Analysis]]
- requires:: [[Root Cause Analysis]]
- requires:: [[Monitoring System]]
- enables:: [[Change Management]]
- enables:: [[Risk Management]]
- enables:: [[Reliability]]
- uses:: [[Monitoring]]
- uses:: [[Observability]]
- supports:: [[Governance Framework]]
- supports:: [[Compliance]]
- bridgesTo:: [[Incident Response]]
- ### Provenance
- updated:: 2026-06-15
