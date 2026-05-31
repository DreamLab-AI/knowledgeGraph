public:: true

# Securitize
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b3af4ca06b5798f54827e4b79ec5c0f301c08aacfc073bfc9b9beede58c21e48",
  "@type": "Page",
  "vc:slug": "securitize",
  "title": "Securitize",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:securities-regulation",
      "vc:label": "Securities Regulation"
    },
    {
      "@id": "urn:visionflow:linked:security-token",
      "vc:label": "Security Token"
    },
    {
      "@id": "urn:visionflow:linked:tokenisation",
      "vc:label": "Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenisation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Securitize"
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
  "@id": "urn:ngm:class:securitize",
  "@type": "Class",
  "label": "Securitize",
  "definition": "A financial technology company providing infrastructure for issuing, managing and trading tokenised securities on blockchain networks.",
  "domain": "general",
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
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:securitize:6198a999cd7a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b3af4ca06b5798f54827e4b79ec5c0f301c08aacfc073bfc9b9beede58c21e48"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Securities Regulation]]",
      "resolved": "urn:visionflow:linked:securities-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Token]]",
      "resolved": "urn:visionflow:linked:security-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenisation]]",
      "resolved": "urn:visionflow:linked:tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
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
  - A financial technology company providing infrastructure for issuing, managing and trading tokenised securities on blockchain networks.

- ### Semantic Classification
  - owl-class:: general:Securitize
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Asset Tokenisation]]
  - bridges-to:: [[Tokenisation]]
  - requires:: [[Blockchain]], [[Securities Regulation]]
  - enables:: [[Security Token]]

- ### Content
  - Securitize offers a platform for the issuance and lifecycle management of digital securities, allowing assets to be represented as tokens on blockchain networks while supporting compliance with applicable securities rules.
  - Its services typically include investor onboarding, transfer agent functions and secondary trading support. The company operates within the regulatory framework governing securities in the jurisdictions where it offers services.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
