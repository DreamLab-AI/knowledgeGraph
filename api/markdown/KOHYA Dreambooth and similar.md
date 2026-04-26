iri:: http://narrativegoldmine.com/ontology#KOHYADreamboothAndSimilar
uri:: urn:visionclaw:concept:artificial-intelligence:kohya-dreambooth-and-similar
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:kohya-dreambooth-and-similar
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: KOHYA Dreambooth and similar
content-hash:: sha256-12-7320887933a1
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - KOHYA Dreambooth and similar is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:KOHYADreamboothAndSimilar
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [bmaltais/kohya_ss (github.com)](https://github.com/bmaltais/kohya_ss/issues/1915)
  [sd-scripts/docs/config_README-en.md at 71e2c91330a9d866ec05cdd10584bbb962896a99 · kohya-ss/sd-scripts (github.com)](https://github.com/kohya-ss/sd-scripts/blob/71e2c91330a9d866ec05cdd10584bbb962896a99/docs/config_README-en.md)
  - https://github.com/Nerogar/OneTrainer/wiki/Lessons-Learnt-and-Tutorials
  - [Stable-Diffusion/Tutorials/Full-Stable-Diffusion-XL-SDXL-DreamBooth-Training-Tutorial-On-Kaggle.md at main · FurkanGozukara/Stable-Diffusion (github.com)](https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Full-Stable-Diffusion-XL-SDXL-DreamBooth-Training-Tutorial-On-Kaggle.md)
  - [Nerogar/OneTrainer: OneTrainer is a one-stop solution for all your stable diffusion training needs. (github.com)](https://github.com/Nerogar/OneTrainer)
  - [Tried to use same settings I find in Kohya but training failed epic · Issue #116 · Nerogar/OneTrainer (github.com)](https://github.com/Nerogar/OneTrainer/issues/116)
  - [How To Properly Setup OneTrainer Concepts And Some Other Options - Quick Tutorial Before Big One - YouTube](https://www.youtube.com/watch?v=yPOadldf6bI&t=147s)
  - [[KOHYA Dreambooth and similar]] [[Docker]] image with SDXL [ashleykleynhans/kohya-docker: Docker image for Kohya_ss Web UI (github.com)](https://github.com/ashleykleynhans/kohya-docker) works with a command shell inside the docker
  - ```text
  docker run -d --gpus '"device=1"' -v /mnt/mldata/GenerativeAI/koyha-Docker:/workspace -p 3010:3001 -p 8000:8000 -p 8888:8888 -p 2999:2999 ashleykza/kohya:latest
  docker exec -it 77ea06fdf7cb /bin/bash
  /kohya_ss/venv/bin/accelerate launch --num_cpu_threads_per_process=8 "./sdxl_train.py"   --pretrained_model_name_or_path="/sd-models/sd_xl_base_1.0.safetensors"   --train_data_dir="/workspace/kohya_ss/dataset/images"   --reg_data_dir="/workspace/kohya_ss/dataset/regularization"   --output_dir="/workspace/kohya_ss/outputs"   --output_name="ohwxwoman"   --save_model_as="safetensors"   --train_batch_size=2   --max_train_steps=2000   --save_every_n_steps=500   --optimizer_type="adafactor"   --optimizer_args scale_parameter=False relative_step=False warmup_init=False   --xformers   --cache_latents   --lr_scheduler="constant_with_warmup"   --lr_warmup_steps=100   --learning_rate=1e-5   --max_grad_norm=0.0   --train_text_encoder   --resolution="1024,1024"   --save_precision="fp16"   --save_n_epoch_ratio=1   --max_data_loader_n_workers=1   --persistent_data_loader_workers   --mixed_precision="bf16"   --full_bf16   --logging_dir="logs"   --log_prefix="last"   --gradient_checkpointing   --min_snr_gamma=5   --sample_sampler="ddim"   --sample_prompts="prompts.txt"   --sample_every_n_steps=100

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
