public:: true

# Digital Marketing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d4a0f8cecd7b90964fbb92f85e3eb520cd858df8f05e49bafee4cb0eab8e67fa",
  "@type": "Page",
  "vc:slug": "digital-marketing",
  "title": "Digital Marketing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9582"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Marketing"
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
  "@id": "urn:ngm:class:digital-marketing",
  "@type": "Class",
  "label": "Digital Marketing",
  "definition": "Digital Marketing is the practice of promoting products, services, and brands through internet-connected and data-driven channels — including search engines, social media platforms, email, content networks, and programmatic advertising systems — to reach and convert target audiences. It encompasses both inbound strategies such as search engine optimisation and content marketing, and outbound strategies such as paid search, display advertising, and email campaigns. Modern digital marketing is distinguished by its measurability, real-time feedback loops, and ability to personalise messages at scale through machine learning, behavioural analytics, and customer data platforms. It intersects with artificial intelligence for predictive targeting, with data infrastructure for audience segmentation and attribution, and with emerging channels such as augmented reality and conversational interfaces.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:marketing",
      "label": "Marketing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:search-engine-optimisation", "label": "Search Engine Optimisation"},
      {"@id": "urn:ngm:class:content-marketing", "label": "Content Marketing"},
      {"@id": "urn:ngm:class:email-marketing", "label": "Email Marketing"},
      {"@id": "urn:ngm:class:programmatic-advertising", "label": "Programmatic Advertising"},
      {"@id": "urn:ngm:class:social-media-marketing", "label": "Social Media Marketing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:recommendation-engine", "label": "Recommendation Engine"},
      {"@id": "urn:ngm:class:digital-content", "label": "Digital Content"},
      {"@id": "urn:ngm:class:customer-data-platform", "label": "Customer Data Platform"},
      {"@id": "urn:ngm:class:data-analytics", "label": "Data Analytics"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:e-commerce", "label": "E-Commerce"},
      {"@id": "urn:ngm:class:loyalty-programs", "label": "Loyalty Programs"},
      {"@id": "urn:ngm:class:personalisation", "label": "Personalisation"},
      {"@id": "urn:ngm:class:conversion-rate-optimisation", "label": "Conversion Rate Optimisation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-infrastructure", "label": "Data Infrastructure"},
      {"@id": "urn:ngm:class:audience-segmentation", "label": "Audience Segmentation"},
      {"@id": "urn:ngm:class:attribution-modelling", "label": "Attribution Modelling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:brand-identity", "label": "Brand Identity"},
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"},
      {"@id": "urn:ngm:class:privacy-regulation", "label": "Privacy Regulation"},
      {"@id": "urn:ngm:class:a-b-testing", "label": "A/B Testing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:online-marketing", "label": "Online Marketing"},
    {"@id": "urn:ngm:class:internet-marketing", "label": "Internet Marketing"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-marketing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d4a0f8cecd7b90964fbb92f85e3eb520cd858df8f05e49bafee4cb0eab8e67fa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - Digital Marketing is the practice of promoting products, services, and brands through internet-connected, data-driven channels — encompassing [[Search Engine Optimisation]], [[Content Marketing]], [[Social Media Marketing]], [[Email Marketing]], [[Programmatic Advertising]], and emerging channels such as [[Augmented Reality]] and conversational interfaces. It is distinguished from traditional marketing by its measurability, real-time optimisation, and capacity for personalisation at scale, enabled by [[Data Analytics]], [[Machine Learning]], and [[Customer Data Platform]] technologies.

- ### Overview
  - Digital Marketing emerged as an established discipline in the 1990s alongside the commercialisation of the internet, evolving from simple banner advertisements and email newsletters into a sophisticated ecosystem of channels, tools, and disciplines.
  - Its central proposition is precision: messages can be targeted to specific audience segments based on demographics, behaviour, intent signals, and contextual factors, and outcomes can be measured end-to-end via [[Attribution Modelling]].
  - Why it matters:
    - Enables businesses of all sizes to reach global or hyper-local audiences at controlled cost.
    - Provides closed-loop feedback — every impression, click, and conversion generates data that informs the next campaign iteration.
    - Underpins the commercial model of the modern web, funding free-at-point-of-use services through advertising revenue.
    - Increasingly intersects with [[Artificial Intelligence]] for predictive audience modelling, creative generation, and bid optimisation.
  - The discipline is subject to significant regulatory pressure from [[Privacy Regulation]] (GDPR, CCPA, ePrivacy) as well as platform-level changes such as cookie deprecation, which are reshaping the data foundations upon which targeting depends.

- ### Key Components
  - **Search Engine Optimisation ([[Search Engine Optimisation]])**
    - Optimising web content and technical structure to improve organic visibility in search engine results pages (SERPs).
    - Encompasses on-page optimisation, link acquisition, technical crawlability, and content relevance.
  - **Paid Search / Search Engine Marketing**
    - Purchasing keyword-triggered advertisements in search engine results via auction-based platforms (Google Ads, Microsoft Advertising).
    - Closely coupled to [[Attribution Modelling]] and [[Conversion Rate Optimisation]].
  - **Content Marketing ([[Content Marketing]])**
    - Creating and distributing valuable, relevant content — articles, video, podcasts, infographics — to attract and retain audiences.
    - Relies on [[Data Analytics]] to identify topics with high audience demand and low competitive supply.
  - **Social Media Marketing ([[Social Media Marketing]])**
    - Building brand presence and audience relationships through organic posts and paid campaigns on social platforms.
    - Increasingly incorporates creator/influencer partnerships and short-form video.
  - **Email Marketing ([[Email Marketing]])**
    - Direct communication to opted-in subscriber lists; one of the highest-ROI digital channels.
    - Modern email marketing uses [[Personalisation]] and behavioural triggers managed through marketing automation platforms.
  - **Programmatic Advertising ([[Programmatic Advertising]])**
    - Automated, real-time auction-based buying of digital display, video, and audio ad inventory across publisher networks.
    - Relies on demand-side platforms (DSPs), supply-side platforms (SSPs), and data management layers.
    - Intersects with [[Data Infrastructure]] for audience data onboarding and with [[Machine Learning]] for bid prediction.
  - **Customer Data Platform ([[Customer Data Platform]])**
    - Unified database that ingests, resolves, and activates first-party customer data across marketing channels.
    - Central to a privacy-first, cookieless strategy.
  - **Recommendation Engine ([[Recommendation Engine]])**
    - Algorithms that surface personalised product or content suggestions based on user behaviour and collaborative filtering.
    - Core to [[E-Commerce]] and content-discovery experiences.
  - **A/B Testing ([[A/B Testing]])**
    - Controlled experiments comparing variants of creative, copy, or page design to identify the statistically superior option.
    - Underpins [[Conversion Rate Optimisation]] and continuous improvement loops.

- ### Mechanisms & Technology
  - **Audience Segmentation ([[Audience Segmentation]])**
    - Dividing a target audience into groups sharing common attributes or behaviours to enable tailored messaging.
    - Segments may be rules-based or derived via [[Machine Learning]] clustering.
  - **Attribution Modelling ([[Attribution Modelling]])**
    - Methods for assigning credit for a conversion across the sequence of touchpoints a user encountered before converting.
    - Ranges from last-click heuristics to data-driven multi-touch models and incrementality testing.
  - **Personalisation ([[Personalisation]])**
    - Dynamically adapting content, offers, and experiences to the inferred preferences or context of an individual user.
    - Enabled by [[Customer Data Platform]] data, [[Recommendation Engine]] outputs, and real-time decisioning engines.
  - **Marketing Automation**
    - Software systems that trigger, sequence, and manage marketing communications across channels based on user actions or time-based rules.
    - Reduces manual effort while increasing consistency and speed of response.
  - **Conversion Rate Optimisation ([[Conversion Rate Optimisation]])**
    - Systematic process of improving the proportion of website or landing page visitors who complete a desired action.
    - Combines [[A/B Testing]], user research, UX analysis, and [[Data Analytics]].

- ### Applications & Use Cases
  - **E-Commerce ([[E-Commerce]])**
    - Digital marketing is the primary customer acquisition and retention mechanism for online retail.
    - Product listing ads, dynamic remarketing, and cart-abandonment email flows are foundational tactics.
  - **B2B Lead Generation**
    - Content marketing and paid search drive prospects into sales funnels; marketing automation nurtures leads toward conversion.
    - Account-based marketing (ABM) uses precise targeting to focus resources on high-value accounts.
  - **Brand Building**
    - Social media, video advertising, and content distribution build awareness and affinity over time.
    - [[Brand Identity]] consistency across channels is managed through design systems and digital asset management.
  - **Loyalty Programmes ([[Loyalty Programs]])**
    - Email and mobile push notifications deliver personalised rewards, offers, and updates to existing customers.
    - [[Blockchain]]-enabled tokenised loyalty programmes allow interoperable point systems and verifiable ownership of rewards.
  - **Local and Geo-targeted Marketing**
    - Search and social platforms enable hyper-local targeting by geography, enabling proximity-based promotions.
    - [[Augmented Reality]] activations anchor brand experiences to physical locations visible through mobile devices.
  - **AI-Driven Campaign Optimisation**
    - [[Machine Learning]] models predict click-through rates, conversion probabilities, and optimal bid prices in real time.
    - [[Natural Language Processing]] powers conversational advertising (chatbots, voice search) and automated ad copy generation.
  - **Privacy-First & Cookieless Marketing**
    - As third-party cookies are deprecated, marketers are shifting to first-party data strategies via [[Customer Data Platform]] investments.
    - Contextual targeting — matching ads to page content rather than user profiles — is regaining prominence.

- ### Relationships
  - hasPart:: [[Search Engine Optimisation]]
  - hasPart:: [[Content Marketing]]
  - hasPart:: [[Email Marketing]]
  - hasPart:: [[Programmatic Advertising]]
  - hasPart:: [[Social Media Marketing]]
  - uses:: [[Recommendation Engine]]
  - uses:: [[Digital Content]]
  - uses:: [[Customer Data Platform]]
  - uses:: [[Data Analytics]]
  - uses:: [[Machine Learning]]
  - enables:: [[E-Commerce]]
  - enables:: [[Loyalty Programs]]
  - enables:: [[Personalisation]]
  - enables:: [[Conversion Rate Optimisation]]
  - requires:: [[Data Infrastructure]]
  - requires:: [[Audience Segmentation]]
  - requires:: [[Attribution Modelling]]
  - relatedTo:: [[Brand Identity]]
  - relatedTo:: [[User Experience]]
  - relatedTo:: [[Privacy Regulation]]
  - relatedTo:: [[A/B Testing]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Augmented Reality]]
  - bridges-to:: [[Artificial Intelligence]]
  - bridges-to:: [[Natural Language Processing]]

- ### Standards & Context
  - **Privacy Regulation**
    - [[Privacy Regulation]] frameworks including GDPR (EU, 2018), CCPA (California, 2020), and ePrivacy Directive govern data collection, consent, and cross-border data transfer in digital marketing contexts.
    - Consent management platforms (CMPs) implement the technical mechanisms for user consent capture and storage.
  - **Ad Tech Standards**
    - Interactive Advertising Bureau (IAB) publishes the OpenRTB protocol for programmatic auction bidding and the Transparency and Consent Framework (TCF) for consent propagation across the ad-tech supply chain.
    - VAST and VPAID standards govern video ad serving; IAB Tech Lab maintains most ad-tech specifications.
  - **Measurement Standards**
    - Media Rating Council (MRC) defines viewability standards (e.g., 50% of pixels in view for 1 second for display).
    - Privacy Sandbox (Google) initiatives including Topics API and Protected Audience API aim to replace third-party cookies with privacy-preserving alternatives.
  - **Data Interoperability**
    - The emergence of data clean rooms (e.g., Google Ads Data Hub, Amazon Marketing Cloud) enables privacy-safe data collaboration between advertisers and platforms without raw data sharing.

- ### Provenance
  - sources:: IAB Tech Lab (iab.com/techlab), Interactive Advertising Bureau, Media Rating Council, Google Privacy Sandbox documentation, GDPR (Regulation (EU) 2016/679)
  - updated:: 2026-06-13
  - domain-remap-note:: Original domain was "spatial-computing" (fallback assignment); remapped to "data" as digital marketing is fundamentally a data-driven discipline; the spatial/AR dimensions are cross-domain links captured in bridgesTo relations.
