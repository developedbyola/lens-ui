import { defineRecipe } from '@pandacss/dev';

export const grid = defineRecipe({
  className: 'grid',
  base: {
    display: 'grid',
  },
  variants: {
    /* Columns: fixed column counts + responsive helpers */
    cols: {
      none: { gridTemplateColumns: 'none' },
      '1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
      '2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
      '3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
      '4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
      '6': { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
      '8': { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' },
      '12': { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' },
      auto: { gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))' },
    },

    /* Rows: simple presets */
    rows: {
      auto: { gridTemplateRows: 'auto' },
      '1': { gridTemplateRows: 'repeat(1, 1fr)' },
      '2': { gridTemplateRows: 'repeat(2, 1fr)' },
      '3': { gridTemplateRows: 'repeat(3, 1fr)' },
      '4': { gridTemplateRows: 'repeat(4, 1fr)' },
      '6': { gridTemplateRows: 'repeat(6, 1fr)' },
      '8': { gridTemplateRows: 'repeat(8, 1fr)' },
      '12': { gridTemplateRows: 'repeat(12, 1fr)' },
      none: { gridTemplateRows: 'none' },
    },

    /* Auto-placement / flow */
    flow: {
      row: { gridAutoFlow: 'row' },
      column: { gridAutoFlow: 'column' },
      rowDense: { gridAutoFlow: 'row dense' },
      columnDense: { gridAutoFlow: 'column dense' },
    },

    /* Auto rows / cols — useful for masonry and auto-placement */
    autoRows: {
      auto: { gridAutoRows: 'auto' },
      min: { gridAutoRows: 'minmax(0, auto)' },
      '1fr': { gridAutoRows: '1fr' },
    },

    autoCols: {
      auto: { gridAutoColumns: 'auto' },
      min: { gridAutoColumns: 'minmax(0, 1fr)' },
    },

    /* Item alignment (align-items / justify-items) */
    items: {
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
      stretch: { alignItems: 'stretch' },
    },

    justify: {
      start: { justifyItems: 'start' },
      center: { justifyItems: 'center' },
      end: { justifyItems: 'end' },
      stretch: { justifyItems: 'stretch' },
    },
  },

  defaultVariants: {
    cols: '1',
    flow: 'row',
    items: 'stretch',
    justify: 'start',
  },
});
