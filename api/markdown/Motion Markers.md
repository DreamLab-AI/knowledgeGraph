schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#MotionMarkers
legacy_uri:: urn:visionclaw:concept:spatial-computing:motion-markers
public:: true

# Motion Markers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f1bf3fc72b516ee4b96a59c7fdc6d337b7b1ecd491fa7d68c85695c73963627a",
  "@type": "Page",
  "vc:slug": "motion-markers",
  "title": "Motion Markers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-motion-analysis",
      "vc:label": "3D Motion Analysis"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-capture-technology",
      "vc:label": "Motion Capture Technology"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-50eb24fb245d"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#MotionMarkers"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9973"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Motion Markers"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:motion-markers"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:motion-markers"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f1bf3fc72b516ee4b96a59c7fdc6d337b7b1ecd491fa7d68c85695c73963627a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:motion-markers",
  "@type": "Class",
  "label": "Motion Markers",
  "definition": "Reflective or active tracking points placed on subjects for optical motion capture systems, typically 12-15mm diameter for full-body capture, enabling precise position tracking at frame rates from 120fps to fps for animation, biomechanics, and performance analysis.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:motion-capture-technology",
      "label": "Motion Capture Technology"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-motion-analysis",
        "label": "3D Motion Analysis"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:motion-markers:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f1bf3fc72b516ee4b96a59c7fdc6d337b7b1ecd491fa7d68c85695c73963627a"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Motion Analysis]]",
      "resolved": "urn:visionflow:linked:3-d-motion-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Capture Technology]]",
      "resolved": "urn:visionflow:owl:class:motion-capture-technology",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f1bf3fc72b516ee4b96a59c7fdc6d337b7b1ecd491fa7d68c85695c73963627a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Reflective or active tracking points placed on subjects for optical motion capture systems, typically 12-15mm diameter for full-body capture, enabling precise position tracking at frame rates from 120fps to 10,000fps for animation, biomechanics, and performance analysis.

- ### Semantic Classification
  - owl-class:: spatial-computing:MotionMarkers
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Motion Capture Technology]]
  - enables:: [[3D Motion Analysis]]

- ### Content

  ## Marker-Based Systems

  ### Gold Standard Status
  - Clinical acceptance
  - High accuracy
  - Proven reliability
  - Research validation
  - Industry standard

  ### Technical Specifications
  - 12-15mm diameter typical
  - Full-body tracking
  - 120-160fps standard
  - Up to 10,000fps possible
  - Resolution-dependent speed

  ## System Comparison (2024)

  ### Marker-Based Advantages
  - Higher precision
  - Established protocols
  - Research validation
  - Professional workflows
  - Consistent results

  ### Markerless Development
  - Non-invasive tracking
  - Computer vision methods
  - Deep learning algorithms
  - Video-based analysis
  - Accessibility improvement

  ## Accuracy Research

  ### Systematic Review Findings
  - Good to excellent spatiotemporal accuracy
  - Hip and knee: moderate to excellent
  - Ankle: variable reliability
  - Gait analysis focus
  - Meta-analysis validation

  ### Reliability Studies
  - 39 kinematic variables tested
  - 10 fundamental movements
  - Moderate to excellent ICC
  - Most movements excellent (>0.90)
  - Inter/intra-rater consistency

  ## Applications

  ### Clinical Biomechanics
  - Gait analysis
  - Rehabilitation assessment
  - Injury evaluation
  - Surgical planning
  - Treatment monitoring

  ### Entertainment Industry
  - Film animation
  - Video game development
  - Virtual production
  - Performance capture
  - Character animation

  ### Sports Science
  - Athlete performance
  - Technique analysis
  - Injury prevention
  - Training optimisation
  - Movement patterns

  ## December 2024 Development

  ### CAMERA Software (University of Bath)
  - Open access release
  - Markerless analysis
  - Comparable accuracy
  - Deep learning methods
  - Body landmark detection

  ### Clinical Implications
  - Unobtrusive analysis
  - Video footage processing
  - Physiotherapy support
  - Sports coaching
  - Accessibility expansion

  ## Marker Types

  ### Passive Markers
  - Reflective material
  - Infrared illumination
  - Camera detection
  - No power required
  - Cost-effective

  ### Active Markers
  - LED-based
  - Self-illuminating
  - Unique identification
  - Higher visibility
  - Power requirements

  ## Placement Protocols

  ### Anatomical Landmarks
  - Joint centres
  - Bony prominences
  - Segment tracking
  - Standardised protocols
  - Cluster configurations

  ### Considerations
  - Subject size
  - Movement range
  - Occlusion prevention
  - Marker visibility
  - Attachment security

  ## Future Trends

  ### Hybrid Approaches
  - Marker and markerless fusion
  - AI-enhanced tracking
  - Real-world deployment
  - Reduced setup time
  - Broader accessibility

  ### Research Directions
  - Clinical usefulness validation
  - Real-world performance
  - Neurodegeneration applications
  - Functional assessment
  - Home-based monitoring

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
