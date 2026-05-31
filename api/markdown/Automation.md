public:: true

# Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:006b3003579e8b28b4167104b15782e7927ff093c3c811af7f3c5cd0ac8b62a0",
  "@type": "Page",
  "vc:slug": "automation",
  "title": "Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:robotic-process-automation",
      "vc:label": "Robotic Process Automation"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
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
      "vc:value": "Automation"
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
  "@id": "urn:ngm:class:automation",
  "@type": "Class",
  "label": "Automation",
  "definition": "The use of technology to perform tasks with reduced human intervention. It spans physical processes in manufacturing and robotics as well as software workflows and business processes.",
  "domain": "automation",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:automation:6d65ed5c7500",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:006b3003579e8b28b4167104b15782e7927ff093c3c811af7f3c5cd0ac8b62a0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotic Process Automation]]",
      "resolved": "urn:visionflow:linked:robotic-process-automation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
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
  - The use of technology to perform tasks with reduced human intervention. It spans physical processes in manufacturing and robotics as well as software workflows and business processes.

- ### Semantic Classification
  - owl-class:: automation:Automation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Robotics]]
  - enables:: [[Robotic Process Automation]]

- ### Content
  - Automation replaces or augments manual effort with machines, control systems, and software. It ranges from mechanical and industrial automation to software-based process automation that executes routine digital tasks.
  - The aim is typically to improve consistency, speed, and cost, although automation also reshapes work by shifting human roles toward supervision, exception handling, and higher-level decisions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
