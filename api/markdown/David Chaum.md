public:: true

# David Chaum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bc0b467b02fd6ce04bf2667808dcac74881d4103702c02c9df169f134ed3cb8d",
  "@type": "Page",
  "vc:slug": "david-chaum",
  "title": "David Chaum",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-key-cryptography",
      "vc:label": "Public-Key Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:consensus",
      "vc:label": "Consensus"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "David Chaum"
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
  "@id": "urn:ngm:class:david-chaum",
  "@type": "Class",
  "label": "David Chaum",
  "definition": "American computer scientist and cryptographer who pioneered digital cash, blind signatures and anonymous communication, and is widely regarded as a founder of the cypherpunk and privacy technology fields.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:david-chaum:bcccc3635a2f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bc0b467b02fd6ce04bf2667808dcac74881d4103702c02c9df169f134ed3cb8d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Public-Key Cryptography]]",
      "resolved": "urn:visionflow:linked:public-key-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus]]",
      "resolved": "urn:visionflow:linked:consensus",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
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
  - American computer scientist and cryptographer who pioneered digital cash, blind signatures and anonymous communication, and is widely regarded as a founder of the cypherpunk and privacy technology fields.

- ### Semantic Classification
  - owl-class:: cryptographic:DavidChaum
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Consensus]]
  - requires:: [[Public-Key Cryptography]]
  - enables:: [[Privacy]], [[Cryptocurrency]]

- ### Content
  - David Chaum is an American cryptographer whose 1980s work introduced blind signatures, untraceable electronic cash and mix networks for anonymous messaging. His company DigiCash produced one of the first practical digital payment systems, predating later cryptocurrencies.
  - Chaum's research established privacy-preserving protocols as a distinct branch of applied cryptography and influenced subsequent work on anonymous credentials, verifiable mixing and privacy-oriented payment systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
