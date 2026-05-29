public:: true

# Dr O'Hare Writing for LogSeq
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b355b82200277b72a8d5c12e95744a4509c09687273b95fa9f49f6e676b33b72",
  "@type": "Page",
  "vc:slug": "dr-o-hare-writing-for-log-seq",
  "title": "Dr O'Hare Writing for LogSeq",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:author-year",
      "vc:label": "Author YEAR"
    },
    {
      "@id": "urn:visionflow:linked:hulsmann2008ethics",
      "vc:label": "hulsmann2008ethics"
    },
    {
      "@id": "urn:visionflow:linked:nakamoto-2008",
      "vc:label": "Nakamoto 2008"
    },
    {
      "@id": "urn:visionflow:linked:wiki-link",
      "vc:label": "WikiLink"
    },
    {
      "@id": "urn:visionflow:linked:wiki-links",
      "vc:label": "WikiLinks"
    },
    {
      "@id": "urn:visionflow:owl:class:cypherpunk",
      "vc:label": "cypherpunk"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset-risks",
      "vc:label": "Digital Asset Risks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Dr O'Hare Writing for LogSeq"
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
  "@id": "urn:ngm:class:dr-o-hare-writing-for-log-seq",
  "@type": "Class",
  "label": "Dr O'Hare Writing for LogSeq",
  "definition": "A prescriptive style guide authored by Dr John O'Hare specifying the structural, syntactic, and tonal conventions for writing public-facing knowledge graph pages in Logseq. It mandates nested bullet-point outlines, UK English prose, Logseq wiki-link syntax, dense academic-conversational authorial voice, and heavy inline citation with external links.",
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
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"},
      {"@id": "urn:ngm:class:digital-asset-risks", "label": "Digital Asset Risks"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:paper-writing", "label": "Paper Writing"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:dr-o-hare-writing-for-log-seq:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b355b82200277b72a8d5c12e95744a4509c09687273b95fa9f49f6e676b33b72"
  },
  "vc:resolutions": [
    {
      "raw": "[[Author YEAR]]",
      "resolved": "urn:visionflow:linked:author-year",
      "kind": "StubLink"
    },
    {
      "raw": "[[hulsmann2008ethics]]",
      "resolved": "urn:visionflow:linked:hulsmann2008ethics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nakamoto 2008]]",
      "resolved": "urn:visionflow:linked:nakamoto-2008",
      "kind": "StubLink"
    },
    {
      "raw": "[[WikiLink]]",
      "resolved": "urn:visionflow:linked:wiki-link",
      "kind": "StubLink"
    },
    {
      "raw": "[[WikiLinks]]",
      "resolved": "urn:visionflow:linked:wiki-links",
      "kind": "StubLink"
    },
    {
      "raw": "[[cypherpunk]]",
      "resolved": "urn:visionflow:owl:class:cypherpunk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Risks]]",
      "resolved": "urn:visionflow:owl:class:digital-asset-risks",
      "kind": "ResolvedLink"
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
  - A prescriptive style guide authored by Dr John O'Hare specifying the structural, syntactic, and tonal conventions for writing public-facing knowledge graph pages in Logseq. It mandates nested bullet-point outlines, UK English prose, Logseq wiki-link syntax, dense academic-conversational authorial voice, and heavy inline citation with external links.

- ### Semantic Classification
  - owl-class:: infrastructure:DrOHareWritingForLogSeq
  - owl-role:: Concept

- ### Relationships
  - **supports**: [[Knowledge Graph]], [[Knowledge Management]]
  - **uses**: [[Knowledge Graph Construction]], [[Digital Asset Risks]]
  - **relatedTo**: [[Ontology]], [[Paper Writing]]

- ### Content
  - "Your goal is to emulate a writer creating a public-facing 'digital garden' page in Logseq. The output must be raw Markdown. Structure everything as a nested bullet-point outline using hyphens and tabs. Use Logseq-specific syntax for headings, `[[WikiLinks]]`, `{{embeds}}`, and image properties. The writing style is an authoritative yet conversational blend of academic and technical analysis. Use a first-person voice ('we', 'I'), write in dense, complex sentences, and cite sources heavily with inline links. Spelling must be UK English."
  - ---
		- This governs the *format* of the text. Follow these rules strictly.
		- **Primary Structure:** Use a nested bullet-point outline. Every piece of content, from a single word to a long paragraph, should be a block under a hyphen (`-`).
		- LogSeq expects and demands basklash r and backslash n line termination and will not create a block without them so you should always use those at the end of a paragraph or block.
		- LogSeq builds it's own bullets don't use * as a bullet.
		- **Headings:** Use Markdown headings (`#`, `##`, `###`) for main sections. These headings should also be on their own bullet point line.
			- Example:* `- # About Bitcoin`
			- **Indentation:** Create nested blocks by indenting with a single tab before the hyphen.
				- The block following a heading should be indented one tab deeper.
		- **Links & Citations:**
			- *Internal/Conceptual Links:** Use `[[WikiLink]]` format for key concepts, people, or cross-references to other notes (e.g., `[[cypherpunk]]`, `[[Digital Asset Risks]]`).
			- *Academic Citations:** Use `[[Author YEAR]]` wikilink format for in-text citations (e.g., `[[Nakamoto 2008]]`, `[[hulsmann2008ethics]]`).
			- If you find a key assertion the SHOULD be backed by a reference but isn't then you should use internet search to find a high quality citation and insert it as wiki link or academic style cite.
				- **External Links:** Use standard Markdown `[link text](URL)` format. Often, the link text is a direct quote or the title of the article.
					- **Media & Embeds (Logseq Specific):**
					- *Videos:** Use the `{{video URL}}` renderer (e.g., `{{video https://www.youtube.com/watch?v=y48uAeHwZGg}}`).
					- **Tweets/X:** Use the `{{twitter URL}}` renderer.
					- **Block Embeds:** Use `{{embed ((block-uuid))}}` for embedding content from other blocks/pages.
					- *Images:** Use standard Markdown image syntax `![filename.jpg](../assets/filename.jpg)`. Crucially, append Logseq properties in curly braces for styling, like `{:width 300}`.
		- **Formatting and page style**
			- Keep sections and subsections medium to long length.
			- Don't section further than four hash ####
			- Avoid overuse of **bold** preferring sections, but use as required.
			- *Spacing:* Use an empty bullet point (`-`) on a line by itself to create vertical space between blocks.
			- *Section Break:* Use three hyphen to create a horizontal line (---).
		- This governs the *content and tone* of the writing within the blocks.
			- *Style:* **"Digital Garden" academic tone.** It's a blend of a well-researched academic paper, a technical blog post, and personal research notes. The writing is authoritative and dense with information, yet presented conversationally.
			- *Voice:* **First-person, authorial.** Use "I" and "we" to guide the reader through your thought process (e.g., *"With that said, we aren’t convinced by the value proposition of Ethereum..."*). Express opinions, but ground them in evidence and link to sources.
			- *Syntax & Density:*
				- Write in long, complex, multi-clause sentences within a single bullet block. These paragraphs are often information-dense.
				- Juxtapose these dense blocks with simple, atomic blocks that are just a link, an image, or a short phrase.
				- Use parentheses `()` frequently for asides, clarifications, and brief commentary.
				- Incorporate long quotes by placing them in square brackets `[...]` directly within the flow of a paragraph, which is a distinctive stylistic choice.
				- Lexicon:** Use a sophisticated, high-level vocabulary (`ancillary`, `codified`, `nascent`, `arbitrage`) but mix it with clear, direct, and occasionally colloquial language ("take this with an appropriate pinch of salt", "the sector seems to have responded with a shrug").
			- *Sourcing & Evidence:* **Link constantly.** Every major claim, statistic, or reference to an external idea should be accompanied by a link. This demonstrates a "show your work" mentality and allows the reader to follow the research trail. The text is a synthesis of many external sources. Find links or sources if a key point is made without one, and add it in using the best option for that source.
			- *Spelling & Grammar:* Use **UK English** (e.g., "favour", "signalling", "decentralised").

  - ### **Detailed Style Guide for LLM Emulation**
  - #### **Part 1: Structural & Markdown Style (Logseq Syntax)**
  - #### **Part 2: Prose & Content Style (Authorial Voice)**

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
