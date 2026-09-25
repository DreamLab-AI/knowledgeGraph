DevPod is an open-source, provider-agnostic tool for creating reproducible cloud development environments defined by devcontainer specifications. It abstracts over compute providers — including local Docker, Kubernetes clusters, cloud VMs, and managed container services — allowing developers to spin up identical, pre-configured workspaces on any infrastructure without vendor lock-in. DevPod acts as a portable alternative to managed cloud IDE products such as GitHub Codespaces or GitPod, enabling teams to self-host development environments on their own Kubernetes or cloud infrastructure.

### Semantic Classification

### Content

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

### Provenance

