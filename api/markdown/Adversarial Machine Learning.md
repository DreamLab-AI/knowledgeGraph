public:: true

# Adversarial Machine Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:adversarial-machine-learning",
  "@type": "Page",
  "vc:slug": "adversarial-machine-learning",
  "title": "Adversarial Machine Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:adversarial-machine-learning",
  "@type": "Class",
  "label": "Adversarial Machine Learning",
  "definition": "Adversarial machine learning is the study of attacks that exploit vulnerabilities in machine learning models and the development of defences against them, encompassing threats across the model lifecycle including training-time data poisoning, evasion attacks at inference time, model inversion, and membership inference. Attackers craft carefully perturbed inputs or manipulate training data to cause misclassification, extract sensitive information, or degrade model performance, whilst defenders develop robust training procedures, certified defences, and detection mechanisms. The field spans both offensive security research and the development of trustworthy AI systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-security", "label": "AI Security"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:adversarial-attacks", "label": "Adversarial Attacks"},
      {"@id": "urn:ngm:class:data-poisoning", "label": "Data Poisoning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"},
      {"@id": "urn:ngm:class:model-robustness", "label": "Model Robustness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-inversion", "label": "Model Inversion"},
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"},
      {"@id": "urn:ngm:class:adversarial-testing", "label": "Adversarial Testing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Adversarial machine learning investigates how machine learning models can be deliberately deceived, degraded, or exploited by malicious actors, and how such attacks can be prevented or mitigated. The field encompasses [[Adversarial Attacks]] that perturb inputs at inference time—often by imperceptible amounts that nonetheless cause confident misclassification—and [[Data Poisoning]] attacks that corrupt training data to embed backdoors or degrade generalisation performance. Defences include [[Adversarial Robustness]] training methods, certified defences with provable guarantees, [[Differential Privacy]] mechanisms that limit information leakage, and [[Model Inversion]] countermeasures that protect training data privacy.

- ### Relationships
  - Adversarial machine learning sits within the broader [[AI Security]] domain and overlaps with [[Adversarial Testing]] (red-teaming) practices used in AI safety evaluation. [[Data Poisoning]] and backdoor attacks operate at training time, while evasion attacks and [[Model Inversion]] target deployed models. [[Differential Privacy]] is a key defence mechanism that quantifiably limits the information an adversary can extract about individual training examples. [[Model Robustness]] research seeks to close the gap between standard accuracy and accuracy under adversarial perturbation.

- ### Content
  - The field was crystallised by Szegedy et al.'s 2013 paper demonstrating that deep neural networks could be fooled by small, human-imperceptible perturbations to images—so-called adversarial examples. Goodfellow et al.'s Fast Gradient Sign Method (FGSM, 2015) provided an efficient algorithm for generating such perturbations and proposed adversarial training as a defence. Carlini and Wagner's C&W attack (2017) subsequently broke many proposed defences, establishing the pattern of an arms race between attack and defence that characterises the field. Concurrently, Tramèr et al. demonstrated model stealing via black-box API queries, extending the threat model beyond white-box access.

  - Technically, adversarial attacks are formalised as constrained optimisation problems: find a perturbation δ such that the perturbed input x+δ causes the model to output an incorrect label, subject to a constraint on the magnitude of δ under an Lp norm. Gradient-based attacks (PGD, AutoAttack) are most powerful in the white-box setting; transfer-based and query-efficient attacks address black-box deployments. Training-time attacks include clean-label poisoning, backdoor trojan injection (e.g., BadNets), and gradient-matching attacks that influence the model without modifying labels. Certified defences using randomised smoothing provide provable accuracy guarantees under L2-bounded perturbations.

  - Applications of adversarial machine learning research extend across security-critical domains: adversarial patches that defeat object detection in autonomous vehicles and surveillance systems, adversarial perturbations that evade malware classifiers, poisoning attacks on federated learning systems, and face recognition evasion. Conversely, the field produces defensive infrastructure deployed in production AI systems including certified robustness layers, input preprocessing defences, and anomaly detectors that flag adversarially suspicious inputs.

  - By 2024–2025, adversarial machine learning has expanded its scope to include large language models, multimodal systems, and agentic AI. Prompt injection attacks against LLMs—where adversarial instructions are embedded in user inputs or retrieved documents—have emerged as a critical threat to deployed AI assistants. Jailbreaking, indirect prompt injection, and multi-modal adversarial attacks (adversarial images that mislead vision-language models) are active research areas. Regulatory frameworks including the EU AI Act and NIST AI RMF explicitly address adversarial robustness requirements for high-risk AI systems, elevating the field from academic research to compliance obligation.

