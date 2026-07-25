public:: true

# Sensor Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:sensor-model",
  "@type": "Page",
  "title": "Sensor Model",
  "vc:slug": "sensor-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensor-model",
  "@type": "Class",
  "label": "Sensor Model",
  "definition": "A sensor model, also called an observation or measurement model, is a probabilistic description of how a robot's sensor readings relate to the underlying state of the world, expressing the likelihood of an observation given a hypothesised state. It captures sensor characteristics such as noise, resolution, range limits, and failure modes, allowing a robot to weight evidence appropriately when fusing measurements. Sensor models are central to Bayesian state estimation, where they form the update step that corrects predictions using incoming data.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probabilistic-robotics",
      "label": "Probabilistic Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:probabilistic-robotics",
        "label": "Probabilistic Robotics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:state-estimation",
        "label": "State Estimation"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:observation-model",
        "label": "Observation Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:observation-model",
        "label": "Observation Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:localization",
        "label": "Localization"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:particle-filter",
        "label": "Particle Filter"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:motion-model",
        "label": "Motion Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception"
      },
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:observation-model",
      "label": "Observation Model"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A [[Sensor Model]] is a [[Probabilistic Robotics]] construct describing the likelihood of a measurement given a hypothesised world state.
	- It encodes noise, range, resolution, and failure characteristics of a sensor such as a [[Lidar]] or [[Camera]].
	- It is closely related to the [[Observation Model]] used in Bayesian filtering.
- ### Overview
	- In recursive state estimation the sensor model supplies the measurement-update (correction) step that refines a predicted belief.
	- It complements the [[Motion Model]], which supplies the prediction step.
	- Well-calibrated sensor models let a robot weight conflicting evidence during [[Sensor Fusion]].
- ### Mechanisms
	- Characterise the sensor's noise distribution and systematic biases empirically.
	- Express the conditional likelihood of readings given state, including beam, feature, or pixel-level models.
	- Incorporate the likelihood into a [[Kalman Filter]] or [[Particle Filter]] update.
	- Validate against ground truth and recalibrate as hardware drifts.
- ### Applications
	- Robot [[Localization]] against a known map.
	- Simultaneous mapping and localisation in [[SLAM]].
	- Multi-sensor [[Sensor Fusion]] and [[Robot Perception]].
	- Building consistent maps via [[Mapping]].
- ### Relationships
	- partOf:: [[State Estimation]]
	- partOf:: [[Sensor Fusion]]
	- hasPart:: [[Observation Model]]
	- requires:: [[Lidar]]
	- requires:: [[Camera]]
	- enables:: [[Localization]]
	- enables:: [[SLAM]]
	- supports:: [[Kalman Filter]]
	- supports:: [[Particle Filter]]
	- contrastsWith:: [[Motion Model]]
	- relatedTo:: [[Robot Perception]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
