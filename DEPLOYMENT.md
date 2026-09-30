# Deployment: from this repo to the App Store / Play Store

## Already done

- Native Android (Gradle) and iOS (Xcode) projects generated and committed.
- CI builds an unsigned Android debug APK and an unsigned iOS Simulator build on every push, so
  breakage is caught immediately.
- An EC2 instance (`evrecharge-mobile-dist`) hosts the latest debug APK for direct install/testing
  at `https://evrechargeindia.com/mobile-download/` -- no store review needed for this, useful for
  trying the app on a real Android device right now.
- The backend's CORS allow-list includes the origins Capacitor's webview sends
  (`capacitor://localhost`, `https://localhost`), so API calls from the packaged app work the same
  as from the web app.

## What only you can do (and why)

These steps require a paid, individually-verified developer account and legal agreement acceptance
that has to be tied to a real person or business -- no amount of automation gets around that by
design (it's the entire point of the app stores' review gate).

### Android -- Google Play

1. Create a [Google Play Console](https://play.google.com/console) account (one-time $25 fee,
   identity verification).
2. Generate a release signing key (`keytool -genkey -v -keystore evrecharge-release.keystore
   -alias evrecharge -keyalg RSA -keysize 2048 -validity 10000`) and **keep it safe** -- losing it
   means you can never update the app again under the same listing.
3. Add the keystore (base64-encoded) and its passwords as GitHub Actions secrets
   (`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`,
   `ANDROID_KEY_PASSWORD`). Tell me once these exist and I'll extend `build-android.yml` to produce
   a signed `.aab` (Android App Bundle) instead of just the debug `.apk`.
2. Create the app listing in Play Console (screenshots, description, privacy policy URL, content
   rating questionnaire, data-safety form).
4. Upload the signed `.aab` and submit for review (usually a few hours to a few days).

### iOS -- Apple App Store

1. Enroll in the [Apple Developer Program](https://developer.apple.com/programs/) ($99/year,
   identity/business verification).
2. In App Store Connect, register the app (bundle id `com.evrecharge.india`, matching
   `capacitor.config.ts`) and create a signing certificate + provisioning profile (via Xcode, once
   signed into your Apple ID there, or via `fastlane match`).
3. Add the certificate/profile as GitHub Actions secrets (or build and archive locally in Xcode --
   Apple's tooling for this step is macOS/Xcode-only regardless of CI). Tell me once you have these
   and I'll extend `build-ios.yml` to produce a signed, uploadable `.ipa`.
4. Fill in the App Store listing (screenshots, description, privacy policy URL, App Privacy
   questionnaire, age rating).
5. Upload the build via Xcode Organizer or `xcodebuild -exportArchive`, then submit for review
   (typically 1-3 days).

## Once you have accounts and signing credentials

Come back and I can:
- Wire the signing secrets into CI so both workflows produce store-ready signed builds automatically
  on every push.
- Fill in the store listing metadata files (`fastlane` `Deliverfile`/`Fastfile` or Play Console CSV)
  from the same copy already used on the web app, so you mostly just need to click "submit" in each
  console.
- Add branded app icons and a splash screen (currently using Capacitor's placeholder icons).
