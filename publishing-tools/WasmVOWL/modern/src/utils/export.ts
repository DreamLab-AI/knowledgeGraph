/**
 * Export utilities for SVG and PNG generation
 */

import type { Node, Edge } from '../types/graph';

/**
 * Export graph as SVG
 */
export function exportSVG(
  nodes: Map<string, Node>,
  edges: Map<string, Edge>,
  options: {
    width?: number;
    height?: number;
    background?: string;
    showLabels?: boolean;
  } = {}
): string {
  const {
    width = 1920,
    height = 1080,
    background = '#ffffff',
    showLabels = true
  } = options;

  // Find bounds of the graph
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  nodes.forEach((node) => {
    minX = Math.min(minX, node.position.x);
    minY = Math.min(minY, node.position.y);
    maxX = Math.max(maxX, node.position.x);
    maxY = Math.max(maxY, node.position.y);
  });

  // Add padding
  const padding = 50;
  const graphWidth = maxX - minX + padding * 2;
  const graphHeight = maxY - minY + padding * 2;

  // Calculate scale to fit in canvas
  const scale = Math.min(width / graphWidth, height / graphHeight, 1);
  const offsetX = (width - graphWidth * scale) / 2 - minX * scale + padding;
  const offsetY = (height - graphHeight * scale) / 2 - minY * scale + padding;

  // Start SVG
  let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#666" />
    </marker>
  </defs>
  <rect width="${width}" height="${height}" fill="${background}"/>
  <g transform="translate(${offsetX}, ${offsetY}) scale(${scale})">
`;

  // Render edges
  svg += '    <g id="edges">\n';
  edges.forEach((edge) => {
    const sourceNode = nodes.get(edge.source);
    const targetNode = nodes.get(edge.target);

    if (sourceNode && targetNode) {
      const color = edge.type === 'objectProperty' ? '#4a90e2' : '#8b5cf6';
      svg += `      <line x1="${sourceNode.position.x}" y1="${sourceNode.position.y}" x2="${targetNode.position.x}" y2="${targetNode.position.y}" stroke="${color}" stroke-width="2" marker-end="url(#arrowhead)" opacity="0.7"/>\n`;

      if (showLabels) {
        const midX = (sourceNode.position.x + targetNode.position.x) / 2;
        const midY = (sourceNode.position.y + targetNode.position.y) / 2;
        svg += `      <text x="${midX}" y="${midY}" font-size="10" fill="#666" text-anchor="middle">${escapeXml(edge.label)}</text>\n`;
      }
    }
  });
  svg += '    </g>\n';

  // Render nodes
  svg += '    <g id="nodes">\n';
  nodes.forEach((node) => {
    const color = getNodeColor(node.type);
    const radius = 20;

    svg += `      <circle cx="${node.position.x}" cy="${node.position.y}" r="${radius}" fill="${color}" stroke="#333" stroke-width="2"/>\n`;

    if (showLabels) {
      svg += `      <text x="${node.position.x}" y="${node.position.y + radius + 15}" font-size="12" fill="#333" text-anchor="middle" font-weight="bold">${escapeXml(node.label)}</text>\n`;
    }
  });
  svg += '    </g>\n';

  svg += '  </g>\n</svg>';

  return svg;
}

/**
 * Export graph as PNG using Canvas API
 */
export async function exportPNG(
  nodes: Map<string, Node>,
  edges: Map<string, Edge>,
  options: {
    width?: number;
    height?: number;
    background?: string;
    showLabels?: boolean;
    quality?: number;
  } = {}
): Promise<Blob> {
  const {
    width = 1920,
    height = 1080,
    background = '#ffffff',
    showLabels = true,
    quality = 0.95
  } = options;

  // Create off-screen canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  // Find bounds
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  nodes.forEach((node) => {
    minX = Math.min(minX, node.position.x);
    minY = Math.min(minY, node.position.y);
    maxX = Math.max(maxX, node.position.x);
    maxY = Math.max(maxY, node.position.y);
  });

  const padding = 50;
  const graphWidth = maxX - minX + padding * 2;
  const graphHeight = maxY - minY + padding * 2;
  const scale = Math.min(width / graphWidth, height / graphHeight, 1);
  const offsetX = (width - graphWidth * scale) / 2 - minX * scale + padding;
  const offsetY = (height - graphHeight * scale) / 2 - minY * scale + padding;

  // Draw background
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  // Transform context
  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);

  // Draw edges
  edges.forEach((edge) => {
    const sourceNode = nodes.get(edge.source);
    const targetNode = nodes.get(edge.target);

    if (sourceNode && targetNode) {
      const color = edge.type === 'objectProperty' ? '#4a90e2' : '#8b5cf6';

      ctx.strokeStyle = color;
      ctx.lineWidth = 2 / scale;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(sourceNode.position.x, sourceNode.position.y);
      ctx.lineTo(targetNode.position.x, targetNode.position.y);
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // Draw arrowhead
      drawArrowhead(ctx, sourceNode.position, targetNode.position, 20, scale);

      // Draw label
      if (showLabels) {
        const midX = (sourceNode.position.x + targetNode.position.x) / 2;
        const midY = (sourceNode.position.y + targetNode.position.y) / 2;
        ctx.font = `${10 / scale}px sans-serif`;
        ctx.fillStyle = '#666';
        ctx.textAlign = 'center';
        ctx.fillText(edge.label, midX, midY);
      }
    }
  });

  // Draw nodes
  nodes.forEach((node) => {
    const color = getNodeColor(node.type);
    const radius = 20;

    // Draw circle
    ctx.fillStyle = color;
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2 / scale;
    ctx.beginPath();
    ctx.arc(node.position.x, node.position.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Draw label
    if (showLabels) {
      ctx.font = `bold ${12 / scale}px sans-serif`;
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.position.x, node.position.y + radius + 15);
    }
  });

  ctx.restore();

  // Convert to blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create blob'));
        }
      },
      'image/png',
      quality
    );
  });
}

/**
 * Download SVG file
 */
export function downloadSVG(svg: string, filename: string = 'graph.svg'): void {
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  downloadBlob(blob, filename);
}

/**
 * Download PNG file
 */
export function downloadPNG(blob: Blob, filename: string = 'graph.png'): void {
  downloadBlob(blob, filename);
}

/**
 * Download blob as file
 */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Get node color based on type
 */
function getNodeColor(type: string): string {
  const colors: Record<string, string> = {
    class: '#4ade80',
    datatype: '#60a5fa',
    literal: '#f472b6',
    property: '#fbbf24',
    individual: '#a78bfa'
  };
  return colors[type] || '#94a3b8';
}

/**
 * Draw arrowhead
 */
function drawArrowhead(
  ctx: CanvasRenderingContext2D,
  from: { x: number; y: number },
  to: { x: number; y: number },
  nodeRadius: number,
  scale: number
): void {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const angle = Math.atan2(dy, dx);
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Position arrowhead at edge of target node
  const arrowX = from.x + (distance - nodeRadius) * Math.cos(angle);
  const arrowY = from.y + (distance - nodeRadius) * Math.sin(angle);

  const arrowSize = 10 / scale;

  ctx.save();
  ctx.translate(arrowX, arrowY);
  ctx.rotate(angle);

  ctx.fillStyle = '#666';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-arrowSize, -arrowSize / 2);
  ctx.lineTo(-arrowSize, arrowSize / 2);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
