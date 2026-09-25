Platform as a Service (PaaS) is a cloud computing service model that provides a managed execution environment — including runtime, middleware, databases, and development tools — over the internet, allowing developers to build, deploy, and scale applications without managing underlying infrastructure. PaaS abstracts operating system and server management from the development team, enabling faster iteration cycles and lower operational overhead. Examples include Heroku, Google App Engine, Microsoft Azure App Service, and AWS Elastic Beanstalk.

### Overview

- PaaS originated with Google App Engine (2008) and Force.com (Salesforce, 2007) as the first managed application platforms.
- Heroku (2007) popularised git-push deployment, establishing the developer experience template for PaaS.
- Modern PaaS offerings integrate CI/CD pipelines, managed databases, secret management, and observability tooling.
- Kubernetes-native PaaS (OpenShift, Tanzu, Cloud Foundry) bridges PaaS convenience with IaaS flexibility.
- Container-based PaaS has largely superseded language-runtime-locked early PaaS models.

### Key aspects

- Abstracts OS management: patching, security hardening, and runtime upgrades managed by provider.
- Buildpacks or container images define application runtime environments.
- Managed services: databases, caches, message queues, search engines available as platform add-ons.
- Built-in horizontal scaling via dyno/instance count adjustment.
- Multi-tenancy with namespace isolation between customer applications.

### Mechanisms

- Slug compilation or container build transforms source code into deployable artefacts.
- Router/load balancer distributes inbound traffic across application instances.
- Ephemeral filesystem encourages stateless application design; state externalised to managed services.
- Health checks and automatic restarts maintain application availability.

### Applications

- Rapid prototype and MVP deployment for startups without infrastructure teams.
- Enterprise internal developer portals standardising deployment workflows.
- SaaS product backends requiring elastic scaling without ops overhead.
- API backends for mobile and web applications.
- Machine learning model serving endpoints.

### Provenance

