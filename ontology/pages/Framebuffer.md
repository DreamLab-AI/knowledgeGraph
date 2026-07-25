public:: true

# Framebuffer
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:framebuffer",
  "@type": "Page",
  "title": "Framebuffer",
  "vc:slug": "framebuffer",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:framebuffer",
  "@type": "Class",
  "label": "Framebuffer",
  "definition": "A framebuffer is a region of memory that holds the pixel data representing a complete frame to be displayed or further processed, typically organised as colour, depth, and stencil buffers. In a graphics pipeline, rendering operations write their results into a framebuffer, which the display hardware then scans out to a screen or which subsequent passes read as input. Framebuffers are central to double buffering, post-processing, off-screen rendering, and the multi-pass techniques that underpin modern real-time graphics.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rendering-pipeline",
      "label": "Rendering Pipeline"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:depth-buffer",
        "label": "Depth Buffer"
      },
      {
        "@id": "urn:ngm:class:render-target",
        "label": "Render Target"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:render-target",
        "label": "Render Target"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      },
      {
        "@id": "urn:ngm:class:direct3d",
        "label": "Direct3D"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - A framebuffer is a region of memory that holds the pixel data representing a complete frame to be displayed or further processed, typically organised as colour, depth, and stencil buffers. In a graphics pipeline, rendering operations write their results into a framebuffer, which the display hardware then scans out to a screen or which subsequent passes read as input. Framebuffers are central to double buffering, post-processing, off-screen rendering, and the multi-pass techniques that underpin modern real-time graphics.
  - [[Rendering Pipeline]] [[Rasterization]] [[Texture Mapping]] [[Depth Buffer]] [[Render Target]]
- ### Overview
  - The framebuffer is the destination of the rendering process and the bridge between computation and display. Beyond the final colour image, modern framebuffers aggregate auxiliary buffers — depth for occlusion, stencil for masking, and multiple colour attachments for deferred shading and G-buffers. Off-screen framebuffers (render targets) feed post-processing effects such as bloom, tone mapping, and anti-aliasing, while double or triple buffering prevents visible tearing by separating the buffer being drawn from the one being displayed.
- ### Mechanisms
  - Colour, depth, and stencil attachments forming a complete frame
  - Double and triple buffering to avoid tearing
  - Off-screen render targets for multi-pass rendering
  - Multiple render targets enabling deferred shading and G-buffers
  - Scan-out of the front buffer to the display device
- ### Applications
  - Real-time game and engine rendering
  - Post-processing pipelines (bloom, tone mapping, anti-aliasing)
  - Deferred and forward+ shading
  - XR compositing and lens distortion correction
  - GPU image processing and compute readback
- ### Relationships
  - partOf:: [[Rendering Pipeline]]
  - partOf:: [[Graphics Pipeline]]
  - hasPart:: [[Depth Buffer]]
  - hasPart:: [[Render Target]]
  - requires:: [[GPU]]
  - uses:: [[Rasterization]]
  - uses:: [[Texture Mapping]]
  - enables:: [[Render Target]]
  - supports:: [[Vulkan]]
  - supports:: [[Direct3D]]
  - relatedTo:: [[Rasterization]]
  - relatedTo:: [[Texture Mapping]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
