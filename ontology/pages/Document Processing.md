public:: true

# Document Processing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:448d3fabb45e42eae7aac39bad8561b28d1f8c53f1405e15933ec575f5cecf3f",
  "@type": "Page",
  "vc:slug": "document-processing",
  "title": "Document Processing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optical-character-recognition",
      "vc:label": "Optical Character Recognition"
    },
    {
      "@id": "urn:visionflow:linked:enterprise-search",
      "vc:label": "Enterprise Search"
    },
    {
      "@id": "urn:visionflow:linked:robotic-process-automation",
      "vc:label": "Robotic Process Automation"
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
  "@id": "urn:ngm:class:document-processing",
  "@type": "Class",
  "label": "Document Processing",
  "definition": "The automated ingestion, interpretation, and transformation of documents — scans, PDFs, forms, invoices, contracts, and email — into structured, machine-actionable data, combining optical character recognition, layout analysis, classification, and entity extraction; in its AI-driven form (intelligent document processing) it feeds downstream automation, search, and analytics with high-accuracy extracted content.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:business-process-automation",
    "label": "Business Process Automation"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:optical-character-recognition",
        "label": "Optical Character Recognition"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:enterprise-search",
        "label": "Enterprise Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
      },
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Information Extraction"
      },
      {
        "@id": "urn:ngm:class:document-summarisation",
        "label": "Document Summarisation"
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
  - "The automated ingestion, interpretation, and transformation of documents — scans, PDFs, forms, invoices, contracts, and email — into structured, machine-actionable data, combining optical character recognition, layout analysis, classification, and entity extraction; in its AI-driven form (intelligent document processing) it feeds downstream automation, search, and analytics with high-accuracy extracted content."

- ### Semantic Classification
  - owl-class:: ai:DocumentProcessing
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Business Process Automation]]
  - uses:: [[Optical Character Recognition]]
  - enables:: [[Enterprise Search]]
  - related-to:: [[Robotic Process Automation]]

- ### Content

  ## Definition

  **Document processing** is the pipeline discipline of turning unstructured and semi-structured documents into structured data that systems can act on. A typical pipeline runs: capture (scanning, email ingestion, API upload), image preprocessing (deskew, denoise, binarisation), [[Optical Character Recognition]] to recover text, layout and structure analysis (tables, key-value regions, reading order), document classification (invoice vs. contract vs. claim), field and entity extraction, validation against business rules or reference data, and hand-off to downstream systems — an ERP posting, a case-management record, or an index for [[Enterprise Search]].

  The field has moved through three generations. Template-based capture (1990s-2000s) matched fixed form layouts and broke whenever a supplier changed an invoice design. Machine-learning-based **intelligent document processing (IDP)** replaced templates with trainable classifiers and extractors that generalise across layouts. The current generation is built on layout-aware transformers (LayoutLM, Donut) and large multimodal models that read a document image directly, extracting fields zero-shot from document types they have never seen and handling handwriting, stamps, and poor scans that defeated classical OCR. This has collapsed the historical trade-off between per-document-type setup cost and accuracy.

  Document processing is the natural companion of [[Robotic Process Automation]]: RPA automates the keystrokes around business systems, but stalls at unstructured inputs, and IDP supplies the structured data that lets an end-to-end process — invoice receipt to payment, claim intake to adjudication — run without human transcription. Human-in-the-loop review remains standard practice for low-confidence extractions, with confidence thresholds tuned so that straight-through processing rates of 60-90% are achievable on common document classes.

  ## Current Landscape

  - **Cloud services**: Amazon Textract, Google Document AI, Microsoft Azure AI Document Intelligence offer OCR-plus-extraction APIs with prebuilt models for invoices, receipts, identity documents, and tax forms
  - **IDP platforms**: ABBYY, UiPath Document Understanding, Kofax/Tungsten, Hyperscience, and Rossum target enterprise capture workflows with review interfaces and process integration
  - **Open source**: Tesseract for OCR; LayoutLM/LayoutLMv3, Donut, and docTR for layout-aware extraction; a rapid shift towards general multimodal LLMs performing extraction via prompting
  - **Adoption drivers**: accounts-payable automation, KYC onboarding, claims processing, and preparing document corpora for retrieval-augmented generation, which has made clean document parsing a prerequisite for enterprise AI initiatives
  - **Persistent challenges**: complex tables, multi-page dependency, handwriting variance, confidence calibration for regulated straight-through processing, and provenance/auditability of extracted values
  - **Market signals (2025–2026)**: Gartner published its first IDP Magic Quadrant in 2025, formalising a category of 100+ vendors; analyst sizings for 2026 cluster around USD 2.8–3.2 billion (Mordor Intelligence, January 2026: USD 3.17 billion in 2026 rising to USD 7.18 billion by 2031 at 17.8% CAGR), with cloud deployment taking about 74% of 2025 revenue and BFSI the leading vertical
  - **Multimodal displacement of OCR (2026)**: production benchmarks report multimodal LLMs achieving 95–99% field-extraction accuracy on structured documents (invoices, purchase orders) and 85–95% on semi-structured contracts and claims, eroding the case for a separate OCR stage; Microsoft's Azure Content Understanding (generally available 2025–2026) packages this as a single multimodal extraction service across documents, images, audio, and video

  **Sources**:
  - https://www.mordorintelligence.com/industry-reports/intelligent-document-processing-market
  - https://app-lab.ai/blog/ai-document-processing/
  - https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/choosing-right-ai-tool
  - https://www.marketresearchfuture.com/reports/intelligent-document-processing-market-10629
