public:: true

# Product Liability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a98ed02b3cf211adb0e258fb65d01d457246ee30fe9f601070ae794f10d8eec1",
  "@type": "Page",
  "vc:slug": "product-liability",
  "title": "Product Liability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consumer-protection",
      "vc:label": "Consumer Protection"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:safety",
      "vc:label": "Safety"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Product Liability"
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
  "@id": "urn:ngm:class:product-liability",
  "@type": "Class",
  "label": "Product Liability",
  "definition": "The area of law concerning the responsibility of producers and sellers for harm caused by defective or unsafe products placed on the market.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:consumer-protection",
      "label": "Consumer Protection"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:safety",
        "label": "Safety"
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
  "@id": "urn:visionflow:annotation:link-resolutions:product-liability:e319673c070e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a98ed02b3cf211adb0e258fb65d01d457246ee30fe9f601070ae794f10d8eec1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consumer Protection]]",
      "resolved": "urn:visionflow:linked:consumer-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Safety]]",
      "resolved": "urn:visionflow:linked:safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
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
  - The area of law concerning the responsibility of producers and sellers for harm caused by defective or unsafe products placed on the market.

- ### Semantic Classification
  - owl-class:: governance:ProductLiability
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Consumer Protection]]
  - bridges-to:: [[Risk Management]]
  - requires:: [[Consumer Protection]]
  - enables:: [[Accountability]], [[Safety]]

- ### Content
  - Product liability addresses the legal responsibility of manufacturers, distributors and retailers when a product causes injury or damage. Claims may rest on grounds such as manufacturing defects, design defects or inadequate warnings, depending on the jurisdiction.
  - Liability regimes balance the protection of consumers against the burden placed on producers. Many jurisdictions provide for strict liability in defined circumstances, meaning a claimant need not prove negligence to recover for harm from a defective product.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
