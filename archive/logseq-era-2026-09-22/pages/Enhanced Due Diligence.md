public:: true

# Enhanced Due Diligence
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:enhanced-due-diligence", "@type":"Page", "title":"Enhanced Due Diligence", "vc:slug":"enhanced-due-diligence", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:enhanced-due-diligence",
  "@type":"Class",
  "label":"Enhanced Due Diligence",
  "definition":"Enhanced due diligence (EDD) is a heightened level of customer scrutiny applied by regulated institutions to relationships and transactions that present elevated money-laundering, terrorist-financing, or sanctions risk. Going beyond standard customer due diligence, it requires deeper verification of identity and beneficial ownership, investigation of source of funds and wealth, and ongoing intensified monitoring. EDD is mandated for higher-risk categories such as politically exposed persons, customers in high-risk jurisdictions, and complex or unusually large transactions. It is a cornerstone of the risk-based approach embedded in anti-money-laundering and know-your-customer regulatory regimes.",
  "domain":"finance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:customer-due-diligence","label":"Customer Due Diligence"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:risk-assessment","label":"Risk Assessment"},
      {"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:customer-due-diligence","label":"Customer Due Diligence"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:risk-assessment","label":"Risk Assessment"},
      {"@id":"urn:ngm:class:sanctions-screening","label":"Sanctions Screening"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:risk-based-approach","label":"Risk-Based Approach"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:transaction-monitoring","label":"Transaction Monitoring"},
      {"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:aml","label":"AML"},
      {"@id":"urn:ngm:class:kyc","label":"KYC"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:compliance","label":"Compliance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:sanctions-screening","label":"Sanctions Screening"},
      {"@id":"urn:ngm:class:transaction-monitoring","label":"Transaction Monitoring"},
      {"@id":"urn:ngm:class:risk-based-approach","label":"Risk-Based Approach"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Enhanced due diligence is the heightened scrutiny that regulated firms apply to higher-risk customers and transactions, going beyond standard [[Customer Due Diligence]]. It is a pillar of the [[Risk-Based Approach]] in [[AML]] and [[KYC]] regimes.
- It deepens identity and ownership verification, probes source of funds, and intensifies ongoing monitoring.
- ### Overview
- When a relationship presents elevated money-laundering, terrorist-financing, or sanctions risk, baseline checks are insufficient, and regulators require firms to escalate to enhanced measures proportionate to the risk.
- EDD examines beneficial ownership in depth, establishes the legitimacy of source of funds and wealth, and applies closer, more frequent [[Transaction Monitoring]].
- It is triggered by defined risk categories rather than applied uniformly, reflecting the proportionality at the heart of the risk-based approach.
- ### Key aspects
- Triggers: politically exposed persons, high-risk jurisdictions, complex or large transactions.
- Source-of-funds and source-of-wealth investigation.
- Senior-management approval for higher-risk relationships.
- Intensified ongoing monitoring and periodic review.
- ### Applications
- Onboarding high-net-worth and politically exposed clients.
- Correspondent banking and cross-border relationships.
- High-value or unusual transaction review.
- Sanctions and adverse-media screening within [[Compliance]] programmes.
- ### Relationships
- subClassOf:: [[Customer Due Diligence]]
- hasPart:: [[Risk Assessment]]
- hasPart:: [[Identity Verification]]
- contrastsWith:: [[Customer Due Diligence]]
- requires:: [[Sanctions Screening]]
- dependsOn:: [[Risk-Based Approach]]
- uses:: [[Transaction Monitoring]]
- supports:: [[AML]]
- supports:: [[KYC]]
- implements:: [[Regulatory Compliance]]
- partOf:: [[Compliance]]
- relatedTo:: [[Sanctions Screening]]
- ### Provenance
- updated:: 2026-06-15
