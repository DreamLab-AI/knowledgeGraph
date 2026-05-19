public:: true

# OWL Class Hierarchy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3872dac02fea105e4f9c95198594f1af613a05cf1b438de5ca9518e4273725a2",
  "@type": "Page",
  "vc:slug": "owl-class-hierarchy",
  "title": "OWL Class Hierarchy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-reasoning",
      "vc:label": "Automated Reasoning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:ontology-structure",
      "vc:label": "Ontology Structure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9989"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "OWL Class Hierarchy"
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
  "@id": "urn:ngm:class:owl-class-hierarchy",
  "@type": "Class",
  "label": "OWL Class Hierarchy",
  "definition": "The taxonomic structure of classes and subclasses defined in the Web Ontology Language (OWL) that organizes concepts into inheritance relationships, enabling automated reasoning, consistency checking, and inference of implicit knowledge in semantic web applications.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:ontology-structure",
      "label": "Ontology Structure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:owl-class-hierarchy:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3872dac02fea105e4f9c95198594f1af613a05cf1b438de5ca9518e4273725a2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automated Reasoning]]",
      "resolved": "urn:visionflow:linked:automated-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ontology Structure]]",
      "resolved": "urn:visionflow:owl:class:ontology-structure",
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
  - The taxonomic structure of classes and subclasses defined in the Web Ontology Language (OWL) that organizes concepts into inheritance relationships, enabling automated reasoning, consistency checking, and inference of implicit knowledge in semantic web applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:OwlClassHierarchy
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Ontology Structure]]
  - enables:: [[Automated Reasoning]]

- ### Content

  - #### OWL Versions
		- OWL Lite: Simplified subset for basic classification
		- OWL DL: Description Logic with computational completeness
		- OWL Full: Maximum expressivity without decidability guarantees
		- OWL 2: Extended revision published in 2009/2012
  - #### Key Features
		- Formal semantics enabling automated reasoning
		- Reasoners like HermiT, Pellet, Fact++ for inference
		- Complex property relationships and cardinality constraints
		- Support for transitivity, symmetry, and other property characteristics
		- Integration with RDF and RDFS for semantic web stack

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
