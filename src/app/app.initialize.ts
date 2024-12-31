import { APP_INITIALIZER } from '@angular/core';

/**
 * 应用程序设置类
 *
 * 该类用于存储应用程序的全局设置，包括应用程序名称和生产环境标志。
 */
export class AppSetting {
    /**
     * 应用程序名称
     *
     * 该静态属性存储应用程序的名称字符串。
     */
    static appName: string;
    /**
     * 是否正式环境
     *
     * 该静态属性表示应用程序是否运行在生产环境中。
     * 值为 `true` 表示生产环境，`false` 表示开发环境。
     */
    static production: boolean;
}

export function provideInitialize() {
    return {
        provide: APP_INITIALIZER,
        useFactory: () => () =>
            fetch(`assets/app.setting.json`)
                .then(result => result.json())
                .then(json => Object.assign(AppSetting, json)),
        multi: true,
    };
}
