public:: true
alias:: CollaborativeLearning

# Collaborative Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5db15273477303712091b09cb1d520a02f4709f09dc257417bdb51f642b84454",
  "@type": "Page",
  "vc:slug": "collaborative-learning",
  "title": "Collaborative Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-tools",
      "vc:label": "Communication Tools"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-co-construction",
      "vc:label": "Knowledge Co-Construction"
    },
    {
      "@id": "urn:visionflow:linked:shared-workspace",
      "vc:label": "Shared Workspace"
    },
    {
      "@id": "urn:visionflow:linked:social-learning",
      "vc:label": "Social Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:educational-methodology",
      "vc:label": "Educational Methodology"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:remote-collaboration",
      "vc:label": "Remote Collaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-environment",
      "vc:label": "Virtual Environment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9822"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Collaborative Learning"
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
  "@id": "urn:ngm:class:collaborative-systems-modality-learning",
  "@type": "Class",
  "label": "Collaborative Learning",
  "definition": "An educational approach where learners work together in virtual environments, metaverse platforms, or VR spaces to achieve shared learning goals through social interaction, knowledge co-construction, and collective problem-solving enabled by immersive and embodied digital experiences.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:educational-methodology",
    "label": "Educational Methodology"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:peer-instruction",
        "label": "Peer Instruction"
      },
      {
        "@id": "urn:ngm:class:group-discussion",
        "label": "Group Discussion"
      },
      {
        "@id": "urn:ngm:class:collaborative-problem-solving",
        "label": "Collaborative Problem Solving"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:educational-methodology",
        "label": "Educational Methodology"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:communication-tools",
        "label": "Communication Tools"
      },
      {
        "@id": "urn:ngm:class:shared-workspace",
        "label": "Shared Workspace"
      },
      {
        "@id": "urn:ngm:class:virtual-environment",
        "label": "Virtual Environment"
      },
      {
        "@id": "urn:ngm:class:social-presence",
        "label": "Social Presence"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-co-construction",
        "label": "Knowledge Co-Construction"
      },
      {
        "@id": "urn:ngm:class:social-learning",
        "label": "Social Learning"
      },
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      },
      {
        "@id": "urn:ngm:class:collective-intelligence",
        "label": "Collective Intelligence"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:avatar-representation",
        "label": "Avatar Representation"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:zone-of-proximal-development",
        "label": "Zone of Proximal Development"
      },
      {
        "@id": "urn:ngm:class:situated-learning",
        "label": "Situated Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:immersive-technology",
        "label": "Immersive Technology"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:real-time-collaboration-platform",
        "label": "Real-Time Collaboration Platform"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:experiential-learning",
        "label": "Experiential Learning"
      },
      {
        "@id": "urn:ngm:class:formative-assessment",
        "label": "Formative Assessment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:individual-learning",
        "label": "Individual Learning"
      },
      {
        "@id": "urn:ngm:class:traditional-classroom-instruction",
        "label": "Traditional Classroom Instruction"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:telecollaboration",
        "label": "Telecollaboration"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cooperative-learning",
      "label": "Cooperative Learning"
    },
    {
      "@id": "urn:ngm:class:computer-supported-collaborative-learning",
      "label": "Computer-Supported Collaborative Learning"
    }
  ],
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:collaborative-learning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5db15273477303712091b09cb1d520a02f4709f09dc257417bdb51f642b84454"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Tools]]",
      "resolved": "urn:visionflow:linked:communication-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Co-Construction]]",
      "resolved": "urn:visionflow:linked:knowledge-co-construction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Shared Workspace]]",
      "resolved": "urn:visionflow:linked:shared-workspace",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Learning]]",
      "resolved": "urn:visionflow:linked:social-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Educational Methodology]]",
      "resolved": "urn:visionflow:owl:class:educational-methodology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Remote Collaboration]]",
      "resolved": "urn:visionflow:owl:class:remote-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Environment]]",
      "resolved": "urn:visionflow:owl:class:virtual-environment",
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
  - An educational approach where learners work together in virtual environments, metaverse platforms, or VR spaces to achieve shared learning goals through social interaction, knowledge co-construction, and collective problem-solving enabled by immersive and embodied digital experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:CollaborativeLearning
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Educational Methodology]]
  - requires:: [[Virtual Environment]], [[Communication Tools]], [[Shared Workspace]]
  - enables:: [[Social Learning]], [[Knowledge Co-Construction]], [[Remote Collaboration]]
  - bridges-to:: [[Telecollaboration]]

- ### Content

  - ## Technical Details
  - **Metaverse Benefits**:
		- Full-body avatars provide natural classroom-like interactions
		- VR heightens empathy and emotional involvement
		- Experiential learning through virtual field trips
		- Global collaboration without physical travel
  - **Research Frameworks**:
		- Meta-MILE: Multi-layered Immersive Learning Environment integrating personalization, social collaboration, and advanced assessment
  - **Platforms**: ENGAGE XR, Meta Horizon Workrooms, Spatial.io
  - **Outcomes**:
		- Purdue: 10-15% increase in nursing exam results
		- University of Glasgow: Transformed teaching approaches
		- NYU Dentistry: 1,200 dental students trained via VR
  - **Challenges**: Device accessibility, network stability, specialized pedagogy, digital divide concerns
  - ## Applications
  - International collaborative courses
  - Virtual science experiments
  - Historical site exploration
  - Professional skills training
  - Team-based problem solving

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
