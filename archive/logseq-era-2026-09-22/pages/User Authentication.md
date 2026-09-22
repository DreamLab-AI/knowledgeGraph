public:: true

# User Authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:user-authentication",
  "@type": "Page",
  "vc:slug": "user-authentication",
  "title": "User Authentication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-authentication",
  "@type": "Class",
  "label": "User Authentication",
  "definition": "User authentication is the process of verifying that a person claiming a digital identity is who they assert to be, by validating one or more authentication factors: something they know (password, PIN), something they have (hardware token, mobile device), or something they are (biometric). It is the gateway control between unauthenticated network access and authorised use of a system or resource, and its assurance level — defined by standards such as NIST SP 800-63 — must be calibrated to the sensitivity of protected resources. Modern implementations favour phishing-resistant factors (passkeys, hardware security keys) over knowledge-based authentication.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"},
      {"@id": "urn:ngm:class:passwordless-authentication", "label": "Passwordless Authentication"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:identity-and-access-management", "label": "Identity and Access Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:fido2", "label": "FIDO2"},
      {"@id": "urn:ngm:class:oauth-2-0", "label": "OAuth 2.0"},
      {"@id": "urn:ngm:class:web-authn", "label": "WebAuthn"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[User Authentication]] is the process of cryptographically or heuristically verifying that a user's claimed digital identity corresponds to an enrolled principal, using one or more factors (knowledge, possession, biometric) to gate [[Access Control]] decisions, with assurance levels calibrated to resource sensitivity per frameworks like NIST SP 800-63.

- ### Relationships
  - User authentication is the prerequisite step for [[Access Control]] and the operational core of [[Identity and Access Management]] systems. It is strengthened through [[Multi-Factor Authentication]] combining factor categories, and modernised by [[Passwordless Authentication]] approaches. Standards protocols include [[OAuth 2.0]] for delegated authorisation flows, [[WebAuthn]] for public-key credential binding, and [[FIDO2]] for hardware-backed phishing-resistant factors. Federated user authentication enables [[Single Sign-On]] across service providers.

- ### Content
  - User authentication is as old as computing systems that required accountability: CTSS (Compatible Time-Sharing System) at MIT introduced password-based login in 1961, establishing a paradigm that persisted for decades. The fundamental problem — shared secrets stored server-side are breach targets — became catastrophically visible with the LinkedIn (2012, 117 million hashes), Yahoo (2013-2014, 3 billion accounts), and RockYou2021 (8.4 billion plaintext passwords) breaches. Password-based authentication at scale requires careful salting and key derivation (bcrypt, Argon2), but server-side credential databases remain high-value targets.

  - Modern user authentication has diversified into multiple factor categories: knowledge factors (passwords, PINs, security questions — weakest tier); possession factors (TOTP apps like Google Authenticator, SMS OTP — vulnerable to SIM-swapping, TOTP-based phishing); hardware security keys (FIDO U2F, now FIDO2/WebAuthn — phishing-resistant because authentication is bound to origin); biometric factors (fingerprint, face, iris — convenient but cannot be revoked if compromised). The FIDO2 standard, combining WebAuthn (W3C browser API) and CTAP2 (device protocol), allows users to authenticate with a platform authenticator (device TPM, Secure Enclave) or roaming authenticator (YubiKey) using public-key cryptography where the private key never leaves the device.

  - Passkeys — discoverable FIDO2 credentials synced across a user's devices via cloud keychain (Apple iCloud Keychain, Google Password Manager) — represent the current paradigm shift. Passkeys eliminate passwords entirely: registration creates a public/private key pair, the private key is stored in the device's secure element, and authentication proves possession by signing a challenge. Major platforms (Apple, Google, Microsoft) have deployed passkeys for hundreds of millions of accounts, and the FIDO Alliance reports that passkey authentication success rates (95%+) exceed password success rates substantially.

  - In 2024-2025, enterprise user authentication is converging on phishing-resistant MFA mandated by government frameworks (US CISA, UK NCSC, EU NIS2). Conditional access policies in Azure AD and Okta enforce step-up authentication based on risk signals (device health, location anomaly, behaviour baseline). Decentralised identity approaches are moving authentication towards user-controlled wallets where credentials are presented via [[OpenID Connect]] extensions (SIOP v2) or [[OpenID4VP]] — removing the identity provider as a centralised dependency. AI-driven continuous authentication (behavioural biometrics, keystroke dynamics) is being deployed as a risk signal layer on top of primary authentication factors.