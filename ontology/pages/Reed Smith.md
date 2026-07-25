public:: true

# Reed Smith
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82bdf392883c2b45ade0f0538ff9654d40ca3598108416f601edd9b4da22b601",
  "@type": "Page",
  "vc:slug": "reed-smith",
  "title": "Reed Smith",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:https-www-reedsmith-com",
      "vc:label": "https://www.reedsmith.com"
    },
    {
      "@id": "urn:visionflow:linked:https-www-reedsmith-com-en-about",
      "vc:label": "https://www.reedsmith.com/en/about"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Reed Smith"
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
  "@id": "urn:ngm:class:reed-smith",
  "@type": "Class",
  "label": "Reed Smith",
  "definition": "Reed Smith is an international law firm headquartered in the United States with offices across several regions. It provides legal services to corporate and institutional clients.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:reed-smith:8e5122ce521d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82bdf392883c2b45ade0f0538ff9654d40ca3598108416f601edd9b4da22b601"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.reedsmith.com]]",
      "resolved": "urn:visionflow:linked:https-www-reedsmith-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.reedsmith.com/en/about]]",
      "resolved": "urn:visionflow:linked:https-www-reedsmith-com-en-about",
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
  - Reed Smith is an international law firm headquartered in the United States with offices across several regions. It provides legal services to corporate and institutional clients.

- ### Semantic Classification
  - owl-class:: governance:ReedSmith
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Governance]]

- ### Content
  - Reed Smith is a global law firm that advises clients across a range of practice areas, including litigation, finance, and regulatory matters. It operates offices in multiple countries.
  - The firm serves corporations, financial institutions, and other organisations, and it publishes guidance on legal developments in areas such as technology and data. Its work spans transactional and advisory services.

- ### Provenance
  - sources:: [[https://www.reedsmith.com]], [[https://www.reedsmith.com/en/about]]
  - migration-date:: 2026-05-29T00:00:00Z
