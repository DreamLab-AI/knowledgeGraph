public:: true

# Usability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7f2ced3ef671a5f0db505a5b9ffde3515f80b66688546e8fcb25ba8e7ac7d028",
  "@type": "Page",
  "vc:slug": "usability",
  "title": "Usability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hri",
      "vc:label": "HRI"
    },
    {
      "@id": "urn:visionflow:linked:user-experience",
      "vc:label": "User Experience"
    },
    {
      "@id": "urn:visionflow:linked:https-www-nngroup-com-articles-usability-101-introduction-to-usability",
      "vc:label": "https://www.nngroup.com/articles/usability-101-introduction-to-usability/"
    },
    {
      "@id": "urn:visionflow:linked:https-www-iso-org-standard-77520-html",
      "vc:label": "https://www.iso.org/standard/77520.html"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Usability"
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
  "@id": "urn:ngm:class:usability",
  "@type": "Class",
  "label": "Usability",
  "definition": "Usability is the degree to which a product or system can be used effectively, efficiently, and with satisfaction by its intended users. It is a central concern of human-computer interaction.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:user-experience",
      "label": "User Experience"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:usability:b33edbd4fa31",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7f2ced3ef671a5f0db505a5b9ffde3515f80b66688546e8fcb25ba8e7ac7d028"
  },
  "vc:resolutions": [
    {
      "raw": "[[HRI]]",
      "resolved": "urn:visionflow:linked:hri",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Experience]]",
      "resolved": "urn:visionflow:linked:user-experience",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.nngroup.com/articles/usability-101-introduction-to-usability/]]",
      "resolved": "urn:visionflow:linked:https-www-nngroup-com-articles-usability-101-introduction-to-usability",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.iso.org/standard/77520.html]]",
      "resolved": "urn:visionflow:linked:https-www-iso-org-standard-77520-html",
      "kind": "StubLink"
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
  - Usability is the degree to which a product or system can be used effectively, efficiently, and with satisfaction by its intended users. It is a central concern of human-computer interaction.

- ### Semantic Classification
  - owl-class:: general:Usability
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[User Experience]]
  - bridges-to:: [[HRI]]

- ### Content
  - Usability concerns how easily users can accomplish their goals with a system, including how quickly they learn it, how few errors they make, and how satisfied they are. It is assessed through testing, observation, and established heuristics.
  - Improving usability involves clear interface design, sensible defaults, and feedback that helps users understand the state of the system. Usability evaluation is a standard step in designing software, devices, and services.

- ### Provenance
  - sources:: [[https://www.nngroup.com/articles/usability-101-introduction-to-usability/]], [[https://www.iso.org/standard/77520.html]]
  - migration-date:: 2026-05-29T00:00:00Z
