public:: true

# Log-Probability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:log-probability",
  "@type": "Page",
  "title": "Log-Probability",
  "vc:slug": "log-probability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:log-probability",
  "@type": "Class",
  "label": "Log-Probability",
  "definition": "Log-probability is the natural logarithm of a probability value, used in place of raw probabilities to avoid numerical underflow when multiplying many small probabilities and to convert products into numerically stable sums. In sequence models it expresses the likelihood a model assigns to each candidate token or output, and is the quantity directly optimised during maximum-likelihood training. Decoding strategies such as beam search rank and prune candidate sequences by their accumulated log-probability.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probability-theory",
      "label": "Probability Theory"
    }
  ],
  "relations": {}
}
```
