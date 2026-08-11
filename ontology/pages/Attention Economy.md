public:: true

# Attention Economy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d7dad511c5bdb111b363b8f1d27553e924eef972c5df24be16367b485afc385f",
  "@type": "Page",
  "vc:slug": "attention-economy",
  "title": "Attention Economy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:digital-economy", "vc:label": "Digital Economy"},
    {"@id": "urn:visionflow:linked:content-curation", "vc:label": "Content Curation"},
    {"@id": "urn:visionflow:linked:creator-monetization", "vc:label": "Creator Monetization"},
    {"@id": "urn:visionflow:linked:digital-society-harms", "vc:label": "Digital Society Harms"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:attention-economy",
  "@type": "Class",
  "label": "Attention Economy",
  "definition": "An economic framing, articulated by Herbert Simon in 1971, in which human attention is treated as the scarce resource that information-rich systems compete to capture, allocate, and monetise. In digital markets it describes the business logic of advertising-funded platforms whose revenue scales with engagement, driving recommendation algorithms, infinite feeds, and notification design that optimise for time-on-platform — with documented consequences for information quality, creator livelihoods, and individual wellbeing.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-economy",
    "label": "Digital Economy"
  },
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:digital-platform", "label": "Digital Platform"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:content-curation", "label": "Content Curation"},
      {"@id": "urn:ngm:class:creator-monetization", "label": "Creator Monetization"},
      {"@id": "urn:ngm:class:digital-society-harms", "label": "Digital Society Harms"},
      {"@id": "urn:ngm:class:creator-economy", "label": "Creator Economy"}
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
  - "An economic framing, articulated by Herbert Simon in 1971, in which human attention is treated as the scarce resource that information-rich systems compete to capture, allocate, and monetise. In digital markets it describes the business logic of advertising-funded platforms whose revenue scales with engagement, driving recommendation algorithms, infinite feeds, and notification design that optimise for time-on-platform — with documented consequences for information quality, creator livelihoods, and individual wellbeing."

- ### Semantic Classification
  - owl-class:: governance:AttentionEconomy
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Digital Economy]]
  - depends-on:: [[Digital Platform]]
  - related-to:: [[Content Curation]]
  - related-to:: [[Digital Society Harms]]

- ### Content

  ## Definition

  The **attention economy** inverts the classical scarcity assumption of information markets. As Herbert Simon observed, "a wealth of information creates a poverty of attention": when content is abundant and near-free to reproduce, the binding constraint becomes the finite attention of audiences. Firms therefore compete not primarily on information supply but on their ability to capture and hold attention, which can then be sold to advertisers, converted into behavioural data, or channelled into transactions.

  In the platform era this framing became an operational business model. Advertising-funded services — social networks, video platforms, news aggregators — measure success in engagement metrics (time on platform, sessions, interactions) because those metrics translate directly into advertising inventory. This incentive structure shapes product design end to end: recommendation algorithms rank for predicted engagement, feeds scroll infinitely, autoplay removes stopping cues, and notifications re-summon lapsed users. [[Content Curation]] practices and the [[Creator Economy]] both operate inside this logic: creators' incomes under [[Creator Monetization]] schemes are largely a function of the attention their content aggregates.

  The concept is equally central to critique. Because engagement-optimised systems tend to amplify emotionally arousing, novel, or polarising content, the attention economy is implicated in many [[Digital Society Harms]]: misinformation spread, outrage dynamics, compulsive use patterns, and the erosion of shared epistemic ground. Policy responses — from the EU Digital Services Act's transparency duties for recommender systems to age-appropriate design codes — attempt to regulate the mechanics of attention capture rather than content alone.

  ## Current Landscape

  - **Addictive design becomes an enforcement target (2026)**: on 6 February 2026 the European Commission preliminarily found TikTok in breach of the Digital Services Act specifically for addictive design — infinite scroll, autoplay, push notifications and highly personalised recommenders — the first DSA action targeting platform architecture rather than illegal content; on 10 July 2026 it issued a parallel preliminary finding against Meta's Instagram and Facebook. Non-compliance can draw fines of up to 6% of global annual turnover.
  - **US liability**: in March 2026 a US jury found both Meta and YouTube liable for addictive design, extending the reckoning beyond Europe.
  - **UK regime live**: Ofcom's Online Safety Act duties took effect from 17 March 2025, with illegal-content risk assessments required by 16 March 2025, adding a UK layer to recommender-system and design scrutiny.
  - **DSA user controls in force**: since the DSA fully applied (February 2024), VLOPs with 45m+ EU users must offer non-personalised/chronological feeds, label ads, maintain ad repositories, ban targeted advertising to minors and to sensitive-data profiling, and prohibit deceptive dark patterns (Art. 25).
  - **Scale**: digital advertising, the attention economy's primary monetisation channel, remains roughly two-thirds of global advertising expenditure, concentrated in a few platform intermediaries.
  - **Research frontier**: quantifying the welfare cost of attention capture, and designing recommender objectives that internalise long-term user value rather than short-term engagement.

  **Sources**:
  - https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-addictive-design-instagram-and-facebook-breach-digital-services-act
  - https://commission.europa.eu/news-and-media/news/digital-services-act-keeping-us-safe-online-2025-09-22_en
  - https://www.slaughterandmay.com/media/yhkfefnr/the-eus-digital-services-act-and-uk-online-safety-act-where-are-we-now.pdf

- ### Provenance
  - sources:: https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-addictive-design-instagram-and-facebook-breach-digital-services-act, https://commission.europa.eu/news-and-media/news/digital-services-act-keeping-us-safe-online-2025-09-22_en
  - migration-date:: 2026-08-06T00:00:00Z
