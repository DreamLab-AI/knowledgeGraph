
A bearer token is a security credential that grants access to a protected resource to any party that presents it, without requiring the holder to prove possession of an associated cryptographic key. Commonly issued by authorisation servers and transmitted in an HTTP Authorization header, it is simple to use but must be protected in transit and at rest because anyone who obtains it can use it. Bearer tokens are central to modern API authorisation flows such as OAuth.

- A [[Bearer Token]] is a [[Token]] that grants access to whoever presents it, without proving possession of a key. It implements [[Authorization]] in API flows, is typically issued via [[OAuth]], and must travel over [[TLS]] to avoid theft, supporting [[Authentication]] and binding to an [[Identity]].
- ### Overview
- A bearer token embodies the principle that possession equals authority: the server trusts any caller that presents a valid token.
- It is usually a string issued by an authorisation server and sent in the HTTP Authorization header with the Bearer scheme.
- Because the token alone confers access, confidentiality in transit and secure storage are essential.
- Bearer tokens are typically short-lived and paired with refresh mechanisms to limit the window of misuse.
- ### Mechanisms
- Issuance: an authorisation server grants a token after authenticating the client or user.
- Presentation: the client includes the token on each request to the protected resource.
- Validation: the resource server verifies the token's signature, expiry, and scope.
- Protection: transport encryption and careful storage prevent interception and leakage.
- ### Applications
- Authorising calls to REST and GraphQL APIs.
- Granting third-party applications scoped access in OAuth flows.
- Service-to-service authorisation in microservice architectures.
- Single sign-on sessions where a token represents an authenticated identity.
- ### Provenance

