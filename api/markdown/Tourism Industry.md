public:: true

# Tourism Industry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f27b4b1778244ae648206fcdc59f47464d73e4f21ae23f02875b728002291117",
  "@type": "Page",
  "vc:slug": "tourism-industry",
  "title": "Tourism Industry",
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
      "vc:value": "MV-9713"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tourism Industry"
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
  "@id": "urn:ngm:class:tourism-industry",
  "@type": "Class",
  "label": "Tourism Industry",
  "definition": "The Tourism Industry encompasses the businesses, infrastructure, and services facilitating recreational and business travel, including accommodation, transport, attraction management, and destination marketing. In spatial computing contexts, it is a primary adopter of XR, virtual tourism, and location-based immersive experiences to enhance visitor engagement and extend reach beyond physical access.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:virtual-tourism", "label": "Virtual Tourism"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cultural-heritage-xr-experience", "label": "Cultural Heritage XR Experience"},
      {"@id": "urn:ngm:class:etsi-domain-application-tourism", "label": "ETSI Domain Application + Tourism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:venue-tethered-immersive-experience", "label": "Location Based Experience"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tourism-industry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f27b4b1778244ae648206fcdc59f47464d73e4f21ae23f02875b728002291117"
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
  The Tourism Industry encompasses the businesses, infrastructure, and services facilitating recreational and business travel, including accommodation, transport, attraction management, and destination marketing. In spatial computing contexts, it is a primary adopter of XR, virtual tourism, and location-based immersive experiences to enhance visitor engagement and extend reach beyond physical access.

- ### Semantic Classification
  - owl-class:: spatial-computing:TourismIndustry
  - owl-role:: concept

- ### Relationships
  - **uses**: Virtual Tourism, Augmented Reality, Immersive Experience
  - **relatedTo**: Cultural Heritage XR Experience, ETSI Domain Application + Tourism
  - **enables**: Location Based Experience

- ### Content

  ## Overview

  Tourism Industry represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
