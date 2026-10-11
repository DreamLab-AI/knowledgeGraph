The W3C Verifiable Credentials Data Model (VCDM) is a W3C Recommendation that defines a standardised, machine-readable data model for expressing and cryptographically verifying claims about subjects on the Web. It establishes a three-party trust triangle comprising an issuer that creates and signs credentials, a holder that stores and presents them, and a verifier that checks their authenticity and validity. Credentials are expressed as JSON or JSON-LD documents and may be signed using proof mechanisms such as Data Integrity Proofs or JWT/SD-JWT, enabling selective disclosure and privacy-preserving presentation. The model underpins decentralised identity systems and Self-Sovereign Identity architectures by separating identity assertion from centralised identity providers.

### Overview

- The VCDM emerged from the [[W3C Credentials Community Group]] and was first published as a W3C Recommendation in 2019 (v1.0), with a major revision (v2.0) reaching Recommendation status in 2024.
- Its central insight is separating the act of making an assertion from the mechanism of distributing or proving it, enabling credentials to flow across trust boundaries without requiring direct communication between issuer and verifier.
- A credential carries: a subject identifier (typically a [[Decentralised Identifier]] DID), a set of typed claims, metadata (issuance date, expiry, credential type), and a cryptographic proof.
- Presentations wrap one or more credentials into a holder-signed bundle so verifiers can confirm the holder controls the credential without contacting the issuer.
- The model is proof-mechanism agnostic: implementations may use [[Linked Data Proofs]], [[JSON Web Token]] (VC-JWT), or [[Selective Disclosure JWT]] (SD-JWT-VC), chosen to suit performance, privacy, and tooling constraints.

### Key Components

- **Credential Subject** — the entity described by the claims; identified by a URI or [[Decentralised Identifier]].
- **Issuer** — the authority asserting the claims; signs the credential with a [[Digital Signature]] tied to its [[Decentralised Identifier]] or other verifiable key material.
- **Holder** — stores credentials in a [[Digital Identity Wallet]] and produces [[Verifiable Presentation]] bundles for verifiers.
- **Verifier** — checks signature validity, credential status, and conformance to expected credential types.
- **Proof** — the cryptographic envelope; may be a [[Linked Data Proofs]] Data Integrity Proof (e.g. Ed25519Signature2020, BLS12-381 for [[Zero-Knowledge Proof]]) or a compact [[JSON Web Token]].
- **Credential Status** — an optional mechanism (e.g. [[Bitstring Status List]]) allowing issuers to revoke or suspend credentials without contacting the holder.
- **`@context`** — a [[JSON-LD]] context array providing semantic disambiguation for claim vocabularies; at minimum includes the VCDM context URI.
- **Credential Type** — a string array declaring what kind of credential this is (e.g. `VerifiableCredential`, `UniversityDegreeCredential`), enabling schema-based validation.
- **`credentialSchema`** — optional pointer to a [[JSON Schema]] or OWL-based schema for machine-readable claim validation.
- **`termsOfUse`** — policies constraining how verifiers may use the credential data, supporting [[Data Governance]] use cases.

### Mechanisms

- **Data Integrity Proofs** — the [[World Wide Web Consortium]] Data Integrity specification wraps a credential with a detached proof object; supports key types including Ed25519, P-256, and BLS12-381 for [[Zero-Knowledge Proof]] with [[BBS+ Signatures]].
- **VC-JWT** — encodes the credential as a [[JSON Web Token]] signed with standard JWS algorithms; optimised for REST ecosystems and compatible with [[OAuth 2.0]] / [[OpenID Connect]] flows.
- **SD-JWT-VC** — combines [[Selective Disclosure JWT]] with the VCDM, letting holders reveal only chosen claims; each claim is individually hashed and selectively disclosed on presentation.
- **Revocation** — [[Bitstring Status List]] (formerly StatusList2021) encodes revocation state in a compressed bitstring published at a stable URL; verifiers fetch the list and check the credential's bit position.
- **Presentation Exchange** — a companion specification (from the Decentralised Identity Foundation, DIF) defines how verifiers express proof requirements and how wallets fulfil them, interoperating with the VCDM.

### Applications / Use Cases

- **Digital Diplomas and Academic Credentials** — universities issue VCDM credentials for degrees; students hold them in [[Digital Identity Wallet]] apps and share with employers without contacting the university.
- **Healthcare** — vaccination certificates, prescriptions, and professional licences expressed as verifiable credentials enable cross-border recognition with privacy controls.
- **Government Digital Identity** — national identity schemes (e.g. [[European Digital Identity Wallet]] eIDAS 2.0) mandate VCDM as the credential format, enabling citizens to prove age or address without sharing full identity documents.
- **Know Your Customer (KYC) Reuse** — a regulated institution issues a KYC credential; the holder reuses it at other institutions, reducing duplication and data exposure.
- **Supply Chain** — provenance claims (organic certification, customs clearance) encoded as credentials flow through [[Supply Chain]] participants, each verifying the chain of trust.
- **Access Control** — employee or membership credentials replace username/password flows, integrating with [[OAuth 2.0]] via the VC-in-JWT profile.
- **Decentralised Finance** — [[Blockchain]] DeFi platforms use VCDM credentials for on-chain compliance assertions (e.g. accredited investor status) without publishing personal data to public ledgers.
- **Internet of Things** — [[Internet of Things]] devices hold credentials attesting to firmware provenance and certification, enabling zero-touch provisioning.

### Standards & Context

- **W3C VCDM 1.0** (2019) — first Recommendation; established core data model, JSON-LD serialisation, and JWT encoding.
- **W3C VCDM 2.0** (2024) — added `credentialStatus` flexibility, media type `application/vc`, SD-JWT-VC profile references, and improved context stability.
- **Companion Standards**
  - [[World Wide Web Consortium]] Data Integrity — proof mechanism specification.
  - [[World Wide Web Consortium]] DID Core — [[Decentralised Identifier]] specification providing subject and issuer identifiers.
  - IETF SD-JWT — [[Selective Disclosure JWT]] encoding for compact selective disclosure.
  - DIF Presentation Exchange — query language for credential requests.
  - OpenID for Verifiable Credential Issuance (OID4VCI) — [[OpenID Connect]]-based issuance protocol.
  - OpenID for Verifiable Presentations (OID4VP) — [[OpenID Connect]]-based presentation protocol.
- **Regulatory Alignment**
  - EU eIDAS 2.0 mandates VCDM for the [[European Digital Identity Wallet]], directly driving government adoption across EU member states.
  - ISO/IEC 18013-5 (mDL) is a parallel mobile driving licence standard that intersects with VCDM in cross-scheme interoperability work.
- The [[W3C Credentials Community Group]] and the W3C Verifiable Credentials Working Group continue to develop extensions including status mechanisms, schema registries, and [[Decentralised Web Node]] integration.
- The Decentralised Identity Foundation (DIF) produces complementary open standards (Presentation Exchange, DIDComm, Sidetree) that interoperate with the VCDM ecosystem.

### Security & Privacy Considerations

- **Holder Binding** — without explicit holder binding, any party in possession of a credential can present it; SD-JWT-VC and [[Linked Data Proofs]] support key-binding proofs to mitigate this.
- **Correlation Risks** — reuse of credential identifiers or proofs across verifiers can enable tracking; [[Zero-Knowledge Proof]] approaches (BBS+) and unlinkable presentations mitigate correlation.
- **Revocation Privacy** — naive revocation checks leak presentation timing to the issuer; [[Bitstring Status List]] allows offline verification to reduce this leakage.
- **Phishing** — credentials presented over unverifier-authenticated channels are vulnerable; [[Presentation Exchange]] combined with [[OpenID Connect]] nonces addresses this.
- **Key Management** — loss of holder private keys results in credential inaccessibility; recovery mechanisms are an active area of [[Digital Identity Wallet]] design.

### Semantic Classification

### Provenance

## Merged from W3C Verifiable Credentials (needs reconciliation)
W3C Verifiable Credentials (VCs) are a standardised data model and serialisation format published by the World Wide Web Consortium that enables the cryptographic expression of credentials — such as educational qualifications, identity attributes, and professional licences — in a tamper-evident, machine-verifiable form. The standard defines three roles: issuer (creates and signs the credential), holder (stores and presents it), and verifier (validates the signature and claims), forming a trust triangle that operates without requiring a centralised credential registry. VCs are designed to interoperate with Decentralised Identifiers (DIDs) to enable self-sovereign identity systems in which individuals and organisations control their own digital identity without dependence on a single provider. The VC Data Model 2.0 became a W3C Recommendation in 2024, adding selective disclosure via SD-JWT and BBS+ signatures, JSON Schema validation, and expanded media-type support.

### Overview

- W3C Verifiable Credentials arose from the convergence of [[Linked Data]] semantics, [[Public Key Infrastructure]] cryptography, and the emerging self-sovereign identity movement. The Verifiable Credentials Working Group succeeded the Credentials Community Group in 2017, drawing on earlier work by Manu Sporny on JSON-LD and the broader digital-identity community.
- The fundamental insight is that credential verification need not require querying a central issuer database. Instead, the issuer publishes a cryptographic public key via a [[DID Document]], signs the credential at issuance time, and any verifier can independently confirm authenticity using that public key — an offline verification model that improves both privacy and resilience.
- VC Data Model 1.0 became a [[W3C Recommendation]] in November 2019. VC Data Model 2.0 followed in 2024 with expanded serialisation support (JSON-LD, JWT, SD-JWT, CBOR-LD), mandatory JSON Schema validation, and first-class media types (`application/vc+ld+json`, `application/vc+jwt`).
- The standard is intentionally serialisation-agnostic: a credential is a set of claims about a subject, and the same logical credential can be represented as a JSON-LD document, a compact JWT, or a CBOR binary encoding depending on deployment context.

### Key Components

- **Credential Structure**
  - `credentialSubject` — the claims being asserted (e.g. `degree`, `dateOfBirth`, `licenceNumber`) about an identified subject.
  - `issuer` — a [[Decentralised Identifier]] URI or HTTPS URL identifying the credential creator.
  - `issuanceDate` / `validFrom` / `validUntil` — temporal validity constraints.
  - `credentialStatus` — optional pointer to a [[Credential Status List]] (e.g. StatusList2021 bitstring revocation) enabling real-time revocation checking without issuer contact.
  - `proof` — the cryptographic proof over the credential's canonical form, using algorithms such as `Ed25519Signature2020`, `JsonWebSignature2020`, or JWT `alg:ES256`.
- **Proof Formats**
  - Linked Data Proofs — integrity proofs embedded directly in the JSON-LD credential using the Data Integrity specification, suited to semantic interoperability contexts.
  - JWT VCs — credentials serialised as signed JSON Web Tokens for compatibility with existing OAuth/OIDC infrastructure.
  - SD-JWT VCs — selective-disclosure variant of JWT, allowing holders to reveal only chosen claims from a signed set, with cryptographic unlinkability between different presentations.
  - BBS+ Signatures — pairing-based cryptography enabling [[Zero-Knowledge Proof]] presentations of subsets of credential claims with strong unlinkability guarantees.
- **Trust Triangle Roles**
  - Issuer — creates the credential, signs it with their private key, and publishes their public key via a [[DID Document]] or HTTPS `.well-known` endpoint.
  - Holder — receives credentials from issuers, stores them in a [[Digital Identity Wallet]], and presents them (in full or selectively disclosed) to verifiers.
  - Verifier — resolves the issuer's public key, verifies the cryptographic proof, checks revocation status, and evaluates whether the claims satisfy their trust policy.
- **Presentation Exchange**
  - Verifiable Presentations (VPs) are signed envelopes that contain one or more VCs, signed by the holder's key to prove possession and prevent replay attacks.
  - The [[Presentation Exchange]] (DIF PE) specification provides a declarative format for verifiers to request specific credential types and claim sets from holders.
  - [[OpenID for Verifiable Credentials]] (OID4VC) wraps the credential issuance and presentation flows in OIDC/OAuth2 protocol steps for integration with existing identity infrastructure.

### Applications

- **Digital Identity**
  - The EU [[eIDAS Regulation]] 2.0 (2024) mandates VCs as the format for the European Digital Identity Wallet, covering national ID cards, driving licences, and educational diplomas for all EU citizens.
  - Government-issued mobile driving licences (mDL, ISO 18013-5) use VC-compatible data structures for offline presentation in physical and digital contexts.
  - The UK DCMS Trust Framework and Canada's Pan-Canadian Trust Framework reference VC standards for federated government credential schemes.
- **Education and Credentials**
  - [[Open Badges]] 3.0 (IMS Global) adopted VC format as the canonical representation for digital achievement badges and transcripts.
  - Universities and professional bodies issue digitally signed diplomas, micro-credentials, and professional licences as VCs, allowing graduates to share verified qualifications directly with employers without transcript request delays.
  - The European Blockchain Services Infrastructure (EBSI) issues diplomas as VCs to European university graduates, enabling cross-border credential verification.
- **Healthcare**
  - SMART Health Cards (used for COVID-19 vaccination records) implement a VC-compatible format for health credential sharing.
  - Prescription management, clinical trial consent forms, and patient identity binding in cross-institutional care pathways are being prototyped as VC use cases.
  - The CDC and WHO reference SMART Health Links (successor to SMART Health Cards) for international health credential interoperability.
- **Supply Chain and Provenance**
  - Product certifications (organic, fair trade, ISO standards compliance) can be issued as VCs by certifying bodies and verified at any point in the [[Supply Chain Provenance]] trail.
  - The GS1 Digital Link standard is being aligned with VC data models to attach verifiable provenance claims to product identifiers.
- **AI Agent Identity**
  - An emerging frontier involves AI systems carrying VCs that attest their model provenance, capability boundaries, safety evaluations, and governance lineage — enabling verifiable, auditable [[AI Agent Identity]] in multi-agent deployments.
  - This bridges VCs into the [[Artificial Intelligence]] governance domain, where trustworthy AI deployment requires machine-readable assertions about agent properties and constraints.

### Mechanisms

- **DID Resolution and Key Lookup**
  - Verification begins by resolving the issuer's DID to a [[DID Document]] that contains public key material and service endpoints. Supported DID methods include `did:web`, `did:key`, `did:ion`, `did:ebsi`, and others registered in the W3C DID Spec Registries.
  - For HTTPS-based issuers, key material is retrieved from a `/.well-known/did.json` document or JWT issuer metadata endpoint.
- **Revocation**
  - StatusList2021 (now Bitstring Status List v1.0) encodes a compressed bitstring where each credential is assigned a bit position; verifiers fetch the list and check the bit corresponding to their credential's index.
  - Token Status List (IETF RFC draft) provides a JWT-encoded equivalent for JWT VC ecosystems.
- **Selective Disclosure**
  - SD-JWT allows issuers to create a credential with hashed claim disclosures; the holder selects which claims to reveal when presenting, and the verifier can verify only those revealed values.
  - BBS+ signatures allow a holder to generate a zero-knowledge proof of knowledge of a valid signature over a subset of messages, without revealing the signature itself, providing strong unlinkability across presentations.
- **Interoperability Testing**
  - The DIF (Decentralised Identity Foundation) Interoperability Working Group conducts regular plugfests validating multi-vendor credential issuance and presentation flows.
  - The VC Working Group maintains a conformance test suite at `w3c.github.io/vc-test-suite` that implementations must pass to claim W3C conformance.

### Standards & Context

- **W3C Specifications**
  - Verifiable Credentials Data Model 1.0 — W3C Recommendation, November 2019.
  - Verifiable Credentials Data Model 2.0 — W3C Recommendation, 2024; adds SD-JWT, CBOR-LD, Bitstring Status List, and updated media types.
  - Decentralized Identifiers (DIDs) v1.0 — W3C Recommendation, July 2022; provides the identifier layer that VCs depend on for issuer key resolution.
  - Verifiable Credential Data Integrity 1.0 — W3C Recommendation; specifies linked data proof suites (Ed25519, BBS+, ECDSA).
- **Companion Specifications**
  - [[OpenID for Verifiable Credentials]] (OID4VC) — OIDF specification for credential issuance (`OID4VCI`) and presentation (`OID4VP`) over OIDC/OAuth2 transport.
  - Presentation Exchange (DIF PE 2.0) — declarative request language for specifying required credential types and claim constraints.
  - CHAPI (Credential Handler API) — W3C CCG draft enabling browser-native wallet integration.
  - SMART Health Links — HL7 specification extending VC patterns into healthcare credential sharing.
- **Regulatory Alignment**
  - EU [[eIDAS Regulation]] 2.0 and its Implementing Acts mandate VC-compatible formats for the European Digital Identity Wallet.
  - NIST SP 800-63-4 (Digital Identity Guidelines, US) references VC-compatible approaches for attribute-based identity assurance.
  - ISO/IEC 18013-5 (mobile driving licence) aligns its data structures with VC principles for offline verification.
- **Ecosystem Bodies**
  - W3C Verifiable Credentials Working Group — specification development and maintenance.
  - Decentralised Identity Foundation (DIF) — interoperability profiles, Presentation Exchange, and wallet standards.
  - OpenID Foundation (OIDF) — OID4VC suite for VC-over-OIDC deployment.
  - IMS Global / 1EdTech — Open Badges 3.0 adoption of VC format for education.

### Current Landscape (2026)

- On 15 May 2025 the W3C Verifiable Credentials Working Group published the Verifiable Credentials 2.0 family as seven W3C Recommendations, including the Verifiable Credentials Data Model v2.0, Verifiable Credential Data Integrity 1.0, Bitstring Status List v1.0, Securing Verifiable Credentials using JOSE and COSE, and Controlled Identifiers v1.0 (editors Ivan Herman, Michael Jones, Manu Sporny, Ted Thibodeau Jr and Gabe Cohen).
- The headline architectural shift in 2.0 is that it decouples the data model from the securing mechanism, admitting Data Integrity (JSON-LD) proofs, JOSE/COSE (JWT/CWT), BBS selective-disclosure signatures and SD-JWT rather than mandating one, which formally ended years of incompatible proof-format silos.
- Under the current charter (running to 11 October 2026) the Working Group has moved into maintenance mode handling errata only, with no further Recommendations planned, so 2.0 is effectively the stable baseline for deployment.
- The dominant real-world driver is the EU: eIDAS 2.0 (Regulation (EU) 2024/1183, in force 20 May 2024) obliges every Member State to offer a European Digital Identity Wallet (EUDI Wallet) by the end of 2026, with an Article 5b obligation forcing very large online platforms and regulated sectors to accept it.
- Notably, in the EUDI Architecture and Reference Framework (ARF v2.x) support for W3C VCDM 2.0 is only optional and limited to non-qualified attestations, while SD-JWT VC and ISO/IEC 18013-5 mdoc are the two mandatory PID formats, carried over OpenID4VCI (issuance) and OpenID4VP (presentation).
- SD-JWT was finalised as IETF RFC 9901 in 2025, with SD-JWT VC layering credential typing and status on top, sharpening the competitive tension between the W3C stack and the IETF/ISO stack now favoured by government wallets.
- Key open challenges as of 2026 are genuine interoperability (two conforming implementations can still fail to interoperate if one issues SD-JWT and the other expects Data Integrity proofs), unlinkability and privacy-preserving selective disclosure at scale (BBS), and the risk of W3C VC being sidelined in the largest deployment (450 million EU citizens) by SD-JWT VC and mdoc.

### References

- 1. W3C Verifiable Credentials Working Group (2025). Verifiable Credentials Data Model v2.0 (W3C Recommendation, 15 May 2025). https://www.w3.org/TR/vc-data-model-2.0/
- 2. W3C (2025). The Verifiable Credentials 2.0 family of specifications is now a W3C Recommendation. https://www.w3.org/news/2025/the-verifiable-credentials-2-0-family-of-specifications-is-now-a-w3c-recommendation/
- 3. Michael Jones (2025). W3C Verifiable Credentials 2.0 Specifications are Now Standards. https://self-issued.info/?p=2694
- 4. European Commission / EUDI Wallet (2025). Architecture and Reference Framework. https://eudi.dev/2.2.0/architecture-and-reference-framework-main/
- 5. Shane De Coninck (2026). EUDI Credential Formats Crash Course: X.509, mDL, SD-JWT VC and W3C VC. https://shanedeconinck.be/posts/eudi-credential-formats-crash-course/
- 6. Evertrust (2026). EUDI Wallet 2026: Five Things Private PKI Teams Must Prepare (eIDAS 2.0, Regulation (EU) 2024/1183). https://evertrust.io/blog/eudi-wallet-private-pki/

### Provenance

