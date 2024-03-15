import ThemeInterface from "@/interfaces/ThemeInterface/ThemeInterface"

const ThemeDefaultData: ThemeInterface = {
  colors: {
    darken: {
      main: {
        background: "#000",
        primary: "blue",
        secondary: "#666",
        muted: "#666",
      },
      text: {
        global: "#FFF",
        emphasis: "blue",
        inverse: "purple",
      },
    },
    lighten: {
      main: {
        background: "#FFF",
        primary: "blue",
        secondary: "#666",
        muted: "#666",
      },
      text: {
        global: "#000",
        emphasis: "blue",
        inverse: "red",
      },
    },
  },
  components: {
    Text: {
      defaultVariant: "global",
      variants: {
        meta: {
          color: "emphasis",
          fontStyle: "italic",
          fontSize: 10,
        },
        button: {
          color: "global",
          fontSize: 14,
        },
        global: {
          color: "global",
          fontSize: 16,
        },
      },
    },
    Box: {
      defaultVariant: "global",
      variants: {
        global: {
          padding: 10,
        },
        muted: {
          backgroundColor: "primary",
        },
      },
    },
    Button: {
      defaultVariant: "default",
      variants: {
        default: {
          box: {
            backgroundColor: "primary",
            paddingHorizontal: 20,
          },
          label: {
            fontSize: 14,
            color: "inverse",
          },
        },
      },
    },
  },
}

export default ThemeDefaultData
