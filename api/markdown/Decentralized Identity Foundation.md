public:: true

# decentralized identity foundation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:840b61af8f9766471d850e4f0e4250f494d9dce4ea11c9087a55d097407ca730",
  "@type": "Page",
  "vc:slug": "decentralized-identity-foundation",
  "title": "decentralized identity foundation",
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
  "@id": "urn:ngm:class:decentralized-identity-foundation",
  "@type": "Class",
  "label": "Decentralized Identity Foundation",
  "definition": "The Decentralized Identity Foundation (DIF) is an open industry consortium founded in 2017 that develops interoperable specifications, protocols, and reference implementations for decentralised digital identity systems. It produces foundational work items including the Presentation Exchange specification, the Decentralized Web Node (DWN) protocol for identity-linked personal data storage, the DIDComm messaging protocol, and the Sidetree protocol family for scalable DID method implementations. DIF operates as a coordination layer complementing W3C standards bodies, bridging specification gaps between DID methods, verifiable credential formats, and identity wallet implementations. Its outputs are adopted in major identity frameworks including the European Union Digital Identity (EUDI) Wallet Architecture Reference Framework.",
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
        "@id": "urn:ngm:class:didcomm",
        "label": "DIDComm"
      },
      {
        "@id": "urn:ngm:class:sidetree-protocol",
        "label": "Sidetree Protocol"
      },
      {
        "@id": "urn:ngm:class:decentralized-web-node",
        "label": "Decentralized Web Node"
      },
      {
        "@id": "urn:ngm:class:presentation-exchange",
        "label": "Presentation Exchange"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "DID Core"
      },
      {
        "@id": "urn:ngm:class:w-3-c-verifiable-credentials-data-model",
        "label": "Verifiable Credentials Data Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:world-wide-web-consortium",
        "label": "World Wide Web Consortium"
      },
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:eudi-wallet",
        "label": "EUDI Wallet"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "AI Identity Verification"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dif",
      "label": "DIF"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **Decentralized Identity Foundation** (DIF) is an open industry consortium founded in 2017 that develops interoperable specifications, protocols, and reference implementations enabling [[Self Sovereign Identity]] and [[Decentralized Identifier]] ecosystems. It bridges the coordination gap between heterogeneous [[DID Method]] implementations and the growing landscape of [[Verifiable Credentials]] formats, providing lower-level protocol specifications that W3C standards reference. DIF's working groups span identity discovery, secure messaging ([[DIDComm]]), credential presentation ([[Presentation Exchange]]), personal data storage ([[Decentralized Web Node]]), and scalable DID anchoring ([[Sidetree Protocol]]). Its outputs form the practical engineering substrate upon which global [[Digital Identity]] wallets and verifiable data exchange systems are built.

- ### Overview
  - The Decentralized Identity Foundation was established to address a fundamental coordination problem: while W3C produced foundational standards for [[Decentralized Identifier]] and [[Verifiable Credentials Data Model]], no single body was developing the interoperability protocols needed to make diverse implementations work together in practice.
  - DIF operates as a pre-competitive collaboration space where identity software vendors, blockchain projects, government agencies, and standards experts contribute to shared specifications. Members include Microsoft, IBM, Consensys, Transmute, Ping Identity, and dozens of other organisations.
  - The organisation functions through topical working groups, each producing specifications and reference implementations. Outputs typically begin as DIF work items before being contributed upstream to W3C, IETF, or OpenID Foundation for formal standardisation.
  - DIF is legally structured as a non-profit under the Joint Development Foundation (Linux Foundation family), which provides intellectual property policies that enable royalty-free implementation of all DIF specifications.

- ### Key Components
  - #### Working Groups
    - **Identifiers and Discovery** — defines resolution protocols and driver registries for [[DID Document]] retrieval across heterogeneous [[DID Method]] implementations; produces the Universal Resolver reference service
    - **Claims and Credentials** — develops [[Presentation Exchange]], [[Credential Manifest]], and [[Trust Establishment]] specifications governing how [[Verifiable Credentials]] are requested, presented, and verified
    - **DID Communication (DIDComm)** — defines [[DIDComm]] v2, a transport-agnostic encrypted messaging protocol enabling secure peer-to-peer communication between identity agents using [[Cryptographic Key Management]] derived from DID documents
    - **Secure Data Storage** — produces the [[Decentralized Web Node]] (DWN) protocol, enabling identity holders to store and share personal data in a privacy-preserving, self-hosted or cloud-hosted manner with fine-grained access control
    - **Sidetree** — specifies the [[Sidetree Protocol]] family, a batching and anchoring mechanism that makes DID operations cost-efficient on [[Blockchain]] substrates; underlies ION on Bitcoin and Element on Ethereum
    - **Applied Cryptography** — explores integration of [[Zero Knowledge Proof]] schemes and selective disclosure techniques into credential presentation flows

  - #### Core Protocol Specifications
    - **Presentation Exchange** — a structured vocabulary for verifiers to express credential requirements (input descriptors) and for holders to respond with proof submissions; widely implemented in mobile wallets and enterprise verifiers
    - **DIDComm v2** — message envelope format using [[Public Key Infrastructure]] operations (ECDH key agreement, AEAD encryption) ensuring authenticity and confidentiality regardless of transport layer (HTTP, Bluetooth, NFC, WebSocket)
    - **Decentralized Web Node (DWN)** — a replicated personal data store protocol allowing identity subjects to grant selective access to data objects to specific DIDs; conceptually similar to a personal [[Data Vault]] addressable via [[Decentralized Identifier]]
    - **Universal Resolver** — an open-source driver framework and hosted service resolving any registered DID method to a compliant [[DID Document]]; acts as a global DNS-equivalent for decentralised identifiers
    - **Credential Manifest** — a specification for issuers to advertise what credentials they offer and what information applicants must provide to receive them

- ### Applications and Use Cases
  - #### Digital Identity Wallets
    - DIF specifications underpin the European Union Digital Identity ([[EUDI Wallet]]) Architecture Reference Framework (ARF), defining how citizens store, manage, and present national identity credentials using [[Verifiable Credentials]]
    - Mobile wallet applications (e.g., Microsoft Authenticator, Trinsic, Walt.id) implement [[Presentation Exchange]] to allow users to selectively disclose credential attributes to verifiers, preserving [[Privacy Preserving Computation]] principles
    - Healthcare identity systems use [[DIDComm]] for secure, auditable exchange of patient data between providers without centralised intermediaries

  - #### Enterprise and B2B Identity
    - Organisations use DIF-compliant verifiable credential exchanges for Know Your Customer (KYC) processes, supplier onboarding, and workforce identity, reducing duplicate verification costs across ecosystems
    - [[Trust Framework]] operators (governments, industry consortia) build on DIF specifications to define governance rules for credential issuers and verifiers

  - #### Web3 and Decentralised Applications
    - [[Blockchain]] projects integrate [[Sidetree Protocol]] to anchor DID operations on-chain in a scalable and cost-efficient manner, enabling millions of DIDs per blockchain transaction batch
    - [[Decentralized Finance]] platforms use DIF-based identity to introduce KYC and AML compliance without sacrificing [[Self Sovereign Identity]] principles

  - #### AI and Autonomous Agents
    - Emerging use cases apply [[DIDComm]] to establish authenticated communication channels between AI agents, linking agent actions to verifiable identities — a bridging use case between identity infrastructure and [[AI Identity Verification]] systems

- ### Relationships
  - hasPart:: [[DIDComm]]
  - hasPart:: [[Sidetree Protocol]]
  - hasPart:: [[Decentralized Web Node]]
  - hasPart:: [[Presentation Exchange]]
  - enables:: [[Verifiable Credentials]]
  - enables:: [[DID Document]]
  - enables:: [[Self Sovereign Identity]]
  - enables:: [[Decentralized Identifier]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Cryptographic Key Management]]
  - implements:: [[DID Core]]
  - implements:: [[Verifiable Credentials Data Model]]
  - supports:: [[Digital Identity]]
  - supports:: [[Privacy Preserving Computation]]
  - standardizedBy:: [[World Wide Web Consortium]]
  - standardizedBy:: [[OpenID Foundation]]
  - contrastsWith:: [[Centralised Identity]]
  - contrastsWith:: [[Federated Identity]]
  - relatedTo:: [[Blockchain]]
  - relatedTo:: [[Zero Knowledge Proof]]
  - relatedTo:: [[Trust Framework]]
  - bridges-to:: [[EUDI Wallet]]
  - bridges-to:: [[AI Identity Verification]]

- ### Standards and Context
  - DIF specifications exist in a layered relationship with other standards bodies:
    - **W3C** — produces the normative [[DID Core]] and [[Verifiable Credentials Data Model]] specifications; DIF provides implementation-layer protocols that reference these
    - **IETF** — standardises cryptographic primitives and transport protocols (e.g., JOSE, COSE, TLS) that DIF specifications depend upon; DIF contributes work items such as SD-JWT (Selective Disclosure JWT) via the OAuth working group
    - **OpenID Foundation** — produces [[OpenID Connect]] for Identity (OID4VC, OID4VP) specifications for issuing and presenting verifiable credentials over OAuth flows; DIF [[Presentation Exchange]] is referenced as the proof format language in OID4VP
    - **NIST** — guidance on [[Cryptographic Key Management]] and identity assurance levels informs DIF security considerations
    - **European Commission** — the eIDAS 2.0 regulation and EUDI Wallet ARF incorporate DIF and W3C credential standards as the technical basis for EU-wide digital identity

  - DIF maintains formal liaison relationships with W3C, IETF, and the OpenID Foundation to prevent specification fragmentation and ensure that DIF work items transition smoothly into formal international standards.

- ### Governance and Membership
  - DIF operates under Joint Development Foundation IP policies (FRAND-free licensing), ensuring all specifications can be implemented royalty-free
  - Membership tiers range from Associate (individuals) to Steering (large organisations with elevated governance rights)
  - Working groups operate with published charters, contribution agreements, and public GitHub repositories for all specification work
  - DIF coordinates with the [[Trust Over IP Foundation]] (ToIP) on higher-layer governance frameworks that sit above DIF's protocol specifications

- ### Provenance
  - sources:: DIF official site (identity.foundation), W3C DID Working Group, OpenID Foundation OID4VC specifications, EU ARF documentation
  - updated:: 2026-06-13
