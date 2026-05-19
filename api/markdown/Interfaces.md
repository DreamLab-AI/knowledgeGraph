schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Interfaces
legacy_uri:: urn:visionclaw:concept:infrastructure:interfaces
public:: true

# Interfaces
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0de0565568f1477e3004f53a8a8046e5c71ff5b840f66523d3b308d44dcd29ba",
  "@type": "Page",
  "vc:slug": "interfaces",
  "title": "Interfaces",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:langflow",
      "vc:label": "Langflow"
    },
    {
      "@id": "urn:visionflow:owl:class:agents",
      "vc:label": "Agents"
    },
    {
      "@id": "urn:visionflow:owl:class:hardware-and-edge",
      "vc:label": "Hardware and Edge"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:interfaces",
      "vc:label": "Interfaces"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:node-based-visual-interfaces",
      "vc:label": "Node based visual interfaces"
    },
    {
      "@id": "urn:visionflow:owl:class:stable-diffusion",
      "vc:label": "Stable Diffusion"
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
      "vc:value": "sha256-12-1e522aae38f8"
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
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#Interfaces"
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
      "vc:value": "Interfaces"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:interfaces"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:interfaces"
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
    "@id": "urn:visionflow:page:0de0565568f1477e3004f53a8a8046e5c71ff5b840f66523d3b308d44dcd29ba@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:interfaces",
  "@type": "OntologyClass",
  "label": "Interfaces",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:user-interface",
      "vc:label": "User Interface"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:0de0565568f1477e3004f53a8a8046e5c71ff5b840f66523d3b308d44dcd29ba"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0de0565568f1477e3004f53a8a8046e5c71ff5b840f66523d3b308d44dcd29ba@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Interfaces is a technology infrastructure concept and a type of User Interface.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:interfaces:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0de0565568f1477e3004f53a8a8046e5c71ff5b840f66523d3b308d44dcd29ba"
  },
  "vc:resolutions": [
    {
      "raw": "[[Langflow]]",
      "resolved": "urn:visionflow:linked:langflow",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agents]]",
      "resolved": "urn:visionflow:owl:class:agents",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware and Edge]]",
      "resolved": "urn:visionflow:owl:class:hardware-and-edge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interfaces]]",
      "resolved": "urn:visionflow:owl:class:interfaces",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Node based visual interfaces]]",
      "resolved": "urn:visionflow:owl:class:node-based-visual-interfaces",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion]]",
      "resolved": "urn:visionflow:owl:class:stable-diffusion",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0de0565568f1477e3004f53a8a8046e5c71ff5b840f66523d3b308d44dcd29ba@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Interfaces is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: infrastructure:Interfaces
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - # Node based
  - [Rivet (ironcladapp.com)](https://rivet.ironcladapp.com/) is a [[Interfaces]] for [[Infrastructure]] [[Hardware and Edge]] based [[Agents]] using [[Large Language Models]]
  - [[Node based visual interfaces]] is a  [[Interfaces]] for [[Large Language Models]] which is open source and [locally hosted.](https://github.com/FlowiseAI/Flowise) also see [[Langflow]]
  - [[Langflow]] [[Interfaces]] for [[Large Language Models]] builder, with slightly more features than [[Node based visual interfaces]] which is another one I need to try soon from their [github](https://github.com/logspace-ai/langflow)
  - ComfyUI is a [[Interfaces]] for [[Stable Diffusion]]. It allows very high levels of control over Diffusion Models by leveraging open source extensions and a vibrant developer and creator community. The tool's flexibility and efficiency comes from its innovative design philosophy, that prioritizes user customization and interaction.
  - # LLM and multimodal local
			- **Description:** Web-based UI inspired by ChatGPT, designed for high extensibility.
			- **Features:**
				- Workspaces for personalised assistants (similar to GPT's custom setups).
				- OpenAI-compatible endpoints for streamlined backend integration.
				- Optimised for responsiveness, especially on touchscreen devices.
			- **Use Cases:** General-purpose use, roleplay (RP), and advanced configuration.
			- **Limitations:** Lack of comprehensive documentation remains a significant barrier.
			- **Link:** [Open WebUI GitHub](https://github.com/open-webui)
			- **Description:** Web-based interface focusing on customisation and versatility.
			- **Features:**
				- Presets for reusable configurations.
				- YAML and `.env` support for endpoint and key management.
			- **Limitations:**
				- Export/migration tools are cumbersome.
				- Slower responsiveness compared to Open WebUI.
			- **Link:** [LibreChat GitHub](https://github.com/LibreChat)
			- **Description:** Universal adapter popular for roleplay.
			- **Features:**
				- Wide compatibility with backends like Koboldcpp.
				- Growing focus on general use beyond RP.
			- **Limitations:** Outdated UI design limits appeal.
			- **Link:** [SillyTavern GitHub](https://github.com/SillyTavern)
			- **Description:** Standalone desktop application for local inference.
			- **Features:**
				- Easy to use with a modern UI.
				- Suitable for new users and traditional "Windows-style" workflows.
			- **Limitations:** Closed source; outbound connections for updates raise privacy concerns.
			- **Link:** [LM Studio](https://lmstudio.ai)
			- **Description:** Native macOS application with extensive feature sets.
			- **Features:**
				- Integrates advanced tools like text-to-speech (TTS).
				- Highly optimised for macOS environments.
			- **Link:** [Msty App](https://msty.app)
			- **Description:** Lightweight Android app for local models.
			- **Features:**
				- Mobile-focused with offline support.
				- Works as a "SillyTavern Lite" alternative.
			- **Link:** [ChatterUI GitHub](https://github.com/Vali-98/ChatterUI)
			  ---
			- **Strengths:**
				- Lightweight backend with robust feature support (e.g., roleplay, text-to-speech).
				- Integrates well with Open WebUI and SillyTavern.
			- **Limitations:** UI is functional but lacks visual polish.
			- **Link:** [Koboldcpp GitHub](https://github.com/koboldcpp)
			- **Strengths:**
				- Minimalist server UI with OpenAI-compatible API.
				- Excellent for developers due to fast updates.
			- **Limitations:** Limited feature set compared to Oobabooga and Open WebUI.
			- **Link:** [Llama.cpp GitHub](https://github.com/llama-cpp)
			- **Strengths:**
				- Broad feature set including image generation and voice capabilities.
				- Stable for solo usage.
			- **Limitations:** Slower performance compared to newer backends like TabbyAPI or vLLM.
			- **Link:** [Oobabooga GitHub](https://github.com/oobabooga)
			  ---
				- **Open WebUI:** Can integrate vision models, image generation, TTS, and more with third-party tools like Azure or Together.ai.
				- **Koboldcpp:** Supports some multimodal backends but lacks native syntax highlighting.
				- **LM Studio:** Quick model mounting for API integrations.
				- **AnythingLLM:** Flexible for agent development and experimentation.
				  ---
		- **For Beginners:** LM Studio or Msty provide ease of use with minimal setup.
		- **For Advanced Users:** Open WebUI offers extensive customisation and backend compatibility.
		- **For Roleplay:** SillyTavern excels in flexibility with multiple backends.
		- **For Multimodal Needs:** Combine Open WebUI with specific vision or TTS backends.
		- **For Developers:** Use Llama.cpp for rapid updates or Koboldcpp for lightweight integration.
		  ---
		- [Open WebUI GitHub](https://github.com/open-webui)
		- [LibreChat GitHub](https://github.com/LibreChat)
		- [SillyTavern GitHub](https://github.com/SillyTavern)
		- [Koboldcpp GitHub](https://github.com/koboldcpp)
		- [Llama.cpp GitHub](https://github.com/llama-cpp)
		- [Oobabooga GitHub](https://github.com/oobabooga)
		- [Msty App](https://msty.app)
		- [ChatterUI GitHub](https://github.com/Vali-98/ChatterUI)
  - ## Key Frontend Options
		- ### Open WebUI
		- ### LibreChat
		- ### SillyTavern
		- ## **LM Studio**
		- ###  Msty
		- ### ChatterUI
		- ## Backend Integration and Performance
			- ### 3.1 **Koboldcpp**
			- ### 3.2 **Llama.cpp**
			- ### Oobabooga
		- ## Multimodal Support and Advanced Features
			- ### Multimodal Capabilities
			- ### Developer-Oriented Tools
		- ## Additional Links
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
