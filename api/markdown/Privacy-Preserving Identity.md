public:: true

# Privacy-Preserving Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:privacy-preserving-identity",
  "@type": "Page",
  "vc:slug": "privacy-preserving-identity",
  "title": "Privacy-Preserving Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:privacy-preserving-identity",
  "@type": "Class",
  "label": "Privacy-Preserving Identity",
  "definition": "Privacy-preserving identity refers to identity management architectures and protocols that enable individuals to prove attributes, credentials, or facts about themselves to verifiers without revealing unnecessary personal information, leveraging cryptographic techniques such as zero-knowledge proofs, selective disclosure, and unlinkable credentials. These systems aim to reconcile strong authentication guarantees with user privacy, countering surveillance by reducing the attack surface of identity data aggregation. They are foundational to self-sovereign identity, anonymous credential schemes, and privacy-respecting compliance workflows.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:selective-disclosure", "label": "Selective Disclosure"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-authentication", "label": "Privacy-Preserving Authentication"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"},
      {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"},
      {"@id": "urn:ngm:class:w3-c-verifiable-credentials", "label": "W3C Verifiable Credentials"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Privacy-Preserving Identity]] is a [[Digital Identity]] paradigm that uses [[Zero-Knowledge Proof]] and [[Selective Disclosure]] cryptography to allow individuals to prove attributes or credentials to verifiers without exposing underlying personal data, supporting [[Privacy-Preserving Authentication]] while maintaining auditability.

- ### Relationships
  - Privacy-preserving identity systems are built on [[Verifiable Credentials]] and [[Decentralized Identifiers]] as specified by the W3C, stored in [[Digital Identity Wallet]] applications. [[Zero-Knowledge Proof]] schemes such as BBS+ signatures and zk-SNARKs enable [[Selective Disclosure]] of credential attributes. The approach is closely related to [[Decentralized Identity]] architectures and is supported by standards from [[W3C Verifiable Credentials]]. [[Cryptographic Commitment]] schemes enable unlinkable presentations across different verifiers, preventing correlation.

- ### Content
  - The intellectual lineage of privacy-preserving identity begins with David Chaum's 1985 anonymous credentials paper, which proposed credential systems where users could prove properties (e.g., "over 18") without revealing which specific credential was used or enabling issuer-verifier correlation. CL signatures (Camenisch-Lysyanskaya, 2001) formalised this with efficient unlinkable multi-show proofs. IBM's Identity Mixer (Idemix) and Microsoft's U-Prove built practical systems, though adoption was limited by ecosystem fragmentation and performance constraints.

  - Modern privacy-preserving identity architectures combine three layers. At the credential layer, the W3C Verifiable Credentials standard defines a JSON-LD format for issuer-signed claims. At the presentation layer, BBS+ signatures enable selective disclosure of individual credential attributes with a constant-size proof regardless of the number of attributes hidden, while zk-SNARK circuits enable arbitrary predicate proofs (e.g., "age > 18" without revealing birthdate). At the transport layer, Decentralized Identifiers (DIDs) provide resolvable, self-controlled identifiers not bound to any central registry.

  - Key application domains include age verification and content access without central tracking, financial KYC compliance with minimal data sharing, healthcare credential verification (vaccination status, professional licences), cross-border identity portability, and pseudonymous authentication in Web3 protocols. The European Digital Identity Wallet (EUDIW) regulation (eIDAS 2.0) mandates selective disclosure credential support across EU member states, driving broad deployment from 2025 onward.

  - As of 2024-2025, the IETF and W3C are standardising SD-JWT (Selective Disclosure for JWTs) as a pragmatic near-term format with partial unlinkability, while BBS+-based credentials are advancing through IETF drafts. The tension between strong privacy guarantees (unlinkability, zero-knowledge) and regulatory transparency requirements (anti-money laundering, sanctions screening) remains the central design challenge. Hardware-backed identity wallets using secure enclaves are emerging as the trust anchor, with TEE-based remote attestation enabling privacy-preserving proof of device integrity.

