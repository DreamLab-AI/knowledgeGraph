public:: true

# DAI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3f0515e4dc21532f0b27822858938d084c2d29bcd00b4e164b1511d026bc4a87",
  "@type": "Page",
  "vc:slug": "dai",
  "title": "DAI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:maker-dao",
      "vc:label": "MakerDAO"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DAI"
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
  "@id": "urn:ngm:class:dai",
  "@type": "Class",
  "label": "DAI",
  "definition": "DAI is a decentralised stablecoin issued by the MakerDAO protocol on Ethereum that aims to hold a value close to one US dollar through collateral backing.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stablecoin",
      "label": "Stablecoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:maker-dao",
        "label": "MakerDAO"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:dai:4de6bb4e4a6c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3f0515e4dc21532f0b27822858938d084c2d29bcd00b4e164b1511d026bc4a87"
  },
  "vc:resolutions": [
    {
      "raw": "[[MakerDAO]]",
      "resolved": "urn:visionflow:linked:maker-dao",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
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
  - DAI is a decentralised stablecoin issued by the MakerDAO protocol on Ethereum that aims to hold a value close to one US dollar through collateral backing.

- ### Semantic Classification
  - owl-class:: blockchain:DAI
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Stablecoin]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[MakerDAO]], [[Smart Contract]]

- ### Content
  - DAI is generated when users lock collateral assets in MakerDAO smart contracts and borrow DAI against them. The system uses overcollateralisation, liquidation of undercollateralised positions, and stability fees to keep the price near its dollar target.
  - Originally backed only by ether, DAI later accepted a wider range of collateral including other tokens and assets connected to off-chain reserves, which broadened its backing while introducing new dependencies.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
