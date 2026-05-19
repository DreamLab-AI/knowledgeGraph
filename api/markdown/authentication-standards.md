- ### Definition
  - Authentication Standards encompass protocols and specifications for verifying user identity in digital systems, particularly FIDO2 and WebAuthn standards that enable passwordless, phishing-resistant authentication using public key cryptography and hardware authenticators for secure access to metaverse platforms and blockchain applications.

- ### Semantic Classification
  - owl-class:: infrastructure:AuthenticationStandards
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]] (ngm)
  - is-subclass-of:: [[Security Standards]]
  - requires:: [[Hardware Authenticators]], [[Public Key Cryptography]], [[Client Implementation]]
  - enables:: [[Passwordless Authentication]], [[Phishing Resistance]], [[Secure Platform Access]]

- ### Content

  ### Technical Details
  Key standards include:
  - **FIDO2**: FIDO Alliance umbrella standard combining WebAuthn + CTAP (Client-to-Authenticator Protocols)
  - **WebAuthn**: W3C web standard API for browser-based passwordless authentication (Level 3 in development)
  - **Passkeys**: FIDO credentials using public key cryptography, unique and domain-bound

  ### Security Benefits
  FIDO standards provide phishing-resistant authentication where biometric data never leaves user device. Credentials are bound to specific domains, preventing replay attacks.

  ### Regulatory Recognition
  CISA recommends phishing-resistant MFA as gold standard. NIST SP 800-63B identifies FIDO2/WebAuthn as meeting AAL3 (highest assurance level) with hardware authenticators.

  ### Market Adoption
  85% of devices worldwide support FIDO2/WebAuthn. Passwordless authentication market projected to reach $61.45 billion by 2032.

- ### Provenance
  - sources:: [[W3C]]
  - migration-date:: 2026-04-26T00:00:00Z