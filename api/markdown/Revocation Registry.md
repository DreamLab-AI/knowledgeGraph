public:: true

# Revocation Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:revocation-registry",
  "@type": "Page",
  "vc:slug": "revocation-registry",
  "title": "Revocation Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:revocation-registry",
  "@type": "Class",
  "label": "Revocation Registry",
  "definition": "A revocation registry is a data structure or service that maintains the validity status of issued verifiable credentials or digital certificates, allowing verifiers to check whether a credential has been revoked by its issuer before accepting a presentation. In traditional PKI systems this role is fulfilled by Certificate Revocation Lists (CRLs) and OCSP responders; in self-sovereign identity ecosystems, revocation registries are implemented as privacy-preserving mechanisms including W3C Status List 2021 (bitstring-based), Hyperledger AnonCreds revocation with cryptographic accumulators, and on-chain smart contract registries. A well-designed revocation registry balances timely status updates, verifier privacy (preventing issuers from tracking when credentials are checked), and scalability to large credential populations.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:verifiable-credential-standard", "label": "Verifiable Credential Standard"},
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"},
      {"@id": "urn:ngm:class:selective-disclosure", "label": "Selective Disclosure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"},
      {"@id": "urn:ngm:class:credential-issuance", "label": "Credential Issuance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Revocation Registry]] is a mechanism that tracks whether issued [[Verifiable Credentials]] or [[Digital Certificate|digital certificates]] remain valid, enabling [[Credential Verification|verifiers]] to confirm at presentation time that a credential has not been withdrawn by its issuer through a privacy-respecting query against a public or distributed status endpoint.

- ### Relationships
  - The [[Revocation Registry]] is a critical component of the [[Credential Verification]] lifecycle and complements [[Credential Issuance]] by providing an out-of-band channel for issuer control after credential distribution. In PKI contexts it relates to the [[Certificate Authority]] infrastructure through CRL and OCSP mechanisms. In self-sovereign identity, it works alongside [[Selective Disclosure]] to prevent issuers from correlating verification checks back to individual holders. The registry is secured through [[Cryptographic Proof]] mechanisms—accumulators, bitstring integrity proofs, or signed status lists—and underpins practical [[Decentralized Identity]] deployments where credential lifetimes must be actively managed.

- ### Content
  - Revocation has been a requirement in digital certificate systems since X.509 was standardised in 1988. The original approach—CRLs distributed as signed lists of revoked serial numbers—suffered from staleness (published on fixed schedules) and scalability problems (lists grew proportionally to revoked volume). OCSP (Online Certificate Status Protocol, RFC 2560, 1999) addressed freshness by enabling per-certificate real-time queries, but introduced issuer-side privacy risks (the OCSP responder knows exactly which certificates are being verified and when) and availability dependencies. Certificate Transparency (RFC 6962, 2013) added audit log integrity but does not itself handle revocation status.

  - In the verifiable credential ecosystem, several revocation approaches have emerged with different trust and privacy properties. W3C Verifiable Credentials Status List 2021 encodes a compressed bitstring indexed by credential position, signed by the issuer and hosted at a public URL; verifiers fetch the list and check the relevant bit without querying the issuer per credential. Hyperledger AnonCreds uses a cryptographic accumulator—a value computed from all non-revoked credential handles—combined with a non-membership witness that each holder can update without revealing their credential handle to the issuer, providing strong issuer-unlinkability. Smart contract revocation registries on public blockchains replace the issuer's hosted endpoint with a decentralised, tamper-evident ledger entry.

  - Revocation registries are significant in high-assurance identity contexts—healthcare professional credentials, driving licences, educational qualifications, and enterprise access tokens—where an issuer must be able to instantly invalidate a credential upon account compromise, employment termination, or licence suspension. Without effective revocation, a compromised credential holder can continue to present a technically valid but semantically revoked credential until its expiry date.

  - In 2024–2025, the EUDI Wallet Architecture Reference Framework specifies StatusList2021 as the primary revocation mechanism for the European Digital Identity ecosystem, while the W3C has advanced the Bitstring Status List specification toward Recommendation status. Research into revocation with unlinkability via accumulators has been productised by AnonCreds v2 and SD-JWT VC implementations incorporating Token Status List as a compact alternative. The challenge of timely revocation propagation in offline or constrained connectivity scenarios remains an active design problem for credential frameworks targeting mobile-first use cases.