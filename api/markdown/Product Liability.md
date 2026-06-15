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
  "definition": "The area of law concerning the responsibility of producers and sellers for harm caused by defective or unsafe products placed on the market, covering manufacturing defects, design defects, and failure to warn.",
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
    "hasPart": [
      {
        "@id": "urn:ngm:class:strict-liability",
        "label": "Strict Liability"
      },
      {
        "@id": "urn:ngm:class:negligence",
        "label": "Negligence"
      },
      {
        "@id": "urn:ngm:class:warranty",
        "label": "Warranty"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:tort-law",
        "label": "Tort Law"
      },
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
      },
      {
        "@id": "urn:ngm:class:redress",
        "label": "Redress"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:product-safety-standards",
        "label": "Product Safety Standards"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:due-diligence",
        "label": "Due Diligence"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:market-surveillance",
        "label": "Market Surveillance"
      },
      {
        "@id": "urn:ngm:class:product-recall",
        "label": "Product Recall"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:product-liability-directive",
        "label": "Product Liability Directive"
      },
      {
        "@id": "urn:ngm:class:iso-standards",
        "label": "ISO Standards"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:contributory-negligence",
        "label": "Contributory Negligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:insurance",
        "label": "Insurance"
      },
      {
        "@id": "urn:ngm:class:intellectual-property",
        "label": "Intellectual Property"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:products-liability",
      "label": "Products Liability"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
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
