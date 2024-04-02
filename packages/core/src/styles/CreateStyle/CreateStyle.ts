import { SwitchProps, TextStyle, ThemeInterface, ViewStyle } from "@/interfaces"
import ThemeDefaultData from "../ThemeDefaultData/ThemeDefaultData"

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T[P] extends object
        ? DeepPartial<T[P]>
        : T[P]
}

type DeepPartialTheme = DeepPartial<ThemeInterface>

const CreateStyle = (newTheme: DeepPartialTheme): ThemeInterface => {
  const _defaultTheme = ThemeDefaultData

  return {
    ..._defaultTheme,
    ...(newTheme && {
      colors: {
        darken: {
          main: {
            ..._defaultTheme.colors.darken.main,
            ...(newTheme.colors?.darken?.main || {}),
          },
          text: {
            ..._defaultTheme.colors.darken.text,
            ...(newTheme.colors?.darken?.text || {}),
          },
        },
        lighten: {
          main: {
            ..._defaultTheme.colors.lighten.main,
            ...(newTheme.colors?.lighten?.main || {}),
          },
          text: {
            ..._defaultTheme.colors.lighten.text,
            ...(newTheme.colors?.lighten?.text || {}),
          },
        },
      },
      components: {
        Text: {
          defaultVariant:
            (newTheme.components?.Text?.defaultVariant as string) ??
            _defaultTheme.components.Text.defaultVariant,
          variants: {
            ..._defaultTheme.components.Text.variants,
            ...((newTheme.components?.Text?.variants as Record<
              string,
              TextStyle
            >) || {}),
          },
        },
        Box: {
          defaultVariant:
            (newTheme.components?.Box?.defaultVariant as string) ??
            _defaultTheme.components.Box.defaultVariant,
          variants: {
            ..._defaultTheme.components.Box.variants,
            ...((newTheme.components?.Box?.variants as Record<
              string,
              ViewStyle
            >) || {}),
          },
        },
        Button: {
          defaultVariant:
            (newTheme.components?.Button?.defaultVariant as string) ??
            _defaultTheme.components.Button.defaultVariant,
          variants: {
            ..._defaultTheme.components.Button.variants,
            ...((newTheme.components?.Button?.variants as Record<
              string,
              {
                disabledBox?: ViewStyle | undefined
                gap?: number | undefined
                box?: ViewStyle | undefined
                label?: TextStyle | undefined
                description?: TextStyle | undefined
              }
            >) || {}),
          },
        },
        Input: {
          defaultVariant:
            (newTheme.components?.Input?.defaultVariant as string) ??
            _defaultTheme.components.Input.defaultVariant,
          variants: {
            ..._defaultTheme.components.Input.variants,
            ...((newTheme.components?.Input?.variants as Record<
              string,
              {
                label?: TextStyle | undefined
                input?: TextStyle | undefined
                layout?: ViewStyle | undefined
                errorLayout?: ViewStyle | undefined
                description?: TextStyle | undefined
                error?: TextStyle | undefined
              }
            >) || {}),
          },
        },
        Switch: {
          defaultVariant:
            (newTheme.components?.Switch?.defaultVariant as string) ??
            _defaultTheme.components.Switch.defaultVariant,
          variants: {
            ..._defaultTheme.components.Switch.variants,
            ...((newTheme.components?.Switch?.variants as Record<
              string,
              SwitchProps
            >) || {}),
          },
        },
        BottomSheet: {
          defaultVariant:
            (newTheme.components?.BottomSheet?.defaultVariant as string) ??
            _defaultTheme.components.BottomSheet.defaultVariant,
          variants: {
            ..._defaultTheme.components.BottomSheet.variants,
            ...((newTheme.components?.BottomSheet?.variants as Record<
              string,
              {
                style?: ViewStyle | undefined
                dragHandleStyle?: ViewStyle | undefined
              }
            >) || {}),
          },
        },
        Select: {
          defaultVariant:
            (newTheme.components?.Select?.defaultVariant as string) ??
            _defaultTheme.components.Select.defaultVariant,
          variants: {
            ..._defaultTheme.components.Select.variants,
            ...((newTheme.components?.Select?.variants as Record<
              string,
              {
                itemStyle?: ViewStyle | undefined
                itemActiveStyle?: ViewStyle | undefined
                itemTextStyle?: TextStyle | undefined
                itemDescriptionStyle?: TextStyle | undefined
                itemLeftStyle?: ViewStyle | undefined
              }
            >) || {}),
          },
        },
      },
    }),
  }
}

export default CreateStyle