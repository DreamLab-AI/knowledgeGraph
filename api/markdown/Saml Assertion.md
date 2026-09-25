A SAML assertion is an XML-based security token, issued by an identity provider, that conveys statements about an authenticated subject to a relying service provider. Assertions carry authentication, attribute and authorisation-decision statements, are bound to a subject and validity window, and are protected by XML digital signatures to ensure integrity and origin. They are the core data structure exchanged in SAML single sign-on and federated identity.

### Overview

- In SAML-based federation an identity provider authenticates a user and issues a signed assertion that a service provider consumes to grant access without re-authenticating. The assertion's signature and validity conditions establish trust between domains. SAML remains widespread in enterprise SSO, alongside token formats such as JWT in OAuth/OIDC ecosystems.

### Key aspects

- Authentication, attribute and authorisation-decision statements.
- Subject binding and validity (NotBefore/NotOnOrAfter) conditions.
- XML digital signatures for integrity and origin authentication.
- Issuance by an identity provider, consumption by a service provider.
- Confirmation methods such as bearer and holder-of-key.

### Applications

- Enterprise single sign-on across web applications.
- Cross-domain federated identity.
- Attribute-based access decisions at relying parties.
- Integration with identity providers and SSO gateways.

### Provenance

