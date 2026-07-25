public:: true

# rb 0035 accuracy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2ee848e11adaed0543815fecd7fa319ea5cda66c70f1be5d5e2b38e842845ed8",
  "@type": "Page",
  "vc:slug": "rb-0035-accuracy",
  "title": "rb 0035 accuracy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0035"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0035 accuracy"
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
  "@id": "urn:ngm:class:rb-0035-accuracy",
  "@type": "Class",
  "label": "rb 0035 accuracy",
  "definition": "Robot accuracy is the closeness of agreement between a robot's commanded pose and its actual achieved pose, measured as the mean positional or orientational error across multiple repeated commanded positions. Defined in ISO 9283, it encompasses pose accuracy, path accuracy, and static compliance accuracy, and is distinct from repeatability, which measures the spread of repeated attempts at the same pose rather than deviation from the commanded value.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:accuracy", "label": "Accuracy"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0034-repeatability", "label": "rb 0034 repeatability"},
      {"@id": "urn:ngm:class:rb-0036-resolution", "label": "rb 0036 resolution"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0029-inverse-kinematics", "label": "rb 0029 inverse kinematics"},
      {"@id": "urn:ngm:class:calibration", "label": "Calibration"},
      {"@id": "urn:ngm:class:precision", "label": "Precision"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0048-pid-controller", "label": "rb 0048 pid controller"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0035-accuracy:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2ee848e11adaed0543815fecd7fa319ea5cda66c70f1be5d5e2b38e842845ed8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
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
  - **Accuracy** - Difference between commanded and actual position

- ### Semantic Classification
  - owl-class:: robotics:RobotAccuracy
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content

  ## Academic Context

  - **Overview:** Accuracy in measurement science refers to the degree to which a measured value conforms to the true or accepted standard value. It encompasses both *trueness* (closeness of the average of measurements to the true value) and *precision* (repeatability or consistency of measurements) as defined in ISO 5725-1:2023[7].
  - **Key developments:** The distinction between accuracy and precision has been clarified in recent standards, emphasising that accuracy is a composite concept involving both systematic and random errors.
  - **Foundations:** Rooted in metrology and statistics, accuracy assessment underpins reliable data collection across scientific disciplines, ensuring measurement validity and comparability.

  ## Current Landscape (2025)

  - **Industry adoption:** Accuracy metrics are integral in fields ranging from manufacturing quality control to environmental monitoring and astrophysics. Calibration protocols and uncertainty quantification are standard practice.
  - **Notable organisations:** Precision measurement firms like Precisa continue to lead, providing instruments and expertise to ensure measurement accuracy[1].
  - **UK and North England:** Universities such as the University of Manchester and University of Leeds actively research measurement accuracy in applied physics and engineering contexts. Industrial hubs in Sheffield and Newcastle incorporate accuracy standards in advanced manufacturing and materials testing.
  - **Technical capabilities and limitations:** Modern instrumentation achieves high accuracy through rigorous calibration against traceable standards, yet limitations persist due to environmental factors, instrument drift, and incomplete modelling of complex systems[2].
  - **Standards and frameworks:** ISO 5725 series remains the authoritative framework for accuracy evaluation, complemented by regional standards and sector-specific guidelines (e.g., EN-ISO 354:2003 for acoustics)[3][7].

  ## Research & Literature

  - **Key papers:**
  - Pober et al. (2016) discuss calibration accuracy in astrophysical signal detection, highlighting challenges from incomplete source models and their impact on measurement fidelity[2].
  - Allan, R.T., and Vercammen, M.L.S. (2023) provide detailed methodologies for acoustic absorption measurement accuracy in reverberation chambers, illustrating repeatability and reproducibility considerations[3].
  - **Ongoing research:** Focuses on improving calibration techniques, uncertainty quantification, and adaptive algorithms to mitigate measurement errors in dynamic environments.

  ## UK Context

  - **British contributions:** The UK has a strong tradition in metrology, with institutions like the National Physical Laboratory (NPL) advancing accuracy standards and calibration services.
  - **North England innovation hubs:** Manchester's National Graphene Institute and Leeds' Institute for Transport Studies incorporate precise measurement techniques in materials science and transport modelling, respectively.
  - **Regional case studies:** Sheffield's advanced manufacturing sector employs rigorous accuracy protocols to maintain quality in aerospace component fabrication.

  ## Future Directions

  - **Emerging trends:** Integration of AI and machine learning to enhance real-time accuracy assessment and error correction; development of smart sensors with self-calibration capabilities.
  - **Anticipated challenges:** Balancing cost and complexity of high-accuracy systems; addressing accuracy in increasingly miniaturised and complex measurement environments.
  - **Research priorities:** Refining uncertainty models, improving calibration standards for novel materials and quantum technologies, and expanding accessibility of high-accuracy measurement tools.

  ## References

  1. Precisa. (2025). *The Difference between Accuracy and Precision Measurements*. Precisa Blog.  
  2. Pober, J.C., et al. (2016). Calibration requirements for detecting the 21 cm epoch of reionization signal. *Monthly Notices of the Royal Astronomical Society*, 461(3), 3135–3144. https://doi.org/10.1093/mnras/stw1575  
  3. Allan, R.T., & Vercammen, M.L.S. (2023). Measurement of sound absorption in a reverberation room according to EN-ISO 354:2003. *Greenmood Laboratory for Acoustics Report*, A 3544-7E-RA-001.  
  7. ISO. (2023). *ISO 5725-1:2023 Accuracy (trueness and precision) of measurement methods and results — Part 1: General principles and definitions*. International Organization for Standardization.


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
