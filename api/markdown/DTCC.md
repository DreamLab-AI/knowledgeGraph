public:: true

# DTCC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b057c89b0d1cf05d404ad90cc0b826a385d991f0c5241a592474fd6bbffa669a",
  "@type": "Page",
  "vc:slug": "dtcc",
  "title": "DTCC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:traditional-finance",
      "vc:label": "Traditional Finance"
    },
    {
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure",
      "vc:label": "Financial Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DTCC"
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
  "@id": "urn:ngm:class:dtcc",
  "@type": "Class",
  "label": "DTCC",
  "definition": "DTCC, the Depository Trust and Clearing Corporation, is a United States company that provides clearing, settlement, and recordkeeping services for securities markets.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure",
      "label": "Financial Infrastructure"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:dtcc:94705f9b7af8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b057c89b0d1cf05d404ad90cc0b826a385d991f0c5241a592474fd6bbffa669a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Traditional Finance]]",
      "resolved": "urn:visionflow:linked:traditional-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure",
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
  - DTCC, the Depository Trust and Clearing Corporation, is a United States company that provides clearing, settlement, and recordkeeping services for securities markets.

- ### Semantic Classification
  - owl-class:: finance:DTCC
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Financial Infrastructure]]
  - bridges-to:: [[Traditional Finance]], [[Asset Tokenisation]]

- ### Content
  - DTCC operates the central post-trade infrastructure for much of the United States securities market through subsidiaries that handle clearing and depository functions. It processes large volumes of equity, fixed income, and derivatives transactions.
  - The corporation has run pilots and projects examining distributed ledger technology and tokenisation, studying how settlement infrastructure might use these technologies while maintaining existing controls.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
