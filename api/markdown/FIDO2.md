public:: true

# FIDO2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fido2",
  "@type": "Page",
  "vc:slug": "fido2",
  "title": "FIDO2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fido2",
  "@type": "Class",
  "label": "FIDO2",
  "definition": "FIDO2 is an open authentication standard developed by the FIDO Alliance and W3C that enables passwordless, phishing-resistant authentication using public-key cryptography. It consists of two components: the W3C Web Authentication API (WebAuthn), which defines the browser and platform interface for creating and using public key credentials, and the Client to Authenticator Protocol (CTAP2), which defines the communication between a platform and an external authenticator such as a hardware security key or passkey-capable device. FIDO2 credentials are bound to a specific relying party origin, making them immune to phishing, and private keys never leave the authenticator device, eliminating the credential theft risk associated with password databases.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:web-standard", "label": "Web Standard"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:passwordless-authentication", "label": "Passwordless Authentication"},
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - FIDO2 is an open standard combining the W3C WebAuthn API and CTAP2 protocol to deliver phishing-resistant [[Passwordless Authentication]] using [[Public-Key Cryptography]], where credentials are device-bound and never transmitted to servers, fundamentally improving [[Identity Verification]] security over password-based systems.

- ### Relationships
  - FIDO2 implements [[Public-Key Cryptography]] to generate per-service asymmetric key pairs stored in [[Hardware Security Module]] authenticators or platform secure enclaves, registers as a [[Web Standard]] through the W3C WebAuthn specification, and enables both [[Passwordless Authentication]] (passkeys) and hardware second-factor [[Multi-Factor Authentication]]. It integrates into [[Authentication]] flows within [[Identity Management]] systems and complements [[Zero Trust Architecture]] by ensuring that authentication events are strongly bound to the user's authenticated device identity.

- ### Content
  - FIDO2 evolved from the earlier FIDO U2F (Universal 2nd Factor) standard launched around 2014, which added hardware security keys as a phishing-resistant second factor to existing password-based logins. The FIDO Alliance—a consortium including Google, Microsoft, Apple, Yubico, and hundreds of other organisations—extended the standard to support full passwordless authentication, publishing the FIDO2 specification set in 2018 in conjunction with W3C's WebAuthn Level 1.

  - The protocol operates through a registration phase and an authentication phase. During registration, the authenticator generates a new public-private key pair for the relying party's origin, stores the private key in hardware-protected storage (TPM, Secure Enclave, or hardware key), and sends the public key and a credential ID to the server. During authentication, the server sends a challenge; the authenticator signs it with the private key after user verification (PIN, biometric, or presence tap); the server verifies the signature against the stored public key. Because the credential is origin-bound, a cloned phishing site cannot obtain a valid signed response even if the user is deceived.

  - FIDO2 is strategically important because it addresses the root cause of the majority of account compromises: stolen or phished passwords. Major platform vendors—Apple, Google, Microsoft—have integrated FIDO2 passkeys into their operating systems and browsers, enabling synced credential storage that combines the security of hardware-backed keys with the convenience of cloud-synced availability across a user's devices.

  - In 2024–2025, passkeys have reached mainstream deployment: Apple Keychain, Google Password Manager, and Microsoft Authenticator all support synced FIDO2 passkeys. Enterprise identity providers including Okta, Entra ID, and Ping Identity have added passkey support, and major consumer services including Google, Apple, GitHub, and PayPal have enabled passkey login. The FIDO Alliance is working on cross-device credential migration standards to address passkey portability between ecosystems, and enterprise deployments are integrating FIDO2 with decentralised identity frameworks for higher-assurance authentication.