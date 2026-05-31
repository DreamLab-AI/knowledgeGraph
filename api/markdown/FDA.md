public:: true

# FDA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d668e4ffffe923db2109edf0842b145ce99faf20f4e48d2cc29e59f738190370",
  "@type": "Page",
  "vc:slug": "fda",
  "title": "FDA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-biology",
      "vc:label": "Synthetic Biology"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fda-gov",
      "vc:label": "https://www.fda.gov"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fda-gov-about-fda",
      "vc:label": "https://www.fda.gov/about-fda"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FDA"
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
  "@id": "urn:ngm:class:fda",
  "@type": "Class",
  "label": "FDA",
  "definition": "The Food and Drug Administration is a United States federal agency that regulates food, drugs, medical devices, and related products. It oversees their safety and approval.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fda:c5c82b45badc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d668e4ffffe923db2109edf0842b145ce99faf20f4e48d2cc29e59f738190370"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Synthetic Biology]]",
      "resolved": "urn:visionflow:linked:synthetic-biology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.fda.gov]]",
      "resolved": "urn:visionflow:linked:https-www-fda-gov",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.fda.gov/about-fda]]",
      "resolved": "urn:visionflow:linked:https-www-fda-gov-about-fda",
      "kind": "StubLink"
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
  - The Food and Drug Administration is a United States federal agency that regulates food, drugs, medical devices, and related products. It oversees their safety and approval.

- ### Semantic Classification
  - owl-class:: governance:FDA
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Synthetic Biology]]
  - enables:: [[Governance]]

- ### Content
  - The Food and Drug Administration is a federal agency that regulates the safety and effectiveness of food, pharmaceuticals, biological products, and medical devices in the United States. It reviews evidence before products reach the market.
  - The agency sets standards, conducts inspections, and can require recalls or label changes. Its approval processes are a significant step for new medicines and devices, and it increasingly considers products that involve software and biotechnology.

- ### Provenance
  - sources:: [[https://www.fda.gov]], [[https://www.fda.gov/about-fda]]
  - migration-date:: 2026-05-29T00:00:00Z
