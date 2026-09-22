public:: true

# Vercel
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b8b3c5fc3957aee0a4560da10366272283ecf2cc56087475df0a6be54d64334a",
  "@type": "Page",
  "vc:slug": "vercel",
  "title": "Vercel",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    },
    {
      "@id": "urn:visionflow:linked:cloud-platform",
      "vc:label": "Cloud Platform"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vercel"
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
  "@id": "urn:ngm:class:vercel",
  "@type": "Class",
  "label": "Vercel",
  "definition": "Vercel is a company that provides a cloud platform for deploying and hosting web applications, with an emphasis on frontend frameworks.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cloud-platform",
      "label": "Cloud Platform"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-platform",
        "label": "Cloud Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vercel:9d3508a8484e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b8b3c5fc3957aee0a4560da10366272283ecf2cc56087475df0a6be54d64334a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cloud Computing]]",
      "resolved": "urn:visionflow:linked:cloud-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cloud Platform]]",
      "resolved": "urn:visionflow:linked:cloud-platform",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
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
  - Vercel is a company that provides a cloud platform for deploying and hosting web applications, with an emphasis on frontend frameworks.

- ### Semantic Classification
  - owl-class:: general:Vercel
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cloud Platform]]
  - bridges-to:: [[Scalability]]
  - requires:: [[Cloud Computing]]
  - enables:: [[Cloud Platform]]

- ### Content
  - Vercel offers a platform for building, deploying, and hosting web applications, with automated build and deployment workflows.
  - It is closely associated with frontend frameworks and provides edge and serverless execution for web content.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
