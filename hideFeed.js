// Function to remove the feed, news section, and the feed follows module
function removeElements() {
  // Überprüfe, ob der Titel Benachrichtigungen enthält und entferne sie
  if (/\(\d+\)/.test(document.title)) {
    document.title = document.title.replace(/\s*\(\d+\)/g, "");
  }
  // Remove notifications tab
  const notifyClock = document.querySelector(
    '.global-nav__nav[aria-label="Primary Navigation"] ul.global-nav__primary-items li:nth-child(5)'
  );
  if (notifyClock) {
    notifyClock.style.visibility = "hidden";
  }

  // Remove Try Premium for CHF0 on navigation
  const tryNavPremium = document.querySelector(".premium-upsell-link");
  if (tryNavPremium) {
    tryNavPremium.style.visibility = "hidden";
  }

  // Remove red button over home house button
  const redButtonHouse = document.querySelector(
    ".notification-badge.notification-badge--show "
  );
  if (redButtonHouse) {
    redButtonHouse.style.display = "none";
  }

  // If user tries to cheat and tries to get access to notifications through URL
  if (
    window.location.hostname === "www.linkedin.com" &&
    window.location.pathname.startsWith("/notifications")
  ) {
    window.location.href = "https://www.linkedin.com/";
  }

  // Remove elements inside the feed
  if (window.location.href.includes("linkedin.com/feed/")) {
    // Remove sorting part
    const filterPart = document.querySelector(
      '[id^="ember"].mb2.artdeco-dropdown.artdeco-dropdown--placement-bottom.artdeco-dropdown--justification-right.ember-view'
    );
    if (filterPart) {
      filterPart.remove();
    }

    // Remove the main feed element
    const mainElement = document.querySelector(
      ".scaffold-finite-scroll.scaffold-finite-scroll--infinite"
    );
    if (mainElement) {
      mainElement.remove();
    }

    // Remove the element with the class "feed-follows-module"
    const addtoFeed = document.querySelector(".feed-follows-module");
    if (addtoFeed) {
      addtoFeed.remove();
    }

    // Remove the news section
    const newsElement = document.getElementById("feed-news-module");
    if (newsElement) {
      newsElement.remove();
    }

    // Remove new posts button
    const newPosts = document.querySelector(".feed-new-update-pill");
    if (newPosts) {
      newPosts.remove();
    }

    // Remote the footer part
    const footer = document.querySelector(".scaffold-layout__aside");
    if (footer) {
      footer.remove();
    }

    // Remove Try Premium Button in feed on the left side of profile section
    const tryFeedPremium = document.querySelector(
      ".app-aware-link.link-without-visited-state.feed-identity-module__anchored-widget.feed-identity-module__anchored-widget--premium-upsell.t-12.t-black.t-bold.link-without-hover-state.text-align-left"
    );
    if (tryFeedPremium) {
      tryFeedPremium.remove();
    }
  }
  // Remove elements inside "mynetwork"
  else if (
    window.location.href.startsWith("https://www.linkedin.com/mynetwork/grow")
  ) {
    // Remove related connection to just accepted connection
    const relatedConnect = document.querySelector(
      "ul.artdeco-card.mb4.overflow-hidden"
    );
    if (relatedConnect) {
      relatedConnect.remove();
    }

    // Remove connection recommendations
    const networkGrow = document.querySelector(
      ".scaffold-finite-scroll__content"
    );
    if (networkGrow) {
      networkGrow.remove();
    }

    // Remove suggested people after connecting with someone
    const connSomeone = document.querySelector('.mn-suggester.artdeco-card');
    if(connSomeone){
      connSomeone.remove();
    }

    // Remove show more button
    const showMore = document.querySelector(
      '[data-launchpad-scroll-anchor="pymk"]'
    );
    if (showMore) {
      showMore.remove();
    }

    const button = document.querySelector(
      ".scaffold-finite-scroll.scaffold-finite-scroll--finite"
    );
    if (button) {
      button.remove();
    }
  }
  // Remove elements inside the profile part
  else if (window.location.href.startsWith("https://www.linkedin.com/in")) {
    // To remove everything from the right sight except for profile language and public profile & url
    // Select the aside element on the right
    const asideElement = document.querySelector("aside.scaffold-layout__aside");
    if (asideElement) {
      // Remove profile recommendations
      const profileCard = asideElement.querySelector(
        "section.artdeco-card.pv-profile-card.break-words.mt2[data-view-name='profile-card']"
      );

      // Remove the section element if it exists
      if (profileCard) {
        profileCard.remove();
      }
    }
  } else if (window.location.href.includes("linkedin.com/groups/")) {
    const recommendedGroups = document.querySelector(
      'aside.scaffold-layout__aside[aria-label="Groups you might be interested in"]'
    );
    if (recommendedGroups) {
      recommendedGroups.remove();
    }
  }
}

// Function to observe changes in the DOM
const observer = new MutationObserver(removeElements);
observer.observe(document.body, { childList: true, subtree: true });

// Immediately attempt to remove elements on script run
removeElements();
