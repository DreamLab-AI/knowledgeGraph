public:: true

# BC-0484-markets-in-crypto-assets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:352e60f3b21fc81b3c53ff7a29a3cf6dbbbb066232e21d6923c178f0204cd642",
  "@type": "Page",
  "vc:slug": "bc-0484-markets-in-crypto-assets",
  "title": "BC-0484-markets-in-crypto-assets",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:securities-regulation",
      "vc:label": "Securities Regulation"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:mi-ca-regulation",
      "vc:label": "MiCA Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BC-0484-markets-in-crypto-assets"
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
  "@id": "urn:ngm:class:bc-0484-markets-in-crypto-assets",
  "@type": "Class",
  "label": "BC-0484-markets-in-crypto-assets",
  "definition": "Markets in Crypto-Assets is the European Union regulatory framework that defines categories of crypto-assets and sets authorisation and conduct rules for their issuers and service providers.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bc-0484-markets-in-crypto-assets:be9576d7f4ff",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:352e60f3b21fc81b3c53ff7a29a3cf6dbbbb066232e21d6923c178f0204cd642"
  },
  "vc:resolutions": [
    {
      "raw": "[[Securities Regulation]]",
      "resolved": "urn:visionflow:linked:securities-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiCA Regulation]]",
      "resolved": "urn:visionflow:linked:mi-ca-regulation",
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
  - Markets in Crypto-Assets is the European Union regulatory framework that defines categories of crypto-assets and sets authorisation and conduct rules for their issuers and service providers.

- ### Semantic Classification
  - owl-class:: blockchain:BC0484marketsincryptoassets
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulatory Compliance]]
  - bridges-to:: [[MiCA Regulation]]
  - requires:: [[Securities Regulation]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - Markets in Crypto-Assets, commonly abbreviated MiCA, is the European Union framework that brings crypto-assets outside existing financial services law into a single regulatory regime. It classifies tokens into categories such as asset-referenced tokens, e-money tokens and other crypto-assets, with rules tailored to each.
  - The framework requires issuers to publish disclosures and, for certain stablecoin-type tokens, to hold reserves and meet governance standards, while service providers must be authorised. It is the same legislation referred to as the MiCA Regulation and is supervised by national authorities together with European bodies.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
