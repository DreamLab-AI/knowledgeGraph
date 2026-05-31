public:: true

# Shamir Secret Sharing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0282631fdd60fd64dc6e5aedf592995fc813410eff68d09c8d2edb8c6395a9fd",
  "@type": "Page",
  "vc:slug": "shamir-secret-sharing",
  "title": "Shamir Secret Sharing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:modular-arithmetic",
      "vc:label": "Modular Arithmetic"
    },
    {
      "@id": "urn:visionflow:linked:threshold-cryptography",
      "vc:label": "Threshold Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:stark",
      "vc:label": "STARK"
    },
    {
      "@id": "urn:visionflow:linked:cryptography-domain",
      "vc:label": "Cryptography Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Shamir Secret Sharing"
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
  "@id": "urn:ngm:class:shamir-secret-sharing",
  "@type": "Class",
  "label": "Shamir Secret Sharing",
  "definition": "Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography-domain",
      "label": "Cryptography Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:modular-arithmetic",
        "label": "Modular Arithmetic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
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
  "@id": "urn:visionflow:annotation:link-resolutions:shamir-secret-sharing:578d63ebcc40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0282631fdd60fd64dc6e5aedf592995fc813410eff68d09c8d2edb8c6395a9fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Modular Arithmetic]]",
      "resolved": "urn:visionflow:linked:modular-arithmetic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Threshold Cryptography]]",
      "resolved": "urn:visionflow:linked:threshold-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[STARK]]",
      "resolved": "urn:visionflow:linked:stark",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography Domain]]",
      "resolved": "urn:visionflow:linked:cryptography-domain",
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
  - Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.

- ### Semantic Classification
  - owl-class:: metaverse:ShamirSecretSharing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography Domain]]
  - bridges-to:: [[Cryptography]], [[STARK]]
  - requires:: [[Modular Arithmetic]]
  - enables:: [[Threshold Cryptography]]

- ### Content
  - The scheme encodes a secret as the constant term of a random polynomial of degree one less than the threshold, distributing point evaluations as shares. Any threshold subset interpolates the polynomial and recovers the secret, while smaller subsets learn nothing about it.
  - Shamir secret sharing underpins threshold cryptography, distributed key management and secure backup of keys. It relies on arithmetic over finite fields, connecting it to modular arithmetic.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
