import { BI_PATTERN } from "../helpers"

const isBI = (value: string): boolean => {
  return BI_PATTERN.test(value) ?? false
}

export default isBI;
