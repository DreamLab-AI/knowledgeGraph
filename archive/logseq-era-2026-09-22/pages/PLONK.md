public:: true

# PLONK
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:258b468dba0888ad63214bdd22e71eda5fceb0121b4285ee92fc220a44b4e3a7",
  "@type": "Page",
  "vc:slug": "plonk",
  "title": "PLONK",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:scroll",
      "vc:label": "Scroll"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:https-eprint-iacr-org-2019-953",
      "vc:label": "https://eprint.iacr.org/2019/953"
    },
    {
      "@id": "urn:visionflow:linked:https-vitalik-eth-limo-general-2019-09-22-plonk-html",
      "vc:label": "https://vitalik.eth.limo/general/2019/09/22/plonk.html"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "PLONK"
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
  "@id": "urn:ngm:class:plonk",
  "@type": "Class",
  "label": "PLONK",
  "definition": "PLONK is a zero-knowledge proof system that uses polynomial commitments and a universal trusted setup. It is used to build succinct proofs for verifiable computation.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:zero-knowledge-proof",
      "label": "Zero-Knowledge Proof"
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
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
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
  "@id": "urn:visionflow:annotation:link-resolutions:plonk:32b51bf4a195",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:258b468dba0888ad63214bdd22e71eda5fceb0121b4285ee92fc220a44b4e3a7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scroll]]",
      "resolved": "urn:visionflow:linked:scroll",
      "kind": "StubLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://eprint.iacr.org/2019/953]]",
      "resolved": "urn:visionflow:linked:https-eprint-iacr-org-2019-953",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://vitalik.eth.limo/general/2019/09/22/plonk.html]]",
      "resolved": "urn:visionflow:linked:https-vitalik-eth-limo-general-2019-09-22-plonk-html",
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
  - PLONK is a zero-knowledge proof system that uses polynomial commitments and a universal trusted setup. It is used to build succinct proofs for verifiable computation.

- ### Semantic Classification
  - owl-class:: blockchain:PLONK
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Scroll]]
  - requires:: [[Cryptography]]
  - enables:: [[Rollup]]

- ### Content
  - PLONK is a proof system that lets a prover convince a verifier that a computation was performed correctly while revealing nothing beyond its validity. It relies on polynomial commitments and a setup that can be reused across many circuits.
  - The universal setup distinguishes PLONK from earlier systems that required a fresh setup for each circuit. PLONK and its variants are used in zero-knowledge rollups and other applications that need compact proofs of computation.

- ### Provenance
  - sources:: [[https://eprint.iacr.org/2019/953]], [[https://vitalik.eth.limo/general/2019/09/22/plonk.html]]
  - migration-date:: 2026-05-29T00:00:00Z
