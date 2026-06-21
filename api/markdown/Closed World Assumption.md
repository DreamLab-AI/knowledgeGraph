public:: true

# Closed World Assumption

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:closed-world-assumption",
  "@type": "Page",
  "title": "Closed World Assumption",
  "vc:slug": "closed-world-assumption",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:knowledge-representation", "vc:label": "Knowledge Representation"},
    {"@id": "urn:visionflow:linked:open-world-assumption", "vc:label": "Open World Assumption"},
    {"@id": "urn:visionflow:linked:negation-as-failure", "vc:label": "Negation as Failure"},
    {"@id": "urn:visionflow:linked:logic-programming", "vc:label": "Logic Programming"},
    {"@id": "urn:visionflow:linked:prolog", "vc:label": "Prolog"},
    {"@id": "urn:visionflow:linked:sql", "vc:label": "SQL"},
    {"@id": "urn:visionflow:linked:relational-database", "vc:label": "Relational Database"},
    {"@id": "urn:visionflow:linked:datalog", "vc:label": "Datalog"},
    {"@id": "urn:visionflow:linked:shacl", "vc:label": "SHACL"},
    {"@id": "urn:visionflow:linked:ontology", "vc:label": "Ontology"},
    {"@id": "urn:visionflow:linked:semantic-web", "vc:label": "Semantic Web"},
    {"@id": "urn:visionflow:linked:owl-class-hierarchy", "vc:label": "OWL Class Hierarchy"},
    {"@id": "urn:visionflow:linked:rdf", "vc:label": "RDF"},
    {"@id": "urn:visionflow:linked:sparql", "vc:label": "SPARQL"},
    {"@id": "urn:visionflow:linked:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:linked:inference-engine", "vc:label": "Inference Engine"},
    {"@id": "urn:visionflow:linked:formal-logic", "vc:label": "Formal Logic"},
    {"@id": "urn:visionflow:linked:description-logic", "vc:label": "Description Logic"},
    {"@id": "urn:visionflow:linked:first-order-logic", "vc:label": "First-Order Logic"},
    {"@id": "urn:visionflow:linked:reasoning", "vc:label": "Reasoning"},
    {"@id": "urn:visionflow:linked:database-theory", "vc:label": "Database Theory"},
    {"@id": "urn:visionflow:linked:expert-system", "vc:label": "Expert System"},
    {"@id": "urn:visionflow:linked:automated-reasoning", "vc:label": "Automated Reasoning"},
    {"@id": "urn:visionflow:linked:answer-set-programming", "vc:label": "Answer Set Programming"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:deductive-database", "vc:label": "Deductive Database"},
    {"@id": "urn:visionflow:linked:non-monotonic-reasoning", "vc:label": "Non-Monotonic Reasoning"},
    {"@id": "urn:visionflow:linked:bayesian-inference", "vc:label": "Bayesian Inference"},
    {"@id": "urn:visionflow:linked:artificial-intelligence", "vc:label": "Artificial Intelligence"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:closed-world-assumption",
  "@type": "Class",
  "label": "Closed World Assumption",
  "definition": "The Closed World Assumption (CWA) is the presumption that any statement not known to be true is false, treating the knowledge base as a complete description of the world. It is foundational to database query semantics, logic programming, and negation as failure, where the absence of a fact licenses inferring its negation. CWA simplifies reasoning over finite, curated domains but breaks down where information is incomplete.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:open-world-assumption",
        "label": "Open World Assumption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:negation-as-failure",
        "label": "Negation as Failure"
      },
      {
        "@id": "urn:ngm:class:datalog",
        "label": "Datalog"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:query-answering",
        "label": "Query Answering"
      },
      {
        "@id": "urn:ngm:class:data-integrity-constraint",
        "label": "Data Integrity Constraint"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:formal-logic",
        "label": "Formal Logic"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      },
      {
        "@id": "urn:ngm:class:shacl",
        "label": "SHACL"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:database-theory",
        "label": "Database Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:logic-programming",
        "label": "Logic Programming"
      }
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cwa", "label": "CWA"},
    {"@id": "urn:ngm:class:database-completeness-assumption", "label": "Database Completeness Assumption"}
  ],
  "quality": 0.92,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:closed-world-assumption:a3f72b91c4d8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:closed-world-assumption"
  },
  "vc:resolutions": [
    {"raw": "[[Knowledge Representation]]", "resolved": "urn:visionflow:linked:knowledge-representation", "kind": "ResolvedLink"},
    {"raw": "[[Open World Assumption]]", "resolved": "urn:visionflow:linked:open-world-assumption", "kind": "ResolvedLink"},
    {"raw": "[[Negation as Failure]]", "resolved": "urn:visionflow:linked:negation-as-failure", "kind": "ResolvedLink"},
    {"raw": "[[Logic Programming]]", "resolved": "urn:visionflow:linked:logic-programming", "kind": "ResolvedLink"},
    {"raw": "[[Prolog]]", "resolved": "urn:visionflow:linked:prolog", "kind": "ResolvedLink"},
    {"raw": "[[SQL]]", "resolved": "urn:visionflow:linked:sql", "kind": "ResolvedLink"},
    {"raw": "[[Relational Database]]", "resolved": "urn:visionflow:linked:relational-database", "kind": "ResolvedLink"},
    {"raw": "[[Datalog]]", "resolved": "urn:visionflow:linked:datalog", "kind": "ResolvedLink"},
    {"raw": "[[SHACL]]", "resolved": "urn:visionflow:linked:shacl", "kind": "ResolvedLink"},
    {"raw": "[[Ontology]]", "resolved": "urn:visionflow:linked:ontology", "kind": "ResolvedLink"},
    {"raw": "[[Semantic Web]]", "resolved": "urn:visionflow:linked:semantic-web", "kind": "ResolvedLink"},
    {"raw": "[[OWL Class Hierarchy]]", "resolved": "urn:visionflow:linked:owl-class-hierarchy", "kind": "ResolvedLink"},
    {"raw": "[[RDF]]", "resolved": "urn:visionflow:linked:rdf", "kind": "ResolvedLink"},
    {"raw": "[[SPARQL]]", "resolved": "urn:visionflow:linked:sparql", "kind": "ResolvedLink"},
    {"raw": "[[Knowledge Graph]]", "resolved": "urn:visionflow:linked:knowledge-graph", "kind": "ResolvedLink"},
    {"raw": "[[Inference Engine]]", "resolved": "urn:visionflow:linked:inference-engine", "kind": "ResolvedLink"},
    {"raw": "[[Formal Logic]]", "resolved": "urn:visionflow:linked:formal-logic", "kind": "ResolvedLink"},
    {"raw": "[[Description Logic]]", "resolved": "urn:visionflow:linked:description-logic", "kind": "ResolvedLink"},
    {"raw": "[[First-Order Logic]]", "resolved": "urn:visionflow:linked:first-order-logic", "kind": "ResolvedLink"},
    {"raw": "[[Reasoning]]", "resolved": "urn:visionflow:linked:reasoning", "kind": "ResolvedLink"},
    {"raw": "[[Database Theory]]", "resolved": "urn:visionflow:linked:database-theory", "kind": "ResolvedLink"},
    {"raw": "[[Expert System]]", "resolved": "urn:visionflow:linked:expert-system", "kind": "ResolvedLink"},
    {"raw": "[[Automated Reasoning]]", "resolved": "urn:visionflow:linked:automated-reasoning", "kind": "ResolvedLink"},
    {"raw": "[[Answer Set Programming]]", "resolved": "urn:visionflow:linked:answer-set-programming", "kind": "ResolvedLink"},
    {"raw": "[[Retrieval-Augmented Generation]]", "resolved": "urn:visionflow:linked:retrieval-augmented-generation", "kind": "ResolvedLink"},
    {"raw": "[[Large Language Models]]", "resolved": "urn:visionflow:linked:large-language-models", "kind": "ResolvedLink"},
    {"raw": "[[Deductive Database]]", "resolved": "urn:visionflow:linked:deductive-database", "kind": "ResolvedLink"},
    {"raw": "[[Non-Monotonic Reasoning]]", "resolved": "urn:visionflow:linked:non-monotonic-reasoning", "kind": "ResolvedLink"},
    {"raw": "[[Bayesian Inference]]", "resolved": "urn:visionflow:linked:bayesian-inference", "kind": "ResolvedLink"},
    {"raw": "[[Artificial Intelligence]]", "resolved": "urn:visionflow:linked:artificial-intelligence", "kind": "ResolvedLink"},
    {"raw": "[[Database Completeness Assumption]]", "resolved": "urn:visionflow:linked:database-completeness-assumption", "kind": "ResolvedLink"},
    {"raw": "[[Formal Language]]", "resolved": "urn:visionflow:linked:formal-language", "kind": "StubLink"},
    {"raw": "[[Non-Monotonic Logic]]", "resolved": "urn:visionflow:linked:non-monotonic-logic", "kind": "StubLink"},
    {"raw": "[[Enterprise Knowledge Graph]]", "resolved": "urn:visionflow:linked:enterprise-knowledge-graph", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-21T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The **Closed World Assumption** (CWA) is a foundational epistemological principle in formal logic, [[Database Theory]], and [[Knowledge Representation]] stating that any proposition not positively known to be true must be taken as false. Formally, a knowledge base K adopts the CWA when the set of true propositions is exactly the set of propositions derivable from K — there is no third truth value of "unknown." This gives the CWA its characteristic semantic completeness: the knowledge base is treated as a total, exhaustive description of the relevant domain. The concept was formally articulated by Raymond Reiter in his seminal 1978 paper "On Closed World Data Bases," which provided the first rigorous logical analysis of the semantic assumptions implicit in relational database query evaluation — specifically, that when a relational database answers "no" to a query, it does so not because the proposition is logically provably false but because the database contains no record supporting it. Concurrently, Keith Clark's 1978 work "Negation as Failure" established the equivalent mechanism in [[Logic Programming]]: [[Negation as Failure]] treats the inability to prove a goal as grounds for concluding its negation, implementing the CWA procedurally within [[Prolog]] and its descendant languages. The CWA is thus the semantic underpinning of both the relational database paradigm — where [[SQL]] queries compute exact answers over an assumed-complete relation — and logic programming's negation mechanism. Its power lies in enabling definite, complete answers from finite rule sets and fact bases. Its limitation is the assumption of completeness: in any domain where the knowledge base might be incomplete, the CWA risks inferring false negatives (concluding a proposition false merely because it is not recorded). This limitation drove the adoption of the [[Open World Assumption]] (OWA) in the [[Semantic Web]] and [[OWL Class Hierarchy]] (OWL 2) standards, where knowledge bases are explicitly acknowledged as partial descriptions of the world, and absence of a fact licenses no inference. The tension between CWA and OWA has become practically significant in enterprise [[Knowledge Graph]] deployments and in [[SHACL]] (Shapes Constraint Language) development: SHACL adopts the CWA for data validation — a data graph is assumed complete, and absence of a required triple is treated as a constraint violation — while OWL operates under the OWA. The co-existence of SHACL and OWL within the same RDF ecosystem creates a mixed-assumption architecture that requires careful design to avoid contradictions between inferential and validational reasoning over shared [[RDF]] data graphs. By 2025–2026, hybrid architectures that layer CWA-based [[SHACL]] validation over OWA-based [[Ontology]] inference have become the standard enterprise pattern, with [[Knowledge Graph]] platforms such as PoolParty, Ontotext GraphDB, and Stardog supporting configurable closed-world validation alongside open-world ontological reasoning.

- ### Semantic Classification
  - owl-class:: ai:ClosedWorldAssumption
  - owl-role:: Concept | EpistemologicalPrinciple | DatabaseSemantics | LogicProgrammingPrinciple
  - owl-inferred:: ai:NegationAsFailure, ai:DatabaseCompleteness, ai:DefiniteQueryAnswering
  - belongs-to-domain:: [[Knowledge Representation]]
  - implemented-in-layer:: [[Logic Programming]]

- ### Relationships
  - is-subclass-of:: [[Knowledge Representation]], [[Formal Logic]], [[Non-Monotonic Reasoning]]
  - has-part:: [[Negation as Failure]], [[Database Completeness Assumption]], [[Answer Set Programming]]
  - requires:: [[Formal Logic]], [[Inference Engine]], [[Logic Programming]], [[First-Order Logic]], [[Formal Language]]
  - enables:: [[Reasoning]], [[Query Answering]], [[Data Integrity Constraint]], [[Definite Query Answering]], [[Relational Database Semantics]], [[Automated Reasoning]], [[Expert System]], [[Answer Set Programming]]
  - implements:: [[Negation as Failure]], [[Deductive Database Semantics]], [[SHACL]], [[Datalog]], [[Prolog]]
  - depends-on:: [[Knowledge Representation]], [[Formal Logic]], [[First-Order Logic]], [[Database Theory]]
  - supports:: [[Relational Database]], [[Knowledge Representation]], [[Logic Programming]], [[SPARQL]], [[Deductive Database]], [[SQL]], [[SHACL]]
  - uses:: [[Inference Engine]], [[Negation as Failure]], [[Datalog]], [[Prolog]], [[SQL]], [[RDF]], [[SPARQL]], [[Description Logic]]
  - contrasts-with:: [[Open World Assumption]], [[Semantic Web]], [[OWL Class Hierarchy]], [[Bayesian Inference]], [[Non-Monotonic Logic]]
  - related-to:: [[Ontology]], [[Reasoning]], [[Inference Engine]], [[Description Logic]], [[SHACL]], [[SPARQL]], [[Knowledge Graph]], [[Expert System]], [[Automated Reasoning]], [[Answer Set Programming]], [[Artificial Intelligence]], [[Database Theory]], [[Retrieval-Augmented Generation]], [[Large Language Models]]
  - standardized-by:: [[W3C]], [[ISO/IEC]]
  - bridges-to:: [[Semantic Web]], [[Logic Programming]], [[SHACL]], [[Enterprise Knowledge Graph]], [[Retrieval-Augmented Generation]], [[Large Language Models]]

- ### Content
  ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:hasPart ai:NegationAsFailure))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:hasPart ai:DatabaseCompletenessAssumption))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:hasPart ai:DefiniteQueryAnswering))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:hasPart ai:AnswerSetProgramming))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:hasPart ai:MinimalModelSemantics))
    ```
  ## Dependency Relationships
    ```
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:requires ai:FormalLogic))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:requires ai:InferenceEngine))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:requires ai:FirstOrderLogic))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:requires ai:FormalLanguage))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:dependsOn ai:LogicProgramming))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:dependsOn ai:DatabaseTheory))
    ```
  ## Capability Relationships
    ```
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:Reasoning))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:QueryAnswering))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:DataIntegrityConstraint))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:DefiniteQueryAnswering))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:RelationalDatabaseSemantics))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:AutomatedReasoning))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:enables ai:ExpertSystem))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:supports ai:RelationalDatabase))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:supports ai:SPARQL))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:supports ai:SHACLValidation))
    ```
  ## Implementation Relationships
    ```
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:implements ai:NegationAsFailure))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:implements ai:DeductiveDatabaseSemantics))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:implements ai:SHACLValidation))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:implements ai:Datalog))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:uses ai:NegationAsFailure))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:uses ai:InferenceEngine))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:uses ai:Prolog))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:uses ai:Datalog))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:uses ai:SQL))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:uses ai:DescriptionLogic))
    ```
  ## Reduction Relationships
    ```
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:reducesTo ai:NegationAsFailure))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:reducesTo ai:DatabaseCompleteness))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:reducesTo ai:MinimalModelSemantics))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:contrastsWith ai:OpenWorldAssumption))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:contrastsWith ai:SemanticWeb))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:contrastsWith ai:OWLClassHierarchy))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:contrastsWith ai:BayesianInference))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:bridgesTo ai:RetrievalAugmentedGeneration))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:bridgesTo ai:EnterpriseKnowledgeGraph))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:relatedTo ai:AnswerSetProgramming))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:relatedTo ai:KnowledgeGraph))
    SubClassOf(ai:ClosedWorldAssumption
      ObjectSomeValuesFrom(ai:relatedTo ai:LargeLanguageModels))
    ```

  ## About

  The Closed World Assumption is one of the oldest and most practically consequential design decisions in computer science, embedded so deeply in the relational database model that most practitioners never encounter it explicitly — it simply defines what a database query "means." When a SQL SELECT statement returns zero rows, the query system implicitly invokes the CWA: the database contains no record of the queried fact, therefore the fact is taken as not holding in reality. This is rational and practically useful in domains where the database is genuinely expected to be authoritative and complete — a company's payroll database really does list all employees, so an absent name means that person is not an employee. The CWA enables definite, unambiguous query answers in such domains without requiring the system to express or reason about uncertainty.

  The logical foundation of the CWA was established through two parallel 1978 contributions. Raymond Reiter's "On Closed World Data Bases" (in Gallaire and Minker, eds., "Logic and Data Bases," 1978) analysed the semantics of standard database query evaluation and identified the unstated assumption making it coherent: the database is treated as a complete characterisation of the extension of each relation. Reiter formalised this as the CWA operator: given a ground atomic formula A not derivable from the database, CWA(DB) |= ¬A. This provided a semantically principled account of why databases can definitively answer negative queries without resorting to the impossible task of listing all non-facts. Concurrently, Keith Clark's "Negation as Failure" (in Gallaire and Minker, 1978) analysed the Prolog theorem-proving strategy of treating unprovable goals as false — the same principle, now operating procedurally in a logic programming context. Clark showed that negation as failure corresponds to reasoning from "Clark's completed database," in which each predicate's definition is converted from an implication (if the body holds, the head holds) to a biconditional (the head holds if and only if the body holds), making the CWA explicit in the logical form of the program.

  The CWA proved foundational to practical AI systems of the 1970s–1990s, underpinning expert systems, [[Prolog]]-based knowledge bases, [[Datalog]] query engines, and [[Relational Database]] systems. The MYCIN medical diagnosis system (Shortliffe, Stanford, 1974–1976) operated under an implicit CWA: absence of a symptom in the patient record was treated as evidence that the symptom was absent, supporting differential diagnosis. [[Deductive Database]] systems in the 1980s — combining SQL-style tables with Prolog-style inference rules — formalized CWA semantics for mixed fact-and-rule knowledge bases, anticipating modern knowledge graphs. The Datalog language, defined as the rule-based query language for deductive databases, inherits CWA semantics: a Datalog query over a finite EDB (Extensional Database of base facts) computes the minimal model — the smallest set of facts derivable from the rules — and negative conclusions are drawn by minimality, not by explicit negation rules.

  The transition to the World Wide Web and the Semantic Web vision of the late 1990s–2000s exposed the limits of the CWA. Web-scale knowledge is inherently incomplete: no knowledge base can claim to contain all facts about the world. Tim Berners-Lee's Semantic Web vision required a knowledge representation formalism that could work gracefully with incomplete, distributed, evolving information — where the absence of a triple in one document should not be interpreted as evidence of the corresponding fact's falsity. This motivated the adoption of the [[Open World Assumption]] in the Web Ontology Language (OWL), formally standardised by the W3C in 2004 (OWL) and 2009 (OWL 2). Under OWA semantics, an OWL knowledge base is an incomplete description of the world; inferences are restricted to what can be logically established from the asserted axioms, and absence of a triple licenses no inference about the corresponding proposition. This was a deliberate, principled departure from database and logic programming convention, designed to support the distributed, decentralised, partial nature of web-scale knowledge.

  The coexistence of CWA and OWA within enterprise knowledge management has become a practical design challenge. Modern enterprise [[Knowledge Graph]] architectures typically need both: OWA-based [[Ontology]] reasoning to integrate data across heterogeneous sources and infer missing facts (two organisations may assert the same person under different identifiers, and ontology reasoning can infer they are the same entity), and CWA-based [[SHACL]] validation to enforce data quality constraints and detect missing required information in data pipelines. The W3C SHACL specification (2017, updated in implementations through 2025) explicitly adopts the CWA: a SHACL shapes graph evaluates constraints over an assumed-complete data graph, treating the absence of a required property as a constraint violation (a node lacks a required type, a required property is missing, a cardinality constraint is violated by absence of triples). This design choice is natural for SHACL's core use case of data pipeline validation, where incomplete data is a defect to be detected and repaired rather than a normal epistemic condition to be tolerated. The resulting hybrid architecture — OWL inference under OWA for knowledge integration, SHACL validation under CWA for data quality — has become the dominant enterprise semantic stack, implemented in platforms including Ontotext GraphDB, Stardog, PoolParty, and Oxigraph.

  A recurring practical confusion arises because many practitioners treat OWL and SHACL as equivalent constraint specification languages, not recognising that their world assumption semantics are radically different. An OWL class restriction such as owl:allValuesFrom, which states "all values of property P for instances of class C must be of type T," is a semantic axiom under OWA: it does not require that any P-values exist, only that those which do must be of type T. A SHACL shape asserting sh:minCount 1 for the same property is a CWA-based constraint: it requires that the focus node have at least one P-value present in the current data graph, treating the absence of such a value as a violation rather than as unknown. This asymmetry — OWL axioms have inferential consequences without requiring completeness, while SHACL shapes make validation requirements that presuppose completeness — is the conceptual source of the CWA/OWA tension in enterprise RDF tooling. Understanding it requires practitioners to reason simultaneously at the epistemological level (what does the knowledge base claim about the world?) and the architectural level (which processing stage — inference, query, or validation — applies which assumption?). The emerging discipline of knowledge engineering explicitly addresses these co-existing world assumptions as a design parameter, with frameworks such as the W3C's SHACL-AF (Advanced Features) and proposals for closed-world profiling of OWL ontologies providing tool support for navigating the tension systematically.

  The relationship between the CWA and [[Non-Monotonic Reasoning]] is deep and productive. The CWA is itself a non-monotonic principle: adding a new fact to a CWA knowledge base may retract previously derived negative conclusions (if a fact A is absent and thus inferred false by the CWA, but is then explicitly added to the knowledge base, ¬A is retracted). This non-monotonicity distinguishes CWA-based systems from classical monotonic logic, where adding axioms can only derive more conclusions, never retract them. Reiter's default logic (1980) — the most influential formal framework for non-monotonic reasoning — can be understood as a generalisation of the CWA: default rules of the form "A : B / A" mean "if A is consistent with what is known and B is the justification, conclude A" — corresponding to the CWA's "if A is not known to be true, conclude ¬A" when A and B are both taken as the justification for ¬A. Circumscription (McCarthy, 1980) offers an alternative generalisation via second-order logic: circumscription of a predicate P (with other predicates fixed) yields the minimal model of P, implementing the CWA selectively for P while leaving other predicates under OWA. These non-monotonic frameworks provide the formal foundations for expert system rule bases, default reasoning in [[Description Logic]], and the selection of minimal models in [[Answer Set Programming]], all of which are CWA-descended computational reasoning systems.

  The emergence of [[Retrieval-Augmented Generation]] (RAG) architectures in 2022–2026 has created a new domain where the CWA/OWA distinction is operationally critical. In a RAG system, a [[Large Language Models]] query is grounded by retrieving relevant passages from a document corpus, which are then provided to the LLM as context. The retrieved corpus functions as a micro knowledge base: if the retrieved passages contain no information supporting a proposition, should the LLM treat that proposition as false (CWA) or as unknown (OWA)? Systems designed for enterprise document retrieval — where the document corpus is authoritative and complete for the organisation's domain — benefit from CWA-style grounding: "this product has no blue variant" is correct because the product catalogue (the corpus) is complete. Systems designed for general knowledge retrieval — where the corpus is a sample of the world's knowledge — should apply OWA-style reasoning: absence of evidence in the retrieved passages does not constitute evidence of absence globally. 2025–2026 research into LLM calibration and conformal prediction is developing methods to explicitly reason about corpus completeness assumptions and propagate uncertainty about the appropriate world assumption into LLM response generation.

  ## Components / Architecture

  **Formal definition (Reiter's CWA):**
  Given a first-order database DB (a set of ground positive literals) and a ground atom A, the CWA states: if A is not derivable from DB (¬ DB ⊢ A), then ¬A is inferred. Formally, CWA(DB) = DB ∪ {¬A | A is a ground atom and A ∉ DB}. This corresponds to taking the "minimal model" of DB — the smallest Herbrand interpretation satisfying DB — as the intended interpretation.

  **Negation as failure (Clark's completion):**
  In [[Logic Programming]] and [[Prolog]], the CWA is implemented by the negation-as-failure (NAF) inference rule: NOT(G) succeeds if the attempt to prove G fails finitely. Clark's completed database replaces each predicate definition P(x) :- Body₁; P(x) :- Body₂; ... with the biconditional P(x) ↔ Body₁ ∨ Body₂ ∨ ..., making the CWA explicit in the form of the program and allowing sound treatment of NAF. Well-Founded Semantics (WFS, Van Gelder, Ross, Schlipf, 1991) and Stable Model Semantics (Answer Set Programming, Gelfond and Lifschitz, 1988) generalise NAF to handle self-referential negation (programs that negate their own predicates), extending the CWA framework to more expressive logic programs.

  **Database semantics:**
  Relational databases (SQL, [[Relational Database]]) implement the CWA implicitly through the Unique Name Assumption (different database identifiers denote different entities) and Domain Closure Assumption (the domain contains only named entities), together with the CWA. These three assumptions together constitute the "standard database semantics" that makes relational query answering complete and definite over finite domains. The SPARQL query language inherits SQL's query evaluation semantics including CWA behaviour for certain query forms (SPARQL FILTER NOT EXISTS and MINUS operators implement NAF over RDF triples), though the underlying RDF graph operates under OWA in its inferential aspects.

  **SHACL (Shapes Constraint Language):**
  [[SHACL]] is the W3C standard for describing and validating the structure of RDF data graphs. SHACL explicitly adopts the CWA: a SHACL validator treats the input data graph as complete and evaluates constraint satisfaction against what is actually present. sh:minCount 1 violations are reported when a focus node has fewer than the required number of property values — the validator does not infer that the missing values might exist elsewhere (OWA style) but treats their absence as a violation. SHACL's relationship to OWL illustrates the co-existence challenge: 2025 research (Grau et al., KR 2024; recent arxiv 2507.12286) formally analyses SHACL validation in the presence of OWL ontologies, showing that SHACL constraint entailment under OWL semantics is undecidable in general, and developing rewriting techniques that preserve OWA reasoning for ontology inference while applying CWA evaluation for constraint checking.

  **Well-Founded and Stable Model Semantics:**
  Stable Model Semantics (Gelfond and Lifschitz, 1988) and its computational realisation in Answer Set Programming (ASP) generalise the CWA beyond stratified programs (programs without recursive negation) to handle programs with arbitrary recursive negation. ASP adopts a minimal model semantics: the "stable models" (or "answer sets") of a program are the minimal models that satisfy all rules including negated body literals, extending the CWA principle to non-stratified programs. ASP systems such as Clingo, DLV, and WASP are used for NP-hard combinatorial reasoning problems (planning, scheduling, configuration, diagnostics) where the CWA enables compact, expressive specifications of constraint satisfaction problems.

  **Epistemic grounding:**
  The philosophical underpinning of the CWA is the Principle of Sufficient Reason applied to knowledge bases: if there were a reason for a proposition to be true, that reason would be encoded in the knowledge base; therefore, the absence of a reason (no encoding) constitutes sufficient grounds for inferring falsity. This principle is rational for curated, authoritative knowledge bases but unjustified for open, incomplete, distributed information environments. The choice between CWA and OWA is not purely technical but epistemological: it encodes an assumption about the completeness of the available information relative to the domain being modelled.

  ## Use Cases / Major Families

  **Relational database query answering:**
  The primary and historically first application of the CWA is relational database query evaluation. SQL systems — Oracle, PostgreSQL, Microsoft SQL Server, MySQL, SQLite — all implement CWA semantics implicitly: a query for employees named "Smith" that returns zero rows means there are no such employees in the database (not merely that Smith employees are unknown). This enables definite, actionable answers and is appropriate for administrative databases where the administrator is responsible for maintaining completeness. The CWA is what makes FOREIGN KEY constraints and NOT EXISTS subqueries semantically coherent in SQL: "NOT EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.id)" correctly identifies customers with no orders because the database is taken to completely record all orders.

  **Logic programming and [[Prolog]]:**
  Prolog programs compute under CWA semantics via negation as failure. A Prolog query "?- not(flights(london, paris, _))" succeeds if the database contains no flights from London to Paris — the system does not require an explicit assertion that no such flight exists but infers it from the closed knowledge base. This enables concise, powerful programs for route planning, scheduling, and constraint satisfaction without explicitly enumerating negative cases. The ISO Prolog standard (ISO/IEC 13211-1:1995, revised 2006) specifies negation as failure through the not/1 and \+/1 predicates, making CWA inference a standardised part of Prolog semantics. SWI-Prolog, the most widely deployed open-source Prolog system as of 2026, implements full CWA negation as failure with tabling extensions (XSB-style tabling) for well-founded semantics in recursive negation scenarios.

  **Answer Set Programming (ASP):**
  ASP systems such as Clingo (University of Potsdam) and DLV (TU Vienna) extend CWA semantics to non-stratified programs and apply them to hard combinatorial problems. A 2024 survey documented over 500 industrial ASP deployments for planning, scheduling, and configuration across manufacturing, logistics, and healthcare domains. The CWA in ASP means that options not explicitly ruled out by stable model constraints are excluded from the answer set — an assumption of maximal specificity that is natural for planning problems where the agent's available options are exhaustively specified. NASA's autonomous spacecraft scheduling system (used on the Deep Space 1 and Earth Observing-1 satellites) used ASP-based planning with CWA semantics to generate valid activity schedules from a closed specification of available resources, actions, and constraints.

  **[[SHACL]] data validation in knowledge graphs:**
  SHACL validation is the primary contemporary application of CWA to semantic web data. Enterprise knowledge graph deployments use SHACL shapes to enforce data quality: shapes assert that entities of certain types must have required properties, that property values must fall within specified ranges or vocabularies, and that cardinality constraints must be satisfied. SHACL validators (Apache Jena, TopBraid, Smore, Zazuko RDF4J SHACL) evaluate these constraints under CWA semantics — absence of a required property is a violation, not an unknown. A 2025 benchmark study of enterprise knowledge graph data quality pipelines found SHACL validation using CWA reduced data defect escape rates by 67% compared to schema-free RDF ingestion, with the most common defect classes being missing required properties, type mismatches, and cardinality violations.

  **Expert systems and medical diagnosis:**
  Classical expert systems in the tradition of MYCIN, DENDRAL, and XCON operated under CWA semantics: symptom absence was inferred from its non-recording in the patient or product record. This worked well in controlled clinical and engineering settings where the knowledge base was maintained by domain experts responsible for its completeness. The CWA enabled definite forward-chaining rule firing: a rule "if NOT(contraindication(drug, patient)) then prescribe(drug, patient)" fires correctly under CWA because absence of a recorded contraindication is taken as its non-existence in the knowledge base.

  **[[Datalog]] and deductive databases:**
  Datalog, the recursive query language for deductive databases, operates under CWA semantics and was the precursor to modern graph database query languages. Neo4j's Cypher, Amazon Neptune's Gremlin/SPARQL, and TigerGraph's GSQL all inherit varying degrees of CWA semantics for their query evaluation. Datalog's fixed-point semantics computes the minimal model (the least Herbrand model) of a set of rules over an EDB, implementing the CWA through minimality: atoms not in the minimal model are false. Modern Datalog systems such as Soufflé (used in static program analysis) and Cascalog process billions of facts under CWA semantics for enterprise data integration and security analysis pipelines.

  **Natural language understanding systems with [[Negation as Failure]]:**
  NLU systems that perform question answering over structured knowledge bases must make a CWA/OWA design choice. Systems operating over a closed knowledge base (a company's product catalogue, a city's transport schedule, a country's legislative database) can correctly answer negative queries: "Is this product available in blue?" answers "no" if the product-colour database contains no blue variant. OWA-based systems would answer "I don't know," which may be epistemically more accurate but practically less useful. The trade-off has become a design parameter in modern RAG ([[Retrieval-Augmented Generation]]) systems, where the closed corpus of retrieved documents implements a limited CWA over the document set.

  ## Academic Context

  The intellectual history of the Closed World Assumption is intertwined with the development of database theory and logic programming as formal disciplines. The foundational problem — how should a database system interpret a failed query? — emerged as the relational model was being formalised in the early 1970s by Edgar Codd at IBM. Codd's relational algebra (1970) did not explicitly address the interpretation of empty query results, but the implicit semantics were those of the CWA: an empty result meant the queried relation had no such tuples, and there was no mechanism to distinguish "absent" from "known-false."

  Raymond Reiter's 1978 paper "On Closed World Data Bases" is the definitive formal treatment. Reiter, then at the University of British Columbia (later Professor at the University of Toronto and a founding member of the Fields Institute), was one of the architects of formal database semantics and nonmonotonic reasoning. His 1978 paper provided the first rigorous logical analysis of database query semantics, identifying the CWA as the implicit semantic principle and giving it a precise logical characterisation. The same volume containing Reiter's paper — "Logic and Data Bases," edited by Hervé Gallaire and Jack Minker (1978, Plenum) — also contained Clark's "Negation as Failure," making this volume the joint foundational text for CWA in both database and logic programming contexts. Gallaire, Minker, and Nicolas's 1984 survey "Logic and Databases: A Deductive Approach" (ACM Computing Surveys) synthesised the first decade of work and established the CWA as a core concept in the emergent database theory literature.

  J.W. Lloyd's "Foundations of Logic Programming" (1984, Springer; 2nd ed. 1987) provided the standard theoretical treatment of negation as failure in the logic programming tradition, including the relationship between Clark's completion, SLDNF resolution (the standard Prolog proof procedure with negation as failure), and the CWA. Lloyd's work established the soundness and completeness results for SLDNF under the completion semantics that underpin the theoretical correctness of Prolog programs using negation.

  The development of Well-Founded Semantics (Van Gelder, Ross, Schlipf, JACM 1991) and Stable Model Semantics (Gelfond and Lifschitz, 1988, ICLP) addressed the CWA's shortcoming with recursive negation — programs that contain cycles through negation (e.g., a predicate P that is negated in a rule whose head is used in deriving P) under Clark's completion or naive CWA produce anomalous or undefined results. Well-Founded Semantics assigns a three-valued (true/false/undefined) interpretation to such programs, while Stable Model Semantics defines answer sets as the consistent minimal models of a grounded program. These semantics extend the CWA to non-stratified programs and underpin modern Answer Set Programming systems.

  The tension between CWA and OWA became a central debate in the Semantic Web community from 2001 onwards. Paradoxically, the OWL specification (Horrocks, Patel-Schneider, van Harmelen, 2003; McGuinness and van Harmelen W3C Rec 2004) deliberately adopted OWA over the objections of practitioners more familiar with database semantics, motivated by the recognition that Semantic Web knowledge is inherently incomplete and distributed. The formal relationship between OWL (OWA) and SHACL (CWA) within the same RDF ecosystem was analysed in Knublauch and Kontokostas's SHACL specification (W3C Rec 2017), which acknowledged the CWA/OWA co-existence challenge. Recent research (KR 2024: "Consistent Query Answering over SHACL Constraints," Ahmetaj et al.) and arxiv:2507.12286 (2025) develops formal semantics and rewriting techniques for the combined OWL+SHACL setting, demonstrating that tractable algorithms exist for important subclasses of this combined CWA/OWA reasoning problem.

  Academic debate about the appropriate scope of the CWA in knowledge representation continues in the AI community. Bonatti, Lutz, and Wolter's 2006 paper "Expressive Non-Monotonic Description Logics Based on Circumscription" (JAIR) investigates incorporating CWA-style reasoning into [[Description Logic]] frameworks through circumscription, the logical formalisation of minimal-model reasoning that generalises the CWA. The broader nonmonotonic reasoning tradition — default logic (Reiter, 1980), circumscription (McCarthy, 1980), autoepistemic logic (Moore, 1985) — can be understood as providing principled generalisations of the CWA that retain defeasible closed-world inference while allowing for explicit exceptions and uncertainty.

  The relationship between the CWA and complexity theory has been thoroughly analysed. Under CWA semantics in propositional logic, checking whether a ground atom is false (i.e., absent from all minimal models) is coNP-complete for general databases with disjunctive facts, but polynomial for Horn databases (databases without disjunctive facts) — a classic result explaining why Prolog (restricted to definite Horn clauses) achieves polynomial-time SLD resolution while disjunctive logic programming (DLP) is provably harder. Under Stable Model Semantics, deciding whether a propositional program has a stable model is NP-complete (Gelfond and Lifschitz, 1991; Marek and Truszczynski, 1991), while cautious entailment (an atom is true in all stable models) is coNP-complete. These complexity results define the computational boundaries of practical CWA reasoning: systems requiring interactive response times (database query, SHACL validation, Prolog goal solving) restrict themselves to the polynomial fragment through stratification, Horn-clause restriction, or bounded recursion, while offline planning and configuration applications tolerate NP-hard computation via efficient ASP solvers that use conflict-driven clause learning (CDCL) from SAT solving. The integration of Hybrid ASP (arXiv:2502.09235, 2025) with constraint programming languages such as CLINGCON and CLINGO[DL] extends the CWA framework to mixed integer and linear arithmetic constraints, expanding the practical scope of CWA-based constraint satisfaction to include numeric planning and resource allocation.

  The treatment of incomplete information under the CWA has been a recurring theme in database theory. Imielinski and Lipski (1984) introduced "null values" as a mechanism for representing partially known information within a CWA database: a null value represents an unknown constant rather than a known absence, allowing databases to model the distinction between "this attribute is unknown" and "this attribute is absent." This is the basis for SQL NULL semantics, which follow a three-valued logic (true, false, unknown) that partially softens the strict CWA — a null comparison does not trigger the CWA inference of falsity but propagates "unknown." However, SQL's treatment of nulls is notoriously complex and the source of many application bugs: COUNT(*) counts rows including those with null values, while COUNT(column) excludes nulls; outer join semantics introduce null values for non-matching rows; and NOT IN predicates with null values produce unexpectedly empty results because any comparison involving NULL is "unknown," making the NULL-safe equivalent IS NOT DISTINCT FROM necessary for correct negation. These SQL null semantics represent a pragmatic hybrid between the strict CWA and the OWA that has caused persistent practical problems while remaining the de facto standard. The formal literature (Abiteboul, Hull, and Vianu, "Foundations of Databases," 1995) provides a rigorous treatment distinguishing "Codd tables" (tuples with nulls representing possibly-equal constants), "c-tables" (conditional tables with complete information about conditions), and "v-tables" (tables with distinct variables), each representing a different trade-off between expressive power and computational tractability in the CWA-with-incomplete-information setting.

  ## Current Landscape (2026)

  In 2026, the Closed World Assumption remains the dominant semantics for enterprise data management while the Open World Assumption governs the web-scale knowledge integration layer. The most significant development of 2024–2026 is the crystallisation of hybrid CWA/OWA architectures as the industry standard for enterprise [[Knowledge Graph]] deployments. Enterprise semantic platforms — Ontotext GraphDB 10.x, Stardog 9.x, PoolParty Semantic Suite 9.x, Cambridge Semantics AnzoGraph — all offer configurable closed-world validation through SHACL alongside open-world ontological inference through OWL 2, with data pipeline orchestration tools routing data through OWA inference stages (entity resolution, class inference, property inference) followed by CWA validation stages (SHACL shapes checking, data quality reporting, constraint repair). Bergmann's 2026 analysis ("Bringing Semantics to Closed-World Systems," bergnet.org, March 2026) argues that the closed-world systems — relational databases, event-driven data pipelines, streaming analytics — can benefit substantially from incorporating OWA-style semantic layers for entity resolution and schema evolution while retaining CWA semantics for query evaluation and constraint checking.

  The EU AI Act (August 2026 high-risk deployment deadline) indirectly affects CWA-based systems: AI systems processing personal data in closed databases under CWA semantics must document the completeness assumptions of their knowledge bases, because a false CWA applied to an incomplete database can lead to incorrect negative inferences with real-world consequences (incorrectly inferring that a person has no medical contraindications because the contraindication is absent from the database rather than genuinely non-existent). The EU AI Act's requirements for technical documentation, human oversight, and correctness verification apply to automated decision systems that implement CWA reasoning over personal data.

  Answer Set Programming has grown significantly in industrial adoption. The 2024 Annual Report of the International Foundation for Autonomous Agents and Multi-Agent Systems (IFAAMAS) noted ASP deployments at Boeing, Siemens, and multiple government agencies for configuration management, scheduling, and constraint satisfaction problems where CWA semantics are natural and well-established. The Clingo ASP system (University of Potsdam) is in production deployment in at least 50 documented industrial applications as of 2025, and the ICLP (International Conference on Logic Programming) 2025 hosted a dedicated industrial track documenting new CWA-based logic programming deployments across manufacturing, pharmaceutical, and financial services sectors.

  SPARQL 1.2 (under development at W3C as of 2025–2026) is extending the SPARQL query language with new negation constructs that more explicitly support CWA-style reasoning over RDF data, including SPARQL LATERAL and improved NOT EXISTS semantics, driven by demand from enterprise users who want SQL-like closed-world query behaviour over their RDF knowledge graphs without adopting a full separate SHACL validation layer.

  ## UK Context

  The UK has significant academic depth in the logic and knowledge representation areas that underpin CWA research. The University of Edinburgh's Laboratory for Foundations of Computer Science has historically been a leading centre for logic programming and nonmonotonic reasoning: Robin Milner, Gordon Plotkin, and Edinburgh colleagues shaped the formal foundations of programming languages and logic in the 1970s–1990s in ways that influenced CWA formalisation. Alan Bundy's work at Edinburgh on proof planning and formal reasoning contributes to the broader automatic reasoning context in which CWA and OWA reasoning strategies are evaluated.

  Imperial College London's Department of Computing houses the Knowledge Representation and Reasoning (KR&R) group led by researchers including Krysia Broda (logic programming, abductive reasoning), with contributions to nonmonotonic reasoning and description logic-based knowledge representation that are directly relevant to CWA formalisation and SHACL integration. The Imperial Logic and AI Research Group contributed to the foundations of Answer Set Programming and has ongoing research on combining CWA and OWA reasoning in hybrid knowledge architectures.

  The University of Oxford's Department of Computer Science — home to the OWL 2 specification lead Ian Horrocks (now at Oxford after Manchester) and Bernardo Cuenca Grau — is the primary UK academic centre for [[Description Logic]] and OWL reasoning research. Horrocks's group built the HermiT OWL 2 DL reasoner and continues to produce foundational research on the boundary between OWA-based ontology reasoning and CWA-based constraint validation, including recent work on SHACL in the presence of OWL ontologies. The interaction between SHACL's CWA and OWL's OWA is an active Oxford research theme, with collaboration with the W3C SHACL Working Group.

  The University of Aberdeen's Computing Science Department, and the University of Southampton's Web and Internet Science group (home of the Semantic Web group founded by Nigel Shadbolt and Wendy Hall), have contributed to understanding the practical implications of the CWA/OWA distinction in enterprise data integration. Southampton's research on Linked Data publication standards — including work that helped shape the W3C's Data on the Web Best Practices recommendation — has addressed how CWA assumptions implicit in tabular data sources are transformed to OWA-compatible RDF representations.

  Industrial UK context: UK financial services firms operating under FCA regulation use closed-world database semantics for regulatory reporting (CWA enables definite "yes/no" compliance assertions required by regulators), while their parallel risk and knowledge management functions increasingly use OWA-compatible knowledge graphs for cross-asset risk modelling where data completeness cannot be guaranteed. NHS Digital uses CWA-based SQL databases for clinical records management and population health analytics while exploring OWA-based knowledge graph augmentation for rare disease phenotyping and pathway analysis, where the open-world nature of rare disease knowledge makes OWA semantics more appropriate.

  The Manchester school has contributed to both the logic programming and description logic traditions that underpin CWA research. The University of Manchester's School of Computer Science was Ian Horrocks's home institution (before he moved to Oxford) and the birthplace of the FaCT (and FaCT++) OWL DL reasoner, which established the tableau decision procedure as the standard method for OWL reasoning. Manchester's contribution to the CWA/OWA boundary debate is significant: the Manchester team's practical experience building FaCT++ exposed the engineering complexity of OWA-based reasoning at enterprise scale, motivating their later research on tractable OWL profiles (OWL EL, OWL QL, OWL RL) that restore polynomial-time reasoning by restricting expressivity, and on OWL RL — a rule-based profile designed specifically to bridge OWL and rule-based CWA systems by supporting Datalog-compatible OWL reasoning. In Northern England, the Sheffield Centre for Robotics (SCentRo) and the Advanced Manufacturing Research Centre apply CWA-based constraint reasoning — using ASP and CLP (Constraint Logic Programming) — for robot task planning and manufacturing process scheduling, where the closed-world assumption over the robot's operational environment and available actions is the natural and practically correct modelling choice. Leeds's School of Computing contributes to verification-oriented applications of CWA reasoning, using model checking and formal methods tools that operate under CWA semantics to verify the correctness of safety-critical embedded systems used in UK nuclear and aerospace industries.

  In the broader UK AI regulation context, the UK AI Safety Institute (AISI, founded October 2023, based in London and San Francisco) is examining the epistemological assumptions of AI reasoning systems including the CWA. The AISI's evaluation frameworks for large AI models include scenarios where the model must reason about the absence of information — a classic CWA domain — and the safety implications of treating incomplete training data under CWA versus OWA. UK AI governance guidance from the ICO (Information Commissioner's Office) on automated decision-making explicitly requires that organisations document the completeness assumptions of databases used for automated decisions, directly engaging with the CWA's operational consequences for data protection compliance under UK GDPR.

  ## Future Directions (2026–2030)

  **Hybrid CWA/OWA reasoning systems:** The trend toward hybrid semantic architectures will accelerate, with formal tools emerging for jointly specifying and reasoning with mixed CWA/OWA assumptions within a single knowledge graph. W3C's SHACL-AF (SHACL Advanced Features) and emerging proposals for "Closed-World OWL" profiles will provide standardised mechanisms for engineers to annotate which parts of a knowledge graph should be evaluated under CWA and which under OWA, replacing the current practice of architectural layer separation with fine-grained, ontology-level control over world assumptions.

  **CWA in large language model grounding:** As [[Retrieval-Augmented Generation]] and [[Large Language Model]] grounding over closed document corpora becomes standard practice, the choice between treating the retrieved documents as a CWA-closed knowledge base versus an OWA-partial knowledge base will have significant impacts on response generation. Systems that answer "no" to a query on the basis of absent retrieval results (CWA) will produce more confident, actionable responses but risk false negatives when the corpus is genuinely incomplete. Calibration methods for LLM-based question answering over closed corpora — explicitly reasoning about corpus completeness assumptions — are an emerging research area at the intersection of information retrieval and knowledge representation.

  **Answer Set Programming for AI planning:** ASP with CWA semantics will expand in autonomous systems applications — robotic task planning, autonomous vehicle route planning, AI-assisted medical diagnosis — where the closed-world specification of an agent's available actions, resources, and constraints enables sound and complete planning with correctness guarantees not achievable with neural methods alone. The AAAI 2025 panel "Neurosymbolic Reasoning: Bridging CWA and OWA" highlighted ongoing research on hybrid neurosymbolic architectures that use CWA-based symbolic reasoning for planning and OWA-based neural reasoning for perception and language understanding.

  **SHACL-SPARQL-OWL integrated toolchains:** Enterprise RDF tooling will converge on integrated pipelines where SHACL validation (CWA), SPARQL query evaluation (partial CWA), and OWL reasoning (OWA) are managed as complementary stages of a unified semantic data processing workflow, with explicit metadata on world assumption policies annotated at the ontology and shapes graph level.

  ## Key Terminology Glossary

  - **Closed World Assumption (CWA)**: The epistemological principle that any proposition not derivable from the current knowledge base is false. Distinguished from "negation by proof" (explicitly deducing ¬A) by being negation by absence (¬A because A is absent from the knowledge base).
  - **Open World Assumption (OWA)**: The complementary principle adopted by OWL and the Semantic Web: a proposition not derivable from the knowledge base is *unknown*, not false. Absence of evidence does not constitute evidence of absence.
  - **Negation as Failure (NAF)**: The procedural implementation of the CWA in [[Logic Programming]] and [[Prolog]]: NOT(G) succeeds if the attempt to prove G fails finitely. Formalised by Keith Clark (1978) as Clark's completion semantics.
  - **Minimal Model**: The smallest Herbrand interpretation satisfying a set of ground clauses. Under the CWA, the minimal model of a database is the intended interpretation — facts not in the minimal model are false by definition.
  - **Clark's Completion**: A transformation of a [[Prolog]] or [[Datalog]] program that converts each predicate definition from implicational (if-body-then-head) to biconditional (head-iff-body) form, making the CWA explicit in the syntax of the program and grounding the soundness of negation as failure.
  - **Unique Name Assumption (UNA)**: The database assumption that different identifiers denote different entities, complementing the CWA in standard database semantics. Absent from OWL, where two IRIs may refer to the same entity unless owl:differentFrom is asserted.
  - **Domain Closure Assumption (DCA)**: The database assumption that the domain of discourse contains only entities named in the knowledge base. Together with the UNA and CWA, forms the "standard database semantics" triplet that makes relational query answering complete and unambiguous.
  - **Stable Model (Answer Set)**: In [[Answer Set Programming]], a minimal model of a grounded program under Gelfond-Lifschitz reduction — the set of atoms that a rational agent with complete information and the CWA would believe true. Generalises the CWA to programs with recursive negation.
  - **Well-Founded Semantics (WFS)**: A three-valued (true/false/undefined) semantics for logic programs with recursive negation (Van Gelder, Ross, Schlipf, 1991). Assigns "undefined" to atoms whose truth cannot be established or refuted under the CWA, rather than producing inconsistency.
  - **SHACL (Shapes Constraint Language)**: The W3C standard for validating RDF data graphs against structural constraints. Operates under the CWA: the data graph is assumed complete, and absent required properties are constraint violations.
  - **Circumscription**: McCarthy's (1980) formalisation of minimal-model reasoning in first-order logic, providing the logical foundations for the CWA in expressive non-monotonic reasoning systems. Circumscription minimises the extension of designated predicates while keeping others fixed.
  - **Deductive Database**: A knowledge base combining a relational extensional database (EDB, base facts) with intensional database rules (IDB, Datalog/Prolog rules), operating under CWA semantics to derive all facts in the minimal model via fixed-point evaluation.
  - **Stratified Negation**: A syntactic restriction on logic programs ensuring that recursive cycles do not pass through negation; under stratified negation, the perfect model semantics gives a unique, well-defined CWA minimal model for the entire program.
  - **Grounded World Assumption (GWA)**: A localised variant of the CWA used in neurosymbolic and RAG ([[Retrieval-Augmented Generation]]) systems: the retrieved document set is treated as a closed knowledge base for the purposes of answering a specific query, even though the broader world operates under OWA.

  ## Formal Analysis

  The CWA can be formalised in several complementary ways. In Reiter's original formulation, given a database DB (set of ground atoms), the CWA operator yields: CWA(DB) = DB ∪ {¬A | A is a ground atom not in DB}. This produces a 2-valued (true/false) interpretation of every ground atom, making the database semantically complete. Reiter showed that CWA(DB) is the unique minimal Herbrand model of DB — the smallest set of ground atoms satisfying the database, with every atom not in the set assigned false. This minimal-model characterisation connects the CWA to the broader framework of circumscription: Reiter's CWA is equivalent to McCarthy's circumscription of all base predicates simultaneously with no fixed predicates. The more selective Generalised CWA (Minker, 1982) extends this to indefinite databases (disjunctive facts), producing a set of minimal models rather than a single one, and inferring ¬A only when A is absent from all minimal models.

  In logic programming, Clark's completion captures the CWA algebraically. Given a set of Horn clauses defining predicate P: P(x) :- B₁; P(x) :- B₂; ...; P(x) :- Bₙ, the completion comp(P) replaces this with the biconditional P(x) ↔ ∃ȳ₁(x=t₁ ∧ B₁) ∨ ... ∨ ∃ȳₙ(x=tₙ ∧ Bₙ), where the tᵢ are the head argument tuples and ȳᵢ are existential variables introduced by the transformation. For predicates with no defining clauses, the completion is P(x) ↔ ⊥, i.e. P is uniformly false — the pure CWA. Well-Founded Semantics (WFS) weakens this to a 3-valued assignment, resolving the anomalies of Clark's completion under recursive negation without requiring the NP-hard computation of stable models. ASP stable models provide a 2-valued extension to programs with recursive negation by applying the Gelfond-Lifschitz GL-reduction: for a candidate model M, the GL-reduct Π^M removes all rules with negated body literals satisfied by M (¬A where A ∉ M) and removes negated body literals that fail in M (¬A where A ∈ M), then checks that M is the minimal model of the simplified positive program Π^M. If so, M is a stable model — the CWA analogue for non-stratified programs.

  In the [[Description Logic]] and OWL context, the interaction between CWA and OWA manifests technically as the difference between the two-valued model theory of [[First-Order Logic]] (where a formula is either true or false in every model) and the OWA default adopted by OWL DL: an OWL knowledge base has many models, and an assertion A is derivable only if it holds in all of them. The CWA in this context corresponds to selecting the minimal model (unique up to isomorphism in the finite case under UNA and DCA), while the OWA corresponds to reasoning over all models simultaneously. Hybrid approaches — local closed-world reasoning in [[Description Logic]] (Donini et al., 2002; Lutz et al., 2013) — add CWA-style closure axioms to specific predicates while leaving others OWA-open, enabling fine-grained epistemological control within an ontological knowledge base.

  ## Research & Literature

  1. Reiter, R. (1978). On Closed World Data Bases. In Gallaire, H. and Minker, J. (eds.), Logic and Data Bases, Plenum Press, New York, pp. 55–76.
  2. Clark, K.L. (1978). Negation as Failure. In Gallaire, H. and Minker, J. (eds.), Logic and Data Bases, Plenum Press, New York, pp. 293–322.
  3. Gallaire, H., Minker, J., and Nicolas, J.-M. (1984). Logic and Databases: A Deductive Approach. ACM Computing Surveys, 16(2), 153–185.
  4. Lloyd, J.W. (1984). Foundations of Logic Programming. Springer, Berlin (2nd ed. 1987).
  5. Gelfond, M. and Lifschitz, V. (1988). The Stable Model Semantics for Logic Programming. Proceedings of ICLP/SLP, pp. 1070–1080.
  6. Van Gelder, A., Ross, K.A., and Schlipf, J.S. (1991). The Well-Founded Semantics for General Logic Programs. Journal of the ACM, 38(3), 620–650.
  7. Minker, J. (1982). On Indefinite Databases and the Closed World Assumption. Proceedings of CADE, LNCS 138, Springer, pp. 292–308.
  8. Doherty, P., Lukaszewicz, W., and Szalas, A. (2001). Computing Circumscription Revisited: A Reduction Algorithm. Journal of Automated Reasoning, 18(3), 297–338.
  9. Bonatti, P., Lutz, C., and Wolter, F. (2006). Expressive Non-Monotonic Description Logics Based on Circumscription. Proceedings of KR 2006, pp. 400–410.
  10. Horrocks, I., Patel-Schneider, P.F., and van Harmelen, F. (2003). From SHIQ and RDF to OWL: The Making of a Web Ontology Language. Journal of Web Semantics, 1(1), 7–26.
  11. McGuinness, D.L. and van Harmelen, F. (eds.) (2004). OWL Web Ontology Language Overview. W3C Recommendation, 10 February 2004.
  12. Knublauch, H. and Kontokostas, D. (eds.) (2017). Shapes Constraint Language (SHACL). W3C Recommendation, 20 July 2017.
  13. Ahmetaj, S., et al. (2024). Consistent Query Answering over SHACL Constraints. Proceedings of KR 2024, pp. 1–12. https://proceedings.kr.org/2024/1/kr2024-0001-ahmetaj-et-al.pdf
  14. Grau, B.C., et al. (2025). SHACL Validation in the Presence of Ontologies: Semantics and Rewriting Techniques. arXiv:2507.12286.
  15. Lifschitz, V. (2019). Answer Set Programming. Springer, Berlin.
  16. Brewka, G., Eiter, T., and Truszczynski, M. (2011). Answer Set Programming at a Glance. Communications of the ACM, 54(12), 92–103.
  17. Gebser, M., Kaminski, R., Kaufmann, B., and Schaub, T. (2012). Answer Set Solving in Practice. Morgan & Claypool.
  18. McCarthy, J. (1980). Circumscription — A Form of Non-Monotonic Reasoning. Artificial Intelligence, 13(1–2), 27–39.
  19. Reiter, R. (1980). A Logic for Default Reasoning. Artificial Intelligence, 13(1–2), 81–132.
  20. Moore, R.C. (1985). Semantical Considerations on Nonmonotonic Logic. Artificial Intelligence, 25(1), 75–94.
  21. Abboud, R., et al. (2024). Towards A More Reasonable Semantic Web. arXiv:2407.19095.
  22. Sánchez-Ferreres, J., et al. (2024). A Knowledge Engineering Primer. arXiv:2305.17196.
  23. Pavlyshyn, V. (2025). Open World vs Closed World: Modeling OWL and SHACL Semantics in Agda. Medium / Substack, March 2025.
  24. Bergmann, M. (2026). Bringing Semantics to Closed-World Systems. bergnet.org, March 2026. https://www.bergnet.org/2026/03/closed-world-systems/
  25. Horridge, M. and Bechhofer, S. (2011). The OWL API: A Java API for OWL Ontologies. Semantic Web, 2(1), 11–21.
  26. W3C (2013). SPARQL 1.1 Query Language. W3C Recommendation, 21 March 2013.
  27. Lutz, C., Toman, D., and Wolter, F. (2009). Conjunctive Query Answering in the Description Logic EL Using a Relational Database System. Proceedings of IJCAI 2009, pp. 2070–2075.
  28. Gogacz, T., et al. (2022). Semantic Web: Past, Present, and Future. arXiv:2412.17159.

- ### Provenance
  - sources:: Reiter (1978) "On Closed World Data Bases" in Gallaire & Minker Logic and Data Bases; Clark (1978) "Negation as Failure"; W3C SHACL Recommendation (2017); Ahmetaj et al. KR 2024; arXiv:2507.12286 SHACL+OWL (2025); Bergmann (2026) bergnet.org; Pavlyshyn (2025) OWL vs SHACL Medium; Wikipedia Closed-world assumption; IndiaAI.gov.in CWA article; Gallaire, Minker & Nicolas ACM Computing Surveys (1984)
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
