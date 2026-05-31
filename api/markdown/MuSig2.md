public:: true

# MuSig2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:744515476e155384699c796ed40329585dabfe9b9c46379cb8c08424590ef86a",
  "@type": "Page",
  "vc:slug": "mu-sig-2",
  "title": "MuSig2",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:schnorr-signatures",
      "vc:label": "Schnorr Signatures"
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
      "@id": "urn:visionflow:linked:multisignature",
      "vc:label": "Multisignature"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MuSig2"
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
  "@id": "urn:ngm:class:mu-sig-2",
  "@type": "Class",
  "label": "MuSig2",
  "definition": "A two-round multi-signature scheme based on Schnorr signatures that lets several signers produce a single aggregate signature verifiable as one key.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multisignature",
      "label": "Multisignature"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:schnorr-signatures",
        "label": "Schnorr Signatures"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:mu-sig-2:4cec89920522",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:744515476e155384699c796ed40329585dabfe9b9c46379cb8c08424590ef86a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Schnorr Signatures]]",
      "resolved": "urn:visionflow:linked:schnorr-signatures",
      "kind": "ResolvedLink"
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
      "raw": "[[Multisignature]]",
      "resolved": "urn:visionflow:linked:multisignature",
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
  - A two-round multi-signature scheme based on Schnorr signatures that lets several signers produce a single aggregate signature verifiable as one key.

- ### Semantic Classification
  - owl-class:: cryptographic:MuSig2
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Multisignature]]
  - bridges-to:: [[Schnorr Signature]]
  - requires:: [[Schnorr Signatures]]
  - enables:: [[Taproot]]

- ### Content
  - MuSig2 aggregates the keys and signatures of multiple participants into one Schnorr signature that verifies against a single combined public key. It completes signing in two communication rounds while resisting known attacks on naive aggregation.
  - Because the result looks like an ordinary single-key signature, a multi-party arrangement is indistinguishable on-chain from one signer. This improves privacy and reduces verification cost, and it fits naturally with the Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
