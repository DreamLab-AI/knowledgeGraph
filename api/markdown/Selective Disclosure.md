public:: true
alias:: SelectiveDisclosure

# selective disclosure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13838da731eed02bc2c79e6bfa9c83f7e0f06afee50fda8bdf4036080832e4cd",
  "@type": "Page",
  "vc:slug": "selective-disclosure",
  "title": "selective disclosure",
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
  "@id": "urn:ngm:class:selective-disclosure",
  "@type": "Class",
  "label": "Selective Disclosure",
  "definition": "Selective disclosure is a cryptographic capability that allows the holder of a verifiable credential to present only a chosen subset of the credential's claims to a verifier, without revealing the undisclosed fields or requiring re-issuance by the issuer. It is implemented through specialised signature schemes such as BBS+ signatures and SD-JWT, as well as zero-knowledge proof systems, enabling fine-grained data minimisation in decentralised identity architectures. As a core privacy-engineering primitive, selective disclosure satisfies regulatory requirements such as GDPR's data minimisation principle and supports the eIDAS 2.0 digital wallet framework. The concept bridges cryptographic credential security with practical privacy-preserving authentication across identity, finance, and access-control domains.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy-preserving-technology",
      "label": "Privacy Preserving Technology"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:cryptographic-commitment-scheme", "label": "Cryptographic Commitment Scheme"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:data-minimisation", "label": "Data Minimisation"},
      {"@id": "urn:ngm:class:attribute-based-access-control", "label": "Attribute-Based Access Control"},
      {"@id": "urn:ngm:class:privacy-preserving-authentication", "label": "Privacy-Preserving Authentication"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:bbs-plus-signatures", "label": "BBS+ Signatures"},
      {"@id": "urn:ngm:class:sd-jwt", "label": "SD-JWT"},
      {"@id": "urn:ngm:class:zk-snarks", "label": "zk-SNARKs"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3c-verifiable-credentials-data-model", "label": "W3C Verifiable Credentials Data Model"},
      {"@id": "urn:ngm:class:ietf-sd-jwt", "label": "IETF SD-JWT"},
      {"@id": "urn:ngm:class:decentralised-identity-foundation", "label": "Decentralised Identity Foundation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:eidas-2", "label": "eIDAS 2.0"},
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:full-credential-presentation", "label": "Full Credential Presentation"},
      {"@id": "urn:ngm:class:bearer-token", "label": "Bearer Token"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"},
      {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:partial-disclosure", "label": "Partial Disclosure"},
    {"@id": "urn:ngm:class:attribute-disclosure", "label": "Attribute Disclosure"}
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
  - Selective disclosure is a cryptographic capability that allows the holder of a [[Verifiable Credentials]] credential to reveal only a chosen subset of its claims to a verifier, without exposing undisclosed attributes and without requiring re-issuance by the issuer. It is implemented through specialised signature schemes — notably [[BBS+ Signatures]] and [[SD-JWT]] — as well as [[Zero-Knowledge Proof]] systems, enabling fine-grained [[Data Minimisation]] in [[Decentralised Identity]] architectures. The approach satisfies GDPR's data minimisation principle and underpins the [[eIDAS 2.0]] digital wallet framework, serving as a foundational privacy engineering primitive across identity, finance, and access-control use cases.

- ### Overview
  - Classical [[Digital Signature]] schemes bind a cryptographic signature to the entirety of the signed message. Presenting only a portion of a signed credential would invalidate the signature under standard constructions such as ECDSA or RSA, making partial disclosure inherently unsafe without a dedicated cryptographic construction.
  - Selective disclosure resolves this by enabling credential holders to derive proofs covering only the claims they choose to share, while the verifier still obtains cryptographic assurance that those claims were signed by a trusted issuer.
  - The core properties selective disclosure provides:
    - **Unlinkability**: different presentations of the same credential should not be linkable to each other or to a specific holder.
    - **Non-correlation**: the verifier learns nothing about undisclosed fields.
    - **Issuer non-involvement**: presentations are generated by the holder alone, without contacting the issuer, preserving holder autonomy.
    - **Integrity**: disclosed claims are verifiably signed by the issuer; no tampering is possible without detection.
  - Selective disclosure is a fundamental building block of [[Self-Sovereign Identity]] and is increasingly mandated by digital identity standards and regulations globally.

- ### Key Mechanisms
  - **[[BBS+ Signatures]]**
    - A pairing-based signature scheme that signs multiple messages simultaneously, allowing the holder to derive a proof-of-knowledge of a subset of the signed messages.
    - Proofs are zero-knowledge with respect to undisclosed messages and unlinkable across presentations (each derived proof is computationally indistinguishable from fresh).
    - Standardised via the Decentralised Identity Foundation (DIF) and submitted to the IETF for standardisation.
    - Relies on [[Elliptic Curve Cryptography]] over pairing-friendly curves (e.g. BLS12-381).
  - **[[SD-JWT]] (Selective Disclosure JSON Web Token)**
    - An IETF specification (draft-ietf-oauth-selective-disclosure-jwt) that extends [[JSON Web Token]] with hash-based selective disclosure.
    - The issuer embeds [[Hash Function]] digests of individual disclosable claims (called "disclosures") in the JWT payload.
    - The holder reveals only the preimage salt-value pairs for claims they choose to disclose; the verifier recomputes and matches the hashes.
    - Simpler to deploy than BBS+ but does not provide cryptographic unlinkability across presentations.
  - **[[Zero-Knowledge Proof]] systems**
    - [[zk-SNARKs]] (e.g. Groth16, PLONK) and [[zk-STARKs]] allow the holder to prove derived predicates without revealing the underlying data (e.g. "age ≥ 18", "salary > X").
    - Enable predicate proofs over credential attributes, going beyond simple attribute disclosure.
    - Computationally intensive but increasingly practical with improvements in proving systems and hardware acceleration.
  - **[[Merkle Tree]]-based schemes**
    - The credential is structured as a Merkle tree of claims; the holder reveals only the required leaves plus the sibling hashes needed to reconstruct the root.
    - Used in some early selective disclosure proposals (e.g. W3C VC with Merkle proofs).
  - **[[Cryptographic Commitment Scheme]]s**
    - Pedersen commitments and similar constructions allow proof of hidden values satisfying arithmetic constraints.
    - Foundational to more complex ZKP-based selective disclosure circuits.

- ### Applications and Use Cases
  - **Digital Identity Wallets**
    - Citizens using [[Digital Identity Wallet]] applications (e.g. under [[eIDAS 2.0]]) share only the attributes required for a given transaction — e.g. age verification shares only a boolean "over-18" rather than date of birth.
    - National identity wallet projects in Germany (Bundeswallet), Italy (IT Wallet), and the EU ARF reference architecture all mandate selective disclosure.
  - **[[Decentralised Identity]] and SSI ecosystems**
    - Holders of driver's licences, academic credentials, or professional certifications can present only the relevant fields (e.g. expiry date, institution name) to relying parties.
    - Self-sovereign identity frameworks such as Hyperledger Aries and OpenID for Verifiable Credentials (OID4VC) implement selective disclosure natively.
  - **[[Attribute-Based Access Control]]**
    - Enterprise access control systems grant access based on possession of specific credential attributes without revealing employee identity or other personal data.
    - Selective disclosure prevents correlation of access events across systems.
  - **Healthcare and life sciences**
    - Patients share specific health data fields (e.g. vaccination status, blood type) with healthcare providers while keeping the remainder of their health record private.
  - **Financial services**
    - KYC/AML checks can be satisfied by proving a credential attribute (e.g. "verified by authorised institution") without transferring underlying PII to the counterparty.
  - **IoT and device identity**
    - Devices present attestation credentials selectively, proving compliance attributes (firmware version, manufacturer) without disclosing full device identity or serial numbers.
  - **Academic credentials**
    - Universities issue verifiable diplomas; graduates selectively disclose specific qualifications or grades to employers without revealing unrelated academic history.

- ### Relationships
  - requires:: [[Zero-Knowledge Proof]]
  - requires:: [[Verifiable Credentials]]
  - requires:: [[Cryptographic Commitment Scheme]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[Data Minimisation]]
  - enables:: [[Attribute-Based Access Control]]
  - enables:: [[Privacy-Preserving Authentication]]
  - implements:: [[BBS+ Signatures]]
  - implements:: [[SD-JWT]]
  - implements:: [[zk-SNARKs]]
  - uses:: [[Digital Signature]]
  - uses:: [[Hash Function]]
  - uses:: [[Merkle Tree]]
  - uses:: [[Elliptic Curve Cryptography]]
  - standardizedBy:: [[W3C Verifiable Credentials Data Model]]
  - standardizedBy:: [[IETF SD-JWT]]
  - standardizedBy:: [[Decentralised Identity Foundation]]
  - supports:: [[eIDAS 2.0]]
  - supports:: [[GDPR Compliance]]
  - supports:: [[Self-Sovereign Identity]]
  - contrastsWith:: [[Full Credential Presentation]]
  - contrastsWith:: [[Bearer Token]]
  - relatedTo:: [[Credential Format Standard]]
  - relatedTo:: [[Decentralised Identifier]]
  - relatedTo:: [[Digital Identity Wallet]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Differential Privacy]]

- ### Standards and Governance Context
  - **W3C Verifiable Credentials Data Model (VCDM) 2.0** — defines the abstract data model within which selective disclosure credential formats (BBS+, SD-JWT) operate. Selective disclosure is a first-class design goal.
  - **IETF SD-JWT** (draft-ietf-oauth-selective-disclosure-jwt) — specifies the hash-based selective disclosure extension to [[JSON Web Token]]. Widely adopted for OpenID4VC profiles.
  - **IETF BBS Signatures** (draft-irtf-cfrg-bbs-signatures) — cryptographic specification for the BBS+ signature scheme, published via the IETF Crypto Forum Research Group (CFRG).
  - **W3C DID Core** (Decentralised Identifiers) — the [[Decentralised Identifier]] spec provides the subject identifier infrastructure that anchors selective disclosure credentials.
  - **OpenID for Verifiable Credentials (OID4VC)** — an OpenID Foundation suite of protocols (OID4VCI, OID4VP) that defines how [[Verifiable Credentials]] are issued and presented, including selective disclosure during presentation.
  - **EU Architecture Reference Framework (ARF)** — the technical specification for the EU Digital Identity Wallet (EUDIW) mandates SD-JWT VC and mdoc/ISO 18013-5 as mandatory formats, both supporting selective disclosure.
  - **ISO/IEC 18013-5 (mDL)** — the mobile driving licence standard uses a selective disclosure mechanism (DeviceResponse) for attribute presentation.
  - **Hyperledger Aries / AnonCreds** — an open-source SSI stack that has implemented Camenisch-Lysyanskaya (CL) signatures for selective disclosure since 2017, the longest-deployed production selective disclosure scheme.
  - **GDPR (EU) 2016/679, Article 5(1)(c)** — the data minimisation principle provides the regulatory driver; selective disclosure is the primary cryptographic means to enforce it in credential systems.
  - **eIDAS 2.0 Regulation (EU) 2024/1183** — mandates selective disclosure for the European Digital Identity Wallet, driving widespread adoption across EU member states.

- ### Design Considerations and Trade-offs
  - **Unlinkability vs. simplicity**: BBS+ provides strong unlinkability guarantees but requires pairing-based cryptography, which is more complex to implement and audit than SD-JWT's hash-based approach.
  - **Predicate proofs**: ZKP-based schemes can prove range predicates (age ≥ 18) without disclosing the raw value; SD-JWT and BBS+ cannot without combining with ZKP circuits.
  - **Revocation interaction**: selective disclosure complicates [[Credential Revocation]] because derived proofs must remain linkable to revocation registries without enabling correlation across presentations.
  - **Issuer non-correlation**: some schemes (e.g. CL signatures with link secrets) prevent the issuer from correlating multiple credential uses; others (e.g. basic SD-JWT) do not.
  - **Performance**: BBS+ proofs and ZKP circuits are computationally heavier than simple JWT verification; hardware acceleration and proof caching mitigate this in production.
  - **Holder binding**: selective disclosure must be combined with a [[Holder Binding]] mechanism (e.g. key binding JWT in SD-JWT) to prevent stolen credentials from being replayed by a different holder.
  - **Composability**: multiple selective disclosure credentials can be combined in a single presentation (VP Token), requiring careful design to avoid accidental correlation across credentials.

- ### Relationship to Adjacent Privacy Technologies
  - [[Differential Privacy]] — a statistical privacy technique applied to aggregate data; selective disclosure operates at the individual credential level. Together they address different attack surfaces.
  - [[Federated Learning]] — distributes model training without centralising raw data; selective disclosure similarly avoids data centralisation in identity verification. Both are privacy-preserving by design, bridging AI and identity domains.
  - [[Homomorphic Encryption]] — allows computation on encrypted data; can complement selective disclosure when verifiers need to perform computations on hidden attributes without learning them.
  - [[Secure Multi-Party Computation]] — enables joint computation across parties without revealing inputs; related in the broader landscape of privacy-preserving computation.
  - [[Attribute-Based Encryption]] — cryptographic access control scheme where decryption keys encode attributes; shares design goals with selective disclosure but operates on a different trust model.

- ### Provenance
  - sources:: W3C VCDM 2.0; IETF draft-ietf-oauth-selective-disclosure-jwt; IETF draft-irtf-cfrg-bbs-signatures; EU eIDAS 2.0 ARF; ISO/IEC 18013-5; Hyperledger AnonCreds specification
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
