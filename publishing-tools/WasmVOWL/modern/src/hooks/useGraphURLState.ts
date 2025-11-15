import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export interface GraphURLState {
  zoom: number;
  rotation: [number, number, number];
  selectedNode: string | null;
}

export function useGraphURLState() {
  const [searchParams, setSearchParams] = useSearchParams();

  const graphState: GraphURLState = {
    zoom: parseFloat(searchParams.get('zoom') || '1'),
    rotation: (searchParams.get('rotation')?.split(',').map(Number) || [0, 0, 0]) as [number, number, number],
    selectedNode: searchParams.get('selected') || null,
  };

  const updateGraphState = useCallback((updates: Partial<GraphURLState>) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (updates.zoom !== undefined) {
        newParams.set('zoom', updates.zoom.toString());
      }

      if (updates.rotation !== undefined) {
        newParams.set('rotation', updates.rotation.join(','));
      }

      if (updates.selectedNode !== undefined) {
        if (updates.selectedNode === null) {
          newParams.delete('selected');
        } else {
          newParams.set('selected', updates.selectedNode);
        }
      }

      return newParams;
    }, { replace: true });
  }, [setSearchParams]);

  return [graphState, updateGraphState] as const;
}
