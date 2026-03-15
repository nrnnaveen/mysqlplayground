# mysqlplayground APK Build Guide

## Quick Start (Mobile Users)

### Download Pre-built APK
1. Go to GitHub Actions: https://github.com/nrnnaveen/mysqlplayground/actions
2. Find latest "Android Build" workflow
3. Download APK from artifacts

### Install on Phone
1. Download APK to phone
2. Open file manager → Downloads
3. Tap APK file → Install
4. Open app → SQL Practice loads! ✅

## For Developers (Computer)

### Prerequisites
- Node.js: https://nodejs.org/
- Cordova CLI: `npm install -g cordova`
- Android SDK (for Android builds)

### Setup
```bash
git clone https://github.com/nrnnaveen/mysqlplayground.git
cd mysqlplayground
npm install
cordova platform add android
```

### Build Debug APK
```bash
cordova build android --debug
# APK at: platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### Build Release APK
```bash
cordova build android --release
# APK at: platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
```

### Install on Device
```bash
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

## Updating Backend URL

If Railway URL changes:
1. Edit `www/index.html`
2. Update the URL in the `cordova.InAppBrowser.open()` call
3. Also update `BACKEND_URL` in your `.env` (copy from `.env.example`)
4. Rebuild APK

## Troubleshooting

### App won't open
- Check Railway URL is accessible: Visit in browser
- Verify InAppBrowser plugin is installed: `cordova plugins list`

### APK won't install
- Uninstall old version first
- Clear app cache: Settings → Apps → SQL Practice → Storage → Clear Cache
- Retry installation

### Stuck on loading screen
- Make sure Railway backend is running
- Check internet connection
- Try hard refresh in app

## Support
For issues, check: https://github.com/nrnnaveen/mysqlplayground/issues
