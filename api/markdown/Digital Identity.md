A digital representation of an entity encompassing personally identifiable information, behavioral data, credentials, and authentication attributes that enables individuals and organizations to establish presence, ownership, and trust within virtual environments, blockchain networks, and metaverse platforms.

### Semantic Classification

### Content

## Technical Details

- **Metaverse Identity Components**:
  - Representation: Avatars, digital personas
  - Data: Preferences, behaviors, transaction history
  - Identification: Credentials, keys, attestations
- **Technology Stack**:
  - Decentralized identifiers (DIDs)
  - Verifiable credentials (VCs)
  - Blockchain-based identity anchoring
  - Biometric authentication
- **Key Characteristics**:
  - Portable across platforms and metaverses
  - User-controlled with selective disclosure
  - Cryptographically verifiable
  - Persistent across sessions
- **Current Trends**: Integration with physical identity, expanding regulatory frameworks (EU AI Act, eIDAS 2.0), interoperability focus across platforms

## Applications

- Metaverse user profiles
- NFT and asset ownership
- Cross-platform authentication
- Virtual reputation systems
- Decentralized social networks

### Current Landscape (2026)

- The EU's eIDAS 2.0 (Regulation (EU) 2024/1183) entered into force on 20 May 2024, obliging every Member State to offer at least one certified European Digital Identity Wallet (EUDIW) to citizens and residents by the end of 2026, with mandatory acceptance by banks, VLOPs and other regulated relying parties performing Strong Customer Authentication following by late 2027.
- The EUDIW rests on the Architecture and Reference Framework (ARF v1.4), which fixes ISO/IEC 18013-5 mdoc and IETF SD-JWT VC as credential formats, OpenID4VCI for issuance and OpenID4VP for presentation, ECDSA P-256/SHA-256 as the baseline cryptography, and the eIDAS Trusted Lists as the trust anchor; a fresh round of seven trust-service implementing regulations was published on 30 July 2025.
- W3C published the Verifiable Credentials 2.0 family as a full Recommendation on 15 May 2025 (seven specifications including the VC Data Model v2.0), designed to be "crypto-modular" to accommodate emerging post-quantum cryptography and zero-knowledge proofs.
- The W3C Digital Credentials API moved onto the standards track in the Federated Identity Working Group (First Public Working Draft 1 July 2025, format-agnostic), with Google and Apple already shipping early browser and OS implementations for wallet-mediated credential presentation.
- Mobile driving licences reached mainstream US deployment: ISO/IEC 18013-5 mDLs are live in a large share of states via Apple, Google and Samsung Wallets (California passed roughly 600,000 enrolments in its first months), while ISO/IEC TS 18013-7:2024 standardised remote online presentation and a refreshed 18013-7 aligned to OpenID4VP and the High Assurance Interoperability Profile (HAIP) is expected in 2026.
- On 5 May 2025 the OpenID Foundation ran the first public cross-region interoperability demonstration spanning OpenID4VP draft 24, HAIP ID2, the W3C Digital Credentials API, FIDO CTAP, ISO 18013-5/7 and SD-JWT, with multi-wallet remote testing reaching about 91.75% success.
- FIDO passkeys (WebAuthn/FIDO2) are being positioned as the phishing-resistant authentication layer complementing verified digital credentials, with a September 2025 FIDO Alliance white paper recommending VDC-based identity proofing at enrolment and passkeys for repeated, pseudonymous re-authentication inside the EUDIW.
- Open challenges as of 2026 include selective-disclosure privacy and unlinkability under real relying-party pressure, verifier trust management and issuer revocation at scale, cross-border and cross-format interoperability, migration to post-quantum signatures, and the practical strain of meeting the December 2026 wallet deadline flagged by the EDPS TechDispatch #3/2025.

### References

- 1. European Data Protection Supervisor (2025). TechDispatch #3/2025 - Digital Identity Wallets. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en
- 2. W3C (2025). The Verifiable Credentials 2.0 family of specifications is now a W3C Recommendation. https://www.w3.org/news/2025/the-verifiable-credentials-2-0-family-of-specifications-is-now-a-w3c-recommendation/
- 3. W3C (2025). W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web. https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web/
- 4. OpenID Foundation (2025). OpenID Foundation Demonstrates Real-World Interoperability of New Digital Identity Standards. https://openid.net/openid-foundation-demonstrates-real-world-interoperabiity-of-new-digital-identity-standards/
- 5. FIDO Alliance (2025). Passkeys and Verifiable Digital Credentials (White Paper). https://fidoalliance.org/wp-content/uploads/2025/09/FIDO-White-Paper-passkeys-and-verifiable-digital-credentials.pdf
- 6. Corbado (2025). Mobile Driver's License are here: the ultimate Guide to mDLs. https://www.corbado.com/blog/mobile-drivers-license

### Provenance

