public:: true

# Human Rights Law

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:human-rights-law", "@type":"Page", "title":"Human Rights Law", "vc:slug":"human-rights-law", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:human-rights-law",
  "@type":"Class",
  "label":"Human Rights Law",
  "definition":"Human rights law is the body of international and domestic legal instruments that define and protect the fundamental freedoms and entitlements owed to all individuals. It encompasses treaties, conventions, and constitutional provisions covering rights such as privacy, non-discrimination, freedom of expression, and due process. In the context of artificial intelligence, human rights law increasingly shapes obligations around algorithmic fairness, surveillance, and the protection of personal data.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "supports":[
      {"@id":"urn:ngm:class:fundamental-rights","label":"Fundamental Rights"},
      {"@id":"urn:ngm:class:digital-rights","label":"Digital Rights"},
      {"@id":"urn:ngm:class:data-protection","label":"Data Protection"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:algorithmic-accountability","label":"Algorithmic Accountability"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:fundamental-rights","label":"Fundamental Rights"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:ai-governance","label":"AI Governance"},
      {"@id":"urn:ngm:class:ai-ethics","label":"AI Ethics"},
      {"@id":"urn:ngm:class:privacy-law","label":"Privacy Law"},
      {"@id":"urn:ngm:class:gdpr","label":"GDPR"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:surveillance","label":"Surveillance"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:responsible-ai","label":"Responsible AI"},
      {"@id":"urn:ngm:class:bias-mitigation-techniques","label":"Bias Mitigation Techniques"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Human rights law codifies the fundamental freedoms owed to all individuals through treaties, conventions, and constitutional protections. It is a branch of [[Governance]] that upholds [[Fundamental Rights]], [[Digital Rights]], and [[Data Protection]].
- In AI contexts it grounds obligations around fairness, privacy, and protection from arbitrary or opaque automated decisions.
- ### Overview
- Modern human rights law spans international instruments such as the Universal Declaration of Human Rights and regional conventions, alongside national constitutions and statutes. These create binding and persuasive obligations on states and, increasingly, expectations on private actors.
- The rise of automated decision-making and large-scale data processing has brought human rights law into direct contact with technology. Rights to privacy, non-discrimination, and effective remedy inform how AI systems may be designed, deployed, and audited.
- Compliance is operationalised through impact assessments, transparency requirements, and accountability mechanisms that connect legal principles to concrete engineering and governance practices.
- ### Key aspects
- Privacy and data protection: limits on collection, processing, and surveillance.
- Non-discrimination: protection against biased or unequal algorithmic treatment.
- Due process and remedy: rights to explanation, contestation, and redress.
- Freedom of expression: protections relevant to content moderation and platform governance.
- ### Applications
- Human rights impact assessments for AI systems in the public sector.
- Constraints on biometric surveillance and facial recognition.
- Frameworks underpinning data-protection regimes such as the GDPR.
- Accountability standards for high-risk automated decisions.
- ### Relationships
- partOf:: [[Governance]]
- supports:: [[Fundamental Rights]]
- supports:: [[Digital Rights]]
- supports:: [[Data Protection]]
- requires:: [[Regulatory Compliance]]
- enables:: [[Algorithmic Accountability]]
- implements:: [[Fundamental Rights]]
- relatedTo:: [[AI Governance]]
- relatedTo:: [[AI Ethics]]
- relatedTo:: [[Privacy Law]]
- relatedTo:: [[GDPR]]
- contrastsWith:: [[Surveillance]]
- bridgesTo:: [[Responsible AI]]
- bridgesTo:: [[Bias Mitigation Techniques]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
