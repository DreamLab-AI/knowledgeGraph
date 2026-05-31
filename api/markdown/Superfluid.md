public:: true

# Superfluid
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5539ad5f46aa77c2e59e525ccf95c70741eb3f120c5682eb27ffab6d23dcd2d5",
  "@type": "Page",
  "vc:slug": "superfluid",
  "title": "Superfluid",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:quantum-computing",
      "vc:label": "Quantum Computing"
    },
    {
      "@id": "urn:visionflow:linked:entropy",
      "vc:label": "Entropy"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Superfluid"
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
  "@id": "urn:ngm:class:superfluid",
  "@type": "Class",
  "label": "Superfluid",
  "definition": "A phase of matter that flows without viscosity, exhibiting effects such as frictionless flow and the ability to climb container walls. It arises in certain quantum systems at very low temperatures.",
  "domain": "physics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:quantum-computing",
        "label": "Quantum Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:superfluid:93b57daee00e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5539ad5f46aa77c2e59e525ccf95c70741eb3f120c5682eb27ffab6d23dcd2d5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Quantum Computing]]",
      "resolved": "urn:visionflow:linked:quantum-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Entropy]]",
      "resolved": "urn:visionflow:linked:entropy",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - A phase of matter that flows without viscosity, exhibiting effects such as frictionless flow and the ability to climb container walls. It arises in certain quantum systems at very low temperatures.

- ### Semantic Classification
  - owl-class:: physics:Superfluid
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Entropy]]
  - requires:: [[Quantum Computing]]

- ### Content
  - Superfluidity was first observed in liquid helium-4 cooled below about 2.17 kelvin, the lambda point, by Pyotr Kapitsa, John Allen, and Don Misener in 1937. Below this temperature a fraction of the liquid enters a state with zero viscosity.
  - Superfluidity is a macroscopic quantum phenomenon related to Bose-Einstein condensation, in which a large number of particles occupy the same quantum state. It is studied alongside superconductivity, with which it shares the property of dissipationless flow.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
