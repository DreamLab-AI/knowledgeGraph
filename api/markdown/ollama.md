schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/ontology#Ollama
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:ollama
public:: true

# ollama
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5d7177486a53d18210dacb33b92289396b5eb215e04c292ea66a91547a8eec78",
  "@type": "Page",
  "vc:slug": "ollama",
  "title": "ollama",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:llama",
      "vc:label": "Llama"
    },
    {
      "@id": "urn:visionflow:owl:class:agents",
      "vc:label": "Agents"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:function-calling",
      "vc:label": "Function Calling"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graphing",
      "vc:label": "Knowledge Graphing"
    },
    {
      "@id": "urn:visionflow:owl:class:ollama",
      "vc:label": "Ollama"
    },
    {
      "@id": "urn:visionflow:owl:class:open-webui-and-pipelines",
      "vc:label": "Open Webui and Pipelines"
    },
    {
      "@id": "urn:visionflow:owl:class:prompt-engineering",
      "vc:label": "Prompt Engineering"
    },
    {
      "@id": "urn:visionflow:owl:class:python-and-py-torch",
      "vc:label": "Python and PyTorch"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-1859bf1666a0"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/ontology#Ollama"
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
      "vc:value": "ollama"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ollama"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ollama"
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
    "@id": "urn:visionflow:page:5d7177486a53d18210dacb33b92289396b5eb215e04c292ea66a91547a8eec78@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:ollama",
  "@type": "Class",
  "label": "ollama",
  "definition": "ollama is a artificial intelligence concept and a type of artificial-intelligence.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "artificial-intelligence"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:ollama:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5d7177486a53d18210dacb33b92289396b5eb215e04c292ea66a91547a8eec78"
  },
  "vc:resolutions": [
    {
      "raw": "[[Llama]]",
      "resolved": "urn:visionflow:linked:llama",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agents]]",
      "resolved": "urn:visionflow:owl:class:agents",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComfyUI]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Function Calling]]",
      "resolved": "urn:visionflow:owl:class:function-calling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graphing]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graphing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ollama]]",
      "resolved": "urn:visionflow:owl:class:ollama",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Webui and Pipelines]]",
      "resolved": "urn:visionflow:owl:class:open-webui-and-pipelines",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prompt Engineering]]",
      "resolved": "urn:visionflow:owl:class:prompt-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Python and PyTorch]]",
      "resolved": "urn:visionflow:owl:class:python-and-py-torch",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5d7177486a53d18210dacb33b92289396b5eb215e04c292ea66a91547a8eec78@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - ollama is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Ollama
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - The [[Ollama]] repository on GitHub is a comprehensive, MIT-licensed platform for utilizing and managing large language models (LLMs) such as Llama 3.1, Mistral, Gemma 2, and others. It offers a straightforward way to run these models on various operating systems, including macOS, Windows, and Linux, either through manual installation or via Docker.
  - [ComfyUI (image generation) and AllTalk (TTS) · open-webui/open-webui · Discussion #1221 (github.com)](https://github.com/open-webui/open-webui/discussions/1221)
  - /parse https://twitter.com/0xfoobar/status/1591142748207583235
  - https://twitter.com/0xfoobar/status/1591142748207583235
  - [[Knowledge Graphing]] MindsDB integration with [[Ollama]] [mindsdb/mindsdb/integrations/handlers/ollama_handler/README.md at main · mindsdb/mindsdb (github.com)](https://github.com/mindsdb/mindsdb/blob/main/mindsdb/integrations/handlers/ollama_handler/README.md)
  - https://www.mindsdb.com/
  - [[Ollama]] [[Open Webui and Pipelines]] [open-webui/pipelines: Pipelines: Versatile, UI-Agnostic OpenAI-Compatible Plugin Framework (github.com)](https://github.com/open-webui/pipelines)
  - [pipelines/examples/pipelines/providers at 8b5e0a05e982473c205d2a0d7f8e34b8ce539885 · open-webui/pipelines (github.com)](https://github.com/open-webui/pipelines/tree/8b5e0a05e982473c205d2a0d7f8e34b8ce539885/examples/pipelines/providers)
  - DONE Fix the [[Ollama]] directory issue.
  - [[ComfyUI]] [[Ollama]] [[Prompt Engineering]] [ComfyUI Ollama prompt generation : r/StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/1ck896z/comfyui_ollama_prompt_generation/)
  - [agent_tutorials/ollama_agents/llama3_local/llama3_json.py at main · samwit/agent_tutorials (github.com)](https://github.com/samwit/agent_tutorials/blob/main/ollama_agents/llama3_local/llama3_json.py) [[Llama]] [[Ollama]] [[Function Calling]] [[Python and PyTorch]] [[Agents]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
