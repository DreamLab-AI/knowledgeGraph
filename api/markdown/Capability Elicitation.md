public:: true

# Capability Elicitation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:capability-elicitation",
  "@type": "Page",
  "vc:slug": "capability-elicitation",
  "title": "Capability Elicitation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:capability-elicitation",
  "@type": "Class",
  "label": "Capability Elicitation",
  "definition": "Capability elicitation is the systematic process of designing prompts, scaffolding, and evaluation protocols to uncover the true maximum performance of an AI model on a given task or domain, distinguishing what a model is genuinely capable of from what it demonstrates under default conditions. It is a central concern in AI safety research and frontier model evaluation because models may possess latent capabilities — such as the ability to reason about dangerous knowledge, produce deceptive outputs, or autonomously pursue goals — that are not revealed by standard benchmarks but can be surfaced through carefully constructed elicitation methods including chain-of-thought prompting, multi-step scaffolding, and adversarial jailbreaking.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:model-evaluation", "label": "Model Evaluation"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:alignment", "label": "Alignment"},
      {"@id": "urn:ngm:class:safety-evaluation", "label": "Safety Evaluation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:safety-assessment", "label": "Safety Assessment"},
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Capability Elicitation]] is the practice of actively probing an AI model to determine the upper bound of its abilities on specified tasks, particularly those with [[AI Safety]] implications. Standard evaluation benchmarks may underestimate model capabilities because they test default generation behaviour rather than the model's performance when given optimal scaffolding. Elicitation techniques include few-shot prompting, chain-of-thought reasoning, tool-augmented scaffolding, and [[Red Teaming]], all aimed at revealing whether a model possesses capabilities — such as autonomous replication, cyberoffensive reasoning, or persuasion at scale — that fall into safety-relevant categories. The distinction between elicited and un-elicited capabilities is central to [[Alignment]] research and frontier model deployment decisions.

- ### Relationships
  - [[Capability Elicitation]] is a specialised subdomain of [[Model Evaluation]] focused on the upper performance boundary rather than average-case behaviour. It draws heavily on [[Red Teaming]] methodologies and informs [[Safety Assessment]] and [[Safety Evaluation]] processes. Its results feed directly into [[Model Evaluation Results]] that safety teams and regulators use to determine deployment thresholds. The practice is fundamentally motivated by [[AI Safety]] and [[Alignment]] concerns about models whose dangerous capabilities exceed what their developers anticipated.

- ### Content
  - The concept of capability elicitation became prominent in the AI safety community around 2021-2022 as large language models demonstrated unexpected emergent abilities — skills that appeared discontinuously as model scale crossed certain thresholds. Early GPT-3 evaluations noted that the model appeared incapable of arithmetic, yet few-shot prompting with worked examples elicited reliable multi-digit arithmetic. This observation raised the question of whether safety-relevant capabilities (such as synthesising pathogen information or compromising software systems) might similarly be latent but elicitable in models that passed surface-level safety evaluations.

  - Technically, elicitation involves systematic variation of prompt structure, context length, tool access, and reasoning format. Chain-of-thought elicitation — prompting models to reason step-by-step before producing a final answer — consistently improves measured performance on reasoning tasks. Scaffolded elicitation adds iterative refinement loops, external tool calls (code execution, web search), or decomposition into sub-tasks. Adversarial elicitation (jailbreaking) tests whether safety-relevant refusals are robust or merely surface-level policies that collapse under sufficiently crafted inputs. The gap between standard evaluation scores and best-elicitation scores is itself an important safety metric.

  - Major AI laboratories including Anthropic, OpenAI, Google DeepMind, and Meta have developed internal capability elicitation frameworks as part of their model safety programmes. Anthropic's Responsible Scaling Policy (RSP) and OpenAI's Preparedness Framework both specify that models must be evaluated for dangerous capabilities under best-effort elicitation before deployment decisions are made. The UK AI Safety Institute and the US AI Safety Institute have developed standardised elicitation protocols to provide independent government-level assessments of frontier models.

  - By 2024-2025, capability elicitation has become a standard component of AI governance. Evaluators distinguish between "naive elicitation" (standard prompting), "low-effort elicitation" (basic chain-of-thought), and "high-effort elicitation" (expert-designed scaffolding with external tools). The field faces ongoing methodological challenges: elicitation methods themselves improve over time, meaning a model deemed safe under 2024 elicitation techniques may be found to have previously undetected capabilities as techniques advance. This creates pressure for continuous re-evaluation rather than one-time safety certification.