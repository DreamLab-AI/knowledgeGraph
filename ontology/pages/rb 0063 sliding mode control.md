public:: true

# rb 0063 sliding mode control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:24610823c52aaf970deb69dc8b13dc5587e4c44940560e60a35f147c4d30118b",
  "@type": "Page",
  "vc:slug": "rb-0063-sliding-mode-control",
  "title": "rb 0063 sliding mode control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0063"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0063 sliding mode control"
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
  "@id": "urn:ngm:class:rb-0063-sliding-mode-control",
  "@type": "Class",
  "label": "rb 0063 sliding mode control",
  "definition": "Sliding Mode Control (SMC) is a nonlinear robust control technique that drives system states onto a predefined sliding surface in state space and then maintains them on that surface using discontinuous (switching) control actions. Once on the sliding manifold, the system dynamics become insensitive to matched disturbances and parameter uncertainties, making SMC highly robust for robot manipulators with uncertain dynamics, friction, and external loads. A key challenge is chattering — high-frequency oscillation caused by the switching law — which is addressed through boundary layer methods and higher-order SMC variants.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:control-theory",
      "label": "Control Theory"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0061-nonlinear-control", "label": "rb 0061 nonlinear control"},
      {"@id": "urn:ngm:class:rb-0048-pid-controller", "label": "rb 0048 pid controller"},
      {"@id": "urn:ngm:class:robust-control", "label": "Robust Control"},
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"},
      {"@id": "urn:ngm:class:rb-0054-position-control", "label": "rb 0054 position control"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0062-model-predictive-control", "label": "rb 0062 model predictive control"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticCategoryInference"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0063-sliding-mode-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:24610823c52aaf970deb69dc8b13dc5587e4c44940560e60a35f147c4d30118b"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - Sliding Mode Control (SMC) is a nonlinear robust control technique that forces the system state trajectory onto a predefined sliding surface in state space and maintains it there via high-frequency switching control actions. The controller design involves two phases: reaching the sliding surface and sliding along it. On the sliding manifold, the closed-loop behaviour is determined entirely by the surface design, rendering it invariant to matched disturbances and modelling uncertainties — a property of considerable value in robot control where payload variations and joint friction are difficult to model exactly.

- ### Semantic Classification
  - owl-class:: robotics:rb0063slidingmodecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - SMC is a member of the nonlinear control family and contrasts with linear controllers like PID in that it provides guaranteed robustness without requiring accurate system models. It is frequently compared with Model Predictive Control (MPC): SMC offers faster switching responses and simpler implementation, while MPC handles constraints explicitly. In practice, SMC is often combined with adaptive and intelligent control strategies to reduce chattering while preserving robustness in robot manipulators and exoskeletons.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
