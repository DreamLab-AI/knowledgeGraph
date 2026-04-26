iri:: https://visionclaw.dreamlab-ai.systems/ns/v2/artificial-intelligence#ComfyUiClient
uri:: urn:visionclaw:concept:artificial-intelligence:comfy-ui-client
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:comfy-ui-client
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Comfy UI Client
content-hash:: sha256-12-5c871870d3dd
status:: stub
maturity:: draft
bridges-to:: [[Blockchain]] (bc), [[AI Agent System]] (ai), or [[Digital Twin]] (mv)
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - ComfyUIClient is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ComfyUIClient
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Typescript client for [[ComfyUI]] which I have [deployed locally](https://github.com/itsKaynine/comfy-ui-client)
  - here /c/Users/john/githubs/comfy-ui-client/examples/generate/dist
  - ```javascript import { ComfyUIClient } from 'comfy-ui-client'; import type { Prompt } from 'comfy-ui-client';
	  // Your prompt / workflow const prompt: Prompt = {
	      '3': {
	          class_type: 'KSampler',
	          inputs: {
	              cfg: 8,
	              denoise: 1,
	              latent_image: ['5', 0],
	              model: ['4', 0],
	              negative: ['7', 0],
	              positive: ['6', 0],
	              sampler_name: 'euler',
	              scheduler: 'normal',
	              seed: 8566257,
	              steps: 20,
	          },
	      },
	      '4': {
	          class_type: 'CheckpointLoaderSimple',
	          inputs: {
	              ckpt_name: 'v1-5-pruned-emaonly.cpkt',
	          },
	      },
	      '5': {
	          class_type: 'EmptyLatentImage',
	          inputs: {
	              batch_size: 1,
	              height: 512,
	              width: 512,
	          },
	      },
	      '6': {
	          class_type: 'CLIPTextEncode',
	          inputs: {
	              clip: ['4', 1],
	              text: 'masterpiece best quality girl',
	          },
	      },
	      '7': {
	          class_type: 'CLIPTextEncode',
	          inputs: {
	              clip: ['4', 1],
	              text: 'bad hands',
	          },
	      },
	      '8': {
	          class_type: 'VAEDecode',
	          inputs: {
	              samples: ['3', 0],
	              vae: ['4', 2],
	          },
	      },
	      '9': {
	          class_type: 'SaveImage',
	          inputs: {
	              filename_prefix: 'ComfyUI',
	              images: ['8', 0],
	          },
	      }, };
	  // Set the text prompt for our positive CLIPTextEncode prompt['6'].inputs.text = 'masterpiece best quality man';
	  // Set the seed for our KSampler node prompt['3'].inputs.seed = 5;
	  // Create client const serverAddress = '192.168.0.51:8188'; const clientId = 'baadbabe-b00b-4206-9420-deadd00d1337'; const client = new ComfyUIClient(serverAddress, clientId);
	  // Connect to server await client.connect();
	  // Generate images const images = await client.getImages(prompt);
	  // Save images to file const outputDir = './tmp/output'; await client.saveImages(images, outputDir);
	  // Disconnect await client.disconnect(); ```
		- {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
