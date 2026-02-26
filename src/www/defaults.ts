import { AndroidAnimation, AndroidSystemBrowserOptions, AndroidViewStyle, DismissStyle, SystemBrowserOptions, ToolbarPosition, iOSAnimation, iOSSystemBrowserOptions, iOSViewStyle } from "./definitions"

export const DefaultiOSSystemBrowserOptions: iOSSystemBrowserOptions = {
    closeButtonText: DismissStyle.DONE,
    viewStyle: iOSViewStyle.FULL_SCREEN,
    animationEffect: iOSAnimation.COVER_VERTICAL,
    enableBarsCollapsing: true,
    enableReadersMode: false
}


export const DefaultAndroidSystemBrowserOptions: AndroidSystemBrowserOptions = {
    showTitle: false,
    hideToolbarOnScroll: false,
    viewStyle: AndroidViewStyle.BOTTOM_SHEET,

    startAnimation: AndroidAnimation.FADE_IN,
    exitAnimation: AndroidAnimation.FADE_OUT
}

export const DefaultSystemBrowserOptions: SystemBrowserOptions = {
    android: DefaultAndroidSystemBrowserOptions,
    iOS: DefaultiOSSystemBrowserOptions
}
