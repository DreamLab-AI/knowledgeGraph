public:: true

# Bias in AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:85e52bb04f3c306d8de2dde3a037db3c2aceb09aed93d1878af8b4f7651446a2",
  "@type": "Page",
  "vc:slug": "bias-in-ai",
  "title": "Bias in AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-ethics",
      "vc:label": "AI Ethics"
    },
    {
      "@id": "urn:visionflow:linked:algorithmic-bias",
      "vc:label": "Algorithmic Bias"
    },
    {
      "@id": "urn:visionflow:linked:responsible-ai",
      "vc:label": "Responsible AI"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-data",
      "vc:label": "Synthetic Data"
    },
    {
      "@id": "urn:visionflow:linked:healthcare-ai",
      "vc:label": "Healthcare AI"
    },
    {
      "@id": "urn:visionflow:linked:content-moderation",
      "vc:label": "Content Moderation"
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
  "@id": "urn:ngm:class:bias-in-ai",
  "@type": "Class",
  "label": "Bias in AI",
  "definition": "The systematic and unfair skewing of artificial intelligence outputs against particular groups or outcomes, arising from unrepresentative or historically prejudiced training data, flawed problem framing, proxy variables, feedback loops, and deployment context. It manifests as measurable performance and treatment disparities — in face recognition, hiring, credit, healthcare and content moderation — and is addressed through bias auditing, fairness metrics, data curation, and governance obligations now codified in regulation such as the EU AI Act.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-ethics",
    "label": "AI Ethics"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:healthcare-ai",
        "label": "Healthcare AI"
      },
      {
        "@id": "urn:ngm:class:synthetic-data",
        "label": "Synthetic Data"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
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
  - "The systematic and unfair skewing of artificial intelligence outputs against particular groups or outcomes, arising from unrepresentative or historically prejudiced training data, flawed problem framing, proxy variables, feedback loops, and deployment context. It manifests as measurable performance and treatment disparities — in face recognition, hiring, credit, healthcare and content moderation — and is addressed through bias auditing, fairness metrics, data curation, and governance obligations now codified in regulation such as the EU AI Act."

- ### Semantic Classification
  - owl-class:: governance:BiasInAI
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[AI Ethics]]
  - related-to:: [[Algorithmic Bias]]
  - related-to:: [[Synthetic Data]]
  - bridges-to:: [[Responsible AI]]

- ### Content

  ## Definition

  **Bias in AI** names the family of systematic distortions by which machine learning systems produce unfair or skewed outcomes for particular demographic groups, viewpoints or situations. It is broader than any single mechanism: bias enters through training data that encodes historical discrimination (arrest records, past hiring decisions), through sampling that under-represents populations, through labels applied by inconsistent human annotators, through proxy features that correlate with protected attributes, and through feedback loops in which a deployed model shapes the very data it is later retrained on.

  The consequences are well documented. The Gender Shades study found commercial face analysis error rates over thirty times higher for darker-skinned women than lighter-skinned men; Amazon abandoned a CV-screening tool that penalised the word "women's"; the COMPAS recidivism debate exposed that plausible fairness criteria (calibration versus equalised error rates) are mathematically incompatible; and clinical risk tools in [[Healthcare AI]] have under-referred Black patients because healthcare cost was used as a proxy for need. Large language and image models add representational harms — stereotyped associations and skewed defaults — that surface at generation time in [[Content Moderation]] and creative applications alike.

  Mitigation spans the lifecycle rather than any single fix: careful problem framing and dataset documentation (datasheets, model cards), balanced or reweighted data — sometimes augmented with [[Synthetic Data]], which can itself import the generator's biases — in-training constraints on fairness metrics, post-hoc threshold adjustment, and continuous disaggregated evaluation in production. Because "fairness" admits multiple incompatible formalisations, choosing which disparity to minimise is a governance decision, not a purely technical one, which is why bias sits at the centre of [[Responsible AI]] practice and of regulation: the EU AI Act requires bias examination for high-risk systems, New York City's Local Law 144 mandates bias audits of hiring tools, and the UK's Equality Act 2010 applies to algorithmic decisions just as to human ones.

  ## Current Landscape

  - **Measurement**: disaggregated evaluation with metrics such as demographic parity, equalised odds, and calibration within groups; toolkits include IBM AIF360, Fairlearn, and Google's Fairness Indicators; LLM-specific benchmarks (BBQ, StereoSet, HolisticBias) probe representational bias.
  - **Regulation**: the EU AI Act (in force since 2024, obligations phasing in through 2026-27) makes bias testing and data-governance duties explicit for high-risk systems; the NIST AI Risk Management Framework and ISO/IEC 42001 embed bias controls in organisational governance; UK regulators (ICO, EHRC, FCA) apply existing discrimination and data-protection law to AI systems.
  - **Practice**: model cards and datasheets are standard release artefacts at major labs; red-teaming for biased behaviour is part of frontier-model evaluation; sector deployments in credit, insurance and employment increasingly require documented bias audits before go-live.
  - **Open problems**: intersectional groups too small for reliable measurement, bias amplification during fine-tuning and RLHF, unmeasured proxy discrimination, and the transfer of benchmark results to real deployment contexts.
