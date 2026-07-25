public:: true

# AISI Frontier AI Safety Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aisi-frontier-ai-safety-framework",
  "@type": "Page",
  "vc:slug": "aisi-frontier-ai-safety-framework",
  "title": "AISI Frontier AI Safety Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:aisi-frontier-ai-safety-framework",
  "@type": "Class",
  "label": "AISI Frontier AI Safety Framework",
  "definition": "A structured evaluation and oversight framework produced by the UK AI Safety Institute (AISI) to assess the catastrophic risks posed by frontier AI models prior to and following their public release. The framework specifies pre-deployment testing protocols, thresholds for dangerous capability uplift, and post-deployment monitoring obligations that developers of frontier models are expected to satisfy. It represents the UK government's primary technical instrument for operationalising AI safety commitments made at the Bletchley Park AI Safety Summit of November 2023.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"},
      {"@id": "urn:ngm:class:adversarial-testing", "label": "Adversarial Testing"},
      {"@id": "urn:ngm:class:model-evaluation", "label": "Model Evaluation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:frontier-ai", "label": "Frontier AI"},
      {"@id": "urn:ngm:class:frontier-model-forum", "label": "Frontier Model Forum"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[AISI Frontier AI Safety Framework]] is the technical and procedural instrument through which the UK AI Safety Institute conducts structured safety evaluations of [[Frontier AI]] models. It defines capability thresholds—particularly for biological, chemical, radiological, nuclear, and cyber-offence uplift—that trigger escalating levels of pre-deployment scrutiny. The framework draws on [[Red Teaming]], [[Adversarial Testing]], and standardised [[Model Evaluation]] suites to produce safety reports informing government decisions about [[AI Regulation]] and voluntary commitments from developers.

- ### Relationships
  - The framework operationalises the UK's [[AI Safety]] mandate by specifying concrete evaluation protocols that [[Frontier AI]] developers are expected to engage with prior to releasing new models. It interacts with the [[Frontier Model Forum]], a cross-industry initiative where major developers share safety research. [[Red Teaming]] and [[Adversarial Testing]] are core methodological components. The framework's outputs inform [[AI Regulation]] decisions domestically and serve as a reference for allied governments developing equivalent instruments.

- ### Content
  - The AISI was established in September 2023, ahead of the November 2023 Bletchley Park AI Safety Summit, where leading AI developers and twenty-eight governments signed the Bletchley Declaration committing to cooperative frontier AI risk assessment. AISI's framework emerged from that mandate, drawing on earlier work by Anthropic, DeepMind, and OpenAI on responsible scaling policies and their own internal capability thresholds.

  - The framework's technical architecture centres on a tiered evaluation process. Initial automated capability evaluations use standardised benchmarks to detect dangerous capability uplift; positive signals trigger structured human red-team exercises designed to elicit harmful outputs. Evaluation domains prioritise catastrophic risk categories—CBRN uplift, autonomous replication, and severe cyber-offence capabilities—before broader societal harm assessments. AISI publishes methodology notes and, selectively, capability evaluation findings.

  - Operationally, AISI has established bilateral memoranda of understanding with major frontier AI developers, gaining pre-release model access for evaluation. It has also collaborated with the US AI Safety Institute (AISI's American counterpart established by the Biden administration's October 2023 Executive Order) and the OECD on evaluation standardisation. The framework is designed to evolve as capabilities advance and evaluation techniques improve.

  - By 2024–2025, the framework has conducted evaluations of several major model releases and has published findings indicating that, while no model tested has exceeded dangerous capability thresholds, margins are narrowing in certain cyber-offence domains. The UK's decision in 2024 to rename AISI as the "AI Security Institute" reflected a broadening remit, and the framework continues to be updated to address agentic and multi-model system configurations that were not originally in scope.

