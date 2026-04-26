iri:: http://narrativegoldmine.com/infrastructure#IdentityProviderIdP
uri:: urn:visionclaw:concept:infrastructure:identity-provider-idp
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:identity-provider-idp
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Identity Provider (IdP)
content-hash:: sha256-12-e17d0b43bfc4
legacy-term-id:: 20283
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - An authentication service system that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network.

- ### Semantic Classification
  - owl-class:: infrastructure:IdentityProvider
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Authentication Server]], [[Credential Store]], [[Token Issuer]], [[User Directory]], [[Session Manager]], [[Policy Engine]]
  - is-part-of:: [[Identity Management System]], [[Federation Infrastructure]]
  - requires:: [[Cryptographic Key Store]], [[User Database]], [[Authentication Protocol]]
  - enables:: [[Single Sign-On (SSO)]], [[Identity Federation]], [[Multi-Factor Authentication]], [[Access Control]], [[User Provisioning]]
  - depends-on:: [[PKI Infrastructure]], [[Directory Service]], [[Credential Schema]]

- ### Content
  Identity Provider (IdP) — content pending enrichment.

- ### Provenance
  - sources:: [[OASIS SAML]], [[OpenID Foundation]], [[IETF OAuth]]
  - migration-date:: 2026-04-26T00:00:00Z
