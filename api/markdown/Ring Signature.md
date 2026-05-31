public:: true

# Ring Signature
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4d27784836f35b7305227536811583793b42bc147d9c7676d4c914bb4c165c0f",
  "@type": "Page",
  "vc:slug": "ring-signature",
  "title": "Ring Signature",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:pseudonymity",
      "vc:label": "Pseudonymity"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ring Signature"
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
  "@id": "urn:ngm:class:ring-signature",
  "@type": "Class",
  "label": "Ring Signature",
  "definition": "A ring signature is a digital signature produced by one member of a group such that verifiers learn the signature came from the group but cannot identify which member signed. It provides signer anonymity within an ad hoc set.",
  "domain": "cryptography",
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
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ring-signature:b9ac4dbb1cf7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4d27784836f35b7305227536811583793b42bc147d9c7676d4c914bb4c165c0f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pseudonymity]]",
      "resolved": "urn:visionflow:linked:pseudonymity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
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
  - A ring signature is a digital signature produced by one member of a group such that verifiers learn the signature came from the group but cannot identify which member signed. It provides signer anonymity within an ad hoc set.

- ### Semantic Classification
  - owl-class:: cryptography:RingSignature
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - requires:: [[Cryptography]]
  - enables:: [[Pseudonymity]]

- ### Content
  - A ring signature lets a signer combine their own key with the public keys of others to form a ring, producing a signature that any verifier can check as valid for the ring without learning the actual signer. No setup or cooperation from the other members is required.
  - The construction provides anonymity and is used in privacy-focused cryptocurrencies such as Monero to obscure which input authorises a transaction. It is one of several cryptographic tools for unlinkability alongside zero-knowledge proofs and mixing techniques.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
