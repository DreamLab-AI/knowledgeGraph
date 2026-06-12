- ### Definition
  - DevPod is an open-source, provider-agnostic tool for creating reproducible cloud development environments defined by devcontainer specifications (the same standard used by VS Code Dev Containers). It supports multiple compute providers — Docker, Kubernetes, AWS, GCP, Azure, Coder, SSH remotes — through a plugin architecture, allowing teams to define workspace configuration once and provision it anywhere. Developers interact with DevPod through a CLI or desktop GUI, and workspaces are launched with pre-installed toolchains, dependencies, and editor extensions, eliminating "works on my machine" problems.

- ### Semantic Classification
  - owl-class:: infrastructure:Devpod
  - owl-role:: Concept

- ### Relationships
  - DevPod is positioned as a self-hosted, vendor-neutral alternative to GitHub Codespaces and GitPod, offering full control over the underlying compute and networking. Its Kubernetes provider integration (demonstrated in the content notes) enables running persistent development environments on private cloud clusters, making it suitable for organisations with data-residency requirements or air-gapped environments. The devcontainer standard it relies on is increasingly adopted across IDEs, CI/CD pipelines, and cloud platforms, making DevPod workspaces portable across the software development lifecycle.

- ### Content
  - I use this: https://devpod.sh/
  - Instructions from Discord:
  - 1) Sign up for Rackspace
  2) Create cloudspace
  3) Select server mix. There is no need to set a load balancer, of turn on high availability. 
  4) Download kubectl file
  5) In devpod.sh desktop app, create a new provider. Point to that kubectl file. 
  6) Create devpod
  7) Install python, node, and claude code. 
  8) Copy the kubeconfig file into the devpod space.
  9) Prompt claude code to generate a "superuser" kubeconfig file
  10) Download the new kubeconfig file
  11) Update the provider to use the new kubeconfig file. 
  12) Profit
  - Same instructions--abridged
  1) Create rackspace cluster. Get kubeconfig file--this one will expire. 
  2) Initialize claude code within pod on cluster using downloaded kubeconfig 
  3) Use claude code to generate replacement kubeconfig file that doesn't expire. 
  4) Update devpod.sh provider configuration to use new kubeconfig file.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z