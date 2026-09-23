
Privacy-preserving identity refers to identity management architectures and protocols that enable individuals to prove attributes, credentials, or facts about themselves to verifiers without revealing unnecessary personal information, leveraging cryptographic techniques such as zero-knowledge proofs, selective disclosure, and unlinkable credentials. These systems reconcile strong authentication guarantees with user privacy, countering surveillance by minimising the attack surface of identity data aggregation and preventing cross-context correlation of user activity. They are foundational to self-sovereign identity frameworks, anonymous credential schemes, hardware-backed identity wallets, and privacy-respecting regulatory compliance workflows. The field spans cryptographic research, standardisation bodies (W3C, IETF, ISO), and deployment infrastructure including secure enclaves and decentralised ledgers.

- ### Overview
  - Privacy-preserving identity emerged from academic cryptography in the 1980s–2000s and has accelerated into production deployments during the 2020s, driven by GDPR-era data minimisation mandates, [[Self-Sovereign Identity]] movements, and the European Digital Identity Wallet mandate under [[eIDAS 2.0]].
  - The fundamental tension it resolves is between two incompatible goals of classical identity systems:
    - **Authentication strength** — verifiers need high assurance that a credential is genuine and belongs to the presenter.
    - **Privacy** — holders must not sacrifice control over their personal data or enable surveillance by issuers, verifiers, or infrastructure providers.
  - Classical [[Federated Identity]] systems (OAuth2, SAML, OpenID Connect) delegate authentication to an identity provider (IdP) who learns every relying party the user visits, creating a single point of surveillance. Privacy-preserving alternatives eliminate the IdP from the presentation flow entirely.
  - The key insight is that cryptographic proofs can substitute for data: instead of showing a passport, a holder computes a proof that "this credential was signed by a trusted authority AND the birthdate field satisfies age > 18" — revealing nothing else.

- ### Key Mechanisms
  - **[[Zero-Knowledge Proof]] (ZKP)** — allows a prover to convince a verifier of a predicate's truth without revealing any witness. Applied to identity, this means proving "I hold a valid government credential" without revealing the credential or the subject's identity.
  - **[[Selective Disclosure]]** — credential formats where individual attributes can be revealed or hidden independently. BBS+ signatures and SD-JWT both support this; the former provides stronger unlinkability guarantees.
  - **[[BBS+ Signatures]]** — a pairing-based multi-message signature scheme that enables constant-size unlinkable proofs of subsets of signed messages. Standardised through IETF drafts and used in W3C DID-based credential ecosystems.
  - **[[zk-SNARK]] / zk-STARK circuits** — succinct non-interactive proofs enabling arbitrary predicate proofs (range proofs, set membership, hashing constraints) over credential fields, used in high-assurance or on-chain verification contexts.
  - **[[Cryptographic Commitment]]** — allows a prover to commit to a value without revealing it; used in CL signatures and Pedersen-commitment-based credential schemes to bind credential attributes to the holder without linkable identifiers.
  - **[[Trusted Execution Environment]] (TEE)** — hardware-backed secure enclaves (Intel SGX, ARM TrustZone, Apple Secure Enclave) that hold credential key material and perform signing operations in isolation, providing a tamper-resistant trust anchor for [[Digital Identity Wallet]] applications.
  - **[[Decentralized Identifiers]] (DIDs)** — W3C-standardised self-controlled identifiers whose DID documents are resolvable from [[Blockchain]] ledgers or peer-to-peer registries, removing reliance on central certificate authorities.

- ### Credential Formats & Protocols
  - **W3C Verifiable Credentials (VC) Data Model** — JSON-LD-based format for issuer-signed credential claims; defines issuer, subject, and verifier roles; supports multiple proof formats including JSON Web Signature (JWS), BBS+, and zk-SNARK proofs.
  - **SD-JWT (Selective Disclosure for JWTs)** — IETF draft format combining JWT with a salted hash commitment structure, enabling selective disclosure of individual claims while retaining compatibility with existing OAuth2 infrastructure. Adopted by the EUDIW technical specification.
  - **ISO/IEC 18013-5 (mDL)** — mobile driving licence standard using CBOR and COSE signatures with selective disclosure; deployed in iOS/Android digital wallet integrations in multiple jurisdictions.
  - **Idemix (Identity Mixer)** — IBM's anonymous credential system based on CL signatures, offering multi-show unlinkability and pseudonymous authentication; used in Hyperledger Fabric.
  - **U-Prove** — Microsoft Research anonymous credential tokens providing one-show unlinkability with minimal computational overhead; contributed to IETF.

- ### Applications & Use Cases
  - **Age verification** — online platforms can verify "user is 18+" without learning name, birthdate, or identity. Deployed by European telcos and content platforms under national age assurance regulations.
  - **Financial KYC / AML** — regulated entities can receive proof of KYC completion from a trusted KYC provider without receiving raw identity documents, reducing data liability. The [[Know Your Customer]] predicate is disclosed; personal data is not.
  - **Healthcare credential verification** — clinician professional licences, vaccination certificates, and insurance eligibility are provable without exposing full health records. Piloted under EU COVID-19 Digital Certificate infrastructure.
  - **Cross-border identity portability** — [[eIDAS 2.0]] mandates that EU citizens can use a national digital identity wallet to authenticate across member state services with selective attribute disclosure.
  - **Web3 / DeFi pseudonymous compliance** — users prove regulatory compliance (not sanctioned, accredited investor status) to DeFi protocols on-chain using [[zk-SNARK]] identity proofs without doxxing their wallet-to-identity link.
  - **Enterprise workforce identity** — employees authenticate to SaaS services proving role membership without central SSO providers logging every access.
  - **Metaverse and spatial computing** — [[Trusted Execution Environment]]-backed identity in [[Metaverse]] environments enables age-gating and creator royalty attribution without linking persistent pseudonymous avatars to real-world identities.

- ### Standards & Context
  - **W3C Verifiable Credentials Data Model 2.0** — core credential format, controlled identifiers (DIDs), and proof formats. Published as W3C Recommendation.
  - **W3C DID Core 1.0** — Decentralized Identifiers specification, W3C Recommendation, underpinning portable credential subjects.
  - **IETF SD-JWT** — `draft-ietf-oauth-selective-disclosure-jwt`; selective disclosure extension to RFC 7519 (JWT).
  - **IETF BBS Signature Scheme** — `draft-irtf-cfrg-bbs-signatures`; cryptographic specification for BBS+ from the CFRG working group.
  - **ISO/IEC 18013-5** — mDL (mobile driving licence) with selective disclosure; adopted by Apple Wallet, Google Wallet.
  - **ISO/IEC 29101** — privacy architecture framework for identity management systems.
  - **eIDAS 2.0 (Regulation EU 2024/1183)** — mandates European Digital Identity Wallet (EUDIW) with selective disclosure and [[Privacy-Preserving Authentication]] for all EU member states.
  - **NIST SP 800-63-4** — US digital identity guidelines covering assurance levels and privacy requirements for authentication.
  - **OpenID for Verifiable Credentials (OID4VC)** — suite of OpenID Foundation specifications (OID4VCI, OID4VP) layering VC issuance and presentation over OAuth2 / OpenID Connect infrastructure; adopted by EUDIW architecture.
  - Relevant regulators include the European Data Protection Board (EDPB), UK ICO, and NIST, all of which require data minimisation principles that privacy-preserving identity directly implements.

- ### Historical Lineage
  - **1985** — David Chaum's "Security Without Identification" proposes anonymous credential systems; introduces blinded signatures.
  - **2001** — Camenisch and Lysyanskaya publish CL signatures enabling efficient multi-show unlinkable credential proofs.
  - **2004** — IBM Identity Mixer (Idemix) implements CL signatures; Microsoft U-Prove tokens introduced.
  - **2015** — Decentralized Identity Foundation (DIF) formed; early DID drafts circulate.
  - **2019** — W3C Verifiable Credentials Working Group publishes first Candidate Recommendation.
  - **2021** — BBS+ signatures gain traction in DIF and IETF CFRG; Hyperledger AnonCreds adopts BBS+.
  - **2022** — EU Digital Identity Wallet Architecture and Reference Framework (ARF) published; SD-JWT IETF draft initiated.
  - **2024** — eIDAS 2.0 published as EU law; ISO 18013-5 widely deployed in Apple/Google wallets; OID4VC profiles stabilised.

- ### Current Landscape (2026)
  - eIDAS 2.0 (Regulation (EU) 2024/1183, in force 20 May 2024) has become the anchoring force for privacy-preserving identity, obliging every EU member state to provide at least one European Digital Identity (EUDI) Wallet by the end of 2026, with mandatory acceptance by regulated sectors (banking, telecoms, healthcare, platforms) from December 2027.
  - The EUDI Architecture and Reference Framework has iterated rapidly through 2025-2026 (version 2.8.0, published 2 February 2026), fixing SD-JWT VC and ISO/IEC 18013-5 mdoc as the credential formats over OpenID4VCI/OpenID4VP, while zero-knowledge proofs remain the single open discussion topic pending selection of a concrete scheme.
  - The EU age-verification "mini wallet" blueprint moved from a July 2025 release to a feature-ready, ZKP-based solution on 15 April 2026, letting users prove they are over 18 without disclosing birthdate or identity; it is being piloted by front-runner states France, Denmark, Greece, Italy, Spain, Cyprus and Ireland, with per-transaction verification cost projected to fall from EUR 1-5 to under EUR 0.05.
  - Standards bodies have advanced the privacy toolkit: ETSI TR 119 476 catalogues cryptographic selective-disclosure and unlinkability schemes for eIDAS 2.0, ISO/IEC TS 18013-7:2025 extends mDL add-on functions, and the EDPS TechDispatch 3/2025 (December 2025) foregrounds anonymous-credential technology to counter over-disclosure and linkability.
  - In the US, mobile driving licences reached roughly 21 states plus Puerto Rico by early 2026 (ISO/IEC 18013-5, TSA-accepted at 250-plus checkpoints), with California passing SB 169 to expand its programme to 60% of drivers and roughly 8 million mDLs issued nationwide, though real activation stayed near 7% of eligible holders.
  - Key players span state issuers and platform wallets (Apple, Google, Samsung, Idemia), EUDI-ecosystem vendors, and a Tier-A zero-knowledge KYC category (zkMe, Galactica, Verifyo) shipping reusable ZK proofs rather than repeated document scans.
  - Open challenges as of 2026 include US fragmentation (around 17 incompatible wallets, largely optional privacy protections and a "phone home" default the ACLU and EFF are contesting), unresolved unlinkability with salted-hash formats such as SD-JWT, and the still-unselected EUDI ZKP scheme that leaves attestation-provider linkability only partly mitigated.

- ### References
  - 1. European Commission / EUDI Wallet (2026). Age Verification Use Case Manual and EU Age Verification Blueprint. https://ageverification.dev/
  - 2. European Commission, Digital Strategy (2026). The EU approach to age verification. https://digital-strategy.ec.europa.eu/en/policies/eu-age-verification
  - 3. EUDI Wallet ARF (2026). Discussion topic: Zero-Knowledge Proof. https://eu-digital-identity-wallet.github.io/eudi-doc-architecture-and-reference-framework/2.9.0/discussion-topics/g-zero-knowledge-proof/
  - 4. European Data Protection Supervisor (2025). TechDispatch 3/2025 - Digital Identity Wallets. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en
  - 5. PM Researcher (2026). The State of Digital ID in the US, Explained. https://pmresearcher.substack.com/p/the-state-of-digital-id-in-the-us
  - 6. Biometric Update (2026). US states deepen mobile ID rollouts as focus shifts to verification and privacy. https://www.biometricupdate.com/202605/us-states-deepen-mobile-id-rollouts-as-focus-shifts-to-verification-and-privacy

- ### Provenance

