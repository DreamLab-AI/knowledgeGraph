public:: true

# Trust over IP Stack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:trust-over-ip-stack",
  "@type": "Page",
  "vc:slug": "trust-over-ip-stack",
  "title": "Trust over IP Stack",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trust-over-ip-stack",
  "@type": "Class",
  "label": "Trust over IP Stack",
  "definition": "The Trust over IP (ToIP) Stack is a four-layer architecture developed by the Trust Over IP Foundation that provides a complete framework for decentralised digital trust, combining technical protocols (verifiable credentials, DID-based peer-to-peer messaging, verifiable data registries) with governance frameworks at each layer to enable interoperable, privacy-preserving identity and credential exchange across organisational and jurisdictional boundaries. The stack mirrors the TCP/IP model by separating technical interoperability concerns from governance and policy concerns at corresponding layers.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"},
      {"@id": "urn:ngm:class:verifiable-data-registry", "label": "Verifiable Data Registry"},
      {"@id": "urn:ngm:class:w3-c-verifiable-credentials", "label": "W3C Verifiable Credentials"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:trust-over-ip-foundation", "label": "Trust Over IP Foundation"},
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"},
      {"@id": "urn:ngm:class:digital-identity-framework", "label": "Digital Identity Framework"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"},
      {"@id": "urn:ngm:class:decentralised-trust", "label": "Decentralised Trust"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The Trust over IP Stack is a four-layer reference architecture — combining [[Decentralized Identifiers]], [[Verifiable Data Registry]] infrastructure, and [[W3C Verifiable Credentials]] with governance frameworks at each layer — designed by the [[Trust Over IP Foundation]] to enable interoperable [[Decentralised Trust]] and [[Credential Verification]] across organisational and jurisdictional boundaries.

- ### Relationships
  - The ToIP Stack extends the [[Trust Framework]] concept into a layered technical-governance architecture. Layer 1 provides [[Verifiable Data Registry]] infrastructure (blockchains, distributed ledgers, or registries serving as roots of trust). Layer 2 provides agent and wallet protocols enabling peer-to-peer communication using [[Decentralized Identifiers]]. Layer 3 provides [[W3C Verifiable Credentials]] exchange protocols. Layer 4 provides application ecosystems built on the lower layers. Each layer has a corresponding governance stack counterpart. The result is a complete [[Digital Identity Framework]] enabling [[Decentralised Trust]] and [[Credential Verification]] without centralised identity providers — embodying [[Decentralized Identity]] principles.

- ### Content
  - The Trust over IP Foundation was established under the Linux Foundation in May 2020, bringing together identity, legal, and technology experts to produce a coherent architecture for internet-scale digital trust. The foundational document — the "Trust over IP Architectural Overview" — was published in 2020 and framed the challenge: how can any two parties who have never met establish mutual trust for digital interactions, across different organisations, jurisdictions, and technologies, without relying on a centralised authority? The answer is a layered stack modelled on the internet's own layered architecture.

  - The four technical layers are: Layer 1 (Utility Layer) — verifiable data registries such as DID-compatible blockchains (Hyperledger Indy, ION on Bitcoin, Ethereum-based registries) where decentralised identifiers are anchored; Layer 2 (Provider Layer) — DIDComm-compatible agent software and digital wallets that create and manage DIDs, store verifiable credentials, and conduct secure peer messaging; Layer 3 (Exchange Layer) — credential exchange protocols (OIDC4VC, DIF Presentation Exchange) that define how issuers issue, holders store, and verifiers request verifiable credentials; Layer 4 (Ecosystem Layer) — specific applications, business services, and digital credential use cases built on the lower layers. Each layer has a mirrored governance stack layer defining policies, legal agreements, and trust frameworks.

  - The significance of the ToIP Stack is that it provides a neutral, vendor-agnostic blueprint that breaks the dominance of siloed identity federation (SAML, OIDC with large identity providers). It enables portable digital credentials — such as educational certificates, professional licences, government-issued IDs, and health credentials — that can be verified anywhere without contacting the original issuer. Privacy is enhanced because holders control disclosure and selective presentation without issuer involvement. The architecture supports cross-jurisdictional trust, making it suitable for international credential recognition (travel, trade, academic qualifications).

  - In 2024-2025, the ToIP Stack has influenced real-world deployments: the EU Digital Identity Wallet (EUDI Wallet) specified under the revised eIDAS2 regulation closely aligns with ToIP Layer 2-3 protocols; the Canadian Digital Trust Framework builds on ToIP governance concepts; and multiple national credential programmes (NHS Digital Staff Passport, Bhutan's Druk Bhutan wallet) have adopted aligned architectures. The convergence of OpenID4VCI and OpenID4VP as the dominant credential issuance and presentation protocols at Layer 3 has significantly accelerated ecosystem interoperability in 2024.

