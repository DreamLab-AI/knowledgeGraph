public:: true

# Logic Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:acdc529f68e13fafe528dd88b57a3c33bb7f0bbba44022f74abf9d5abed3d38e",
  "@type": "Page",
  "vc:slug": "logic-programming",
  "title": "Logic Programming",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:academic-ai-research",
      "vc:label": "Academic AI Research"
    },
    {
      "@id": "urn:visionflow:linked:prolog",
      "vc:label": "Prolog"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Logic Programming"
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
  "@id": "urn:ngm:class:logic-programming",
  "@type": "Class",
  "label": "Logic Programming",
  "definition": "Logic Programming is a programming paradigm in which computation is expressed as logical inference over a set of facts and rules written in formal logic. Programs describe what is true rather than how to compute, and an inference engine derives answers by applying resolution and unification. Prolog is the canonical language; descendant systems include Datalog, Answer Set Programming, and constraint logic programming.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:programming-paradigm",
      "label": "Programming Paradigm"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:expert-systems", "label": "Expert Systems"},
      {"@id": "urn:ngm:class:formal-verification", "label": "Formal Verification"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:database-query", "label": "Database Query"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:symbolic-ai", "label": "Symbolic AI"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"},
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:logic-programming:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:acdc529f68e13fafe528dd88b57a3c33bb7f0bbba44022f74abf9d5abed3d38e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Academic AI Research]]",
      "resolved": "urn:visionflow:linked:academic-ai-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Prolog]]",
      "resolved": "urn:visionflow:linked:prolog",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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


### Definition

Logic Programming is a programming paradigm in which computation is expressed as logical inference over a set of facts and rules written in formal logic. Programs describe what is true rather than how to compute, and an inference engine derives answers by applying resolution and unification. Prolog is the canonical language; descendant systems include Datalog, Answer Set Programming, and constraint logic programming.

### Relationships

Logic Programming **requires** Knowledge Representation and Reasoning as foundational capabilities — a logic program is only useful when its knowledge base accurately models the domain. It **enables** Expert Systems (rule-based diagnosis and recommendation), Formal Verification (proving program properties through logical inference), and Knowledge Graph construction and querying. It **uses** Database Query mechanisms, particularly through Datalog variants that extend relational algebra with recursion. Logic Programming is **related to** Symbolic AI as a flagship technology of the classical AI era, to the broader Artificial Intelligence field, to Natural Language Processing (via grammar formalisms and parsing), to the Semantic Web (OWL and SPARQL share declarative roots), to Knowledge Base systems, and to Software Engineering practices such as specification and testing.

### Content

Logic Programming emerged from the work of Robert Kowalski and Alain Colmerauer in the early 1970s, culminating in the Prolog language. Unlike imperative or functional languages, a logic program consists of Horn clauses — facts asserting ground truths and rules expressing conditional relationships — over which a resolution-based inference engine searches for proofs. The programmer states constraints on the solution; the runtime finds values satisfying those constraints.

The paradigm's influence on Artificial Intelligence has been profound. Expert Systems of the 1980s were typically implemented as Prolog or Prolog-like rule engines, and the technology drove Japan's Fifth Generation Computer Systems project. Knowledge Representation formalisms such as description logics and OWL trace philosophical lineage to logic programming's treatment of closed-world or open-world assumptions. Datalog, a restriction of Prolog without function symbols, underpins modern deductive databases and graph query languages.

Contemporary relevance spans several domains. Semantic Web technologies — RDF, OWL, SPARQL — embody declarative, logic-based querying over distributed knowledge graphs, inheriting logic programming's core principle of separation between knowledge and inference. In Formal Verification, systems such as Prolog-based model checkers and Answer Set Programming solvers verify correctness properties of hardware and software designs. Neuro-symbolic AI research is actively integrating logic programming with neural networks, aiming to combine the generalisation power of Machine Learning with the interpretability and reasoning precision of symbolic methods.

Database Query systems, particularly recursive query evaluation in SQL:1999 (WITH RECURSIVE) and graph databases, owe direct debt to Datalog's formalisation of recursive Horn clauses. Software Engineering benefits from logic programming through constraint-based configuration tools, test-case generation via constraint solving, and program analysis frameworks such as Doop and CodeQL which compile analysis problems into Datalog.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LogicProgramming
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Provenance
  - sources:: [[Academic AI Research]], [[Prolog]]
  - migration-date:: 2026-04-26T00:00:00Z
