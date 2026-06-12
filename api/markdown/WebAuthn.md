public:: true

# WebAuthn
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:web-authn",
  "@type": "Page",
  "vc:slug": "web-authn",
  "title": "WebAuthn",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-authn",
  "@type": "Class",
  "label": "WebAuthn",
  "definition": "WebAuthn (Web Authentication) is a W3C and FIDO Alliance standard that enables web applications to authenticate users using public-key cryptography rather than passwords, through hardware or software authenticators such as security keys, platform biometrics, and passkeys. The browser exposes the navigator.credentials API, which delegates cryptographic operations to a CTAP-compliant authenticator; the authenticator generates a key pair, stores the private key in a secure enclave, and signs authentication challenges that the relying party verifies using the registered public key. WebAuthn eliminates shared secrets from the authentication path, making phishing, credential stuffing, and replay attacks fundamentally impossible by design. It is the technical foundation of the passkey ecosystem deployed by Apple, Google, and Microsoft.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:authentication-mechanism", "label": "Authentication Mechanism"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:fido2", "label": "FIDO2"},
      {"@id": "urn:ngm:class:asymmetric-encryption", "label": "Asymmetric Encryption"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:passwordless-authentication", "label": "Passwordless Authentication"},
      {"@id": "urn:ngm:class:privacy-preserving-authentication", "label": "Privacy-Preserving Authentication"},
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:w3-c", "label": "W3C"},
      {"@id": "urn:ngm:class:web-standard", "label": "Web Standard"},
      {"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[WebAuthn]] is the [[W3C]] and FIDO Alliance web authentication standard that replaces password-based login with [[Public-Key Cryptography]] challenge-response authentication, using hardware or software authenticators to sign per-origin, per-session challenges — making phishing and credential replay attacks cryptographically impossible.

- ### Relationships
  - WebAuthn builds on [[FIDO2]] specifications combining the W3C WebAuthn API with the FIDO CTAP protocol, relies on [[Asymmetric Encryption]] key pairs generated and held in secure enclaves, directly enables [[Passwordless Authentication]] and [[Privacy-Preserving Authentication]] by never transmitting secrets over the network, integrates with [[Multi-Factor Authentication]] as a second or primary factor, and underpins emerging [[Digital Identity]] frameworks as a [[Web Standard]] maintained by the [[W3C]] with [[Credential Verification]] semantics aligned to verifiable credentials.

- ### Content
  - WebAuthn emerged from the FIDO Alliance's U2F (Universal 2nd Factor) and UAF (Universal Authentication Framework) standards of 2014, which demonstrated hardware-bound phishing-resistant authentication at scale. These were unified and elevated to a W3C recommendation in March 2019, with Level 2 published in April 2021. The passkey concept — synchronised WebAuthn credentials stored in platform credential managers — was jointly announced by Apple, Google, and Microsoft in May 2022, dramatically lowering the friction barrier for adoption.

  - The protocol operates through a registration and authentication flow. During registration, the browser calls navigator.credentials.create() with a challenge from the relying party; the authenticator generates a new asymmetric key pair, stores the private key in a tamper-resistant enclave, and returns the public key and an attestation statement. During authentication, the browser calls navigator.credentials.get() with a new server challenge; the authenticator signs the challenge-plus-origin data with the private key; the server verifies the signature against the stored public key.

  - A critical security property is the origin binding: the key pair is scoped to the specific domain (relying party ID), making it impossible to use a credential registered at a legitimate domain to authenticate on a phishing site, even if the user is deceived. Biometric verification — Touch ID, Face ID, Windows Hello — acts as a user-presence signal enforced by the authenticator, not transmitted to the server, preserving privacy.

  - In 2024-2025, passkeys have crossed the mainstream adoption threshold with over a billion accounts supporting them across major platforms. Conditional UI enables browsers to autofill passkeys in traditional login forms, smoothing the migration from passwords. Enterprise deployments are exploring enterprise attestation for binding passkeys to managed devices, and the FIDO Alliance is standardising cross-device credential provisioning to handle device loss scenarios. WebAuthn is increasingly referenced in authentication standards for decentralised identity systems including W3C DID and verifiable credential presentations.
