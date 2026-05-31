public:: true

# Extended Kalman Filter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1adde26c7caf4d3acc1ab4eb5ba9fd4e43cc3fe05398f68190e67006f8b970e3",
  "@type": "Page",
  "vc:slug": "extended-kalman-filter",
  "title": "Extended Kalman Filter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:state-estimation",
      "vc:label": "State Estimation"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:localization",
      "vc:label": "Localization"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:probabilistic-robotics",
      "vc:label": "Probabilistic Robotics"
    },
    {
      "@id": "urn:visionflow:linked:kalman-filter",
      "vc:label": "Kalman Filter"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Extended Kalman Filter"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:extended-kalman-filter",
  "@type": "Class",
  "label": "Extended Kalman Filter",
  "definition": "The Extended Kalman Filter is a recursive state estimator that applies the Kalman filter to non-linear systems by linearising the process and measurement models about the current estimate.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:kalman-filter",
      "label": "Kalman Filter"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:state-estimation",
        "label": "State Estimation"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:localization",
        "label": "Localization"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:extended-kalman-filter:72d423d28758",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1adde26c7caf4d3acc1ab4eb5ba9fd4e43cc3fe05398f68190e67006f8b970e3"
  },
  "vc:resolutions": [
    {
      "raw": "[[State Estimation]]",
      "resolved": "urn:visionflow:linked:state-estimation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bayesian Inference]]",
      "resolved": "urn:visionflow:linked:bayesian-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Localization]]",
      "resolved": "urn:visionflow:linked:localization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Probabilistic Robotics]]",
      "resolved": "urn:visionflow:linked:probabilistic-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Kalman Filter]]",
      "resolved": "urn:visionflow:linked:kalman-filter",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Extended Kalman Filter is a recursive state estimator that applies the Kalman filter to non-linear systems by linearising the process and measurement models about the current estimate.

- ### Semantic Classification
  - owl-class:: robotics:ExtendedKalmanFilter
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Kalman Filter]]
  - bridges-to:: [[Probabilistic Robotics]]
  - requires:: [[State Estimation]], [[Bayesian Inference]]
  - enables:: [[Localization]], [[Sensor Fusion]]

- ### Content
  - The Extended Kalman Filter handles non-linear dynamics and observation models by computing Jacobians to form local linear approximations, then applying the standard Kalman predict and update equations to a Gaussian estimate of state. It maintains a mean and covariance that summarise current uncertainty.
  - It is a workhorse of robotic localisation, navigation and sensor fusion, combining noisy measurements with a motion model to track pose and other states. Accuracy depends on the validity of the linearisation, and strongly non-linear problems may favour unscented or particle methods.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
