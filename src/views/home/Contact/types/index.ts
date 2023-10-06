export interface IItem {
  title: string;
  required: boolean;
  text: string;
  verificationPassed: boolean | undefined;
  inputType: "input" | "textarea";
  checkFunction: Function;
}

export type itemNames = "name" | "subject" | "email" | "inquiry";
