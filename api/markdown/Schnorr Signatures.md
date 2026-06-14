public:: true

# Schnorr Signatures
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c2cfa64bdefb697cc1b63a1a18287d7564815123f466e51dd60bfee9d63527d",
  "@type": "Page",
  "vc:slug": "schnorr-signatures",
  "title": "Schnorr Signatures",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:mu-sig-2",
      "vc:label": "MuSig2"
    },
    {
      "@id": "urn:visionflow:linked:taproot",
      "vc:label": "Taproot"
    },
    {
      "@id": "urn:visionflow:linked:schnorr-signature",
      "vc:label": "Schnorr Signature"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Schnorr Signatures"
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
  "@id": "urn:ngm:class:schnorr-signatures",
  "@type": "Class",
  "label": "Schnorr Signatures",
  "definition": "A digital signature scheme based on the discrete logarithm problem, producing compact signatures with linear key and signature aggregation properties.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-signature",
      "label": "Digital Signature"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mu-sig-2",
        "label": "MuSig2"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
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
  "@id": "urn:visionflow:annotation:link-resolutions:schnorr-signatures:796a9ff7c98f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c2cfa64bdefb697cc1b63a1a18287d7564815123f466e51dd60bfee9d63527d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:linked:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MuSig2]]",
      "resolved": "urn:visionflow:linked:mu-sig-2",
      "kind": "StubLink"
    },
    {
      "raw": "[[Taproot]]",
      "resolved": "urn:visionflow:linked:taproot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Schnorr Signature]]",
      "resolved": "urn:visionflow:linked:schnorr-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
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
  - A digital signature scheme based on the discrete logarithm problem, producing compact signatures with linear key and signature aggregation properties.

- ### Semantic Classification
  - owl-class:: cryptographic:SchnorrSignatures
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Signature]]
  - bridges-to:: [[Schnorr Signature]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[MuSig2]], [[Taproot]]

- ### Content
  - Schnorr signatures derive their security from the hardness of the discrete logarithm problem over an elliptic curve group. They produce a fixed-size signature consisting of a commitment value and a response scalar, and verification checks a single group equation.
  - A defining property is linearity, which permits signatures and public keys to be added together. This supports key aggregation and multi-signature constructions such as MuSig2, and underpins the signature scheme standardised in Bitcoin through BIP-340 and the Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
