public:: true

# Semantic Versioning

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:semantic-versioning", "@type": "Page", "title": "Semantic Versioning", "vc:slug": "semantic-versioning", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-versioning",
  "@type": "Class",
  "label": "Semantic Versioning",
  "definition": "Semantic Versioning (SemVer) is a versioning scheme that encodes compatibility information in a three-part MAJOR.MINOR.PATCH number: major increments signal breaking changes, minor increments add backward-compatible functionality, and patch increments fix bugs without changing the interface. It gives consumers of a package or API a predictable way to reason about upgrade risk. It is widely adopted across package registries, REST and gRPC API contracts, and machine learning model registries.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:version-control",
      "label": "Version Control"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:api-versioning",
        "label": "API Versioning"
      },
      {
        "@id": "urn:ngm:class:api-contract",
        "label": "Api Contract"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      }
    ],
    "supports": []
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Semantic Versioning (SemVer) is a versioning scheme that encodes compatibility information in a three-part MAJOR.MINOR.PATCH number: major increments signal breaking changes, minor increments add backward-compatible functionality, and patch increments fix bugs without changing the interface. It gives consumers of a package or API a predictable way to reason about upgrade risk. It is widely adopted across package registries, REST and gRPC API contracts, and machine learning model registries.
- ### Relationships
	- enables:: [[Backward Compatibility]]
	- requires:: [[Version Control]]
	- relatedTo:: [[API Versioning]]
	- relatedTo:: [[Api Contract]]
	- relatedTo:: [[Model Registry]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
