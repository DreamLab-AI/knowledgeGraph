schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SoftwarePlatform
legacy_uri:: urn:visionclaw:concept:spatial-computing:software-platform
public:: true

# Software Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8cfb11ffb6058f8790fb2622fda1a6abc2d20a54d71bd0dfbaf4b370b73f2a3c",
  "@type": "Page",
  "vc:slug": "software-platform",
  "title": "Software Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:application-development",
      "vc:label": "Application Development"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:technology-infrastructure",
      "vc:label": "Technology Infrastructure"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-ec62d7857a4b"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SoftwarePlatform"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10048"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Software Platform"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:software-platform"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:software-platform"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8cfb11ffb6058f8790fb2622fda1a6abc2d20a54d71bd0dfbaf4b370b73f2a3c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:software-platform",
  "@type": "Class",
  "label": "Software Platform",
  "definition": "An integrated technology foundation providing common services, APIs, and infrastructure for developing, deploying, and running applications, including cloud-native platforms, container orchestration systems, and internal developer platforms that abstract underlying complexity while enabling scala...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technology-infrastructure",
      "label": "Technology Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:application-development",
        "label": "Application Development"
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
  "@id": "urn:visionflow:annotation:link-resolutions:software-platform:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8cfb11ffb6058f8790fb2622fda1a6abc2d20a54d71bd0dfbaf4b370b73f2a3c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Application Development]]",
      "resolved": "urn:visionflow:linked:application-development",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technology Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:technology-infrastructure",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8cfb11ffb6058f8790fb2622fda1a6abc2d20a54d71bd0dfbaf4b370b73f2a3c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An integrated technology foundation providing common services, APIs, and infrastructure for developing, deploying, and running applications, including cloud-native platforms, container orchestration systems, and internal developer platforms that abstract underlying complexity while enabling scalable application delivery.

- ### Semantic Classification
  - owl-class:: spatial-computing:SoftwarePlatform
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Technology Infrastructure]]
  - enables:: [[Application Development]]

- ### Content

  - #### Platform Types
		- Internal developer platforms
		- Cloud-native infrastructure platforms
		- Low-code and no-code platforms
		- Industry cloud platforms
		- Container orchestration (Kubernetes)
  - #### Key Trends 2024
		- Platform engineering adoption growing
		- AI-augmented development tools
		- Infrastructure as code practices
		- Serverless computing expansion
		- Cloud development environments

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
