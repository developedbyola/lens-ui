import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const highlightFn = /* @__PURE__ */ createRecipe('href', {
  "span": "fit",
  "size": "base",
  "visual": "filled",
  "tone": "primary",
  "shape": "rounded"
}, [
  {
    "tone": "info",
    "visual": "filled",
    "css": {
      "backgroundColor": "blue.60",
      "_hover": {
        "backgroundColor": "blue.50"
      }
    }
  },
  {
    "tone": "success",
    "visual": "filled",
    "css": {
      "backgroundColor": "green.60",
      "_hover": {
        "backgroundColor": "green.50"
      }
    }
  },
  {
    "tone": "warning",
    "visual": "filled",
    "css": {
      "backgroundColor": "orange.60",
      "_hover": {
        "backgroundColor": "orange.50"
      }
    }
  },
  {
    "tone": "secondary",
    "visual": "filled",
    "css": {
      "backgroundColor": "secondary.60",
      "_hover": {
        "backgroundColor": "secondary.50"
      }
    }
  },
  {
    "tone": "destructive",
    "visual": "filled",
    "css": {
      "backgroundColor": "red.60",
      "_hover": {
        "backgroundColor": "red.50"
      }
    }
  },
  {
    "tone": "primary",
    "visual": "filled",
    "css": {
      "backgroundColor": "primary.60",
      "_hover": {
        "backgroundColor": "primary.50"
      }
    }
  },
  {
    "tone": "neutral",
    "visual": "filled",
    "css": {
      "backgroundColor": "neutral.100",
      "_hover": {
        "backgroundColor": "neutral.90"
      }
    }
  },
  {
    "tone": "info",
    "visual": "outlined",
    "css": {
      "color": "blue.60",
      "borderColor": "blue.30",
      "_hover": {
        "color": "blue.70",
        "backgroundColor": "blue.10"
      }
    }
  },
  {
    "tone": "success",
    "visual": "outlined",
    "css": {
      "color": "green.60",
      "borderColor": "green.30",
      "_hover": {
        "color": "green.70",
        "backgroundColor": "green.10"
      }
    }
  },
  {
    "tone": "warning",
    "visual": "outlined",
    "css": {
      "color": "orange.60",
      "borderColor": "orange.30",
      "_hover": {
        "color": "orange.70",
        "backgroundColor": "orange.10"
      }
    }
  },
  {
    "tone": "secondary",
    "visual": "outlined",
    "css": {
      "color": "secondary.60",
      "borderColor": "secondary.30",
      "_hover": {
        "color": "secondary.70",
        "backgroundColor": "secondary.10"
      }
    }
  },
  {
    "tone": "destructive",
    "visual": "outlined",
    "css": {
      "color": "red.60",
      "borderColor": "red.30",
      "_hover": {
        "color": "red.60",
        "backgroundColor": "red.10"
      }
    }
  },
  {
    "tone": "primary",
    "visual": "outlined",
    "css": {
      "color": "primary.60",
      "borderColor": "primary.20",
      "_hover": {
        "color": "primary.60",
        "backgroundColor": "primary.10"
      }
    }
  },
  {
    "tone": "neutral",
    "visual": "outlined",
    "css": {
      "color": "neutral.80",
      "borderColor": "neutral.30",
      "_hover": {
        "color": "neutral.100",
        "backgroundColor": "neutral.10"
      }
    }
  },
  {
    "tone": "info",
    "visual": "soft",
    "css": {
      "color": "blue.60",
      "backgroundColor": "blue.10",
      "_hover": {
        "color": "blue.70",
        "backgroundColor": "blue.20"
      }
    }
  },
  {
    "tone": "success",
    "visual": "soft",
    "css": {
      "color": "green.60",
      "backgroundColor": "green.10",
      "_hover": {
        "color": "green.70",
        "backgroundColor": "green.20"
      }
    }
  },
  {
    "tone": "warning",
    "visual": "soft",
    "css": {
      "color": "orange.60",
      "backgroundColor": "orange.10",
      "_hover": {
        "color": "orange.70",
        "backgroundColor": "orange.20"
      }
    }
  },
  {
    "tone": "secondary",
    "visual": "soft",
    "css": {
      "color": "secondary.60",
      "backgroundColor": "secondary.10",
      "_hover": {
        "color": "secondary.70",
        "backgroundColor": "secondary.20"
      }
    }
  },
  {
    "tone": "destructive",
    "visual": "soft",
    "css": {
      "color": "red.60",
      "backgroundColor": "red.10",
      "_hover": {
        "color": "red.70",
        "backgroundColor": "red.20"
      }
    }
  },
  {
    "tone": "primary",
    "visual": "soft",
    "css": {
      "color": "primary.60",
      "backgroundColor": "primary.10",
      "_hover": {
        "color": "primary.70",
        "backgroundColor": "primary.20"
      }
    }
  },
  {
    "tone": "neutral",
    "visual": "soft",
    "css": {
      "color": "neutral.80",
      "backgroundColor": "neutral.20",
      "_hover": {
        "color": "neutral.100",
        "backgroundColor": "neutral.30"
      }
    }
  },
  {
    "tone": "primary",
    "visual": "ghost",
    "css": {
      "color": "primary.60",
      "_hover": {
        "color": "primary.70",
        "backgroundColor": "primary.10"
      }
    }
  },
  {
    "tone": "secondary",
    "visual": "ghost",
    "css": {
      "color": "secondary.60",
      "_hover": {
        "color": "secondary.70",
        "backgroundColor": "secondary.10"
      }
    }
  },
  {
    "tone": "destructive",
    "visual": "ghost",
    "css": {
      "color": "red.60",
      "_hover": {
        "color": "red.70",
        "backgroundColor": "red.10"
      }
    }
  },
  {
    "tone": "info",
    "visual": "ghost",
    "css": {
      "color": "blue.60",
      "_hover": {
        "color": "blue.70",
        "backgroundColor": "blue.10"
      }
    }
  },
  {
    "tone": "success",
    "visual": "ghost",
    "css": {
      "color": "green.60",
      "_hover": {
        "color": "green.70",
        "backgroundColor": "green.10"
      }
    }
  },
  {
    "tone": "warning",
    "visual": "ghost",
    "css": {
      "color": "orange.60",
      "_hover": {
        "color": "orange.70",
        "backgroundColor": "orange.10"
      }
    }
  },
  {
    "tone": "destructive",
    "visual": "ghost",
    "css": {
      "color": "red.60",
      "_hover": {
        "color": "red.70",
        "backgroundColor": "red.10"
      }
    }
  },
  {
    "tone": "neutral",
    "visual": "ghost",
    "css": {
      "color": "neutral.90",
      "_hover": {
        "color": "neutral.100",
        "backgroundColor": "neutral.20"
      }
    }
  },
  {
    "tone": "primary",
    "visual": "plain",
    "css": {
      "color": "primary.60",
      "_hover": {
        "color": "primary.80"
      }
    }
  },
  {
    "tone": "info",
    "visual": "plain",
    "css": {
      "color": "blue.60",
      "_hover": {
        "color": "blue.80"
      }
    }
  },
  {
    "tone": "success",
    "visual": "plain",
    "css": {
      "color": "green.60",
      "_hover": {
        "color": "green.80"
      }
    }
  },
  {
    "tone": "warning",
    "visual": "plain",
    "css": {
      "color": "orange.60",
      "_hover": {
        "color": "orange.80"
      }
    }
  },
  {
    "tone": "destructive",
    "visual": "plain",
    "css": {
      "color": "red.60",
      "_hover": {
        "color": "red.80"
      }
    }
  },
  {
    "tone": "neutral",
    "visual": "plain",
    "css": {
      "color": "neutral.80",
      "_hover": {
        "color": "neutral.100"
      }
    }
  },
  {
    "tone": "secondary",
    "visual": "plain",
    "css": {
      "color": "purple.60",
      "_hover": {
        "color": "purple.80"
      }
    }
  }
])

const highlightVariantMap = {
  "size": [
    "xs",
    "sm",
    "lg",
    "xl",
    "base"
  ],
  "visual": [
    "soft",
    "filled",
    "outlined",
    "ghost",
    "plain"
  ],
  "tone": [
    "info",
    "primary",
    "success",
    "warning",
    "neutral",
    "secondary",
    "destructive"
  ],
  "shape": [
    "flat",
    "round",
    "pill",
    "rounded"
  ],
  "span": [
    "fit",
    "full"
  ]
}

const highlightVariantKeys = Object.keys(highlightVariantMap)

export const highlight = /* @__PURE__ */ Object.assign(memo(highlightFn.recipeFn), {
  __recipe__: true,
  __name__: 'highlight',
  __getCompoundVariantCss__: highlightFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: highlightVariantKeys,
  variantMap: highlightVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, highlightVariantKeys)
  },
  getVariantProps: highlightFn.getVariantProps,
})