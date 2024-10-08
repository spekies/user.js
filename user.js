// startup
user_pref("browser.aboutConfig.showWarning", false); // about:config warning
user_pref("browser.aboutwelcome.enabled", false); // welcome screen
user_pref("browser.startup.homepage_override.mstone", "ignore"); // welcome screen after update
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // tutorial
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // tutorial
// Mozilla
user_pref("browser.preferences.moreFromMozilla", false); // disables more from Mozilla in about:preferences
user_pref("identity.fxaccounts.enabled", false); // disables sync
user_pref("extensions.pocket.enabled", false); // disables pocket
user_pref("extensions.getAddons.showPane", false); // addons telem in about:addons
user_pref("extensions.htmlaboutaddons.inline-options.enabled", false); // addons telem in about:addons
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // addons telem in about:addons
user_pref("app.shield.optoutstudies.enabled", false); // data collecting in about:preferences
user_pref("datareporting.healthreport.uploadEnabled", false); // data collecting in about:preferences
user_pref("browser.preferences.experimental", false); // AI features in about:preferences
// about:preferences#home
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enabled", false);
// about:preferences#search
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
// about:preferences#privacy
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("signon.rememberSignons", false);  
user_pref("signon.autofillForms", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("dom.security.https_only_mode", true);
