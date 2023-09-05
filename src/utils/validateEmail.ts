/**
 * validat an email addres if it's legitimate
 * @param email email adderess that needs to be validated
 * @returns if the emaile addres is legitimate
 */
export default function validateEmail(email: string): boolean {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}