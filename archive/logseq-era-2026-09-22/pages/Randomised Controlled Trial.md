public:: true

# Randomised Controlled Trial

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:randomised-controlled-trial",
  "@type": "Page",
  "title": "Randomised Controlled Trial",
  "vc:slug": "randomised-controlled-trial",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:randomised-controlled-trial",
  "@type": "Class",
  "label": "Randomised Controlled Trial",
  "definition": "A randomised controlled trial (RCT) is an experimental study design in which participants are randomly assigned to an intervention or a control group to estimate the causal effect of the intervention while minimising bias and confounding. Randomisation balances known and unknown covariates across groups, and the controlled comparison isolates the treatment effect from background trends. RCTs are widely regarded as the methodological gold standard for causal inference in medicine and policy evaluation.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:statistical-inference",
        "label": "Statistical Inference"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:experimental-design",
        "label": "Experimental Design"
      },
      {
        "@id": "urn:ngm:class:causal-inference",
        "label": "Causal Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:evidence-based-medicine",
        "label": "Evidence-Based Medicine"
      },
      {
        "@id": "urn:ngm:class:precision-medicine",
        "label": "Precision Medicine"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fda",
        "label": "FDA"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A randomised controlled trial estimates causal effects via random group assignment.
  - It is a cornerstone of [[Experimental Design]] and [[Causal Inference]].
  - It underpins [[Evidence-Based Medicine]] and rigorous policy evaluation.
  - It relies on [[Statistical Inference]] and [[Hypothesis Testing]] to interpret results.
- ### Overview
  - Random assignment makes treatment and control groups comparable in expectation.
  - The controlled comparison isolates the intervention's effect from secular trends.
  - Blinding and pre-registration reduce performance, detection, and reporting biases.
  - RCTs trade internal validity for cost and sometimes limited external generalisability.
- ### Key aspects
  - Randomisation balances measured and unmeasured confounders across arms.
  - Control or placebo arms provide the counterfactual against which effects are measured.
  - Blinding limits conscious and unconscious bias in administration and assessment.
  - Pre-specified analysis plans guard against data-driven false positives.
- ### Applications
  - Evaluating drug and vaccine efficacy in regulated clinical trials.
  - Testing the impact of social and economic policy interventions.
  - A/B experimentation for product and platform changes.
  - Assessing educational and behavioural interventions for causal effect.
- ### Relationships
  - uses:: [[Statistical Inference]]
  - uses:: [[Statistics]]
  - uses:: [[Cross-Validation]]
  - implements:: [[Experimental Design]]
  - implements:: [[Causal Inference]]
  - supports:: [[Evidence-Based Medicine]]
  - supports:: [[Precision Medicine]]
  - standardizedBy:: [[FDA]]
  - enables:: [[Reproducibility]]
  - relatedTo:: [[Peer Review]]
  - relatedTo:: [[Statistics]]
  - requires:: [[Governance]]
  - bridgesTo:: [[Regulation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
