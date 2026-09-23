
The actor model is a mathematical model of concurrent computation in which the universal primitive is the actor, an independent entity that has private state and communicates only by sending asynchronous messages. In response to a message an actor can update its state, send messages to other actors and create new actors. Because actors share nothing and process one message at a time, the model avoids shared-memory data races and provides a foundation for scalable, fault-tolerant distributed systems.

- ### Overview
	- On receiving a message an actor may update state, send further messages and spawn new actors.
	- Asynchronous, location-transparent messaging lets actors run on the same core or across a cluster.
	- One-message-at-a-time processing serialises access to an actor's state without locks.
	- Hierarchies of supervising actors restart failed children to contain and recover from faults.
- ### Mechanisms
	- Mailboxes queue incoming messages for sequential, isolated handling.
	- [[Asynchronous Messaging]] decouples senders from receivers in time and space.
	- Supervision strategies localise failure and define restart policies.
	- Address-based references allow transparent routing across nodes.
- ### Applications
	- Telecommunications and messaging platforms requiring high [[Fault Tolerance]].
	- Scalable backends built on [[Distributed Computing]] frameworks.
	- [[Reactive Systems]] that must remain responsive under variable load.
	- Workload distribution combined with [[Load Balancing]] across actor clusters.
- ### Provenance

