
Dataset curation is the deliberate selection, cleaning, documentation, and maintenance of data collections used to train and evaluate machine learning models. It encompasses sourcing and licensing, de-duplication, filtering of low-quality or harmful content, labelling and label auditing, balancing for coverage and representation, and versioning with provenance records. Curation quality is a first-order determinant of model behaviour: the same architecture trained on better-curated data is routinely more capable, safer, and easier to evaluate.

- ### Semantic Classification

- ### Content

  ## Definition

  **Dataset curation** is the craft of deciding what a model learns from. Every stage of a machine learning pipeline consumes a curated artefact: pre-training corpora scraped and filtered from the web, fine-tuning sets of demonstrations and preferences, and evaluation benchmarks whose integrity determines whether measured progress is real. Curation covers the full lifecycle — sourcing and licence clearance, cleaning and normalisation, de-duplication, quality and toxicity filtering, [[Data Labelling]] with inter-annotator agreement checks, balancing across domains, languages, and demographic coverage, and documentation and versioning so that any model can be traced back to the exact data that produced it.

  The field's centre of gravity shifted with the rise of large language models. Early web-scale corpora were assembled with light heuristic filtering; successive generations demonstrated that aggressive curation beats raw volume. Landmark results include the consistent gains from near-duplicate removal, quality-classifier filtering of Common Crawl (C4, RefinedWeb, FineWeb), and the "textbooks are all you need" line of work showing that small models trained on carefully selected and synthetic data can match far larger ones. Data-centric AI, articulated by Andrew Ng, made the same argument for applied ML: with modern architectures commoditised, iterating on the data usually yields more than iterating on the model.

  Curation is also where many of a model's legal and ethical properties are fixed. Copyright and licensing exposure, memorisation of personal data, benchmark contamination (test data leaking into training sets), and representational bias all enter through the corpus, and remediating them after training is far harder than excluding them during curation. Documentation standards — datasheets for datasets (Gebru et al.), data statements, and dataset cards — plus provenance tooling and content hashing for contamination checks have accordingly become standard practice in serious [[Artificial Intelligence Research]].

  ## Technical Details

  - **Filtering stack**: language identification, perplexity or classifier-based quality scoring, rule-based boilerplate stripping, NSFW/toxicity filters, and PII scrubbing, applied as a staged funnel over raw crawl data.
  - **De-duplication**: exact hashing plus near-duplicate detection (MinHash/LSH, suffix-array substring matching); reduces memorisation and improves compute efficiency per token.
  - **Data mixing and selection**: domain-weight optimisation (e.g. DoReMi), influence-function and classifier-based example selection, and curriculum ordering; synthetic data generation is now a curation instrument in its own right, with model-collapse risks managed by mixing ratios.
  - **Governance artefacts**: dataset versioning (DVC, lakehouse tables), datasheets and dataset cards, licence and provenance metadata, and held-out contamination canaries for [[Dataset]] integrity auditing.

  ## Current Landscape

  - **Training-data transparency is now law in the EU**: under Article 53(1)(d) of the EU AI Act, providers of general-purpose AI models must publish a public summary of training content using the mandatory template the European Commission's AI Office released on 24 July 2025; the obligation applies from 2 August 2025 (models placed on the market earlier have until 2 August 2027)
  - **Disclosure reaches curation decisions**: the template requires identification of large public datasets (those above 3% of public data per modality), confirmation of licensing agreements, a list of the top 10% of web domains crawled by volume (top 5% or 1,000 domains for SMEs), disclosure of synthetic-data use with source models, and a description of measures to respect rights reservations and remove illegal content
  - **Enforcement**: the AI Office may verify compliance and impose corrective measures from 2 August 2026, with fines of up to 3% of worldwide annual turnover or €15 million, whichever is higher
  - **Machine-readable curation metadata**: Croissant, the MLCommons JSON-LD vocabulary built on schema.org/Dataset, has become the interoperability layer for dataset documentation — generated automatically for Hugging Face Hub datasets and supported by Kaggle, OpenML, and Google Dataset Search
  - **Open curated corpora**: the FineWeb line of filtered Common Crawl corpora and successors continue to demonstrate that classifier-based quality filtering and aggressive de-duplication outperform raw volume, keeping curation quality the dominant lever on model capability

  **Sources**:
  - https://digital-strategy.ec.europa.eu/en/news/commission-presents-template-general-purpose-ai-model-providers-summarise-data-used-train-their
  - https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/european-commission-releases-mandatory-template-for-public-disclosure-of-ai-training-data
  - https://mlcommons.org/working-groups/data/croissant/

