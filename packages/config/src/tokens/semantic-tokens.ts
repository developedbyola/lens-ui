import { defineSemanticTokens } from "@pandacss/dev";

const bg = {
  DEFAULT: {
    value: {
      base: "{colors.white}",
      _dark: "{colors.neutral.95}",
    },
  },
  subtle: {
    value: {
      base: "{colors.neutral.20}",
      _dark: "{colors.neutral.90}",
    },
  },
  muted: {
    value: {
      base: "{colors.neutral.10}",
      _dark: "{colors.neutral.80}",
    },
  },
  surface: {
    value: {
      base: "{colors.neutral.20}",
      _dark: "{colors.neutral.90}",
    },
  },
  inverted: {
    value: {
      base: "{colors.red.10}",
      _dark: "{colors.black}",
    },
  },
  emphasized: {
    value: {
      base: "{colors.white}",
      _dark: "{colors.blue.60}",
    },
  },
};

const fg = {
  DEFAULT: {
    value: {
      base: "{colors.neutral.100}",
      _dark: "{colors.neutral.10}",
    },
  },
  subtle: {
    value: {
      base: "{colors.neutral.70}",
      _dark: "{colors.neutral.50}",
    },
  },
  muted: {
    value: {
      base: "{colors.neutral.50}",
      _dark: "{colors.neutral.60}",
    },
  },
  inverted: {
    value: {
      base: "{colors.white}",
      _dark: "{colors.neutral.100}",
    },
  },
  headline: {
    value: {
      base: "{colors.neutral.100}",
      _dark: "{colors.white}",
    },
  },
};

const interaction = {
  focus: {
    value: {
      base: "{colors.blue.70}",
      _dark: "{colors.blue.60}",
    },
  },
  hover: {
    value: {
      base: "{colors.neutral.30}",
      _dark: "{colors.neutral.90}",
    },
  },
  pressed: {
    value: "{colors.neutral.20}",
    _dark: "{colors.neutral.80}",
  },
};

const accent = {
  DEFAULT: {
    value: {
      base: "{colors.blue.70}",
      _dark: "{colors.blue.60}",
    },
  },
  emphasized: {
    value: {
      base: "{colors.blue.50}",
      _dark: "{colors.blue.60}",
    },
  },
  subtle: {
    value: {
      base: "{colors.blue.10}",
      _dark: "{colors.blue.10}",
    },
  },
};

const link = {
  DEFAULT: {
    value: {
      base: "{colors.blue.60}",
      _dark: "{colors.blue.50}",
    },
  },
  emphasized: {
    value: {
      base: "{colors.blue.70}",
      _dark: "{colors.blue.40}",
    },
  },
};

const border = {
  DEFAULT: {
    value: {
      base: "{colors.neutral.30}",
      _dark: "{colors.neutral.90}",
    },
  },
  muted: {
    value: {
      base: "{colors.neutral.20}",
      _dark: "{colors.neutral.90}",
    },
  },
};

const red = {
  filled: {
    bg: {
      value: {
        base: "{colors.red.70}",
        _dark: "{colors.red.70}",
      }
    },

    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.red.60}",
          _dark: "{colors.red.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.red.10}",
        _dark: "{colors.red.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.red.70}",
        _dark: "{colors.red.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.red.20}",
          _dark: "{colors.red.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.red.70}",
        _dark: "{colors.red.70}",
      }
    },
    border: {
      value: {
        base: "{colors.red.40}",
        _dark: "{colors.red.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.red.10}",
          _dark: "{colors.red.100}",
        }
      },
      border: {

        value: {
          base: "{colors.red.50}",
          _dark: "{colors.red.100}",
        }
      }
    },
  },

  ghost: {

    fg: {
      value: {
        base: "{colors.red.70}",
        _dark: "{colors.red.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.red.10}",
          _dark: "{colors.red.100}",
        }
      }
    },
  }
};

const orange = {
  filled: {
    bg: {
      value: {
        base: "{colors.orange.70}",
        _dark: "{colors.orange.70}",
      }
    },

    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.orange.60}",
          _dark: "{colors.orange.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.orange.10}",
        _dark: "{colors.orange.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.orange.70}",
        _dark: "{colors.orange.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.orange.20}",
          _dark: "{colors.orange.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.orange.70}",
        _dark: "{colors.orange.70}",
      }
    },
    border: {
      value: {
        base: "{colors.orange.40}",
        _dark: "{colors.orange.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.orange.10}",
          _dark: "{colors.orange.100}",
        }
      },
      border: {

        value: {
          base: "{colors.orange.50}",
          _dark: "{colors.orange.100}",
        }
      }
    },
  },

  ghost: {

    fg: {
      value: {
        base: "{colors.orange.70}",
        _dark: "{colors.orange.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.orange.10}",
          _dark: "{colors.orange.100}",
        }
      }
    },
  }
};

const amber = {
  filled: {
    bg: {
      value: {
        base: "{colors.amber.70}",
        _dark: "{colors.amber.70}",
      }
    },

    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.amber.60}",
          _dark: "{colors.amber.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.amber.10}",
        _dark: "{colors.amber.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.amber.70}",
        _dark: "{colors.amber.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.amber.20}",
          _dark: "{colors.amber.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.amber.70}",
        _dark: "{colors.amber.70}",
      }
    },
    border: {
      value: {
        base: "{colors.amber.40}",
        _dark: "{colors.amber.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.amber.10}",
          _dark: "{colors.amber.100}",
        }
      },
      border: {

        value: {
          base: "{colors.amber.50}",
          _dark: "{colors.amber.100}",
        }
      }
    },
  },

  ghost: {

    fg: {
      value: {
        base: "{colors.amber.70}",
        _dark: "{colors.amber.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.amber.10}",
          _dark: "{colors.amber.100}",
        }
      }
    },
  }
};

const yellow = {
  filled: {
    bg: {
      value: {
        base: "{colors.yellow.70}",
        _dark: "{colors.yellow.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.yellow.60}",
          _dark: "{colors.yellow.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.yellow.10}",
        _dark: "{colors.yellow.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.yellow.70}",
        _dark: "{colors.yellow.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.yellow.20}",
          _dark: "{colors.yellow.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.yellow.70}",
        _dark: "{colors.yellow.70}",
      }
    },
    border: {
      value: {
        base: "{colors.yellow.40}",
        _dark: "{colors.yellow.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.yellow.10}",
          _dark: "{colors.yellow.100}",
        }
      },
      border: {

        value: {
          base: "{colors.yellow.50}",
          _dark: "{colors.yellow.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.yellow.70}",
        _dark: "{colors.yellow.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.yellow.10}",
          _dark: "{colors.yellow.100}",
        }
      }
    },
  }
};

const lime = {
  filled: {
    bg: {
      value: {
        base: "{colors.lime.70}",
        _dark: "{colors.lime.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.lime.60}",
          _dark: "{colors.lime.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.lime.10}",
        _dark: "{colors.lime.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.lime.70}",
        _dark: "{colors.lime.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.lime.20}",
          _dark: "{colors.lime.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.lime.70}",
        _dark: "{colors.lime.70}",
      }
    },
    border: {
      value: {
        base: "{colors.lime.40}",
        _dark: "{colors.lime.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.lime.10}",
          _dark: "{colors.lime.100}",
        }
      },
      border: {

        value: {
          base: "{colors.lime.50}",
          _dark: "{colors.lime.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.lime.70}",
        _dark: "{colors.lime.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.lime.10}",
          _dark: "{colors.lime.100}",
        }
      }
    },
  }
}

const green = {
  filled: {
    bg: {
      value: {
        base: "{colors.green.70}",
        _dark: "{colors.green.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.green.60}",
          _dark: "{colors.green.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.green.10}",
        _dark: "{colors.green.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.green.70}",
        _dark: "{colors.green.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.green.20}",
          _dark: "{colors.green.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.green.70}",
        _dark: "{colors.green.70}",
      }
    },
    border: {
      value: {
        base: "{colors.green.40}",
        _dark: "{colors.green.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.green.10}",
          _dark: "{colors.green.100}",
        }
      },
      border: {

        value: {
          base: "{colors.green.50}",
          _dark: "{colors.green.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.green.70}",
        _dark: "{colors.green.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.green.10}",
          _dark: "{colors.green.100}",
        }
      }
    },
  }
}

const emerald = {
  filled: {
    bg: {
      value: {
        base: "{colors.emerald.70}",
        _dark: "{colors.emerald.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.emerald.60}",
          _dark: "{colors.emerald.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.emerald.10}",
        _dark: "{colors.emerald.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.emerald.70}",
        _dark: "{colors.emerald.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.emerald.20}",
          _dark: "{colors.emerald.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.emerald.70}",
        _dark: "{colors.emerald.70}",
      }
    },
    border: {
      value: {
        base: "{colors.emerald.40}",
        _dark: "{colors.emerald.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.emerald.10}",
          _dark: "{colors.emerald.100}",
        }
      },
      border: {

        value: {
          base: "{colors.emerald.50}",
          _dark: "{colors.emerald.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.emerald.70}",
        _dark: "{colors.emerald.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.emerald.10}",
          _dark: "{colors.emerald.100}",
        }
      }
    },
  }
}

const teal = {
  filled: {
    bg: {
      value: {
        base: "{colors.teal.70}",
        _dark: "{colors.teal.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.teal.60}",
          _dark: "{colors.teal.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.teal.10}",
        _dark: "{colors.teal.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.teal.70}",
        _dark: "{colors.teal.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.teal.20}",
          _dark: "{colors.teal.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.teal.70}",
        _dark: "{colors.teal.70}",
      }
    },
    border: {
      value: {
        base: "{colors.teal.40}",
        _dark: "{colors.teal.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.teal.10}",
          _dark: "{colors.teal.100}",
        }
      },
      border: {

        value: {
          base: "{colors.teal.50}",
          _dark: "{colors.teal.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.teal.70}",
        _dark: "{colors.teal.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.teal.10}",
          _dark: "{colors.teal.100}",
        }
      }
    },
  }
}

const cyan = {
  filled: {
    bg: {
      value: {
        base: "{colors.cyan.70}",
        _dark: "{colors.cyan.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.cyan.60}",
          _dark: "{colors.cyan.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.cyan.10}",
        _dark: "{colors.cyan.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.cyan.70}",
        _dark: "{colors.cyan.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.cyan.20}",
          _dark: "{colors.cyan.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.cyan.70}",
        _dark: "{colors.cyan.70}",
      }
    },
    border: {
      value: {
        base: "{colors.cyan.40}",
        _dark: "{colors.cyan.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.cyan.10}",
          _dark: "{colors.cyan.100}",
        }
      },
      border: {

        value: {
          base: "{colors.cyan.50}",
          _dark: "{colors.cyan.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.cyan.70}",
        _dark: "{colors.cyan.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.cyan.10}",
          _dark: "{colors.cyan.100}",
        }
      }
    },
  }
}

const sky = {
  filled: {
    bg: {
      value: {
        base: "{colors.sky.70}",
        _dark: "{colors.sky.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.sky.60}",
          _dark: "{colors.sky.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.sky.10}",
        _dark: "{colors.sky.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.sky.70}",
        _dark: "{colors.sky.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.sky.20}",
          _dark: "{colors.sky.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.sky.70}",
        _dark: "{colors.sky.70}",
      }
    },
    border: {
      value: {
        base: "{colors.sky.40}",
        _dark: "{colors.sky.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.sky.10}",
          _dark: "{colors.sky.100}",
        }
      },
      border: {

        value: {
          base: "{colors.sky.50}",
          _dark: "{colors.sky.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.sky.70}",
        _dark: "{colors.sky.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.sky.10}",
          _dark: "{colors.sky.100}",
        }
      }
    },
  }
}

const blue = {
  filled: {
    bg: {
      value: {
        base: "{colors.blue.70}",
        _dark: "{colors.blue.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.blue.60}",
          _dark: "{colors.blue.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.blue.10}",
        _dark: "{colors.blue.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.blue.70}",
        _dark: "{colors.blue.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.blue.20}",
          _dark: "{colors.blue.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.blue.70}",
        _dark: "{colors.blue.70}",
      }
    },
    border: {
      value: {
        base: "{colors.blue.40}",
        _dark: "{colors.blue.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.blue.10}",
          _dark: "{colors.blue.100}",
        }
      },
      border: {

        value: {
          base: "{colors.blue.50}",
          _dark: "{colors.blue.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.blue.70}",
        _dark: "{colors.blue.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.blue.10}",
          _dark: "{colors.blue.100}",
        }
      }
    },
  }
};

const indigo = {
  filled: {
    bg: {
      value: {
        base: "{colors.indigo.70}",
        _dark: "{colors.indigo.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.indigo.60}",
          _dark: "{colors.indigo.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.indigo.10}",
        _dark: "{colors.indigo.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.indigo.70}",
        _dark: "{colors.indigo.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.indigo.20}",
          _dark: "{colors.indigo.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.indigo.70}",
        _dark: "{colors.indigo.70}",
      }
    },
    border: {
      value: {
        base: "{colors.indigo.40}",
        _dark: "{colors.indigo.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.indigo.10}",
          _dark: "{colors.indigo.100}",
        }
      },
      border: {

        value: {
          base: "{colors.indigo.50}",
          _dark: "{colors.indigo.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.indigo.70}",
        _dark: "{colors.indigo.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.indigo.10}",
          _dark: "{colors.indigo.100}",
        }
      }
    },
  }
}

const violet = {
  filled: {
    bg: {
      value: {
        base: "{colors.violet.70}",
        _dark: "{colors.violet.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.violet.60}",
          _dark: "{colors.violet.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.violet.10}",
        _dark: "{colors.violet.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.violet.70}",
        _dark: "{colors.violet.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.violet.20}",
          _dark: "{colors.violet.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.violet.70}",
        _dark: "{colors.violet.70}",
      }
    },
    border: {
      value: {
        base: "{colors.violet.40}",
        _dark: "{colors.violet.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.violet.10}",
          _dark: "{colors.violet.100}",
        }
      },
      border: {

        value: {
          base: "{colors.violet.50}",
          _dark: "{colors.violet.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.violet.70}",
        _dark: "{colors.violet.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.violet.10}",
          _dark: "{colors.violet.100}",
        }
      }
    },
  }
}

const purple = {
  filled: {
    bg: {
      value: {
        base: "{colors.purple.70}",
        _dark: "{colors.purple.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.purple.60}",
          _dark: "{colors.purple.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.purple.10}",
        _dark: "{colors.purple.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.purple.70}",
        _dark: "{colors.purple.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.purple.20}",
          _dark: "{colors.purple.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.purple.70}",
        _dark: "{colors.purple.70}",
      }
    },
    border: {
      value: {
        base: "{colors.purple.40}",
        _dark: "{colors.purple.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.purple.10}",
          _dark: "{colors.purple.100}",
        }
      },
      border: {

        value: {
          base: "{colors.purple.50}",
          _dark: "{colors.purple.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.purple.70}",
        _dark: "{colors.purple.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.purple.10}",
          _dark: "{colors.purple.100}",
        }
      }
    },
  }
}

const fuchsia = {
  filled: {
    bg: {
      value: {
        base: "{colors.fuchsia.70}",
        _dark: "{colors.fuchsia.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.fuchsia.60}",
          _dark: "{colors.fuchsia.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.fuchsia.10}",
        _dark: "{colors.fuchsia.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.fuchsia.70}",
        _dark: "{colors.fuchsia.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.fuchsia.20}",
          _dark: "{colors.fuchsia.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.fuchsia.70}",
        _dark: "{colors.fuchsia.70}",
      }
    },
    border: {
      value: {
        base: "{colors.fuchsia.40}",
        _dark: "{colors.fuchsia.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.fuchsia.10}",
          _dark: "{colors.fuchsia.100}",
        }
      },
      border: {

        value: {
          base: "{colors.fuchsia.50}",
          _dark: "{colors.fuchsia.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.fuchsia.70}",
        _dark: "{colors.fuchsia.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.fuchsia.10}",
          _dark: "{colors.fuchsia.100}",
        }
      }
    },
  }
}

const pink = {
  filled: {
    bg: {
      value: {
        base: "{colors.pink.70}",
        _dark: "{colors.pink.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.pink.60}",
          _dark: "{colors.pink.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.pink.10}",
        _dark: "{colors.pink.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.pink.70}",
        _dark: "{colors.pink.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.pink.20}",
          _dark: "{colors.pink.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.pink.70}",
        _dark: "{colors.pink.70}",
      }
    },
    border: {
      value: {
        base: "{colors.pink.40}",
        _dark: "{colors.pink.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.pink.10}",
          _dark: "{colors.pink.100}",
        }
      },
      border: {

        value: {
          base: "{colors.pink.50}",
          _dark: "{colors.pink.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.pink.70}",
        _dark: "{colors.pink.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.pink.10}",
          _dark: "{colors.pink.100}",
        }
      }
    },
  }
}

const rose = {
  filled: {
    bg: {
      value: {
        base: "{colors.rose.70}",
        _dark: "{colors.rose.70}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.rose.60}",
          _dark: "{colors.rose.60}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.rose.10}",
        _dark: "{colors.rose.100}",
      }
    },
    fg: {
      value: {
        base: "{colors.rose.70}",
        _dark: "{colors.rose.50}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.rose.20}",
          _dark: "{colors.rose.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.rose.70}",
        _dark: "{colors.rose.70}",
      }
    },
    border: {
      value: {
        base: "{colors.rose.40}",
        _dark: "{colors.rose.90}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.rose.10}",
          _dark: "{colors.rose.100}",
        }
      },
      border: {

        value: {
          base: "{colors.rose.50}",
          _dark: "{colors.rose.100}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.rose.70}",
        _dark: "{colors.rose.70}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.yellow.10}",
          _dark: "{colors.yellow.100}",
        }
      }
    },
  }
}

const slate = {
  filled: {
    bg: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.slate.10}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.slate.100}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.slate.95}",
          _dark: "{colors.slate.20}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.slate.20}",
        _dark: "{colors.slate.90}",
      }
    },
    fg: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.slate.30}",
          _dark: "{colors.slate.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.white}",
      }
    },
    border: {
      value: {
        base: "{colors.slate.30}",
        _dark: "{colors.slate.80}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.slate.10}",
          _dark: "{colors.slate.90}",
        }
      },
      border: {
        value: {
          base: "{colors.slate.40}",
          _dark: "{colors.slate.90}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.slate.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.slate.20}",
          _dark: "{colors.slate.90}",
        }
      }
    },
  }
}

const gray = {
  filled: {
    bg: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.10}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.gray.100}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.gray.95}",
          _dark: "{colors.gray.20}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.gray.20}",
        _dark: "{colors.gray.90}",
      }
    },
    fg: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.gray.30}",
          _dark: "{colors.gray.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.white}",
      }
    },
    border: {
      value: {
        base: "{colors.gray.30}",
        _dark: "{colors.gray.80}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.gray.10}",
          _dark: "{colors.gray.90}",
        }
      },
      border: {
        value: {
          base: "{colors.gray.40}",
          _dark: "{colors.gray.90}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.gray.20}",
          _dark: "{colors.gray.90}",
        }
      }
    },
  }
}

const zinc = {
  filled: {
    bg: {
      value: {
        base: "{colors.zinc.100}",
        _dark: "{colors.zinc.10}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.zinc.100}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.zinc.95}",
          _dark: "{colors.zinc.20}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.zinc.20}",
        _dark: "{colors.zinc.90}",
      }
    },
    fg: {
      value: {
        base: "{colors.zinc.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.zinc.30}",
          _dark: "{colors.zinc.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.zinc.100}",
        _dark: "{colors.white}",
      }
    },
    border: {
      value: {
        base: "{colors.zinc.30}",
        _dark: "{colors.zinc.80}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.zinc.10}",
          _dark: "{colors.zinc.90}",
        }
      },
      border: {
        value: {
          base: "{colors.zinc.40}",
          _dark: "{colors.zinc.90}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.zinc.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.zinc.20}",
          _dark: "{colors.zinc.90}",
        }
      }
    },
  }
}

const neutral = {
  filled: {
    bg: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.neutral.10}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.neutral.100}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.neutral.95}",
          _dark: "{colors.neutral.20}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.neutral.20}",
        _dark: "{colors.neutral.90}",
      }
    },
    fg: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.neutral.30}",
          _dark: "{colors.neutral.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.white}",
      }
    },
    border: {
      value: {
        base: "{colors.neutral.30}",
        _dark: "{colors.neutral.80}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.neutral.10}",
          _dark: "{colors.neutral.90}",
        }
      },
      border: {
        value: {
          base: "{colors.neutral.40}",
          _dark: "{colors.neutral.90}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.neutral.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.neutral.20}",
          _dark: "{colors.neutral.90}",
        }
      }
    },
  }
}

const stone = {
  filled: {
    bg: {
      value: {
        base: "{colors.stone.100}",
        _dark: "{colors.stone.10}",
      }
    },
    fg: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.stone.100}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.stone.95}",
          _dark: "{colors.stone.20}",
        }
      },
    }
  },

  soft: {
    bg: {
      value: {
        base: "{colors.stone.20}",
        _dark: "{colors.stone.90}",
      }
    },
    fg: {
      value: {
        base: "{colors.stone.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.stone.30}",
          _dark: "{colors.stone.95}",
        }
      }
    },
  },

  outlined: {
    fg: {
      value: {
        base: "{colors.stone.100}",
        _dark: "{colors.white}",
      }
    },
    border: {
      value: {
        base: "{colors.stone.30}",
        _dark: "{colors.stone.80}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.stone.10}",
          _dark: "{colors.stone.90}",
        }
      },
      border: {
        value: {
          base: "{colors.stone.40}",
          _dark: "{colors.stone.90}",
        }
      }
    },
  },

  ghost: {
    fg: {
      value: {
        base: "{colors.stone.100}",
        _dark: "{colors.white}",
      }
    },
    hover: {
      bg: {
        value: {
          base: "{colors.stone.20}",
          _dark: "{colors.stone.90}",
        }
      }
    },
  }
}

const colors = defineSemanticTokens.colors({
  bg,
  fg,
  link,
  border,
  accent,
  interaction,

  // tones
  red,
  orange,
  amber,
  yellow,
  lime,
  green,
  emerald,
  teal,
  cyan,
  sky,
  blue,
  indigo,
  violet,
  purple,
  fuchsia,
  pink,
  rose,
  slate,
  gray,
  zinc,
  neutral,
  stone,
});

const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light: "0px 1px 2px",
      _dark: "0px 1px 1px",
    },
  },
  sm: {
    value: {
      _light: "0px 2px 4px",
      _dark: "0px 2px 4px",
    },
  },
  md: {
    value: {
      _light: "0px 4px 8px",
      _dark: "0px 4px 8px",
    },
  },
  lg: {
    value: {
      _light: "0px 8px 16px",
      _dark: "0px 8px 16px",
    },
  },
  xl: {
    value: {
      _light: "0px 16px 24px",
      _dark: "0px 16px 24px",
    },
  },
  "2xl": {
    value: {
      _light: "0px 24px 40px",
      _dark: "0px 24px 40px",
    },
  },
  inner: {
    value: {
      _light: "inset 0 2px 4px 0",
      _dark: "inset 0 2px 4px 0",
    },
  },
  inset: {
    value: {
      _light: "inset 0 0 0 1px",
      _dark: "inset 0 0 0 1px",
    },
  },
});

export const semanticTokens = {
  colors,
  shadows,
};
