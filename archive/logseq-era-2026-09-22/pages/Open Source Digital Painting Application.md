public:: true

elevatedFrom:: [[krita]]
# Open Source Digital Painting Application
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80e60f690c1929a507fde3652f01187cfcb54f6c7897213975a66ec35da1ba41",
  "@type": "Page",
  "vc:slug": "open-source-digital-painting-application",
  "title": "Open Source Digital Painting Application",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "krita"
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
  "@id": "urn:ngm:class:open-source-digital-painting-application",
  "@type": "Class",
  "label": "Open Source Digital Painting Application",
  "definition": "Krita is a free, open-source professional digital painting and raster graphics application developed by the KDE community. It supports illustration, concept art, texture painting, and AI-assisted image synthesis via plugins such as krita-ai-diffusion, which integrates Stable Diffusion through a ComfyUI backend on a local or remote inference server.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-art-application", "label": "Digital Art Application"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"},
      {"@id": "urn:ngm:class:creative-tools", "label": "Creative Tools"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-client", "label": "ComfyUI Client"},
      {"@id": "urn:ngm:class:python", "label": "Python"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:krita:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:80e60f690c1929a507fde3652f01187cfcb54f6c7897213975a66ec35da1ba41"
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
  - **Krita** is an open-source raster graphics and digital painting application designed for professional illustrators, concept artists, and visual effects artists. Its plugin ecosystem includes krita-ai-diffusion, which provides an AI image-generation panel powered by a ComfyUI backend. Users can perform inpainting, outpainting, and image-to-image synthesis directly on canvas layers without leaving the application.

- ### Semantic Classification
  - owl-class:: infrastructure:Krita
  - owl-role:: Concept

- ### Relationships
  - Integrates with ComfyUI (via krita-ai-diffusion plugin) as an AI inference backend for Stable Diffusion and other diffusion models.
  - Relies on Python for plugin scripting and backend communication.
  - Serves as a creative tool bridging traditional digital painting workflows and generative AI image synthesis.

- ### Content
  - Remote server required plugins page [krita-ai-diffusion/doc/comfy-requirements.md at main · Acly/krita-ai-diffusion (github.com)](https://github.com/Acly/krita-ai-diffusion/blob/main/doc/comfy-requirements.md)
  - Port 8189 for my inference system
  - {{video https://www.youtube.com/watch?v=AF2VyqSApjA}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
