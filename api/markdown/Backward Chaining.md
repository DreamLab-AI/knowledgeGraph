public:: true

# Backward Chaining
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a0d0f30b35b695513f8b64829c09d81f71a63b700380dd2ec0c2fb91fb143a2d",
  "@type": "Page",
  "vc:slug": "backward-chaining",
  "title": "Backward Chaining",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inference",
      "vc:label": "Inference"
    },
    {
      "@id": "urn:visionflow:linked:rule-based-systems",
      "vc:label": "Rule-Based Systems"
    },
    {
      "@id": "urn:visionflow:linked:forward-chaining",
      "vc:label": "Forward Chaining"
    },
    {
      "@id": "urn:visionflow:linked:expert-systems",
      "vc:label": "Expert Systems"
    },
    {
      "@id": "urn:visionflow:linked:inference-engine",
      "vc:label": "Inference Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:backward-chaining",
  "@type": "Class",
  "label": "Backward Chaining",
  "definition": "A goal-driven inference strategy that starts from a hypothesis to be proved and works backwards through the rule base, decomposing each goal into the subgoals given by the antecedents of rules whose consequents match it, recursing until every subgoal is grounded in known facts or fails. It is the query-answering counterpart to forward chaining, the evaluation strategy underlying Prolog's SLD resolution, and the diagnostic engine of classic expert systems such as MYCIN.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:inference",
    "label": "Inference"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:rule-based-systems",
        "label": "Rule-Based Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:forward-chaining",
        "label": "Forward Chaining"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:expert-systems",
        "label": "Expert Systems"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A goal-driven inference strategy that starts from a hypothesis to be proved and works backwards through the rule base, decomposing each goal into the subgoals given by the antecedents of rules whose consequents match it, recursing until every subgoal is grounded in known facts or fails. It is the query-answering counterpart to forward chaining, the evaluation strategy underlying Prolog's SLD resolution, and the diagnostic engine of classic expert systems such as MYCIN."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BackwardChaining
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Inference]]
  - part-of:: [[Rule-Based Systems]]
  - contrasts-with:: [[Forward Chaining]]
  - related-to:: [[Expert Systems]]

- ### Content

  ## Definition

  **Backward chaining** is the goal-driven mode of inference in [[Rule-Based Systems]]: reasoning starts from the conclusion one wants to establish and works backwards towards supporting evidence. Given a goal `Q`, the [[Inference Engine]] finds rules of the form `P₁ ∧ … ∧ Pₙ → Q`, and recursively attempts to prove each antecedent `Pᵢ` as a subgoal. A branch succeeds when its subgoals bottom out in facts already known (or supplied by the user when asked); it fails when no rule or fact can discharge a subgoal, prompting backtracking to alternative rules.

  This is the evaluation strategy of logic programming: Prolog executes definite-clause programs by SLD resolution, a depth-first backward-chaining search with unification, trying clauses in order and backtracking on failure. It is also the natural fit for consultation-style [[Expert Systems]]. MYCIN, the landmark 1970s medical system, backward-chained from candidate organism diagnoses to the laboratory findings that would support them — which meant it asked the clinician only for information relevant to the hypothesis under consideration, and could answer "why?" by displaying the rule chain it was trying to complete. That explanation capability remains a selling point of rule-based reasoning over opaque statistical models.

  Compared with [[Forward Chaining]], backward chaining touches only the portion of the knowledge base relevant to the query, so its cost can be far below linear in the size of the rule base; the price is repeated subgoal derivation and potential non-termination on recursive rules, addressed by memoising strategies such as tabling (SLG resolution in XSB and modern Prologs) and by magic-sets rewriting, which transforms a query so that bottom-up evaluation simulates goal-directed search.

  ## Technical Details

  - **Algorithm**: depth-first AND–OR search — OR choices over rules concluding the goal, AND decomposition over each rule's antecedents; unification propagates variable bindings between subgoals.
  - **Properties**: sound for Horn-clause knowledge bases; complete under fair search strategies (Prolog's unbounded depth-first search sacrifices completeness for efficiency).
  - **Termination and efficiency**: tabling/memoisation avoids recomputing and loops on recursive predicates; magic sets bridge backward-style goal focus with forward-style materialisation in deductive databases.
  - **When preferred**: interactive diagnosis and consultation, query answering over large fact bases, top-down planning — anywhere the set of possible conclusions is vast but the question is specific.
  - **Modern use**: Prolog and Datalog query engines, SPARQL entailment via query rewriting, business-rules decision services evaluating a single decision, and goal-regression planners; hybrid engines (e.g. Drools) offer both chaining modes and choose per query.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
