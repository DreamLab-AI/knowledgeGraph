HotStuff is a leader-based Byzantine fault-tolerant consensus protocol that achieves linear communication complexity and responsiveness through a pipelined, three-phase voting structure with threshold signatures. Its linear view-change cost and rotating leadership make it well suited to large validator sets. HotStuff influenced modern BFT systems and underpins protocols such as Libra/Diem's consensus.

### Content

- It collapses the classic PBFT communication pattern into a pipelined sequence of prepare, pre-commit, and commit phases aggregated with threshold signatures, so each phase costs O(n) messages. The rotating leader and chained block proposals deliver high throughput with bounded latency under partial synchrony, motivating its adoption in several production blockchains.

