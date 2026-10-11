A decentralised identifier, a type of globally unique identifier that enables verifiable, self-sovereign digital identity without reliance on a central registry.

### Semantic Classification

### Content

- A decentralised identifier is a persistent identifier that a subject controls independently of any centralised authority. It resolves to a document containing the public keys and service endpoints needed to interact with the subject cryptographically.
- Decentralised identifiers underpin self-sovereign identity models and are commonly used alongside verifiable credentials. They are defined by a World Wide Web Consortium specification that establishes a syntax and a resolution mechanism across multiple methods.

### Current Landscape (2026)

- The W3C Decentralised Identifier Working Group, re-chartered in April 2024 (running to October 2026), advanced DID Core beyond the 2022 v1.0 Recommendation: a First Public Working Draft of DIDs v1.1 was published in January 2025 and reached Candidate Recommendation on 5 March 2026, not expected to become a full Recommendation before April 2026.
- The did:tdw method was renamed did:webvh ("did:web + Verifiable History") in January 2025, with v0.5 released that month and v1.0 following on 23 January 2025; it extends did:web with a self-certifying identifier (SCID), a verifiable update history, optional pre-rotation keys and witness approval, and has reference implementations underway in Python, TypeScript, Rust and Go.
- Regulatory demand became the dominant driver: the EU's revised eIDAS (Regulation (EU) 2024/1183) entered into force on 20 May 2024, mandating every Member State to offer a European Digital Identity (EUDI) Wallet by the end of 2026, with private-sector acceptance in regulated sectors from 2027.
- The POTENTIAL Large-Scale Pilot concluded on 29 September 2025, having validated cross-border wallet use across 19 Member States and Ukraine (over 1,000 successful transactions, 249 cross-border); the EUDI Architecture Reference Framework reached v2.6.0 in October 2025 and the Brussels EUDI Wallets Launchpad in December 2025 demonstrated cross-Member-State conformance.
- The wider stack matured around DIDs: the W3C Verifiable Credentials Data Model 2.0 reached Recommendation status in May 2025, and the interoperability baseline has converged on OpenID4VCI/OpenID4VP, IETF SD-JWT VC and ISO/IEC 18013-5 mdoc as the common credential and protocol layer.
- Key players and methods span did:web (production-ready but not recommended for mature use), did:ebsi (EU/EBSI, aligned with eIDAS), KERI-based did:webs and the new did:webvh for blockchain-free self-certifying identifiers, plus vendors such as Sphereon, Northern Block and Spherity supplying EUDI-conformant tooling.
- Open challenges as of 2026: no single DID method dominates and KERI-inspired methods remain immature and not yet broadly interoperable; the EU ARF leans on SD-JWT VC and mdoc rather than mandating DIDs, raising questions about DID Core's role; and privacy properties such as unlinkability, key-management security and scalable revocation remain active work items ahead of the December 2026 wallet-issuance deadline.

### References

- 1. W3C Decentralized Identifier Working Group (2026). Decentralized Identifiers (DIDs) v1.1 (Candidate Recommendation Snapshot). https://www.w3.org/TR/did-1.1/
- 2. Decentralized Identity Foundation (2025). The did:webvh DID Method — did:web + Verifiable History, v1.0. https://identity.foundation/didwebvh/
- 3. W3C public-credentials list (2025). Announcing v0.5 of the did:webvh (formerly did:tdw) DID Method Specification. https://lists.w3.org/Archives/Public/public-credentials/2025Jan/0009.html
- 4. European Commission (2026). European Digital Identity (EUDI) Regulation. https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation
- 5. POTENTIAL Consortium (2025). POTENTIAL Pilot Concludes, Setting the Stage for the EUDI Wallet (final press release, 29 September 2025). https://www.digital-identity-wallet.eu/wp-content/uploads/2025/10/Potential-Final-Press-Release.docx.pdf
- 6. GS1 (2025). Verifiable Credentials and Decentralised Identifiers — Technology Landscape. https://ref.gs1.org/docs/2025/VCs-and-DIDs-tech-landscape

### Provenance

