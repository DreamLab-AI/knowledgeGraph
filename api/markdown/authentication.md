- ### Definition
  - Authentication is the security process of verifying that a claimed identity — of a user, device, application, or service — is genuine before granting access to protected resources. It is distinct from authorisation, which determines what an authenticated principal is permitted to do. Authentication evidence takes the form of knowledge factors (passwords, PINs), possession factors (hardware tokens, mobile devices), inherence factors (biometrics), or cryptographic proofs (digital signatures, TLS client certificates). Modern secure systems require multiple independent factors (multi-factor authentication) to resist credential theft attacks.

- ### Semantic Classification
  - owl-class:: authentication:Authentication
  - owl-role:: Concept

- ### Relationships
  - requires [[Cryptography]]
  - requires [[Identity Verification]]
  - enables [[Access Control]]
  - enables [[Single Sign-On]]
  - relatedTo [[Zero Trust Architecture]]

- ### Content
  - Authentication protocols span a spectrum from simple password verification to sophisticated cryptographic schemes. Password-based authentication, the most prevalent but weakest form, is vulnerable to phishing, credential stuffing, and database breaches. Password managers and mandatory complexity policies partially mitigate these risks, but the industry trend is toward passwordless authentication using FIDO2/WebAuthn — a standard that uses public-key cryptography bound to an authenticator device (passkey), eliminating phishable shared secrets entirely.
  - Federated authentication via OpenID Connect (OIDC) and SAML 2.0 enables single sign-on across services: a trusted identity provider (IdP) such as Google, Microsoft, or an enterprise directory authenticates the user and issues signed tokens that third-party relying parties accept without holding user credentials. OAuth 2.0 provides the authorisation delegation layer underneath OIDC, allowing applications to request specific access scopes on behalf of authenticated users.
  - In distributed and zero-trust architectures, machine-to-machine authentication via mutual TLS (mTLS) or short-lived JWT tokens signed by a service mesh certificate authority replaces network-perimeter trust. Decentralised identity approaches using DIDs (Decentralised Identifiers) and verifiable credentials allow users to authenticate without a central identity provider, binding cryptographic proofs to blockchain-anchored key material. Multi-factor authentication (MFA), where a second factor such as a TOTP code or push notification supplements the primary credential, is now mandated by most enterprise security frameworks and regulatory compliance standards.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z