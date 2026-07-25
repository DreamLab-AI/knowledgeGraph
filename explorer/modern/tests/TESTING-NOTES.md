# Testing Notes for WebVOWL Modern

## React Three Fiber Testing Limitations

### Issue
React Three Fiber (R3F) components cannot be tested in standard JavaScript test environments (happy-dom, jsdom) because:

1. **WebGL Requirement**: R3F uses Three.js which requires WebGL context
2. **Canvas API**: Test environments don't provide full Canvas API implementation  
3. **Infinite Updates**: R3F's frame loop causes infinite re-renders in test environments

### Solution
Use **manual verification** and **code analysis** instead:

1. **Code Inspection**: Verify component logic, props, and integrations
2. **Type Checking**: Ensure TypeScript compilation passes
3. **Build Verification**: Confirm production build succeeds
4. **Manual Testing**: Run dev server and test in browser

### Test Commands

```bash
# Type checking (passes)
npm run type-check

# Build verification (passes)  
npm run build

# Development server (manual testing)
npm run dev
```

### Automated Tests That Work

✅ **Unit tests** for non-R3F components:
- Stores (useGraphStore, useUIStore)
- Utilities (color helpers, parsers)
- Hooks (non-R3F hooks)
- Type definitions

✅ **Integration tests** for logic:
- State management flows
- Data transformations
- Event handlers (without rendering)

❌ **Tests that don't work**:
- Full component rendering with R3F
- Canvas interaction testing
- Visual regression testing in CI

### Best Practices

1. **Separate Logic from Rendering**
   ```tsx
   // ✅ Good: Testable logic in separate function
   export function calculateNodeRadius(instances: number): number {
     const baseRadius = 1.6;
     return instances > 0 ? Math.sqrt(instances) * 0.1 + baseRadius : baseRadius;
   }
   
   export function ClassNode({ node }: Props) {
     const radius = calculateNodeRadius(node.properties?.instances || 0);
     return <Circle args={[radius, 32]} />;
   }
   ```

2. **Test Store Logic Directly**
   ```tsx
   import { useGraphStore } from './stores/useGraphStore';
   
   test('selecting a node updates selectedNode', () => {
     const selectNode = useGraphStore.getState().selectNode;
     selectNode('node-1');
     expect(useGraphStore.getState().selectedNode).toBe('node-1');
   });
   ```

3. **Manual Testing Checklist**
   - [ ] Canvas renders at full viewport size
   - [ ] Nodes are draggable and selectable
   - [ ] Edges render correctly between nodes
   - [ ] 2D/3D toggle switches camera mode
   - [ ] Colors match VOWL specification
   - [ ] UI overlays don't block canvas interactions
   - [ ] File drop loads and validates ontology

### References

- [R3F Testing Docs](https://docs.pmnd.rs/react-three-fiber/tutorials/testing)
- [Known Issue: R3F + Vitest](https://github.com/pmndrs/react-three-fiber/issues/2429)
- [Alternative: E2E Testing with Playwright](https://playwright.dev)

