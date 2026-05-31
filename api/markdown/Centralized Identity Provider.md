public:: true

# Centralized Identity Provider
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:50f0e22c7abd35972c5bb95249efb516796437c1c6415a88bae5030785ee6a9c",
  "@type": "Page",
  "vc:slug": "centralized-identity-provider",
  "title": "Centralized Identity Provider",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification-system",
      "vc:label": "Identity Verification System"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identifier",
      "vc:label": "Decentralized Identifier"
    },
    {
      "@id": "urn:visionflow:linked:identity-provider",
      "vc:label": "Identity Provider"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Centralized Identity Provider"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralized-identity-provider",
  "@type": "Class",
  "label": "Centralized Identity Provider",
  "definition": "An identity service in which a single organisation issues, stores and authenticates user credentials on behalf of relying parties. It contrasts with decentralised identity models where control rests with the user.",
  "domain": "identity",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-provider",
      "label": "Identity Provider"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification-system",
        "label": "Identity Verification System"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:centralized-identity-provider:f9f3910bfa5b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:50f0e22c7abd35972c5bb95249efb516796437c1c6415a88bae5030785ee6a9c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification System]]",
      "resolved": "urn:visionflow:linked:identity-verification-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Identifier]]",
      "resolved": "urn:visionflow:linked:decentralized-identifier",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:linked:identity-provider",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An identity service in which a single organisation issues, stores and authenticates user credentials on behalf of relying parties. It contrasts with decentralised identity models where control rests with the user.

- ### Semantic Classification
  - owl-class:: identity:CentralizedIdentityProvider
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Identity Provider]]
  - bridges-to:: [[Decentralized Identifier]]
  - requires:: [[Identity Management]]
  - enables:: [[Identity Verification System]]

- ### Content
  - A centralised identity provider holds the authoritative record of user accounts and authenticates them at sign-in, typically using passwords, multi-factor methods or biometric checks. Relying applications delegate authentication to the provider through protocols such as OpenID Connect and SAML, receiving assertions about the user rather than handling credentials directly.
  - This model simplifies management for service operators but concentrates risk, since a breach of the provider exposes many downstream services. Concerns over single points of failure and data control motivate alternative approaches based on decentralised identifiers and verifiable credentials.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
