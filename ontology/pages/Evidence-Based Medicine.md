public:: true

# Evidence-Based Medicine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:22f932b07e897b6ad0c6cb69da283a10153e61f1eb41944cc0ed50eba691e87b",
  "@type": "Page",
  "vc:slug": "evidence-based-medicine",
  "title": "Evidence-Based Medicine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:healthcare",
      "vc:label": "Healthcare"
    },
    {
      "@id": "urn:visionflow:linked:randomised-controlled-trial",
      "vc:label": "Randomised Controlled Trial"
    },
    {
      "@id": "urn:visionflow:linked:clinical-decision-support",
      "vc:label": "Clinical Decision Support"
    },
    {
      "@id": "urn:visionflow:linked:precision-medicine",
      "vc:label": "Precision Medicine"
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
  "@id": "urn:ngm:class:evidence-based-medicine",
  "@type": "Class",
  "label": "Evidence-Based Medicine",
  "definition": "The practice of making clinical decisions by conscientiously integrating the best available research evidence with clinical expertise and patient values. Formalised in the early 1990s, it ranks evidence by methodological rigour — systematic reviews and randomised controlled trials at the top, expert opinion at the bottom — and operationalises care through critical appraisal, clinical guidelines, and decision support, replacing tradition- and authority-based practice with explicit, auditable use of research findings.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:healthcare",
    "label": "Healthcare"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:randomised-controlled-trial",
        "label": "Randomised Controlled Trial"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:clinical-decision-support",
        "label": "Clinical Decision Support"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:precision-medicine",
        "label": "Precision Medicine"
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
  - "The practice of making clinical decisions by conscientiously integrating the best available research evidence with clinical expertise and patient values. Formalised in the early 1990s, it ranks evidence by methodological rigour — systematic reviews and randomised controlled trials at the top, expert opinion at the bottom — and operationalises care through critical appraisal, clinical guidelines, and decision support, replacing tradition- and authority-based practice with explicit, auditable use of research findings."

- ### Semantic Classification
  - owl-class:: governance:EvidenceBasedMedicine
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Healthcare]]
  - requires:: [[Randomised Controlled Trial]]
  - enables:: [[Clinical Decision Support]]
  - contrasts-with:: [[Precision Medicine]]

- ### Content

  ## Definition

  **Evidence-based medicine (EBM)** is the explicit, systematic use of current best research evidence in decisions about the care of individual patients, integrated with clinical judgement and patient preferences. The term was coined by Gordon Guyatt's group at McMaster University in 1991, building on Archie Cochrane's earlier critique that medicine lacked systematic summaries of which interventions actually work. David Sackett's canonical 1996 definition stresses the three-way integration: evidence alone does not make a decision, but no decision should be made in ignorance of it.

  EBM's methodological core is the *hierarchy of evidence*. Systematic reviews and meta-analyses of well-conducted trials sit at the apex, followed by individual [[Randomised Controlled Trial]] results, then cohort and case-control studies, case series, and finally mechanistic reasoning and expert opinion. Randomisation earns its position by eliminating confounding by indication — the systematic differences between patients who do and do not receive a treatment that bias observational comparisons. Modern refinements such as GRADE assess evidence *quality* across outcomes (risk of bias, imprecision, inconsistency, indirectness, publication bias) rather than relying on study design labels alone.

  The practice operates through an infrastructure: the Cochrane Collaboration's systematic reviews, critical-appraisal training, pre-registration of trials, reporting standards (CONSORT, PRISMA), and guideline bodies such as NICE in the UK that translate evidence into recommendations, explicitly weighing benefit, harm, and cost-effectiveness. Computerised [[Clinical Decision Support]] systems embed these guidelines at the point of care, and EBM supplies the validation standard against which such systems — including modern clinical AI — must themselves be judged.

  ## Current Landscape

  EBM's population-average logic is in productive tension with [[Precision Medicine]], which stratifies patients by genomic and biomarker profiles: an RCT estimates the average treatment effect in a trial population, whilst precision approaches ask what will work for *this* patient. The synthesis is emerging in stratified and adaptive trial designs (basket, umbrella, and platform trials such as RECOVERY), estimation of heterogeneous treatment effects, and the regulated use of real-world evidence from electronic health records to complement trials where randomisation is infeasible.

  Contemporary challenges include research waste and publication bias, the slow pace of guideline updating against exponential publication volume (motivating "living" systematic reviews), applicability of trial evidence to multimorbid patients excluded from trials, and the appraisal of AI-based interventions, for which trial standards (CONSORT-AI, SPIRIT-AI) have been developed. Automation of evidence synthesis — screening, extraction, and increasingly LLM-assisted appraisal — is an active research front, with the same EBM standards applied reflexively to the automation tools themselves.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
