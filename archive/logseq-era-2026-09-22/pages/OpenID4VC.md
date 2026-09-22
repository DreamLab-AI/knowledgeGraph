public:: true

# OpenID4VC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-id4-vc",
  "@type": "Page",
  "vc:slug": "open-id4-vc",
  "title": "OpenID4VC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-id4-vc",
  "@type": "Class",
  "label": "OpenID4VC",
  "definition": "OpenID for Verifiable Credentials (OpenID4VC) is a family of OpenID Foundation specifications that extend OAuth 2.0 and OpenID Connect to issue and present verifiable credentials. It comprises OpenID4VCI for credential issuance and OpenID4VP for presentation, enabling interoperable digital wallets to obtain and selectively disclose cryptographically signed claims. The protocols bridge mainstream identity infrastructure with decentralized identity models such as DIDs.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - OpenID4VC extends OAuth 2.0 and OpenID Connect to issue and present [[Verifiable Credentials]], connecting mainstream identity flows to [[Decentralized Identifiers]] and wallet-based selective disclosure.
- ### Content
  - The suite separates issuance (OpenID4VCI) from presentation (OpenID4VP), letting wallets obtain signed claims from issuers and prove them to verifiers without a central directory. Building on familiar OAuth patterns eases adoption while supporting privacy features like selective disclosure.
