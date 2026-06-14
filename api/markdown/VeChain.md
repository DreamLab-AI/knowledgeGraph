public:: true

# VeChain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0da987c1e5c23db72d9597a1335d873fe570531aa3ab7811e7bb5353437629ec",
  "@type": "Page",
  "vc:slug": "ve-chain",
  "title": "VeChain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-authority",
      "vc:label": "Proof of Authority"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain-tracking",
      "vc:label": "Supply Chain Tracking"
    },
    {
      "@id": "urn:visionflow:linked:product-provenance",
      "vc:label": "Product Provenance"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "VeChain"
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
  "@id": "urn:ngm:class:ve-chain",
  "@type": "Class",
  "label": "VeChain",
  "definition": "VeChain is a public blockchain platform oriented toward supply-chain management and enterprise applications. It uses a proof-of-authority consensus model in which a limited set of authorised validators produce blocks, prioritising throughput and predictability for business use. The platform employs a dual-token design, separating the asset used to hold value from the token used to pay for transaction costs.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-authority",
        "label": "Proof of Authority"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supply-chain-tracking",
        "label": "Supply Chain Tracking"
      },
      {
        "@id": "urn:ngm:class:product-provenance",
        "label": "Product Provenance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ve-chain:82b163190a52",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0da987c1e5c23db72d9597a1335d873fe570531aa3ab7811e7bb5353437629ec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Authority]]",
      "resolved": "urn:visionflow:linked:proof-of-authority",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain Tracking]]",
      "resolved": "urn:visionflow:linked:supply-chain-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Product Provenance]]",
      "resolved": "urn:visionflow:linked:product-provenance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - VeChain is a public blockchain platform oriented toward supply-chain management and enterprise applications. It uses a proof-of-authority consensus model in which a limited set of authorised validators produce blocks, prioritising throughput and predictability for business use. The platform employs a dual-token design, separating the asset used to hold value from the token used to pay for transaction costs.

- ### Semantic Classification
  - owl-class:: blockchain:VeChain
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Internet of Things]], [[Digital Asset Domain]]
  - requires:: [[Proof of Authority]], [[Smart Contract]]
  - enables:: [[Supply Chain Tracking]], [[Product Provenance]]

- ### Content
  - VeChain targets enterprise adoption by emphasising traceability of physical goods, often combining on-chain records with sensors and identifiers attached to products. This allows participants in a supply chain to record and verify provenance, handling conditions and authenticity.
  - Its proof-of-authority consensus relies on a known, vetted set of validators rather than open participation, which yields high throughput and low variability at the cost of permissioned block production. The dual-token model uses one token as a store of value and another, generated by holding the first, to meter transaction costs and insulate users from volatility in fees.
  - The platform positions itself for use cases such as logistics, anti-counterfeiting and sustainability reporting, where businesses value auditability and stable operating costs. This places it among blockchains designed primarily for commercial integration rather than open financial applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
