public:: true

# EU AI Act Article 50
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eu-ai-act-article-50",
  "@type": "Page",
  "vc:slug": "eu-ai-act-article-50",
  "title": "EU AI Act Article 50",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument-article-50",
  "@type": "Class",
  "label": "EU AI Act Article 50",
  "definition": "EU AI Act Article 50 establishes transparency obligations that apply to providers and deployers of specific categories of AI system within the European Union's Artificial Intelligence Act regulatory framework. The article requires that AI systems designed to interact with natural persons, or that generate synthetic audio, image, video, or text content, must disclose their AI nature to affected individuals. Providers of deep fake content generation tools are required to label outputs in machine-readable form, and broadcast media and online platforms carrying synthetic media must carry appropriate disclosures. The article represents the EU's approach to mandating content authentication and countering AI-generated deception at scale.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:eu-ai-act-regulatory-instrument", "label": "EU AI Act Regulatory Instrument"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-generated-content-disclosure", "label": "AI-Generated Content Disclosure"},
      {"@id": "urn:ngm:class:deepfakes", "label": "Deepfakes"},
      {"@id": "urn:ngm:class:ai-transparency-framework", "label": "Ai Transparency Framework"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:content-authentication", "label": "Content Authentication"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:prohibited-ai-practice", "label": "Prohibited AI Practice"},
      {"@id": "urn:ngm:class:high-risk-ai-system", "label": "High Risk AI System"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - EU AI Act Article 50 imposes mandatory transparency and disclosure obligations on providers of AI systems that interact with people or generate synthetic media, requiring machine-readable labelling of [[Deepfakes]] and other AI-generated content as part of the [[EU AI Act Regulatory Instrument]] regulatory framework.

- ### Relationships
  - Article 50 sits within the [[EU AI Act Regulatory Instrument]] as one of the horizontal transparency provisions that apply across risk categories, distinct from the high-obligation regime for [[High Risk AI System]] and the absolute bans covering [[Prohibited AI Practice]]. It directly mandates [[AI-Generated Content Disclosure]] and aligns with the broader [[Ai Transparency Framework]] goals of the regulation. Compliance requires [[Content Authentication]] mechanisms, such as watermarking or metadata tagging, to implement the machine-readable disclosure requirement. Organisations must demonstrate adherence through [[Conformity Assessment]] processes, and the article interoperates with [[Compliance Framework]] structures that organisations build to meet the full Act. The provision is closely watched in the context of [[Deepfakes]] proliferation, as it is one of the few legal instruments globally requiring disclosure rather than prohibition.

- ### Content
  - Article 50 of the EU AI Act addresses a specific risk dimension: that AI systems can produce convincing synthetic content or engage in apparently human interactions in ways that deceive users. The article is structured around four main obligations, each targeting a different use case. First, AI systems intended to interact directly with natural persons, such as customer service chatbots, must be disclosed as AI to users unless the context makes it obvious. Second, AI systems that generate synthetic image, audio, video, or text content must mark that content as AI-generated in a machine-readable format. Third, providers of AI systems used to generate or manipulate images of identifiable persons (deep fakes) must label the output. Fourth, broadcasters and online platforms that display AI-generated content in the public interest must carry appropriate notices.

  - The obligation for machine-readable labelling points toward technical standards for content provenance, which organisations such as the Coalition for Content Provenance and Authenticity (C2PA) are developing. The C2PA content credentials system uses cryptographic manifests embedded in or attached to media files to assert origin information, making it a candidate implementation approach for Article 50's disclosure mandate.

  - Article 50 interacts with the EU's broader digital regulatory landscape, including the Digital Services Act (DSA) and the Digital Markets Act (DMA). Very large online platforms subject to the DSA already face obligations around systemic risk mitigation, and synthetic media is identified as a contributing factor to the spread of disinformation. Article 50's labelling requirements complement DSA obligations by providing a mechanism for platforms to identify AI-generated content at the source.

  - Enforcement of Article 50 falls to national market surveillance authorities, with coordination through the AI Office established at EU level. Penalties for non-compliance are set at up to 15 million euros or 3% of worldwide annual turnover, whichever is higher, for providers of [[General Purpose AI Model]] systems. For other providers the penalty ceiling is 7.5 million euros or 1.5% of turnover.

  - Critics of Article 50 note challenges around technical implementation: watermarking systems can be defeated, metadata can be stripped, and the obligation to label synthetic content does not prevent misuse once content leaves the original distribution channel. Research into robust, imperceptible AI watermarking, including techniques that survive common image processing operations, is an active area directly motivated by the regulatory requirements Article 50 introduces.
