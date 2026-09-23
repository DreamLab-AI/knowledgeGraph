
An access token is a credential that a client presents to a resource server to access protected resources within a granted scope and lifetime. Typically short-lived and often a bearer token, it carries or references the authorisation decision so the resource server need not re-check with the authorisation server on every request. Access tokens are the workhorse credential of OAuth 2.0 and API authorisation.

- An [[Access Token]] is a scoped, short-lived [[Token]] presented to a resource server to access an [[API]]; it implements [[Authorization]] in [[OAuth 2.0]], often as a [[Bearer Token]].
- ### Overview
- Access tokens authorise specific operations on protected resources within a scope.
- They are usually short-lived to limit exposure if intercepted.
- As bearer tokens, possession alone grants access, so transport security is essential.
- They may be opaque references or self-contained JWTs carrying claims.
- ### Mechanisms
- Scope: encodes the permissions the token grants.
- Lifetime: short expiry bounds the risk window.
- Validation: resource servers verify signature, expiry, audience, and scope.
- Format: opaque (introspected) or structured (self-validating JWT).
- Pairing: issued with a refresh token to renew access seamlessly.
- ### Applications
- Authorising calls to REST and GraphQL APIs.
- Granting third-party apps scoped access in OAuth flows.
- Service-to-service authorisation in microservices.
- Carrying identity and permission claims to resource servers.
- ### Provenance

