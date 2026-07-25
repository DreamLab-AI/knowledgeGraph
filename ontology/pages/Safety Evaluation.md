public:: true

# Safety Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safety-evaluation",
  "@type": "Page",
  "vc:slug": "safety-evaluation",
  "title": "Safety Evaluation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-evaluation",
  "@type": "Class",
  "label": "Safety Evaluation",
  "definition": "Safety evaluation is the systematic assessment of whether an AI system behaves acceptably under a defined threat and risk model, measuring propensities for harmful outputs, susceptibility to misuse, robustness under adversarial pressure, and the presence of dangerous capabilities. It combines automated benchmarks, red-teaming, and structured human review to produce evidence used in deployment decisions and governance reporting. Distinct from capability evaluation, safety evaluation asks not only what a model can do but how reliably it refrains from causing harm.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Safety evaluation is the structured measurement of an AI system's propensity for harm, susceptibility to misuse, and robustness under adversarial pressure, producing evidence for deployment and governance decisions.

- ### Relationships
  - Safety Evaluation is a subclass of [[Model Evaluation]] focused on harm rather than raw capability. It uses [[Red Teaming]] to surface failures adversarially, supports the broader programmes of [[AI Safety]] and [[AI Alignment]], and relates to formal [[Risk Assessment]] methodologies adapted from safety-critical engineering.

- ### Content
  - Safety evaluation reframes the question of model quality. Capability evaluation measures what a system can accomplish; safety evaluation measures whether it can be trusted to act within acceptable bounds — declining to produce dangerous instructions, resisting manipulation, avoiding deceptive or manipulative behaviour, and failing gracefully when uncertain. Because the harmful behaviours of interest are often rare and triggered only by specific inputs, evaluating them is methodologically harder than measuring average-case performance.

  - The toolkit spans three complementary modes. Automated benchmarks score models against curated datasets of harmful prompts and known failure categories, giving repeatable, comparable numbers. Red-teaming deploys human and automated adversaries to actively discover novel failures the benchmarks miss. Structured human review evaluates open-ended, context-dependent behaviours — manipulation, sycophancy, subtle bias — that resist automated scoring. No single mode is sufficient; rigorous evaluation triangulates across all three.

  - A central challenge is that absence of evidence is not evidence of absence. A model passing every test in a suite may still harbour dangerous behaviours that the suite failed to elicit, and capable models can behave differently when they infer they are being evaluated. This drives interest in held-out and continuously refreshed evaluation sets, in measuring dangerous-capability thresholds (such as uplift to bioweapon or cyberattack planning), and in evaluations designed to be robust to a model gaming the test.

  - Safety evaluation has moved from a research practice to a governance requirement. Frontier-model developers publish system cards documenting the evaluations performed and their results; emerging regulation such as the EU AI Act ties deployment permissions to risk-appropriate evaluation evidence; and government safety institutes have begun conducting independent evaluations. As models grow more capable and autonomous, the credibility and coverage of safety evaluation increasingly determines whether society can deploy them responsibly.
