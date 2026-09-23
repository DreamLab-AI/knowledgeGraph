
PKCE, Proof Key for Code Exchange, is an extension to the OAuth 2.0 authorisation code flow that protects public clients, such as mobile and single-page applications, against interception of the authorisation code. The client generates a secret code verifier and sends its hashed code challenge when requesting authorisation, then proves possession of the verifier when redeeming the code, so a stolen code cannot be exchanged for tokens. It is now recommended for all OAuth clients, not only public ones.

- [[Pkce]] hardens the [[OAuth 2.0]] authorisation code flow for public clients by binding the code to a secret verifier, using a hashed challenge built on [[Encryption]] to protect [[Authorization]].
- ### Overview
- PKCE prevents authorisation-code interception attacks against public OAuth clients.
- The client creates a random code verifier and derives a code challenge from it.
- The challenge is sent at authorisation; the verifier is sent at token exchange.
- Now recommended for all OAuth clients, it adds dynamic proof-of-possession without a client secret.
- ### Mechanisms
- Code verifier: a high-entropy random secret held by the client.
- Code challenge: typically the SHA-256 hash of the verifier, sent at authorisation.
- Binding: the authorisation server ties the issued code to the challenge.
- Redemption: the client reveals the verifier; the server checks it against the challenge.
- Defence: a stolen code is useless without the matching verifier.
- ### Applications
- Securing OAuth in mobile and native applications.
- Protecting single-page web applications without a client secret.
- Hardening all OAuth flows per current best practice.
- Enabling safe authorisation on devices with limited secret storage.
- ### Provenance

