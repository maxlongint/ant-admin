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

/**
 * 初始化应用程序
 *
 * 该函数通过 fetch API 从指定路径加载应用程序的设置，并将其应用于 AppSetting 类
 * @param path 可选参数，指定应用程序设置的路径
 */
function initializeApp() {
    const url = 'assets/app.setting.json';
    return fetch(url)
        .then(result => result.json())
        .then(json => Object.assign(AppSetting, json));
}

/**
 * 提供应用程序初始化的配置
 *
 * 该函数用于返回一个配置对象，该对象用于 Angular 的 APP_INITIALIZER 令牌通过 useFactory 属性指定一个工厂函数
 * 这个工厂函数由 Angular 在应用程序启动时调用，用于执行应用程序的初始化逻辑
 *
 * @returns 返回一个包含提供者配置的对象
 *          - provide: 指定提供者的令牌，这里是 APP_INITIALIZER
 *          - useFactory: 使用指定的工厂函数，这里是 initializeApp
 *          - multi: 表示可以有多个提供者对应同一个令牌
 */
export function provideInitialize() {
    return { provide: APP_INITIALIZER, useFactory: () => initializeApp, multi: true };
}
