public:: true

elevatedFrom:: [[Style Guide]]
# Knowledge Graph Style Guide
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab69c9ecdf8e3bf571d0badcf4ffa2322fbea86f00dc5ec717f38588d1baf6af",
  "@type": "Page",
  "vc:slug": "knowledge-graph-style-guide",
  "title": "Knowledge Graph Style Guide",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:block-title",
      "vc:label": "block title"
    },
    {
      "@id": "urn:visionflow:linked:reference",
      "vc:label": "reference"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Style Guide"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:knowledge-graph-style-guide",
  "@type": "Class",
  "label": "Knowledge Graph Style Guide",
  "definition": "A Style Guide is a normative document specifying authoring conventions — voice, tone, markup syntax, citation format, and structural patterns — for consistent content creation within a knowledge graph or publication system. In the NarrativeGoldmine context it captures Logseq markdown conventions, UK English preferences, and the analytical-conversational register used throughout the graph.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard-standards", "label": "Semantic Web Standards"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:style-guide:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab69c9ecdf8e3bf571d0badcf4ffa2322fbea86f00dc5ec717f38588d1baf6af"
  },
  "vc:resolutions": [
    {
      "raw": "[[block title]]",
      "resolved": "urn:visionflow:linked:block-title",
      "kind": "StubLink"
    },
    {
      "raw": "[[reference]]",
      "resolved": "urn:visionflow:linked:reference",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A Style Guide is a normative document specifying authoring conventions — voice, tone, markup syntax, citation format, and structural patterns — for consistent content creation within a knowledge graph or publication system. In the NarrativeGoldmine context it captures Logseq markdown conventions, UK English preferences, and the analytical-conversational register used throughout the graph.

- ### Semantic Classification
  - owl-class:: infrastructure:StyleGuide
  - owl-role:: Concept

- ### Relationships
  - supports:: Knowledge Graph, Ontology
  - relatedTo:: Software Engineering, Semantic Web Standards
  - standardizedBy:: Open Standard
  - enables:: Knowledge Graph Construction

- ### Content
  - This guide aims to capture the stylistic nuances of the provided text for accurate imitation by an LLM. It focuses on replicating the author's voice, tone, and the specific Logseq markdown and markup conventions.
  - **I. Overall Tone and Voice:**
  * **Informative and Analytical:** The text is primarily informative, presenting a detailed analysis of various technologies and their implications. Maintain this analytical tone, focusing on facts, data, and reasoned arguments.
  * **Enthusiastic and Optimistic:** The author expresses excitement about the potential of emerging technologies, particularly in the context of decentralization, AI, and XR. Replicate this optimistic tone, emphasizing the positive aspects and opportunities.
  * **Critical and Discerning:** While optimistic, the author also critically evaluates the limitations and risks of these technologies. Maintain this critical perspective, offering a balanced view.
  * **Engaging and Conversational:** Despite the technical nature of the content, the writing style is engaging and conversational. Use clear, concise language, avoiding jargon where possible. Incorporate personal anecdotes and opinions to enhance engagement.
  * **Authoritative and Knowledgeable:**  The author demonstrates a deep understanding of the subject matter. Maintain this authoritative voice by providing accurate information and referencing credible sources.
  - **II. Logseq Markdown and Markup:**
  - * **Headings and Subheadings:**  Use Logseq's hierarchical heading structure (`- #`, `- ##`, `- ###`, etc.) to organize the text logically. Capitalize the first letter of each word in headings.
  * **Emphasis:** Minimal use of bold. Italicize book titles and occasionally emphasize key phrases.
  * **Hyperlinks:**  Enclose URLs in square brackets followed by parentheses containing the link text: `[URL](link text)`. Use descriptive link text that accurately reflects the content of the linked page.
  * **Images:**  Use the following syntax for images: `![alt text](image path){:width value, :height value}`. Specify width and height values to control image size.
  * **Embeds:** Use double curly braces for embeds, specifying the type and identifier: `{{type identifier}}`. Examples include `{{tweet tweet_id}}`, `{{video video_url}}`, `{{renderer type, identifier}}`.
  * **Unordered Lists:** Use hyphens followed by a space for bullet points (`- `). Indent sub-bullets with additional spaces.
  * **Block References:** Use double square brackets for block references: `[[block title]]`.
  * **Properties:** Use colons followed by a value for properties: `property:: value`. Example: `public:: true`.
  * **Code Blocks:** Use triple backticks followed by the language identifier for code blocks: ```` ```language
  code

  ## Detailed Style Guide for Logseq-Markdown Text Generation
  ``` ````.
  * **Inline Code:** Use single backticks for inline code: `` `code` ``.
  * **Newlines:**  Use `\r\n` for newlines consistently throughout the text.
  * **Page Properties:** Include the `public:: true` property at the beginning and end of pages intended for public viewing.

  **III. Specific Stylistic Features:**

  * **UK Spelling:** Consistently use UK spelling throughout the text (e.g., "colour," "analyse," "organisation").
  * **Abbreviations and Acronyms:**  Introduce acronyms with their full form followed by the acronym in parentheses. Use acronyms consistently after their introduction.
  * **Citations and References:** Use numeric citations for academic works and books, and hyperlinks for other sources. Enclose references in double square brackets: `[[reference]]`.
  * **Lists and Tables:** Use tables and lists to organize information clearly. Use Markdown syntax for tables.
  * **Emoji Usage:**  Incorporate emojis sparingly to add emphasis or convey tone.
  * **Parenthetical Asides:** Use parentheses for additional information or comments.
  * **Collapsible Sections:** Use `collapsed:: true` to create collapsible sections in Logseq.
  - **IV. Content and Structure:**
  - * **Focus on Emerging Technologies:**  Maintain the focus on emerging technologies, particularly decentralization, AI, XR, and their convergence.
  * **Detailed Explanations:** Provide in-depth explanations of concepts and technologies, referencing credible sources.
  * **Exploration of Implications:** Discuss the societal, economic, and ethical implications of these technologies.
  * **Real-World Examples:**  Include real-world examples, case studies, and anecdotes to illustrate concepts.
  * **Future-Oriented Perspective:** Maintain a future-oriented perspective, exploring potential developments and trends.
  - **V. Additional Instructions for the LLM:**
  - * **Adhere strictly to the guidelines outlined above.**
  * **Prioritize accuracy and consistency in replicating the author's voice, tone, and style.**
  * **Use a large context window to capture the overall style and maintain consistency across generations.**
  * **Continuously refine your output based on feedback and evaluation.**
  - This detailed style guide provides a comprehensive framework for an LLM to accurately emulate the writing style and markup conventions of the provided text, enabling the generation of new content that seamlessly integrates with the existing knowledge base.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

- ## Canonical Terminology
	- The words for the knowledge stack are owned by the [[Terminology Playbook]]. In short: a [[Taxonomy]] is the is-a backbone (one part of the ontology, never a synonym for it); the [[Ontology]] is the formal vocabulary that defines what can be said; the [[Knowledge Graph]] is that vocabulary populated with live instances at runtime (this published corpus is pure TBox — the ontology itself, zero individuals by design); [[Reasoning]] is the machine check that gates what enters, at build by the pipeline's EL reasoner and at runtime by Whelk; and the [[Ontology Loom]] serves the checked ontology into a model's context at query time.
	- On every public surface, "reasoned" means checked by Whelk, the corpus provenance is stated in one plain line, and "living ontology" is retired.
