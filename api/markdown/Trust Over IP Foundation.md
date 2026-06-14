public:: true

# trust over ip foundation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c0e18e7e06ccc4786f5a65fccbd6fb59d0ed363fe7619e6253711f1367ad8dad",
  "@type": "Page",
  "vc:slug": "trust-over-ip-foundation",
  "title": "trust over ip foundation",
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
  "@id": "urn:ngm:class:trust-over-ip-foundation",
  "@type": "Class",
  "label": "Trust Over IP Foundation",
  "definition": "The Trust over IP (ToIP) Foundation is a Linux Foundation project established in 2020 that defines a dual-stack architecture combining cryptographic machine trust at the technical layer with human, organisational, and legal trust governance frameworks for decentralised identity. The lower technical stack encompasses Decentralised Identifiers (DIDs), Verifiable Credentials, cryptographic key management, and peer-to-peer messaging protocols across four numbered layers, whilst the upper governance stack provides trust registries, policy schemas, legal agreements, and assurance level definitions enabling parties to establish authoritative trust relationships without a central intermediary. ToIP produces the governance meta-model and interoperability specifications needed to make self-sovereign identity deployments composable and trustworthy at ecosystem scale.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:trust-registry", "label": "Trust Registry"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:decentralised-identifiers", "label": "Decentralised Identifiers"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:credential-exchange", "label": "Credential Exchange"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"},
      {"@id": "urn:ngm:class:cross-border-identity", "label": "Cross-Border Identity"},
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:w3c-did-core", "label": "W3C DID Core"},
      {"@id": "urn:ngm:class:w3c-verifiable-credentials", "label": "W3C Verifiable Credentials"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:didcomm-messaging", "label": "DIDComm Messaging"},
      {"@id": "urn:ngm:class:openid-for-verifiable-credentials", "label": "OpenID for Verifiable Credentials"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-identity-foundation", "label": "Decentralized Identity Foundation"},
      {"@id": "urn:ngm:class:w3c-credentials-community-group", "label": "W3C Credentials Community Group"},
      {"@id": "urn:ngm:class:internet-identity-workshop", "label": "Internet Identity Workshop"},
      {"@id": "urn:ngm:class:eidas-regulation", "label": "eIDAS Regulation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"},
      {"@id": "urn:ngm:class:centralised-identity-provider", "label": "Centralised Identity Provider"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:digital-wallet", "label": "Digital Wallet"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:toip-foundation", "label": "ToIP Foundation"}
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
  - The Trust over IP (ToIP) Foundation is a [[Linux Foundation]] hosted project that specifies a dual-stack architecture for [[Decentralised Identity]], separating the machine-verifiable technical trust stack — built on [[Decentralised Identifiers]], [[Verifiable Credentials]], and [[DIDComm Messaging]] — from the human and legal governance trust stack that supplies [[Trust Registry]] schemas, policy templates, assurance levels, and liability allocation frameworks. Together these two stacks allow organisations to build credential ecosystems that are simultaneously cryptographically verifiable and legally grounded without depending on a central authority. ToIP works alongside the [[Decentralized Identity Foundation]] and [[W3C Credentials Community Group]] to harmonise interoperability across the broader [[Self Sovereign Identity]] ecosystem.

- ### Overview
  - ToIP was chartered in 2020 under the [[Linux Foundation]] to address a practical gap: cryptographic protocols for [[Decentralised Identity]] had matured, but there was no consistent meta-standard telling organisations how to govern credential ecosystems — which issuers to trust, how to express assurance levels, how to handle liability, and how to link technical proof to legal authority.
  - The foundation's primary output is the **ToIP Dual Stack**, a four-layer reference architecture:
    - **Layer 1 (Public Utilities)** — [[Decentralised Identifiers]] anchored on verifiable data registries (blockchains, distributed ledgers, or web-hosted documents).
    - **Layer 2 (Peer-to-Peer Protocol)** — [[DIDComm Messaging]] enabling encrypted, authenticated channels between agents without a central server.
    - **Layer 3 (Data Exchange Protocol)** — [[Verifiable Credentials]] issuance, presentation, and revocation using [[W3C Verifiable Credentials]] and related protocols such as [[OpenID for Verifiable Credentials]].
    - **Layer 4 (Application Ecosystems)** — complete deployable ecosystems combining a technical stack instance with a [[Governance Framework]] that defines participants, rules, assurance levels, and [[Trust Registry]] entries.
  - The governance stack (layers 3 and 4) is what distinguishes ToIP from lower-level identity standards: it provides templates and schemas that governance authorities complete rather than mandating specific legal text, making the architecture reusable across healthcare, finance, education, and government contexts.
  - ToIP publishes a growing portfolio of **Governance Framework Templates**, **Trust Registry specifications**, and interoperability **Design Principles** through its working groups.

- ### Key Components
  - **ToIP Dual Stack Architecture** — the defining conceptual model separating technical trust (machine-verifiable cryptography) from governance trust (human-readable legal and policy frameworks).
  - **Governance Framework Templates** — reusable document structures that ecosystem operators fill in to define participant roles, credential schemas, liability allocations, and assurance levels; analogous to how [[RFC]] documents define protocol templates.
  - **Trust Registry Protocol** — a specification for publishing and querying authoritative lists of trusted issuers and verifiers, enabling automated [[Credential Exchange]] verification at Layer 4.
  - **[[DIDComm Messaging]]** — the ToIP-championed peer-to-peer messaging protocol for secure, private agent-to-agent communication independent of centralised message brokers.
  - **ToIP Stack Working Groups** — the foundation organises work via specialised working groups covering technology, governance, concepts and terminology, and utility foundry.
  - **Concepts and Terminology Working Group** — produces shared definitions for the SSI community including authoritative descriptions of roles such as issuer, holder, verifier, and trust anchor.
  - **Utility Foundry Working Group** — evaluates and catalogs Layer 1 utilities ([[Decentralised Identifiers|DID methods]]) for use within ToIP-aligned ecosystems.
  - **Authentic Chained Data Containers (ACDC)** — a proposed credential container format championed within ToIP working groups offering chained provenance and selective disclosure.

- ### Mechanisms
  - **Cryptographic Binding** — each identity subject controls one or more [[DID Document|DID Documents]] that bind their decentralised identifier to [[Cryptographic Key Management|cryptographic keys]], enabling verification of signatures on [[Verifiable Credentials]] without querying a central directory.
  - **Trust Chain Resolution** — a verifier resolves the issuer's DID to its public key material, checks revocation status via the issuer's registry endpoint, and validates the credential against the governance framework's accepted issuers list in the relevant [[Trust Registry]].
  - **Governance Scope Declaration** — each Layer 4 ecosystem publishes a machine-readable governance framework document declaring its DID, accepted credential schemas, assurance level definitions, and the URI of its trust registry, allowing automated policy checking.
  - **Holder Binding** — the credential holder's wallet (a [[Digital Wallet]]) stores credentials linked to their own DID, and constructs presentations that prove possession without revealing unnecessary attributes — optionally using [[Zero Knowledge Proof]] techniques for selective disclosure.
  - **Interoperability Bridges** — ToIP's architecture explicitly supports bridging to existing [[Public Key Infrastructure]] roots of trust and to regulated identity frameworks such as [[eIDAS Regulation]], enabling coexistence with legacy systems.

- ### Applications / Use Cases
  - **Healthcare Credential Wallets** — hospitals and insurers issue patient identity and insurance credentials conforming to a ToIP governance framework; pharmacies and specialists verify them without phoning a central registry.
  - **Educational Qualifications** — universities issue degree credentials to alumni digital wallets; employers verify qualifications instantly using a common credential schema and [[Trust Registry]] of accredited institutions.
  - **Supply Chain Provenance** — manufacturers issue product origin and certification credentials to a ToIP Layer 3 protocol; customs authorities verify authenticity at border crossings, reducing fraud in [[Supply Chain]] contexts.
  - **Cross-Border Government Identity** — national identity agencies participate in shared ToIP governance frameworks aligned with [[eIDAS Regulation]], allowing citizens to present government-issued credentials cross-border.
  - **Financial KYC** — regulated financial institutions issue reusable KYC credentials to customers, enabling downstream Know-Your-Customer checks without repeated data collection, reducing friction and privacy exposure.
  - **Professional Licensing** — regulatory bodies issue professional licences (medical, legal, engineering) as verifiable credentials; employers and contracting platforms query the issuer's [[Trust Registry]] entry to confirm validity.
  - **COVID and Health Attestations** — national health authorities adopted ToIP-aligned architectures for vaccine certificates and health attestations during the pandemic, providing an early real-world stress test of the dual-stack model.

- ### Relationships
  - supports:: [[Self Sovereign Identity]]
  - supports:: [[Verifiable Credentials]]
  - supports:: [[Decentralised Identity]]
  - supports:: [[Trust Registry]]
  - requires:: [[Decentralised Identifiers]]
  - requires:: [[Cryptographic Key Management]]
  - requires:: [[Public Key Infrastructure]]
  - enables:: [[Credential Exchange]]
  - enables:: [[Identity Verification]]
  - enables:: [[Cross-Border Identity]]
  - enables:: [[Governance Framework]]
  - implements:: [[W3C DID Core]]
  - implements:: [[W3C Verifiable Credentials]]
  - uses:: [[DID Document]]
  - uses:: [[DIDComm Messaging]]
  - uses:: [[OpenID for Verifiable Credentials]]
  - relatedTo:: [[Decentralized Identity Foundation]]
  - relatedTo:: [[W3C Credentials Community Group]]
  - relatedTo:: [[Internet Identity Workshop]]
  - relatedTo:: [[eIDAS Regulation]]
  - contrastsWith:: [[Federated Identity]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - bridges-to:: [[Zero Knowledge Proof]]
  - bridges-to:: [[Digital Wallet]]

- ### Standards & Context
  - **W3C DID Core 1.0** — the foundational specification for [[Decentralised Identifiers]] on which ToIP's technical stack builds; ToIP working groups contributed substantially to its development.
  - **W3C Verifiable Credentials Data Model** — the Layer 3 data format used for credential issuance and presentation; ToIP governance frameworks define permissible credential types and schemas built on this standard.
  - **DIF Presentation Exchange** — a [[Decentralized Identity Foundation]] specification for expressing which credentials a verifier requires; used within ToIP Layer 3 exchanges to define proof requests.
  - **[[OpenID for Verifiable Credentials]] (OID4VC)** — an emerging OIDF specification that maps verifiable credential issuance and presentation onto OpenID Connect flows; ToIP working groups have engaged with OID4VC as a pragmatic interoperability bridge to existing OAuth infrastructure.
  - **Authentic Chained Data Containers (ACDC)** — a ToIP-originated format for chained, tamper-evident credentials; under active development as an alternative to JSON-LD credential formats.
  - **[[eIDAS Regulation]] 2.0 (EU)** — European regulation for electronic identity and trust services whose European Digital Identity Wallet (EUDI Wallet) architecture aligns closely with ToIP's dual-stack model; ToIP governance framework templates are being adapted for eIDAS compliance contexts.
  - **NIST SP 800-63** — US digital identity guidelines whose assurance levels (IAL/AAL/FAL) are referenced in ToIP governance framework assurance level definitions for North American deployments.
  - **[[Linux Foundation]] Hosting** — ToIP is a directed fund project of the Linux Foundation, providing legal structure, neutral governance, and IPR policies for open-source and open-standards outputs.
  - **Internet Identity Workshop (IIW)** — the biannual unconference that serves as informal pre-standardisation space for ToIP participants and SSI ecosystem contributors to test ideas before formal specification.

- ### Provenance
  - sources:: Trust Over IP Foundation official website; Linux Foundation project charter; ToIP Dual Stack Architecture specification; W3C DID Core 1.0; W3C Verifiable Credentials Data Model; DIF Presentation Exchange specification; Internet Identity Workshop proceedings.
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
