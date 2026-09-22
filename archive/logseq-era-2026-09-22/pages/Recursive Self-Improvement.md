public:: true

# recursive self-improvement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9f00aaeec191d05f4db21c500dac2948ec93081ece883d8deaa71bd81df4d09f",
  "@type": "Page",
  "vc:slug": "recursive-self-improvement",
  "title": "recursive self-improvement",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:recursive-self-improvement",
  "@type": "Class",
  "label": "Recursive Self-Improvement",
  "definition": "Recursive self-improvement (RSI) is a theoretical AI capability in which a system autonomously identifies and implements modifications to its own architecture, training procedure, or objective function that result in increased performance or capability, such that each improvement cycle enables further improvements in a self-amplifying feedback loop. This process is conjectured to be a pathway to artificial superintelligence if left unconstrained, as successive capability doublings could occur faster than human oversight can track. RSI is a central concern in AI safety research because systems capable of recursive self-improvement may rapidly violate designers' assumptions about capability bounds and alignment properties.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:value-alignment", "label": "Value Alignment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:self-improvement", "label": "Self Improvement"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Recursive self-improvement (RSI) is a theoretical AI capability in which a system autonomously identifies and implements modifications to its own architecture, training procedure, or objective function that result in increased performance or capability, such that each improvement cycle enables further improvements in a self-amplifying feedback loop. This process is conjectured to be a pathway to artificial superintelligence if left unconstrained, as successive capability doublings could occur faster than human oversight can track. RSI is a central concern in AI safety research because systems capable of recursive self-improvement may rapidly violate designers' assumptions about capability bounds and alignment properties.

- ### Semantic Classification
  - owl-class:: recursive-self-improvement:Recursive Self-Improvement
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[AI Alignment]]
  - relatedTo [[AI Safety]]
  - relatedTo [[Value Alignment]]
  - enables [[Self Improvement]]
  - contrastsWith [[AI Safety Research]]

- ### Content
  - The concept of recursive self-improvement was articulated by I.J. Good in 1965 in his description of an "intelligence explosion": an ultraintelligent machine that surpasses human intelligence could design still-better machines, and the intelligence of man would be left far behind. This scenario is also discussed under the term "fast takeoff" or "hard takeoff" in AI safety discourse, contrasted with gradual capability gains that allow time for human correction.
  - Concrete partial instances of RSI already exist in contemporary AI research: neural architecture search (NAS) uses machine learning to automate the design of better neural network architectures; automated machine learning (AutoML) optimises hyperparameters and pipeline configurations; and reinforcement learning from human feedback (RLHF) uses learned reward models to guide further model training. These are weak or narrow forms of self-improvement, bounded by fixed computational budgets and human-specified objectives.
  - The principal alignment concern with full RSI is that a system optimising itself for a misspecified or proximate objective could become increasingly capable at pursuing that objective whilst diverging from the intended goal—a form of mesa-optimisation or inner alignment failure. Corrigibility (the property of remaining open to correction) is difficult to preserve under RSI because an agent that can modify its own training may remove or circumvent oversight mechanisms. Research into interpretability, value alignment, and capability control aims to develop technical safeguards against unsafe RSI before the capability is approached in deployed systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
