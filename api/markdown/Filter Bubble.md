public:: true

# Filter Bubble
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91b96b0ce9251498c701e24df9c15536c5fcf339c5f3c7cf62af7907a6851244",
  "@type": "Page",
  "vc:slug": "filter-bubble",
  "title": "Filter Bubble",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-society-harms",
      "vc:label": "Digital Society Harms"
    },
    {
      "@id": "urn:visionflow:linked:recommendation-systems",
      "vc:label": "Recommendation Systems"
    },
    {
      "@id": "urn:visionflow:linked:death-of-the-internet",
      "vc:label": "Death of the Internet"
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
  "@id": "urn:ngm:class:filter-bubble",
  "@type": "Class",
  "label": "Filter Bubble",
  "definition": "A state of informational isolation in which algorithmic personalisation — recommendation systems, personalised search, and engagement-optimised feeds — progressively narrows the content a person encounters to material predicted to match their existing preferences and beliefs, reducing exposure to disconfirming viewpoints without the person's awareness or consent; coined by Eli Pariser in 2011, the concept names a structural harm of personalised media that feeds polarisation, reinforces bias, and erodes the shared factual ground of public discourse.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-society-harms",
    "label": "Digital Society Harms"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:death-of-the-internet",
        "label": "Death of the Internet"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:recommendation-systems",
        "label": "Recommendation Systems"
      },
      {
        "@id": "urn:ngm:class:personalisation",
        "label": "Personalisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:content-discovery",
        "label": "Content Discovery"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A state of informational isolation in which algorithmic personalisation — recommendation systems, personalised search, and engagement-optimised feeds — progressively narrows the content a person encounters to material predicted to match their existing preferences and beliefs, reducing exposure to disconfirming viewpoints without the person's awareness or consent; coined by Eli Pariser in 2011, the concept names a structural harm of personalised media that feeds polarisation, reinforces bias, and erodes the shared factual ground of public discourse."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FilterBubble
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Digital Society Harms]]
  - depends-on:: [[Recommendation Systems]]
  - part-of:: [[Death of the Internet]]

- ### Content

  ## Definition

  A **filter bubble** is the informational enclosure produced when algorithmic curation systems learn a person's preferences and then optimise what they see against those learned preferences. Eli Pariser introduced the term in his 2011 book *The Filter Bubble*, observing that personalised Google results and Facebook feeds meant two people issuing the same query or following the same topics could inhabit entirely different information worlds — invisibly, involuntarily, and alone, since no two bubbles are identical.

  The mechanism is a feedback loop between user behaviour and the ranking objective. Engagement-optimised [[Recommendation Systems]] surface content similar to what a user previously clicked; the user, seeing mostly agreeable content, clicks in ways that confirm the model's estimate; the estimate sharpens and the window of exposure narrows further. Content-based filtering contributes through over-specialisation in feature space, collaborative filtering through homophily — amplifying what similar users consumed. The filter bubble is distinct from the related *echo chamber*: an echo chamber is socially self-selected (people choose like-minded communities), whereas a filter bubble is algorithmically imposed and largely invisible to its inhabitant.

  Within this graph the filter bubble sits among the harms catalogued under [[Death of the Internet]] — dynamics by which an open, exploratory web degrades into pre-digested, engagement-farmed enclosures. Its significance grows as generative AI intermediates more of what people read: a conversational assistant that adapts to user preferences can personalise not just which documents are ranked first but how information itself is framed.

  ## Current Landscape

  Empirical research complicates the strong version of the thesis. Large-scale studies — including work published in *Science* and *Nature* on Facebook data during the 2020 US election, and repeated audits of Google Search — find algorithmic personalisation of news exposure to be more modest than Pariser's account implied, with self-selection (whom users choose to follow) often the larger driver of skewed diets. Yet narrower effects are well documented on recommendation-driven platforms such as YouTube and TikTok, where rabbit-hole dynamics can rapidly concentrate a feed around conspiratorial or extreme content. Policy has moved regardless of the academic debate: the EU's Digital Services Act obliges very large platforms to offer at least one non-profiling recommender option and to assess systemic risks from their ranking systems, and the UK's Online Safety Act imposes related duties. Mitigation research focuses on diversity- and serendipity-aware ranking objectives, exposure auditing, and giving users legible controls over their own personalisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
