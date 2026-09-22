public:: true

# Software Bill of Materials
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:software-bill-of-materials", "@type":"Page", "title":"Software Bill of Materials", "vc:slug":"software-bill-of-materials", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:software-bill-of-materials",
  "@type": "Class",
  "label": "Software Bill of Materials",
  "definition": "A software bill of materials is a formal, machine-readable inventory of the components, libraries and dependencies that make up a software artefact, together with their versions, suppliers and relationships. It provides transparency into what a piece of software actually contains, enabling vulnerability tracking, licence auditing and provenance verification across the supply chain. Standard formats such as SPDX and CycloneDX let an SBOM be generated, exchanged and consumed automatically by tooling.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain-security",
      "label": "Supply Chain Security"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:dev-sec-ops",
        "label": "DevSecOps"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      },
      {
        "@id": "urn:ngm:class:dev-sec-ops",
        "label": "DevSecOps"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A software bill of materials is a machine-readable inventory of a build's components and dependencies, a pillar of [[Supply Chain Security]].
  - It records [[Provenance]] and version data so that each [[Vulnerability]] can be traced to affected software.
  - It is generated within [[Continuous Integration]] and consumed by [[Vulnerability Management]] tooling.

- ### Overview
  - Modern software composes many third-party and open-source parts, making it hard to know what is actually shipped.
  - An SBOM lists every component, its version, supplier and dependency relationship in a standard format.
  - When a new vulnerability is disclosed, defenders query SBOMs to find which products are exposed, rather than rescanning everything.

- ### Key aspects
  - Component inventory with versions, suppliers and hashes.
  - Dependency relationships expressing how parts compose.
  - Standard formats such as SPDX and CycloneDX for interchange.
  - Automated generation during the build pipeline.

- ### Applications
  - Rapid impact analysis when a [[Vulnerability]] is disclosed.
  - Licence auditing of [[Open Source]] dependencies.
  - Embedding SBOM generation in [[DevSecOps]] and [[Continuous Integration]].
  - Demonstrating [[Transparency]] to customers and regulators.

- ### Relationships
  - subClassOf:: [[Supply Chain Security]]
  - hasPart:: [[Provenance]]
  - hasPart:: [[Vulnerability]]
  - partOf:: [[Supply Chain Security]]
  - uses:: [[Provenance]]
  - uses:: [[Continuous Integration]]
  - supports:: [[Vulnerability Management]]
  - supports:: [[DevSecOps]]
  - supports:: [[Transparency]]
  - enables:: [[Vulnerability Management]]
  - enables:: [[Transparency]]
  - requires:: [[Continuous Integration]]
  - relatedTo:: [[Open Source]]
  - relatedTo:: [[Vulnerability]]
  - relatedTo:: [[DevSecOps]]
  - bridgesTo:: [[Supply Chain Security]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
