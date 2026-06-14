public:: true

# Metaverse Classification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:61f5f3dd2ccd06d76292a08db642d79c566e9dc379f0e544c61c78ee65c174f4",
  "@type": "Page",
  "vc:slug": "metaverse-classification",
  "title": "Metaverse Classification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9649"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Metaverse Classification"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:metaverse-classification",
  "@type": "Class",
  "label": "Metaverse Classification",
  "definition": "A structured taxonomy scheme for categorising metaverse platforms, applications, and components according to defined criteria such as openness, immersion level, economic model, and governance structure, enabling systematic comparison and standardised description within the ETSI metaverse domain model.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
      "label": "Etsi Metaverse Domain Taxonomy"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-model",
        "label": "Etsi Metaverse Domain Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse Domain"
      },
      {
        "@id": "urn:ngm:class:metaverse-ontology",
        "label": "Metaverse Ontology"
      },
      {
        "@id": "urn:ngm:class:metaverse-architecture",
        "label": "Metaverse Architecture"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi-domain-immersive",
        "label": "Etsi Domain Immersive"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:metaverse-classification:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:61f5f3dd2ccd06d76292a08db642d79c566e9dc379f0e544c61c78ee65c174f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A structured taxonomy scheme for categorising metaverse platforms, applications, and components according to defined criteria such as openness, immersion level, economic model, and governance structure, enabling systematic comparison and standardised description within the ETSI metaverse domain model.

- ### Semantic Classification
  - owl-class:: spatial-computing:MetaverseClassification
  - owl-role:: concept

- ### Relationships
  - Uses: [[Etsi Metaverse Domain Model]]
  - Standardized By: [[Etsi Domain Immersive]]
  - Related To: [[Metaverse Domain]]
  - Related To: [[Metaverse Ontology]]
  - Related To: [[Metaverse Architecture]]

- ### Content

  ## Overview

  Metaverse Classification represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
