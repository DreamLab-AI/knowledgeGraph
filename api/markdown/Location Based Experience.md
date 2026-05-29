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
  "definition": "An immersive or interactive experience tied to a specific physical venue or geographic location, combining real-world presence with digital or spatial computing overlays. Location-based experiences leverage spatial mapping, real-time content delivery, and user proximity to deliver contextually relevant narrative or interactive content that cannot be replicated remotely.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
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
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"},
      {"@id": "urn:ngm:class:gps", "label": "Gps"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:performing-arts", "label": "Performing Arts"},
      {"@id": "urn:ngm:class:virtual-production", "label": "Virtual Production"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:metaverse-venue", "label": "Metaverse Venue"}
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
  - An immersive or interactive experience tied to a specific physical venue or geographic location, combining real-world presence with digital or spatial computing overlays. Location-based experiences leverage spatial mapping, real-time content delivery, and user proximity to deliver contextually relevant narrative or interactive content that cannot be replicated remotely.

- ### Semantic Classification
  - owl-class:: spatial-computing:LocationBasedExperience
  - owl-role:: Concept

- ### Relationships
  - **requires** [[Spatial Mapping]] — location-aware content depends on accurate real-world spatial models
  - **requires** [[Gps]] — geolocation anchoring grounds experiences to physical coordinates
  - **uses** [[Extended Reality]] — XR overlays deliver the digital layer of location-based content
  - **uses** [[Content Delivery Network]] — CDN infrastructure streams assets to on-site devices at low latency
  - **enables** [[Performing Arts]] — location-based technology supports hybrid physical-digital performances
  - **enables** [[Virtual Production]] — venue-anchored virtual production workflows leverage location binding
  - **relatedTo** [[Metaverse Venue]] — metaverse venues are the digital counterparts of physical location-based spaces

- ### Content
  - This is the new trigger word for immersive and reactive experiences like those being planned with [[Immersive]] and

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
