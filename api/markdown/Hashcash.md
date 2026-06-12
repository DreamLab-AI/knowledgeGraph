public:: true

# Hashcash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:64643d0ed92e325da88016b08999802b3ad84bd111f1bb7a0641c2eb632a8b0a",
  "@type": "Page",
  "vc:slug": "hashcash",
  "title": "Hashcash",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-protocol",
      "vc:label": "Bitcoin Protocol"
    },
    {
      "@id": "urn:visionflow:linked:mining",
      "vc:label": "Mining"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hashcash"
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
  "@id": "urn:ngm:class:hashcash",
  "@type": "Class",
  "label": "Hashcash",
  "definition": "A proof-of-work scheme that requires a sender to compute a partial hash collision, originally proposed to limit email spam and later adapted for Bitcoin mining.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-hash-function",
      "label": "Cryptographic Hash Function"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-protocol",
        "label": "Bitcoin Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hashcash:b67ec84efe7d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:64643d0ed92e325da88016b08999802b3ad84bd111f1bb7a0641c2eb632a8b0a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mining]]",
      "resolved": "urn:visionflow:linked:mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
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
  - A proof-of-work scheme that requires a sender to compute a partial hash collision, originally proposed to limit email spam and later adapted for Bitcoin mining.

- ### Semantic Classification
  - owl-class:: cryptographic:Hashcash
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Hash Function]]
  - bridges-to:: [[Mining]]
  - requires:: [[Hash Function]]
  - enables:: [[Bitcoin Protocol]]

- ### Content
  - Hashcash asks a participant to find an input whose hash begins with a required number of zero bits. Finding such an input is computationally expensive but verifying it is cheap, imposing an asymmetric cost on the sender.
  - Originally intended to make bulk email costly, the scheme was adopted by Bitcoin as the basis of its mining proof-of-work, where the difficulty target adjusts the number of leading zeros required.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
