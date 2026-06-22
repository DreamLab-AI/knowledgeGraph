- ### Definition
  - Projects is the top-level organisational concept grouping active development initiatives within this knowledge graph. It serves as a Kanban and progress-tracking container for ongoing technical, research, and creative workstreams, linking to child project nodes such as PlayerTwo, BroBots, and Automated Podcast.

- ### Semantic Classification
  - owl-class:: infrastructure:Projects
  - owl-role:: Concept

- ### Relationships
  - hasPart: [[Player Two]], [[Project BroBots]], [[Project Automated Podcast]]
  - uses: [[Automated Planning]]
  - relatedTo: [[Agentic Alliance]]

- ### Content
  - Fashion 3D objects
  - TODO write a script to start the docker for CRM
		- ```text
		  machinelearn@MLAI:/mnt/mldata/GenerativeAI/ComfyUI$ docker ps
		  CONTAINER ID   IMAGE                                  COMMAND                  CREATED        STATUS        PORTS                                       NAMES
		  d8bc0b15a890   yanwk/comfyui-boot:megapak             "bash /runner-script…"   9 hours ago    Up 9 hours    0.0.0.0:8188->8188/tcp, :::8188->8188/tcp   comfyui-mega
		  7428acfbd648   ghcr.io/open-webui/open-webui:ollama   "bash start.sh"          27 hours ago   Up 22 hours   0.0.0.0:3000->8080/tcp, :::3000->8080/tcp   open-webui
		  machinelearn@MLAI:/mnt/mldata/GenerativeAI/ComfyUI$ docker stop comfyui-mega
		  comfyui-mega

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z