public:: true

# Personal Data
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:personal-data", "@type":"Page", "title":"Personal Data", "vc:slug":"personal-data", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:personal-data",
  "@type":"Class",
  "label":"Personal Data",
  "definition":"Personal data is any information relating to an identified or identifiable natural person, known as the data subject. Under data protection regimes such as the GDPR, identifiability can be direct (a name or identification number) or indirect (factors specific to a person's physical, economic, cultural or social identity). Special categories such as health, biometric or political data attract heightened protection. The concept anchors most privacy and data governance obligations, determining when processing rules, consent requirements and individual rights apply.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-governance","label":"Data Governance"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-protection","label":"Data Protection"}],
    "requires":[{"@id":"urn:ngm:class:consent-management","label":"Consent Management"}],
    "enables":[{"@id":"urn:ngm:class:personal-data-store","label":"Personal Data Store"}],
    "dependsOn":[{"@id":"urn:ngm:class:privacy","label":"Privacy"},{"@id":"urn:ngm:class:gdpr","label":"GDPR"}],
    "standardizedBy":[{"@id":"urn:ngm:class:gdpr","label":"GDPR"}],
    "uses":[{"@id":"urn:ngm:class:pseudonymisation","label":"Pseudonymisation"},{"@id":"urn:ngm:class:anonymisation","label":"Anonymisation"}],
    "supports":[{"@id":"urn:ngm:class:data-sovereignty","label":"Data Sovereignty"}],
    "bridgesTo":[{"@id":"urn:ngm:class:identity","label":"Identity"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-privacy","label":"Data Privacy"},{"@id":"urn:ngm:class:data-breach","label":"Data Breach"},{"@id":"urn:ngm:class:right-to-be-forgotten","label":"Right to be Forgotten"},{"@id":"urn:ngm:class:surveillance","label":"Surveillance"}],
    "contrastsWith":[{"@id":"urn:ngm:class:anonymisation","label":"Anonymisation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Personal data is any information relating to an identified or identifiable natural person. It is the foundational subject of [[Data Governance]], [[Data Protection]], [[Privacy]] and the [[GDPR]], and connects to [[Identity]] and [[Data Sovereignty]].
- ### Overview
- The definition is deliberately broad: identifiers, online identifiers, location data and factors specific to a person's identity all count.
- Special categories of personal data (health, biometric, genetic, political, religious) are subject to stricter conditions for processing.
- Whether information is personal data determines whether data protection law applies at all, making the concept a legal threshold rather than a technical one.
- ### Key aspects
- Identifiability: direct or indirect linkage to a natural person, assessed against means reasonably likely to be used.
- Data subject rights: access, rectification, erasure ([[Right to be Forgotten]]), portability and objection.
- Lawful basis: processing requires a valid ground such as consent, contract or legitimate interest.
- Risk states: a [[Data Breach]] involving personal data triggers notification duties.
- ### Mechanisms
- [[Consent Management]] records and governs the lawful basis for processing.
- [[Pseudonymisation]] reduces linkability while keeping data within scope; [[Anonymisation]] removes data from scope entirely.
- [[Personal Data Store]] architectures give individuals custody over their own data.
- ### Applications
- Regulatory compliance programmes and privacy impact assessments.
- Consent and preference platforms for marketing and analytics.
- Self-sovereign and decentralised identity systems built on [[Identity]] and [[Data Sovereignty]].
- Surveillance governance and oversight of monitoring practices.
- ### Relationships
- partOf:: [[Data Protection]]
- requires:: [[Consent Management]]
- enables:: [[Personal Data Store]]
- dependsOn:: [[Privacy]]
- dependsOn:: [[GDPR]]
- standardizedBy:: [[GDPR]]
- uses:: [[Pseudonymisation]]
- uses:: [[Anonymisation]]
- supports:: [[Data Sovereignty]]
- bridgesTo:: [[Identity]]
- relatedTo:: [[Data Privacy]]
- relatedTo:: [[Data Breach]]
- relatedTo:: [[Right to be Forgotten]]
- relatedTo:: [[Surveillance]]
- contrastsWith:: [[Anonymisation]]
- ### Provenance
- updated:: 2026-06-15
