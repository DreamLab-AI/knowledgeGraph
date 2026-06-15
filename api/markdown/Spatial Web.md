public:: true

# Spatial Web

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:spatial-web",
  "@type": "Page",
  "title": "Spatial Web",
  "vc:slug": "spatial-web",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spatial-web",
  "@type": "Class",
  "label": "Spatial Web",
  "definition": "The Spatial Web is a proposed convergence of spatial computing, decentralised web technologies and the semantic web into a single addressable layer where digital information is anchored to physical locations, objects and people. It enables persistent spatial context, machine-readable semantics and decentralised identity so that humans and software agents can perceive, reason about and act on a blended physical-virtual environment. It is positioned as a successor architecture to the document-centric World Wide Web.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:spatial-anchor",
        "label": "Spatial Anchor"
      },
      {
        "@id": "urn:ngm:class:geospatial-data",
        "label": "Geospatial Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
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
  - The [[Spatial Web]] fuses [[Spatial Computing]], [[Web3]] and the [[Semantic Web]] into a unified addressable layer where physical locations, [[Digital Twin]] objects and people share persistent identity and context.
- ### Overview
  - The Spatial Web is a proposed evolution of the World Wide Web in which information is anchored to three-dimensional space and to physical and virtual entities rather than to flat documents.
  - It combines location-aware computing, immersive interfaces, machine-readable semantics and decentralised identity to let agents reason about and act on the world.
  - Standards bodies and consortia have proposed protocols for spatial addressing, permissioning and interoperability across devices and platforms.
- ### Key aspects
  - Persistent spatial anchoring of content to real-world coordinates.
  - Semantic description of entities for machine interpretation.
  - Decentralised identity and permissioning for objects and actors.
  - Interoperability across [[Augmented Reality]] and [[Mixed Reality]] clients.
- ### Applications
  - Location-anchored augmented reality experiences and navigation.
  - City-scale [[Digital Twin]] visualisation and management.
  - Cross-platform [[Metaverse]] interoperability and asset portability.
- ### Relationships
  - bridgesTo:: [[Web3]]
  - bridgesTo:: [[Metaverse]]
  - bridgesTo:: [[Semantic Web]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[Augmented Reality]]
  - relatedTo:: [[Mixed Reality]]
  - relatedTo:: [[Digital Twin]]
  - hasPart:: [[Spatial Anchor]]
  - hasPart:: [[Geospatial Data]]
  - uses:: [[Knowledge Graph]]
  - uses:: [[Decentralized Identifier]]
  - enables:: [[Internet of Things]]
  - dependsOn:: [[Standards]]
- ### Provenance
  - updated:: 2026-06-15
