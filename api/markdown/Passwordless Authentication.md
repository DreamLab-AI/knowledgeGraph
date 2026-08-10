public:: true

# Passwordless Authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:passwordless-authentication",
  "@type": "Page",
  "vc:slug": "passwordless-authentication",
  "title": "Passwordless Authentication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:passwordless-authentication",
  "@type": "Class",
  "label": "Passwordless Authentication",
  "definition": "Passwordless Authentication encompasses identity verification mechanisms that prove user identity without requiring the user to memorise or enter a shared-secret password. Instead, authentication relies on possession of a hardware token or platform authenticator, biometric characteristics, cryptographic key pairs, or one-time codes delivered through a trusted out-of-band channel. The FIDO2 standard — comprising the W3C WebAuthn specification and the FIDO Alliance CTAP protocol — provides the primary open standard for passkey-based passwordless authentication, binding credentials to device hardware and enabling phishing-resistant login flows. By eliminating the shared secret as an authentication factor, passwordless schemes structurally defeat credential-stuffing, password-spray, and phishing attack classes.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication-mechanism",
      "label": "Authentication Mechanism"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:passkey-authentication",
      "label": "Passkey Authentication"
    },
    {
      "@id": "urn:ngm:class:possession-based-authentication",
      "label": "Possession-Based Authentication"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:hardware-security-key",
        "label": "Hardware Security Key"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:challenge-response-protocol",
        "label": "Challenge-Response Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:trusted-platform-module",
        "label": "Trusted Platform Module"
      },
      {
        "@id": "urn:ngm:class:secure-enclave",
        "label": "Secure Enclave"
      },
      {
        "@id": "urn:ngm:class:identity-proofing",
        "label": "Identity Proofing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:phishing-resistant-authentication",
        "label": "Phishing-Resistant Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-identity-management",
        "label": "Digital Identity Management"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:web-authn",
        "label": "WebAuthn"
      },
      {
        "@id": "urn:ngm:class:fido2",
        "label": "FIDO2"
      },
      {
        "@id": "urn:ngm:class:fido-alliance",
        "label": "FIDO Alliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:password-authentication",
        "label": "Password-Based Authentication"
      },
      {
        "@id": "urn:ngm:class:knowledge-based-authentication",
        "label": "Knowledge-Based Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:identity-federation",
        "label": "Identity Federation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Passwordless Authentication is a set of identity verification approaches that prove who a user is without requiring them to memorise and submit a shared-secret [[Password-Based Authentication|password]]. Verification instead relies on one or more of: cryptographic key pairs managed by a [[Hardware Security Key]] or platform authenticator (the FIDO2/[[WebAuthn]] model), [[Biometric Authentication]] factors such as fingerprint or face geometry that unlock a device-bound private key, magic links or one-time codes delivered to a trusted channel (email or SMS), or device possession signals. Because no reusable secret is transmitted to or stored on the server, the structural vulnerabilities of passwords — credential stuffing, phishing, server-breach exposure — are eliminated by design, making passwordless schemes an increasingly foundational component of [[Zero Trust Architecture]] and enterprise [[Identity and Access Management]].

- ### Overview
  - **Why passwords fail** — Passwords are vulnerable along multiple attack dimensions: users reuse them across services (enabling credential-stuffing after any breach), choose guessable values, and are deceived into submitting them to phishing sites. Server-side storage of password hashes remains a target even when salted and hashed with modern algorithms. The cumulative support cost of forgotten-password resets is a material operational expense for large deployments.
  - **The passwordless shift** — Rather than improve the password model, passwordless authentication replaces the shared-secret factor entirely with a factor of possession or inherence. The private signing key never leaves the device hardware; only a public key is shared with the relying party. The server's exposure on breach shrinks to public-key material, which is useless to an attacker.
  - **Scope** — The term covers a spectrum: fully passwordless flows (FIDO2 passkeys, hardware tokens) where no password exists; step-up flows where a passwordless second factor replaces the password; and hybrid environments where legacy password infrastructure is retained for recovery but not for primary login.

- ### Key Components and Mechanisms
  - **[[FIDO2]] protocol suite**
    - Developed by the [[FIDO Alliance]] and standardised as [[WebAuthn]] by the W3C in 2019.
    - Consists of two sub-protocols: WebAuthn (browser/relying-party API) and CTAP (Client-to-Authenticator Protocol), which governs communication between the client platform and an external authenticator such as a [[Hardware Security Key]].
    - Uses [[Public-Key Cryptography]]: an asymmetric key pair is generated per relying-party origin during registration; the private key is stored in hardware-backed storage ([[Secure Enclave]], [[Trusted Platform Module]]).
  - **[[Challenge-Response Protocol]]**
    - At login, the server sends a random challenge; the authenticator signs it with the private key after verifying user presence (touch or biometric); the server verifies the [[Digital Signature]] against the stored public key.
    - Origin binding in the signed assertion prevents credential replay across domains, defeating phishing.
  - **Passkeys**
    - Consumer-branded FIDO2 credentials introduced by the FIDO Alliance in 2022, supported natively by Apple, Google, and Microsoft.
    - Synchronise across a user's devices via platform key managers (iCloud Keychain, Google Password Manager, Windows Hello), resolving the prior loss-of-device problem.
    - Cross-device flows allow a passkey on a smartphone to authenticate a session on a desktop via QR code and [[Bluetooth]] proximity verification.
  - **[[Biometric Authentication]]**
    - Used locally on the device to authorise release of the private key; biometric data never leaves the device and is never transmitted to the server.
    - Distinct from server-side biometric verification (which has different privacy and accuracy characteristics).
  - **Magic links and OTP channels**
    - An email or SMS one-time link or code can provide passwordless access without cryptographic hardware; these approaches are weaker (email account compromise allows account takeover) but require no special client software.
    - Considered a lower-assurance passwordless modality and not generally classified as phishing-resistant.
  - **[[Hardware Security Key]]**
    - Physical devices (YubiKey, Google Titan Key, etc.) implementing FIDO2/CTAP.
    - Provide the highest assurance level: private key is generated and stored entirely within the hardware security boundary, never exportable.

- ### Applications and Use Cases
  - **Consumer web authentication** — Major platforms (Google, Apple ID, Microsoft Account, GitHub) now support passkeys as a primary login method, replacing or supplementing passwords and SMS OTP.
  - **Enterprise workforce identity** — [[Identity and Access Management]] platforms (Okta, Microsoft Entra ID, Ping Identity) offer passwordless login for employees, integrated with [[Single Sign-On]] federations and [[OAuth 2.0]] / [[OpenID Connect]] flows.
  - **Government and regulated sectors** — High-assurance FIDO2 hardware tokens meet NIST SP 800-63B AAL3 requirements, making them applicable in healthcare, defence, and financial services where phishing resistance is mandated.
  - **[[Zero Trust Architecture]] deployments** — Continuous-verification environments benefit from cryptographic device attestation carried by passkeys, which provides stronger device-identity signals than certificate-based approaches.
  - **[[Digital Identity Wallet]] integration** — Emerging wallet architectures (EU eIDAS 2.0 EUDI wallet, mDL specifications) use FIDO2-compatible cryptographic binding as a credential-presentation layer.
  - **Developer and API authentication** — SSH key pairs and FIDO2-backed SSH (OpenSSH 8.2+) provide passwordless authentication to servers and code repositories without transmitting secrets over the network.
  - **[[Decentralised Identity]] systems** — [[Verifiable Credentials]] frameworks leverage the same asymmetric-key primitives as passkeys, enabling passwordless presentation of identity claims to verifiers without central identity brokers.

- ### Relationships
  - subClassOf:: [[Authentication Mechanism]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Biometric Authentication]]
  - uses:: [[Hardware Security Key]]
  - uses:: [[Digital Signature]]
  - uses:: [[Challenge-Response Protocol]]
  - requires:: [[Trusted Platform Module]]
  - requires:: [[Secure Enclave]]
  - requires:: [[Identity Proofing]]
  - enables:: [[Phishing-Resistant Authentication]]
  - enables:: [[Digital Identity Management]]
  - enables:: [[Zero Trust Architecture]]
  - standardizedBy:: [[WebAuthn]]
  - standardizedBy:: [[FIDO2]]
  - standardizedBy:: [[FIDO Alliance]]
  - relatedTo:: [[Multi-Factor Authentication]]
  - relatedTo:: [[Single Sign-On]]
  - relatedTo:: [[OAuth 2.0]]
  - relatedTo:: [[OpenID Connect]]
  - relatedTo:: [[Digital Identity Wallet]]
  - contrastsWith:: [[Password-Based Authentication]]
  - contrastsWith:: [[Knowledge-Based Authentication]]
  - supports:: [[Access Control]]
  - supports:: [[Identity Federation]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Verifiable Credentials]]

- ### Standards and Governance Context
  - **W3C WebAuthn** — Web Authentication API specification (Level 1: 2019, Level 2: 2021, Level 3: in progress); defines the browser-side JavaScript API that relying parties use to register and authenticate FIDO2 credentials.
  - **FIDO Alliance CTAP** — Client-to-Authenticator Protocol governs how a browser or operating system communicates with an authenticator over USB, NFC, or Bluetooth. CTAP2.1 introduced PIN/UV (user verification) enhancements and credential management.
  - **NIST SP 800-63B** — US federal digital identity guidelines classifying authenticator assurance levels (AAL1–AAL3); FIDO2 hardware tokens satisfy AAL2 and AAL3 depending on configuration; passkeys generally qualify for AAL2.
  - **ISO/IEC 24760** — International standard for identity management frameworks; passwordless mechanisms map onto its authentication-factor taxonomy.
  - **eIDAS 2.0** — EU regulation mandating that member states provide EUDI wallets to citizens; FIDO2-compatible cryptography underpins the wallet credential-presentation layer.
  - **NIST SP 800-207** — Zero Trust Architecture guidance explicitly endorses phishing-resistant authenticators as a pillar of zero-trust enforcement, reinforcing the alignment between passwordless schemes and [[Zero Trust Architecture]].

- ### Challenges and Limitations
  - **Account recovery** — Loss or damage of a device holding device-bound credentials requires a recovery mechanism (backup codes, trusted devices, identity re-proofing) that must be carefully designed to avoid re-introducing phishing-vulnerable flows.
  - **Legacy application compatibility** — Many enterprise and government applications assume password-based login; migration requires middleware, identity proxies, or application refactoring.
  - **Accessibility** — Biometric and hardware-token factors may not be equally accessible to all users; inclusive design must provide alternative assurance paths.
  - **Phishing of OTP/magic-link modalities** — Only cryptographic (FIDO2) passwordless modalities are phishing-resistant; email magic links and SMS OTP are susceptible to real-time phishing and SIM-swap attacks.
  - **Enterprise PKI integration** — Existing certificate-based [[Public Key Infrastructure]] deployments need coexistence or migration strategies when adopting FIDO2-based passwordless infrastructure.

- ### Current Landscape (2026)
  - Passkeys (FIDO2/WebAuthn discoverable credentials) moved from roadmap to default: the FIDO Alliance's State of Passkeys 2026 report (Sapio Research, April 2026) estimates 5 billion passkeys in active use, 90% consumer awareness and 75% of people having enabled a passkey on at least one account, with roughly 48% of the world's top 100 sites supporting them.
  - NIST finalised SP 800-63-4 in July 2025, for the first time formally recognising synced (syncable) passkeys as AAL2-compliant and mandating phishing-resistant authenticators for AAL2, while reserving AAL3 for non-exportable hardware-bound keys (YubiKey, Google Titan, TPM/Secure Enclave) — SMS OTP no longer qualifies.
  - Microsoft made passkeys the default for new consumer accounts in May 2025 ("nearly a million passkeys a day") and in March 2026 began general-availability rollout of Passkey Profiles across Entra ID tenants, adding a passkeyType property and group-based device-bound vs synced policies with attestation enforcement, auto-applying defaults to non-configured tenants from April 2026.
  - The FIDO Credential Exchange Protocol and Credential Exchange Format (CXP/CXF) were published as a Proposed Standard in August 2025, tackling vendor lock-in; Apple shipped CXF-based on-device transfer in iOS 26 / macOS 26 (via ASCredentialExportManager / ASCredentialImportManager), with Google, 1Password, Bitwarden and Dashlane contributing.
  - Key players and platform maturity: Apple (iCloud Keychain), Google (Google Password Manager, 1 billion-plus users signing in with passkeys), and Microsoft (Entra ID) cover most workforce and consumer devices, alongside IdPs Okta, Auth0, Ping and hardware/credential vendors Thales (36 FIDO-certified products) and HID.
  - Regulatory pressure is compressing timelines: the UAE CBUAE mandate retires standalone SMS/email OTP by 31 March 2026, India's RBI Authentication Directions require compliance by 1 April 2026, and Singapore's PDPC bars NRIC-based authentication from 1 January 2027 — pushing phishing-resistant auth from best practice to obligation.
  - Open challenges as of 2026: account recovery and the synced-vs-device-bound assurance trade-off (synced credentials cannot be isolated in secure hardware and are exposed to on-device malware), uneven European deployment (splitting synced-only vs device-bound rather than mixed), lagging desktop adoption (~20% versus 55-60% on mobile apps), and authenticating AI agents, where OAuth 2.1 with PKCE (baselined by the MCP 2025-11-25 spec) is emerging alongside passkeys.

- ### References
  - 1. FIDO Alliance (2026). FIDO Alliance Reports Accelerating Global Passkey Adoption on World Passkey Day 2026 / The State of Passkeys 2026 Report. https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/
  - 2. Security Boulevard (2026). The Complete Guide to Passwordless Authentication in 2026: How It Works, Why It Matters, and How to Implement It. https://securityboulevard.com/2026/04/the-complete-guide-to-passwordless-authentication-in-2026-how-it-works-why-it-matters-and-how-to-implement-it/
  - 3. Clerk (2026). Authentication Trends in 2026: Passkeys, AI Agents, and Edge. https://clerk.com/articles/authentication-trends-in-2026-passkeys-ai-agents-and-edge
  - 4. Security Boulevard (2026). Passkeys Hit Critical Mass: Microsoft Auto-Enables for Millions, 87% of Companies Deploy as Passwords Near End-of-Life. https://securityboulevard.com/2026/03/passkeys-hit-critical-mass-microsoft-auto-enables-for-millions-87-of-companies-deploy-as-passwords-near-end-of-life/
  - 5. FIDO Alliance (2025). Authenticate 2025: Day 1 Recap (Credential Exchange Protocol/Format, platform APIs). https://fidoalliance.org/authenticate-2025-day-1-recap/

- ### Provenance
  - sources:: FIDO Alliance specifications (CTAP2, WebAuthn), W3C Web Authentication Level 2, NIST SP 800-63B, NIST SP 800-207, ISO/IEC 24760, eIDAS 2.0 regulation
  - updated:: 2026-06-13
