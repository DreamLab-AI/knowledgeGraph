public:: true

# Parental Controls
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4120c45e560e6ae9d2b072597ecda7a029d061a03d8cf282026ab84f94970d1c",
  "@type": "Page",
  "vc:slug": "parental-controls",
  "title": "Parental Controls",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:safe-online-environment",
      "vc:label": "Safe Online Environment"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-safety",
      "vc:label": "Digital Safety"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9993"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Parental Controls"
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
  "@id": "urn:ngm:class:parental-controls",
  "@type": "Class",
  "label": "Parental Controls",
  "definition": "Software tools and platform features that enable guardians to monitor, filter, and limit children's access to digital content, applications, and online interactions, using AI-powered content analysis and customizable restrictions to promote safe technology use.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:digital-safety",
      "label": "Digital Safety"
    }
  ],
  "relations": {},
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:parental-controls:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4120c45e560e6ae9d2b072597ecda7a029d061a03d8cf282026ab84f94970d1c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Safe Online Environment]]",
      "resolved": "urn:visionflow:linked:safe-online-environment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Safety]]",
      "resolved": "urn:visionflow:owl:class:digital-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Software tools and platform features that enable guardians to monitor, filter, and limit children's access to digital content, applications, and online interactions, using AI-powered content analysis and customizable restrictions to promote safe technology use.

- ### Semantic Classification
  - owl-class:: spatial-computing:ParentalControls
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Safety]]
  - enables:: [[Safe Online Environment]]

- ### Content

  - #### Key Features
		- Content filtering for adult, violent, or harmful material
		- Screen time limits and scheduled downtime
		- App and website blocking or allowlisting
		- Location tracking and geofencing
		- Activity monitoring and reporting
  - #### Popular Platforms
		- Google Family Link for Android and ChromeOS
		- Bark for AI-powered threat detection
		- Qustodio for comprehensive web filtering
		- Canopy for image recognition filtering
		- Apple Screen Time for iOS devices

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
