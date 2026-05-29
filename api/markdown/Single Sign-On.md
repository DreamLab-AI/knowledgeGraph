public:: true

# single sign-on
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1951179249e70072ed6cc2a9b9e800a158ea54a70dc94efb5bd20955ae4fb95a",
  "@type": "Page",
  "vc:slug": "single-sign-on",
  "title": "single sign-on",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:single-sign-on",
  "@type": "Class",
  "label": "Single Sign-On",
  "definition": "Single Sign-On (SSO) is an authentication scheme that allows a user to authenticate once to a central identity provider and obtain delegated access tokens that grant entry to multiple related but independent service providers without re-entering credentials. Common protocol implementations include SAML 2.0, OAuth 2.0 with OpenID Connect, and Kerberos, each varying in how assertions are encoded and transported. SSO reduces credential exposure, simplifies user lifecycle management, and is a foundational component of enterprise identity and access management (IAM) platforms.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Infra Security and Identity"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:digital-identity-management", "label": "Digital Identity Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:federated-credential-exchange", "label": "Federated Credential Exchange"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Single Sign-On (SSO) is an authentication scheme that allows a user to authenticate once to a central identity provider and obtain delegated access tokens that grant entry to multiple related but independent service providers without re-entering credentials. Common protocol implementations include SAML 2.0, OAuth 2.0 with OpenID Connect, and Kerberos, each varying in how assertions are encoded and transported. SSO reduces credential exposure, simplifies user lifecycle management, and is a foundational component of enterprise identity and access management (IAM) platforms.

- ### Semantic Classification
  - owl-class:: single-sign-on:Single Sign-On
  - owl-role:: Concept

- ### Relationships
  - requires [[Authentication]]
  - requires [[Authentication Standards]]
  - enables [[Access Control]]
  - enables [[Digital Identity Management]]
  - relatedTo [[Federated Credential Exchange]]

- ### Content
  Single Sign-On is built on the delegation of authentication: rather than each service provider verifying credentials directly, authentication is centralised at an identity provider (IdP), which issues signed assertions or tokens that service providers accept as proof of authenticated identity. In SAML 2.0, these assertions are XML documents signed with the IdP's private key; in OpenID Connect (built on OAuth 2.0), they are JSON Web Tokens (JWTs). The service provider trusts the IdP's signature and grants access without ever seeing the user's password.

  SSO architectures reduce the attack surface for credential theft by limiting credential entry to a single, hardened IdP endpoint. They also simplify provisioning and deprovisioning: revoking access at the IdP immediately removes access across all connected service providers, which is critical for managing joiners, movers, and leavers in enterprise environments.

  In federated identity contexts—such as the academic research network eduGAIN or the healthcare sector's cross-organisational patient identity initiatives—SSO is extended through identity federation: multiple organisations' IdPs are linked through a mutual trust framework, allowing a user authenticated by their home institution to access resources at partner organisations without a separate account. This federated pattern shares conceptual ground with the Trust over IP Foundation's credential exchange model, though SSO typically remains within more centralised PKI-based trust anchors rather than decentralised DID-based ones.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
