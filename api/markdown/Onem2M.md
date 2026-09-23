
oneM2M is a global standards initiative that defines a common service layer for machine-to-machine and Internet of Things communication, enabling interoperable connection of devices, applications, and platforms across vertical industries. Developed by a partnership of regional standards bodies including ETSI, it specifies a horizontal middleware exposing reusable capabilities such as data management, device management, security, and discovery through a RESTful resource model. By abstracting these common functions, oneM2M reduces fragmentation and lets IoT solutions span domains like smart cities, transport, and energy.

- ### Overview
	- IoT deployments historically grew as vertical silos, each with bespoke protocols and data models, preventing reuse across smart-home, transport, energy, and industrial domains.
	- oneM2M addresses this by specifying a horizontal middleware — the Common Services Layer — that sits between connectivity protocols below and applications above.
	- It defines standard resource types, a uniform RESTful API, and bindings over transports such as HTTP, CoAP, and MQTT, so a device or application written once can interoperate broadly.
	- The standard also covers security, access control, subscription and notification, group management, and semantic discovery.
- ### Mechanisms
	- A resource-oriented architecture where everything is a uniformly addressable resource.
	- Common service functions for registration, data management, device management, and discovery.
	- Protocol bindings to [[REST]], [[CoAP]], and [[MQTT]] for transport flexibility.
	- Semantic annotation to enable cross-vertical data interpretation.
- ### Applications
	- Interoperable [[Smart City]] platforms integrating sensors across departments.
	- Connected-vehicle and transport telematics backends.
	- Smart-energy and utility metering infrastructures.
	- Industrial and building-automation IoT gateways.
- ### Provenance

