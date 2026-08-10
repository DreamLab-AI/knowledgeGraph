public:: true

# authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9d90628453938c578c7f826de5e5bd2bcac29e10c5526888384ba74fcea563e",
  "@type": "Page",
  "vc:slug": "authentication",
  "title": "authentication",
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
  "@id": "urn:ngm:class:authentication",
  "@type": "Class",
  "label": "Authentication",
  "definition": "Authentication is the security process of verifying that a claimed identity of a user, device, application, or service is genuine before granting access to protected resources. It is fundamentally distinct from authorisation, which determines what permissions an authenticated principal possesses. Authentication evidence is categorised into knowledge factors (passwords, PINs, security questions), possession factors (hardware security keys, TOTP devices, mobile authenticators), and inherence factors (biometrics such as fingerprint or facial recognition), with cryptographic proofs (digital signatures, TLS client certificates, FIDO2 passkeys) increasingly replacing shared-secret schemes. Modern secure systems combine multiple independent factors through multi-factor authentication to achieve strong resistance against credential theft, phishing, replay attacks, and session hijacking.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-and-access-management",
      "label": "Identity and Access Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Session Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:digital-signatures",
        "label": "Digital Signatures"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:fido2",
        "label": "FIDO2 WebAuthn"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:anonymity",
        "label": "Anonymity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation"
      },
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:authn",
      "label": "AuthN"
    },
    {
      "@id": "urn:ngm:class:identity-verification",
      "label": "Identity Verification"
    }
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
  - Authentication is the security process of verifying that a claimed identity — of a user, device, application, or service — is genuine before granting access to protected resources. It is fundamentally distinct from [[Authorisation]], which determines what permissions an authenticated principal possesses, though both are core pillars of [[Identity and Access Management]]. Evidence submitted during authentication is categorised into knowledge factors (passwords, PINs), possession factors (hardware tokens, passkeys), and inherence factors ([[Biometrics]]), with [[Cryptography]] underpinning all modern schemes. Strong authentication combines independent factors through [[Multi-Factor Authentication]] to resist phishing, credential stuffing, replay attacks, and session hijacking at scale.

- ### Overview
  - Authentication answers a single fundamental question: "Is this principal who they claim to be?" Every subsequent security decision — granting access, logging events, enforcing quotas — rests on the validity of that answer. Without reliable authentication, [[Access Control]] collapses and [[Zero Trust Architecture]] cannot function, since perimeter-less security explicitly requires continuous identity verification for every request.
  - Authentication has evolved from simple username/password pairs stored in plaintext towards cryptographic proofs that never expose the underlying secret. This shift is driven by the persistent scale of credential-based breaches, the commodification of phishing kits, and the standardisation of [[FIDO2 WebAuthn]] passkeys as a phishing-resistant replacement. Regulators — including NIST, the EU's NIS2, and PCI DSS v4 — now mandate multi-factor or phishing-resistant authentication for sensitive systems.
  - The protocol landscape divides broadly into: direct authentication (credentials verified locally or against a directory), federated authentication (a trusted [[Identity Provider]] attests to identity across service boundaries via [[OpenID Connect]] or [[SAML]]), and decentralised authentication (cryptographic proofs anchored to [[Decentralised Identity]] documents without a central authority).

- ### Key Mechanisms
  - **Password-based Authentication**
    - Oldest and most widespread factor; credentials hashed with adaptive functions (bcrypt, Argon2, PBKDF2) in storage.
    - Vulnerable to phishing, credential stuffing, password spraying, and database leakage.
    - Mitigated by password managers, breach detection (HIBP integration), and mandatory rotation policies, but the industry trend is strongly toward elimination.
  - **Multi-Factor Authentication (MFA)**
    - Combines two or more independent factor types so that compromise of one does not defeat the whole scheme.
    - Common second factors: TOTP codes (RFC 6238), push notifications, hardware OTP tokens (RSA SecurID), and [[FIDO2 WebAuthn]] hardware keys.
    - TOTP-based MFA remains phishable via real-time relay attacks; hardware security keys bound to origin provide hardware-level phishing resistance.
  - **FIDO2 / WebAuthn / Passkeys**
    - FIDO Alliance standard using [[Public Key Infrastructure]] bound to authenticator hardware; private key never leaves the device.
    - Passkeys (synced FIDO2 credentials) extend phishing-resistant authentication to mobile ecosystems via iCloud Keychain, Google Password Manager, etc.
    - Replaces phishable shared secrets with an asymmetric challenge–response that is cryptographically bound to the relying party origin — see [[Digital Signatures]].
  - **Federated Authentication**
    - [[OpenID Connect]] (OIDC) — layered on [[OAuth 2.0]], returns ID tokens (JWTs) signed by an [[Identity Provider]] (IdP) such as Google, Microsoft Entra, or Okta.
    - [[SAML]] 2.0 — XML-based federation protocol dominant in enterprise; IdP issues signed assertions to service providers.
    - Enables [[Single Sign-On]] across organisational and service boundaries without the relying party holding user credentials.
  - **Mutual TLS (mTLS)**
    - Both client and server present X.509 certificates, enabling machine-to-machine authentication in [[Zero Trust Architecture]] and service meshes.
    - Requires [[Public Key Infrastructure]] for certificate issuance and rotation; short-lived certificates (hours) reduce revocation overhead.
  - **Token-based Authentication**
    - JSON Web Tokens (JWT) carry signed identity claims; verified stateless by relying parties holding the IdP public key.
    - Short-lived access tokens combined with refresh-token rotation limit blast radius from token theft.
    - Bearer tokens over HTTPS replace cookie-session patterns in API-first architectures — see [[Secure Communication]].
  - **Biometric Authentication**
    - [[Biometrics]] (fingerprint, face, iris, voice) provide convenient inherence-factor authentication.
    - On-device biometric matching (secure enclave) avoids transmission of raw biometric templates; central biometric databases are a liability.
    - Liveness detection counters presentation attacks (photographs, 3D masks).
  - **Decentralised / Self-Sovereign Authentication**
    - [[Decentralised Identity]] (DID) documents anchor public keys in blockchains or distributed ledgers without a central IdP.
    - [[Verifiable Credentials]] allow users to present cryptographic attestations from issuers (governments, employers) that relying parties verify without contacting the issuer.
    - Supports selective disclosure via zero-knowledge proofs — privacy-preserving authentication where minimal identity information is revealed.

- ### Authentication Factors (Classification)
  - **Knowledge factors** — something the principal knows: password, PIN, security question, passphrase.
  - **Possession factors** — something the principal has: hardware security key, TOTP authenticator app, smart card, mobile device.
  - **Inherence factors** — something the principal is: fingerprint, face geometry, retina pattern, voice print.
  - **Context factors** (sometimes a fourth category) — location, IP address, device posture, behavioural biometrics; used in adaptive / risk-based authentication.

- ### Applications and Use Cases
  - **Enterprise IAM**: employees authenticate to corporate resources via federated SSO ([[OpenID Connect]], [[SAML]]) with MFA enforced through an IdP (Microsoft Entra, Okta, Ping Identity). Conditional access policies evaluate device posture and location.
  - **Consumer web services**: username/password supplemented by TOTP or push-notification MFA; progressively replaced by passkeys in major platforms (Google, Apple, GitHub).
  - **API security**: service-to-service authentication via mTLS, OAuth 2.0 client credentials, or short-lived signed JWTs in microservice architectures.
  - **IoT and device authentication**: certificates provisioned at manufacture, device attestation schemes (TPM, Android Keystore), and lightweight protocols (MQTT with TLS) authenticate constrained devices.
  - **Financial services**: strong customer authentication (SCA) mandated under PSD2 in Europe requires at least two factors for online payments, combining possession (card/device) and inherence or knowledge factors.
  - **Healthcare**: HIPAA-aligned authentication for EHR access; role-based combined with patient identity verification for telehealth portals.
  - **Spatial computing and XR**: authentication in [[Spatial Computing]] environments requires device-level authentication combined with continuous user presence verification; immersive sessions create novel threat surfaces for session hijacking.
  - **Blockchain and DeFi**: wallet authentication via asymmetric key pairs (ECDSA over secp256k1); hardware wallets store private keys offline; [[Decentralised Identity]] enables on-chain identity attestations without exposing private keys.
  - **Critical infrastructure**: SCADA and OT environments adopt certificate-based machine authentication and network segmentation to compensate for legacy protocol weaknesses.

- ### Relationships
  - requires:: [[Cryptography]]
  - requires:: [[Identity Verification]]
  - requires:: [[Public Key Infrastructure]]
  - enables:: [[Access Control]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Authorisation]]
  - enables:: [[Session Management]]
  - dependsOn:: [[Digital Signatures]]
  - dependsOn:: [[Secure Communication]]
  - dependsOn:: [[Key Management]]
  - implements:: [[OAuth 2.0]]
  - implements:: [[OpenID Connect]]
  - implements:: [[SAML]]
  - implements:: [[FIDO2 WebAuthn]]
  - supports:: [[Zero Trust Architecture]]
  - supports:: [[Compliance]]
  - supports:: [[Privacy]]
  - contrastsWith:: [[Authorisation]]
  - contrastsWith:: [[Anonymity]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Verifiable Credentials]]
  - relatedTo:: [[Multi-Factor Authentication]]
  - relatedTo:: [[Biometrics]]
  - relatedTo:: [[Federation]]
  - relatedTo:: [[Threat Model]]
  - relatedTo:: [[Identity Provider]]

- ### Standards and Governance
  - **NIST SP 800-63-3** — Digital Identity Guidelines; defines authenticator assurance levels (AAL1–AAL3) and mandates phishing-resistant authentication at higher assurance levels.
  - **FIDO2 / WebAuthn** (W3C Recommendation + FIDO Alliance) — standard for origin-bound, phishing-resistant public-key authentication; now broadly adopted across browsers and operating systems.
  - **OpenID Connect 1.0** (OpenID Foundation) — identity layer on OAuth 2.0; de-facto standard for federated authentication in web and mobile applications.
  - **SAML 2.0** (OASIS) — XML-based federation standard dominant in enterprise SSO; predecessor to OIDC in many deployments.
  - **OAuth 2.0** (RFC 6749) and **OAuth 2.1** (draft) — authorisation delegation framework underpinning OIDC token flows; defines bearer tokens and client authentication methods.
  - **RFC 6238** — TOTP (Time-Based One-Time Password) algorithm; basis for authenticator apps (Google Authenticator, Authy, etc.).
  - **PSD2 / SCA** — EU Payment Services Directive 2 mandates Strong Customer Authentication for electronic payments; specifies independence, dynamicity, and confidentiality of authentication factors.
  - **ISO/IEC 24760** — Framework for identity management, including authentication requirements.
  - **PCI DSS v4.0** — requires MFA for all non-console administrative access to cardholder data environments.
  - **NIS2 Directive (EU)** — mandates multi-factor authentication as a baseline security measure for operators of essential services.
  - **W3C DID Core** — specification for [[Decentralised Identity]] documents underpinning DID-based authentication methods.

- ### Security Considerations
  - **Phishing resistance** — only hardware-bound [[FIDO2 WebAuthn]] credentials and smart-card PKI are truly phishing-resistant; TOTP and push notifications can be relayed in real time.
  - **Credential stuffing** — automated testing of breached credential lists; mitigated by breached-password detection, rate limiting, and CAPTCHAs.
  - **Session fixation and hijacking** — once authenticated, the session token becomes the attack surface; short lifetimes, binding to IP/device, and [[Secure Communication]] (HTTPS) limit exposure.
  - **MFA fatigue** — adversaries flood push-notification MFA requests to induce accidental approval; number-matching and contextual approval screens mitigate this.
  - **Supply-chain identity attacks** — compromising an IdP or certificate authority creates cascading authentication failures across all relying parties.
  - **Biometric spoofing** — liveness detection and anti-spoofing measures are required to prevent presentation attacks against biometric authenticators.
  - **Decentralised key loss** — private-key loss in self-sovereign schemes results in permanent loss of identity; key recovery mechanisms (social recovery, hardware backup) are unsolved design challenges.

- ### Current Landscape (2026)
  - NIST finalised SP 800-63-4 in July 2025, formally recognising cloud-synced passkeys (FIDO2/WebAuthn credentials) as AAL2-compliant and making phishing-resistant authentication a requirement rather than a recommendation at AAL2; hardware-bound, non-exportable keys remain mandatory for AAL3, and a new Digital Identity Risk Management (DIRM) framework replaces checklist compliance with risk-based assessment.
  - Passkeys reached mainstream scale: the FIDO Alliance's State of Passkeys 2026 report (released World Passkey Day, 7 May 2026) estimates around 5 billion passkeys in active use, with 90% consumer awareness, 75% of people having enabled at least one passkey, and 68% of organisations deploying, piloting or rolling out passkeys for workforce sign-in.
  - Platform vendors drove adoption in 2025-2026: Microsoft made passkeys default for new consumer accounts (May 2025) and began auto-enabling passkey profiles across all Microsoft Entra ID tenants from March 2026 (with device-bound vs synced profiles, attestation and group-based policy); Apple shipped Credential Exchange Protocol (CXP) support in iOS/macOS 26 for portable passkeys; Google reported a roughly 120% rise in passkey authentications after defaulting them.
  - Standards work matured beyond core FIDO2: the Credential Exchange Protocol/Format (CXP/CXF) moved to a proposed industry standard in August 2025 to enable secure passkey portability between managers and break vendor lock-in, alongside CTAP 2.2 and WebAuthn updates (Signals API, conditional enrolment, HMAC secret extension) presented at Authenticate 2025.
  - Regulation is forcing the retirement of SMS/OTP: UAE Central Bank mandated eliminating SMS/email OTPs by 31 March 2026 (Emirates NBD, ADIB, FAB migrated in 2025), India's RBI rules take effect 1 April 2026, the Philippines' BSP Circular 1213 sets a June 2026 deadline, and frameworks such as NIS2, DORA and PCI DSS 4.0 now effectively mandate phishing-resistant MFA; the EU Digital Identity (eIDAS 2.0) Wallet is targeted for rollout by end of 2026.
  - The threat frontier shifted from stealing factors to defeating trust: generative-AI deepfake voice/video (a reported ~900% year-on-year rise in deepfake file volume through 2024), adversary-in-the-middle (AiTM) phish kits like Evilginx that steal post-login session cookies, and MFA-fatigue campaigns are eroding legacy MFA, pushing the industry towards continuous/session-bound verification, liveness detection and behavioural anomaly checks rather than one-time challenges.
  - Open challenges as of 2026 include closing the gap between synced-passkey convenience and AAL3 hardware requirements (synced passkeys do not support attestation in Entra ID), securing account-recovery and help-desk fallback paths that attackers now target, defending against AI-agent-driven account takeover, and preparing authentication and identity-proofing for post-quantum threats.

- ### References
  - 1. FIDO Alliance (2026). Five Billion Passkeys: FIDO Alliance Reports Accelerating Global Passkey Adoption on World Passkey Day 2026. https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/
  - 2. Security Boulevard (2026). The Complete Guide to Passwordless Authentication in 2026: How It Works, Why It Matters, and How to Implement It. https://securityboulevard.com/2026/04/the-complete-guide-to-passwordless-authentication-in-2026-how-it-works-why-it-matters-and-how-to-implement-it/
  - 3. Authsignal (2025). Passwordless Authentication in 2025: The Year Passkeys Went Mainstream. https://www.authsignal.com/blog/articles/passwordless-authentication-in-2025-the-year-passkeys-went-mainstream
  - 4. Security Boulevard (2026). Passkeys Hit Critical Mass: Microsoft Auto-Enables for Millions, 87% of Companies Deploy as Passwords Near End-of-Life. https://securityboulevard.com/2026/03/passkeys-hit-critical-mass-microsoft-auto-enables-for-millions-87-of-companies-deploy-as-passwords-near-end-of-life/
  - 5. Microsoft Security Blog (2026). World Passkey Day: Advancing Passwordless Authentication. https://www.microsoft.com/en-us/security/blog/2026/05/07/world-passkey-day-advancing-passwordless-authentication/
  - 6. FSSCC (2026). Mitigating AI-Powered Attacks Against Identity and Authentication (Policy Recommendations). https://fsscc.org/wp-content/uploads/2026/02/AI-IA-Workstream-Policy-Recommendations.pdf

- ### Provenance
  - sources:: NIST SP 800-63-3; W3C WebAuthn Level 2; FIDO Alliance specifications; RFC 6238; RFC 6749; OASIS SAML 2.0; PSD2 RTS on SCA; ISO/IEC 24760
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
