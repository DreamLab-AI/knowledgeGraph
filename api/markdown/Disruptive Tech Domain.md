public:: true

# Disruptive Tech Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2fab2c700d0e18c6d0d71f23c9e46089067ec838bb829625b24f148b59dba320",
  "@type": "Page",
  "vc:slug": "disruptive-tech-domain",
  "title": "Disruptive Tech Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aiapplications-domain",
      "vc:label": "AIApplicationsDomain"
    },
    {
      "@id": "urn:visionflow:linked:core-ontology",
      "vc:label": "CoreOntology"
    },
    {
      "@id": "urn:visionflow:linked:technology-forecasting",
      "vc:label": "Technology Forecasting"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:domain",
      "vc:label": "Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-0020"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Disruptive Tech Domain"
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
  "@id": "urn:ngm:class:disruptive-tech-domain",
  "@type": "Class",
  "label": "Disruptive Tech Domain",
  "definition": "A cross-cutting classification domain identifying technologies with transformative potential that significantly alter markets, industries, or societal practices.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    },
    {
      "@id": "urn:ngm:class:domain",
      "label": "Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:aiapplications-domain",
        "label": "AIApplicationsDomain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:technology-forecasting",
        "label": "Technology Forecasting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:disruptive-tech-domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2fab2c700d0e18c6d0d71f23c9e46089067ec838bb829625b24f148b59dba320"
  },
  "vc:resolutions": [
    {
      "raw": "[[AIApplicationsDomain]]",
      "resolved": "urn:visionflow:linked:aiapplications-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[CoreOntology]]",
      "resolved": "urn:visionflow:linked:core-ontology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Technology Forecasting]]",
      "resolved": "urn:visionflow:linked:technology-forecasting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Domain]]",
      "resolved": "urn:visionflow:owl:class:domain",
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
  - A cross-cutting classification domain identifying technologies with transformative potential that significantly alter markets, industries, or societal practices. This domain spans AI, Blockchain, Metaverse, Robotics, and Telecollaboration, tagging concepts that represent paradigm shifts, emerging capabilities, or technologies displacing established approaches. Used for strategic analysis, trend identification, and innovation portfolio management.

- ### Semantic Classification
  - owl-class:: infrastructure:DisruptiveTechDomain
  - owl-role:: Domain
  - owl-inferred:: infrastructure:ConceptualDomain
  - belongs-to-domain:: [[CoreOntology]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Domain]]
  - has-part:: [[AIApplicationsDomain]]
  - enables:: [[Technology Forecasting]]

  - bridges-to:: [[Blockchain]] (bc)
- ### Content

  #### Current Landscape
  - **Cross-cutting technologies**
  - Generative AI disrupting content creation, software development, and knowledge work
  - Blockchain enabling new models of ownership, governance, and value transfer
  - Spatial computing and metaverse technologies transforming collaboration and commerce
  - Autonomous systems disrupting transportation, logistics, and manufacturing

  - **UK and North England context**
  - Manchester, Leeds, Sheffield emerging as innovation clusters
  - University spinouts commercialising disruptive technologies
  - Government initiatives supporting deep tech and emerging technology sectors

  ## Technical Details

  - **Domain Prefix**: NGM
  - **Sequence Number**: 0020
  - **Cross-cutting scope**: AI, Blockchain, Metaverse, Robotics, Telecollaboration

  #### Academic Context
  - Disruptive technology as a concept originates from Clayton Christensen's work on disruptive innovation
  - Characterised by technologies that initially underperform established solutions but eventually displace them
  - Distinguished from sustaining innovations that improve existing products incrementally
  - Cross-domain perspective essential as disruption often occurs at technology intersections

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
