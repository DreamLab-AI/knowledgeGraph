public:: true

# Ondo Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0fa2d92f3ca77738deaba6a256bbe876918e7bf74f3b0d8724144125b30ddf62",
  "@type": "Page",
  "vc:slug": "ondo-finance",
  "title": "Ondo Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:tokenisation",
      "vc:label": "Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:institutional-adoption",
      "vc:label": "Institutional Adoption"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ondo Finance"
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
  "@id": "urn:ngm:class:ondo-finance",
  "@type": "Class",
  "label": "Ondo Finance",
  "definition": "Ondo Finance is a company that issues tokenised versions of traditional financial products, including funds holding US Treasury securities, on public blockchains.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asset-tokenisation",
      "label": "Asset Tokenisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      },
      {
        "@id": "urn:ngm:class:neural-network-text-tokenisation",
        "label": "Neural Network Text Tokenisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ondo-finance:8b23abe4d6a8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0fa2d92f3ca77738deaba6a256bbe876918e7bf74f3b0d8724144125b30ddf62"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network Text Tokenisation]]",
      "resolved": "urn:visionflow:linked:tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Adoption]]",
      "resolved": "urn:visionflow:linked:institutional-adoption",
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
  - Ondo Finance is a company that issues tokenised versions of traditional financial products, including funds holding US Treasury securities, on public blockchains.

- ### Semantic Classification
  - owl-class:: blockchain:OndoFinance
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Asset Tokenisation]]
  - bridges-to:: [[Institutional Adoption]]
  - requires:: [[Asset Tokenisation]], [[Neural Network Text Tokenisation]]

- ### Content
  - Ondo Finance offers tokens that represent shares in funds backed by short-term US government securities, giving on-chain holders exposure to Treasury yields. Its products include tokens aimed at non-US investors and institutions.
  - The firm is frequently cited in discussions of real-world asset tokenisation, where regulated financial instruments are represented as transferable tokens on a blockchain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
