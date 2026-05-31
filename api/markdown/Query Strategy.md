public:: true

# Query Strategy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:query-strategy",
  "@type": "Page",
  "vc:slug": "query-strategy",
  "title": "Query Strategy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:query-strategy",
  "@type": "Class",
  "label": "Query Strategy",
  "definition": "A query strategy is the policy by which an active-learning system selects which unlabelled instances to request labels for, aiming to maximise model improvement per labelling cost. Common strategies include uncertainty sampling, query-by-committee, and expected model change. It is the decision-making core that makes active learning more label-efficient than passive supervised learning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:active-learning", "label": "Active Learning"},
      {"@id": "urn:ngm:class:learning-algorithm", "label": "Learning Algorithm"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A query strategy decides which unlabelled samples an active learner should request labels for to maximise information gain. It is a core part of [[Active Learning]] and of the broader [[Learning Algorithm]] design space.
- ### Content
  - Uncertainty sampling selects instances the model is least confident about; query-by-committee picks points of maximal disagreement among an ensemble; expected-error-reduction estimates downstream impact. The choice trades off computational cost against labelling efficiency, and poorly chosen strategies can introduce sampling bias that degrades generalisation.
