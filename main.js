function openMenu(){
    document.getElementById('menu-container').style.display = 'flex';
    document.getElementById('menu-button').style.display = 'none';
}

function closeMenu(){
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('menu-button').style.display = 'flex';
}

function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'iOS';
    }
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    return 'unknown';
}

const os = getMobileOperatingSystem();

const appDownloadUrls = {
    moovit: {
        ios: "https://apps.apple.com/us/app/moovit-all-transit-options/id498477945",
        android: "https://play.google.com/store/apps/details?id=com.tranzmate&hl=en",
    },
    gett: {
        ios: "https://apps.apple.com/us/app/gett-ground-transportation/id449655162",
        android: "https://play.google.com/store/apps/details?id=com.gettaxi.android&hl=en",
    },
    waze: {
        ios: "https://apps.apple.com/us/app/waze-navigation-live-traffic/id323229106",
        android: "https://play.google.com/store/apps/details?id=com.waze&hl=en",
    },
    googleMaps: {
        ios: "https://apps.apple.com/us/app/google-maps/id585027354",
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=en",
    },
    bit: {
        ios: "https://apps.apple.com/us/app/bit-%D7%91%D7%99%D7%98/id1182007739", 
        android: "https://play.google.com/store/apps/details?id=com.bnhp.payments.paymentsapp&hl=en",
    },
    duolingo: {
        ios: "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128", 
        android: "https://play.google.com/store/apps/details?id=com.duolingo&hl=en",
    },
    googleTranslate: {
        ios: "https://apps.apple.com/us/app/google-translate/id414706506", 
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate&hl=en",
    },
    whatsapp: {
        ios: "https://apps.apple.com/us/app/whatsapp-messenger/id310633997", 
        android: "https://play.google.com/store/apps/details?id=com.whatsapp&hl=en",
    },
    telegram: {
        ios: "https://apps.apple.com/us/app/telegram-messenger/id686449807", 
        android: "https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en",
    },
    tzofar: {
        ios: "https://apps.apple.com/us/app/tzofar-red-alert/id1480129320", 
        android: "https://play.google.com/store/apps/details?id=com.redalert.tzevaadom",
    },
    redAlert: {
        ios: "https://apps.apple.com/us/app/red-alert-israel/id873642097", 
        android: "https://play.google.com/store/apps/details?id=com.red.alert",
    },
    linkedIn: {
        ios: "https://apps.apple.com/us/app/linkedin-network-job-finder/id288429040", 
        android: "https://play.google.com/store/apps/details?id=com.linkedin.android",
    },
    indeed: {
        ios: "https://apps.apple.com/us/app/indeed-job-search/id309735670", 
        android: "https://play.google.com/store/apps/details?id=com.indeed.android.jobsearch",
    },
    glassdoor: {
        ios: "https://apps.apple.com/us/app/glassdoor-jobs-community/id589698942", 
        android: "https://play.google.com/store/apps/details?id=com.glassdoor.app",
    },
}

function clickAppDownload(appName){
    if(os === 'Android'){
        window.open(appDownloadUrls[`${appName}`].android)
    } else if(os === 'iOS'){
        window.open(appDownloadUrls[`${appName}`].ios)
    } else window.open(appDownloadUrls[`${appName}`].android)
}

function sendEmail(event){
    event.preventDefault()
    console.log('email: ', document.getElementById('email-input').value)
    console.log('message: ', document.getElementById('message-input').value)
}