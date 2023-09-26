/**
 * Validate an email address using a regular expression.
 * @param email The email address to be validated.
 * @returns A boolean indicating whether the email address is valid.
 */
export default function validateEmail(email: string): boolean {
    // Use a regular expression to check if the email address matches the expected pattern.
    // The pattern ensures that the email contains one or more word characters (\w),
    // followed by an optional dot (.) or hyphen (-) and more word characters,
    // an "@" symbol, followed by more word characters, a dot, and 2 to 3 letters (the domain extension).
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}