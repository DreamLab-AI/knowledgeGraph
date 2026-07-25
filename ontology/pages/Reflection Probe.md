public:: true

# Reflection Probe
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0b4bdc619f112151c400ce944d01923cab52205c9c72d36a3f6a0862c337e9ac",
  "@type": "Page",
  "vc:slug": "reflection-probe",
  "title": "Reflection Probe",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9217"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reflection Probe"
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
  "@id": "urn:ngm:class:reflection-probe",
  "@type": "Class",
  "label": "Reflection Probe",
  "definition": "A Reflection Probe is a spatial data structure placed in a 3D scene that captures a 360-degree image of its surroundings into a cubemap texture, which is then sampled by shaders to produce environment reflections on nearby surfaces. Probes are fundamental to physically based rendering pipelines, providing local ambient lighting and specular reflections without the cost of real-time ray tracing. They are placed by artists or computed automatically at bake time and can be blended across zones to produce continuous, plausible illumination.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:render-pipeline",
      "label": "Render Pipeline"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:scene-management", "label": "Scene Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:photorealistic-rendering", "label": "Photorealistic Rendering"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:reflection-probe:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0b4bdc619f112151c400ce944d01923cab52205c9c72d36a3f6a0862c337e9ac"
  },
  "vc:resolutions": [],
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
  - A Reflection Probe is a spatial data structure placed in a 3D scene that captures a 360-degree image of its surroundings into a cubemap texture, which is then sampled by shaders to produce environment reflections on nearby surfaces. Probes are fundamental to physically based rendering pipelines, providing local ambient lighting and specular reflections without the cost of real-time ray tracing. They are placed by artists or computed automatically at bake time and can be blended across zones to produce continuous, plausible illumination.

- ### Semantic Classification
  - owl-class:: spatial-computing:ReflectionProbe
  - owl-role:: Concept

- ### Relationships
  - **uses**: Shader, Physically Based Rendering
  - **hasPart**: Scene Management
  - **enables**: Real-Time Rendering, Photorealistic Rendering
  - **partOf**: Rendering Pipeline

- ### Content
  # ReflectionProbe
  ReflectionProbe represents a key component in Metaverse infrastructure and technology. Research: ReflectionProbe - environmental reflections, cubemap capture, lighting probes
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
