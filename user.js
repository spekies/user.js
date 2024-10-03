// startup

/*
about:config warning
*/
user_pref("browser.aboutConfig.showWarning", false);
/*
welcome screen
*/
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
/*
tutorial
*/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Mozilla
/*
disables sync, pocket, and more from Mozilla in about:preferences
*/
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("extensions.pocket.enabled", false);
/*
addons telem in about:addons
*/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.inline-options.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/*
data collecting in about:preferences
*/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
/*
AI features in about:preferences
*/
user_pref("browser.preferences.experimental", false);
