public:: true

# Technology Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:564269168f0d93a7b74649ec815d67a215a8600e51c023b3c783c6332e816f65",
  "@type": "Page",
  "vc:slug": "technology-domain",
  "title": "Technology Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
    },
    {
      "@id": "urn:visionflow:linked:narrative-gold-mine",
      "vc:label": "Narrative Gold Mine"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-technology",
      "vc:label": "Metaverse Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-0001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Technology Domain"
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
  "@id": "urn:ngm:class:technology-domain",
  "@type": "Class",
  "label": "Technology Domain",
  "definition": "The foundational meta-domain encompassing all technology-related knowledge domains within the Narrative Gold Mine ontology, serving as the top-level classification for artificial intelligence, blockchain, metaverse, robotics, and telecollaboration systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:technology-domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:564269168f0d93a7b74649ec815d67a215a8600e51c023b3c783c6332e816f65"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Narrative Gold Mine]]",
      "resolved": "urn:visionflow:linked:narrative-gold-mine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Technology]]",
      "resolved": "urn:visionflow:owl:class:metaverse-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - The foundational meta-domain encompassing all technology-related knowledge domains within the Narrative Gold Mine ontology, serving as the top-level classification for artificial intelligence, blockchain, metaverse, robotics, and telecollaboration systems.

- ### Semantic Classification
  - owl-class:: infrastructure:TechnologyDomain
  - owl-role:: MetaDomain
  - belongs-to-domain:: [[Narrative Gold Mine]]

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]

- ### Content

  - #### Inverse Relationships (Inferred by Reasoner)
		    - Artificial Intelligence is-subclass-of Technology Domain
		    - Blockchain Technology is-subclass-of Technology Domain
		    - Metaverse Technology is-subclass-of Technology Domain
		    - Robotics Systems is-subclass-of Technology Domain
		    - Telecollaboration is-subclass-of Technology Domain
  - ## Overview
  - The Technology Domain represents the apex category within the Narrative Gold Mine ontology structure. It provides a unified framework for organising and relating all technology-focused knowledge areas, establishing consistent semantic relationships across domains while maintaining distinct taxonomic hierarchies within each subdomain.
  - ## Key Subdomains
  - [[Artificial Intelligence]] - AI systems, machine learning, and intelligent computing
  - [[Blockchain Technology]] - Distributed ledger systems and decentralised applications
  - [[Metaverse Technology]] - Virtual worlds, spatial computing, and immersive environments
  - [[Robotics Systems]] - Autonomous machines, actuators, and robotic control systems
  - [[Telecollaboration]] - Remote collaboration, telepresence, and distributed teamwork
  - ## Semantic Structure
  - This domain establishes the root class from which all technology subdomains inherit properties and relationships. Each subdomain maintains its own term-ID prefix and namespace while connecting through standardised relationship predicates.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
