public:: true

# EBA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eba",
  "@type": "Page",
  "vc:slug": "eba",
  "title": "EBA",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eba",
  "@type": "Class",
  "label": "EBA",
  "definition": "The European Banking Authority (EBA) is an independent EU regulatory agency established in 2011 to ensure consistent prudential regulation and supervision across the European banking sector. It develops binding technical standards and guidelines that national supervisors must implement, conducts EU-wide stress tests to assess banking system resilience, and plays a central role in developing anti-money laundering supervisory frameworks. The EBA's remit has expanded into digital finance, including technical standards for crypto-asset service providers under the MiCA Regulation and guidelines on ICT risk management.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:regulatory-framework", "label": "Regulatory Framework"},
      {"@id": "urn:ngm:class:regulatory-standards", "label": "Regulatory Standards"},
      {"@id": "urn:ngm:class:european-commission", "label": "European Commission"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"},
      {"@id": "urn:ngm:class:systemic-risk", "label": "Systemic Risk"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:mi-ca-regulation", "label": "MiCA Regulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[EBA]] (European Banking Authority) is an independent EU regulatory agency that develops binding technical standards for prudential banking supervision, conducts system-wide stress tests, and leads the development of anti-money laundering frameworks, with growing responsibilities under [[MiCA Regulation]] for crypto-asset service providers.
- ### Relationships
  - The EBA operates within the [[Financial Regulation]] ecosystem and works alongside the [[European Commission]] to produce [[Regulatory Standards]] that national supervisors must transpose. Its outputs directly enable [[Regulatory Compliance]] and [[AML KYC Compliance]] across EU member states. By identifying and monitoring [[Systemic Risk]] through stress-testing programmes, it supports broader [[Financial Stability]] goals. Its expanding digital finance mandate increasingly intersects with [[MiCA Regulation]] and [[Regulatory Framework]] design for tokenised assets.
- ### Content
  - The European Banking Authority was created as part of the post-2008 financial crisis regulatory reform that sought to address the fragmented supervisory landscape across EU member states. Prior to its establishment, 27 national supervisors operated under loosely coordinated committees, producing divergent interpretations of EU banking directives. The EBA's mandate to produce directly applicable binding technical standards was a significant step towards genuine single-market supervision.

  - The EBA's core workstreams cover capital and liquidity requirements (implementing Basel III/IV standards into EU law), supervisory convergence (publishing guidelines that bind national competent authorities), and consumer protection. Its annual EU-wide stress-testing exercise is a major market event, assessing whether banks hold sufficient capital to withstand adverse macroeconomic scenarios and informing [[Financial Stability]] assessments by the European Systemic Risk Board.

  - Anti-money laundering has become an increasingly prominent part of the EBA's mandate following several high-profile failures at EU banks. The Authority now maintains a central database of money laundering and terrorist financing risks, issues guidelines on [[AML KYC Compliance]] practices, and has taken breach-of-union-law investigation powers over national supervisors who fail to enforce standards. This positions the EBA as a de facto supranational AML coordinator pending the establishment of a dedicated EU AML authority.

  - The digital finance agenda has drawn the EBA into emerging technology governance. Under the [[MiCA Regulation]] for crypto assets and the DORA regulation for digital operational resilience, the EBA is developing technical standards that determine how crypto-asset issuers and service providers must manage risks, disclose information, and maintain capital. These responsibilities make it a key institutional node connecting traditional [[Financial Regulation]] with the evolving landscape of blockchain-based financial services.
