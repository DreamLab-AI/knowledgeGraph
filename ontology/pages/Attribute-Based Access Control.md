public:: true

# Attribute-Based Access Control

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:attribute-based-access-control", "@type":"Page", "title":"Attribute-Based Access Control", "vc:slug":"attribute-based-access-control", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:attribute-based-access-control",
  "@type":"Class",
  "label":"Attribute-Based Access Control",
  "definition":"Attribute-Based Access Control (ABAC) is an authorisation model that grants or denies access by evaluating policies against attributes of the subject, resource, action, and environment rather than against static role assignments. Decisions are computed dynamically from these attributes at request time, enabling fine-grained, context-aware control. ABAC is a cornerstone of zero-trust architectures because it can express rich conditional rules without proliferating roles.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:access-control","label":"Access Control"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:access-control-policy","label":"Access Control Policy"},{"@id":"urn:ngm:class:authorization","label":"Authorization"}],
    "partOf":[{"@id":"urn:ngm:class:identity-and-access-management","label":"Identity and Access Management"}],
    "requires":[{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "enables":[{"@id":"urn:ngm:class:zero-trust-architecture","label":"Zero Trust Architecture"},{"@id":"urn:ngm:class:data-minimisation","label":"Data Minimisation"}],
    "dependsOn":[{"@id":"urn:ngm:class:identity-and-access-management","label":"Identity and Access Management"}],
    "implements":[{"@id":"urn:ngm:class:authorization","label":"Authorization"}],
    "uses":[{"@id":"urn:ngm:class:access-control-policy","label":"Access Control Policy"}],
    "supports":[{"@id":"urn:ngm:class:compliance-monitoring","label":"Compliance Monitoring"}],
    "contrastsWith":[{"@id":"urn:ngm:class:role-based-access-control","label":"Role-Based Access Control"}],
    "relatedTo":[{"@id":"urn:ngm:class:audit-logging","label":"Audit Logging"},{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}],
    "bridgesTo":[{"@id":"urn:ngm:class:zero-trust-architecture","label":"Zero Trust Architecture"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:access-control","label":"Access Control"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Attribute-Based Access Control evaluates [[Access Control Policy]] rules against attributes of the subject, resource, action and environment to reach an [[Authorization]] decision at request time.
- It generalises older models by computing access dynamically, and forms a key building block of [[Zero Trust Architecture]] and modern [[Identity and Access Management]].
- ### Overview
- In ABAC, access is not pre-baked into role grants. Instead a policy engine consumes a set of attributes — who is asking, what they are asking for, what operation, and under what conditions — and returns permit or deny.
- This allows expressive rules such as granting access only to records in a user's own department, during working hours, from a managed device.
- Because attributes can include context like location and risk score, ABAC naturally supports context-aware, [[Zero Trust Architecture]] enforcement.
- The trade-off is policy complexity: rich attribute logic is powerful but harder to author and audit than coarse role grants.
- ### Key aspects
- Subject attributes: identity, clearance, group membership and risk, sourced from [[Identity and Access Management]].
- Resource attributes: sensitivity classification, ownership and data tags.
- Action and environment attributes: requested operation, time, device posture and network context.
- Policy evaluation: a decision point applies [[Access Control Policy]] logic to produce an authorisation result.
- Auditability: every decision and its attribute inputs are recorded through [[Audit Logging]].
- ### Mechanisms
- Policy decision and enforcement points separate the rule evaluation from the gate that allows or blocks the request.
- Attribute providers supply trusted, freshly resolved values, depending on prior [[Authentication]].
- Policy languages express boolean combinations of attribute predicates, implementing [[Authorization]].
- Continuous evaluation re-checks attributes per request, enabling [[Data Minimisation]] and least-exposure access.
- ### Applications
- Cross-organisation data sharing where role models would explode in number.
- Regulated environments needing fine-grained, attribute-conditioned access for [[Compliance Monitoring]].
- Zero-trust deployments that gate every request on device and context attributes.
- Cloud platforms enforcing per-resource tags as part of broad [[Cybersecurity]] controls.
- ### Relationships
- hasPart:: [[Access Control Policy]]
- hasPart:: [[Authorization]]
- partOf:: [[Identity and Access Management]]
- requires:: [[Authentication]]
- enables:: [[Zero Trust Architecture]]
- enables:: [[Data Minimisation]]
- dependsOn:: [[Identity and Access Management]]
- implements:: [[Authorization]]
- uses:: [[Access Control Policy]]
- supports:: [[Compliance Monitoring]]
- contrastsWith:: [[Role-Based Access Control]]
- relatedTo:: [[Audit Logging]]
- relatedTo:: [[Cybersecurity]]
- bridgesTo:: [[Zero Trust Architecture]]
- ### Provenance
- updated:: 2026-06-15
- inferenceRule:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
