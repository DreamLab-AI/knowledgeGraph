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
  "definition": "Passwordless Authentication encompasses identity verification mechanisms that prove user identity without requiring the user to memorise and enter a shared secret password. Instead, authentication relies on possession of a hardware token or device, biometric characteristics, cryptographic key pairs, or one-time codes delivered through a trusted channel. The FIDO2 standard, comprising the W3C WebAuthn specification and the FIDO Alliance's CTAP protocol, provides the primary open standard for passkey-based passwordless authentication, binding credentials to device hardware and enabling phishing-resistant login flows. Passwordless approaches eliminate credential stuffing, password spray, and phishing attack vectors that account for the majority of account compromise incidents.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:authentication-mechanism", "label": "Authentication Mechanism"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:biometric-binding-mechanism", "label": "Biometric Binding Mechanism"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"},
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"},
      {"@id": "urn:ngm:class:oauth-2-0", "label": "OAuth 2.0"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-identity-management", "label": "Digital Identity Management"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Passwordless Authentication provides identity verification using [[Public-Key Cryptography]] key pairs, [[Biometric Binding Mechanism]] factors, or hardware tokens rather than memorised passwords, eliminating the most common credential compromise attack vectors and simplifying the user experience.

- ### Relationships
  - Passwordless Authentication is a sub-class of the [[Authentication Mechanism]] category that removes reliance on shared secrets. It uses [[Public-Key Cryptography]] to bind credentials to hardware devices, with the private key never leaving secure storage. [[Biometric Binding Mechanism]] approaches, such as fingerprint or face verification, unlock the device-bound key without transmitting biometric data to the server. The approach is architecturally related to [[Multi-Factor Authentication]], which it can encompass and strengthen, and integrates with [[Single Sign-On]] identity federation frameworks and [[OAuth 2.0]] authorisation flows. Deployment at scale requires [[Authentication Standards]] alignment, particularly with the FIDO2/WebAuthn specification, and the resulting credentials can be managed through [[Digital Identity Management]] platforms and stored in a [[Digital Identity Wallet]].

- ### Content
  - Passwords have been the dominant authentication mechanism since the earliest time-sharing computer systems, but their weaknesses are well-documented: users reuse passwords across services, choose weak secrets, fall victim to phishing, and generate enormous support costs through forgotten-password reset requests. Industry analysis consistently places credential-based attacks as the leading cause of data breaches, which has driven decades of research into alternatives.

  - The FIDO (Fast Identity Online) Alliance was established in 2012 specifically to address password dependency. The FIDO2 project, completed in 2018 and standardised through the W3C WebAuthn specification, provides a fully phishing-resistant authentication protocol. During registration, the authenticator (a hardware security key, a platform authenticator embedded in a smartphone or computer, or a cross-device passkey stored in a cloud keychain) generates a public-private key pair. The public key is registered with the relying party (website or application); the private key never leaves the authenticator.

  - During authentication, the relying party sends a challenge; the authenticator signs the challenge with the private key after verifying user presence (a button press or biometric verification), and the relying party verifies the signature against the registered public key. Because no shared secret is transmitted and the origin is cryptographically bound into the signed assertion, phishing and server-side credential theft attacks are defeated by design.

  - Passkeys represent the consumer-facing implementation of FIDO2 credentials, introduced by the FIDO Alliance in 2022 with support from Apple, Google, and Microsoft. Passkeys synchronise device-bound credentials across a user's devices through platform key management (iCloud Keychain, Google Password Manager, Windows Hello), solving the prior problem that hardware security key credentials were device-specific and lost if the device was damaged or replaced. Passkeys can also be shared between a phone and a desktop via QR code-based cross-device authentication flows.

  - Enterprise adoption of passwordless authentication is accelerating, with Microsoft, Google, and major identity providers offering fully passwordless login options. The transition requires investment in user education, fallback recovery mechanisms, and integration with legacy applications that assume password-based login. Identity proofing and account recovery in a passwordless world requires particularly careful design, as the absence of a password does not eliminate the need for a human-verifiable fallback when devices are lost.
