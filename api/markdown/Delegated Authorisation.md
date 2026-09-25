Delegated authorisation is the pattern in which a resource owner grants a third-party application limited access to their resources without sharing their credentials. An authorisation server issues scoped, often time-limited tokens that the application presents to the resource server, so access can be granted, constrained, and revoked independently of the owner's password. OAuth 2.0 is the dominant framework that implements this pattern across web and API ecosystems.

- [[Delegated Authorisation]] lets a resource owner grant a third party scoped access via tokens instead of credentials; [[OAuth 2.0]] implements it to support [[Single Sign-On]] and [[API]] access.

### Overview

- Delegated authorisation separates the act of granting access from sharing a password.
- An authorisation server mediates consent and issues scoped, revocable tokens.
- Applications act on the owner's behalf only within the granted scope and lifetime.
- OAuth 2.0 is the de facto framework realising this pattern for web and API access.

### Mechanisms

- Consent: the resource owner approves a specific scope of access.
- Token issuance: the authorisation server grants access and refresh tokens.
- Scope: fine-grained limits on what the delegated access can do.
- Revocation: access can be withdrawn without changing the owner's credentials.
- Separation of roles: distinct authorisation server, resource server, and client.

### Applications

- Allowing apps to access user data on platforms without passwords.
- Enabling single sign-on and federated identity flows.
- Granting service-to-service and machine-to-machine access.
- Powering OAuth-based API authorisation across ecosystems.

### Provenance

