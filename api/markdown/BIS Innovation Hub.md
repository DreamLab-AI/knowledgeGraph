public:: true

# BIS Innovation Hub
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9fd8ceb9b20a7523558398e86c52ea745122e498f6d405fa61fd33f8f03d3fd",
  "@type": "Page",
  "vc:slug": "bis-innovation-hub",
  "title": "BIS Innovation Hub",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:wholesale-cbdc",
      "vc:label": "Wholesale CBDC"
    },
    {
      "@id": "urn:visionflow:linked:central-bank",
      "vc:label": "Central Bank"
    },
    {
      "@id": "urn:visionflow:linked:hong-kong",
      "vc:label": "Hong Kong"
    },
    {
      "@id": "urn:visionflow:linked:bis",
      "vc:label": "BIS"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BIS Innovation Hub"
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
  "@id": "urn:ngm:class:bis-innovation-hub",
  "@type": "Class",
  "label": "BIS Innovation Hub",
  "definition": "The innovation arm of the Bank for International Settlements, established to develop public goods for central banks and explore financial technology.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bis",
      "label": "BIS"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:wholesale-cbdc",
        "label": "Wholesale CBDC"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bis-innovation-hub:9243d1c86d8d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a9fd8ceb9b20a7523558398e86c52ea745122e498f6d405fa61fd33f8f03d3fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wholesale CBDC]]",
      "resolved": "urn:visionflow:linked:wholesale-cbdc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank]]",
      "resolved": "urn:visionflow:linked:central-bank",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hong Kong]]",
      "resolved": "urn:visionflow:linked:hong-kong",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BIS]]",
      "resolved": "urn:visionflow:linked:bis",
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
  - The innovation arm of the Bank for International Settlements, established to develop public goods for central banks and explore financial technology.

- ### Semantic Classification
  - owl-class:: governance:BISInnovationHub
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[BIS]]
  - bridges-to:: [[Central Bank]], [[Hong Kong]]
  - enables:: [[Central Bank Digital Currency]], [[Wholesale CBDC]]

- ### Content
  - The BIS Innovation Hub is the technology and innovation arm of the Bank for International Settlements, with centres in several financial jurisdictions. It runs experimental projects to support central banks in areas such as payments, settlement, and supervision.
  - Its work on central bank digital currency, including wholesale and cross-border pilots, makes it a key actor in the evolution of public digital money.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
