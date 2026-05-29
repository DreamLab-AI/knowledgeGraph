public:: true

# Artificial Intelligence Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eacd980e5a0601ed079e499c4db6d3b37d2fc9c717a195391f4a7a80536280e5",
  "@type": "Page",
  "vc:slug": "artificial-intelligence-domain",
  "title": "Artificial Intelligence Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
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
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:technology-domain",
      "vc:label": "Technology Domain"
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
      "vc:value": "AI-7007"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Artificial Intelligence Domain"
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
  "@id": "urn:ngm:class:artificial-intelligence-domain",
  "@type": "Class",
  "label": "Artificial Intelligence Domain",
  "definition": "The Artificial Intelligence Domain is the top-level ontological domain classification encompassing all concepts related to artificial intelligence, including research methodologies, system architectures, learning paradigms, application areas, and governance frameworks for intelligent computational systems. It serves as the taxonomic root organising subdomains such as Machine Learning, Computer Vision, Natural Language Processing, Autonomous Agents, and AI Governance, and maintains formal cross-domain bridges to Robotics, Blockchain, Metaverse, and Telecollaboration fields.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    },
    {
      "@id": "urn:ngm:class:technology-domain",
      "label": "Technology Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"},
      {"@id": "urn:ngm:class:ai-applications", "label": "AI Applications"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotics-systems", "label": "Robotics Systems"},
      {"@id": "urn:ngm:class:metaverse-technology", "label": "Metaverse Technology"},
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:artificial-intelligence-domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eacd980e5a0601ed079e499c4db6d3b37d2fc9c717a195391f4a7a80536280e5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
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
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technology Domain]]",
      "resolved": "urn:visionflow:owl:class:technology-domain",
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
  The Artificial Intelligence Domain is the top-level ontological classification encompassing all AI-related concepts, including research methodologies, system architectures, learning paradigms, application areas, and governance frameworks for intelligent computational systems. It serves as the taxonomic root organising subdomains such as Machine Learning, Computer Vision, Natural Language Processing, and AI Governance, with formal cross-domain bridges to Robotics, Metaverse, and Telecollaboration.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ArtificialIntelligenceDomain
  - owl-role:: Domain
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Technology Domain]], [[AI Research Area]]
  - hasPart:: [[Machine Learning]], [[Computer Vision]], [[Natural Language Processing]], [[Deep Learning]], [[AI Governance]]
  - enables:: [[Autonomous Agent]], [[AI Agent System]], [[AI Applications]]
  - bridgesTo:: [[Robotics Systems]], [[Metaverse Technology]], [[Telecollaboration]]
  - relatedTo:: [[Reinforcement Learning]], [[AI Governance Framework]], [[Neural Network]]

- ### Content

  - #### Subdomains (Inferred by Reasoner)
		    - AI-GroundedDomain is-subdomain-of ArtificialIntelligenceDomain
		    - AIApplications is-subdomain-of ArtificialIntelligenceDomain
		    - ComputationAndIntelligenceDomain is-subdomain-of ArtificialIntelligenceDomain
		    - Machine Learning Domain is-subdomain-of ArtificialIntelligenceDomain
		    - AI Governance Domain is-subdomain-of ArtificialIntelligenceDomain
		- bridges-to:: [[Robotics Systems]] (via autonomous systems)
		- bridges-to:: [[Metaverse Technology]] (via AI avatars and agents)
		- bridges-to:: [[Telecollaboration]] (via AI assistants)

  ### Definition

  The Artificial Intelligence Domain provides the comprehensive taxonomic root for all AI-related ontology concepts. Its principal hasPart subdomains include Machine Learning (encompassing supervised, unsupervised, and Reinforcement Learning paradigms), Computer Vision, Natural Language Processing, Deep Learning, and AI Governance. Autonomous Agent and AI Agent System classes are enabled by this domain, representing the applied frontier where AI reasoning meets real-world action.

  ### Relationships

  Formal bridgesTo relations connect this domain to adjacent technology clusters: Robotics Systems (autonomous navigation, robot learning, manipulation), Metaverse Technology (AI avatars, procedural NPC behaviour, spatial understanding), and Telecollaboration (AI meeting assistants, real-time translation, conversation summarisation). These bridges are not merely conceptual—they reflect active engineering practices where AI components from this domain are integrated as subsystems within robotic, metaverse, and collaboration platforms.

  ### Content

  The Artificial Intelligence Domain encompasses both foundational research methodologies and applied system architectures. On the methodological side, it includes classical symbolic reasoning, statistical machine learning, Deep Learning with neural architectures, and hybrid approaches that combine learned and rule-based components. Neural Network architectures—convolutional, recurrent, transformer-based—are the dominant implementation substrate for modern AI applications ranging from image classification to large language model inference.

  AI Governance is an increasingly prominent subdomain, reflecting the maturation of the field from research prototype to regulated infrastructure. Frameworks such as the EU AI Act, NIST AI RMF, and corporate AI Governance Frameworks impose requirements for transparency, accountability, and risk management across AI system lifecycles. The AI Governance Framework class captures the normative structures through which organisations operationalise these requirements, connecting back to Technical Robustness and Safety and Responsible AI principles also classified under this domain's broader hierarchy.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
