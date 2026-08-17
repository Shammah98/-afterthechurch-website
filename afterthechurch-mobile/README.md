# Afterthechurch mobile app

A React Native + Expo mobile client for Afterthechurch. It shares the existing website's Supabase project and moderation workflow rather than creating a second survivor database.

## Included in v1

- Home / cognitive-safety landing screen
- Moderated survivor story library
- Story details with content notes
- Private on-device saved stories
- Written story submission with four privacy modes
- Existing moderation queue (nothing publishes automatically)
- Support, safety, privacy and FAQ links
- iOS and Android Expo/EAS configuration

## Architecture

- Mobile UI: Expo SDK 57 + Expo Router
- Auth: private anonymous Supabase session for submissions
- Data writes: existing `afterthechurch.com/api/stories` server route
- Public story reads: `/api/mobile/stories` and `/api/mobile/stories/[id]`
- Database/storage: existing Supabase project
- Moderation/admin: existing website admin tools

The Supabase publishable key in `lib/config.ts` is intentionally a client-safe key. Service-role credentials never enter the mobile app.

## Run locally

```bash
cd afterthechurch-mobile
npm install
npm start
```

## Store builds

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform ios --profile production
npx eas-cli@latest build --platform android --profile production
```

Before first store submission, add final app icon/splash artwork and connect the Expo project to the organisation's Apple Developer and Google Play accounts.
