// startup
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// home content
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.activity-stream.showWeather", false);

// misc
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.newtabpage.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
user_pref("dom.security.https_only_mode", true);
user_pref("browser.download.useDownloadDir", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);

// search
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.pocket", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.weather", false);

// Mozilla
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.inline-options.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("browser.preferences.experimental", false);

// DNS
user_pref("network.trr.custom_uri", "https://dns11.quad9.net/dns-query");
user_pref("network.trr.uri", "https://dns11.quad9.net/dns-query");
user_pref("network.trr.mode", "3"); // change 3 to 5 for default DNS resolver
