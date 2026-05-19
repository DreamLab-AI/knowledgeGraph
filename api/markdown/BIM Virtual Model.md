schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#BIMVirtualModel
legacy_uri:: urn:visionclaw:concept:spatial-computing:bim-virtual-model
public:: true

# BIM Virtual Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f34276247e9d10c5ddf7c74900704f8649629dfe4e5da7203626248d11b40313",
  "@type": "Page",
  "vc:slug": "bim-virtual-model",
  "title": "BIM Virtual Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:clash-detection",
      "vc:label": "Clash Detection"
    },
    {
      "@id": "urn:visionflow:linked:construction-simulation",
      "vc:label": "Construction Simulation"
    },
    {
      "@id": "urn:visionflow:linked:design-data",
      "vc:label": "Design Data"
    },
    {
      "@id": "urn:visionflow:linked:design-visualization",
      "vc:label": "Design Visualization"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    },
    {
      "@id": "urn:visionflow:linked:modeling-standards",
      "vc:label": "Modeling Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-model",
      "vc:label": "3D Model"
    },
    {
      "@id": "urn:visionflow:owl:class:bim-software",
      "vc:label": "BIM Software"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:key": "bridges-to",
      "vc:value": "[[Blockchain]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6de5742af3b5"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#BIMVirtualModel"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9798"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T17:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "BIM Virtual Model"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:bim-virtual-model"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:bim-virtual-model"
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
    "@id": "urn:visionflow:page:f34276247e9d10c5ddf7c74900704f8649629dfe4e5da7203626248d11b40313@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:bim-virtual-model",
  "@type": "Class",
  "label": "BIM Virtual Model",
  "definition": "A comprehensive 3D digital representation of a building or infrastructure asset created through Building Information Modeling, containing geometric data, material specifications, and functional characteristics that enable visualization, simulation, quantity take-offs, and clash detection througho...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "spatial-computing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:design-data",
        "label": "Design Data"
      },
      {
        "@id": "urn:ngm:class:modeling-standards",
        "label": "Modeling Standards"
      },
      {
        "@id": "urn:ngm:class:bim-software",
        "label": "BIM Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:clash-detection",
        "label": "Clash Detection"
      },
      {
        "@id": "urn:ngm:class:construction-simulation",
        "label": "Construction Simulation"
      },
      {
        "@id": "urn:ngm:class:design-visualization",
        "label": "Design Visualization"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:bim-virtual-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f34276247e9d10c5ddf7c74900704f8649629dfe4e5da7203626248d11b40313"
  },
  "vc:resolutions": [
    {
      "raw": "[[Clash Detection]]",
      "resolved": "urn:visionflow:linked:clash-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Construction Simulation]]",
      "resolved": "urn:visionflow:linked:construction-simulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Design Data]]",
      "resolved": "urn:visionflow:linked:design-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Design Visualization]]",
      "resolved": "urn:visionflow:linked:design-visualization",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Modeling Standards]]",
      "resolved": "urn:visionflow:linked:modeling-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Model]]",
      "resolved": "urn:visionflow:owl:class:3-d-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BIM Software]]",
      "resolved": "urn:visionflow:owl:class:bim-software",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f34276247e9d10c5ddf7c74900704f8649629dfe4e5da7203626248d11b40313@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A comprehensive 3D digital representation of a building or infrastructure asset created through Building Information Modeling, containing geometric data, material specifications, and functional characteristics that enable visualization, simulation, quantity take-offs, and clash detection throughout the construction lifecycle.

- ### Semantic Classification
  - owl-class:: spatial-computing:BimVirtualModel
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D Model]]
  - requires:: [[BIM Software]], [[Design Data]], [[Modeling Standards]]
  - enables:: [[Design Visualization]], [[Construction Simulation]], [[Clash Detection]]

- ### Content

  - ## Technical Details
  - **Model Characteristics**:
		- Parametric 3D geometry with embedded information
		- Material and component specifications
		- Spatial relationships and constraints
		- Scheduling and cost data integration
  - **Distinction from Digital Twin**:
		- BIM models: Static design and construction visualization
		- Digital twins: Real-time bi-directional data connection with physical asset
  - **Integration Technologies**:
		- CAD drawing import/export
		- Photogrammetry for existing conditions capture
		- IoT sensor integration for operational phase
		- VR/AR for immersive visualization
		- 3D Gaussian Splatting for enhanced scanning
  - ## Standards
  - **ISO 19650**: Information management framework for BIM
  - **OpenBIM**: Open standards for cross-platform data exchange
  - **IFC (Industry Foundation Classes)**: Neutral file format for model sharing
  - ## Applications
  - Pre-construction site visualization
  - Stakeholder coordination and communication
  - Construction sequencing simulation
  - Facility management and operations
  - Metaverse integration for extended building interaction

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]]
  - migration-date:: 2026-04-26T00:00:00Z
