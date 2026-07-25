public:: true

# Federated Identity System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:federated-identity-system",
  "@type": "Page",
  "vc:slug": "federated-identity-system",
  "title": "Federated Identity System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:federated-identity-system",
  "@type": "Class",
  "label": "Federated Identity System",
  "definition": "A federated identity system enables a user's digital identity and authentication to be recognised across multiple independent organisations or domains without each maintaining separate credentials. It relies on trust relationships between identity providers and relying parties, exchanging assertions via protocols such as SAML, OpenID Connect, and OAuth. Federation underpins single sign-on, cross-organisation access, and trust-framework governance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:federated-credential-exchange", "label": "Federated Credential Exchange"},
      {"@id": "urn:ngm:class:trust-framework-policy", "label": "Trust Framework Policy"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A federated identity system links identity providers and relying parties so a single authenticated identity works across organisational boundaries, providing the substrate for [[Federated Credential Exchange]] and governed by a [[Trust Framework Policy]]. It is a core pattern within [[Identity Management]].
- ### Content
  - Federation works by having an identity provider issue signed assertions (tokens) that relying parties trust, using standards like OpenID Connect, SAML, and OAuth 2.0 to convey authentication and attribute claims. Effective federation depends on agreed trust frameworks defining assurance levels, attribute semantics, and liability, balancing single-sign-on convenience against the systemic risk of a compromised identity provider.
