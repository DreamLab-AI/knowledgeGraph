public:: true

# Identity Resolution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:identity-resolution",
  "@type": "Page",
  "vc:slug": "identity-resolution",
  "title": "Identity Resolution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-resolution",
  "@type": "Class",
  "label": "Identity Resolution",
  "definition": "Identity resolution is the process of determining that multiple data records, identifiers, or signals across different systems refer to the same real-world entity — whether a person, organisation, or device — and consolidating them into a unified, persistent representation. It combines probabilistic and deterministic matching algorithms, data enrichment, and graph-linking to resolve fragmented identities across first-party, second-party, and third-party data sources.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:entity-resolution",
    "label": "Entity Resolution"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:probabilistic-matching",
        "label": "Probabilistic Matching"
      },
      {
        "@id": "urn:ngm:class:identity-graph",
        "label": "Identity Graph"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:customer-data-platform",
        "label": "Customer Data Platform"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-deduplication",
        "label": "Data Deduplication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:personalisation",
        "label": "Personalisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:audience-segmentation",
        "label": "Audience Segmentation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-did",
        "label": "W3C Decentralized Identifiers"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:anonymous-credential",
        "label": "Anonymous Credential"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy-preserving-analytics",
        "label": "Privacy Preserving Analytics"
      },
      {
        "@id": "urn:ngm:class:data-clean-room",
        "label": "Data Clean Room"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:entity-matching",
      "label": "Entity Matching"
    },
    {
      "@id": "urn:ngm:class:record-deduplication",
      "label": "Record Deduplication"
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
  - [[Identity Resolution]] is a specialisation of [[Entity Resolution]] that links disparate digital identifiers — cookies, email hashes, device IDs, account numbers — into a coherent [[Identity Graph]], enabling organisations to recognise returning users across channels while managing [[Data Deduplication]] and privacy constraints.

- ### Relationships
  - Identity Resolution feeds into [[Master Data Management]] (golden-record creation) and [[Customer Data Platform]]s (unified customer profiles). It depends on [[Data Deduplication]] algorithms to merge duplicate records. The output [[Identity Graph]] enables cross-channel analytics and personalisation. [[Decentralized Identity]] frameworks (DIDs, verifiable credentials) offer a privacy-preserving alternative paradigm, intersecting with [[Privacy-Preserving Analytics]] techniques.

- ### Content
  - Identity resolution as an enterprise practice emerged from direct marketing in the 1990s, when data brokers linked names and postal addresses across catalogue lists using surname-plus-address matching. The digital advertising ecosystem accelerated its sophistication dramatically: third-party cookies, device fingerprinting, and cross-site tracking created persistent identity graphs across billions of web sessions. Companies such as Acxiom, Experian, and LiveRamp built commercial identity resolution platforms connecting online and offline datasets at consumer scale. The discipline formalized around probabilistic record linkage theory (Fellegi-Sunter, 1969) adapted to real-time digital contexts.
  - Modern identity resolution operates in two modes. Deterministic resolution uses exact matches on strong identifiers — SHA-256 hashed email addresses, phone numbers, or social login tokens — to link records with near-certainty. Probabilistic resolution scores candidate pairs on weighted combinations of weaker signals: name tokens, device attributes, IP subnets, behavioural patterns, and temporal proximity. Machine learning models (gradient-boosted trees, Siamese neural networks) are trained on labelled identity pairs to optimise matching thresholds. The resulting identity graph is a property graph where nodes are identifiers and edges carry match confidence scores; connected components represent a single resolved entity. Real-time resolution pipelines process identity events at sub-10 ms latency to enable live personalisation.
  - Identity resolution matters across advertising, fraud prevention, healthcare, and security. Advertising platforms use it to measure cross-device campaign reach and frequency cap without double-counting. Banks and fintechs use it to detect synthetic identity fraud — where bad actors blend real and fabricated credentials — by catching statistical anomalies in how an identity's components co-occur across time. Healthcare networks use it to link patient records across hospitals and insurers, preventing duplicate records that lead to medical errors. Cybersecurity teams use it to correlate attacker indicators across incidents, attributing campaigns to threat actors.
  - The 2024–2025 landscape is shaped by the deprecation of third-party cookies in Chrome (rolled out mid-2024), the growth of privacy-enhancing technologies, and tightening regulation under GDPR, CPRA, and India's DPDP Act. Identity resolution vendors are pivoting to privacy-preserving approaches: clean rooms (where parties match hashed records without sharing raw data), universal IDs (such as UID2.0 and RampID based on consented email hashes), and on-device identity graph computation. Decentralised identity frameworks using W3C DIDs and Verifiable Credentials are positioned as a user-controlled alternative where individuals hold their own identity assertions rather than being passively resolved by data brokers.
