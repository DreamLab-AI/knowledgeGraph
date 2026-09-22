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
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:technical-standards",
        "label": "Binding Technical Standards"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      },
      {
        "@id": "urn:ngm:class:convergence",
        "label": "Supervisory Convergence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:national-competent-authority",
        "label": "National Competent Authority"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:aml-kyc-compliance",
        "label": "AML KYC Compliance"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Supervisory Transparency"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:basel-accords",
        "label": "Basel Accords"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:capital-requirements-regulation",
        "label": "Capital Requirements Regulation"
      },
      {
        "@id": "urn:ngm:class:operational-resilience",
        "label": "Digital Operational Resilience Act"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      },
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-commission",
        "label": "European Commission"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ecb",
        "label": "ECB Banking Supervision"
      },
      {
        "@id": "urn:ngm:class:esma",
        "label": "ESMA"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:mi-ca-regulation",
        "label": "MiCA Regulation"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:european-banking-authority",
      "label": "European Banking Authority"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
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
