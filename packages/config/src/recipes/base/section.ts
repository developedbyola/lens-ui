import { defineRecipe } from "@pandacss/dev"

export const section = defineRecipe({
  className: "section",
  base: {
    width: '100%'
  },
  variants: {
    content: {
      end: { alignContent: 'end'},
      start: {alignContent: 'start'},
      center: {alignContent: 'center'},
    },
    screen: {
      full: {minHeight: 'dvh'},
      fit: {minHeight: 'fit-content'},
    }
  },
  defaultVariants: {
    screen: 'fit',
    content: 'center',
  }
})