public:: true

# Self-Sovereign Identity (SSI)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:self-sovereign-identity-ssi",
  "@type": "Page",
  "vc:slug": "self-sovereign-identity-ssi",
  "title": "Self-Sovereign Identity (SSI)",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:self-sovereign-identity-ssi",
  "@type": "Class",
  "label": "Self-Sovereign Identity (SSI)",
  "definition": "Self-Sovereign Identity (SSI) is an identity model in which individuals control their own digital identifiers and credentials without dependence on a centralised issuing authority, using Decentralised Identifiers (DIDs) anchored to distributed ledgers and Verifiable Credentials signed by trusted issuers to enable selective disclosure. SSI shifts identity management from siloed service-provider accounts to portable, user-held credentials that can be verified without querying the original issuer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:hyperledger-indy", "label": "Hyperledger Indy"},
      {"@id": "urn:ngm:class:did-method", "label": "DID Method"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:privacy-preserving-identity", "label": "Privacy-Preserving Identity"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Self-Sovereign Identity (SSI)]] is an identity paradigm in which individuals hold and control their own [[Decentralized Identifiers]] and [[Verifiable Credentials]] without relying on centralised identity providers, enabling selective, privacy-preserving attribute disclosure.

- ### Relationships
  - SSI is a subclass of [[Decentralized Identity]] and relies on [[Decentralized Identifiers]] as the anchor and [[Verifiable Credentials]] as the credential format. [[Hyperledger Indy]] provides a purpose-built ledger for SSI deployments, and [[DID Method]]s define how identifiers are registered and resolved. The model depends on [[Privacy-Preserving Identity]] techniques such as zero-knowledge proofs to allow attribute proof without full disclosure.

- ### Content
  - The term "self-sovereign identity" was popularised by Christopher Allen in his 2016 essay "The Path to Self-Sovereign Identity", which articulated ten principles including control, access, portability, and consent. Precursors include the Identity Commons work and Kim Cameron's "Laws of Identity" (2005). The World Wide Web Consortium (W3C) subsequently standardised Decentralised Identifiers (DIDs) as a W3C Recommendation (2022) and Verifiable Credentials as a W3C Recommendation (2019, revised 2024), providing the technical substrate for SSI.
  - An SSI ecosystem consists of three roles: issuers (governments, universities, employers) that sign credentials using DIDs and publish verification keys to a verifiable data registry; holders (individuals) who store credentials in digital wallets (e.g., Bifold Wallet, ESSIF-compatible wallets); and verifiers (relying parties) that request and cryptographically verify credentials without contacting the issuer. Zero-knowledge proof schemes (e.g., BBS+ signatures, AnonCreds) allow holders to prove possession of a credential attribute (e.g., "age > 18") without revealing the full credential or enabling correlation across verifications.
  - SSI has significant implications for digital government (e-ID), healthcare records (patient-held medical history), education (portable diplomas), and financial services (re-usable KYC). The European Union's eIDAS 2.0 regulation mandates European Digital Identity Wallets for all member states by 2026, driving large-scale public deployment of SSI-adjacent technology. In developing-world contexts, SSI is explored for providing verifiable identity to the 1.1 billion people who lack formal identification documents.
  - In 2024-2025, EUDI Wallet reference implementations entered large-scale pilot programmes under the EU Digital Identity framework. The W3C Verifiable Credentials Data Model 2.0 was published, and the OpenID Foundation's OpenID for Verifiable Credentials (OID4VC) specification emerged as the dominant transport protocol binding SSI credentials to existing OAuth/OIDC infrastructure. Tension remains between ledger-based and ledger-less DID methods (e.g., did:key, did:jwk) and between interoperability and privacy-preserving approaches.

