public:: true

# Counterfactual Explanation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:75b28828c1ebae792e5abbc6818c6087ea390f60e8080d9c520f4d729834748b",
  "@type": "Page",
  "vc:slug": "counterfactual-explanation",
  "title": "Counterfactual Explanation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:explainability",
      "vc:label": "Explainability"
    },
    {
      "@id": "urn:visionflow:linked:lime",
      "vc:label": "LIME"
    },
    {
      "@id": "urn:visionflow:linked:decision-transparency",
      "vc:label": "Decision Transparency"
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
  "@id": "urn:ngm:class:counterfactual-explanation",
  "@type": "Class",
  "label": "Counterfactual Explanation",
  "definition": "An explainable-AI method that accounts for a model's decision by presenting the smallest realistic change to the input that would have produced a different outcome — for example, 'the loan would have been approved had annual income been £5,000 higher' — giving affected individuals actionable recourse without requiring disclosure of the model's internal structure.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:explainability",
    "label": "Explainability"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-transparency",
        "label": "Decision Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lime",
        "label": "LIME"
      },
      {
        "@id": "urn:ngm:class:shap",
        "label": "SHAP"
      },
      {
        "@id": "urn:ngm:class:counterfactual-reasoning",
        "label": "Counterfactual Reasoning"
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
  - "An explainable-AI method that accounts for a model's decision by presenting the smallest realistic change to the input that would have produced a different outcome — for example, 'the loan would have been approved had annual income been £5,000 higher' — giving affected individuals actionable recourse without requiring disclosure of the model's internal structure."

- ### Semantic Classification
  - owl-class:: ai:CounterfactualExplanation
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Explainability]]
  - part-of:: [[Explainable AI]]
  - enables:: [[Decision Transparency]]
  - related-to:: [[LIME]]

- ### Content

  ## Definition

  A **counterfactual explanation** answers the question "what would have had to be different for the model to decide otherwise?". Rather than attributing importance to input features, as [[LIME]] and [[SHAP]] do, it exhibits a concrete alternative input — as close as possible to the original — that crosses the model's decision boundary. The canonical formulation by Wachter, Mittelstadt and Russell (2017) framed this as an optimisation problem: find the nearest point to the query instance, under a chosen distance metric, whose prediction matches the desired outcome. The result is inherently contrastive and human-oriented, matching how people naturally explain events ("it happened because X, and would not have happened without X").

  Counterfactuals occupy a distinctive position in AI governance because they provide **recourse**: a rejected applicant learns not merely which features mattered, but what achievable change would alter the decision. Wachter et al. argued that counterfactuals can satisfy the spirit of the GDPR's provisions on automated decision-making without forcing model disclosure, which has made them prominent in regulatory discussion of credit scoring, hiring, and insurance. They thereby operationalise [[Decision Transparency]] for the affected individual rather than for the model auditor.

  Generating good counterfactuals is harder than the definition suggests. Useful counterfactuals must be **plausible** (lying on the data manifold, not adversarial noise), **actionable** (changing income is possible; changing age or ethnicity is not), **sparse** (altering few features), and ideally **diverse** (offering several distinct routes to the desired outcome, as in the DiCE method). Causal validity is a further concern: naive counterfactuals treat features as independently mutable, whereas real interventions propagate through causal relationships — connecting the field to formal [[Counterfactual Reasoning]] in the Pearl tradition.

  ## Current Landscape

  - **Methods**: Wachter-style gradient optimisation; DiCE (diverse counterfactuals); FACE (feasible paths through the data manifold); CEM (pertinent negatives); prototype-guided and generative-model-based approaches for plausibility
  - **Tooling**: open-source libraries including Microsoft's DiCE, Alibi (Seldon), CARLA (benchmarking suite), and IBM's AIX360 ship counterfactual generators alongside attribution methods
  - **Regulatory relevance**: cited in guidance around GDPR Article 22, the EU AI Act's transparency obligations for high-risk systems, and UK ICO/Turing Institute "Explaining decisions made with AI" guidance, which lists counterfactual statements among recommended explanation types
  - **Open problems**: robustness of recourse under model updates (a promised counterfactual may stop working after retraining), gaming and strategic behaviour, causal feasibility, and fair distribution of recourse cost across demographic groups
