
Optical Character Recognition (OCR) is a technology that converts images of typed, printed, or handwritten text into machine-encoded character sequences, enabling downstream search, editing, and automated processing of scanned documents and photographs. Classical approaches segment character glyphs and classify them against trained feature descriptors; contemporary deep-learning pipelines — typically convolutional neural networks paired with sequence models such as CTC or Transformer decoders — recognise whole text lines end-to-end without explicit segmentation. OCR is a foundational building block of document intelligence, information extraction, and accessibility tooling, and underlies virtually every large-scale digitisation effort from cultural heritage archives to enterprise content management.

- ### Overview
  - OCR solves the fundamental problem of bridging the analogue–digital divide for text. A physical document — a book page, a form, a street sign, a historical manuscript — is captured as a pixel image; OCR reconstructs the underlying symbolic character sequence.
  - **Why it matters**
    - Unlocks billions of pages of historical content for full-text search and analysis.
    - Enables automation of high-volume data-entry workflows, reducing human error and cost.
    - Provides the text layer required for [[Accessibility]] tools such as screen readers operating on scanned PDFs.
    - Powers real-time applications from mobile cheque deposit to instant translation of signage.
  - **Historical trajectory**
    - Early systems (1950s–1980s) used template matching and feature engineering for fixed fonts.
    - Tesseract (originally HP/Google) introduced adaptive classifiers that generalised across typefaces.
    - The ImageNet era brought [[Convolutional Neural Network]]s replacing hand-crafted features; CRNN (2015) combined CNN feature extraction with bidirectional LSTM sequence decoding and CTC loss.
    - [[Transformer Architecture]]-based engines (e.g. TrOCR, Donut) treat document images as visual tokens, enabling end-to-end models that also interpret layout semantics.
  - **Distinction from related concepts**
    - [[Intelligent Character Recognition]] (ICR) extends OCR to unconstrained cursive handwriting.
    - [[Optical Mark Recognition]] (OMR) detects filled bubbles or marks rather than character glyphs.
    - Scene text recognition addresses text embedded in natural photographs — variable scale, perspective, illumination — which classical document OCR handles poorly.

- ### Key Components
  - **Image Preprocessing** — [[Image Preprocessing]] steps including binarisation (Otsu thresholding, adaptive thresholding), deskewing, noise removal, and resolution normalisation that condition the input image for reliable character extraction.
  - **Text Detection** — [[Text Detection]] localises text regions in the image. Methods range from connected-component analysis to deep detectors (EAST, CRAFT, DBNet) producing word- or line-level bounding boxes.
  - **Layout Analysis** — [[Layout Analysis]] recovers document structure: columns, paragraphs, tables, headings, and reading order. Tools like Detectron2-based Document Layout Analysis (DLA) models classify page regions semantically.
  - **Character Segmentation** — [[Character Segmentation]] isolates individual glyphs (traditional) or keeps sequences intact for end-to-end recognition (modern). CTC-based decoders handle variable-length sequences without explicit segmentation.
  - **Recognition Engine** — The core classification step. Modern engines use CRNN (CNN + BiLSTM + CTC) or vision-encoder–text-decoder [[Transformer Architecture]]s. Multi-lingual engines jointly model scripts through shared Unicode output layers.
  - **Language Model Post-Processing** — [[Language Model]] rescoring corrects character-level errors by leveraging word and n-gram probabilities; beam search with lexicon constraints improves dictionary-word accuracy significantly.
  - **Output Rendering** — Results are encoded as [[Unicode Standard]]-compliant strings and may be embedded in tagged PDF ([[PDF/UA]]), ALTO XML, hOCR, or PAGE XML formats preserving spatial coordinates.

- ### Mechanisms
  - **CRNN Pipeline** — Input image → CNN feature maps (backbone, e.g. ResNet) → column-wise sequence of feature vectors → BiLSTM contextual encoding → CTC decoder → character sequence. Trained end-to-end with CTC loss, avoiding explicit character-level segmentation labels.
  - **Attention-based Sequence-to-Sequence** — Encoder encodes image patch embeddings; attention decoder generates characters autoregressively. More flexible than CTC for irregular text and mathematical notation.
  - **Document Foundation Models** — Models like Donut and Nougat treat the entire document page as a visual input and generate structured text (or JSON) directly, bypassing the classical pipeline stages. Relevant to [[Document Intelligence]] and zero-shot form understanding.
  - **Handwriting Recognition Specifics** — HTR (Handwritten Text Recognition) extends OCR to cursive and historical scripts using line-level segmentation and specialised training corpora (e.g. IAM, RIMES, George Washington).

- ### Applications and Use Cases
  - **Enterprise Document Automation** — High-volume processing of invoices, purchase orders, and contracts through [[Robotic Process Automation]] integrations. OCR extracts field values; downstream [[Information Extraction]] models structure them.
  - **Legal and Compliance** — [[Legal Research]] platforms digitise court decisions, patents, and regulatory filings. Full-text indexing enables semantic search at scale.
  - **Healthcare** — Converting handwritten clinical notes, pathology reports, and prescription images into structured EHR data, reducing transcription latency and error.
  - **Banking and Finance** — Cheque processing, KYC identity-document verification, and automated mortgage application ingestion depend on reliable OCR under time pressure.
  - **Cultural Heritage Digitisation** — Mass digitisation of manuscripts, newspapers, and rare books (Google Books, Project Gutenberg, Europeana) making historical collections searchable.
  - **Accessibility** — OCR underpins screen-reader access to scanned PDFs and image-only web content. [[Digital Accessibility]] mandates (WCAG, PDF/UA) increasingly require text-layer provision.
  - **Supply Chain and Logistics** — Reading shipping labels, pallet markings, and waybills contributes to [[Supply Chain Visibility]] and inventory accuracy.
  - **Augmented and Mixed Reality** — Real-time scene-text recognition in AR overlays translates signage and menus; cross-language OCR bridges physical and digital information layers, linking to [[Digital Twin]] representations of physical environments.
  - **Knowledge Graph Population** — Extracted text feeds entity and relation extraction pipelines that enrich [[Knowledge Graph]] resources, enabling structured querying over formerly unstructured document corpora.

- ### Standards and Context
  - **Unicode Standard** — The [[Unicode Standard]] (maintained by the Unicode Consortium) defines the character repertoire and encoding for OCR output, covering virtually every script and symbol system. Correct Unicode normalisation (NFC/NFD) is essential for downstream NLP interoperability.
  - **PDF/UA (ISO 14289)** — [[PDF/UA]] defines requirements for universally accessible PDF documents, including mandatory tagged content and searchable text layers that OCR-processed PDFs must satisfy to meet accessibility regulations (e.g. EU Web Accessibility Directive, ADA).
  - **ALTO XML** — Analyzed Layout and Text Object XML schema (Library of Congress standard) encodes page layout and OCR character coordinates used in digital library workflows.
  - **PAGE XML** — Page Analysis and Ground-truth Elements schema used in document-image analysis research and competition datasets (e.g. ICDAR series).
  - **hOCR** — HTML-based OCR output format encoding word bounding boxes in HTML attributes; used by Tesseract and many open-source pipelines.
  - **ISO/IEC standards** — Character recognition is addressed within ISO/IEC JTC 1/SC 34 (Document description and processing languages) and related standardisation bodies.
  - **ICDAR Competitions** — The International Conference on Document Analysis and Recognition (ICDAR) series provides canonical benchmarks (ICDAR 2013, 2015, 2019, 2023) against which OCR engine accuracy is measured; winning entries drive research directions.
  - **Tesseract** — Open-source OCR engine originally developed at HP, now maintained by Google. Versions 4+ use LSTM-based recognition. Widely used reference implementation for evaluating pipeline components.

- ### Provenance

