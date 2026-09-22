public:: true

# Digital Society
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7da8e8acd6d2c7c9f1700cac65f3df14d5016ec201f85b9dc60e44eeda9be8f3",
  "@type": "Page",
  "vc:slug": "digital-society",
  "title": "Digital Society",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9591"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Society"
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
  "@id": "urn:ngm:class:digital-society",
  "@type": "Class",
  "label": "Digital Society",
  "definition": "The emergent social order in which digital networks, platforms, and data systems become primary mediators of economic activity, civic participation, cultural expression, and interpersonal relationships. Digital society encompasses the institutions, norms, rights, and governance mechanisms needed to ensure equitable, secure, and rights-respecting participation in digital environments including the metaverse.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:metaverse-and-telecollaboration",
      "label": "Metaverse and Telecollaboration"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:digital-governance",
        "label": "Digital Governance"
      },
      {
        "@id": "urn:ngm:class:digital-rights",
        "label": "Digital Rights"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-citizenship",
        "label": "Digital Citizenship"
      },
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:telecollaboration",
        "label": "Telecollaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-transformation",
        "label": "Digital Transformation"
      },
      {
        "@id": "urn:ngm:class:online-identity",
        "label": "Online Identity"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-society:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7da8e8acd6d2c7c9f1700cac65f3df14d5016ec201f85b9dc60e44eeda9be8f3"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - The emergent social order in which digital networks, platforms, and data systems become primary mediators of economic activity, civic participation, cultural expression, and interpersonal relationships. Digital society encompasses the institutions, norms, rights, and governance mechanisms needed to ensure equitable, secure, and rights-respecting participation in digital environments including the metaverse.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalSociety
  - owl-role:: concept

- ### Relationships
  - Bridges To [[Telecollaboration]]
  - Enables [[Digital Citizenship]]
  - Enables [[Digital Economy]]
  - Requires [[Digital Governance]]
  - Requires [[Digital Rights]]
  - Related To [[Digital Transformation]]
  - Related To [[Online Identity]]

- ### Content

  ## Overview

  Digital society describes the macro-level reorganisation of human activity around digital infrastructure. As metaverse platforms mature, they add a spatially immersive layer to digital society — hosting commerce, art, education, and governance. The resulting sociotechnical system requires updated frameworks for identity, property rights, data sovereignty, and democratic accountability.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
