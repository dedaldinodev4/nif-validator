import { NIF_PATTERN } from "../helpers"

const isNIF = (value: string): boolean => {
  return NIF_PATTERN.test(value) ?? false
}

export default isNIF;
