public:: true

# Search Engine Optimisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:search-engine-optimisation", "@type":"Page", "title":"Search Engine Optimisation", "vc:slug":"search-engine-optimisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:search-engine-optimisation",
  "@type":"Class",
  "label":"Search Engine Optimisation",
  "definition":"Search engine optimisation (SEO) is the discipline of improving a website's visibility and ranking in organic search results. It combines technical optimisation, content relevance, structured data, and authority signals to align pages with how search engines crawl, index, and rank content. SEO bridges marketing intent with the indexing and ranking machinery of search engines to attract qualified, unpaid traffic.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-marketing","label":"Digital Marketing"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:metadata","label":"Metadata"},{"@id":"urn:ngm:class:indexing","label":"Indexing"}],
    "uses":[{"@id":"urn:ngm:class:web-crawler","label":"Web Crawler"},{"@id":"urn:ngm:class:semantic-search","label":"Semantic Search"}],
    "requires":[{"@id":"urn:ngm:class:content-creation","label":"Content Creation"},{"@id":"urn:ngm:class:behavioural-analytics","label":"Behavioural Analytics"}],
    "supports":[{"@id":"urn:ngm:class:user-engagement","label":"User Engagement"},{"@id":"urn:ngm:class:conversion-rate-optimisation","label":"Conversion Rate Optimisation"}],
    "enables":[{"@id":"urn:ngm:class:personalisation","label":"Personalisation"}],
    "implements":[{"@id":"urn:ngm:class:a-b-testing","label":"A B Testing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:semantic-web","label":"Semantic Web"},{"@id":"urn:ngm:class:knowledge-graph","label":"Knowledge Graph"}],
    "relatedTo":[{"@id":"urn:ngm:class:search-engine","label":"Search Engine"},{"@id":"urn:ngm:class:programmatic-advertising","label":"Programmatic Advertising"},{"@id":"urn:ngm:class:audience-segmentation","label":"Audience Segmentation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Search engine optimisation (SEO) is a [[Digital Marketing]] discipline that improves a site's organic visibility in a [[Search Engine]]. It works with the [[Web Crawler]] and [[Indexing]] processes that search engines use, and applies [[Metadata]] and structured data so that pages are understood and ranked appropriately.
- ### Overview
- SEO spans three pillars: technical SEO (crawlability, site speed, mobile readiness, structured data), on-page SEO (content relevance, keyword targeting, internal linking), and off-page SEO (backlinks and authority signals).
- Search engines increasingly interpret intent and meaning rather than literal keywords, drawing SEO toward [[Semantic Search]], [[Semantic Web]] markup, and entity-based optimisation.
- Measurement and iteration are intrinsic: practitioners use [[Behavioural Analytics]] and [[A B Testing]] to refine titles, content, and structure against ranking and engagement outcomes.
- ### Key aspects
- Crawlability and indexability of pages by automated crawlers.
- Structured data and metadata to expose entities and relationships.
- Content relevance and topical authority matched to search intent.
- Authority signals such as inbound links and reputation.
- Core technical signals: performance, accessibility, and mobile usability.
- ### Applications
- Driving qualified organic traffic for [[Conversion Rate Optimisation]].
- Improving discoverability of knowledge bases via [[Knowledge Graph]] and structured markup.
- Complementing paid channels such as [[Programmatic Advertising]].
- Informing [[Content Creation]] strategy with intent and demand signals.
- ### Relationships
- subClassOf:: [[Digital Marketing]]
- hasPart:: [[Metadata]]
- hasPart:: [[Indexing]]
- uses:: [[Web Crawler]]
- uses:: [[Semantic Search]]
- requires:: [[Content Creation]]
- requires:: [[Behavioural Analytics]]
- supports:: [[User Engagement]]
- supports:: [[Conversion Rate Optimisation]]
- enables:: [[Personalisation]]
- implements:: [[A B Testing]]
- bridgesTo:: [[Semantic Web]]
- bridgesTo:: [[Knowledge Graph]]
- relatedTo:: [[Search Engine]]
- relatedTo:: [[Programmatic Advertising]]
- relatedTo:: [[Audience Segmentation]]
- ### Provenance
- updated:: 2026-06-15
- generatedBy:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
