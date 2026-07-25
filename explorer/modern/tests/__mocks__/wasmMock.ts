/**
 * Mock WASM module for testing
 */

export class WebVowl {
  private nodes: any[] = [];
  private edges: any[] = [];
  private alpha = 1.0;
  private finished = false;
  private linkDistance = 100;
  private chargeStrength = -300;
  private center = { x: 0, y: 0 };

  loadOntology(json: string): void {
    const data = JSON.parse(json);
    this.nodes = data.nodes || [];
    this.edges = data.edges || [];

    // Initialize positions
    this.nodes = this.nodes.map((node: any) => ({
      ...node,
      x: Math.random() * 1000 - 500,
      y: Math.random() * 1000 - 500
    }));
  }

  setCenter(x: number, y: number): void {
    this.center = { x, y };
  }

  setLinkDistance(distance: number): void {
    this.linkDistance = distance;
  }

  setChargeStrength(strength: number): void {
    this.chargeStrength = strength;
  }

  initSimulation(): void {
    this.alpha = 1.0;
    this.finished = false;
  }

  tick(): void {
    if (this.finished) return;

    // Simple mock simulation - just decay alpha
    this.alpha *= 0.9;

    // Apply small random changes to positions
    this.nodes = this.nodes.map(node => ({
      ...node,
      x: node.x + (Math.random() - 0.5) * 10,
      y: node.y + (Math.random() - 0.5) * 10
    }));

    if (this.alpha < 0.01) {
      this.finished = true;
      this.alpha = 0;
    }
  }

  runSimulation(iterations: number): void {
    for (let i = 0; i < iterations; i++) {
      this.tick();
    }
  }

  isFinished(): boolean {
    return this.finished;
  }

  getAlpha(): number {
    return this.alpha;
  }

  getGraphData(): any {
    return {
      nodes: this.nodes,
      edges: this.edges
    };
  }

  getNodeCount(): number {
    return this.nodes.length;
  }

  getEdgeCount(): number {
    return this.edges.length;
  }

  getStatistics(): any {
    return {
      nodeCount: this.nodes.length,
      edgeCount: this.edges.length,
      avgDegree: this.edges.length > 0 ? (this.edges.length * 2) / this.nodes.length : 0
    };
  }
}

export default async () => {
  // Mock WASM initialization
  return Promise.resolve();
};
