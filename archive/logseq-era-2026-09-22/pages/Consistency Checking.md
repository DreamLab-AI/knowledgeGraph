public:: true

# Consistency Checking
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:consistency-checking", "@type":"Page", "title":"Consistency Checking", "vc:slug":"consistency-checking", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:consistency-checking",
  "@type":"Class",
  "label":"Consistency Checking",
  "definition":"Consistency checking is the process of verifying that a set of statements, data items or constraints contains no contradictions and that all derivable conclusions remain mutually compatible. In knowledge representation it confirms that an ontology or knowledge base admits at least one model, while in data systems it confirms that records satisfy declared integrity rules. The technique underpins trust in automated reasoning by rejecting configurations that would license arbitrary or unsound inferences.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:verification","label":"Verification"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:reasoning","label":"Reasoning"},
      {"@id":"urn:ngm:class:inference","label":"Inference"},
      {"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:constraint-satisfaction","label":"Constraint Satisfaction"},
      {"@id":"urn:ngm:class:theorem-proving","label":"Theorem Proving"},
      {"@id":"urn:ngm:class:inference-engine","label":"Inference Engine"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:knowledge-representation","label":"Knowledge Representation"},
      {"@id":"urn:ngm:class:formal-verification","label":"Formal Verification"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:data-validation","label":"Data Validation"},
      {"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}
    ],
    "appliesTo":[
      {"@id":"urn:ngm:class:ontology","label":"Ontology"},
      {"@id":"urn:ngm:class:knowledge-base","label":"Knowledge Base"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:semantic-web","label":"Semantic Web"},
      {"@id":"urn:ngm:class:schema-validation","label":"Schema Validation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Consistency checking verifies that a body of statements contains no contradiction and admits at least one valid model.
	- It is a form of [[Verification]] that protects [[Reasoning]] from deriving unsound or arbitrary conclusions.
	- In data systems it confirms records satisfy declared [[Data Integrity]] rules.
- ### Overview
	- A consistent set of axioms is satisfiable; an inconsistent one entails everything and is therefore useless for inference.
	- Description-logic reasoners check ontology consistency before answering queries or classifying concepts.
	- In databases, consistency checks enforce referential and domain constraints across related records.
	- The cost ranges from polynomial constraint checks to undecidable cases in expressive logics, driving the choice of formalism.
- ### Mechanisms
	- Tableau and resolution procedures search for a contradiction; failure to find one certifies consistency.
	- [[Constraint Satisfaction]] solvers assign values that simultaneously satisfy every declared constraint.
	- [[Theorem Proving]] establishes that the negation of a desired property is unsatisfiable.
	- Schema engines compare instance data against type, cardinality and uniqueness rules.
- ### Applications
	- Validating an [[Ontology]] before publishing it to the [[Semantic Web]].
	- Guarding a [[Knowledge Base]] so an [[Inference Engine]] only fires sound rules.
	- Powering [[Data Validation]] pipelines that reject malformed or contradictory inputs.
	- Supporting [[Quality Assurance]] by detecting conflicting configuration or policy statements.
- ### Relationships
	- subClassOf:: [[Verification]]
	- enables:: [[Reasoning]]
	- enables:: [[Inference]]
	- enables:: [[Data Integrity]]
	- uses:: [[Constraint Satisfaction]]
	- uses:: [[Theorem Proving]]
	- uses:: [[Inference Engine]]
	- requires:: [[Knowledge Representation]]
	- requires:: [[Formal Verification]]
	- supports:: [[Data Validation]]
	- supports:: [[Quality Assurance]]
	- appliesTo:: [[Ontology]]
	- appliesTo:: [[Knowledge Base]]
	- relatedTo:: [[Semantic Web]]
	- relatedTo:: [[Schema Validation]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
