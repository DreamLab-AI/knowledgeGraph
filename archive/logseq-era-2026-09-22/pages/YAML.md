public:: true

# YAML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9831daaaa0a94144fc3378fde30109ecfc1639ae1d738f35bedbb6ac80210f85",
  "@type": "Page",
  "vc:slug": "yaml",
  "title": "YAML",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-serialization",
      "vc:label": "Data Serialization"
    },
    {
      "@id": "urn:visionflow:linked:json",
      "vc:label": "JSON"
    },
    {
      "@id": "urn:visionflow:linked:openapi",
      "vc:label": "OpenAPI"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:yaml",
  "@type": "Class",
  "label": "YAML",
  "definition": "A human-readable data serialisation language (YAML Ain't Markup Language) that expresses mappings, sequences, and scalars through indentation-based structure rather than delimiters, and is a strict superset of JSON. Designed for legibility and hand-editing, it adds comments, anchors and aliases for reuse, and multi-document streams, which has made it the dominant format for configuration in the DevOps ecosystem — Kubernetes manifests, CI pipelines, Ansible playbooks, and OpenAPI definitions — despite well-known pitfalls around implicit typing.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:data-serialization",
    "label": "Data Serialization"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:json",
        "label": "JSON"
      },
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      },
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A human-readable data serialisation language (YAML Ain't Markup Language) that expresses mappings, sequences, and scalars through indentation-based structure rather than delimiters, and is a strict superset of JSON. Designed for legibility and hand-editing, it adds comments, anchors and aliases for reuse, and multi-document streams, which has made it the dominant format for configuration in the DevOps ecosystem — Kubernetes manifests, CI pipelines, Ansible playbooks, and OpenAPI definitions — despite well-known pitfalls around implicit typing."

- ### Semantic Classification
  - owl-class:: standards:YAML
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Data Serialization]]
  - contrasts-with:: [[JSON]]
  - contrasts-with:: [[XML]]
  - related-to:: [[OpenAPI]]

- ### Content

  ## Definition

  **YAML** ("YAML Ain't Markup Language", a deliberately recursive backronym) is a data serialisation language first released in 2001 by Clark Evans, Ingy döt Net, and Oren Ben-Kiki, and standardised most recently as YAML 1.2.2 (2021). Its data model is the familiar trio of scalars, sequences, and mappings, but its syntax prioritises human legibility: structure is conveyed by indentation, strings rarely need quoting, and `#` comments are first-class — the single biggest practical advantage over [[JSON]], which forbids them. Since YAML 1.2, every valid JSON document is also valid YAML, so YAML is formally a superset.

  Beyond the JSON-equivalent core, YAML adds features aimed at hand-written documents: **anchors and aliases** (`&base` / `*base`) with merge keys to avoid repetition, **multi-document streams** separated by `---` (heavily used by Kubernetes and CI systems), block scalars (`|` and `>`) for embedded text, and an extensible tag system for typed values. These same features carry costs: aliases enable the "billion laughs" expansion attack, tags in permissive parsers enabled arbitrary object deserialisation (the class of vulnerability behind unsafe `yaml.load` in PyYAML), and implicit typing in YAML 1.1 produced folklore bugs — `no` parsed as false (the "Norway problem"), version numbers like `1.20` parsed as floats. YAML 1.2's core schema and safe-loading APIs address most of these, but many deployed parsers still default to 1.1 behaviour.

  Compared with [[XML]], YAML carries far less syntactic ceremony and no attribute/element distinction; compared with JSON, it trades parsing simplicity and speed for readability. The ecosystem's rough consensus: JSON for machine-to-machine interchange and APIs, YAML for configuration humans edit, TOML or environment variables where YAML's whitespace sensitivity bites.

  ## Current Landscape

  - **DevOps lingua franca**: Kubernetes manifests, Helm charts, GitHub Actions, GitLab CI, Docker Compose, Ansible playbooks, and cloud-init are all YAML; [[OpenAPI]] and AsyncAPI specifications are conventionally authored in it.
  - **Schema validation**: JSON Schema is routinely applied to YAML documents (the two share a data model), and yamllint plus editor language servers catch indentation and typing errors before deployment.
  - **Fatigue and alternatives**: "YAML engineering" at scale has driven templating and generation layers (Helm, Kustomize, Jsonnet, CUE, Dhall) that emit YAML rather than having humans write it directly.
  - **Parsers**: libyaml (C), SnakeYAML (Java), PyYAML/ruamel.yaml (Python), and go-yaml dominate; safe-load defaults are now the norm in maintained libraries.
  - **Spec status (current as of 2026)**: the newest revision remains YAML 1.2.2 (published 1 October 2021, exactly 12 years after the prior revision); it introduces *no normative changes* to the YAML 1.2 data language — its purpose is to correct errors, add clarity, and fully document the parameterised BNF. Spec sources moved to Markdown on GitHub with a Dockerised build, described by the maintainers as the first step in YAML's "rejuvenated development journey".

  **Sources**:
  - https://yaml.org/spec/1.2.2/
  - https://yaml.com/blog/a-new-yaml-specification/
