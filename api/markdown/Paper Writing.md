public:: true

# Paper Writing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13bb3b03cf9e4e55ef1e09b30c00368e29ee54fe197f18907c673ed0ca89de83",
  "@type": "Page",
  "vc:slug": "paper-writing",
  "title": "Paper Writing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Paper Writing"
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
  "@id": "urn:ngm:class:paper-writing",
  "@type": "Class",
  "label": "Paper Writing",
  "definition": "The structured process of composing and submitting scholarly manuscripts, including literature review, argument construction, citation management, and formatting to venue-specific standards. In AI-adjacent contexts, paper writing increasingly involves AI-assisted drafting, ontology-grounded claims, and tool-augmented workflows (LaTeX, reference managers, large language models) that must be balanced against academic integrity requirements.",
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
    "uses": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:paper-writing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13bb3b03cf9e4e55ef1e09b30c00368e29ee54fe197f18907c673ed0ca89de83"
  },
  "vc:resolutions": [],
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
  - The structured process of composing and submitting scholarly manuscripts, including literature review, argument construction, citation management, and formatting to venue-specific standards. In AI-adjacent contexts, paper writing increasingly involves AI-assisted drafting, ontology-grounded claims, and tool-augmented workflows (LaTeX, reference managers, large language models) that must be balanced against academic integrity requirements.

- ### Semantic Classification
  - owl-class:: infrastructure:PaperWriting
  - owl-role:: Concept

- ### Relationships
  - **uses**: Natural Language Processing, Ontology, Version Control — NLP tools assist drafting and proofreading; ontologies provide controlled vocabularies for claims; version control tracks manuscript revisions collaboratively.
  - **enables**: Knowledge Graph — systematic paper writing can feed structured claims into knowledge graphs as citable edges.
  - **relatedTo**: Large Language Models — LLMs are increasingly used as co-writing and paraphrasing tools in academic contexts.

- ### Content
  # Conference presentation
  - [Claude](https://claude.ai/chat/e508202e-92f2-4ca2-889e-e69da8eb6714)
  - [Metaverseconf_Busan1 - Google Slides](https://docs.google.com/presentation/d/1AVstOhBoV4El6v42VG3bSeZAwy6XgU1KRl0M7A1FvIc/edit#slide=id.g2cf3cc11597_0_81)
  - # Frontiers in VR
  - [Interactive Audio Systems and Artefacts within Extended Reality: Innovation, Creativity and Accessibility | Frontiers Research Topic (frontiersin.org)](https://www.frontiersin.org/research-topics/58000/interactive-audio-systems-and-artefacts-within-extended-reality-innovation-creativity-and-accessibility)
  - [Frontiers_LaTeX_Templates.zip](../assets/Frontiers_LaTeX_Templates_1713949644922_0.zip)
  - [Metaverseconf_Busan1.txt](../assets/Metaverseconf_Busan1_1713949788418_0.txt) Jess's presentation snapshot [Metaverseconf_Busan1 - Google Slides](https://docs.google.com/presentation/d/1AVstOhBoV4El6v42VG3bSeZAwy6XgU1KRl0M7A1FvIc/edit#slide=id.g2bfac131e9c_0_14)
  - [FinalDraftMetaverseOntology_240425 - Google Sheets](https://docs.google.com/spreadsheets/d/13k7lC4BZbxF9EXrWN0nJSqfLUjMw_qD3sIns_pqR-m0/edit#gid=2098276378)
  - Examples of Jess's style
		- [Full article: Strategies for connecting low income communities to the creative economy through play: two case studies in Northern England (tandfonline.com)](https://www.tandfonline.com/doi/full/10.1080/17510694.2018.1453770)
		- [Untangling creativity and art for policy purposes: ethnographic insights on Manchester International Festival and Manchester Day Parade (tandfonline.com)](https://www.tandfonline.com/doi/epdf/10.1080/10286632.2016.1150268?needAccess=true)
  - [GPT for the task](https://chat.openai.com/g/g-YVv3VjlrR)
		- ```text
		  We are writing a paper in two parts. The first part is based on metaverseconf_busan1.txt which you have in your file store. I am not going to write that section, it's by my co-author. You should however use it as context for the second section, which is our to write. 
		  ChatGPT
		  The document "Ordinary Ontologies: Strategies for Standardising Metaverse Processes, Systems, and Technologies" by Dr. Jessica Symons and Dr. John O'Hare discusses approaches to clarify metaverse environments to overcome adoption barriers. It details efforts in synchronizing terminologies across sectors to standardize definitions and enhance interoperability. The paper also elaborates on the creation of metaverse ontologies through AI tools, consultation, and collaboration with various stakeholders, aiming to develop a shared understanding and support the integration of diverse metaverse applications. It reflects on both technological and societal dimensions, emphasizing the need for comprehensive, inclusive frameworks that align with real-world applications and user experiences.
		  With this context, how can I assist you in crafting the second part of your paper?
		  User
		  I have given you instructions about the tone and voice and style to use, can you check and read some of that back to me?
		  ChatGPT
		  Sure, here's a recap of the instructions for the tone and style of the paper you're writing:
		  Formal and Scholarly: The paper should maintain a high level of formality and precision, using a voice that is authoritative and analytical.
		  Persuasive and Insightful: It's crafted to not only inform but also convince the reader of the discussed concepts' viability.
		  Reflective and Critical: The paper should engage deeply with the subject matter, offering critical assessments backed by data and theoretical analysis.
		  Complex Syntax and Structured Flow: The writing should utilize complex sentence structures and a logical narrative flow.
		  Specialized and Technical Vocabulary: The vocabulary should be rich and specialized, appropriate for an academic audience.
		  Integrative Narrative Elements: Descriptive language may be used to illustrate points vividly.
		  Directive and Inclusive Language: The style combines directive statements with an inclusive tone, highlighting collective endeavors.
		  Data-Driven and Example-Rich: Arguments should be supported by relevant data and examples.
		  Empathetic Engagement: The paper should show awareness of different perspectives, especially in discussions of social issues.
		  Solution-Oriented and Practical: Focus on proposing and evaluating practical solutions.
		  Does this align with what you have in mind for the style and tone of your paper?
		  User
		  yes, also we should write in highly compliant latex. Where a citation looks like it should be made you can suggest something using the internet or just use \cite{anon} to show that I need to investigate the assertion further. Modify your overall instructions to reflect all these changesOverall Tone:
		  Formal and Scholarly: Maintains a high level of formality and precision, suitable for academic and policy-oriented publications. The voice is consistently authoritative, employing an analytical approach that leans on robust data, theoretical frameworks, and extensive citation of relevant literature.
		  Persuasive and Insightful: Crafted to not only inform but also convince the reader of the viability and necessity of the discussed concepts or technologies. It strategically presents arguments, balancing between current practices and visionary goals.
		  Reflective and Critical: Engages deeply with the subject matter, reflecting on existing conditions and offering critical assessments that are backed by empirical data and theoretical analysis.
		  Linguistic Features:
		  Complex Syntax and Structured Flow: Utilizes complex sentence structures with a preference for passive constructions where appropriate, ensuring the focus remains on the information conveyed rather than the author's personal perspective. The narrative flow is logical and methodical, with a clear progression from introduction through to conclusion, facilitating an argumentative build-up.
		  Specialized and Technical Vocabulary: Employs a rich lexicon that includes specialized terms from fields such as digital technology, cultural policy, ethnography, and socio-economic studies. This not only enhances precision but also aligns with the expectations of an informed academic audience.
		  Integrative Narrative Elements: Occasionally incorporates narrative elements to illustrate points more vividly, using descriptive language to bring abstract concepts to life and make the material more accessible and engaging.
		  Directive and Inclusive Language: Combines directive statements with an inclusive tone that acknowledges collaboration and community involvement. This style supports the presentation of research or projects as collective endeavors and underscores the importance of stakeholder and community engagement.
		  Argumentation and Presentation:
		  Data-Driven and Example-Rich: Supports arguments with data, case studies, and examples that are relevant and thoughtfully selected. This approach not only strengthens the credibility of the arguments but also makes the theoretical discussions tangible.
		  Empathetic Engagement: Shows a strong awareness of different perspectives, especially when discussing social issues or community impacts. It involves an empathetic undertone that seeks to respect and understand varied experiences and viewpoints.
		  Solution-Oriented and Practical: While it critically analyzes problems, it also focuses on proposing and evaluating practical solutions, emphasizing applications that could lead to real-world improvements.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
