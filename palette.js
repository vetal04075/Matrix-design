/**
 * Matrix Operations — Color Palette
 * ==================================
 *
 * Complete color system for the app. Every color has a dark and light variant.
 *
 * Structure:
 *   colors.ui        — Backgrounds, text, borders, brand, success/warn/error
 *   colors.operations — One entry per math operation (color + accent variants)
 *   colors.depth     — Generic fallback tiers when an operation has no unique color
 *   colors.progress  — Progress bar states (done, pending, current)
 *
 * Each operation color comes as a bundle of four values:
 *   base  — main color (used for text, big letters, matrix brackets, left lines)
 *   glow  — low-alpha fill (used for chip backgrounds, card tints)
 *   line  — mid-alpha (used for borders, accent strokes)
 *   mute  — very low-alpha (used for subtle backgrounds, hover states)
 *
 * Example usage:
 *   const theme = 'dark'
 *   const polarBase = colors.operations.polar[theme].base
 *   const polarGlow = colors.operations.polar[theme].glow
 */

export const colors = {
  // ==========================================================================
  // UI — neutral semantic colors
  // ==========================================================================
  ui: {
    // Background layers (from deepest to most elevated)
    bg: {
      dark: '#0a0a0f',
      light: '#f5f4f0',
    },
    bgElev1: {
      dark: '#13131a',
      light: '#ffffff',
    },
    bgElev2: {
      dark: '#1a1a24',
      light: '#faf9f5',
    },
    bgElev3: {
      dark: '#222230',
      light: '#edece7',
    },

    // Text
    text: {
      dark: '#ececf1',
      light: '#1a1a22',
    },
    textDim: {
      dark: '#9a9aae',
      light: '#5c5c6e',
    },
    textFaint: {
      dark: '#5c5c70',
      light: '#9a9aa8',
    },

    // Borders
    border: {
      dark: '#2a2a38',
      light: '#d9d7cf',
    },
    borderSoft: {
      dark: '#1f1f2a',
      light: '#e8e6de',
    },

    // Brand — primary UI accent (also used as polar decomposition color)
    brand: {
      dark: '#8b8bff',
      light: '#5c5cd6',
    },
    brandGlow: {
      dark: 'rgba(139, 139, 255, 0.15)',
      light: 'rgba(92, 92, 214, 0.1)',
    },

    // Success (used in result callouts regardless of operation)
    success: {
      dark: '#6ee7b7',
      light: '#0fb87a',
    },
    successGlow: {
      dark: 'rgba(110, 231, 183, 0.12)',
      light: 'rgba(15, 184, 122, 0.08)',
    },

    // Warning (used for recount indicator, caveats)
    warn: {
      dark: '#ffb86e',
      light: '#c2410c',
    },
    warnGlow: {
      dark: 'rgba(255, 184, 110, 0.14)',
      light: 'rgba(194, 65, 12, 0.08)',
    },

    // Error (destructive, errors)
    error: {
      dark: '#fb7185',
      light: '#e11d48',
    },
    errorGlow: {
      dark: 'rgba(251, 113, 133, 0.14)',
      light: 'rgba(225, 29, 72, 0.08)',
    },
  },

  // ==========================================================================
  // OPERATIONS — per-operation semantic colors
  // Each operation is a family (base / glow / line / mute) per theme.
  // ==========================================================================
  operations: {
    // ----- ARITHMETIC FAMILY -----
    addition: {
      dark: {
        base: '#67e8f9',
        glow: 'rgba(103, 232, 249, 0.14)',
        line: 'rgba(103, 232, 249, 0.4)',
        mute: 'rgba(103, 232, 249, 0.06)',
      },
      light: {
        base: '#0e7490',
        glow: 'rgba(14, 116, 144, 0.08)',
        line: 'rgba(14, 116, 144, 0.38)',
        mute: 'rgba(14, 116, 144, 0.04)',
      },
    },
    subtraction: {
      dark: {
        base: '#22d3ee',
        glow: 'rgba(34, 211, 238, 0.14)',
        line: 'rgba(34, 211, 238, 0.4)',
        mute: 'rgba(34, 211, 238, 0.06)',
      },
      light: {
        base: '#0891b2',
        glow: 'rgba(8, 145, 178, 0.08)',
        line: 'rgba(8, 145, 178, 0.38)',
        mute: 'rgba(8, 145, 178, 0.04)',
      },
    },
    multiplication: {
      dark: {
        base: '#fde047',
        glow: 'rgba(253, 224, 71, 0.14)',
        line: 'rgba(253, 224, 71, 0.4)',
        mute: 'rgba(253, 224, 71, 0.06)',
      },
      light: {
        base: '#a16207',
        glow: 'rgba(161, 98, 7, 0.08)',
        line: 'rgba(161, 98, 7, 0.38)',
        mute: 'rgba(161, 98, 7, 0.04)',
      },
    },
    power: {
      dark: {
        base: '#fbbf24',
        glow: 'rgba(251, 191, 36, 0.14)',
        line: 'rgba(251, 191, 36, 0.4)',
        mute: 'rgba(251, 191, 36, 0.06)',
      },
      light: {
        base: '#b45309',
        glow: 'rgba(180, 83, 9, 0.08)',
        line: 'rgba(180, 83, 9, 0.38)',
        mute: 'rgba(180, 83, 9, 0.04)',
      },
    },

    // ----- BASIC MATRIX OPS -----
    transpose: {
      dark: {
        base: '#7dd3fc',
        glow: 'rgba(125, 211, 252, 0.14)',
        line: 'rgba(125, 211, 252, 0.4)',
        mute: 'rgba(125, 211, 252, 0.06)',
      },
      light: {
        base: '#0284c7',
        glow: 'rgba(2, 132, 199, 0.08)',
        line: 'rgba(2, 132, 199, 0.38)',
        mute: 'rgba(2, 132, 199, 0.04)',
      },
    },
    determinant: {
      dark: {
        base: '#ffb86e',
        glow: 'rgba(255, 184, 110, 0.14)',
        line: 'rgba(255, 184, 110, 0.4)',
        mute: 'rgba(255, 184, 110, 0.06)',
      },
      light: {
        base: '#c2410c',
        glow: 'rgba(194, 65, 12, 0.08)',
        line: 'rgba(194, 65, 12, 0.38)',
        mute: 'rgba(194, 65, 12, 0.04)',
      },
    },
    inverse: {
      dark: {
        base: '#fb7185',
        glow: 'rgba(251, 113, 133, 0.14)',
        line: 'rgba(251, 113, 133, 0.4)',
        mute: 'rgba(251, 113, 133, 0.06)',
      },
      light: {
        base: '#e11d48',
        glow: 'rgba(225, 29, 72, 0.08)',
        line: 'rgba(225, 29, 72, 0.38)',
        mute: 'rgba(225, 29, 72, 0.04)',
      },
    },
    rank: {
      dark: {
        base: '#d8b4fe',
        glow: 'rgba(216, 180, 254, 0.14)',
        line: 'rgba(216, 180, 254, 0.4)',
        mute: 'rgba(216, 180, 254, 0.06)',
      },
      light: {
        base: '#7e22ce',
        glow: 'rgba(126, 34, 206, 0.08)',
        line: 'rgba(126, 34, 206, 0.38)',
        mute: 'rgba(126, 34, 206, 0.04)',
      },
    },
    trace: {
      dark: {
        base: '#f9a8d4',
        glow: 'rgba(249, 168, 212, 0.14)',
        line: 'rgba(249, 168, 212, 0.4)',
        mute: 'rgba(249, 168, 212, 0.06)',
      },
      light: {
        base: '#be185d',
        glow: 'rgba(190, 24, 93, 0.08)',
        line: 'rgba(190, 24, 93, 0.38)',
        mute: 'rgba(190, 24, 93, 0.04)',
      },
    },
    norm: {
      dark: {
        base: '#fcd34d',
        glow: 'rgba(252, 211, 77, 0.14)',
        line: 'rgba(252, 211, 77, 0.4)',
        mute: 'rgba(252, 211, 77, 0.06)',
      },
      light: {
        base: '#a16207',
        glow: 'rgba(161, 98, 7, 0.08)',
        line: 'rgba(161, 98, 7, 0.38)',
        mute: 'rgba(161, 98, 7, 0.04)',
      },
    },

    // ----- DECOMPOSITIONS -----
    luDecomposition: {
      dark: {
        base: '#a3e635',
        glow: 'rgba(163, 230, 53, 0.14)',
        line: 'rgba(163, 230, 53, 0.4)',
        mute: 'rgba(163, 230, 53, 0.06)',
      },
      light: {
        base: '#65a30d',
        glow: 'rgba(101, 163, 13, 0.08)',
        line: 'rgba(101, 163, 13, 0.38)',
        mute: 'rgba(101, 163, 13, 0.04)',
      },
    },
    qrDecomposition: {
      dark: {
        base: '#34d399',
        glow: 'rgba(52, 211, 153, 0.14)',
        line: 'rgba(52, 211, 153, 0.4)',
        mute: 'rgba(52, 211, 153, 0.06)',
      },
      light: {
        base: '#059669',
        glow: 'rgba(5, 150, 105, 0.08)',
        line: 'rgba(5, 150, 105, 0.38)',
        mute: 'rgba(5, 150, 105, 0.04)',
      },
    },
    qrDecompositionStage1: {
      // Sibling of QR — used for Gram-Schmidt intermediate matrices
      dark: {
        base: '#6ee7b7',
        glow: 'rgba(110, 231, 183, 0.14)',
        line: 'rgba(110, 231, 183, 0.4)',
        mute: 'rgba(110, 231, 183, 0.06)',
      },
      light: {
        base: '#047857',
        glow: 'rgba(4, 120, 87, 0.08)',
        line: 'rgba(4, 120, 87, 0.38)',
        mute: 'rgba(4, 120, 87, 0.04)',
      },
    },
    qrDecompositionStage2: {
      // Sibling of QR — used for orthogonalized matrix
      dark: {
        base: '#86efac',
        glow: 'rgba(134, 239, 172, 0.14)',
        line: 'rgba(134, 239, 172, 0.4)',
        mute: 'rgba(134, 239, 172, 0.06)',
      },
      light: {
        base: '#15803d',
        glow: 'rgba(21, 128, 61, 0.08)',
        line: 'rgba(21, 128, 61, 0.38)',
        mute: 'rgba(21, 128, 61, 0.04)',
      },
    },
    polarDecomposition: {
      // PRIMARY BRAND — matches ui.brand
      dark: {
        base: '#8b8bff',
        glow: 'rgba(139, 139, 255, 0.15)',
        line: 'rgba(139, 139, 255, 0.4)',
        mute: 'rgba(139, 139, 255, 0.06)',
      },
      light: {
        base: '#5c5cd6',
        glow: 'rgba(92, 92, 214, 0.1)',
        line: 'rgba(92, 92, 214, 0.45)',
        mute: 'rgba(92, 92, 214, 0.04)',
      },
    },
    cholesky: {
      dark: {
        base: '#fbbf24',
        glow: 'rgba(251, 191, 36, 0.14)',
        line: 'rgba(251, 191, 36, 0.4)',
        mute: 'rgba(251, 191, 36, 0.06)',
      },
      light: {
        base: '#d97706',
        glow: 'rgba(217, 119, 6, 0.08)',
        line: 'rgba(217, 119, 6, 0.38)',
        mute: 'rgba(217, 119, 6, 0.04)',
      },
    },
    squareRoot: {
      dark: {
        base: '#f0abfc',
        glow: 'rgba(240, 171, 252, 0.14)',
        line: 'rgba(240, 171, 252, 0.4)',
        mute: 'rgba(240, 171, 252, 0.06)',
      },
      light: {
        base: '#c026d3',
        glow: 'rgba(192, 38, 211, 0.08)',
        line: 'rgba(192, 38, 211, 0.4)',
        mute: 'rgba(192, 38, 211, 0.04)',
      },
    },
    eigendecomposition: {
      dark: {
        base: '#22d3ee',
        glow: 'rgba(34, 211, 238, 0.14)',
        line: 'rgba(34, 211, 238, 0.4)',
        mute: 'rgba(34, 211, 238, 0.06)',
      },
      light: {
        base: '#0891b2',
        glow: 'rgba(8, 145, 178, 0.08)',
        line: 'rgba(8, 145, 178, 0.38)',
        mute: 'rgba(8, 145, 178, 0.04)',
      },
    },
    eigenvalues: {
      // Sibling pair with eigenvectors
      dark: {
        base: '#6ee7b7',
        glow: 'rgba(110, 231, 183, 0.14)',
        line: 'rgba(110, 231, 183, 0.4)',
        mute: 'rgba(110, 231, 183, 0.06)',
      },
      light: {
        base: '#0fb87a',
        glow: 'rgba(15, 184, 122, 0.1)',
        line: 'rgba(15, 184, 122, 0.42)',
        mute: 'rgba(15, 184, 122, 0.04)',
      },
    },
    eigenvectors: {
      // Sibling pair with eigenvalues
      dark: {
        base: '#a7f3d0',
        glow: 'rgba(167, 243, 208, 0.14)',
        line: 'rgba(167, 243, 208, 0.4)',
        mute: 'rgba(167, 243, 208, 0.06)',
      },
      light: {
        base: '#10b981',
        glow: 'rgba(16, 185, 129, 0.08)',
        line: 'rgba(16, 185, 129, 0.38)',
        mute: 'rgba(16, 185, 129, 0.04)',
      },
    },

    // ----- ELIMINATION METHODS (often used inside decompositions) -----
    gauss: {
      dark: {
        base: '#c4b5fd',
        glow: 'rgba(196, 181, 253, 0.14)',
        line: 'rgba(196, 181, 253, 0.4)',
        mute: 'rgba(196, 181, 253, 0.06)',
      },
      light: {
        base: '#6d28d9',
        glow: 'rgba(109, 40, 217, 0.08)',
        line: 'rgba(109, 40, 217, 0.38)',
        mute: 'rgba(109, 40, 217, 0.04)',
      },
    },
    gaussJordan: {
      dark: {
        base: '#a78bfa',
        glow: 'rgba(167, 139, 250, 0.14)',
        line: 'rgba(167, 139, 250, 0.4)',
        mute: 'rgba(167, 139, 250, 0.06)',
      },
      light: {
        base: '#7c3aed',
        glow: 'rgba(124, 58, 237, 0.08)',
        line: 'rgba(124, 58, 237, 0.38)',
        mute: 'rgba(124, 58, 237, 0.04)',
      },
    },
    montante: {
      // Montante / Bareiss algorithm
      dark: {
        base: '#f472b6',
        glow: 'rgba(244, 114, 182, 0.14)',
        line: 'rgba(244, 114, 182, 0.4)',
        mute: 'rgba(244, 114, 182, 0.06)',
      },
      light: {
        base: '#be185d',
        glow: 'rgba(190, 24, 93, 0.08)',
        line: 'rgba(190, 24, 93, 0.38)',
        mute: 'rgba(190, 24, 93, 0.04)',
      },
    },

    // ----- SYSTEMS -----
    systemEquations: {
      dark: {
        base: '#c4b5fd',
        glow: 'rgba(196, 181, 253, 0.14)',
        line: 'rgba(196, 181, 253, 0.4)',
        mute: 'rgba(196, 181, 253, 0.06)',
      },
      light: {
        base: '#7c3aed',
        glow: 'rgba(124, 58, 237, 0.08)',
        line: 'rgba(124, 58, 237, 0.38)',
        mute: 'rgba(124, 58, 237, 0.04)',
      },
    },
  },

  // ==========================================================================
  // DEPTH — generic fallback tiers for nested operations without own color
  // Use when the nested step doesn't represent a specific named operation.
  // ==========================================================================
  depth: {
    level1: {
      // L1 = main flow. Intentionally no accent color.
      dark: {
        base: '#9a9aae',
        glow: 'rgba(154, 154, 174, 0.1)',
        line: 'rgba(154, 154, 174, 0.25)',
        mute: 'rgba(154, 154, 174, 0.04)',
      },
      light: {
        base: '#5c5c6e',
        glow: 'rgba(92, 92, 110, 0.06)',
        line: 'rgba(92, 92, 110, 0.2)',
        mute: 'rgba(92, 92, 110, 0.03)',
      },
    },
    level2: {
      dark: {
        base: '#b4b4c4',
        glow: 'rgba(180, 180, 196, 0.12)',
        line: 'rgba(180, 180, 196, 0.3)',
        mute: 'rgba(180, 180, 196, 0.05)',
      },
      light: {
        base: '#6c6c7e',
        glow: 'rgba(108, 108, 126, 0.07)',
        line: 'rgba(108, 108, 126, 0.25)',
        mute: 'rgba(108, 108, 126, 0.035)',
      },
    },
    level3: {
      dark: {
        base: '#c8c8d6',
        glow: 'rgba(200, 200, 214, 0.14)',
        line: 'rgba(200, 200, 214, 0.32)',
        mute: 'rgba(200, 200, 214, 0.06)',
      },
      light: {
        base: '#7c7c8e',
        glow: 'rgba(124, 124, 142, 0.08)',
        line: 'rgba(124, 124, 142, 0.28)',
        mute: 'rgba(124, 124, 142, 0.04)',
      },
    },
  },

  // ==========================================================================
  // PROGRESS — progress bar segment states (separate from operation colors
  // because these are state indicators, not semantic identities)
  // ==========================================================================
  progress: {
    done: {
      // Passed phases
      dark: '#3a3a50',
      light: '#c9c7bf',
    },
    pending: {
      // Future phases
      dark: '#222230',
      light: '#e8e6de',
    },
    // Note: `current` segment takes the color of the currently-visible operation.
    // See colors.operations[opName][theme].base for the fill,
    // and colors.operations[opName][theme].glow for the shadow.
  },
};

// ==========================================================================
// HELPER — resolves a color path given a theme
// ==========================================================================
/**
 * Get a flat color value from the palette.
 *
 * Examples:
 *   getColor('ui.brand', 'dark')                    → '#8b8bff'
 *   getColor('operations.determinant.base', 'dark') → '#ffb86e'
 *   getColor('operations.polar.glow', 'light')      → 'rgba(92, 92, 214, 0.1)'
 *   getColor('depth.level2.line', 'dark')           → 'rgba(180, 180, 196, 0.3)'
 *   getColor('progress.done', 'light')              → '#c9c7bf'
 */
export function getColor(path, theme = 'dark') {
  const parts = path.split('.');
  let node = colors;
  for (const part of parts) {
    if (node[part] === undefined) {
      throw new Error(`Color path not found: "${path}" (failed at "${part}")`);
    }
    node = node[part];
  }
  if (node && typeof node === 'object' && node[theme] !== undefined) {
    return node[theme];
  }
  return node;
}

// ==========================================================================
// HELPER — resolves a complete operation color bundle
// ==========================================================================
/**
 * Get the {base, glow, line, mute} bundle for an operation.
 * Falls back to `depth.levelN` if the operation name isn't registered.
 *
 * Examples:
 *   getOperation('polarDecomposition', 'dark')
 *     → { base: '#8b8bff', glow: '...', line: '...', mute: '...' }
 *
 *   getOperation('unknownOp', 'dark', 2)    // fallback to L2 depth
 *     → { base: '#b4b4c4', glow: '...', line: '...', mute: '...' }
 */
export function getOperation(opName, theme = 'dark', fallbackDepth = 1) {
  const op = colors.operations[opName];
  if (op && op[theme]) return op[theme];

  const tier = `level${Math.min(Math.max(fallbackDepth, 1), 3)}`;
  return colors.depth[tier][theme];
}

// ==========================================================================
// CSS VARIABLES EXPORT (for web artifacts or React Native Web)
// Generates a flat :root CSS variables block for a given theme.
// ==========================================================================
/**
 * Generate CSS variables as a string for injection into a <style> tag.
 *
 *   document.head.insertAdjacentHTML('beforeend',
 *     `<style>${generateCssVariables('dark')}</style>`);
 */
export function generateCssVariables(theme = 'dark') {
  const lines = [':root {'];

  // UI
  Object.entries(colors.ui).forEach(([key, val]) => {
    lines.push(`  --ui-${kebab(key)}: ${val[theme]};`);
  });

  // Operations
  Object.entries(colors.operations).forEach(([opName, opValue]) => {
    const k = kebab(opName);
    Object.entries(opValue[theme]).forEach(([variant, color]) => {
      lines.push(`  --op-${k}-${variant}: ${color};`);
    });
  });

  // Depth
  Object.entries(colors.depth).forEach(([tier, tierValue]) => {
    const k = kebab(tier);
    Object.entries(tierValue[theme]).forEach(([variant, color]) => {
      lines.push(`  --depth-${k}-${variant}: ${color};`);
    });
  });

  // Progress
  Object.entries(colors.progress).forEach(([state, val]) => {
    lines.push(`  --progress-${state}: ${val[theme]};`);
  });

  lines.push('}');
  return lines.join('\n');
}

function kebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// ==========================================================================
// OPERATION REGISTRY — list of all operation keys (for validation / docs)
// ==========================================================================
export const OPERATION_KEYS = Object.keys(colors.operations);

// ==========================================================================
// DEFAULT EXPORT
// ==========================================================================
export default colors;
