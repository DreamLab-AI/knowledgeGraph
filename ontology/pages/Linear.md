public:: true

# Linear
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab8c676a233e75a1ac7af513451341dcb599cead844adb95d2bd2271d21b237f",
  "@type": "Page",
  "vc:slug": "linear",
  "title": "Linear",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:linear-algebra",
      "vc:label": "Linear Algebra"
    },
    {
      "@id": "urn:visionflow:linked:graphics-pipeline",
      "vc:label": "Graphics Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Linear"
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
  "@id": "urn:ngm:class:linear",
  "@type": "Class",
  "label": "Linear",
  "definition": "Linear refers to relationships, mappings or systems whose output is proportional to and additive in their input, a property exploited heavily in graphics colour spaces and numerical methods.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-graphics",
      "label": "Computer Graphics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
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
  "@id": "urn:visionflow:annotation:link-resolutions:linear:7f2fe580edb3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab8c676a233e75a1ac7af513451341dcb599cead844adb95d2bd2271d21b237f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Linear Algebra]]",
      "resolved": "urn:visionflow:linked:linear-algebra",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics Pipeline]]",
      "resolved": "urn:visionflow:linked:graphics-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
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
  - Linear refers to relationships, mappings or systems whose output is proportional to and additive in their input, a property exploited heavily in graphics colour spaces and numerical methods.

- ### Semantic Classification
  - owl-class:: metaverse:Linear
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Real-Time Rendering]]
  - requires:: [[Linear Algebra]]
  - enables:: [[Graphics Pipeline]]

- ### Content
  - Linearity means a function satisfies additivity and scaling, so transformations compose predictably. Linear transforms expressed as matrices underpin vertex processing, projection and skinning in real-time graphics.
  - Physically based rendering performs lighting maths in a linear colour space before applying a non-linear transfer curve for display. Working in linear light keeps additive operations such as blending and filtering correct, after which a gamma encoding is applied for output.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
