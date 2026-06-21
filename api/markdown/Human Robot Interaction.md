public:: true
alias:: Human-Robot Interaction, HumanRobotInteraction

# Human Robot Interaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef4accafcba4f0dd6174e10b55d8f6acc72661b5529f6b20719b87a645a09c87",
  "@type": "Page",
  "vc:slug": "human-robot-interaction",
  "title": "Human Robot Interaction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:dt-enhanced-by",
      "vc:label": "dt:enhancedBy"
    },
    {
      "@id": "urn:visionflow:linked:dt-presented-in",
      "vc:label": "dt:presentedIn"
    },
    {
      "@id": "urn:visionflow:linked:dt-secured-by",
      "vc:label": "dt:securedBy"
    },
    {
      "@id": "urn:visionflow:linked:dt-trained-via",
      "vc:label": "dt:trainedVia"
    },
    {
      "@id": "urn:visionflow:linked:dt-uses",
      "vc:label": "dt:uses"
    },
    {
      "@id": "urn:visionflow:linked:enables-collaboration",
      "vc:label": "enablesCollaboration"
    },
    {
      "@id": "urn:visionflow:linked:ensures-safety",
      "vc:label": "ensuresSafety"
    },
    {
      "@id": "urn:visionflow:linked:gesture-recognition",
      "vc:label": "GestureRecognition"
    },
    {
      "@id": "urn:visionflow:linked:intuitive-interface",
      "vc:label": "IntuitiveInterface"
    },
    {
      "@id": "urn:visionflow:linked:provides-interface",
      "vc:label": "providesInterface"
    },
    {
      "@id": "urn:visionflow:linked:robotics-engineering",
      "vc:label": "RoboticsEngineering"
    },
    {
      "@id": "urn:visionflow:linked:safety-metrics",
      "vc:label": "SafetyMetrics"
    },
    {
      "@id": "urn:visionflow:linked:safety-metrics",
      "vc:label": "SafetyMetrics"
    },
    {
      "@id": "urn:visionflow:linked:safety-protocol",
      "vc:label": "SafetyProtocol"
    },
    {
      "@id": "urn:visionflow:linked:shared-workspace",
      "vc:label": "SharedWorkspace"
    },
    {
      "@id": "urn:visionflow:linked:teach-pendant",
      "vc:label": "TeachPendant"
    },
    {
      "@id": "urn:visionflow:linked:uses-modality",
      "vc:label": "usesModality"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:collaborative-robot",
      "vc:label": "CollaborativeRobot"
    },
    {
      "@id": "urn:visionflow:owl:class:haptic-feedback",
      "vc:label": "HapticFeedback"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "MachineLearning"
    },
    {
      "@id": "urn:visionflow:owl:class:manipulator-arm",
      "vc:label": "ManipulatorArm"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "NaturalLanguageProcessing"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-reality",
      "vc:label": "VirtualReality"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-3003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Human Robot Interaction"
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
  "@id": "urn:ngm:class:human-robot-interaction",
  "@type": "Class",
  "label": "Human Robot Interaction",
  "definition": "Interdisciplinary field studying how humans and robots communicate, collaborate, and interact safely and effectively in shared physical and virtual spaces. HRI combines robotics engineering, AI, human factors engineering, and cognitive science to design systems with natural interaction modalities including gesture recognition, natural language processing, and haptic feedback.",
  "domain": "robotics",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:robo-human-robot-interaction",
    "label": "Human-Robot Interaction"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:gesture-recognition",
        "label": "Gesture Recognition"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:teach-pendant",
        "label": "Teach Pendant"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:safety-metrics",
        "label": "Safety Metrics"
      },
      {
        "@id": "urn:ngm:class:shared-workspace",
        "label": "Shared Workspace"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:safety-metrics",
        "label": "Safety Metrics"
      },
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robot",
        "label": "Collaborative Robot"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:manipulator-arm",
        "label": "Manipulator Arm"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:assistive-robotics",
        "label": "Assistive Robotics"
      },
      {
        "@id": "urn:ngm:class:social-robotics",
        "label": "Social Robotics"
      },
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Telepresence"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cognitive-ergonomics",
        "label": "Cognitive Ergonomics"
      },
      {
        "@id": "urn:ngm:class:intent-recognition",
        "label": "Intent Recognition"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:human-robot-collaboration",
      "label": "Human-Robot Collaboration"
    },
    {
      "@id": "urn:ngm:class:hri",
      "label": "HRI"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:human-robot-interaction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef4accafcba4f0dd6174e10b55d8f6acc72661b5529f6b20719b87a645a09c87"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:enhancedBy]]",
      "resolved": "urn:visionflow:linked:dt-enhanced-by",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:presentedIn]]",
      "resolved": "urn:visionflow:linked:dt-presented-in",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:securedBy]]",
      "resolved": "urn:visionflow:linked:dt-secured-by",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:trainedVia]]",
      "resolved": "urn:visionflow:linked:dt-trained-via",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:uses]]",
      "resolved": "urn:visionflow:linked:dt-uses",
      "kind": "StubLink"
    },
    {
      "raw": "[[enablesCollaboration]]",
      "resolved": "urn:visionflow:linked:enables-collaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[ensuresSafety]]",
      "resolved": "urn:visionflow:linked:ensures-safety",
      "kind": "StubLink"
    },
    {
      "raw": "[[GestureRecognition]]",
      "resolved": "urn:visionflow:linked:gesture-recognition",
      "kind": "StubLink"
    },
    {
      "raw": "[[IntuitiveInterface]]",
      "resolved": "urn:visionflow:linked:intuitive-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[providesInterface]]",
      "resolved": "urn:visionflow:linked:provides-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[RoboticsEngineering|robotics]]",
      "resolved": "urn:visionflow:linked:robotics-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[SafetyMetrics]]",
      "resolved": "urn:visionflow:linked:safety-metrics",
      "kind": "StubLink"
    },
    {
      "raw": "[[SafetyMetrics|safety-assured]]",
      "resolved": "urn:visionflow:linked:safety-metrics",
      "kind": "StubLink"
    },
    {
      "raw": "[[SafetyProtocol]]",
      "resolved": "urn:visionflow:linked:safety-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[SharedWorkspace]]",
      "resolved": "urn:visionflow:linked:shared-workspace",
      "kind": "StubLink"
    },
    {
      "raw": "[[TeachPendant]]",
      "resolved": "urn:visionflow:linked:teach-pendant",
      "kind": "StubLink"
    },
    {
      "raw": "[[usesModality]]",
      "resolved": "urn:visionflow:linked:uses-modality",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArtificialIntelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligence|AI]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CollaborativeRobot]]",
      "resolved": "urn:visionflow:owl:class:collaborative-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HapticFeedback]]",
      "resolved": "urn:visionflow:owl:class:haptic-feedback",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MachineLearning]]",
      "resolved": "urn:visionflow:owl:class:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ManipulatorArm|collaborative manipulation]]",
      "resolved": "urn:visionflow:owl:class:manipulator-arm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NaturalLanguageProcessing]]",
      "resolved": "urn:visionflow:owl:class:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualReality]]",
      "resolved": "urn:visionflow:owl:class:virtual-reality",
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
  - Interdisciplinary field studying how humans and robots communicate, collaborate, and interact safely and effectively in shared physical and virtual spaces. HRI combines [[RoboticsEngineering|robotics]], [[ArtificialIntelligence|AI]], human factors engineering, and psychology to design robots with natural interaction modalities—gesture recognition, [[NaturalLanguageProcessing]], [[HapticFeedback]]—enabling intuitive collaboration. Applications span [[ManipulatorArm|collaborative manipulation]], [[SafetyMetrics|safety-assured]] workspaces, healthcare assistance, and social robotics.

- ### Semantic Classification
  - owl-class:: robotics:HumanRobotInteraction
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[RoboticsDomain]]
  - has-part:: [[GestureRecognition]], [[HapticFeedback]], [[TeachPendant]]
  - requires:: [[SafetyMetrics]], [[SharedWorkspace]]
  - enables:: [[CollaborativeRobot]], [[SafetyMetrics]]
  - bridges-to:: [[VirtualReality]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
