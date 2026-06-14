public:: true

# Advertising
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:advertising",
  "@type": "Page",
  "vc:slug": "advertising",
  "title": "Advertising",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:advertising",
  "@type": "Class",
  "label": "Advertising",
  "definition": "Advertising is the practice of communicating persuasive messages about products, services, ideas, or brands to targeted audiences through paid media channels with the intent to influence awareness, attitudes, or purchasing behaviour. It encompasses the creative development of messages and the strategic planning and buying of media placements across channels including broadcast, print, digital, out-of-home, and emerging immersive formats. Modern advertising increasingly relies on data-driven audience targeting, algorithmic media buying, and AI-generated creative to maximise return on investment at scale.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:advertising-and-marketing", "label": "Advertising and Marketing"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:digital-marketing", "label": "Digital Marketing"},
      {"@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:programmatic-advertising", "label": "Programmatic Advertising"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-privacy", "label": "Data Privacy"},
      {"@id": "urn:ngm:class:social-media-platform-infrastructure", "label": "social media"},
      {"@id": "urn:ngm:class:gdpr", "label": "GDPR"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Advertising is the paid communication of persuasive messages from an identified sponsor to a defined audience, designed to create or maintain awareness of a brand, product, or service and to stimulate desired audience responses such as purchase, advocacy, or behaviour change. Contemporary advertising integrates creative content strategy with [[Digital Marketing]] distribution and [[Predictive Analytics]] audience modelling to deliver targeted exposures across digital, broadcast, print, and out-of-home channels. The growth of [[Programmatic Advertising]]—algorithmic automated buying and selling of ad inventory—has transformed media economics, whilst [[Data Privacy]] regulation including [[GDPR]] is reshaping the consent and data infrastructure on which digital targeting depends.

- ### Relationships
  - Advertising is a primary driver of revenue for media platforms, search engines, and [[Social Media]] networks, making it a central economic mechanism of the digital information ecosystem. [[Digital Marketing]] encompasses the broader set of owned and earned media tactics alongside paid advertising. [[Programmatic Advertising]] automates the advertising transaction layer. [[Predictive Analytics]] powers audience segmentation and campaign optimisation. [[Data Privacy]] constraints, particularly [[GDPR]] and equivalent frameworks, govern the permissible data flows on which behavioural targeting relies.

- ### Content
  - Advertising as a formalised commercial practice emerged with the development of mass media in the nineteenth century—newspaper classified advertisements, billboard posters, and early brand advertising for consumer goods such as soap and patent medicines. The introduction of broadcast radio in the 1920s and television in the 1950s created mass-reach advertising formats that enabled national brand building. The advertising agency model, pioneered by firms such as J. Walter Thompson, professionalised creative development and media planning as distinct disciplines.

  - The digital revolution transformed advertising's technical infrastructure. The introduction of banner advertising in 1994 (HotWired), search advertising via Google AdWords in 2000, and social media advertising in the mid-2000s created new performance-measurable formats. Programmatic real-time bidding, scaled through demand-side platforms (DSPs) and supply-side platforms (SSPs) connected via ad exchanges, automated the media transaction to millisecond timescales. The result was a massive shift of advertising spend from traditional to digital channels, with Google and Meta capturing the majority of global digital advertising revenue.

  - The ecosystem encompasses brands (advertisers), agencies (creative and media), ad technology platforms, publishers, and data providers. Creative development spans brand-building campaigns, direct response advertising, influencer partnerships, and increasingly AI-generated personalised creative variants. Attribution modelling—determining which advertising exposures caused conversions—remains technically complex due to the multi-touch nature of consumer journeys. Ad fraud, brand safety, and viewability measurement are persistent quality challenges in digital advertising supply chains.

  - As of 2024–2025, advertising is navigating three simultaneous disruptions: the deprecation of third-party cookies (ongoing in major browsers), the rise of retail media networks as first-party data environments, and the application of generative AI to creative production and personalisation at scale. Contextual targeting, privacy-preserving measurement (clean rooms, differential privacy), and cohort-based signals (Google's Privacy Sandbox) are replacing identity-graph-based targeting approaches. Immersive advertising in extended reality environments and interactive connected TV (CTV) formats represent emerging channels with distinct creative and measurement paradigms.

