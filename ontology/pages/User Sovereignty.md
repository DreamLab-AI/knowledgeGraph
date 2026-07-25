public:: true

# User Sovereignty
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:64dcaeb85be3d2fd0752ffdc272b44bcf6dcaff4904a333002d2c09115c8aa14",
  "@type": "Page",
  "vc:slug": "user-sovereignty",
  "title": "User Sovereignty",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:digital-rights",
      "vc:label": "Digital Rights"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-self-sovereign-identity",
      "vc:label": "https://en.wikipedia.org/wiki/Self-sovereign_identity"
    },
    {
      "@id": "urn:visionflow:linked:https-www-w-3-org-tr-did-core",
      "vc:label": "https://www.w3.org/TR/did-core/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "User Sovereignty"
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
  "@id": "urn:ngm:class:user-sovereignty",
  "@type": "Class",
  "label": "User Sovereignty",
  "definition": "User sovereignty is the principle that individuals should control their own data, identity, and assets rather than depending on intermediaries. It is associated with decentralised systems and privacy advocacy.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-rights",
      "label": "Digital Rights"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:user-sovereignty:d80058f2890d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:64dcaeb85be3d2fd0752ffdc272b44bcf6dcaff4904a333002d2c09115c8aa14"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Rights]]",
      "resolved": "urn:visionflow:linked:digital-rights",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Self-sovereign_identity]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-self-sovereign-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.w3.org/TR/did-core/]]",
      "resolved": "urn:visionflow:linked:https-www-w-3-org-tr-did-core",
      "kind": "StubLink"
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
  - User sovereignty is the principle that individuals should control their own data, identity, and assets rather than depending on intermediaries. It is associated with decentralised systems and privacy advocacy.

- ### Semantic Classification
  - owl-class:: governance:UserSovereignty
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Rights]]
  - bridges-to:: [[Web3]]
  - requires:: [[Cryptography]]
  - enables:: [[Privacy]]

- ### Content
  - User sovereignty holds that people should be able to control access to their personal data, manage their digital identity, and hold assets without reliance on a single trusted party. It motivates designs based on cryptographic keys held by the user.
  - The principle appears in discussions of self-custody, self-sovereign identity, and privacy-preserving technology. It contrasts with models where platforms hold user data and assets and mediate all access.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Self-sovereign_identity]], [[https://www.w3.org/TR/did-core/]]
  - migration-date:: 2026-05-29T00:00:00Z
