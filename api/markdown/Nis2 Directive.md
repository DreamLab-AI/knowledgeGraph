public:: true

# Nis2 Directive

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:nis2-directive", "@type":"Page", "title":"Nis2 Directive", "vc:slug":"nis2-directive", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:nis2-directive",
  "@type":"Class",
  "label":"Nis2 Directive",
  "definition":"The NIS2 Directive is European Union legislation that raises and harmonises cybersecurity requirements for essential and important entities operating critical services across member states. It expands the scope of the earlier NIS Directive, imposes risk-management and governance obligations on covered organisations, and introduces stricter incident-reporting timelines and enforcement. It is a cornerstone of EU cyber-resilience policy for sectors such as energy, transport, health, and digital infrastructure.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
  "relations":{
    "relatedTo":[{"@id":"urn:ngm:class:gdpr","label":"GDPR"},{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"},{"@id":"urn:ngm:class:network-security","label":"Network Security"}],
    "standardizedBy":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"},{"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"}],
    "requires":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:incident-response","label":"Incident Response"}],
    "enables":[{"@id":"urn:ngm:class:compliance","label":"Compliance"},{"@id":"urn:ngm:class:data-protection","label":"Data Protection"}],
    "supports":[{"@id":"urn:ngm:class:incident-management","label":"Incident Management"},{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}],
    "implements":[{"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"}],
    "dependsOn":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:network-security","label":"Network Security"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The [[Nis2 Directive]] is European Union legislation that raises and harmonises [[Cybersecurity]] requirements for essential and important entities running critical services.
- It expands the earlier NIS Directive, imposing [[Risk Management]] and governance duties and stricter incident-reporting obligations.
- It is a cornerstone of EU cyber-resilience policy and part of broader [[Regulatory Compliance]].
- ### Overview
- NIS2 is the second iteration of the EU Network and Information Security Directive. It significantly broadens the set of covered organisations, distinguishing essential entities in sectors such as energy, transport, banking, and health from important entities in other digitally dependent sectors, and removes much of the discretion member states had under the first directive.
- The directive places accountable cybersecurity obligations on management bodies, requiring documented risk-management measures covering areas like incident handling, supply-chain security, access control, and business continuity. Senior leadership can be held directly responsible, raising cybersecurity from a technical concern to a governance one.
- A central feature is its incident-reporting regime, with tiered notification timelines following the discovery of significant incidents, backed by supervisory powers and substantial penalties. NIS2 complements other EU instruments such as the GDPR for data protection, together forming a layered framework for digital resilience and accountability.
- ### Key aspects
- Expanded scope: covers more sectors and entities than the original NIS Directive.
- Management accountability: leadership bodies bear direct responsibility for cyber risk.
- Risk-management obligations: mandates documented technical and organisational measures.
- Incident reporting: tiered notification deadlines for significant incidents.
- Enforcement: supervisory powers and penalties to ensure compliance.
- ### Applications
- Driving [[Risk Management]] and [[Incident Response]] programmes in regulated entities.
- Shaping [[Incident Management]] and reporting workflows to meet notification deadlines.
- Reinforcing [[Network Security]] and supply-chain controls across critical sectors.
- Complementing [[GDPR]] and [[Data Protection]] within an overall [[Governance Framework]].
- ### Relationships
- relatedTo:: [[GDPR]]
- relatedTo:: [[Cybersecurity]]
- relatedTo:: [[Network Security]]
- standardizedBy:: [[Regulatory Compliance]]
- standardizedBy:: [[Governance Framework]]
- requires:: [[Risk Management]]
- requires:: [[Incident Response]]
- enables:: [[Compliance]]
- enables:: [[Data Protection]]
- supports:: [[Incident Management]]
- supports:: [[Cybersecurity]]
- implements:: [[Governance Framework]]
- dependsOn:: [[Risk Management]]
- bridgesTo:: [[Network Security]]
- ### Provenance
- updated:: 2026-06-15
