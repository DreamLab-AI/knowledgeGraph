
A relying party is an application or service that depends on an external identity provider or credential issuer to authenticate users and assert their attributes, rather than managing credentials itself. It consumes and validates assertions, tokens or verifiable credentials to make access-control decisions. As a core role in federated and decentralised identity, the relying party trusts issuers within a defined trust framework and enforces the resulting authorisation.

- ### Overview
	- In federated identity, applications delegate authentication to a trusted identity provider rather than holding user credentials themselves.
	- The relying party receives a security token or assertion describing the authenticated subject and their attributes, validates it, and grants access accordingly.
	- This separation reduces credential sprawl, centralises authentication strength, and enables single sign-on across many services.
	- In decentralised identity the relying party becomes a verifier of holder-presented verifiable credentials anchored to trusted issuers.
- ### Key aspects
	- Delegation of authentication to an external issuer or provider.
	- Validation of tokens, assertions or credentials.
	- Trust relationships defined within a governing framework.
	- Mapping of asserted attributes to access decisions.
	- Session establishment and token lifecycle handling.
- ### Mechanisms
	- Protocol flows such as OAuth, OpenID Connect and SAML.
	- Signature and issuer verification of received tokens.
	- Audience and scope checks binding tokens to the service.
	- Claims-to-permission mapping for authorisation.
	- Verifiable-credential presentation and proof checking.
- ### Applications
	- Web and mobile applications using social or enterprise login.
	- Single sign-on across organisational service portfolios.
	- B2B federation between partner organisations.
	- Decentralised applications verifying user credentials.
	- Regulated services accepting cross-border authenticated identity.
- ### Provenance

