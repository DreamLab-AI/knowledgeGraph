public:: true

# AI Documentation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa15a3413f00930b9a25f7ac12e56fceeb979323444cc68c98f7aba6a915cb4c",
  "@type": "Page",
  "vc:slug": "ai-documentation",
  "title": "AI Documentation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:documentation",
      "vc:label": "Documentation"
    },
    {
      "@id": "urn:visionflow:linked:ai-accountability",
      "vc:label": "AI Accountability"
    },
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:training-data",
      "vc:label": "Training Data"
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
  "@id": "urn:ngm:class:ai-documentation",
  "@type": "Class",
  "label": "AI Documentation",
  "definition": "The structured transparency artefacts that record what an AI system is, how it was built, and how it behaves — model cards, datasheets for datasets, system cards, technical files, and decision logs. AI documentation is the evidentiary substrate of AI accountability: it lets developers, deployers, auditors, and regulators trace capabilities, limitations, training data provenance, and evaluation results, and is increasingly mandated by regimes such as the EU AI Act.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:documentation",
    "label": "Documentation"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ai-accountability",
        "label": "AI Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:auditability",
        "label": "Auditability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
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
  - "The structured transparency artefacts that record what an AI system is, how it was built, and how it behaves — model cards, datasheets for datasets, system cards, technical files, and decision logs. AI documentation is the evidentiary substrate of AI accountability: it lets developers, deployers, auditors, and regulators trace capabilities, limitations, training data provenance, and evaluation results, and is increasingly mandated by regimes such as the EU AI Act."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiDocumentation
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Documentation]]
  - enables:: [[AI Accountability]]
  - enables:: [[Transparency]]
  - related-to:: [[Training Data]]

- ### Content

  ## Definition

  **AI Documentation** is the family of structured artefacts that make an AI system legible to people who did not build it. Unlike general software [[Documentation]], which primarily explains how to use or maintain code, AI documentation must capture properties that emerge from data and training rather than from explicit programming: what data the model learned from and under what rights, how it was evaluated and on which populations, where it performs poorly, what uses are intended and which are out of scope, and what risks were identified and mitigated.

  The canonical genres emerged from research practice between 2018 and 2021. *Model cards* (Mitchell et al., 2019) summarise a model's intended use, evaluation results disaggregated across demographic groups, and known limitations. *Datasheets for datasets* (Gebru et al., 2021) interrogate a dataset's motivation, composition, collection process, consent basis, and recommended uses. *System cards* extend the idea from single models to deployed systems with retrieval, filtering, and human-in-the-loop components. Around these sit factsheets, risk registers, evaluation reports, and decision logs recording how design trade-offs were resolved.

  Documentation is the practical mechanism through which [[AI Accountability]] becomes checkable: an accountability claim without documentation is unfalsifiable, whereas a model card, a [[Training Data]] summary, and an audit trail give internal reviewers, external auditors, and regulators something to verify against. This is why accountability frameworks consistently list documentation as a hard requirement rather than good practice.

  ## Current Landscape

  Regulation has converted AI documentation from voluntary hygiene into legal obligation. The EU AI Act requires providers of high-risk systems to maintain extensive technical documentation (Annex IV) and obliges general-purpose model providers under Article 53 to keep technical files and publish training-content summaries. The GPAI Code of Practice, NIST's AI Risk Management Framework, ISO/IEC 42001, and the UK's algorithmic transparency recording standard all embed documentation duties, while procurement processes increasingly demand model cards as a condition of purchase.

  Industry tooling has followed: Hugging Face made model cards a repository norm with structured templates and automated population; major laboratories publish system cards alongside frontier releases; and MLOps platforms generate evaluation documentation from pipeline metadata rather than by hand. The unresolved tensions are freshness (documentation drifting out of date as models are retrained), depth versus trade secrecy (training-data disclosure meeting IP and privacy resistance), and verification — a document is only as trustworthy as the process that audits it against the system it describes.
