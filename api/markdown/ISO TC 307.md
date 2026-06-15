public:: true
alias:: ISO TC307, ISO/TC 307

# iso tc 307
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f0419131baf3a179ea14d21385081b481ba6d2d502b2c2bca13c5c92a245a9ba",
  "@type": "Page",
  "vc:slug": "iso-tc-307",
  "title": "iso tc 307",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-tc-307",
  "@type": "Class",
  "label": "ISO TC 307",
  "definition": "ISO/TC 307 is the ISO Technical Committee established in 2016 with Australia as secretariat, mandated to develop international standards for blockchain and distributed ledger technologies (DLT). Its normative outputs span terminology (ISO 22739), reference architecture, security and privacy frameworks, smart contract interaction models, digital identity standards, and governance structures for decentralised systems. The committee coordinates with ISO/TC 68 (Financial Services), ISO/IEC JTC 1/SC 27 (Cryptographic Security), W3C, ITU-T SG17, and IEEE to ensure interoperability standards and shared vocabulary underpin regulatory, procurement, and legislative language across jurisdictions. It operates through specialised working groups covering foundations, security, smart contracts, data governance, DLT governance, and interoperability.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:security-framework",
        "label": "DLT Security Framework"
      },
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      },
      {
        "@id": "urn:ngm:class:cross-chain-communication",
        "label": "Cross-Chain Communication"
      },
      {
        "@id": "urn:ngm:class:digital-identity-standards",
        "label": "Digital Identity Standards"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Blockchain"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "W3C Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:hyperledger-fabric",
        "label": "Hyperledger Fabric"
      },
      {
        "@id": "urn:ngm:class:cryptographic-security",
        "label": "Cryptographic Security"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:iso-technical-committee-307",
      "label": "ISO Technical Committee 307"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - ISO/TC 307 is the [[International Organization for Standardization]] Technical Committee mandated to develop international standards for [[Blockchain]] and [[Distributed Ledger Technology]]. Established in 2016 following an ISO General Assembly resolution, it produces normative vocabulary, reference architectures, security frameworks, and governance guidelines. Its flagship standard, ISO 22739, provides authoritative definitions that underpin regulatory language, procurement specifications, and legislation referencing [[DLT]] terms such as "distributed ledger", "smart contract", "node", and [[Consensus Mechanism]]. The committee's outputs enable [[Blockchain Interoperability]] and provide a standards bridge between national regulatory authorities and the open technical community.

- ### Overview
  - ISO/TC 307 was created in response to the rapid proliferation of [[Blockchain]] and [[Distributed Ledger Technology]] deployments that lacked shared terminology and compatible architectures. Without normalised vocabulary, regulators, procurement bodies, and technologists risked working at cross-purposes when drafting laws or tender specifications referencing DLT.
  - Australia (Standards Australia) holds the Secretariat. Membership spans over 50 participating and observing national bodies, including BSI (UK), DIN (Germany), ANSI (US), and equivalents across Asia-Pacific.
  - The committee coordinates formally with:
    - [[ISO TC 68]] (Financial Services) — for [[Central Bank Digital Currency]], payment rails, and tokenisation standards.
    - [[ISO IEC JTC 1 SC 27]] — for [[Cryptographic Security]] and privacy-by-design alignment.
    - ITU-T SG17 — for telecommunications-context DLT security.
    - W3C — for [[W3C Decentralised Identifier]] (DID) alignment with ISO identity standards.
    - IEEE — for technical specification cross-referencing.
  - Working groups structure the scope into distinct subject domains with overlapping liaisons.

- ### Key Components
  - #### Working Groups
    - **WG 1 — Foundations**: Terminology and concepts (ISO 22739); provides the normative [[Blockchain Terminology]] base used by all subsequent standards.
    - **WG 2 — Security, Privacy, and Identity**: Develops the [[DLT Security Framework]], covering threat modelling, key management, and [[Digital Identity Standards]] applicable to permissioned networks.
    - **WG 3 — Smart Contracts and Their Applications**: Produces [[Smart Contract Standards]], including ISO/TR 23455, which analyses [[Smart Contract]] interaction patterns, legal recognition challenges, and formal verification requirements.
    - **WG 4 — Data Governance**: Addresses [[Data Governance]] for on-chain and off-chain data, provenance records, and archival integrity (liaising with ISO/TC 46).
    - **WG 5 — Blockchain and DLT Governance**: Develops the [[Blockchain Governance Framework]], covering role-based control models, change management, and dispute resolution mechanisms for [[Permissioned Blockchain]] and [[Permissionless Blockchain]] environments.
    - **WG 7 — Interoperability**: Specifies [[Cross-Chain Communication]] protocols and [[Blockchain Interoperability]] requirements, addressing data exchange between [[Hyperledger Fabric]], Ethereum, and R3 Corda networks.
  - #### Key Published Standards
    - **ISO 22739:2020** — Blockchain and DLT: Vocabulary. The normative definitional standard for [[Blockchain Terminology]], updated iteratively.
    - **ISO/TR 23455:2019** — Overview of and interactions between smart contracts in [[Blockchain]] and DLT systems.
    - **ISO/TR 23576** — Security of digital asset custodians; addresses key management and custody protocols relevant to [[Cryptographic Security]].
    - **ISO 23257** — Reference Architecture for [[Distributed Ledger Technology]], providing a layered conceptual model for system designers.
    - **ISO/AWI 24354** — Blockchain-based trade facilitation, relevant to [[Supply Chain Traceability]].
    - **ISO/AWI 23644** — Overview of trust anchors for DLT, bridging to [[Decentralised Governance]] models.
  - #### Governance Mechanisms
    - Uses ISO's consensus-based [[Decentralised Governance]] process: national body ballots, public comment periods, and technical resolution through WG meetings.
    - Standards progress through stages: Preliminary Work Item (PWI) → New Work Item Proposal (NWIP) → Working Draft (WD) → Committee Draft (CD) → Draft International Standard (DIS) → International Standard (IS).
    - [[Blockchain Governance]] within TC 307 itself models the transparency principles it mandates in its outputs.

- ### Applications and Use Cases
  - #### Regulatory and Legislative Reference
    - Governments and regulators in the EU (MiCA framework), UK (FCA DLT guidance), and Asia-Pacific cite ISO 22739 vocabulary when drafting [[Regulatory Compliance]] requirements, ensuring shared semantic grounding across jurisdictions.
    - Procurement authorities reference ISO/TC 307 standards in tender specifications for [[Permissioned Blockchain]] infrastructure procurements (e.g., public health record systems, land registry).
  - #### Financial Services
    - ISO/TC 307 liaises with [[ISO TC 68]] for tokenisation, [[Central Bank Digital Currency]] (CBDC) interoperability, and payment DLT standards, enabling regulatory-grade [[Blockchain]] deployment in banking infrastructure.
    - Digital asset custodians use ISO/TR 23576 for security frameworks covering private key management and custody protocols.
  - #### Supply Chain and Trade
    - ISO/AWI 24354 targets blockchain-based trade documentation, directly enabling [[Supply Chain Traceability]] for goods crossing customs jurisdictions.
    - Traceability systems in pharmaceuticals, food safety, and luxury goods leverage the normative vocabulary to claim standards compliance.
  - #### Identity and Privacy
    - [[Digital Identity Standards]] developed by WG 2 align with W3C DID specifications, enabling self-sovereign identity systems to claim dual ISO and W3C conformance.
    - The privacy framework addresses GDPR tension with blockchain immutability, providing normative guidance on data-minimisation architectures.
  - #### Smart Contract Formalisation
    - Enterprises deploying [[Smart Contract]] systems (e.g., securities settlement, insurance parametric triggers) reference ISO/TR 23455 to justify legal recognition claims and formal specification requirements.

- ### Relationships
  - hasPart:: [[Blockchain Terminology]]
  - hasPart:: [[Smart Contract Standards]]
  - hasPart:: [[DLT Security Framework]]
  - hasPart:: [[Blockchain Governance Framework]]
  - enables:: [[Distributed Ledger Technology]]
  - enables:: [[Blockchain Interoperability]]
  - enables:: [[Cross-Chain Communication]]
  - enables:: [[Digital Identity Standards]]
  - standardizedBy:: [[International Organization for Standardization]]
  - implements:: [[Blockchain Governance]]
  - implements:: [[Consensus Mechanism]]
  - implements:: [[Decentralised Governance]]
  - supports:: [[Smart Contract]]
  - supports:: [[Permissioned Blockchain]]
  - supports:: [[Permissionless Blockchain]]
  - supports:: [[Central Bank Digital Currency]]
  - relatedTo:: [[Blockchain]]
  - relatedTo:: [[W3C Decentralised Identifier]]
  - relatedTo:: [[Hyperledger Fabric]]
  - relatedTo:: [[Cryptographic Security]]
  - bridges-to:: [[Data Governance]]
  - bridges-to:: [[Regulatory Compliance]]
  - bridges-to:: [[Supply Chain Traceability]]

- ### Standards and Context
  - ISO/TC 307 sits within the ISO Technical Management Board's portfolio alongside over 300 other technical committees. Its mandate specifically excludes application-layer software development, focusing instead on normative vocabulary and interoperability frameworks.
  - Adjacent standards bodies with overlapping scope:
    - **ETSI PDL** (Permissioned Distributed Ledgers) — European telecommunications standards for enterprise DLT.
    - **IEEE Blockchain Initiative** — technical standards for energy and IoT blockchain applications.
    - **W3C DID Working Group** — decentralised identifier specifications that TC 307 WG 2 formally liaises with.
    - **IETF** — internet protocol standards (transport, security) that underpin DLT network layers.
  - The existence of ISO/TC 307 reflects a broader pattern in which international standards bodies address emerging [[Distributed Systems]] technologies: convening expert consensus to produce vendor-neutral, jurisdiction-agnostic reference documents that lower the regulatory and procurement barrier for adoption.
  - Key ISO/TC 307 liaison categories:
    - Internal ISO liaisons: TC 46 (archival), TC 68 (finance), TC 176 (quality management for DLT processes)
    - External liaisons: W3C, ITU, IEEE, UN/CEFACT (trade facilitation), BIS (Bank for International Settlements)
  - The committee's work directly feeds into [[Regulatory Compliance]] instruments: MiCA (EU Markets in Crypto-Assets), the UK Digital Securities Sandbox, Singapore MAS DLT regulatory guidelines, and comparable instruments in Japan, Australia, and UAE.

- ### Provenance
  - sources:: ISO/TC 307 official scope and programme of work; ISO 22739:2020 standard; ISO/TR 23455:2019; publicly available TC 307 working group listings
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
