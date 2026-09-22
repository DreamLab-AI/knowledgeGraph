public:: true

# Base Learner

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:base-learner",
  "@type": "Page",
  "title": "Base Learner",
  "vc:slug": "base-learner",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:base-learner",
  "@type": "Class",
  "label": "Base Learner",
  "definition": "A base learner is an individual model trained as one member of an ensemble, whose predictions are combined with those of other base learners to produce a final output. Base learners are typically simple or weak relative to the ensemble as a whole - for example shallow decision trees in a random forest or boosting sequence - so that their errors are diverse and can partially cancel when aggregated. The choice of base learner architecture and training procedure directly affects the diversity and accuracy of the resulting ensemble.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline-model",
      "label": "Machine Learning Model"
    }
  ],
  "relations": {}
}
```
