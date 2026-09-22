public:: true

# Data Breach Notification
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-breach-notification", "@type":"Page", "title":"Data Breach Notification", "vc:slug":"data-breach-notification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-breach-notification",
  "@type":"Class",
  "label":"Data Breach Notification",
  "definition":"Data breach notification is the legal and operational obligation to inform supervisory authorities and, where there is a high risk, affected individuals after a breach of personal data. Frameworks such as the UK and EU GDPR require controllers to report qualifying breaches to the regulator without undue delay, typically within seventy-two hours of becoming aware, and to document the breach regardless of whether it is reportable. The duty turns an internal security incident into a regulated disclosure event, with timing, content and assessment of risk all prescribed by law.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-protection-law","label":"Data Protection Law"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-protection-law","label":"Data Protection Law"},{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
    "requires":[{"@id":"urn:ngm:class:incident-response","label":"Incident Response"},{"@id":"urn:ngm:class:audit-trail","label":"Audit Trail"}],
    "uses":[{"@id":"urn:ngm:class:incident-response","label":"Incident Response"},{"@id":"urn:ngm:class:audit-trail","label":"Audit Trail"}],
    "supports":[{"@id":"urn:ngm:class:privacy","label":"Privacy"},{"@id":"urn:ngm:class:data-protection","label":"Data Protection"}],
    "dependsOn":[{"@id":"urn:ngm:class:supervisory-authority","label":"Supervisory Authority"}],
    "standardizedBy":[{"@id":"urn:ngm:class:gdpr","label":"GDPR"}],
    "implements":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
    "relatedTo":[{"@id":"urn:ngm:class:gdpr","label":"GDPR"},{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"},{"@id":"urn:ngm:class:privacy","label":"Privacy"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Data Breach Notification]] is the duty under [[Data Protection Law]] to disclose qualifying personal-data breaches to regulators and, where warranted, to affected people.
  - Under [[GDPR]] the controller must notify the [[Supervisory Authority]] without undue delay, generally within seventy-two hours.
  - It connects [[Incident Response]] and [[Cybersecurity]] practice to formal [[Regulatory Compliance]].
- ### Overview
  - A security incident becomes a notifiable event once personal data is compromised in a way that risks individuals' rights and freedoms.
  - Controllers must assess severity quickly, decide whether the regulator and data subjects must be told, and act within statutory deadlines.
  - All breaches must be documented internally even when they do not meet the reporting threshold, creating an auditable record.
  - Failure to notify correctly is itself an enforcement risk, often weighed alongside the underlying breach.
- ### Key aspects
  - Trigger and threshold: a personal-data breach causing risk to individuals starts the clock.
  - Timing: notification to the authority without undue delay, with a commonly cited seventy-two-hour benchmark.
  - Content: nature of the breach, categories and approximate numbers of records, likely consequences and remedial measures.
  - Individual notice: direct communication to affected people when the risk to their rights is high.
- ### Applications
  - Enterprise privacy and security programmes integrating breach playbooks into incident response.
  - Regulatory reporting workflows that route confirmed breaches to legal and compliance teams.
  - Vendor and processor contracts mandating prompt breach reporting up the chain.
  - Auditing and governance, where breach registers demonstrate accountability.
- ### Relationships
  - partOf:: [[Data Protection Law]]
  - partOf:: [[Regulatory Compliance]]
  - requires:: [[Incident Response]]
  - requires:: [[Audit Trail]]
  - uses:: [[Incident Response]]
  - supports:: [[Privacy]]
  - supports:: [[Data Protection]]
  - dependsOn:: [[Supervisory Authority]]
  - standardizedBy:: [[GDPR]]
  - relatedTo:: [[Cybersecurity]]
  - bridgesTo:: [[Cybersecurity]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
