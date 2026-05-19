public:: true

# Location Based Experience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dcea335499b329ce3f105ea9485a3a7581bc8650d632c545cc679a5ecfd2a5eb",
  "@type": "Page",
  "vc:slug": "location-based-experience",
  "title": "Location Based Experience",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:immersive",
      "vc:label": "Immersive"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": ""
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Location Based Experience"
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
  "@id": "urn:ngm:class:location-based-experience",
  "@type": "Class",
  "label": "Location Based Experience",
  "definition": "Location Based Experience is a spatial computing concept and a type of Immersive Experience.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:immersive-experience",
      "label": "Immersive Experience"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:location-based-experience:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dcea335499b329ce3f105ea9485a3a7581bc8650d632c545cc679a5ecfd2a5eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Immersive]]",
      "resolved": "urn:visionflow:linked:immersive",
      "kind": "StubLink"
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
  - Location Based Experience is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:LocationBasedExperience
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - This is the new trigger word for immersive and reactive experiences like those being planned with [[Immersive]] and

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
