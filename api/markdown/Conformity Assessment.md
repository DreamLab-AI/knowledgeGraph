public:: true

# conformity assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ebd86cfa9180f7048c3454b5d52a1188500e66d565578c4ef6b9485988052cd",
  "@type": "Page",
  "vc:slug": "conformity-assessment",
  "title": "conformity assessment",
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
  "@id": "urn:ngm:class:conformity-assessment",
  "@type": "Class",
  "label": "Conformity Assessment",
  "definition": "Conformity Assessment is a structured set of procedures used to determine whether a product, system, service, or process meets specified requirements defined in regulations, standards, or contractual obligations. In the context of AI and digital systems, it encompasses technical documentation review, testing, auditing, risk analysis, and post-market surveillance carried out either by the developer as a self-assessment or by an accredited third-party notified body. Under frameworks such as the EU AI Act, ISO/IEC 17000-series standards, and NIST guidelines, the conformity declaration produced is a legal and operational precondition for market entry and continued deployment. It inherits procedural principles from product safety certification while adapting them to the probabilistic, data-dependent, and emergent behaviour of machine learning systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:technical-documentation",
        "label": "Technical Documentation"
      },
      {
        "@id": "urn:ngm:class:auditability",
        "label": "Auditability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:market-access",
        "label": "Market Access"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:robustness-testing",
        "label": "Robustness Testing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-jtc1-sc42",
        "label": "ISO/IEC JTC1/SC42"
      },
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      },
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:self-certification",
        "label": "Self-Certification"
      },
      {
        "@id": "urn:ngm:class:voluntary-disclosure",
        "label": "Voluntary Disclosure"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:market-surveillance",
        "label": "Post-Market Surveillance"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:certification",
        "label": "Certification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:model-cards",
        "label": "Model Cards"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:conformance-assessment",
      "label": "Conformance Assessment"
    },
    {
      "@id": "urn:ngm:class:compliance-assessment",
      "label": "Compliance Assessment"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Conformity Assessment is a structured body of procedures used to determine whether a [[Product Safety]] system, service, or process satisfies specified requirements drawn from regulations, technical standards, or contractual obligations. In the AI domain it encompasses [[Technical Documentation]] review, functional testing, [[Risk Assessment]], auditing, and ongoing [[Post-Market Surveillance]], carried out either by the developer through self-assessment or by an accredited third-party notified body. Under frameworks such as the [[EU AI Act]], [[ISO/IEC 17000]], and the [[NIST AI RMF]], the resulting conformity declaration is a legal precondition for market entry. The methodology is adapted from long-established product certification traditions—machinery, medical devices, telecommunications—to address the probabilistic, data-dependent, and dynamically evolving behaviour of [[Machine Learning]] systems.

- ### Overview
  - Conformity Assessment sits at the intersection of engineering rigour and regulatory policy. Its purpose is to give regulators, deployers, and end users justified confidence that an AI system behaves as specified, poses acceptable risks, and meets fundamental rights obligations.
  - The concept originates in the ISO/IEC 17000 vocabulary, which defines conformity assessment activities as testing, inspection, and certification performed against normative documents. Product safety regimes—EU machinery directive, medical devices regulation—established this infrastructure decades before AI-specific law emerged.
  - AI introduces distinctive challenges: outputs are probabilistic rather than deterministic, behaviour can shift when data distributions change ([[Distribution Shift]]), and the system may exhibit emergent capabilities not present at design time. These properties require test strategies beyond classical pass/fail product testing.
  - Regulatory bodies have responded by layering AI-specific requirements onto existing conformity infrastructure, for example by requiring [[Explainability]] evidence, dataset documentation, and [[Bias Testing]] as conformity prerequisites.

- ### Key Components
  - **Risk Classification** — determining whether a system is minimal, limited, high-risk, or unacceptable risk under applicable law; the pathway varies accordingly.
    - High-risk AI under the EU AI Act triggers mandatory third-party assessment by a [[Notified Body]].
    - Lower-risk systems may follow internal self-assessment, but must still compile required documentation.
  - **Technical Documentation** — a structured dossier covering system purpose, architecture, training data, performance metrics, known limitations, and risk mitigations; the primary artefact inspected during assessment.
  - **Testing and Evaluation** — functional testing, [[Robustness Testing]], [[Bias Testing]], [[Adversarial Testing]], and accuracy benchmarking against predefined thresholds.
    - [[Model Evaluation]] methods include held-out test sets, red-teaming, and statistical verification procedures.
  - **Risk Assessment** — systematic identification, estimation, and mitigation of potential harms to individuals and society, drawing on [[ISO 31000]] and sector-specific risk frameworks.
  - **[[Transparency]] and [[Explainability]]** — documentary evidence that model behaviour can be inspected; required because auditors must trace failure modes and bias sources.
  - **Data Governance Documentation** — provenance, labelling methodology, representativeness, and retention policies for training datasets; linked to [[Data Governance]] and [[Data Lineage]].
  - **Post-Market Surveillance** — mandatory ongoing monitoring after deployment to detect distribution shift, emergent failures, and novel misuse scenarios; feeding back into periodic reassessment cycles.
  - **[[Certification]] and Declaration** — formal issuance of an EU Declaration of Conformity (DoC) or equivalent; affixes CE marking; constitutes legal attestation of compliance.
  - **Notified Bodies and Accreditation** — independent organisations designated by national authorities to carry out third-party assessments; their own competence is verified through [[Accreditation]] against ISO/IEC 17065 (product certification) or ISO/IEC 17020 (inspection).

- ### Mechanisms
  - **Self-Assessment Path** — developer documents conformity internally, suitable for limited-risk or non-high-risk systems; accountability remains with the provider.
  - **Third-Party Audit Path** — mandatory for high-risk systems listed in Annex III of the EU AI Act (biometric ID, critical infrastructure, education, employment, law enforcement uses); requires engagement with an accredited [[Notified Body]].
  - **Module-Based Assessment** (New Legislative Framework) — borrowed from EU product regulation; conformity is built from interchangeable assessment modules (design phase, type examination, quality management), allowing flexible combinations.
  - **Continuous Monitoring Loop** — post-deployment surveillance feeds incident data back to the provider; serious incidents trigger mandatory reporting and potential reassessment.

- ### Applications and Use Cases
  - **Healthcare AI** — diagnostic imaging systems, clinical decision support tools, and risk-scoring algorithms require conformity assessment aligned with the EU Medical Devices Regulation and AI Act intersection.
  - **Autonomous Vehicles** — safety-critical perception and planning systems undergo conformity assessment against UN-ECE regulations and domain-specific functional safety standards (ISO 26262).
  - **Financial Services** — credit-scoring and fraud-detection models are assessed for fairness, explainability, and robustness under EBA/EIOPA guidelines and national competent authority requirements.
  - **Employment and HR AI** — CV screening and performance evaluation tools listed in EU AI Act Annex III require third-party assessment for non-discrimination and transparency.
  - **Law Enforcement** — biometric identification systems face the strictest conformity requirements; some uses are prohibited entirely.
  - **General-Purpose AI Models** — large foundation models above defined FLOP thresholds must undergo safety and capability evaluations including [[Red Teaming]] and systemic risk assessment.
  - **Industrial Robots and Safety Systems** — conformity assessment under the Machinery Directive and new Machinery Regulation; AI-enabled components must demonstrate functional safety integration.

- ### Relationships
  - requires:: [[Risk Assessment]]
  - requires:: [[Transparency]]
  - requires:: [[Technical Documentation]]
  - requires:: [[Auditability]]
  - enables:: [[Market Access]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Trustworthy AI]]
  - supports:: [[AI Regulation]]
  - supports:: [[AI Safety]]
  - supports:: [[Consumer Protection]]
  - uses:: [[Explainability]]
  - uses:: [[Model Evaluation]]
  - uses:: [[Bias Testing]]
  - uses:: [[Robustness Testing]]
  - implements:: [[EU AI Act]]
  - implements:: [[ISO/IEC 17000]]
  - implements:: [[NIST AI RMF]]
  - standardizedBy:: [[ISO/IEC JTC1/SC42]]
  - standardizedBy:: [[ETSI]]
  - standardizedBy:: [[NIST]]
  - contrastsWith:: [[Self-Certification]]
  - contrastsWith:: [[Voluntary Disclosure]]
  - dependsOn:: [[Post-Market Surveillance]]
  - dependsOn:: [[Data Governance]]
  - relatedTo:: [[Certification]]
  - relatedTo:: [[Accreditation]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Model Cards]]

- ### Standards and Regulatory Context
  - **ISO/IEC 17000:2020** — foundational vocabulary for conformity assessment activities; defines testing, inspection, certification, and accreditation.
  - **ISO/IEC 17065** — requirements for bodies certifying products, processes, and services; governs notified bodies performing AI product certification.
  - **ISO/IEC 17020** — requirements for inspection bodies; applied where assessment takes the form of inspection rather than product testing.
  - **EU AI Act (Regulation 2024/1689)** — primary AI-specific conformity assessment law in the EU; introduces risk tiers, notified body designation, and mandatory technical documentation.
  - **ISO/IEC 42001** — AI management system standard from [[ISO/IEC JTC1/SC42]]; provides organisational conformity infrastructure complementing product-level assessment.
  - **ISO/IEC TR 24028, 24029, 24368** — technical reports on AI trustworthiness, bias, and societal concerns; informative inputs to assessment criteria.
  - **NIST AI Risk Management Framework (AI RMF 1.0)** — US voluntary framework structuring AI risk governance; used by assessors as a reference for evaluation methodology.
  - **ETSI EN 303 645** — consumer IoT security; exemplifies how conformity assessment is embedded in IoT standards with testable criteria.
  - **New Legislative Framework (NLF)** — EU product regulation architecture underpinning the module-based conformity approach adopted by the AI Act.
  - **CEN/CENELEC JTC 21** — European standardisation committee developing harmonised standards in support of the AI Act, whose publication triggers presumption of conformity.
  - **Harmonised Standards** — once published in the Official Journal of the EU, technical standards from CEN/CENELEC JTC 21 or ISO/IEC create a legal presumption of conformity for covered AI Act requirements.

- ### Challenges and Limitations
  - **Non-Determinism** — stochastic model outputs make reproducible testing difficult; statistical confidence intervals must replace binary pass/fail in many test criteria.
  - **[[Distribution Shift]]** — a system conforming at deployment may fail to conform as real-world input distributions evolve; motivates mandatory post-market surveillance.
  - **Opacity of Large Models** — foundation models with billions of parameters resist internal audit; [[Explainability]] tools remain insufficient for exhaustive conformity evidence.
  - **Speed of Innovation** — regulatory frameworks and harmonised standards lag behind model capability advances; gap periods create legal uncertainty.
  - **Notified Body Capacity** — the pool of accredited bodies with AI expertise is limited relative to anticipated demand; creates assessment bottlenecks.
  - **Cross-Jurisdictional Complexity** — AI systems deployed globally must satisfy EU, US, UK, and Asian conformity requirements simultaneously; divergent criteria impose compliance overhead.
  - **Third-Party Confidentiality Tensions** — providers may resist disclosing proprietary model details to auditors; sandboxed testing environments and model escrow mechanisms are proposed mitigations.

- ### Current Landscape (2026)
  - The EU AI Act made conformity assessment its central compliance gate for high-risk systems (Articles 40-49), with the governance and notified-body provisions applying from 2 August 2025 and bodies registered under NANDO (provisional AI code 9900); the bulk of high-risk obligations follow from 2 August 2026.
  - On 30 October 2025 prEN 18286 (Quality Management System for EU AI Act Regulatory Purposes, supporting Article 17) became the first AI harmonised standard to reach Public Enquiry, and by mid-2026 had moved to Formal Vote by national standardisation bodies; the companion prEN 18228 (AI Risk Management, Article 9) and prEN 18283 (bias management) were under Public Enquiry through July 2026.
  - CEN-CENELEC JTC 21's harmonised-standards programme under mandate M/606 is significantly delayed: as of August 2026 no JTC 21 standard has an Official Journal reference, so the Article 40 presumption of conformity is not yet active and the Commission has not adopted Article 41 common specifications, forcing every Annex III provider through the full Article 43 route (Annex VI internal control or Annex VII notified-body assessment) without the shortcut, with OJ-cited standards not expected before 2027-2028.
  - For the ecodesign/DPP track the Commission adopted Implementing Decision (EU) 2026/1736 on 14 July 2026, citing the first six Digital Product Passport harmonised standards in the OJEU (EN 18216 data interchange, EN 18219 unique identifier, EN 18220 data carrier, EN 18221 storage, EN 18222 API, EN 18223 interoperability), granting presumption of conformity under ESPR Articles 10-11; the DPP registry launched in July 2026 with mandatory battery passports from February 2027.
  - The Commission is reworking the horizontal machinery of conformity assessment: the Omnibus IV package and COM(2025) 504 (May 2025) digitalise the EU Declaration of Conformity across seven NLF regulations (ESPR, machinery, PPE, radio equipment, batteries and others), and a broader New Legislative Framework review under the planned "European Product Act" is due for proposal in Q3 2026 after a public consultation that ran 12 November 2025 to 4 February 2026.
  - Key players remain the German TÜV bodies (SÜD, Rheinland, NORD), Bureau Veritas, SGS, DEKRA and DNV as (prospective) AI notified bodies accredited under EN ISO/IEC 17065, national accreditation bodies such as DAkkS and COFRAC, and ISO/IEC JTC 1/SC 42 plus ISO CASCO, which is revising its toolbox standards including ISO/IEC 17024 (persons certification) and ISO/IEC 17007.
  - Open challenges as of 2026 are the standards-versus-deadline gap (providers forced into costly third-party assessment because self-certification is unavailable until standards are OJ-cited), a shortage of AI-competent auditors and designated bodies, overlap and sequencing with the Cyber Resilience Act (mandatory from December 2027) and its ETSI standards, and the shift of the burden of technical conformity into digital declarations and product passports as the canonical container of legality.

- ### References
  - 1. European Commission — Shaping Europe's Digital Future (2026). Standardisation of the AI Act. https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation
  - 2. sota.io (2026). EU AI Act CEN-CENELEC Harmonised Standards Delay — August 2026 Conformity Assessment Developer Guide. https://sota.io/blog/eu-ai-act-cen-cenelec-harmonised-standards-delay-august-2026-conformity-assessment-developer-guide
  - 3. European Commission — Single Market, Industry (2026). Commission Implementing Decision (EU) 2026/1736 of 14 July 2026 on harmonised standards for digital product passports. https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/digital-product-passport-dpp_en
  - 4. European Parliament — Legislative Train Schedule (2026). New Legislative Framework review (European Product Act). https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-new-legislative-framework-review
  - 5. Cooley (2025). Proposed Revision of EU's New Legislative Framework for CE-Marked Products and Rollout of Digital Product Passports. https://products.cooley.com/2025/10/24/proposed-revision-of-eus-new-legislative-framework-for-ce-marked-products-looking-to-expand-rollout-of-digital-product-passports/

- ### Provenance
  - sources:: ISO/IEC 17000:2020; EU AI Act (Regulation 2024/1689); NIST AI RMF 1.0; ISO/IEC 42001:2023; CEN/CENELEC JTC 21 work programme
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
