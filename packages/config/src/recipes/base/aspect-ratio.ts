import { defineRecipe } from "@pandacss/dev";

export const aspectRatio = defineRecipe({
  className: "aspect-ratio",
  description: "A component for maintaining consistent aspect ratios for its children.",
  base: {
    '--size': '100%',
    width: 'var(--size)',
    height: 'var(--size)',

    '--ratio': '16/9',
    aspectRatio: 'var(--ratio)',

    '--object-fit': 'cover',

    '& > *': {
      width: 'var(--width)',
      height: 'var(--height)',
      objectFit: 'var(--object-fit)'
    },
  },
  variants: {
    ratio: {
      'photo': { '--ratio': '3/2' },
      'square': { '--ratio': '1/1' },
      'video': { '--ratio': '16/9' },
      'portrait': { '--ratio': '9/16' },
      'landscape': { '--ratio': '16/9' },
      'golden': { '--ratio': '1.618/1' },
      'cinematic': { '--ratio': '2.39/1' },
      'photo-classic': { '--ratio': '4/3' },
      'widescreen': { '--ratio': '21/9' },
    },

    fit: {
      cover: {
        '--object-fit': 'cover'
      },
      contain: {
        '--object-fit': 'contain'
      },
      fill: {
        '--object-fit': 'fill'
      },
    },
  },
  defaultVariants: {
    ratio: 'video',
    fit: 'cover',
  },
});
