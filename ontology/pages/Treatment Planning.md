public:: true

# Treatment Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:12e39f846e657ad3b09603b75b74fe56b073bb0488dc96d881ced285bb5dc4b2",
  "@type": "Page",
  "vc:slug": "treatment-planning",
  "title": "Treatment Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:healthcare",
      "vc:label": "Healthcare"
    },
    {
      "@id": "urn:visionflow:linked:medical-imaging-ai",
      "vc:label": "Medical Imaging AI"
    },
    {
      "@id": "urn:visionflow:linked:clinical-decision-support",
      "vc:label": "Clinical Decision Support"
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
  "@id": "urn:ngm:class:treatment-planning",
  "@type": "Class",
  "label": "Treatment Planning",
  "definition": "The clinical process of deciding how a patient's condition will be treated: integrating diagnosis, imaging, patient history, and evidence-based guidelines into a specific course of therapy with defined goals, doses, sequencing, and review points; in domains such as radiotherapy and surgery it is a quantitative, imaging-driven activity that medical image analysis and medical imaging AI systems support but do not replace.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:healthcare",
    "label": "Healthcare"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:medical-image-analysis",
        "label": "Medical Image Analysis"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:medical-imaging-ai",
        "label": "Medical Imaging AI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:clinical-decision-support",
        "label": "Clinical Decision Support"
      },
      {
        "@id": "urn:ngm:class:personalised-medicine",
        "label": "Personalised Medicine"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The clinical process of deciding how a patient's condition will be treated: integrating diagnosis, imaging, patient history, and evidence-based guidelines into a specific course of therapy with defined goals, doses, sequencing, and review points; in domains such as radiotherapy and surgery it is a quantitative, imaging-driven activity that medical image analysis and medical imaging AI systems support but do not replace."

- ### Semantic Classification
  - owl-class:: ai:TreatmentPlanning
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Healthcare]]
  - uses:: [[Medical Image Analysis]]
  - depends-on:: [[Medical Imaging AI]]
  - related-to:: [[Clinical Decision Support]]

- ### Content

  ## Definition

  **Treatment planning** is the clinical activity that sits between diagnosis and therapy: given what is wrong with a patient, clinicians decide what will be done about it, in what order, at what intensity, and with what criteria for success. In its general form this covers drug selection and dosing, surgical strategy, rehabilitation programmes, and multidisciplinary care pathways for chronic and oncological disease, usually agreed at tumour boards or multidisciplinary team meetings and revisited as the patient responds.

  In its most technical form — radiotherapy treatment planning — it is an explicitly computational, imaging-driven optimisation problem. Planners contour the tumour target and organs-at-risk on CT or MRI, prescribe dose objectives, and use treatment planning systems to solve for beam angles, intensities, and fractionation that maximise dose to the target while sparing healthy tissue. Analogous imaging-led planning underpins surgical navigation, orthopaedic implant design, and interventional procedures. This is why the corpus's medical imaging pages point at treatment planning as the activity they support: automated segmentation, registration, and outcome prediction from [[Medical Image Analysis]] feed directly into the plan, and [[Medical Imaging AI]] systems increasingly draft contours and candidate dose plans for clinician review.

  The class is deliberately the *clinical process*, not any AI system that assists it. An imaging model "enables treatment planning" in the sense that it accelerates or sharpens the humans' plan; the plan itself remains a clinical decision owned by the care team and shaped by patient preference, comorbidity, and guideline evidence — the territory of [[Clinical Decision Support]] and personalised medicine.

  ## Current Landscape

  AI-assisted planning has moved into routine use fastest in radiation oncology: deep-learning auto-contouring is now deployed in many NHS and international centres, cutting segmentation time from hours to minutes, and automated or knowledge-based dose planning produces clinically acceptable plans for common sites with clinician sign-off. Regulators treat these tools as medical devices, and the human-approval step remains mandatory everywhere they are deployed.

  The frontier is adaptive and personalised planning: re-planning radiotherapy daily as anatomy shifts (MR-guided adaptive systems), genomically informed therapy selection in oncology, and multimodal models that combine imaging, pathology, and records to predict which plan a specific patient will tolerate and respond to. Persistent challenges are familiar from medical AI generally — validation across scanners and populations, automation bias in time-pressured clinics, auditability of plan recommendations, and integrating algorithmic outputs into accountable multidisciplinary decision-making.

  Recent developments (2025-2026):

  - The Royal College of Radiologists published *Guidance Statements on the Use of Auto-contouring in Radiotherapy* (Clin Oncol, 18 December 2025), setting UK consensus recommendations on model selection, clinical commissioning, day-to-day QA, and post-implementation monitoring — and stating that the healthcare professional approving auto-contours carries overall responsibility as the operator of a medical device.
  - Auto-segmentation is now the most clinically mature radiation-oncology AI application, with multiple FDA-cleared/CE-marked commercial platforms (Siemens Healthineers Organs RT, MVision Contour+, TheraPanacea Annotate, RadFormation AutoContour) routinely cutting contouring from hours to minutes while still requiring clinician review and edits (Frontiers in Oncology review, July 2026).
  - Most deployed radiation-oncology AI is regulated as Software as a Medical Device (SaMD) via FDA 510(k)/De Novo or equivalent pathways; the FDA's Predetermined Change Control Plan framework is being positioned to govern continuously adaptive AI (Frontiers in Oncology, 2026).
  - Deep-learning synthetic-CT generation (from MRI/CBCT) and AI auto-contouring have cut online MR-guided adaptive re-planning to under about six minutes in reported prostate workflows, enabling daily adaptation within clinical time constraints on platforms such as Elekta Unity and ViewRay MRIdian.
  - Commonly cited open challenges remain multi-institutional external validation, standardised benchmarking, drift monitoring, and transparent, uncertainty-aware models before broad autonomous deployment.

  **Sources**:
  - https://pubmed.ncbi.nlm.nih.gov/41519097/
  - https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2026.1912362/full
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC13067188/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
