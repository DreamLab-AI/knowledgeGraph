public:: true

# FDA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d668e4ffffe923db2109edf0842b145ce99faf20f4e48d2cc29e59f738190370",
  "@type": "Page",
  "vc:slug": "fda",
  "title": "FDA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-biology",
      "vc:label": "Synthetic Biology"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fda-gov",
      "vc:label": "https://www.fda.gov"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fda-gov-about-fda",
      "vc:label": "https://www.fda.gov/about-fda"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FDA"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fda",
  "@type": "Class",
  "label": "FDA",
  "definition": "The Food and Drug Administration (FDA) is a United States federal regulatory agency within the Department of Health and Human Services responsible for protecting public health by ensuring the safety, efficacy, and security of human and veterinary drugs, biological products, medical devices, the nation's food supply, cosmetics, and products that emit radiation. The agency enforces the Federal Food, Drug, and Cosmetic Act alongside a portfolio of additional statutes, conducting pre-market review and post-market surveillance across its regulated domains. Its approval pathways — including New Drug Applications, Biologics License Applications, and Premarket Approval — establish globally influential benchmarks that shape international pharmaceutical regulation, medical-device standards, and increasingly the governance of AI-enabled diagnostics and digital health software.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-agency",
      "label": "Regulatory Agency"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:department-of-health-and-human-services",
        "label": "Department of Health and Human Services"
      },
      {
        "@id": "urn:ngm:class:federal-government",
        "label": "Federal Government"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:center-for-drug-evaluation-and-research",
        "label": "Center for Drug Evaluation and Research"
      },
      {
        "@id": "urn:ngm:class:center-for-devices-and-radiological-health",
        "label": "Center for Devices and Radiological Health"
      },
      {
        "@id": "urn:ngm:class:center-for-biologics-evaluation-and-research",
        "label": "Center for Biologics Evaluation and Research"
      },
      {
        "@id": "urn:ngm:class:center-for-food-safety-and-applied-nutrition",
        "label": "Center for Food Safety and Applied Nutrition"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:clinical-trial",
        "label": "Clinical Trial"
      },
      {
        "@id": "urn:ngm:class:good-manufacturing-practice",
        "label": "Good Manufacturing Practice"
      },
      {
        "@id": "urn:ngm:class:regulatory-submission",
        "label": "Regulatory Submission"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:drug-approval",
        "label": "Drug Approval"
      },
      {
        "@id": "urn:ngm:class:medical-device-clearance",
        "label": "Medical Device Clearance"
      },
      {
        "@id": "urn:ngm:class:public-health-protection",
        "label": "Public Health Protection"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:federal-food-drug-and-cosmetic-act",
        "label": "Federal Food Drug and Cosmetic Act"
      },
      {
        "@id": "urn:ngm:class:21-cfr",
        "label": "21 CFR"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:randomised-controlled-trial",
        "label": "Randomised Controlled Trial"
      },
      {
        "@id": "urn:ngm:class:post-market-surveillance",
        "label": "Post-Market Surveillance"
      },
      {
        "@id": "urn:ngm:class:pharmacovigilance",
        "label": "Pharmacovigilance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:synthetic-biology",
        "label": "Synthetic Biology"
      },
      {
        "@id": "urn:ngm:class:digital-health",
        "label": "Digital Health"
      },
      {
        "@id": "urn:ngm:class:personalised-medicine",
        "label": "Personalised Medicine"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ema",
        "label": "EMA"
      },
      {
        "@id": "urn:ngm:class:mhra",
        "label": "MHRA"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-medical-devices",
        "label": "AI Medical Devices"
      },
      {
        "@id": "urn:ngm:class:software-as-a-medical-device",
        "label": "Software as a Medical Device"
      },
      {
        "@id": "urn:ngm:class:bioinformatics",
        "label": "Bioinformatics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:drug-regulation",
        "label": "Drug Regulation"
      },
      {
        "@id": "urn:ngm:class:bioethics",
        "label": "Bioethics"
      },
      {
        "@id": "urn:ngm:class:risk-benefit-analysis",
        "label": "Risk-Benefit Analysis"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:food-and-drug-administration",
      "label": "Food and Drug Administration"
    },
    {
      "@id": "urn:ngm:class:us-fda",
      "label": "US FDA"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fda:c5c82b45badc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d668e4ffffe923db2109edf0842b145ce99faf20f4e48d2cc29e59f738190370"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Synthetic Biology]]",
      "resolved": "urn:visionflow:linked:synthetic-biology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.fda.gov]]",
      "resolved": "urn:visionflow:linked:https-www-fda-gov",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.fda.gov/about-fda]]",
      "resolved": "urn:visionflow:linked:https-www-fda-gov-about-fda",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The **Food and Drug Administration** (FDA) is a United States federal [[Regulatory Agency]] operating under the [[Department of Health and Human Services]]. It is responsible for safeguarding public health by ensuring the safety, efficacy, and security of human drugs, biological products, [[Medical Devices]], the nation's food supply, cosmetics, and radiation-emitting products. Its mandate is enshrined in the [[Federal Food Drug and Cosmetic Act]] (FD&C Act) and a suite of companion statutes. The FDA's pre-market approval pathways and post-market enforcement activities set globally influential standards that shape [[Drug Regulation]], [[Clinical Trial]] design, [[Good Manufacturing Practice]], and the emerging governance of [[Software as a Medical Device]] and [[AI Medical Devices]].

- ### Overview
  - The FDA was formally established in 1906 under the Pure Food and Drug Act, gaining its modern form and name through the Federal Food, Drug, and Cosmetic Act of 1938, which was itself triggered by a mass poisoning incident involving a sulphanilamide elixir. Over the following decades, landmark legislation — including the Kefauver-Harris Amendment (1962, requiring proof of efficacy) and the Safe Medical Devices Act (1990) — expanded its remit substantially.
  - As of the mid-2020s, the agency employs thousands of scientists, doctors, engineers, and inspectors, and oversees product categories that collectively represent a significant share of the United States consumer economy.
  - The FDA operates as a [[Science-Based Regulation]] institution: approval decisions rest on systematic evidence synthesis from pre-clinical studies, [[Clinical Trial]] phases (I–III), and statistical analysis. Post-approval, it monitors adverse events through [[Pharmacovigilance]] systems such as MedWatch and FAERS (FDA Adverse Event Reporting System).
  - The agency increasingly interfaces with [[Digital Health]] and [[Artificial Intelligence]] domains, having published regulatory frameworks for [[Software as a Medical Device]] and [[AI Medical Devices]] including guidance on predetermined change control plans and algorithmic transparency.

- ### Key Components
  - #### Centres and Offices
    - **[[Center for Drug Evaluation and Research]] (CDER)** — reviews New Drug Applications (NDAs) and Abbreviated New Drug Applications (ANDAs) for generic drugs; oversees [[Pharmacovigilance]].
    - **[[Center for Devices and Radiological Health]] (CDRH)** — clears or approves [[Medical Devices]] via the 510(k) pathway, Premarket Approval (PMA), and De Novo classification; leads FDA's [[Software as a Medical Device]] policy.
    - **[[Center for Biologics Evaluation and Research]] (CBER)** — regulates vaccines, blood products, gene therapies, and cellular therapies, including emerging [[Synthetic Biology]] products.
    - **[[Center for Food Safety and Applied Nutrition]] (CFSAN)** — sets standards for food labelling, food additives, and dietary supplements.
    - **Office of Regulatory Affairs (ORA)** — conducts field inspections of manufacturing facilities, enforcing [[Good Manufacturing Practice]] compliance.
    - **Office of Criminal Investigations (OCI)** — investigates fraud and criminal violations within the FDA's jurisdiction.
  - #### Approval Pathways
    - **New Drug Application (NDA)** — standard pathway for novel small-molecule pharmaceuticals following successful [[Clinical Trial]] phases.
    - **Biologics License Application (BLA)** — pathway for biological products including monoclonal antibodies, vaccines, and cell-and-gene therapies.
    - **510(k) Premarket Notification** — clearance pathway for medical devices substantially equivalent to a predicate device; most common device route.
    - **Premarket Approval (PMA)** — rigorous approval pathway for Class III high-risk medical devices; requires independent valid scientific evidence of safety and effectiveness.
    - **Breakthrough Therapy Designation** — expedited development and review for drugs targeting serious conditions with preliminary evidence of substantial improvement.
    - **Accelerated Approval** — allows approval based on surrogate endpoints reasonably likely to predict clinical benefit, with required post-market confirmatory trials.
    - **Emergency Use Authorisation (EUA)** — enables rapid deployment of unapproved products during declared public health emergencies (used extensively during the COVID-19 pandemic for diagnostics, therapeutics, and vaccines).
  - #### Regulatory Instruments
    - **[[21 CFR]]** (Code of Federal Regulations, Title 21) — the comprehensive rulebook covering FDA-regulated products, including [[Good Manufacturing Practice]] requirements, labelling rules, and reporting obligations.
    - **Guidance Documents** — non-binding but practically influential documents articulating the FDA's current thinking on specific technical or scientific topics.
    - **Warning Letters and Import Alerts** — enforcement tools that can effectively remove non-compliant products from commerce.
    - **Consent Decrees** — court-ordered agreements that impose manufacturing or operational remedies on firms found in serious violation.

- ### Applications and Use Cases
  - #### Pharmaceutical Development
    - Pharmaceutical companies worldwide structure [[Drug Discovery]] and [[Clinical Trial]] programmes around FDA approval requirements, even for products primarily targeting non-US markets, because FDA approval often de-risks global regulatory filings.
    - The FDA's [[Randomised Controlled Trial]] evidence standards have defined the global gold standard for demonstrating drug efficacy.
    - [[Personalised Medicine]] and companion diagnostic co-development frameworks have been formalised through FDA guidance, requiring simultaneous drug-diagnostic approval in some oncology cases.
  - #### Medical Devices and Digital Health
    - The 510(k) pathway clears the vast majority of medical devices marketed in the US; its "substantial equivalence" standard is frequently debated in [[Bioethics]] and [[Risk-Benefit Analysis]] contexts.
    - CDRH's Digital Health Centre of Excellence leads policy development for [[AI Medical Devices]] — software that uses [[Machine Learning]] algorithms to drive clinical decision-making — addressing challenges of model drift, explainability, and continuous learning.
    - [[Software as a Medical Device]] (SaMD) governance applies the International Medical Device Regulators Forum (IMDRF) framework adapted to US statute, creating [[Standards]] convergence pressure globally.
  - #### Biotechnology and Synthetic Biology
    - CBER regulates gene-editing therapies (including CRISPR-based products), cell therapies, and increasingly products from [[Synthetic Biology]] pipelines.
    - The FDA's evolving framework for genetically modified organisms in food and agriculture intersects with [[Bioinformatics]] pipelines used to characterise novel proteins and allergenicity.
  - #### Public Health Emergencies
    - Emergency Use Authorisations during the H1N1 influenza pandemic (2009) and COVID-19 pandemic (2020–2022) demonstrated the agency's capacity for accelerated review under [[Risk-Benefit Analysis]] frameworks adapted for crisis conditions.
    - FDA's real-world evidence programmes — including use of electronic health record data — represent an interface between [[Data]] governance and regulatory decision-making.

- ### Relationships
  - partOf:: [[Department of Health and Human Services]]
  - partOf:: [[Federal Government]]
  - hasPart:: [[Center for Drug Evaluation and Research]]
  - hasPart:: [[Center for Devices and Radiological Health]]
  - hasPart:: [[Center for Biologics Evaluation and Research]]
  - hasPart:: [[Center for Food Safety and Applied Nutrition]]
  - requires:: [[Clinical Trial]]
  - requires:: [[Good Manufacturing Practice]]
  - requires:: [[Regulatory Submission]]
  - enables:: [[Drug Approval]]
  - enables:: [[Medical Device Clearance]]
  - enables:: [[Public Health Protection]]
  - standardizedBy:: [[Federal Food Drug and Cosmetic Act]]
  - standardizedBy:: [[21 CFR]]
  - uses:: [[Randomised Controlled Trial]]
  - uses:: [[Post-Market Surveillance]]
  - uses:: [[Pharmacovigilance]]
  - supports:: [[Synthetic Biology]]
  - supports:: [[Digital Health]]
  - supports:: [[Personalised Medicine]]
  - contrastsWith:: [[EMA]]
  - contrastsWith:: [[MHRA]]
  - bridgesTo:: [[AI Medical Devices]]
  - bridgesTo:: [[Software as a Medical Device]]
  - bridgesTo:: [[Bioinformatics]]
  - relatedTo:: [[Drug Regulation]]
  - relatedTo:: [[Bioethics]]
  - relatedTo:: [[Risk-Benefit Analysis]]

- ### Standards and Context
  - **[[21 CFR]] Part 11** — electronic records and electronic signatures; foundational for GMP data integrity in digitised pharmaceutical manufacturing.
  - **[[21 CFR]] Part 820** (Quality System Regulation, harmonised with ISO 13485:2016) — quality management for medical device manufacturers.
  - **ICH Guidelines** — the FDA participates in the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH), co-developing guidelines (E6 GCP, M7 genotoxic impurities, S9 oncology) accepted across US, EU, and Japan.
  - **IMDRF SaMD Framework** — the FDA helped develop the International Medical Device Regulators Forum framework for [[Software as a Medical Device]], which underpins its digital health guidance.
  - **DSCSA (Drug Supply Chain Security Act)** — requires electronic tracing of prescription drug products through the [[Supply Chain]], intersecting with [[Blockchain]] pilot programmes for serialisation.
  - **Real-World Evidence Framework** (21st Century Cures Act, 2016) — authorises FDA use of real-world data from electronic health records, claims, and registries to support regulatory decisions, creating new [[Data]] governance obligations.
  - **Comparator agencies**: the [[EMA]] (European Medicines Agency) and [[MHRA]] (UK Medicines and Healthcare products Regulatory Agency) provide parallel frameworks; FDA and EMA share information under confidentiality arrangements and pursue regulatory convergence on many review standards.

- ### Provenance
  - sources:: [[https://www.fda.gov]], [[https://www.fda.gov/about-fda]]
  - updated:: 2026-06-13
