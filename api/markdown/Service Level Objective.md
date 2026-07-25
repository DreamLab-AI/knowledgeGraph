public:: true

# Service Level Objective
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:service-level-objective", "@type":"Page", "title":"Service Level Objective", "vc:slug":"service-level-objective", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:service-level-objective",
  "@type":"Class",
  "label":"Service Level Objective",
  "definition":"A service level objective (SLO) is a target value or range for a measurable property of a service, such as availability or latency, that defines the acceptable level of reliability over a stated time window. SLOs are expressed against service level indicators and provide the quantitative basis for engineering decisions, error budgets and the contractual commitments of service level agreements. They are a cornerstone practice of site reliability engineering, balancing reliability against the pace of change.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:site-reliability-engineering","label":"Site Reliability Engineering"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:site-reliability-engineering","label":"Site Reliability Engineering"}],
    "dependsOn":[{"@id":"urn:ngm:class:observability","label":"Observability"},{"@id":"urn:ngm:class:monitoring","label":"Monitoring"}],
    "enables":[{"@id":"urn:ngm:class:reliability","label":"Reliability"}],
    "supports":[{"@id":"urn:ngm:class:reliability-engineering","label":"Reliability Engineering"},{"@id":"urn:ngm:class:capacity-planning","label":"Capacity Planning"}],
    "hasPart":[{"@id":"urn:ngm:class:latency","label":"Latency"}],
    "uses":[{"@id":"urn:ngm:class:monitoring","label":"Monitoring"}],
    "requires":[{"@id":"urn:ngm:class:observability","label":"Observability"}],
    "relatedTo":[{"@id":"urn:ngm:class:devops","label":"DevOps"},{"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"},{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "bridgesTo":[{"@id":"urn:ngm:class:reliability","label":"Reliability"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A service level objective is a measurable target for a service property such as availability or [[Latency]], defining acceptable [[Reliability]] over a time window. It is a core practice of [[Site Reliability Engineering]], depending on [[Observability]] and [[Monitoring]] to verify whether the target is being met.
- ### Overview
- SLOs translate vague aspirations like "the service should be reliable" into precise, measurable goals such as "99.9 per cent of requests succeed within 200 milliseconds over a rolling 28-day window".
- They are defined against service level indicators, the actual measured metrics, and they inform the error budget: the permitted amount of unreliability before remediation takes priority over new features.
- SLOs differ from service level agreements: the agreement is a customer-facing contract with consequences, whereas the objective is the internal, usually stricter, engineering target.
- Well-chosen SLOs focus on user-perceived experience rather than internal component health, aligning engineering effort with customer outcomes.
- ### Mechanisms
- Indicators are computed from request logs, traces and metrics, typically as ratios of good events to valid events.
- Error budgets are derived from the SLO and consumed by incidents; exhaustion triggers change freezes or reliability investment.
- Burn-rate alerting fires when the budget is being consumed faster than the window allows, enabling proactive response.
- Multi-window, multi-burn-rate policies balance fast detection against false positives.
- ### Applications
- Governing release velocity in [[DevOps]] pipelines via error-budget policy.
- Prioritising reliability work in [[Reliability Engineering]] and incident reviews.
- Informing [[Capacity Planning]] and architectural investment in [[Fault Tolerance]].
- Setting realistic, evidence-based commitments for [[Distributed Systems]] across teams.
- ### Key aspects
- An SLO must be achievable yet meaningful: a target that is always met provides no signal.
- Dependency SLOs compose: a service can be no more reliable than the components it relies upon.
- Stakeholder agreement on SLOs aligns engineering, product and business priorities.
- ### Relationships
- partOf:: [[Site Reliability Engineering]]
- dependsOn:: [[Observability]]
- dependsOn:: [[Monitoring]]
- enables:: [[Reliability]]
- supports:: [[Reliability Engineering]]
- supports:: [[Capacity Planning]]
- hasPart:: [[Latency]]
- uses:: [[Monitoring]]
- requires:: [[Observability]]
- relatedTo:: [[DevOps]]
- relatedTo:: [[Fault Tolerance]]
- relatedTo:: [[Distributed Systems]]
- bridgesTo:: [[Reliability]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
