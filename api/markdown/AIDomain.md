public:: true

# AIDomain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:19fa79bbf7aa484948d66db26ce8d9bd85012b488e3af9af10e601a86a184f2e",
  "@type": "Page",
  "vc:slug": "aidomain",
  "title": "AIDomain",
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
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
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
      "vc:value": "AI-7017"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AIDomain"
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
  "@id": "urn:ngm:class:aidomain",
  "@type": "Class",
  "label": "AIDomain",
  "definition": "AIDomain is the compact namespace identifier for the Artificial Intelligence Domain within this ontology, serving as a top-level classification anchor for all AI-related concepts including methods, models, systems, applications, and governance frameworks. It is semantically equivalent to ArtificialIntelligenceDomain and is used in belongsToDomain assertions and cross-domain bridge declarations to link AI concepts with blockchain, metaverse, robotics, and telecollaboration domains.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-domain", "label": "Blockchain Domain"},
      {"@id": "urn:ngm:class:metaverse-domain", "label": "Metaverse Domain"},
      {"@id": "urn:ngm:class:robotics-domain", "label": "Robotics Domain"},
      {"@id": "urn:ngm:class:telecollaboration-domain", "label": "Telecollaboration Domain"},
      {"@id": "urn:ngm:class:technology-domain", "label": "Technology Domain"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-intelligence-domain", "label": "Artificial Intelligence Domain"},
      {"@id": "urn:ngm:class:ai-applications", "label": "AI Applications"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:aidomain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:19fa79bbf7aa484948d66db26ce8d9bd85012b488e3af9af10e601a86a184f2e"
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
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
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
  - The abbreviated reference for the Artificial Intelligence Domain, serving as a top-level ontological classification for all AI-related concepts including methods, systems, applications, and governance frameworks within the knowledge graph.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiDomain
  - owl-role:: Domain
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Technology Domain]], [[AI Research Area]]
  - hasPart:: [[Machine Learning Discipline]], [[Deep Learning]], [[Natural Language Processing]], [[Computer Vision]], [[AI Governance]]
  - bridgesTo:: [[Blockchain Domain]], [[Metaverse Domain]], [[Robotics Domain]], [[Telecollaboration Domain]]
  - relatedTo:: [[Artificial Intelligence Domain]], [[AI Applications]], [[AI Ethics]]

- ### Content

  - #### Subdomains (Inferred by Reasoner)
		    - Machine Learning is-subdomain-of AIDomain
		    - Deep Learning is-subdomain-of AIDomain
		    - Natural Language Processing is-subdomain-of AIDomain
		    - Computer Vision is-subdomain-of AIDomain
		    - AI Governance is-subdomain-of AIDomain
		- bridges-to:: [[Blockchain Technology]] (via AI-BC integration)
		- bridges-to:: [[Metaverse Technology]] (via AI avatars)
		- bridges-to:: [[Telecollaboration]] (via AI assistants)
		- bridges-to:: [[Robotics Systems]] (via robot learning)

  ### Definition

  AIDomain serves as the compact namespace identifier for the Artificial Intelligence domain within the ontology. It is semantically equivalent to Artificial Intelligence Domain and functions as a convenient anchor for domain membership assertions, enabling concise belongsToDomain declarations across thousands of ontology pages without redundant reference to the full domain name.

  ### Namespace Purpose and Usage

  The identifier enables several structural functions within the knowledge graph: it provides a concise prefix for AI concept identifiers in belongsToDomain assertions; it supports cross-domain bridge declarations that link AI concepts to adjacent domains such as blockchain (AI-driven smart contract analysis), metaverse (AI avatars and procedural content), robotics (robot learning and perception), and telecollaboration (AI assistants and meeting intelligence); and it facilitates ontology import and export operations where a compact domain tag is preferable to a verbose IRI.

  ### Domain Scope

  AIDomain encompasses the full breadth of artificial intelligence as a technical and governance discipline. Core AI methods include machine learning (supervised, unsupervised, semi-supervised), deep learning architectures, reinforcement learning algorithms, and classical AI approaches such as expert systems and symbolic reasoning. AI subfields extend to natural language processing, computer vision, robotics learning, speech recognition, and multi-modal AI. AI systems layer covers models, architectures, frameworks, training pipelines, and deployment infrastructure. AI governance encompasses ethics frameworks, regulatory compliance, bias auditing, explainability requirements, and safety standards. AI applications span deployed systems across healthcare, finance, autonomous vehicles, smart cities, creative industries, and scientific research.

  ### Cross-Domain Bridges

  The AIDomain maintains formal bridge relationships to adjacent knowledge domains, reflecting the increasingly cross-disciplinary character of AI deployment. The AI-Blockchain bridge covers AI applications in smart contract analysis, fraud detection, and blockchain analytics; the AI-Metaverse bridge encompasses AI avatars, procedural content generation, and intelligent NPC behaviour; the AI-Robotics bridge reflects the deep integration of machine learning into robot perception, control, and planning; and the AI-Telecollaboration bridge covers AI meeting assistants, transcription, and collaboration intelligence tools.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
