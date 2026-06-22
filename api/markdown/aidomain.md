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