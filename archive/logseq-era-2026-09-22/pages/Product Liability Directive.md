public:: true

# Product Liability Directive
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2fbc72281ba113867d8e56fa79d6a9b9789755b96576dd57f299696e6fbe16d1",
  "@type": "Page",
  "vc:slug": "product-liability-directive",
  "title": "Product Liability Directive",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Product Liability Directive"
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
  "@id": "urn:ngm:class:product-liability-directive",
  "@type": "Class",
  "label": "Product Liability Directive",
  "definition": "The Product Liability Directive is European Union legislation establishing rules on liability for damage caused by defective products. A revised directive adopted in 2024 extends its scope to software and AI systems.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
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
  "@id": "urn:visionflow:annotation:link-resolutions:product-liability-directive:62ba9bddee84",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2fbc72281ba113867d8e56fa79d6a9b9789755b96576dd57f299696e6fbe16d1"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Product Liability Directive is European Union legislation establishing rules on liability for damage caused by defective products. A revised directive adopted in 2024 extends its scope to software and AI systems.

- ### Semantic Classification
  - owl-class:: law:ProductLiabilityDirective
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[AI Safety]]

- ### Content
  - The EU Product Liability Directive imposes liability without fault on producers for damage caused by defective products placed on the market. The original 1985 directive was replaced by a revised version adopted in 2024 that modernises the regime for the digital age.
  - The updated directive expands the definition of product to include software, digital services and AI systems, and adjusts rules on burden of proof and the disclosure of evidence. It interacts with other EU measures governing the safety and accountability of AI.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
