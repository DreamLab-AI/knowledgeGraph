public:: true

# False Positive
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:false-positive", "@type":"Page", "title":"False Positive", "vc:slug":"false-positive", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:false-positive",
  "@type":"Class",
  "label":"False Positive",
  "definition":"A false positive is an outcome in which a classifier or detection system reports the positive class for an instance that actually belongs to the negative class. It is one of the four cells of a confusion matrix and corresponds to a Type I error in statistical terms. The rate of false positives directly shapes precision and specificity and is traded off against false negatives when a decision threshold is tuned.",
  "domain":"machine-learning",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:confusion-matrix","label":"Confusion Matrix"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:classification","label":"Classification"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:confusion-matrix","label":"Confusion Matrix"},
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:classification","label":"Classification"},
      {"@id":"urn:ngm:class:confusion-matrix","label":"Confusion Matrix"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:sensitivity","label":"Sensitivity"},
      {"@id":"urn:ngm:class:specificity","label":"Specificity"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:classification","label":"Classification"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:precision","label":"Precision"},
      {"@id":"urn:ngm:class:recall","label":"Recall"},
      {"@id":"urn:ngm:class:specificity","label":"Specificity"},
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},
      {"@id":"urn:ngm:class:intrusion-detection-system","label":"Intrusion Detection System"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A false positive is a [[Classification]] outcome where a negative instance is wrongly labelled positive, one cell of the [[Confusion Matrix]].
  - It is a Type I error that lowers [[Precision]] and [[Specificity]] during [[Model Evaluation]].
  - It is traded off against false negatives by adjusting a decision threshold.

- ### Overview
  - Detection and classification systems sort instances into predicted positive and negative classes, then compare against ground truth.
  - A false positive raises a false alarm: the system flags something that is, in fact, benign or absent.
  - Lowering the false-positive rate usually raises the false-negative rate, so the balance is chosen to fit the cost of each error type.

- ### Key aspects
  - Defined relative to ground-truth labels and a fixed positive class.
  - One of true positive, false positive, true negative and false negative.
  - Drives precision and specificity but not recall.
  - Sensitive to class imbalance and threshold placement.

- ### Applications
  - Alert fatigue in an [[Intrusion Detection System]] from excessive false alarms.
  - Tuning [[Anomaly Detection]] to suppress spurious detections.
  - Diagnostic screening where false alarms trigger unnecessary follow-up.
  - Reporting in [[Model Evaluation]] alongside [[Recall]] and [[Precision]].

- ### Relationships
  - subClassOf:: [[Confusion Matrix]]
  - hasPart:: [[Classification]]
  - partOf:: [[Confusion Matrix]]
  - partOf:: [[Model Evaluation]]
  - uses:: [[Classification]]
  - uses:: [[Confusion Matrix]]
  - contrastsWith:: [[Sensitivity]]
  - contrastsWith:: [[Specificity]]
  - dependsOn:: [[Classification]]
  - supports:: [[Model Evaluation]]
  - relatedTo:: [[Precision]]
  - relatedTo:: [[Recall]]
  - relatedTo:: [[Specificity]]
  - relatedTo:: [[Anomaly Detection]]
  - relatedTo:: [[Intrusion Detection System]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
