public:: true

# Datasheets for Datasets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7134f58d9d23277f67e93a353bb9c80aecaaa7b5785437adb0613488046ab98e",
  "@type": "Page",
  "vc:slug": "datasheets-for-datasets",
  "title": "Datasheets for Datasets",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-documentation-standards",
      "vc:label": "AI Documentation Standards"
    },
    {
      "@id": "urn:visionflow:linked:model-cards",
      "vc:label": "Model Cards"
    },
    {
      "@id": "urn:visionflow:linked:dataset",
      "vc:label": "Dataset"
    },
    {
      "@id": "urn:visionflow:linked:data-governance",
      "vc:label": "Data Governance"
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
  "@id": "urn:ngm:class:datasheets-for-datasets",
  "@type": "Class",
  "label": "Datasheets for Datasets",
  "definition": "A documentation framework proposed by Gebru et al. in which every machine learning dataset is accompanied by a structured datasheet recording its motivation, composition, collection process, preprocessing, recommended uses, distribution, and maintenance. Modelled on the datasheets that accompany electronic components, the practice surfaces provenance, consent, and bias considerations at the data layer, enabling informed dataset selection, reproducibility, and accountability across the machine learning lifecycle.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-documentation-standards",
    "label": "AI Documentation Standards"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-documentation-standards",
        "label": "AI Documentation Standards"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-cards",
        "label": "Model Cards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dataset",
        "label": "Dataset"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
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
  - "A documentation framework proposed by Gebru et al. in which every machine learning dataset is accompanied by a structured datasheet recording its motivation, composition, collection process, preprocessing, recommended uses, distribution, and maintenance. Modelled on the datasheets that accompany electronic components, the practice surfaces provenance, consent, and bias considerations at the data layer, enabling informed dataset selection, reproducibility, and accountability across the machine learning lifecycle."

- ### Semantic Classification
  - owl-class:: governance:DatasheetsForDatasets
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[AI Documentation Standards]]
  - contrasts-with:: [[Model Cards]]
  - related-to:: [[Dataset]], [[Data Governance]]

- ### Content

  ## Definition

  **Datasheets for Datasets** is a documentation practice introduced by Timnit Gebru and colleagues in a 2018 preprint (published in *Communications of the ACM*, 2021). The proposal borrows an analogy from electronics: every component in the electronics industry ships with a datasheet stating its operating characteristics, test conditions, and recommended usage, yet the datasets on which machine learning systems depend routinely circulate with no equivalent record. The framework prescribes a structured questionnaire — roughly fifty questions organised around the dataset lifecycle — whose answers travel with the [[Dataset]] itself.

  The questions are grouped into seven sections. *Motivation* asks why and by whom the dataset was created and who funded it. *Composition* covers what the instances represent, sampling strategy, label quality, presence of personal or sensitive data, and known errors or redundancies. *Collection process* documents how the data were acquired, over what timeframe, whether subjects consented, and what ethical review occurred. *Preprocessing/cleaning/labelling* records transformations applied and whether raw data were retained. *Uses* states tasks the dataset is suited for and — importantly — uses that would be inappropriate. *Distribution* and *maintenance* cover licensing, access, versioning, and points of contact. Answering these questions forces creators to confront consent, representation, and bias decisions while they can still be corrected, and gives consumers the information needed to judge fitness for purpose.

  Within [[AI Documentation Standards]], datasheets occupy the data layer of a documentation stack whose model layer is occupied by [[Model Cards]]: a model card characterises a trained model's intended use and evaluated performance across conditions, whereas a datasheet characterises the corpus the model was trained or evaluated on. The two are complementary — a credible model card cites datasheets for its training data — and both feed system-level artefacts such as transparency reports and regulatory technical files.

  ## Current Landscape

  Datasheets became one of the most influential proposals in responsible AI, with tens of thousands of citations and direct descendants including Data Statements for NLP (Bender and Friedman), Data Nutrition Labels, Dataset Cards on Hugging Face (whose template explicitly incorporates datasheet questions), and Croissant, a machine-readable metadata vocabulary adopted by major dataset repositories. Conferences such as NeurIPS require dataset documentation in their datasets-and-benchmarks track, and the practice is embedded in corporate [[Data Governance]] pipelines at Google, Microsoft, and IBM in the form of internal data cards. Regulation is reinforcing the trend: the EU AI Act requires providers of high-risk systems to document training, validation, and testing data governance, and general-purpose model providers to publish summaries of training content — obligations for which datasheets are a natural compliance vehicle. Persistent challenges include documentation debt for web-scale crawled corpora, where answering composition and consent questions honestly is genuinely hard, incentives that reward dataset release speed over documentation quality, and keeping datasheets current as datasets are filtered, augmented, and merged downstream.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
