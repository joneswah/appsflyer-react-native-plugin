"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const config_plugins_1 = require("@expo/config-plugins");
const pkg = require('react-native-appsflyer/package.json');

const withAppsFlyer = (config, {userTrackingPermission}) => {
    if (!config.ios)
        config.ios = {};
    if (!config.ios.infoPlist)
        config.ios.infoPlist = {};
    if (userTrackingPermission || config.ios.infoPlist.NSUserTrackingUsageDescription) {
        config.ios.infoPlist.NSUserTrackingUsageDescription =
            userTrackingPermission || config.ios.infoPlist.NSUserTrackingUsageDescription;
    }
    return config_plugins_1.AndroidConfig.Permissions.withPermissions(config, ['android.permission.INTERNET', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.ACCESS_WIFI_STATE']);
};
exports.default = config_plugins_1.createRunOncePlugin(withAppsFlyer, pkg.name, pkg.version);
