public:: true

# Reproducibility
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:263bb723692d9a87974d158235545a69bda6f5a7a46547b400da9075d976ad00",
  "@type": "Page",
  "vc:slug": "reproducibility",
  "title": "Reproducibility",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:replication",
      "vc:label": "Replication"
    },
    {
      "@id": "urn:visionflow:linked:robustness",
      "vc:label": "Robustness"
    },
    {
      "@id": "urn:visionflow:linked:sensitivity",
      "vc:label": "Sensitivity"
    },
    {
      "@id": "urn:visionflow:linked:quality-assurance",
      "vc:label": "Quality Assurance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Reproducibility"
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
  "@id": "urn:ngm:class:reproducibility",
  "@type": "Class",
  "label": "Reproducibility",
  "definition": "Reproducibility is the property of a scientific or computational study whereby independent researchers can obtain the same or statistically equivalent results by applying the same methods and analysis procedures to the same dataset. It is a foundational criterion for the credibility and cumulative progress of empirical disciplines, distinguishing it from replicability, which extends the criterion to new data or new samples. Reproducibility failures arise from incomplete method documentation, software environment drift, undisclosed analytical flexibility, or data inaccessibility. Achieving it systematically requires version-controlled code, containerised execution environments, open datasets, and pre-registered analysis plans.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:quality-assurance",
      "label": "Quality Assurance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      },
      {
        "@id": "urn:ngm:class:containerisation",
        "label": "Containerisation"
      },
      {
        "@id": "urn:ngm:class:pre-registration",
        "label": "Pre-registration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
      },
      {
        "@id": "urn:ngm:class:scientific-trust",
        "label": "Scientific Trust"
      },
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:documentation",
        "label": "Documentation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:workflow-management",
        "label": "Workflow Management"
      },
      {
        "@id": "urn:ngm:class:statistical-analysis",
        "label": "Statistical Analysis"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      },
      {
        "@id": "urn:ngm:class:generalisability",
        "label": "Generalisability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sensitivity",
        "label": "Sensitivity"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:open-science",
        "label": "Open Science"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:benchmarking",
        "label": "Benchmarking"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:computational-reproducibility",
      "label": "Computational Reproducibility"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:reproducibility:16cb8a02338a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:263bb723692d9a87974d158235545a69bda6f5a7a46547b400da9075d976ad00"
  },
  "vc:resolutions": [
    {
      "raw": "[[Replication]]",
      "resolved": "urn:visionflow:linked:replication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robustness]]",
      "resolved": "urn:visionflow:linked:robustness",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensitivity]]",
      "resolved": "urn:visionflow:linked:sensitivity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quality Assurance]]",
      "resolved": "urn:visionflow:linked:quality-assurance",
      "kind": "ResolvedLink"
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
  - Reproducibility is the property of a scientific or computational study whereby independent researchers can obtain the same or statistically equivalent results by applying the same [[Analysis Pipeline]] and methods to the same [[Open Data]] or dataset. It is a foundational criterion for the credibility and cumulative progress of empirical research, distinguishing it from [[Replication]], which extends the criterion to new data or new experimental samples. Reproducibility underpins the self-correcting mechanism of science, supports [[Peer Review]], and is increasingly enforced through [[Open Science]] mandates and journal data policies. Failures commonly arise from incomplete method documentation, software environment drift, undisclosed analytical flexibility, or lack of [[Data Provenance]] tracking.

- ### Overview
  - Reproducibility sits at the intersection of [[Data Quality]], [[Scientific Trust]], and methodological rigour. A result is reproducible when a researcher — or an automated system — can re-run the original analysis on the original data and arrive at the same findings.
  - The concept is often conflated with [[Replication]] (using new, independent data to test the same hypothesis), but the two are distinct. Reproducibility is the minimum bar: given identical inputs, can we get identical outputs? Replication is a stronger test of an effect's generality.
  - Concern over the "reproducibility crisis" surfaced prominently in psychology, medicine, economics, and more recently in [[Machine Learning]] and [[Artificial Intelligence]], where benchmark results can be sensitive to random seeds, hardware, and undisclosed hyperparameter searches.
  - Modern practice addresses reproducibility through a combination of [[Version Control]], [[Containerisation]], open publication of code and data, and structured workflow tools that capture the full computational environment.

- ### Key Components
  - **Method Transparency**
    - Detailed, unambiguous description of procedures, analytical decisions, and software versions.
    - Requires precise [[Documentation]] of every preprocessing step, model configuration, and post-processing rule.
  - **Data Accessibility**
    - [[Open Data]] repositories (Zenodo, Figshare, institutional archives) ensure the exact dataset used in a study is available.
    - [[Metadata Management]] standards (Dublin Core, DataCite, schema.org) make datasets findable and interpretable.
  - **Code Availability**
    - Source code under [[Version Control]] (Git) with tagged releases corresponding to published results.
    - [[Continuous Integration]] pipelines verify that the codebase executes end-to-end without manual intervention.
  - **Environment Capture**
    - [[Containerisation]] (Docker, Singularity) or package-manager lockfiles (conda-lock, renv, poetry.lock) freeze the software stack.
    - Ensures results do not drift as library versions change.
  - **Workflow Automation**
    - [[Workflow Management]] tools (Snakemake, Nextflow, DVC, Luigi) encode analysis as directed acyclic graphs, making every step traceable and re-runnable.
    - Eliminates manual, undocumented interventions that are invisible to readers.
  - **Statistical Rigour**
    - [[Statistical Analysis]] practices including setting random seeds, reporting uncertainty, and avoiding outcome-dependent stopping rules.
    - [[Pre-registration]] of hypotheses and analysis plans before data collection closes off post-hoc flexibility (p-hacking, HARKing).
  - **Provenance Tracking**
    - [[Data Provenance]] systems (W3C PROV, RO-Crate, schema.org Dataset) record the lineage of each derived dataset back to raw inputs.
    - Enables auditing and partial re-execution when upstream data is updated.

- ### Mechanisms
  - **Computational Notebooks**
    - Jupyter, Quarto, and R Markdown interleave code, results, and prose in a single document, lowering the barrier to sharing executable analyses.
    - Limitations include hidden state and out-of-order execution, which can undermine reproducibility if notebooks are not run top-to-bottom in a clean kernel.
  - **Continuous Reproduction Testing**
    - [[Continuous Integration]] pipelines run the full analysis on every commit, detecting environment regressions early.
    - Projects like ReproducibleResearch.org and Papers With Code encourage attaching runnable code to publications.
  - **Registered Reports**
    - A journal format where methodology is peer-reviewed and accepted before data collection, guaranteeing publication regardless of outcome.
    - Directly addresses publication bias, which distorts the literature and makes failed replications invisible.
  - **Capsule Archives**
    - Code Ocean, Whole Tale, and similar platforms create self-contained computational capsules with a fixed environment, citable DOI, and one-click execution.

- ### Applications and Use Cases
  - **Biomedical Research**
    - Clinical trial analysis pipelines must be reproducible for regulatory submissions (FDA, EMA). [[Data Quality]] and audit trails are mandatory under GxP guidelines.
    - Pre-clinical studies have faced widespread reproducibility failures; initiatives such as ARRIVE guidelines and the Transparency and Openness Promotion (TOP) framework address this.
  - **Machine Learning and AI**
    - [[Model Evaluation]] on fixed benchmarks (ImageNet, GLUE, SWE-Bench) requires reproducible training runs, including identical random seeds and hardware specifications.
    - [[MLOps]] platforms (MLflow, Weights & Biases, DVC) track experiments, hyperparameters, and artefacts to ensure that a model version can be recreated exactly.
    - Concerns about benchmark overfitting and undisclosed tricks motivate reproducibility checklists at NeurIPS, ICML, and ICLR.
  - **Economics and Social Science**
    - Replication packages submitted alongside journal articles (American Economic Review policy) include raw data, cleaning scripts, estimation code, and output tables.
    - The [[Open Science]] movement has driven mandatory data deposition at journals including Nature, Science, and PLOS ONE.
  - **Software Engineering and DevOps**
    - Reproducible builds (Debian, GNU Guix, Nix) ensure that a software binary compiled at any point in time can be bit-for-bit recreated.
    - [[Continuous Integration]] and [[Containerisation]] are standard reproducibility mechanisms in production software supply chains.
  - **Spatial and Earth Science**
    - Geospatial analyses (remote sensing, climate modelling) depend on reproducible processing chains to compare results across time and institutions.
    - [[Data Provenance]] is critical when merging satellite, sensor, and survey datasets.

- ### Relationships
  - subClassOf:: [[Quality Assurance]]
  - requires:: [[Version Control]]
  - requires:: [[Open Data]]
  - requires:: [[Containerisation]]
  - requires:: [[Pre-registration]]
  - enables:: [[Robustness]]
  - enables:: [[Scientific Trust]]
  - enables:: [[Peer Review]]
  - dependsOn:: [[Data Provenance]]
  - dependsOn:: [[Metadata Management]]
  - dependsOn:: [[Documentation]]
  - uses:: [[Continuous Integration]]
  - uses:: [[Workflow Management]]
  - uses:: [[Statistical Analysis]]
  - contrastsWith:: [[Replication]]
  - contrastsWith:: [[Generalisability]]
  - relatedTo:: [[Sensitivity]]
  - relatedTo:: [[Transparency]]
  - relatedTo:: [[Open Science]]
  - relatedTo:: [[Data Quality]]
  - relatedTo:: [[Benchmarking]]
  - bridges-to:: [[Model Evaluation]]
  - bridges-to:: [[MLOps]]

- ### Standards and Context
  - **W3C PROV** — provenance data model providing a framework to represent and interchange [[Data Provenance]] information, adopted widely in scientific workflow systems.
  - **RO-Crate** — a community standard (based on schema.org) for packaging research objects with metadata, code, and data to enable reproducible sharing.
  - **DataCite Metadata Schema** — standard for citing and describing datasets in a way that supports reproducible referencing.
  - **TOP Guidelines (Transparency and Openness Promotion)** — eight modular standards covering data citation, sharing, and pre-registration, adopted by hundreds of journals.
  - **FAIR Principles** — Findable, Accessible, Interoperable, Reusable guidelines from the GO FAIR initiative, underpinning [[Open Science]] infrastructure and directly enabling reproducibility.
  - **ARRIVE Guidelines** — Animal Research: Reporting of In Vivo Experiments; a checklist improving reproducibility in preclinical biomedical research.
  - **NeurIPS / ICML Reproducibility Checklists** — machine learning venue policies requiring authors to report random seeds, compute budgets, dataset splits, and evaluation procedures.
  - **GNU Reproducible Builds Project** — a cross-distro effort to make software compilation deterministic, removing timestamps and build-path variability.
  - **ISO 5725** — international standard series on accuracy and precision of measurement methods, foundational to quantitative reproducibility in laboratory science.

- ### Challenges
  - **Environment Heterogeneity** — GPU drivers, BLAS libraries, and OS differences can cause floating-point non-determinism even when code and data are identical.
  - **Publication Incentives** — journals historically reward novelty over replication, creating structural pressure against investing in reproducibility.
  - **Data Privacy** — sensitive datasets (medical records, proprietary data) cannot be shared openly; [[Synthetic Data]] and [[Federated Learning]] offer partial mitigations.
  - **Long-term Archival** — software dependencies rot; DOI-linked code repositories may become inaccessible. Perma.cc, Software Heritage, and archive.org partially address this.
  - **Selective Reporting** — analysts may unconsciously (or consciously) choose which results to report based on outcome, making the published pipeline non-representative.
  - **Computational Scale** — large foundation model training runs are not reproducible in practice due to cost; community benchmarks and model cards partially compensate.

- ### Provenance
  - sources:: W3C PROV Ontology; RO-Crate specification; FAIR Principles (Wilkinson et al. 2016); TOP Guidelines; NeurIPS reproducibility checklist; ISO 5725
  - updated:: 2026-06-13
