public:: true

# ControlNet Conditioning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:control-net-conditioning",
  "@type": "Page",
  "vc:slug": "control-net-conditioning",
  "title": "ControlNet Conditioning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-net-conditioning",
  "@type": "Class",
  "label": "ControlNet Conditioning",
  "definition": "ControlNet conditioning is a technique that augments a pretrained diffusion model with an auxiliary network so generation can be steered by spatial control signals such as edge maps, depth, pose, or segmentation. The ControlNet branch copies the encoder of the base model and injects conditioning through zero-initialised connections, preserving the original weights while adding controllability. It gives image-generation pipelines precise structural control without retraining the base model.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-workflows", "label": "ComfyUI Workflows"}, {"@id": "urn:ngm:class:fooocus", "label": "Fooocus"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - ControlNet conditioning steers a diffusion model with spatial control maps, a core building block in [[ComfyUI Workflows]] and tools such as [[Fooocus]].
- ### Content
  - The technique trains a parallel copy of the diffusion encoder and connects it to the frozen base via zero-initialised layers, so conditioning signals like Canny edges, depth, or OpenPose skeletons constrain the output geometry. Multiple ControlNets can be composed and weighted, enabling reproducible, layout-faithful generation.
