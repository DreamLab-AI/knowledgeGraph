public:: true

# eIDAS 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e-idas-2-0",
  "@type": "Page",
  "vc:slug": "e-idas-2-0",
  "title": "eIDAS 2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:e-idas-2-0",
  "@type": "Class",
  "label": "eIDAS 2.0",
  "definition": "eIDAS 2.0 is the revised EU regulation on electronic identification, authentication, and trust services, adopted in 2024 as an amendment to the original eIDAS regulation of 2014. Its central innovation is the European Digital Identity Wallet (EUDIW), a mandatory infrastructure obligation requiring EU member states to provide citizens and businesses with a personal digital wallet capable of storing verifiable credentials, qualified electronic signatures, and attribute attestations. The regulation mandates that large online platforms accept the wallet for authentication, directly challenging private identity providers and establishing a public-interest counterweight to platform data concentration. eIDAS 2.0 aligns with W3C Verifiable Credentials and Decentralised Identifiers standards, embedding open interoperability requirements into binding EU law.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity-framework", "label": "Digital Identity Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:digital-identity-standards", "label": "Digital Identity Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-identity-management", "label": "Digital Identity Management"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:data-protection-regulation", "label": "Data Protection Regulation"},
      {"@id": "urn:ngm:class:digital-regulation", "label": "Digital Regulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[eIDAS 2.0]] is the EU regulation mandating a European Digital Identity Wallet that enables citizens to store and present [[Verifiable Credentials]] across member states, aligning government-issued [[Digital Identity Standards]] with W3C open specifications and enforcing acceptance by large online platforms.
- ### Relationships
  - [[eIDAS 2.0]] operationalises [[Self Sovereign Identity]] principles within a regulated framework by anchoring the European Digital Identity Wallet in [[Verifiable Credentials]] and [[Digital Identity Standards]]. It extends [[Data Protection Regulation]] by adding portability and minimisation requirements for identity attributes. The regulation directly shapes [[Authentication Standards]] across the EU single market, mandating cross-border acceptance and pushing member state systems toward the [[Digital Identity Management]] infrastructure the wallet provides. Its interoperability mandates connect to [[Digital Identity Wallet]] technical architecture and [[Digital Regulation]] enforcement mechanisms.
- ### Content
  - The original eIDAS regulation (EU 910/2014) established mutual recognition of electronic identification schemes across EU member states and created a framework for qualified trust services—electronic signatures, seals, and time-stamps carrying legal equivalence to their handwritten or physical counterparts. Despite technical success in establishing qualified electronic signatures, uptake remained fragmented because member states deployed incompatible national eID schemes with limited cross-border coverage.

  - eIDAS 2.0 addresses these limitations by introducing the European Digital Identity Wallet as a mandatory element. Each member state must provide at least one wallet application, free of charge, to any citizen or resident who wishes to use it. The wallet must support storage of qualified electronic attestations of attributes (QEAAs)—digitally signed claims about a person issued by authoritative sources such as national registries, academic institutions, or professional bodies. Crucially, relying parties (online services with more than 45 million EU users) are legally obligated to accept the wallet as an authentication and attribute-sharing mechanism.

  - The technical architecture draws on W3C [[Verifiable Credentials]] (VC) data model and Decentralised Identifiers (DID) specifications, though the regulation does not mandate any single cryptographic stack. The ARF (Architecture and Reference Framework) published by the EU Commission specifies protocols including OpenID for Verifiable Credential Issuance (OID4VCI) and OpenID for Verifiable Presentations (OID4VP), enabling selective disclosure of attributes—a person can prove they are over 18 without revealing their date of birth. This selective disclosure property directly advances [[Self Sovereign Identity]] ideals within a government-mandated context.

  - eIDAS 2.0 has significant implications for competition and [[Data Protection Regulation]]. By mandating wallet acceptance, the EU reduces the market power of social login providers (Google, Apple, Meta) who currently control authentication for large swathes of the web. It also obliges relying parties to request only the minimum necessary attributes, reinforcing GDPR data minimisation. Implementation timelines require member states to deploy conformant wallets by 2026, making eIDAS 2.0 one of the most consequential pieces of [[Digital Regulation]] affecting digital identity infrastructure in the decade.
