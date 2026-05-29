public:: true

# Trust Anchor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:trust-anchor",
  "@type": "Page",
  "vc:slug": "trust-anchor",
  "title": "Trust Anchor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trust-anchor",
  "@type": "Class",
  "label": "Trust Anchor",
  "definition": "A trust anchor is an authoritative entity or cryptographic artifact that serves as the root of a chain of trust, providing the foundational level of trust from which all subsequent trust assertions in a system are derived. In public key infrastructure (PKI), the trust anchor is typically a root certificate authority (CA) whose self-signed certificate is pre-installed in operating systems and browsers as inherently trusted, enabling the validation of all subordinate certificate chains. In decentralised identity systems, trust anchors may be governance-designated issuers, DID-based root entities, or on-chain registries whose cryptographic material is considered authoritative for a particular trust domain. Trust anchors define the scope and boundaries of a trust framework and are the entities that must be trusted by all relying parties in the system.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"},
      {"@id": "urn:ngm:class:trust-framework-policy", "label": "Trust Framework Policy"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"},
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Trust Anchor]] is the root-of-trust entity in a cryptographic chain—typically a root [[Certificate Authority]] or governance-designated issuer—whose cryptographic material is treated as axiomatic by a system, enabling all downstream trust assertions, certificate validations, and [[Decentralized Identity]] claims to be verified against a known good starting point.

- ### Relationships
  - The [[Trust Anchor]] is the foundational element of a [[Trust Framework]] and is operationalised through [[Trust Framework Policy|trust framework policies]] that specify which entities qualify as anchors and under what conditions. In PKI contexts it materialises as a root [[Certificate Authority]] holding a [[Digital Certificate]] whose [[Digital Signature]] over subordinate CA certificates initiates the chain of trust. [[Cryptographic Verification]] of any certificate ultimately resolves to a trusted anchor in the relying party's trust store. Trust anchors enable [[Identity Federation]] by providing the common trust roots that federated parties accept, and in [[Decentralized Identity]] ecosystems they establish the authoritative issuer registries that verifiers consult.

- ### Content
  - Trust anchors in PKI emerged from the X.500 directory and X.509 certificate framework designed by the ITU-T in the late 1980s. The hierarchical CA model introduced a root CA at the apex of a certificate hierarchy, with intermediate CAs and end-entity certificates forming subordinate levels. When Netscape embedded a set of root CA certificates into Navigator in 1994 to support SSL, it established the browser trust store as the de facto mechanism for bootstrapping web PKI trust. Today, major operating systems and browsers maintain trust stores containing approximately 100–150 root CAs vetted through programmes run by Mozilla (MRSP), Apple, Microsoft, and Google.

  - The operational significance of a trust anchor lies in its unquestioned status: a relying party that trusts the anchor accepts any cryptographic statement signed by an entity that can trace a valid chain back to that anchor. This means trust anchor selection is a governance decision with significant security implications. Root CA compromise—as happened with DigiNotar in 2011—invalidates the entire subgraph of trust rooted at that anchor, necessitating emergency revocation and cross-platform trust store updates. Hardware-backed trust anchors using Trusted Platform Modules (TPMs) or Secure Enclaves (TrustZone, SGX) extend the anchor into physical hardware, providing attestation evidence that software alone cannot forge.

  - In decentralised identity ecosystems, the concept of trust anchor has been generalised. An OpenID Federation trust anchor is a JSON-encoded entity statement signed by the apex of the federation hierarchy, enabling automatic discovery of metadata and trust relationships across federated OpenID providers. EUDI Wallet trust anchors are national or supranational entities designated by member state law as trusted issuers within the European Digital Identity Framework, their public keys published in official trust list registries. DID-based trust anchors associate cryptographic material with a governance-designated DID that relying parties resolve against a DID method's verifiable data registry.

  - In 2024–2025 the post-quantum transition has forced trust anchor re-keying programmes across major PKI ecosystems, as root CA certificates containing RSA or ECDSA keys must be replaced with ML-DSA equivalents before classical cryptography becomes vulnerable. Certificate Transparency v2 improves trust anchor accountability by requiring certificates to be logged in multiple independently operated CT logs before browsers will trust them. The EUDI Wallet ARF defines a federation-based trust anchor architecture for the European identity ecosystem, and national trusted lists are being extended to cover wallet providers, issuers, and relying parties as first-class trust anchor categories.