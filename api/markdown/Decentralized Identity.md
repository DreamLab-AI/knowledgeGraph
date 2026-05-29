public:: true

# Decentralized Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralized-identity",
  "@type": "Page",
  "vc:slug": "decentralized-identity",
  "title": "Decentralized Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-identity",
  "@type": "Class",
  "label": "Decentralized Identity",
  "definition": "Decentralized identity (DID) is an approach to digital identity management in which individuals, organisations, and devices control their own identifiers and associated credentials without reliance on a centralised identity provider. Built on W3C Decentralized Identifier (DID) specifications and Verifiable Credential (VC) standards, decentralized identity systems enable self-sovereign control where the subject generates cryptographic key pairs, anchors the DID document to a verifiable data registry (such as a blockchain or distributed ledger), and presents credentials that can be cryptographically verified by any relying party without querying a central authority.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"},
      {"@id": "urn:ngm:class:didcomm", "label": "DIDComm"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"},
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Decentralized Identity]] is a paradigm for [[Digital Identity]] management that eliminates dependence on central identity providers by giving subjects cryptographic self-sovereign control over their [[DID Document]] anchored on a verifiable registry, enabling [[Credential Verification]] through [[Cryptographic Keys]] and [[Zero-Knowledge Proof]] mechanisms that preserve [[Privacy By Design]] principles.

- ### Relationships
  - [[Decentralized Identity]] is a specialisation of [[Digital Identity]] that contrasts with federated identity systems (OAuth, SAML) by removing the trusted third-party identity provider from the verification flow. The [[DID Document]] is the core data structure, resolved from the DID URI and containing public key material and service endpoints. [[DIDComm]] provides the secure, privacy-respecting messaging protocol used between DID-identified agents. The system typically anchors DID documents to a [[Blockchain]] or distributed ledger to provide cryptographic integrity guarantees. [[Zero-Knowledge Proof]] schemes enable selective disclosure of credential attributes, allowing subjects to prove claims (e.g., "I am over 18") without revealing the underlying data. [[Digital Identity Wallet]] applications store and present credentials on the subject's behalf, realising the user-facing experience of self-sovereign identity.

- ### Content
  - The conceptual foundations of decentralized identity were articulated in Christopher Allen's 2016 essay "The Path to Self-Sovereign Identity," which distilled ten principles including existence, control, access, transparency, persistence, portability, interoperability, consent, minimisation, and protection. These principles reacted against the siloed federated identity architectures of the 2000s (Microsoft Passport, OpenID) and the surveillance-enabling data aggregation of social login (Sign in with Google/Facebook). The World Wide Web Consortium (W3C) began standardising Decentralized Identifiers in 2017, reaching Recommendation status in July 2022. The Verifiable Credentials Data Model became a W3C Recommendation in November 2019, providing the credential format for expressing claims in a cryptographically verifiable, machine-readable form.

  - A decentralized identity system operates through a tripartite trust triangle. The issuer is an authority (government, university, employer) that cryptographically signs a verifiable credential and issues it to the holder. The holder is the DID subject who stores the credential in a digital identity wallet and controls its disclosure. The verifier is the relying party that receives a verifiable presentation — a selective subset of credential claims, optionally accompanied by a zero-knowledge proof — and verifies both the issuer's signature and the holder's proof of control without contacting the issuer. This architecture eliminates the centralised database query that characterises federated identity, preserving privacy and functioning offline or across network partitions.

  - DID methods define how DID documents are created, resolved, updated, and deactivated on specific verifiable data registries. The DID method ecosystem includes did:web (DNS-anchored, no blockchain), did:ion (Bitcoin-anchored via the Sidetree protocol), did:ethr (Ethereum-anchored via ERC-1056), did:key (pure cryptographic key, no registry), and dozens of others. The European Union's eIDAS 2.0 regulation, effective from 2026, mandates that all EU member states provide citizens with a European Digital Identity Wallet based on decentralized identity standards, representing the largest government adoption of the paradigm. Microsoft Entra Verified ID, IBM Digital Credentials, and MATTR Global provide enterprise implementations.

  - In 2024-2025, decentralized identity is moving from pilot deployments to production infrastructure in several sectors. The EU Digital Identity Wallet specification (Architecture and Reference Framework v1.4) defines interoperability requirements for 450 million potential users. In the United States, several states have issued mobile driving licenses (mDL) under ISO 18013-5, sharing design principles with DID-based credentials. The mdoc format and W3C Verifiable Credentials face standardisation competition, and the question of selective disclosure mechanisms — SD-JWT, BBS+ signatures, and zk-SNARKs — remains an active area of cryptographic standardisation. The principal challenge is bootstrapping the issuer ecosystem: decentralized identity wallets are only as useful as the credentials that authoritative issuers choose to issue into them.

