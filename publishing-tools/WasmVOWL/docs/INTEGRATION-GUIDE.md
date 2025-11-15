# React Three Fiber Integration Guide
## Using WASM Click Detection

## Quick Start

### 1. Import WASM Module

```typescript
// In your component or hook
import { useWasmSimulation } from '@/hooks/useWasmSimulation';

function GraphComponent() {
  const { wasmInstance } = useWasmSimulation();

  // ...
}
```

### 2. Add Click Handler

```typescript
import { ThreeEvent } from '@react-three/fiber';

function NodeComponent({ node }: { node: Node }) {
  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    // Prevent R3F from propagating
    event.stopPropagation();

    // Get ray from event
    const ray = event.ray;

    // Call WASM click detection
    const clickedNodeId = wasmInstance?.checkNodeClick(
      [ray.origin.x, ray.origin.y, ray.origin.z],
      [ray.direction.x, ray.direction.y, ray.direction.z]
    );

    if (clickedNodeId) {
      console.log('Clicked node:', clickedNodeId);
      // Update selection state
      useGraphStore.getState().selectNode(clickedNodeId);
    }
  };

  return (
    <mesh onClick={handleClick}>
      {/* Node geometry */}
    </mesh>
  );
}
```

### 3. Alternative: Canvas-Level Handler

```typescript
function GraphCanvas() {
  const { wasmInstance } = useWasmSimulation();

  const handleCanvasClick = (event: ThreeEvent<MouseEvent>) => {
    if (!wasmInstance) return;

    const ray = event.ray;
    const clickedNodeId = wasmInstance.checkNodeClick(
      [ray.origin.x, ray.origin.y, ray.origin.z],
      [ray.direction.x, ray.direction.y, ray.direction.z]
    );

    if (clickedNodeId) {
      useGraphStore.getState().selectNode(clickedNodeId);
    } else {
      // Clicked empty space - deselect
      useGraphStore.getState().clearSelection();
    }
  };

  return (
    <Canvas onClick={handleCanvasClick}>
      {/* Scene content */}
    </Canvas>
  );
}
```

## Advanced Usage

### Custom Node Radius

Currently, all nodes use a fixed radius of 20.0 units. To customize:

**Option 1**: Modify WASM code
```rust
// In src/bindings/mod.rs, line ~220
let node_radius = 20.0; // Change this value
```

**Option 2**: Add parameter (requires WASM update)
```typescript
// Future API
wasmInstance.checkNodeClick(origin, direction, {
  defaultRadius: 25.0,
  perNodeRadii: { node1: 30.0, node2: 15.0 }
});
```

### Multi-Selection with Modifier Keys

```typescript
function handleClick(event: ThreeEvent<MouseEvent>) {
  const clickedNodeId = wasmInstance?.checkNodeClick(
    [event.ray.origin.x, event.ray.origin.y, event.ray.origin.z],
    [event.ray.direction.x, event.ray.direction.y, event.ray.direction.z]
  );

  if (clickedNodeId) {
    if (event.nativeEvent.ctrlKey || event.nativeEvent.metaKey) {
      // Add to selection
      useGraphStore.getState().addToSelection(clickedNodeId);
    } else if (event.nativeEvent.shiftKey) {
      // Range selection
      useGraphStore.getState().selectRange(clickedNodeId);
    } else {
      // Single selection
      useGraphStore.getState().selectNode(clickedNodeId);
    }
  }
}
```

### Hover Detection

```typescript
function NodeComponent({ node }: { node: Node }) {
  const [hovered, setHovered] = useState(false);

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    const hoveredId = wasmInstance?.checkNodeClick(
      [event.ray.origin.x, event.ray.origin.y, event.ray.origin.z],
      [event.ray.direction.x, event.ray.direction.y, event.ray.direction.z]
    );

    setHovered(hoveredId === node.id);
  };

  return (
    <mesh
      onPointerMove={handlePointerMove}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[hovered ? 22 : 20, 32, 32]} />
      <meshBasicMaterial color={hovered ? '#ff0000' : node.color} />
    </mesh>
  );
}
```

## Performance Considerations

### When to Use WASM Click Detection

✅ **Use WASM when**:
- Graph has 100+ nodes
- Need consistent cross-platform behavior
- Planning custom collision shapes
- Want batch raycasting in future

❌ **Use R3F built-in when**:
- Small graphs (< 50 nodes)
- Simple sphere/circle collision
- Performance is not critical

### Optimization Tips

1. **Debounce hover detection**:
```typescript
import { useDebouncedCallback } from 'use-debounce';

const debouncedHover = useDebouncedCallback(
  (ray) => wasmInstance.checkNodeClick(...),
  16 // ~60 FPS
);
```

2. **Use pointer capture**:
```typescript
<mesh
  onPointerDown={(e) => e.target.setPointerCapture(e.pointerId)}
  onClick={handleClick}
>
```

3. **Spatial culling** (future enhancement):
```typescript
// Only test nodes in view frustum
const visibleNodes = nodes.filter(node => isInFrustum(node));
// Then pass to WASM
```

## State Management Integration

### Zustand Store Example

```typescript
// stores/useGraphStore.ts
import { create } from 'zustand';

interface GraphStore {
  selectedNodes: Set<string>;
  selectNode: (id: string) => void;
  addToSelection: (id: string) => void;
  clearSelection: () => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  selectedNodes: new Set(),

  selectNode: (id) => set({
    selectedNodes: new Set([id])
  }),

  addToSelection: (id) => set((state) => {
    const newSelection = new Set(state.selectedNodes);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    return { selectedNodes: newSelection };
  }),

  clearSelection: () => set({
    selectedNodes: new Set()
  }),
}));
```

### Using in Component

```typescript
function NodeComponent({ node }: { node: Node }) {
  const selectedNodes = useGraphStore((s) => s.selectedNodes);
  const selectNode = useGraphStore((s) => s.selectNode);

  const isSelected = selectedNodes.has(node.id);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const clickedId = wasmInstance?.checkNodeClick(
      [event.ray.origin.x, event.ray.origin.y, event.ray.origin.z],
      [event.ray.direction.x, event.ray.direction.y, event.ray.direction.z]
    );

    if (clickedId === node.id) {
      selectNode(clickedId);
    }
  };

  return (
    <mesh onClick={handleClick}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshBasicMaterial
        color={isSelected ? '#ff6b6b' : node.color}
        emissive={isSelected ? '#ff0000' : '#000000'}
      />
    </mesh>
  );
}
```

## Visual Feedback

### Selection Ring

```typescript
function SelectionRing({ node }: { node: Node }) {
  const isSelected = useGraphStore((s) => s.selectedNodes.has(node.id));

  if (!isSelected) return null;

  return (
    <mesh position={[node.x, node.y, node.z]}>
      <ringGeometry args={[22, 26, 32]} />
      <meshBasicMaterial color="#ff6b6b" transparent opacity={0.5} />
    </mesh>
  );
}
```

### Animated Hover

```typescript
function NodeComponent({ node }: { node: Node }) {
  const [hovered, setHovered] = useState(false);
  const scale = useSpring(hovered ? 1.1 : 1.0);

  return (
    <animated.mesh scale={scale}>
      {/* Node content */}
    </animated.mesh>
  );
}
```

## Troubleshooting

### Issue: Clicks not detected
**Solution**: Check that:
1. WASM instance is loaded (`wasmInstance !== null`)
2. Ray arrays have 3 elements
3. Node radius (20.0) matches visual size
4. Nodes are at correct positions

### Issue: Wrong node selected
**Solution**: Ensure Z=0 for 2D layouts:
```rust
// In WASM code (already implemented)
position: Vector3::new(node.visual.x as f32, node.visual.y as f32, 0.0)
```

### Issue: Performance degradation
**Solution**:
1. Profile with browser DevTools
2. Check if testing > 1000 nodes
3. Consider spatial acceleration (BVH/octree)
4. Debounce hover detection

## Testing

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NodeComponent } from './NodeComponent';

describe('NodeComponent click detection', () => {
  it('should detect clicks on node', async () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <Canvas>
        <NodeComponent node={testNode} onClick={handleClick} />
      </Canvas>
    );

    const node = getByTestId('node');
    await userEvent.click(node);

    expect(handleClick).toHaveBeenCalledWith(testNode.id);
  });
});
```

## API Reference

### `checkNodeClick(origin, direction): string | null`

**Parameters**:
- `origin`: `[number, number, number]` - Ray origin (camera position)
- `direction`: `[number, number, number]` - Ray direction (normalized)

**Returns**:
- `string` - ID of closest clicked node
- `null` - No node clicked

**Performance**:
- 10 nodes: ~74 ns
- 100 nodes: ~324 ns
- 1,000 nodes: ~2.8 µs

**Example**:
```javascript
const nodeId = wasmInstance.checkNodeClick(
  [0, 0, 10],
  [0, 0, -1]
);
```

---

## Related Documentation

- **Implementation**: `/docs/phase3-task3.2-completion-report.md`
- **Performance**: See benchmark section in completion report
- **WASM Source**: `/rust-wasm/src/interaction/mod.rs`
- **Bindings**: `/rust-wasm/src/bindings/mod.rs`

---

**Last Updated**: 2025-11-12
**Version**: 1.0
**Status**: Production Ready ✅
