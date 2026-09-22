public:: true

# Data Protection Impact Assessment
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-protection-impact-assessment", "@type":"Page", "title":"Data Protection Impact Assessment", "vc:slug":"data-protection-impact-assessment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-protection-impact-assessment",
  "@type":"Class",
  "label":"Data Protection Impact Assessment",
  "definition":"A Data Protection Impact Assessment is a structured process for identifying, evaluating and mitigating the risks that a planned data-processing activity poses to the rights and freedoms of individuals. It documents the nature, scope, context and purposes of processing, assesses necessity and proportionality, and records measures that reduce identified risks. Under the General Data Protection Regulation it is mandatory where processing is likely to result in high risk, such as large-scale profiling or use of sensitive data. It is a core accountability instrument linking privacy-by-design to demonstrable compliance.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:risk-assessment","label":"Risk Assessment"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:risk-analysis","label":"Risk Analysis"},
      {"@id":"urn:ngm:class:mitigation-measures","label":"Mitigation Measures"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:data-processing","label":"Data Processing"},
      {"@id":"urn:ngm:class:gdpr","label":"GDPR"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:data-mapping","label":"Data Mapping"},
      {"@id":"urn:ngm:class:legal-basis","label":"Legal Basis"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:data-governance","label":"Data Governance"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:compliance","label":"Compliance"},
      {"@id":"urn:ngm:class:accountability","label":"Accountability"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:privacy-by-design","label":"Privacy by Design"},
      {"@id":"urn:ngm:class:privacy","label":"Privacy"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:data-privacy","label":"Data Privacy"},
      {"@id":"urn:ngm:class:data-protection-law","label":"Data Protection Law"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:privacy-impact-assessment","label":"Privacy Impact Assessment"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:dpia","label":"DPIA"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A Data Protection Impact Assessment is a structured form of [[Risk Assessment]] that evaluates the privacy risks of a [[Data Processing]] activity, mandated by [[GDPR]] for high-risk processing and supporting [[Compliance]] and [[Accountability]].

- ### Overview
  - A DPIA helps organisations identify and minimise the data-protection risks of a project before personal data is processed. It documents what data is processed, why, how and by whom, then weighs necessity and proportionality against the rights of the people affected.
  - It is both a legal obligation under the General Data Protection Regulation for high-risk processing and a practical tool for embedding privacy considerations early, where they are cheapest and most effective to address.

- ### Key aspects
  - A systematic description of the processing operations and their purposes.
  - An assessment of necessity and proportionality relative to those purposes.
  - An evaluation of the risks to the rights and freedoms of data subjects.
  - The measures envisaged to address those risks, including safeguards and security controls, and consultation with the data protection officer or supervisory authority where required.

- ### Applications
  - Large-scale processing of sensitive or special-category data.
  - Systematic profiling, automated decision-making and behavioural monitoring.
  - Deployment of new surveillance, biometric or tracking technologies.
  - Onboarding of new vendors or systems that handle personal data.

- ### Relationships
  - subClassOf:: [[Risk Assessment]]
  - hasPart:: [[Risk Analysis]]
  - hasPart:: [[Mitigation Measures]]
  - requires:: [[Data Processing]]
  - requires:: [[GDPR]]
  - dependsOn:: [[Data Mapping]]
  - dependsOn:: [[Legal Basis]]
  - uses:: [[Data Governance]]
  - supports:: [[Compliance]]
  - supports:: [[Accountability]]
  - enables:: [[Privacy by Design]]
  - enables:: [[Privacy]]
  - relatedTo:: [[Data Privacy]]
  - relatedTo:: [[Data Protection Law]]
  - contrastsWith:: [[Privacy Impact Assessment]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
