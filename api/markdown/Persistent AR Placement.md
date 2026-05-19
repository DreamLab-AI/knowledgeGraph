public:: true

# Persistent AR Placement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48788c7e971f2ea23d44fabf603ef3221a07c01c83f5fcb5792705ee6c0dd2df",
  "@type": "Page",
  "vc:slug": "persistent-ar-placement",
  "title": "Persistent AR Placement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:shared-ar-experiences",
      "vc:label": "Shared AR Experiences"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Persistent AR Placement"
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
  "@id": "urn:ngm:class:persistent-ar-placement",
  "@type": "Class",
  "label": "Persistent AR Placement",
  "definition": "The capability to anchor augmented reality content at specific real-world locations that persists across sessions and devices, using cloud-stored spatial anchors and environmental mapping to enable shared, location-based AR experiences.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:augmented-reality",
      "label": "Augmented Reality"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:shared-ar-experiences",
        "label": "Shared AR Experiences"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:persistent-ar-placement:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48788c7e971f2ea23d44fabf603ef3221a07c01c83f5fcb5792705ee6c0dd2df"
  },
  "vc:resolutions": [
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:owl:class:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Shared AR Experiences]]",
      "resolved": "urn:visionflow:owl:class:shared-ar-experiences",
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
  - The capability to anchor augmented reality content at specific real-world locations that persists across sessions and devices, using cloud-stored spatial anchors and environmental mapping to enable shared, location-based AR experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:PersistentArPlacement
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Augmented Reality]]
  - enables:: [[Shared AR Experiences]]

- ### Content

  - #### Key Technologies
		- Microsoft Azure Spatial Anchors for enterprise AR
		- Google ARCore Cloud Anchors for cross-platform
		- Apple ARKit world mapping for iOS persistence
		- Niantic Lightship Visual Positioning System
		- Environmental feature mapping and localization
  - #### Use Cases
		- Multi-user shared AR experiences
		- Location-based AR games and navigation
		- Industrial AR training and maintenance
		- Retail AR product visualization
		- Urban AR art installations and wayfinding

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
