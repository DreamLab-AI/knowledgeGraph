public:: true

# HMRC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b7ef47ae9ccfd6bfd522a079d9cb0f781e5701433c95f3a687cbf109d8c5afb7",
  "@type": "Page",
  "vc:slug": "hmrc",
  "title": "HMRC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tax",
      "vc:label": "Tax"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:entity",
      "vc:label": "Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HMRC"
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
  "@id": "urn:ngm:class:hmrc",
  "@type": "Class",
  "label": "HMRC",
  "definition": "His Majesty's Revenue and Customs, the United Kingdom government department responsible for tax collection and the administration of certain payments.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:entity",
      "label": "Entity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:tax",
        "label": "Tax"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hmrc:8c78b239a594",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b7ef47ae9ccfd6bfd522a079d9cb0f781e5701433c95f3a687cbf109d8c5afb7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Tax]]",
      "resolved": "urn:visionflow:linked:tax",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Entity]]",
      "resolved": "urn:visionflow:linked:entity",
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
  - His Majesty's Revenue and Customs, the United Kingdom government department responsible for tax collection and the administration of certain payments.

- ### Semantic Classification
  - owl-class:: governance:HMRC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Financial Regulation]], [[Cryptocurrency]]
  - enables:: [[Tax]]

- ### Content
  - His Majesty's Revenue and Customs is the United Kingdom's tax authority, responsible for collecting taxes, administering customs, and operating systems such as digital tax reporting. It is a large operator of public-sector data and services.
  - It issues guidance on the tax treatment of cryptoassets and engages with broader financial regulation, making it relevant to discussions of digital finance in the UK.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
