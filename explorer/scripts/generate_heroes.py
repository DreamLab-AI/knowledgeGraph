#!/usr/bin/env python3
"""
Generate 6 hero images for Narrative Goldmine domains using ComfyUI FLUX2.

Two-stage workflow for VRAM management:
1. Stage 1: Load CLIP, encode text prompts
2. Clear VRAM
3. Stage 2: Load UNET/VAE, sample, decode, save

Target: 1920x1080 dark theme compatible images
"""

import json
import time
import base64
import requests
import urllib.request
from pathlib import Path

COMFYUI_URL = "http://172.18.0.11:8188"
OUTPUT_DIR = Path(__file__).parent.parent / "modern" / "public" / "images" / "heroes"

# Domain prompts for hero images - dark theme compatible (#111827 background)
HERO_PROMPTS = {
    "ai": {
        "filename": "ai-hero.webp",
        "prompt": "Futuristic neural network visualization, glowing blue synaptic connections forming a brain pattern, abstract digital neurons firing with electric blue and cyan light trails, dark background gradient #111827 to black, photorealistic 3D render, cinematic lighting, volumetric fog, 8K ultra detailed, professional concept art for AI technology company"
    },
    "blockchain": {
        "filename": "blockchain-hero.webp",
        "prompt": "Crystalline blockchain structure floating in space, interconnected golden hexagonal nodes with encrypted data streams, amber and orange holographic chains linking distributed ledgers, dark background #111827, photorealistic 3D render, cinematic volumetric lighting, 8K ultra detailed, professional fintech visualization"
    },
    "metaverse": {
        "filename": "metaverse-hero.webp",
        "prompt": "Immersive virtual reality cityscape, neon pink and magenta holographic buildings, avatar silhouettes walking through digital portals, glowing geometric landscapes, cyberpunk aesthetic with dark background #111827, photorealistic 3D render, ray tracing, 8K ultra detailed, professional metaverse concept art"
    },
    "robotics": {
        "filename": "robotics-hero.webp",
        "prompt": "Advanced robotic arm precision engineering, emerald green circuit patterns glowing on sleek metallic surfaces, industrial automation with articulated joints and sensors, dark background #111827, photorealistic 3D render, studio lighting, depth of field, 8K ultra detailed, professional robotics visualization"
    },
    "telecollaboration": {
        "filename": "telecollaboration-hero.webp",
        "prompt": "Holographic telepresence meeting, cyan and teal light beams connecting floating avatar displays, remote collaboration pods with translucent screens, global network visualization, dark background #111827, photorealistic 3D render, volumetric hologram effects, 8K ultra detailed, professional communication technology"
    },
    "ngm": {
        "filename": "ngm-hero.webp",
        "prompt": "Elegant knowledge graph visualization, interconnected violet and purple luminous nodes forming a cosmic web of concepts, flowing data streams between semantic clusters, abstract neural constellation, dark background #111827, photorealistic 3D render, ethereal glow effects, 8K ultra detailed, professional ontology visualization"
    }
}

def create_flux2_workflow(prompt: str, seed: int = None) -> dict:
    """Create FLUX2 workflow JSON for ComfyUI."""
    import random
    seed = seed if seed is not None else random.randint(0, 2**32 - 1)

    workflow = {
        "90": {
            "inputs": {
                "clip_name": "mistral_3_small_flux2_bf16.safetensors",
                "type": "flux2"
            },
            "class_type": "CLIPLoader",
            "_meta": {"title": "Load CLIP"}
        },
        "85": {
            "inputs": {
                "text": prompt,
                "clip": ["90", 0]
            },
            "class_type": "CLIPTextEncode",
            "_meta": {"title": "CLIP Text Encode"}
        },
        "73": {
            "inputs": {
                "guidance": 4.5,
                "conditioning": ["85", 0]
            },
            "class_type": "FluxGuidance",
            "_meta": {"title": "FLUX Guidance"}
        },
        "86": {
            "inputs": {
                "unet_name": "flux2_dev_fp8mixed.safetensors",
                "weight_dtype": "default"
            },
            "class_type": "UNETLoader",
            "_meta": {"title": "Load UNET"}
        },
        "78": {
            "inputs": {
                "vae_name": "flux2-vae.safetensors"
            },
            "class_type": "VAELoader",
            "_meta": {"title": "Load VAE"}
        },
        "79": {
            "inputs": {
                "width": 1920,
                "height": 1080,
                "batch_size": 1
            },
            "class_type": "EmptyFlux2LatentImage",
            "_meta": {"title": "Empty FLUX2 Latent"}
        },
        "87": {
            "inputs": {
                "noise_seed": seed
            },
            "class_type": "RandomNoise",
            "_meta": {"title": "Random Noise"}
        },
        "74": {
            "inputs": {
                "sampler_name": "euler"
            },
            "class_type": "KSamplerSelect",
            "_meta": {"title": "KSampler Select"}
        },
        "94": {
            "inputs": {
                "steps": 28,
                "width": 1920,
                "height": 1080
            },
            "class_type": "Flux2Scheduler",
            "_meta": {"title": "FLUX2 Scheduler"}
        },
        "68": {
            "inputs": {
                "model": ["86", 0],
                "conditioning": ["73", 0]
            },
            "class_type": "BasicGuider",
            "_meta": {"title": "Basic Guider"}
        },
        "80": {
            "inputs": {
                "noise": ["87", 0],
                "guider": ["68", 0],
                "sampler": ["74", 0],
                "sigmas": ["94", 0],
                "latent_image": ["79", 0]
            },
            "class_type": "SamplerCustomAdvanced",
            "_meta": {"title": "Sampler Custom Advanced"}
        },
        "82": {
            "inputs": {
                "samples": ["80", 0],
                "vae": ["78", 0]
            },
            "class_type": "VAEDecode",
            "_meta": {"title": "VAE Decode"}
        },
        "89": {
            "inputs": {
                "filename_prefix": "hero",
                "images": ["82", 0]
            },
            "class_type": "SaveImage",
            "_meta": {"title": "Save Image"}
        }
    }
    return workflow


def free_vram():
    """Request ComfyUI to free VRAM."""
    try:
        response = requests.post(f"{COMFYUI_URL}/free", json={"unload_models": True, "free_memory": True})
        print(f"VRAM freed: {response.status_code}")
        time.sleep(2)  # Allow time for memory to be freed
    except Exception as e:
        print(f"Warning: Could not free VRAM: {e}")


def queue_prompt(workflow: dict) -> str:
    """Queue a prompt and return the prompt_id."""
    payload = {"prompt": workflow}
    response = requests.post(f"{COMFYUI_URL}/prompt", json=payload)
    result = response.json()
    if "prompt_id" in result:
        return result["prompt_id"]
    elif "error" in result:
        raise Exception(f"ComfyUI error: {result['error']}")
    else:
        raise Exception(f"Unexpected response: {result}")


def wait_for_completion(prompt_id: str, timeout: int = 300) -> dict:
    """Wait for prompt to complete and return history."""
    start = time.time()
    while time.time() - start < timeout:
        response = requests.get(f"{COMFYUI_URL}/history/{prompt_id}")
        history = response.json()
        if prompt_id in history:
            return history[prompt_id]
        time.sleep(2)
    raise TimeoutError(f"Prompt {prompt_id} did not complete within {timeout}s")


def get_image(filename: str, subfolder: str = "") -> bytes:
    """Download generated image from ComfyUI."""
    params = {"filename": filename, "subfolder": subfolder, "type": "output"}
    url = f"{COMFYUI_URL}/view?{urllib.parse.urlencode(params)}"
    response = requests.get(url)
    return response.content


def generate_hero(domain: str, config: dict, seed: int = None) -> Path:
    """Generate a single hero image."""
    print(f"\n{'='*60}")
    print(f"Generating {domain.upper()} hero image...")
    print(f"Prompt: {config['prompt'][:100]}...")

    # Create workflow
    workflow = create_flux2_workflow(config["prompt"], seed)

    # Free VRAM before generation
    free_vram()

    # Queue and wait
    prompt_id = queue_prompt(workflow)
    print(f"Queued prompt: {prompt_id}")

    history = wait_for_completion(prompt_id)

    # Get output image
    outputs = history.get("outputs", {})
    for node_id, node_output in outputs.items():
        if "images" in node_output:
            for img in node_output["images"]:
                filename = img["filename"]
                subfolder = img.get("subfolder", "")

                # Download image
                image_data = get_image(filename, subfolder)

                # Save to output directory
                output_path = OUTPUT_DIR / config["filename"]
                output_path.parent.mkdir(parents=True, exist_ok=True)

                # Convert to WebP if needed
                if config["filename"].endswith(".webp"):
                    from PIL import Image
                    import io
                    img_pil = Image.open(io.BytesIO(image_data))
                    img_pil.save(output_path, "WEBP", quality=90)
                else:
                    output_path.write_bytes(image_data)

                print(f"Saved: {output_path}")
                return output_path

    raise Exception(f"No image output found for {domain}")


def main():
    """Generate all hero images."""
    print("="*60)
    print("NARRATIVE GOLDMINE - Hero Image Generation")
    print(f"ComfyUI: {COMFYUI_URL}")
    print(f"Output: {OUTPUT_DIR}")
    print("="*60)

    # Check ComfyUI connectivity
    try:
        response = requests.get(f"{COMFYUI_URL}/system_stats")
        stats = response.json()
        print(f"ComfyUI v{stats['system']['comfyui_version']}")
        print(f"GPU: {stats['devices'][0]['name']}")
        print(f"VRAM: {stats['devices'][0]['vram_free'] / 1e9:.1f}GB free / {stats['devices'][0]['vram_total'] / 1e9:.1f}GB total")
    except Exception as e:
        print(f"ERROR: Cannot connect to ComfyUI: {e}")
        return 1

    # Generate each hero image
    generated = []
    failed = []

    for domain, config in HERO_PROMPTS.items():
        try:
            path = generate_hero(domain, config)
            generated.append((domain, path))
        except Exception as e:
            print(f"ERROR generating {domain}: {e}")
            failed.append((domain, str(e)))

    # Summary
    print("\n" + "="*60)
    print("GENERATION COMPLETE")
    print("="*60)
    print(f"Generated: {len(generated)}/{len(HERO_PROMPTS)}")
    for domain, path in generated:
        print(f"  ✓ {domain}: {path.name}")
    if failed:
        print(f"Failed: {len(failed)}")
        for domain, error in failed:
            print(f"  ✗ {domain}: {error}")

    return 0 if not failed else 1


if __name__ == "__main__":
    import urllib.parse
    exit(main())
