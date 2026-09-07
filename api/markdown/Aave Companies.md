```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1850c131bf05c44af22093cb892d5c648212949d6c55a537bf1a75f98b84ba01",
  "@type": "Page",
  "vc:slug": "aave-companies",
  "title": "Aave Companies",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lending-protocol",
      "vc:label": "Lending Protocol"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:aave",
      "vc:label": "Aave"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aave Companies"
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
  "@id": "urn:ngm:class:aave-companies",
  "@type": "Class",
  "label": "Aave Companies",
  "definition": "Aave Companies is the development company, founded by Stani Kulechov, behind the Aave decentralised lending protocol and related products. It was formerly known as ETHLend.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:aave",
      "label": "Aave"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
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

- ### Definition
  - Aave Companies is the development company, founded by Stani Kulechov, behind the Aave decentralised lending protocol and related products. It was formerly known as ETHLend.

- ### Semantic Classification
  - owl-class:: defi:AaveCompanies
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Aave]]
  - bridges-to:: [[DeFi]]
  - enables:: [[Lending Protocol]]

- ### Content
  - Aave Companies is the team that builds and maintains the Aave protocol, a decentralised money market on Ethereum and other chains, along with associated products such as the GHO stablecoin and social applications. The company began as ETHLend in 2017 before rebranding to Aave.
  - Founded by Stani Kulechov, the company develops protocol software while governance of the deployed contracts is exercised by AAVE token holders. It later rebranded its corporate identity toward consumer-facing products under the Avara name.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
