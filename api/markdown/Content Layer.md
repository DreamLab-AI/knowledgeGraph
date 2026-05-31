public:: true

# Content Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3dde63222a98918d9a25d073125a6eabb7f9984e52931468a300370eb372cd7b",
  "@type": "Page",
  "vc:slug": "content-layer",
  "title": "Content Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:linked:presentation-layer",
      "vc:label": "Presentation Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:content-management",
      "vc:label": "Content Management"
    },
    {
      "@id": "urn:visionflow:linked:metadata",
      "vc:label": "Metadata"
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
      "vc:value": "Content Layer"
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
  "@id": "urn:ngm:class:content-layer",
  "@type": "Class",
  "label": "Content Layer",
  "definition": "The Content Layer is the stratum that holds the substantive information and media that a system manages and presents. It sits above the Data Layer that stores it and below the Presentation Layer that renders it. It contains documents, media assets, metadata, and the structures that organise meaning.",
  "domain": "content",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-layer",
        "label": "Data Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:presentation-layer",
        "label": "Presentation Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:content-layer:8c166ba2c478",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3dde63222a98918d9a25d073125a6eabb7f9984e52931468a300370eb372cd7b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:linked:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Presentation Layer]]",
      "resolved": "urn:visionflow:linked:presentation-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Management]]",
      "resolved": "urn:visionflow:linked:content-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metadata]]",
      "resolved": "urn:visionflow:linked:metadata",
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
  - The Content Layer is the stratum that holds the substantive information and media that a system manages and presents. It sits above the Data Layer that stores it and below the Presentation Layer that renders it. It contains documents, media assets, metadata, and the structures that organise meaning.

- ### Semantic Classification
  - owl-class:: content:ContentLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Content Management]], [[Metadata]]
  - requires:: [[Data Layer]]
  - enables:: [[Presentation Layer]], [[Application Layer]]

- ### Content
  - The Content Layer organises the meaningful information a system exists to deliver, distinct from the raw storage beneath it. Typical members include documents, images and other media, structured content models, taxonomies, and the metadata that describes and classifies them. It treats information as something authored and curated.
  - It requires the Data Layer to persist and retrieve its assets, and it enables the Presentation Layer to render content and the Application Layer to act on it. Structure and metadata defined here make content findable, reusable, and meaningful.
  - The layer bridges to content management and metadata, disciplines that govern authoring, versioning, and description. The richness of its models determines how flexibly content can be repurposed across channels.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
