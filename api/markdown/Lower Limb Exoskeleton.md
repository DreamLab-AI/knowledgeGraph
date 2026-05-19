public:: true

# Lower Limb Exoskeleton
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1aacd12cb7df21547cc80cc962f6d0c63b3cf7f896905c7a27cf7db2e715c13d",
  "@type": "Page",
  "vc:slug": "lower-limb-exoskeleton",
  "title": "Lower Limb Exoskeleton",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:exoskeleton-robot",
      "vc:label": "Exoskeleton Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0140"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Lower Limb Exoskeleton"
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
  "@id": "urn:ngm:class:lower-limb-exoskeleton",
  "@type": "Class",
  "label": "Lower Limb Exoskeleton",
  "definition": "Lower limb exoskeleton assists or augments walking and leg movements.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:exoskeleton-robot",
      "label": "Exoskeleton Robot"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:lower-limb-exoskeleton:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1aacd12cb7df21547cc80cc962f6d0c63b3cf7f896905c7a27cf7db2e715c13d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Exoskeleton Robot]]",
      "resolved": "urn:visionflow:owl:class:exoskeleton-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - Lower limb exoskeleton assists or augments walking and leg movements.

- ### Semantic Classification
  - owl-class:: robotics:LowerLimbExoskeleton
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Exoskeleton Robot]]

- ### Content
  Lower Limb Exoskeleton — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
