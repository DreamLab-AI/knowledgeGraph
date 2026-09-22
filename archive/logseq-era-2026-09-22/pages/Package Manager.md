public:: true

# Package Manager

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:package-manager", "@type": "Page", "title": "Package Manager", "vc:slug": "package-manager", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:package-manager",
  "@type": "Class",
  "label": "Package Manager",
  "definition": "A package manager is a tool that automates the installation, upgrade, configuration and removal of software libraries and their dependencies from curated repositories. It resolves version constraints across a dependency graph and records lockfiles so environments are reproducible. Package managers are foundational infrastructure for modern software development and continuous integration.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-development",
      "label": "Software Development"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A tool that automates installing and resolving software dependencies in [[Software Development]].
  - Fetches versioned artefacts from repositories and pins them for [[Reproducibility]].
  - Integral to [[Continuous Integration]] pipelines.
- ### Overview
  - Resolves a dependency graph against declared version constraints.
  - Lockfiles freeze the exact resolved set so builds are deterministic.
  - Examples span language ecosystems and operating-system packaging.
- ### Key aspects
  - Dependency resolution computes a consistent set of compatible versions.
  - Lockfiles and content hashes guarantee reproducible installs.
  - Repositories distribute and index published packages.
  - Integrity verification mitigates supply-chain tampering.
- ### Applications
  - Reproducible developer and CI environments.
  - Sharing and reusing libraries across projects.
  - Managing toolchains for machine-learning workflows.
- ### Relationships
  - subClassOf:: [[Software Development]]
  - partOf:: [[Software Development]]
  - uses:: [[Version Control]]
  - enables:: [[Reproducibility]]
  - enables:: [[Continuous Integration]]
  - requires:: [[Software Development]]
  - supports:: [[Continuous Integration]]
  - supports:: [[Reproducibility]]
  - dependsOn:: [[Version Control]]
  - relatedTo:: [[Version Control]]
  - relatedTo:: [[Reproducibility]]
  - relatedTo:: [[Continuous Integration]]
  - relatedTo:: [[Software Development]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
