/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Primary Action - The primary action to be performed on the selected message. */
  "primaryAction"?: "seeMessage" | "openMessage",
  /** Save Attachments To - Directory to save mail attachments. */
  "saveDirectory"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `check-for-mail` command */
  export type CheckForMail = ExtensionPreferences & {}
  /** Preferences accessible in the `new-message` command */
  export type NewMessage = ExtensionPreferences & {}
  /** Preferences accessible in the `see-recent-mail` command */
  export type SeeRecentMail = ExtensionPreferences & {}
  /** Preferences accessible in the `see-important-mail` command */
  export type SeeImportantMail = ExtensionPreferences & {}
  /** Preferences accessible in the `see-mail-accounts` command */
  export type SeeMailAccounts = ExtensionPreferences & {}
  /** Preferences accessible in the `share-with-mail` command */
  export type ShareWithMail = ExtensionPreferences & {}
  /** Preferences accessible in the `background-refresh` command */
  export type BackgroundRefresh = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `check-for-mail` command */
  export type CheckForMail = {}
  /** Arguments passed to the `new-message` command */
  export type NewMessage = {}
  /** Arguments passed to the `see-recent-mail` command */
  export type SeeRecentMail = {}
  /** Arguments passed to the `see-important-mail` command */
  export type SeeImportantMail = {}
  /** Arguments passed to the `see-mail-accounts` command */
  export type SeeMailAccounts = {}
  /** Arguments passed to the `share-with-mail` command */
  export type ShareWithMail = {}
  /** Arguments passed to the `background-refresh` command */
  export type BackgroundRefresh = {}
}
