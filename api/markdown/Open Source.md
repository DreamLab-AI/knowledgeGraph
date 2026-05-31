public:: true

# Open Source
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c346b98da2893b22de15510021f2bbd882cef94c17dcc0844c80e385fe018ab4",
  "@type": "Page",
  "vc:slug": "open-source",
  "title": "Open Source",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:git-hub",
      "vc:label": "GitHub"
    },
    {
      "@id": "urn:visionflow:linked:https-opensource-org-osd",
      "vc:label": "https://opensource.org/osd"
    },
    {
      "@id": "urn:visionflow:linked:https-opensource-org-licenses",
      "vc:label": "https://opensource.org/licenses"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Open Source"
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
  "@id": "urn:ngm:class:open-source",
  "@type": "Class",
  "label": "Open Source",
  "definition": "Open source refers to software whose source code is made available under a licence that permits use, study, modification, and redistribution. It supports collaborative development.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-development",
      "label": "Software Development"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-source:403cae7d3bfc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c346b98da2893b22de15510021f2bbd882cef94c17dcc0844c80e385fe018ab4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GitHub]]",
      "resolved": "urn:visionflow:linked:git-hub",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://opensource.org/osd]]",
      "resolved": "urn:visionflow:linked:https-opensource-org-osd",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://opensource.org/licenses]]",
      "resolved": "urn:visionflow:linked:https-opensource-org-licenses",
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
  - Open source refers to software whose source code is made available under a licence that permits use, study, modification, and redistribution. It supports collaborative development.

- ### Semantic Classification
  - owl-class:: general:OpenSource
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Software Development]]
  - bridges-to:: [[GitHub]]
  - enables:: [[Software Development]]

- ### Content
  - Open-source software is distributed with its source code under licences that grant rights to inspect and change it. This model allows contributors from many organisations to collaborate on shared projects.
  - Open-source projects underpin much of modern computing, including operating systems, programming languages, and infrastructure tools. Their licences vary in the obligations they place on those who redistribute modified versions.

- ### Provenance
  - sources:: [[https://opensource.org/osd]], [[https://opensource.org/licenses]]
  - migration-date:: 2026-05-29T00:00:00Z
