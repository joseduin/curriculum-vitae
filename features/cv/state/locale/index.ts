import { en } from "./en";
import { es } from "./es";

export type Locate = "es" | "en";
const dictionary = { en, es };

class Translation {
  private locale: Locate = "es";
  private translations: any = dictionary["es"];

  key(key: string): string {
    return this.translations[key];
  }

  setLanguage(locale: Locate): void {
    this.locale = locale;
    this.translations = dictionary[locale];
  }

  getLanguage(): Locate {
    return this.locale;
  }
}

export default new Translation();
